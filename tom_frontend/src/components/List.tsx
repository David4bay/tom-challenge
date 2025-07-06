import axios from "axios"
import { useState } from "react"
// I want to implement both paginated and unpaginated logic
import { useAuth } from "./AuthProvider/AuthProvider"
import InfiniteScroll from "react-infinite-scroll-component"

interface PreviewPhotos {
    urls: {
          urls: {
        raw?: string
        regular?: string
        small?: string
        thumb?: string
    },
    alt_description?: string
    }
}

export default function List() {

    const user = useAuth()

    // returns null for now, when function redirects user to logged in list
    if (user) return null 

    const [previewPhotos, setPreviewPhotos] = useState([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [layout, setLayout] = useState("grid") // this will control switching the page from a grid to a list, force list on narrow screens
    const [paginationMode, setPaginationMode] = useState("infinite") // controls the view of the page number

    return (
        <>

        </>
    )
}