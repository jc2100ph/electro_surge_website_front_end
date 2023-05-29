
export default function LoginForm(){
    return(
        <>
            <div className="place w-90%  ml-auto mr-auto mb-20">
                <div className="breadcrumbs mb-10">
                    <ul>
                        <li className=" font-futura-pt-book tracking-wider hover:font-futura-pt-heavy "><a>Home</a></li> 
                        <li className=" font-futura-pt-heavy tracking-wider">Login</li>
                    </ul>
                </div>

                <section className="grid">
                    <h1 className=" font-futura-pt-heavy text-center text-4xl tracking-wider mb-20">Log in to your Account</h1>
                    <form className="grid place-items-center mb-10" action=" ">
                        <div className="flex flex-col mb-16">
                            <label className=" font-futur-pt-medium tracking-wider text-tertiary text-xl mb-2" htmlFor="emailAddress">Email Address</label>
                            <input className="bg-myTransparent h-[40px] w-[400px] p-5 font-futura-pt-heavy tracking-wider" type="text" name="" id="" />
                        </div>
                        <div className="flex flex-col mb-20">
                            <label className=" font-futur-pt-medium tracking-wider text-tertiary text-xl mb-2" htmlFor="password">Password</label>
                            <input className="bg-myTransparent h-[40px] w-[400px] p-5 font-futura-pt-heavy tracking-wider" type="password" name="" id="" />
                        </div>
                        <button className=" bg-secondary font-futura-pt-heavy text-xl tracking-[0.15em] text-white p-3 w-[400px]
                        hover:bg-myRed ease-in-out duration-200">
                            Log in
                        </button>
                    </form>
                    <p className=" text-center text-2xl font-futur-pt-medium tracking-wider mb-3">New to Electro Surge ?</p>
                    <button className=" font-futura-pt-heavy text-xl tracking-[0.15em] border-solid border-2 p-2 w-[250px] border-black place-self-center mb-10
                    hover:bg-secondary hover:text-white ease-in-out duration-200">
                        Create Account
                    </button>
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