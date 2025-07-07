/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios"
import React, { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import InfiniteComponent from "./InfiniteComponent"
import Footer from "./Footer"

export default function List() {

    const [photos, setPhotos] = useState<any[]>([])
    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1)
    const [hasMore, _] = useState(true)
    const [input, setInput] = useState(false)
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(false)

    const CLIENT_ID = import.meta.env.VITE_UNSPLASH_CLIENTID 
    const unsplashUrl = `https://api.unsplash.com/search/photos?client_id=${CLIENT_ID}&query=${query}&page=${page}`

    function fetchImages() {
        // prevent unnecessary requests when no query and page scrolledf
        setHasError(false)
        setLoading(true)
        if (query.length < 1) return
        // api docs insist including the headers even if unused
        axios.get(unsplashUrl, {
            headers: {}
        }).then((photo: any) => {
            setPhotos((arg: any): any[] | any => [...arg, ...photo.data.results])
            setLoading(false)
            setHasError(false)
            return
        }).catch((error) => {
            setLoading(false)
            setHasError(true)
            console.log(error)
        })
        setPage(page + 1)
    }

    function triggerSearch() {
        if (query.length < 1) {
            setPhotos([])
            return
        }
        fetchImages()
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
                <h2 className="searchForm__title">Infinite Gallery Search</h2>
                <input 
                type="text"
                onKeyDown={(e) => searchImages(e)} 
                onChange={(e) => setQuery(e.target.value)}
                className="searchForm__input"
                placeholder="Search for you favorite images"
                />
                <button
                className="searchButton"
                type="button"
                id="enterKey"
                onClick={triggerSearch}
                >
                    {hasError && !loading ? "Error" : !hasError && loading ? "loading..." : "Search"}
                </button>

            </article>
            <InfiniteScroll
                dataLength={photos.length}
                next={fetchImages} 
                hasMore={hasMore} 
                loader={<p className="infinite__loader"></p>}
                endMessage={
                    // smarter to let react-infinite-scroll component handle the footer
                    <Footer />
                }
                >
                    <div className="infinite__wrapper">
                        {photos.map((singlePhoto: any, key) => (
                          <React.Fragment key={key}>
                            <InfiniteComponent
                            singlePhoto={singlePhoto}
                            />
                          </React.Fragment>
                        ))}
                    </div>
            </InfiniteScroll>
        </section>
    )
}