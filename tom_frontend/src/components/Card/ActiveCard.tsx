import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react"
import Like from "../SVG/Like"

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ActiveCard {
    image: string 
    name: string 
    bio?: string
    alt?: string
    description: string
    tags: string[] | object | string | any 
    thumbnail: string 
}

export default function ActiveCard({ name, image, bio, alt, description, tags, thumbnail }: ActiveCard) {

    if (typeof tags === "object" && Object.keys(tags)?.length !== 0) {
        tags = Object.keys(tags)
    }

    return (
        <div className="activeCard__wrapper">
            <div className="activeCard__background"></div>
            <div className="activeCard__content">
                <div className="activeCardImage__container">
                    <img src={image} alt={alt} style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </div>
                <div className="activeCardDetails__container">
                    <div className="activeCard__details">
                        <img src={thumbnail} alt="author pic" className="activeCardAuthor__thumbnail" />
                        <strong>Author - {name}</strong>
                        <div>
                            <p>Bio -

                            </p>
                            <p>{bio}</p>    
                        </div>
                        <div>
                            <p>
                                Image description - 
                            </p>
                            <p>{description}</p>
                        </div>
                        <div>
                            <p>
                                Tags -
                            </p>
                            <ul className="author__tags">
                                {tags && tags.length ? tags?.map((tag: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, key: Key | null | undefined) => (
                                    <li key={key}>{tag}</li>
                                )) : null}
                            </ul>
                        </div>
                    </div>
                    <div className="activeCard__interactions">
                        <ul className="activeCardHidden__comments">

                        </ul>
                        <div className="activeCardLikes__container">
                                <Like 
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}