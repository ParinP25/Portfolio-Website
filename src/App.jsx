import React, { useState, useEffect } from 'react';
// Import lucide-react icons for visual appeal
import { Home, User, FolderDot, Mail, Github, Linkedin, MessageSquareDot } from 'lucide-react';

// Main App component
const App = () => {
  // State to manage the active section for navigation (simple client-side routing)
  const [activeSection, setActiveSection] = useState('home');
  // State for contact form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  // State for contact form submission status
  const [submitStatus, setSubmitStatus] = useState('');

  // Smooth scroll to section when activeSection changes
  useEffect(() => {
    const section = document.getElementById(activeSection);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  // Handle input changes for the contact form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle contact form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('Submitting...');
    // In a real application, you would send this data to a backend server.
    // For this example, we'll just log it to the console and simulate success.
    console.log('Form data submitted:', formData);

    // Simulate an API call delay
    setTimeout(() => {
      setSubmitStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    }, 1500);

    // could also create a mailto link for direct email:
    // const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    // const body = encodeURIComponent(formData.message);
    // window.location.href = `mailto:${formData.email}?subject=${subject}&body=${body}`;
    // setSubmitStatus('Opening email client...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-inter text-gray-800">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white shadow-lg py-4 px-6 md:px-12 flex justify-between items-center"> 
        {/* Name as Logo */}
        <div className="text-2xl font-bold text-indigo-700">Parin Pandya</div>
        <div className="flex space-x-6">
          <NavItem icon={<Home className="w-5 h-5" />} label="Home" onClick={() => setActiveSection('home')} active={activeSection === 'home'} />
          <NavItem icon={<User className="w-5 h-5" />} label="About" onClick={() => setActiveSection('about')} active={activeSection === 'about'} />
          <NavItem icon={<FolderDot className="w-5 h-5" />} label="Projects" onClick={() => setActiveSection('projects')} active={activeSection === 'projects'} />
          <NavItem icon={<Mail className="w-5 h-5" />} label="Contact" onClick={() => setActiveSection('contact')} active={activeSection === 'contact'} />
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 md:py-16">
        {/* Home Section */}
        <section id="home" className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center p-8 bg-white rounded-xl shadow-lg mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-800 mb-4 animate-fade-in-up">
            Welcome!
          </h1>  
          <h2 className="text-2xl md:text-4xl font-extrabold text-indigo-800 mb-4 animate-fade-in-up">I'm <span className="text-blue-600">Parin!</span></h2> 
          {/*<p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl animate-fade-in-up delay-200">
            A passionate developer building engaging and impactful web experiences.
          </p>*/}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl animate-fade-in-up delay-200"> 
            A versatile <span className="font-semibold text-indigo-600">Data Enthusiast & Software Developer</span> turning insights into scalable solutions and captivating web experiences. 
          </p>
          <div className="space-x-4 animate-fade-in-up delay-400">
            <button
              onClick={() => setActiveSection('projects')}
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className="px-8 py-3 border border-indigo-600 text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-indigo-50 transition duration-300 transform hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
          <div className="mt-12 flex space-x-6 text-gray-500">
            <a href="https://github.com/ParinP25" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/parin--pandya/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
            {/* Add more social icons as needed */}
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="p-8 bg-white rounded-xl shadow-lg mb-12 min-h-screen-content">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 mb-6 md:mb-0">
              <img
                src="/profile-photo.jpg" // Make sure to place your profile image in the 'public' folder
                alt="Parin Pandya Profile"
                className="rounded-full object-cover w-full h-full border-4 border-indigo-200 shadow-lg"
              />
            </div>
            <div className="text-lg leading-relaxed text-gray-700">
              <p className="mb-4">
                Hello! I'm <span className="font-semibold text-indigo-600">Parin Pandya</span>, a detail-oriented and analytical professional passionate about <span className="font-semibold text-indigo-600">Software Development</span> and <span className="font-semibold text-indigo-600">Data Science</span>. My journey is driven by a desire to craft robust, scalable software solutions and extract actionable insights from complex data to drive informed decisions.
              </p>
              <p className="mb-4">
                On the <span className="font-semibold text-indigo-600">Software Development</span> front, I have hands-on experience designing and developing responsive web platforms, including an e-commerce storefront. I leverage technologies like <span className="font-semibold text-blue-600">React</span>, <span className="font-semibold text-blue-600">HTML</span>, <span className="font-semibold text-blue-600">CSS (Tailwind CSS)</span>, and <span className="font-semibold text-blue-600">JavaScript</span> to create engaging user experiences. My background also includes solid foundations in <span className="font-semibold text-blue-600">Python, Java</span> and object-oriented programming.
              </p>
              <p className="mb-4">
                In <span className="font-semibold text-indigo-600">Data Science & Analysis</span>, I excel at the entire data lifecycle, from <span className="font-semibold text-indigo-600">extraction and cleaning</span> to <span className="font-semibold text-indigo-600">manipulation and insightful analysis</span>. I specialize in building end-to-end ETL pipelines using <span className="font-semibold text-blue-600">Python (BeautifulSoup, pandas, numpy)</span>, applying <span className="font-semibold text-blue-600">NLP techniques (NLTK)</span> for text extraction, and performing advanced statistical modeling. I excel at designing relational database schemas with <span className="font-semibold text-blue-600">SQL (MySQL, PopSQL)</span>, developing interactive dashboards with <span className="font-semibold text-blue-600">Power BI</span> and <span className="font-semibold text-blue-600">Tableau</span>, and automating reports with <span className="font-semibold text-blue-600">Excel</span>. My experience also includes working with <span className="font-semibold text-blue-600">R</span> for sentiment analysis and data visualization.
              </p>
              <p className="mb-4">
                I thrive in collaborative environments, where I can apply critical thinking and problem-solving skills to excel across both data-driven projects and software development initiatives. I'm always eager to take on new challenges and contribute to impactful outcomes.
              </p>
              <h3 className="text-2xl font-bold text-indigo-600 mt-6 mb-4">My Key Technologies & Skills:</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'Java', 'React', 'HTML', 'CSS', 'SQL', 'R', 'Tailwind CSS', 'Tableau', 'Power BI', 'Excel', 'MS Office', 'Google Sheets', 'Git', 'Docker', 'NLTK', 'pandas', 'numpy', 'TensorFlow', 'PyTorch', 'Seaborn', 'Matplotlib', 'Scikit', 'D3.js', 'MySQL', 'Agile (Scrum)', 'AI', 'ML'].map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="p-8 bg-white rounded-xl shadow-lg mb-12 min-h-screen-content">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <ProjectCard
              title="Desktop Data Entry Application"
              description="Developed a robust desktop application designed for efficient and accurate data entry, while streamlining data collection processes."
              tags={['Python', 'VS Code', 'GUI', 'Data Management', 'Data Entry']}
              githubLink="https://github.com/ParinP25/Visitor-Form-App"
            />  
            {/* Project Card 2 */}
            <ProjectCard
              title="Interactive Portfolio Website"
              description="Designed and developed a responsive, single-page web application to showcase projects and skills."
              tags={['React', 'JavaScript', 'HTML', 'TailWind CSS', 'Front-end', 'Back-end']}
              githubLink="https://github.com/ParinP25/Portfolio-Website" 
            /> 
            {/* Project Card 3 */}
            <ProjectCard
              title="Interactive Dashboard Development"
              description="Developed dynamic dashboards to visualize key performance indicators and identify trends, enhancing reporting and decision-making through automation."
              tags={['Excel', 'Power BI', 'Data Filtering', 'Pivot Tables']}
              githubLink="https://github.com/ParinP25/Dashboard-Development"
            />  
            {/* Project Card 4 */}
            <ProjectCard
              title="Statistical Analysis & Predictive Modeling"
              description="Built machine learning models for forecasting trends and evaluated performance using regression metrics, applying data cleansing and pre-processing for high-quality input data."
              tags={['Python', 'Google Colab Notebooks', 'Machine Learning', 'Statistical Analysis', 'Regression', 'Predictive Modeling', 'Data Cleansing']}
              githubLink="https://github.com/ParinP25/Statistical-Analysis-Predictive-Modeling-ML"
            /> 
            {/* Project Card 5 */}
            <ProjectCard
              title="Sentiment Analysis for Game Review Classification"
              description="Developed a data mining pipeline to analyze game reviews, applying sentiment analysis to build a classification or recommendation system."
              tags={['Python', 'Google Colab Notebooks', 'Sentiment Analysis', 'Data Mining', 'Classification', 'Recommendation Systems']}
              githubLink="https://github.com/ParinP25/Sentiment-Analysis-for-Game-Review-Classification"
            />
            
            {/* Project Card 6 */}
            <ProjectCard
              title="Database Design & Query Optimization"
              description="Designed efficient relational database schemas and wrote complex queries for extracting, joining, and analyzing structured data to derive useful insights."
              tags={['MySQL', 'PopSQL', 'RDBMS']}
              //githubLink="https://github.com/ParinP25"
            />  
            {/* Project Card 7 */}
            <ProjectCard
              title="Data Analysis Pipeline"
              description="Created data pipelines to collect, analyze, and visualize unstructured textual data, applying sentiment analysis and network analysis techniques for actionable insights."
              tags={['R', 'R Studio', 'Excel', 'Twitter API', 'Gephi']}
              // githubLink="https://github.com/ParinP25"
            />  

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="p-8 bg-white rounded-xl shadow-lg min-h-screen-content">
          <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center text-lg text-gray-700 mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out with any questions or project inquiries!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message here..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 resize-y"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MessageSquareDot className="w-5 h-5" />
                <span>Send Message</span>
              </button>
              {submitStatus && (
                <p className={`mt-4 text-center ${submitStatus.includes('successfully') ? 'text-green-600' : 'text-gray-500'}`}>
                  {submitStatus}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center mt-12">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Parin Pandya. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

// NavItem component for reusability
const NavItem = ({ icon, label, onClick, active }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200
      ${active ? 'bg-indigo-100 text-indigo-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
  >
    {icon}
    <span className="hidden sm:inline">{label}</span> {/* Hide label on very small screens */}
  </button>
);

// ProjectCard component for reusability in the Projects section
const ProjectCard = ({ title, description, tags, liveLink, githubLink }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-102 hover:shadow-xl p-6 flex flex-col justify-between">
    <div>
      <h3 className="text-2xl font-bold text-indigo-700 mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="flex justify-end space-x-3 mt-4">
      {liveLink && (
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm font-semibold hover:bg-indigo-600 transition-colors"
        >
          Live Demo
        </a>
      )}
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-indigo-500 text-indigo-600 rounded-lg text-sm font-semibold hover:bg-indigo-50 transition-colors"
        >
          GitHub
        </a>
      )}
    </div>
  </div>
);

// Export the main App component
export default App;
