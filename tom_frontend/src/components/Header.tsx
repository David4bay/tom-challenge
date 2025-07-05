import { useState, useEffect, Suspense } from "react"
import axios from "axios"

export default function Header() {

    const [headerPhotos, setHeaderPhotos] = useState([])

    const unsplashURL = import.meta.env.VITE_UNSPLASH_URL 
    const unsplashAccessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

    useEffect(() => {
        async function fetchHeaderPhotos() {
            const response = await axios.get()
        }
    })


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