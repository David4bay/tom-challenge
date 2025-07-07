import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider/AuthProvider";
import Nav from "./Nav";
import List from "./List";
import Footer from "./Footer";
import { useEffect } from "react";
import UserCard from "./Card/UserCard";


export default function Gallery() {

    const auth = useAuth()
    
    console.log("user", auth)

    const navigate = useNavigate()

    useEffect(() => {
        if (!auth.user) {
            navigate("/preview")
        }
    }, [navigate, auth.user])

    return (
        <>
        <Nav />
        <UserCard />
        <List />
        <Footer />
        </>
    )
}