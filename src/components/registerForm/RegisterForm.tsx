
export default function RegisterForm(){
    return(
        <>
            <div className="place w-90%  ml-auto mr-auto mb-20">
                <div className="breadcrumbs mb-10">
                    <ul>
                        <li className=" font-futura-pt-book tracking-wider hover:font-futura-pt-heavy "><a>Home</a></li> 
                        <li className=" font-futura-pt-heavy tracking-wider">Register</li>
                    </ul>
                </div>

                <section className="grid">
                    <h1 className=" font-futura-pt-heavy text-center text-4xl tracking-wider mb-20">Create an account</h1>
                    <form className="grid place-items-center mb-10" action=" ">
                        <div className="flex flex-col mb-16">
                            <label className=" font-futur-pt-medium tracking-wider text-tertiary text-xl mb-2" htmlFor="firstName">First Name</label>
                            <input className="bg-myTransparent h-[40px] w-[400px] p-5 font-futura-pt-heavy tracking-wider" type="text" name="" id="" />
                        </div>
                        <div className="flex flex-col mb-16">
                            <label className=" font-futur-pt-medium tracking-wider text-tertiary text-xl mb-2" htmlFor="lastName">Last Name</label>
                            <input className="bg-myTransparent h-[40px] w-[400px] p-5 font-futura-pt-heavy tracking-wider" type="text" name="" id="" />
                        </div>
                        <div className="flex flex-col mb-16">
                            <label className=" font-futur-pt-medium tracking-wider text-tertiary text-xl mb-2" htmlFor="emailAddress">Email Address</label>
                            <input className="bg-myTransparent h-[40px] w-[400px] p-5 font-futura-pt-heavy tracking-wider" type="email" name="" id="" />
                        </div>
                        <div className="flex flex-col mb-16">
                            <label className=" font-futur-pt-medium tracking-wider text-tertiary text-xl mb-2" htmlFor="password">Password</label>
                            <input className="bg-myTransparent h-[40px] w-[400px] p-5 font-futura-pt-heavy tracking-wider" type="password" name="" id="" />
                        </div>
                        <div className="flex flex-col mb-16">
                            <label className=" font-futur-pt-medium tracking-wider text-tertiary text-xl mb-2" htmlFor="verifyPassword">Verify Password</label>
                            <input className="bg-myTransparent h-[40px] w-[400px] p-5 font-futura-pt-heavy tracking-wider" type="password" name="" id="" />
                        </div>
                        <div className="flex justify-center gap-3 items-center mb-16">
                            <input type="checkbox" className="checkbox checkbox-lg" />
                            <p className=" font-futur-pt-medium tracking-wider place-self-center w-[350px] text-center text-tertiary">
                                Yes, I'd like to opt-in to receive additional product information, news and special offers from Electro Surge. 
                                Please see our 
                                <a className="underline underline-offset-2" href=""> Privacy Policy </a>, 
                                <a className="underline underline-offset-2" href=""> Terms of Use </a> 
                                and About our Ads for details -- you may opt out at any time.
                            </p>
                        </div>
                        <button className=" bg-secondary font-futura-pt-heavy text-xl tracking-[0.15em] text-white p-3 w-[400px] mb-2
                        hover:bg-myGreen ease-in-out duration-200">
                            Create Account
                        </button>
                        <a className="font-futur-pt-medium tracking-wider" href="">Back to Login</a>
                    </form>
                </section>
            </div>
        </>
    )
}