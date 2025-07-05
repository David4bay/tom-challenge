import { NavLink } from "react-router-dom";


export default function Nav() {
    return (
    <nav className="nav__menu">
        <ul className="nav__items logo__container">
            <li className="nav__logo button">
                <strong className="logo__short">TIG</strong>
                <span className="logo__long"> - The Interactive Gallery</span>
            </li>
        </ul>
        <ul className="nav__items auth__container">
            <li className="preview button">
                <NavLink to="/preview">
                    Preview
                </NavLink>  
            </li>
            <li className="auth button">
                <NavLink to="/signuser">
                    Signin/Signup
                </NavLink>
            </li>
        </ul>
    </nav>
    )
}