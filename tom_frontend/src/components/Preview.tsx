import Nav from "./Nav";
import { useLocation } from "react-router-dom";

export default function Preview() {
    const location = useLocation()
    console.log("location", location)
    return (
    <>
    <Nav />
    </>
    )
}