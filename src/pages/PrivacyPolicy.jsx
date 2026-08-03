import './PrivacyPolicy.scss';

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We may collect personal information such as your name, email address, phone number, company name, project details, and any information you voluntarily provide when contacting us or requesting our services. We may also automatically collect technical information including your IP address, browser type, device information, pages visited, and usage statistics to improve our website and services.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "Your information is used to respond to inquiries, provide our software development and consulting services, improve website performance, communicate important updates, prepare project proposals, maintain security, and comply with applicable legal requirements.",
  },
  {
    title: "3. Cookies & Analytics",
    content:
      "Our website may use cookies and analytics tools to understand visitor behavior, improve user experience, measure website performance, and remember your preferences. You can disable cookies through your browser settings at any time.",
  },
  {
    title: "4. Information Sharing",
    content:
      "FROPX GlobalTech does not sell or rent your personal information. We may share information only with trusted partners involved in delivering our services, when legally required, or to protect our legal rights and business operations.",
  },
  {
    title: "5. Data Security",
    content:
      "We implement industry-standard administrative, technical, and organizational security measures to safeguard your information against unauthorized access, alteration, disclosure, or destruction. While no system is completely secure, we continuously improve our security practices.",
  },
  {
    title: "6. Data Retention",
    content:
      "We retain your personal information only for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Data that is no longer required is securely deleted or anonymized.",
  },
  {
    title: "7. Third-Party Services",
    content:
      "Our website may contain links to third-party websites or integrate external services. We are not responsible for the privacy practices or content of these external platforms and encourage users to review their respective privacy policies.",
  },
  {
    title: "8. Your Rights",
    content:
      "Depending on applicable laws, you may have the right to access, update, correct, or request deletion of your personal information. You may also object to certain processing activities or withdraw consent where applicable.",
  },
  {
    title: "9. Policy Updates",
    content:
      "We may update this Privacy Policy periodically to reflect changes in our services, technologies, or legal obligations. The latest version will always be available on this page with the updated revision date.",
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="privacy">
      <div className="privacy-container">
        <div className="privacy-hero">
          <span className="privacy-badge">Legal Information</span>

          <h1>Privacy Policy</h1>

          <p>
            At <strong>FROPX GlobalTech</strong>, protecting your privacy is one
            of our highest priorities. This Privacy Policy explains how we
            collect, use, store, and protect your personal information whenever
            you interact with our website or services.
          </p>

          <div className="privacy-date">
            Last Updated: <strong>August 2, 2026</strong>
          </div>
        </div>

        <div className="privacy-grid">
          {sections.map((item, index) => (
            <div className="privacy-card" key={index}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          ))}
        </div>

        <div className="privacy-contact">
          <h2>Contact Us</h2>

          <p>
            If you have any questions regarding this Privacy Policy or how we
            handle your personal information, please contact us.
          </p>

          <div className="contact-box">
            <p>
              <strong>FROPX GlobalTech</strong>
            </p>

            <p>Email: contact@fropxglobal.com</p>

            <p>
              We are committed to protecting your privacy and responding to your
              requests promptly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}