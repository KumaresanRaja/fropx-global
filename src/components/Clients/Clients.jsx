import {
  RiMicrosoftFill,
  RiAmazonFill,
  RiGoogleFill,
  RiMetaFill,
  RiSlackFill,
  RiDropboxFill,
  RiShoppingBag2Fill,
  RiLinkedinFill,
} from 'react-icons/ri';

import './Clients.scss';

const LOGOS = [
  {
    name: 'Microsoft',
    icon: <RiMicrosoftFill size={20} />,
  },
  {
    name: 'Amazon',
    icon: <RiAmazonFill size={20} />,
  },
  {
    name: 'Google',
    icon: <RiGoogleFill size={20} />,
  },
  {
    name: 'Meta',
    icon: <RiMetaFill size={20} />,
  },
  {
    name: 'Slack',
    icon: <RiSlackFill size={20} />,
  },
  {
    name: 'Dropbox',
    icon: <RiDropboxFill size={20} />,
  },
  {
    name: 'Shopify',
    icon: <RiShoppingBag2Fill size={20} />,
  },
  {
    name: 'LinkedIn',
    icon: <RiLinkedinFill size={20} />,
  },
];

// Duplicate for seamless marquee loop
const CLIENT_LOGOS = [...LOGOS, ...LOGOS];

export default function Clients() {
  return (
    <section className="clients-section">

      <div className="clients-label">
        Trusted by leading companies worldwide
      </div>

      <div className="clients-slider-wrapper">
        <div className="clients-slider-track">

          {CLIENT_LOGOS.map((logo, index) => (
            <div
              className="clients-logo-item"
              key={`${logo.name}-${index}`}
            >
              {logo.icon}
              {logo.name}
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}