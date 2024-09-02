const Header = () => {
  return (
    <>
      <header className="container">
        <nav className="navbar">
            <div className="logo">
                <a href="#"><img src="./logo1.png" alt="Logo"/></a>                
            </div>
            <div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Connect</a></li> 
                </ul>
            </div>
        </nav>
      </header>
    </>
  );
};

export default Header