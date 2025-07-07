/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import Comment from "../Comment"
import Like from "../SVG/Like"

interface ActiveCard {
    image: string 
    name: string 
    bio?: string
    alt?: string
    description: string
    tags: string[] | object | string | any 
    thumbnail: string 
    setPhotoClicked: React.Dispatch<React.SetStateAction<any>>
    photoClicked: boolean 
}

export default function ActiveCard({ name, image, bio, alt, description, tags, thumbnail, setPhotoClicked, photoClicked }: ActiveCard) {
    
    // const location = useLocation()
    // const navigate = useNavigate()
    const [isCommentOpen, setIsCommentOpen] = useState(false)

    if (typeof tags === "object" && Object.keys(tags)?.length !== 0) {
        tags = Object.keys(tags)
    }

    function setOverlay(e: { preventDefault: () => void, stopPropagation: () => void }) {
        e.preventDefault()
        e.stopPropagation()
        // const prevRoute = String(location.pathname).split("/")[1]
        console.log("clicked overlay", photoClicked)
        setPhotoClicked(false)
    }

    return (
        <div className="activeCard__wrapper">
            <div className="activeCard__background" onClick={setOverlay}></div>
            <div className="activeCard__content">
                <div className="activeCardImage__container">
                    <img 
                    src={image} 
                    alt={alt} 
                    style={{width: "100%", height: "100%", objectFit: "cover"}} 
                    className="activeCardImage__author"
                    />
                </div>
                <div className="activeCardDetails__container">
                    <div className="activeCard__details">
                        <div className="authorHeadshot">
                            <img src={thumbnail} alt="author pic" className="activeCardAuthor__thumbnail" />
                            <strong>Author - {name}</strong>
                        </div>
                        <div className="authorBio">
                            <p className="authorBio__title">
                                Bio -
                            </p>
                            <p>{bio}</p>    
                        </div>
                        <div className="authorDescription">
                            <p className="authorDescription__title">
                                Image description - 
                            </p>
                            <p>{description}</p>
                        </div>
                        <div className="authorTag">
                            <p className="authorTag__title">
                                Tags -
                            </p>
                            <ul className="tags">
                                {tags.length ? tags.map((tag: any, key: number) => (
                                    <li key={key}>{tag}</li>
                                )) : ""}
                            </ul>
                        </div>
                    </div>
                    <div className="activeCard__interactions">
                        <ul className="activeCardHidden__comments">
                                <Comment
                                isCommentOpen={isCommentOpen}
                                setIsCommentOpen={setIsCommentOpen}
                                />

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