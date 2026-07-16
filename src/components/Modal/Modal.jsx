import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import './Modal.scss';

/**
 * Reusable Modal — AntD style
 *
 * Props:
 *  open         boolean
 *  onClose      () => void
 *  title        ReactNode
 *  width        number | string  (default 520)
 *  footer       ReactNode | null  (null = no footer bar)
 *  closable     boolean (default true)
 *  maskClosable boolean (default true)
 *  children     ReactNode
 */
export default function Modal({
  open,
  onClose,
  title,
  width = 520,
  footer,
  closable = true,
  maskClosable = true,
  children,
}) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === 'Escape' && closable) onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, closable, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="modal-overlay"
      ref={overlayRef}
      onClick={(e) => { if (maskClosable && e.target === overlayRef.current) onClose(); }}
    >
      <div className="modal-wrap" style={{ width }}>
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          {closable && (
            <button className="modal-close-btn" onClick={onClose} aria-label="Close">
              <X size={16} />
            </button>
          )}
        </div>

        <div className="modal-body">{children}</div>

        {footer !== null && footer !== undefined && (
          <div className="modal-footer">{footer}</div>
        )}
      </div>
    </div>
  );
}
