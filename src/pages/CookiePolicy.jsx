import "./CookiePolicy.scss";

const sections = [
  {
    title: "1. What Are Cookies?",
    content:
      "Cookies are small text files stored on your device when you visit our website. They help us recognize your browser, remember your preferences, and improve your overall browsing experience.",
  },
  {
    title: "2. How We Use Cookies",
    content:
      "FROPX GlobalTech uses cookies to improve website functionality, analyze website traffic, remember user preferences, enhance security, and optimize the performance of our digital services.",
  },
  {
    title: "3. Types of Cookies We Use",
    content:
      "We may use essential cookies for website functionality, performance cookies to understand visitor interactions, analytics cookies to measure website usage, and preference cookies to remember your settings and choices.",
  },
  {
    title: "4. Third-Party Cookies",
    content:
      "Some cookies may be placed by trusted third-party services such as analytics providers or embedded content. These third parties maintain their own privacy and cookie policies, which we encourage you to review.",
  },
  {
    title: "5. Managing Cookies",
    content:
      "Most web browsers allow you to manage or disable cookies through their settings. Please note that disabling certain cookies may affect the functionality and performance of our website.",
  },
  {
    title: "6. Data Protection",
    content:
      "Information collected through cookies is handled securely and in accordance with our Privacy Policy. We do not use cookies to collect sensitive personal information without your consent.",
  },
  {
    title: "7. Updates to This Cookie Policy",
    content:
      "We may update this Cookie Policy periodically to reflect changes in technology, legal requirements, or our business practices. The latest version will always be available on this page.",
  },
];

export default function CookiePolicy() {
  return (
    <section className="cookie">
      <div className="cookie-container">
        <div className="cookie-hero">
          <span className="cookie-badge">Legal Information</span>

          <h1>Cookie Policy</h1>

          <p>
            This Cookie Policy explains how <strong>FROPX GlobalTech</strong>
            uses cookies and similar technologies to improve your browsing
            experience, enhance website performance, and provide secure digital
            services.
          </p>

          <div className="cookie-date">
            Effective Date: <strong>August 2, 2026</strong>
          </div>
        </div>

        <div className="cookie-grid">
          {sections.map((section, index) => (
            <div className="cookie-card" key={index}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>

        <div className="cookie-contact">
          <h2>Questions About Our Cookie Policy?</h2>

          <p>
            If you have any questions about how we use cookies or your privacy,
            please contact us.
          </p>

          <div className="contact-box">
            <p>
              <strong>FROPX GlobalTech</strong>
            </p>

            <p>📧 contact@fropxglobal.com</p>

            <p>
              For more information about how we handle your data, please review
              our Privacy Policy or contact our team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}