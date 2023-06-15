import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";

export default function LoginForm() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const [noUser, setNoUser] = useState(false)
    const [wrongPassword, setWrongPassword] = useState(false)

    const loginUser = async (e: { preventDefault: () => void; }) => {
        try {
            e.preventDefault()
            setLoading(true)
            const loginResponse = await axios.post(`${import.meta.env.VITE_URL}/user/login`, {
                email: email,
                password: password
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(loginResponse)
            if (loginResponse.status === 200) {
                toast.success(`${loginResponse.data.success}`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
                setTimeout(() => {
                    navigate("/products")
                }, 2000);
            }
        } catch (error: any) {
            if (error.response.status === 404) {
                toast.warn(`${error.response.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setNoUser(true)
            }

            if (error.response.status === 401) {
                toast.warn(`${error.response.data.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setWrongPassword(true)
            }
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }
    }

    const breadCrumbs = () => {
        return (
            <div className="breadcrumbs mb-10">
                <ul>
                    <li className=" font-futura-pt-book tracking-wider hover:font-futura-pt-heavy ">
                        <Link to={"/"}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className=" font-futura-pt-heavy tracking-wider">Login</li>
                </ul>
            </div>
        )
    }


    return (
        <>
            <div className="place w-90%  ml-auto mr-auto mb-20">
                {breadCrumbs()}

                <section className="grid">
                    <h1 className=" font-futura-pt-heavy text-center text-4xl tracking-wider mb-20">Log in to your Account</h1>
                    <form className="grid place-items-center mb-10" onSubmit={loginUser}>
                        <div className="flex flex-col mb-16">
                            <label className=" font-futur-pt-medium tracking-wider text-tertiary text-xl mb-2" htmlFor="password">Email Address</label>
                            <input className={`input border-4 bg-myTransparent h-[40px] w-[400px] p-5 font-futura-pt-heavy tracking-wider rounded-none 
                            ${(noUser === true) ? "input-warning" : ""}`}
                                type="text" name="email" id="email" onChange={(e) => { setEmail(e.target.value); setNoUser(false); setWrongPassword(false) }} required />
                        </div>
                        <div className="flex flex-col mb-20">
                            <label className=" font-futur-pt-medium tracking-wider text-tertiary text-xl mb-2" htmlFor="password">Password</label>
                            <input className={`input border-4 bg-myTransparent h-[40px] w-[400px] p-5 font-futura-pt-heavy tracking-wider rounded-none
                            ${(wrongPassword === true) ? "input-warning" : ""}`}
                                type="password" name="password" id="password" onChange={(e) => { setPassword(e.target.value); setNoUser(false); setWrongPassword(false) }} required />
                        </div>
                        {
                            (loading === true) ?
                                <>
                                    <button className=" bg-secondary font-futura-pt-heavy text-xl tracking-[0.15em] text-white p-3 w-[400px]
                                    hover:bg-myRed ease-in-out duration-200" type="submit" disabled>
                                        <span className="loading loading-spinner loading-sm"></span>
                                    </button>
                                </>
                                :
                                <>
                                    <button className=" bg-secondary font-futura-pt-heavy text-xl tracking-[0.15em] text-white p-3 w-[400px]
                                    hover:bg-myRed ease-in-out duration-200" type="submit">
                                        Log In
                                    </button>
                                </>
                        }
                    </form>
                    <p className=" text-center text-2xl font-futur-pt-medium tracking-wider mb-3">New to Electro Surge ?</p>
                    <Link className="place-self-center mb-10" to={"/register"}>
                        <button className="font-futura-pt-heavy text-xl tracking-[0.15em] border-solid border-2 p-2 w-[250px] border-black 
                                    hover:bg-secondary hover:text-white ease-in-out duration-200">
                            Create Account
                        </button>
                    </Link>
                    <p className=" font-futur-pt-medium tracking-wider place-self-center w-[400px] text-center text-tertiary">
                        By clicking `Login`, you are indicating that you have read and agreed to the
                        <a className="underline underline-offset-2" href=""> Terms of Service </a> and
                        <a className="underline underline-offset-2" href=""> Privacy Policy.</a>
                    </p>
                </section>
            </div>
        </>
    )
}