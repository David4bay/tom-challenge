
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider/AuthProvider";
import List from "./List";
import Nav from "./Nav";
import { useEffect } from "react";

export default function Preview() {

    const auth = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if (auth.user) {
            navigate("/gallery")
        }
    }, [navigate, auth.user])

    return (
    <>
    <Nav />
    <List />
    </>
    )
}