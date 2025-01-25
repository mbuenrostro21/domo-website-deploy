import './components.css'
function NavBar () {
    
    return (
        <nav className="navbar">
            {/* Logo Section */}
            <div className="navbar-logo">
            <a href="#home">
                Domolo Beats
            </a>
            </div>
            
            {/* Links Section */}
            <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        );

}

export default NavBar;