/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios"
import { useEffect, useState, type KeyboardEvent } from "react"
import InfiniteScroll from "react-infinite-scroll-component"


export default function List() {

    const [photos, setPhotos] = useState([])
    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1)
    const [hasMore, _] = useState(true)
    const [input, setInput] = useState(false)

    const CLIENT_ID = import.meta.env.VITE_UNSPLASH_CLIENTID 
    const unsplashUrl = `https://api.unsplash.com/search/photos?client_id=${CLIENT_ID}&query=${query}&page=${page}`

    function fetchImages() {
        // api docs insist including the headers even if unused
        axios.get(unsplashUrl, {
            headers: {}
        }).then((photo) => {
            setPhotos<any>([...photos, ...photo.data.results])
        }).catch((error) => {
            console.log(error)
        })
        setPage(page + 1)
    }
// intellisense inferred type
    function searchImages(e: any) {
        // there won't be need for preventDefault if i set button/input type to button 
        // e.keyCode is deprecated
        if (e.code === 'Enter') {
            setQuery(e.target.value)
            setPhotos([])
            setInput(true)
        }
    }

    useEffect(() => {
        if (input) {
            fetchImages()
            console.log("photos", photos)
            setInput(false)
        }
        // just in case there's a leak somewhere
        setInput(false)
    }, [fetchImages])


    return (
        <section>
            <article className="searchForm__container">
                <input 
                type="text"
                onKeyDown={(e) => searchImages(e)} 
                />
            </article>
            <InfiniteScroll
                dataLength={photos.length}
                next={fetchImages} 
                hasMore={hasMore} 
                loader={<p>Load more...</p>}
                endMessage={
                    <p>
                        End...
                    </p>
                }
                >
                    <div>
                        {photos.map((singlePhoto, key) => (
                            <div key={key}>
                                <img 
                                src={singlePhoto.urls.small} 
                                alt={singlePhoto.alt_description} 
                                />
                                <h4>Photo by {singlePhoto.user.name}</h4>
                            </div>
                        ))}
                    </div>
            </InfiniteScroll>
        </section>
    )
}