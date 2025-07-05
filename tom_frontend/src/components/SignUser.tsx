import { useEffect, useState } from "react"
import Nav from "./Nav";

export default function SignUser() {

    
    const [signup, setSignUp] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    
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
                     <form>
                        <legend>Sign up</legend>
                            <fieldset>
                            <label htmlFor="username">Username</label>
                            <input type="text" />
                            </fieldset>
                            <fieldset>
                            <label htmlFor="email">Email</label>
                            <input type="email" />
                            </fieldset>
                            <fieldset>
                            <label htmlFor="password">Password</label>
                            <input type={!showPassword ? "password" : "text"} />
                            <button type="button" onClick={() => setShowPassword(!showPassword)}>i</button>
                            </fieldset>
                            <button type="button" onClick={() => setSignUp(!signup)} className="auth__button">Sign up</button>
                            <div>
                    <p>Have an account? </p><button> Login </button>
                            </div>
                </form>
                ) : (
                <form>
                    <legend>Sign in</legend>
                        <fieldset>
                            <label htmlFor="username">Username</label>
                            <input type="text" />
                            </fieldset>
                            <fieldset>
                            <label htmlFor="password">Password</label>
                            <input type={!showPassword ? "password" : "text"} />
                            <button type="button" onClick={() => setShowPassword(!showPassword)}>i</button>
                            </fieldset>
                            <button type="button" onClick={() => setSignUp(!signup)} className="auth__button">Sign in</button>
                    <p></p>
                </form>
                )
            }
        </section>
        </>
    )
}