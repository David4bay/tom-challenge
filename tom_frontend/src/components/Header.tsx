import React, { useState, useEffect } from "react"
import axios from "axios"
import HeaderImage from "./HeaderImage"
import { NavLink } from "react-router-dom"

interface HeaderImageProps {
    urls: {
        raw: string
        regular?: string
        small?: string
        thumb?: string
    },
    alt_description: string
}

export default function Header() {

    const [headerPhotos, setHeaderPhotos] = useState<HeaderImageProps[]>([])

    const unsplashURL = import.meta.env.VITE_UNSPLASH_URL 
    const unsplashAccessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

    useEffect(() => {
        async function fetchHeaderPhotos() {
            const response = await axios.get(`https://${unsplashURL}=${unsplashAccessKey}`)
            const data = await response.data
            return data
        }
        if (headerPhotos.length < 1) {
            fetchHeaderPhotos().then((photo) => {
                console.log("photo", photo)
                setHeaderPhotos(photo)
        })
        }
    }, [headerPhotos, unsplashAccessKey, unsplashURL])

    return (
        <header>
            <div className="header__title">
                <h1>
                    The Interactive Gallery   
                </h1>
                <p>Click on Preview to try it out</p>
            </div>
            <div className="header__content">
                <div className="header__images">
                    {headerPhotos.length > 0 ? headerPhotos.map((photo, key) => (
                        <React.Fragment key={key}>
                            <HeaderImage urls={photo.urls} alt_description={photo.alt_description} styling="headerImage" />
                        </React.Fragment>
                    )) : null}
                </div>
                <div className="header__text">
                    <h2>
                        Browse. Download. Share your favorite pictures.
                    </h2>
                    <p>
                        The Interactive Gallery collates images from Unsplash API.
                    </p>
                </div>
                <div className="header__bottom">
                     <ul className="header__links">
                        <li className="preview button">
                            <NavLink to="/preview">Preview</NavLink>
                        </li>
                        <li className="auth button">
                            <NavLink to="/signuser">Signin/Signup</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}