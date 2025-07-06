
import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthProvider/AuthProvider";

export default function Nav() {

    const auth = useAuth()

    return (
    <nav className="nav__menu">
        <ul className="nav__items logo__container">
                <NavLink to="/">
            <li className="nav__logo button">
                <strong className="logo__short">TIG</strong>
                <span className="logo__long"> - The Interactive Gallery</span>
            </li>
                </NavLink>
        </ul>
        <ul className="nav__items auth__container">
                <NavLink to={auth.user ? "/gallery" : "/preview"}>
            <li className="preview button">
                {auth.user ? "Gallery" : "Preview"}
            </li>
                </NavLink>  
            <li className="auth button">
                <NavLink to="/signuser">
                    Signin/Signup
                </NavLink>
            </li>
        </ul>
    </nav>
    )
}