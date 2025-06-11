import "../App.css"; // Import Tailwind CSS styles

function Footer() {
  return (
    <footer className="bg-gray-950  text-white py-6 text-center">
      <div className="space-x-6">
        <a href="https://github.com/danielmahardhika" target="_blank" rel="noopener noreferrer" className="text-white text-lg">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/daniel-satria-mahardhika-856954324/" target="_blank" rel="noopener noreferrer" className="text-white text-lg">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/danielsatriaa_/" target="_blank" rel="noopener noreferrer" className="text-white text-lg">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <p className="mt-4">&copy; 2025 Rifqi Nabil Akbar Portfolio</p>
    </footer>
  );
}

export default Footer;
