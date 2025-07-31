import React, { useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { 
  FaReact, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaDatabase, 
  FaBrain,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode
} from 'react-icons/fa';
import { SiBootstrap, SiMongodb, SiMysql, SiTensorflow, SiScikitlearn, SiCplusplus } from 'react-icons/si';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! I will review your message and get back to you within 24 hours.');
    setFormData({ name: '', email: '', message: '' });
  };

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Bootstrap. Features smooth animations, contact form, and professional design showcasing my skills and projects.",
      technologies: ["React", "Bootstrap", "JavaScript", "CSS3"],
      image: "https://via.placeholder.com/300x200/3498db/ffffff?text=Portfolio"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution with user authentication, product catalog, shopping cart, and secure payment processing. Includes admin dashboard for inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      image: "https://via.placeholder.com/300x200/2ecc71/ffffff?text=E-Commerce"
    },
    {
      id: 3,
      title: "AI-Powered Chatbot",
      description: "An intelligent conversational AI chatbot using natural language processing. Features sentiment analysis, multi-language support, and integration with external APIs.",
      technologies: ["Python", "TensorFlow", "scikit-learn", "Flask", "NLTK"],
      image: "https://via.placeholder.com/300x200/e74c3c/ffffff?text=AI+Chatbot"
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      description: "Interactive data visualization dashboard with real-time analytics, custom charts, and export functionality. Built for business intelligence and reporting.",
      technologies: ["Python", "Pandas", "Matplotlib", "Plotly", "Dash"],
      image: "https://via.placeholder.com/300x200/9b59b6/ffffff?text=Analytics"
    },
    {
      id: 5,
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, team collaboration, file sharing, and progress tracking. Features drag-and-drop interface.",
      technologies: ["React", "Bootstrap", "JavaScript", "Firebase", "LocalStorage"],
      image: "https://via.placeholder.com/300x200/f39c12/ffffff?text=Task+Manager"
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description: "Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics. Includes 7-day forecast and weather alerts.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Weather API", "Geolocation"],
      image: "https://via.placeholder.com/300x200/1abc9c/ffffff?text=Weather+App"
    }
  ];

  const skills = [
    { name: "React", icon: <FaReact />, color: "#61dafb" },
    { name: "Python", icon: <FaPython />, color: "#3776ab" },
    { name: "C Language", icon: <SiCplusplus />, color: "#00599c" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
    { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952b3" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
    { name: "AI/ML", icon: <FaBrain />, color: "#ff6b6b" },
    { name: "TensorFlow", icon: <SiTensorflow />, color: "#ff6f00" },
    { name: "scikit-learn", icon: <SiScikitlearn />, color: "#f7931e" },
    { name: "Node.js", icon: <FaCode />, color: "#339933" },
    { name: "Express.js", icon: <FaCode />, color: "#000000" },
    { name: "Git", icon: <FaGithub />, color: "#f05032" },
    { name: "REST APIs", icon: <FaCode />, color: "#ff6b6b" }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <Navbar bg="white" expand="lg" fixed="top" className="navbar">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">Ayush S Suvarna</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
              <Nav.Link href="#about" className="nav-link">About</Nav.Link>
              <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
              <Nav.Link href="#skills" className="nav-link">Skills</Nav.Link>
              <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <div className="hero-content">
                <h1>Ayush S Suvarna</h1>
                <h2>Aspiring Full Stack Developer</h2>
                <p>Passionate about building modern web applications and intelligent systems. Transforming ideas into elegant, scalable solutions with cutting-edge technologies.</p>
                <div className="mt-4">
                  <Button href="#projects" variant="primary" size="lg" className="me-3">
                    View My Work
                  </Button>
                  <Button href="#contact" variant="outline-primary" size="lg">
                    Get In Touch
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <Container>
          <h2 className="section-title">About Me</h2>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about-content">
                <p>
                  I am a passionate and dedicated aspiring full stack developer with a strong foundation in both frontend and backend technologies. My journey in software development has equipped me with a diverse skill set that enables me to create comprehensive web solutions.
                </p>
                <p>
                  With a keen interest in modern web technologies and artificial intelligence, I specialize in building scalable applications that solve real-world problems. My approach combines technical expertise with creative problem-solving to deliver exceptional user experiences.
                </p>
                <p>
                  I have learned and continue to master various technologies including:
                </p>
                <ul className="mt-3">
                  <li><strong>Full Stack Web Development</strong> - Building complete web applications from frontend to backend using modern frameworks and best practices</li>
                  <li><strong>Python Programming</strong> - Developing efficient and scalable applications with focus on clean code and performance optimization</li>
                  <li><strong>C Language</strong> - Understanding core programming concepts, memory management, and system-level programming</li>
                  <li><strong>Frontend Development</strong> - Creating responsive and interactive user interfaces with HTML5, CSS3, JavaScript, and React</li>
                  <li><strong>AI & Machine Learning</strong> - Implementing intelligent systems, predictive models, and data-driven solutions using TensorFlow and scikit-learn</li>
                  <li><strong>Database Management Systems</strong> - Designing and managing both SQL (MySQL) and NoSQL (MongoDB) databases with optimization and security</li>
                </ul>
                <p className="mt-3">
                  I'm always eager to learn new technologies and stay updated with the latest industry trends. My goal is to contribute to innovative projects that make a positive impact on people's lives.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="skill-grid">
                <div className="skill-item">
                  <FaCode className="skill-icon" />
                  <h5>Web Development</h5>
                </div>
                <div className="skill-item">
                  <FaPython className="skill-icon" />
                  <h5>Python</h5>
                </div>
                <div className="skill-item">
                  <FaBrain className="skill-icon" />
                  <h5>AI/ML</h5>
                </div>
                <div className="skill-item">
                  <FaDatabase className="skill-icon" />
                  <h5>Databases</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <h2 className="section-title">Projects</h2>
          <p className="text-center mb-5" style={{ color: '#6c757d', fontSize: '1.1rem' }}>
            Here are some of my recent projects that showcase my skills in full-stack development, AI/ML, and modern web technologies.
          </p>
          <Row>
            {projects.map((project) => (
              <Col lg={4} md={6} className="mb-4" key={project.id}>
                <Card className="project-card h-100">
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="flex-grow-1">
                      {project.description}
                    </Card.Text>
                    <div className="mt-3">
                      <strong>Technologies:</strong>
                      <div className="mt-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="badge bg-primary me-1 mb-1">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <Container>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="text-center mb-5" style={{ color: '#6c757d', fontSize: '1.1rem' }}>
            I've worked with a variety of technologies and frameworks. Here are the key skills I've developed through my projects and learning journey.
          </p>
          <Row>
            {skills.map((skill, index) => (
              <Col lg={3} md={4} sm={6} className="mb-4" key={index}>
                <div className="skill-item">
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h5>{skill.name}</h5>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-center mb-5" style={{ color: '#6c757d', fontSize: '1.1rem' }}>
            I'm always interested in new opportunities and exciting projects. Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out!
          </p>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="contact-form">
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                    />
                  </Form.Group>
                  <div className="text-center">
                    <Button type="submit" variant="primary" size="lg">
                      Send Message
                    </Button>
                  </div>
                </Form>
                
                <div className="social-links">
                  <a href="mailto:ayush@example.com" className="social-link">
                    <FaEnvelope />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <Container>
          <p>&copy; 2024 Ayush S Suvarna. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default App; 