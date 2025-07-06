

interface PictureCardProps {
    picture: string
    alt: string
}

export default function PictureCard({ picture, alt }) {

    return (
        <div className="picture__wrapper">
            <div className="picture__container">
                <img src={picture} alt={alt} />
            </div>
            <div className="picture__detail">
                <div className="picture__author">
                    <h3 className="author"></h3>
                </div>
                <div className="picture__description">
                    <p className="description"></p>
                </div>
                <div className="picture__tags">
                    
                </div>
            </div>
        </div>
    )
}