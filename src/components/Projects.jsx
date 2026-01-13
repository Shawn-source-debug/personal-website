import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'Tag Royale',
      award: 'Best School Crossover',
      hackathon: 'cuHacking 6',
      year: '2025',
      description: 'A location-based mobile game that transforms traditional tag into an immersive battle royale experience. Features real-time GPS tracking, automated tag detection, shrinking safezones, and multiplayer gameplay with WebSockets.',
      tags: ['React Native', 'TypeScript', 'Express', 'Socket.io', 'WebSockets', 'Geolocation API', 'React Navigation'],
      live: 'https://devpost.com/software/tag-royale',
      image: '/images/tagroyale.png',
    },
    {
      title: 'RelaxED AI',
      award: 'Best Hardware Hack',
      hackathon: 'Hack the Hill II',
      year: '2024',
      description: 'A wearable stress monitoring system with an ESP-32 board that tracks pulse and body temperature. Data syncs to a web app where users can view AI-powered stress analysis and chat with a fine-tuned OpenAI model for insights.',
      tags: ['React', 'TypeScript', 'MongoDB', 'Express.js', 'Node.js', 'Python', 'C', 'CMake', 'OpenAI API', 'Bluetooth'],
      live: 'https://devpost.com/software/relaxed-ai',
      image: '/images/relaxedai.png',
    },
    {
      title: 'RehabTrack',
      award: null,
      hackathon: 'TerraHacks',
      year: '2025',
      description: 'A physiotherapy compliance platform that uses AI video analysis to verify prescribed exercises and mints personalized NFTs as proof of completion. Features a doctor dashboard for tracking patient progress and a patient portal with form corrections and earned badges.',
      tags: ['Next.js', 'React', 'Supabase', 'Gemini API', 'Thirdweb', 'MetaMask', 'NFT', 'Polygon'],
      live: 'https://devpost.com/software/rehabtrack',
      image: '/images/rehabtrack.png',
    },
    {
      title: 'NBA Performance Dashboard',
      award: null,
      hackathon: null,
      year: '2025',
      description: 'An interactive data visualization dashboard for analyzing NBA player and team performance statistics. Features dynamic charts, player comparisons, and real-time data exploration hosted on Hugging Face Spaces.',
      tags: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'Data Visualization', 'Hugging Face'],
      live: 'https://huggingface.co/spaces/ShawnTheShark/nba-dashboard',
      image: '/images/nba-dashboard.png',
    },
    {
      title: 'EAMS',
      award: null,
      hackathon: null,
      year: '2024',
      description: 'An Event Attendance Management System Android app built for SEG 2105. Features user authentication, event creation and registration, attendee management, and real-time data synchronization with Firebase.',
      tags: ['Java', 'Android', 'Firebase', 'Gradle', 'XML', 'JUnit'],
      live: 'https://github.com/uOttawaSEG/project-project-group-2',
      image: '/images/eams.png',
    },
    {
      title: 'TerraSphere',
      award: null,
      hackathon: 'TerraHacks',
      year: '2024',
      description: 'An eco-friendly mobile app that rewards users for daily ecological deeds. Users take photos of their environmental actions, earn points for consecutive days, and can locate nearby environmental initiatives using Google Maps.',
      tags: ['React Native', 'Redux Toolkit', 'OpenAI Camera Vision API', 'Google Maps API', 'Tailwind CSS'],
      live: 'https://devpost.com/software/terrasphere',
      image: '/images/terrasphere.png',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="title-underline"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-card"
            >
              {project.award && (
                <div className="winner-banner">
                  <span>Winner</span>
                </div>
              )}
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-placeholder">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                )}
              </div>
              
              <div className="project-content">
                {project.award && (
                  <div className="project-award">
                    <span className="award-badge">🏆 {project.award}</span>
                    <span className="hackathon-name">{project.hackathon} | {project.year}</span>
                  </div>
                )}
                {!project.award && project.hackathon && (
                  <div className="project-award">
                    <span className="hackathon-name">{project.hackathon} | {project.year}</span>
                  </div>
                )}
                {!project.hackathon && project.year && (
                  <div className="project-award">
                    <span className="hackathon-name">{project.year}</span>
                  </div>
                )}
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-link" aria-label="External Link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </span>
                </div>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="view-more">
          <a href="https://devpost.com/shawnhowcl" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            View More Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
