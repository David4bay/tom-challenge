// import axios from "axios"

import Nav from "./Nav";
import EyeIcon from "./SVG/EyeIcon";
import EyeHideIcon from "./SVG/EyeHideIcon";
import { useEffect, useState } from "react"
import { useAuth } from "./AuthProvider/AuthProvider";
import Footer from "./Footer";

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

    // function signInOrRegister() {
    //     const PORT = import.meta.env.VITE_API_PORT
       
    //     if (signup) {
    //         signupUser().then((user) => {
    //             localStorage.setItem("user", user)
    //         })
    //     }
    // }

    // async function signupUser() {
    //     const PORT = import.meta.env.VITE_API_PORT

    //     const response = await axios.post(`http://localhost:${PORT}/user`)
    //     const data = await response.data
        
    //     return data
    // }

    const { user } = useAuth()
    

    console.log("user", user)

    return (
        <>
        <Nav />
        <section className="form__container">
            {
                signup ? (
                     <form className="signup__form">
                        <legend>
                        <h3>Sign up</h3>
                        </legend>
                            <fieldset className="form__field">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" className="form__input" />   
                            </fieldset>
                            <fieldset className="form__field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" className="form__input" />
                            </fieldset>
                            <fieldset className="form__field">
                                <label htmlFor="password">Password</label>
                            <div className="password__container">
                                <input type={!showPassword ? "password" : "text"} id="password" className="form__input" />
                                <button className="reveal__button" type="button" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeIcon /> : <EyeHideIcon />}
                                </button>
                            </div>
                            </fieldset>
                                <button className="auth__button" type="button" onClick={() => setSignUp(!signup)}>Sign up</button>
                            <div>
                                <p>Have an account? </p>
                                <button className="form__button" onClick={() => setSignUp(!signup)}>Login</button>
                            </div>
                </form>
                ) : (
                <form className="signin__form">
                    <legend>
                        <h3>Sign in</h3>
                    </legend>
                        <fieldset className="form__field">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" className="form__input" />
                        </fieldset>
                        <fieldset className="form__field">
                            <label htmlFor="password">Password</label>
                        <div className="password__container">
                            <input type={!showPassword ? "password" : "text"} id="password" className="form__input" />
                            <button className="reveal__button" type="button" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <EyeIcon /> : <EyeHideIcon />}
                            </button>
                        </div>
                        </fieldset>
                        <fieldset>
                            <button className="auth__button" type="button" onClick={() => setSignUp(!signup)}>Sign in</button>
                        </fieldset>
                        <div>
                    <p>Not registered? </p> <button className="form__button" onClick={() => setSignUp(!signup)}>Register</button>
                        </div>
                </form>
                )
            }
        </section>
        <Footer />
        </>
    )
}