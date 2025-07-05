import { useEffect, useState } from "react"
import Nav from "./Nav";

export default function SignUser() {

    
    const [signup, setSignUp] = useState(false)
    
    useEffect(() => {
        if (signup) {
            document.title = "Sign up"
        } else {
            document.title = "Sign in"
        }

    }, [signup])

    return (
        <>
        <Nav />
        <section className="form__container">
            {
                signup ? (

                ) : (
        <form>
            <legend>Sign up</legend>
            <fieldset>
            <label htmlFor="username">Username</label>
            <input type="text" />
            </fieldset>
            <fieldset>
            <label htmlFor="password">Password</label>
            <input type="password" />
            </fieldset>
            <input type="button" />
            <p></p>
        </form>
                )
            }
        </section>
        </>
    )
}