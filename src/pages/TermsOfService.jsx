import "./TermsOfService.scss";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the FROPX GlobalTech website or our services, you agree to be bound by these Terms of Service. If you do not agree with these terms, please discontinue use of our website and services.",
  },
  {
    title: "2. Our Services",
    content:
      "FROPX GlobalTech provides software development, AI solutions, cloud services, DevOps, data engineering, product engineering, consulting, and other digital transformation services. The scope of work for each engagement will be defined in a separate agreement or proposal.",
  },
  {
    title: "3. User Responsibilities",
    content:
      "You agree to provide accurate information, use our services lawfully, protect your account credentials where applicable, and refrain from any activity that could damage, disrupt, or misuse our systems or services.",
  },
  {
    title: "4. Intellectual Property",
    content:
      "All website content, including text, graphics, logos, designs, software, and other materials, is the intellectual property of FROPX GlobalTech unless otherwise stated. Unauthorized reproduction, distribution, or modification is prohibited.",
  },
  {
    title: "5. Payments & Commercial Terms",
    content:
      "Project pricing, payment schedules, milestones, and deliverables are governed by individual contracts or quotations. Failure to make payments may result in suspension or termination of services.",
  },
  {
    title: "6. Confidentiality",
    content:
      "We respect the confidentiality of our clients' business information and expect the same from our clients. Confidential information shared during engagements will not be disclosed except as required by law or agreed in writing.",
  },
  {
    title: "7. Limitation of Liability",
    content:
      "FROPX GlobalTech shall not be liable for indirect, incidental, special, or consequential damages arising from the use of our website or services. Our total liability shall be limited to the amount paid for the applicable services, where permitted by law.",
  },
  {
    title: "8. Third-Party Services",
    content:
      "Our solutions may integrate with third-party platforms, APIs, or services. We are not responsible for the availability, security, or policies of third-party providers.",
  },
  {
    title: "9. Termination",
    content:
      "We reserve the right to suspend or terminate access to our website or services if these Terms are violated, unlawful activity is detected, or continued access poses a risk to our business or clients.",
  },
  {
    title: "10. Changes to Terms",
    content:
      "We may revise these Terms of Service at any time. Updated versions will be posted on this page with the revised effective date. Continued use of our website constitutes acceptance of the updated terms.",
  },
];

export default function TermsOfService() {
  return (
    <section className="terms">
      <div className="terms-container">
        <div className="terms-hero">
          <span className="terms-badge">Legal Information</span>

          <h1>Terms of Service</h1>

          <p>
            Welcome to <strong>FROPX GlobalTech</strong>. These Terms of Service
            govern your use of our website and services. Please read them
            carefully before using our platform.
          </p>

          <div className="terms-date">
            Effective Date: <strong>August 2, 2026</strong>
          </div>
        </div>

        <div className="terms-grid">
          {sections.map((section, index) => (
            <div className="terms-card" key={index}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>

        <div className="terms-contact">
          <h2>Questions About These Terms?</h2>

          <p>
            If you have any questions regarding these Terms of Service or our
            business practices, please contact us.
          </p>

          <div className="contact-box">
            <p>
              <strong>FROPX GlobalTech</strong>
            </p>

            <p>📧 contact@fropxglobal.com</p>

            <p>We are happy to assist you with any questions or concerns.</p>
          </div>
        </div>
      </div>
    </section>
  );
}