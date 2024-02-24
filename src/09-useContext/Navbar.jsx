import { Link, NavLink } from "react-router-dom";

// usamos NavLink en barras de navegacion o cuando se necesita alguna accion basado en la ruta

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    useContext
                </Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink 
                            className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/">
                            Home
                        </NavLink>
                        <NavLink 
                            className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/about">
                            About
                        </NavLink>
                        <NavLink 
                            className={ ({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                            to="/login">
                            Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};