import { useState, Suspense, use, useEffect } from "react"
import axios from "axios"
import HeaderImage from "./loaders/HeaderImageLoader"

type HeaderPhoto = any

export default function Header() {

    const [headerPhotos, setHeaderPhotos] = useState<unknown[]>([])

    const unsplashURL = import.meta.env.VITE_UNSPLASH_URL 
    const unsplashAccessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

    useEffect(() => { 
        async function fetchHeaderPhotos() {
            const response = await axios.get(`https://picsum.photos/seed/nature1/400/300`)
            const data = await response.data
            return data
        }
        if (headerPhotos.length < 1) {
            const photo = fetchHeaderPhotos() as HeaderPhoto
            console.log(headerPhotos)
            setHeaderPhotos([photo])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <header>
            <div className="header__title">
                <h1>
                    The Interactive Gallery   
                </h1>
            </div>
            <div className="header__content">
                <div className="header__images">
                    {headerPhotos.map((headerPhoto, key) => (
                        <img src={headerPhoto as string | undefined} alt={"..."} key={key} />
                    ))}
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