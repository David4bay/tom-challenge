

export default function Header() {
    return (
        <header>
            <div className="header__title">
                <h1>
                    The Interactive Gallery   
                </h1>
            </div>
            <div className="header__content">
                <div className="header__images">
                    <img src="#" alt="header image" className="header__image" />
                    <img src="#" alt="header image" className="header__image" />
                    <img src="#" alt="header image" className="header__image" />
                </div>
                <div className="header__text">
                    <h2>
                        Browse. Download. Share your favorite pictures.
                    </h2>
                    <p>
                        The Interactive Gallery collates images from Unsplash API.
                    </p>
                </div>
                <div>
                     <ul className="header__links">
                        <li className="preview button">
                            Preview
                        </li>
                        <li className="auth button">
                            Signin/Signup
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}