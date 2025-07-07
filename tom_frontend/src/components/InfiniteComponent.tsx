/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import ActiveCard from "./Card/ActiveCard"
import { Link, useLocation } from "react-router-dom"

export interface UnsplashPhoto {
  id: string;
  alt_description: string;
  description: string;
  urls: {
    small: string;
    regular: string;
    full: string;
    raw: string;
  };
  user: {
    name: string;
    bio: string | null | undefined | any;
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
  };
  topic_submissions: Record<string, any> | string[] | string;
}

export default function InfiniteComponent({ singlePhoto }: { singlePhoto: UnsplashPhoto}) {

    const currentLink = useLocation().pathname.split("/")[1]

    const [photoClicked, setPhotoClicked] = useState(false)

    function photoDetails(e: { preventDefault: () => void, stopPropagation: () => void }) {
        e.preventDefault()
        setPhotoClicked(true)
        e.stopPropagation()
    }

    return (
          <Link
            // to simulate the url change
            to={`/${currentLink}/${singlePhoto.user.name}`}
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
                photoClicked={photoClicked}
                setPhotoClicked={setPhotoClicked}
                name={singlePhoto.user.name}
                image={singlePhoto.urls.small}
                bio={singlePhoto.user.bio}
                alt={singlePhoto.description}
                description={singlePhoto.description}
                tags={singlePhoto.topic_submissions}
                thumbnail={singlePhoto.user.profile_image.small}
                />
            ) : ""}
               
            </Link>
    )
}