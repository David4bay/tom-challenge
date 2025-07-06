 
import { useState } from "react"
import ActiveCard from "./Card/ActiveCard"
import { Link, useLocation } from "react-router-dom"


export default function InfiniteComponent({ singlePhoto }) {

    const currentLink = useLocation().pathname

    const [photoClicked, setPhotoDetails] = useState(false)

    function photoDetails() {
        setPhotoDetails(true)
    }

    return (
          <Link
            // to simulate the url change
            to={`${currentLink}/${singlePhoto.slug}`}
            className="infiniteImage__container"
            // to open a modal about the image
            onClick={photoDetails}
            >
                <img 
                src={singlePhoto.urls.small} 
                alt={singlePhoto.alt_description} 
                className="infiniteImage"
                style={{width: "100%", height: "100%", objectFit: "cover"}}
                />
                <div className="infiniteImage__author">
                    <img src={singlePhoto.user.profile_image.small} alt={`author ${singlePhoto.user.name}`} className="author__thumbnail" />
                    <h4>Photo by {singlePhoto.user.name}</h4>
                </div>
                {photoClicked ? (
                <ActiveCard
                name={singlePhoto.user.name}
                image={singlePhoto.urls.small}
                bio={singlePhoto.user.bio}
                alt={singlePhoto.description}
                description={singlePhoto.description}
                tags={singlePhoto.topic_submissions}
                thumbnail={singlePhoto.user.profile_image.small}
                />
            ) : null}
               
            </Link>
    )
}