/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from "react"
import ActiveCommentIcon from "./SVG/ActiveCommentIcon"
import InactiveCommentIcon from "./SVG/InactiveComment"

export interface CommentRef {
    isCommentOpen?: boolean
    setIsCommentOpen: React.Dispatch<React.SetStateAction<any>>
}

export default function Comment({ isCommentOpen, setIsCommentOpen}: CommentRef) {

    function handleComment() {
        setIsCommentOpen(!isCommentOpen)
    }
   
    return (
        <button 
        style={{ border: "none", backgroundColor: "transparent" }}
        onClick={handleComment}
        className="comment__button"
        >
            {isCommentOpen ? (
                <ActiveCommentIcon />
            ) : (
                <InactiveCommentIcon />
            )}
        </button>
    )
}