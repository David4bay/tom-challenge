

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

export default function HeaderImage({ 
    urls, 
    alt_description, 
    styling
}: HeaderImageProps) {

    return (
        <>
        <img 
        src={urls.regular} 
        alt={alt_description} 
        className={`header__image ${styling}`} 
        style={{ width: "100%", height: "100%", objectFit: "cover"}}
        />

        </>
    )
}