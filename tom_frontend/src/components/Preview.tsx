
import Footer from "./Footer";
import List from "./List";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";

export default function Preview() {
    const location = useLocation()
    // the location should be /preview for the general/generic preview then /preview/x for paginated
    console.log("location", location?.pathname)
    return (
    <>
    <Nav />
    <List />
    <Footer />
    </>
    )
}