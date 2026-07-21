import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import './NotFound.scss';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="nf-page">
      <div className="nf-content">
        <div className="nf-code">404</div>
        <h1 className="nf-title">Page not found</h1>
        <p className="nf-text">The page you're looking for doesn't exist or has been moved.</p>
        <div className="nf-actions">
          <button className="nf-btn-primary" onClick={() => navigate('/')}>
            <Home size={15} /> Go Home
          </button>
          <button className="nf-btn-outline" onClick={() => navigate(-1)}>
            <ArrowLeft size={15} /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
