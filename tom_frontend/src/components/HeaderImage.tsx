import { useEffect, useState } from "react"
import ImageIcon from "./SVG/ImageIcon"
import ImageIconFocused from "./SVG/ImageIconFocused"

interface HeaderImageProps {
    urls: {
        raw?: string
        regular?: string
        small?: string
        thumb?: string
    },
    alt_description?: string
    styling?: string
}

export default function HeaderImage({ urls, alt_description, styling }: HeaderImageProps) {

    const [hover, setHover] = useState(false)

    useEffect(() => {
        document.addEventListener("mouseenter", function(e) {
            e.preventDefault()
            setHover(!hover)
        })
    })
    return (
        <div className="headerImage__wrapper">
        <img src={urls.regular} alt={alt_description} className={`header__image ${styling}`} />
        {hover ? <ImageIcon /> : <ImageIconFocused />}
        </div>
    )
}