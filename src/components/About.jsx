import './About.css'

function About() {
  const skills = [
    { category: 'Languages', items: ['Python', 'Java', 'JavaScript', 'C/C++', 'SQL'] },
    { category: 'Frontend', items: ['React', 'HTML/CSS', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Linux', 'Docker'] },
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="/images/about-photo.jpg" alt="Shawn How with teammates at a hackathon" />
            <p className="image-caption">That's me on the left!</p>
          </div>

          <div className="about-text">
            <h3 className="about-subtitle">I'm a Software Developer.</h3>
            
            <p>
              I'm a third-year Computer Science and Mathematics student at the 
              <span className="highlight"> University of Ottawa</span>, passionate about 
              building software that makes a difference.
            </p>

            <p>
              My academic journey has equipped me with strong foundations in algorithms, 
              data structures, and mathematical problem-solving. I love applying these 
              skills to create efficient, scalable solutions.
            </p>

            <p>
              When I'm not coding, you'll find me exploring new technologies 
              or participating in hackathons. I'm always eager 
              to learn and take on new challenges.
            </p>

            <p>
              Currently seeking <span className="highlight">Summer 2026 internship opportunities</span> where 
              I can contribute to meaningful projects and grow as a developer.
            </p>

            <div className="skills-section">
              <h4>Technical Skills</h4>
              <div className="skills-grid">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="skill-category">
                    <h5>{skillGroup.category}</h5>
                    <ul>
                      {skillGroup.items.map((skill, i) => (
                        <li key={i}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
