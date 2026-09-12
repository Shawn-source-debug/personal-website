import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="title-underline"></div>
        </div>

        <article className="experience-card">
          <div className="experience-heading">
            <img
              className="experience-logo"
              src="/images/a1-dynamics-logo.svg"
              alt="A1 Dynamics Ltd."
            />
            <div>
              <h3>A1 Dynamics</h3>
              <p className="experience-role">IT Systems &amp; Automation Intern</p>
            </div>
            <div className="experience-meta">
              <span>May 2026 - Aug. 2026</span>
              <span>Canada</span>
            </div>
          </div>

          <ul className="experience-details">
            <li>Automated recurring server data updates and data-entry workflows using Python scripts, eliminating repetitive manual work and improving data accuracy.</li>
            <li>Supported the implementation of a Microsoft Dynamics ERP system, leading data migration, cleaning, and normalization efforts using Microsoft SQL Server.</li>
            <li>Partnered directly with the CFO to deliver data analysis and reporting, querying and analyzing data with SQL and building automation tools in Excel and VBA to support financial decision-making.</li>
            <li>Administered the company&apos;s Windows Server environment and Ubiquiti network infrastructure, monitoring systems and troubleshooting issues to maintain uptime for business operations.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Experience
