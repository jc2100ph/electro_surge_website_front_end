import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";

export default function RegisterForm(){

    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [verifyPassword, setverifyPassword] = useState("")

    const registerUser = async (e: { preventDefault: () => void }) => {
        try {
            e.preventDefault()

            if(password !== verifyPassword){
                toast.error('verify Password doesnt match Password', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                return
            }
            
            const registerResponse = await axios.post(`${process.env.RENDER_URL}/user/register`,{
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            },{ headers: {'Content-Type': 'application/json'}})

            console.log(registerResponse)

            if(registerResponse.data === true){
                toast.success('User Successfully Registered', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                return setTimeout(() => {navigate("/login")}, 3000);
            }else{
                toast.error('Failed to register user', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                return
            }
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <>
            <div className="place w-90%  ml-auto mr-auto mb-20">
                <div className="breadcrumbs mb-10">
                    <ul>
                        <li className=" font-futura-pt-book tracking-wider hover:font-futura-pt-heavy ">
                            <Link to={"/"}>
                                <a>Home</a>
                            </Link>
                        </li> 
                        <li className=" font-futura-pt-heavy tracking-wider">Register</li>
                    </ul>
                </div>

                <section className="grid">
                    <h1 className=" font-futura-pt-heavy text-center text-4xl tracking-wider mb-20">Create an account</h1>
                    <form className="grid place-items-center mb-10" onSubmit={registerUser}>
                        <div className="flex flex-col mb-16">
                            <label className=" font-futur-pt-medium tracking-wider text-tertiary text-xl mb-2" htmlFor="firstName">First Name</label>
                            <input className="bg-myTransparent h-[40px] w-[400px] p-5 font-futura-pt-heavy tracking-wider" 
                            type="text" name="firstName" id="firstName" onChange={(e) => setFirstName(e.target.value)} required/>
                        </div>
                        <div className="flex flex-col mb-16">
                            <label className=" font-futur-pt-medium tracking-wider text-tertiary text-xl mb-2" htmlFor="lastName">Last Name</label>
                            <input className="bg-myTransparent h-[40px] w-[400px] p-5 font-futura-pt-heavy tracking-wider" 
                            type="text" name="lastName" id="lastName" onChange={(e) => setLastName(e.target.value)} required/>
                        </div>
                        <div className="flex flex-col mb-16">
                            <label className=" font-futur-pt-medium tracking-wider text-tertiary text-xl mb-2" htmlFor="emailAddress">Email Address</label>
                            <input className="bg-myTransparent h-[40px] w-[400px] p-5 font-futura-pt-heavy tracking-wider" 
                            type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className="flex flex-col mb-16">
                            <label className=" font-futur-pt-medium tracking-wider text-tertiary text-xl mb-2" htmlFor="password">Password</label>
                            <input className="bg-myTransparent h-[40px] w-[400px] p-5 font-futura-pt-heavy tracking-wider" 
                            type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        <div className="flex flex-col mb-16">
                            <label className=" font-futur-pt-medium tracking-wider text-tertiary text-xl mb-2" htmlFor="verifyPassword">Verify Password</label>
                            <input className="bg-myTransparent h-[40px] w-[400px] p-5 font-futura-pt-heavy tracking-wider" 
                            type="password" name="verifyPassword" id="verifyPassword" onChange={(e) => setverifyPassword(e.target.value)} required/>
                        </div>
                        <div className="flex justify-center gap-3 items-center mb-16">
                            <input type="checkbox" className="checkbox checkbox-lg" required/>
                            <p className=" font-futur-pt-medium tracking-wider place-self-center w-[350px] text-center text-tertiary">
                                Yes, I'd like to opt-in to receive additional product information, news and special offers from Electro Surge. 
                                Please see our 
                                <a className="underline underline-offset-2" href=""> Privacy Policy </a>, 
                                <a className="underline underline-offset-2" href=""> Terms of Use </a> 
                                and About our Ads for details -- you may opt out at any time.
                            </p>
                        </div>
                        <button className=" bg-secondary font-futura-pt-heavy text-xl tracking-[0.15em] text-white p-3 w-[400px] mb-2
                        hover:bg-myGreen ease-in-out duration-200" type="submit">
                            Create Account
                        </button>
                        <Link to={"/login"}>
                            <a className="font-futur-pt-medium tracking-wider" href="">Back to Login</a>
                        </Link>
                    </form>
                </section>
            </div>
        </>
    )
}