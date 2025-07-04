

export default function Nav() {
    return (
    <nav className="nav__menu">
        <ul className="nav__items">
            <li className="nav__logo button">
                <strong className="logo__short">TIG</strong>
                <span className="logo__long"> - The Interactive Gallery</span>
            </li>
        </ul>
        <ul className="nav__items">
            <li className="preview button">
                Preview
            </li>
            <li className="auth button">
                Signin/Signup
            </li>
        </ul>
    </nav>
    )
}