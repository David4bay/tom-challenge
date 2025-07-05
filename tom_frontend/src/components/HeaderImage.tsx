interface HeaderImageProps {
    urls: {
        raw?: string
        regular?: string
        small?: string
        thumb?: string
    },
    alt_description: string
}

export default function HeaderImage({ urls, alt_description }: HeaderImageProps) {
    return (
        <img src={urls.regular} alt={alt_description} className="header__image" />
    )
}