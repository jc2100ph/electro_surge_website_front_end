import { Link } from "react-router-dom";

export default function ProductArticle(){
    return (
        <>
            <article className=" w-90% ml-auto mr-auto mt-40 mb-40 ">
                <h1 className=" text-secondary text-center text-4xl font-futura-pt-heavy tracking-[0.15em]">
                    FUEL YOUR GAME IN OUR WAY
                </h1>

                <section className=" relative grid grid-cols-3 h-[500px] mt-28">
                    <div className=" bg-[#3845A8] pl-[20%] pr-[20%]">
                        <h1 className=" text-white font-futura-pt-heavy text-3xl tracking-wider pt-10">"Timeless Taste, Revitalize with Classic Flavors!"</h1>
                        <Link to={"/products"}>
                            <button className="bg-white font-futura-pt-heavy tracking-[0.15em] text-secondary mt-3 p-3 w-[50%] 
                            hover:bg-secondary hover:text-white ease-in-out duration-300">
                                Shop Now
                            </button>
                        </Link>
                    </div>
                    <div className=" bg-[#D21A42]"></div>
                    <div className=" bg-[#007400] pl-[12%]">
                        <p className=" w-[85%] text-white font-futura-pt-medium tracking-wider mt-[85%]">
                            “Indulge in our extraordinary sports drink, featuring classic flavors that transport you to a realm of 
                            invigoration. Replenish, revive, and embrace the nostalgia of timeless taste on your athletic journey.”
                        </p>
                    </div>
                    <img className=" absolute h-[82vh] top-[-20%] left-[38%] translate-x-[-50%] brightness-95 drop-shadow-myDropShadow 
                    hover:top-[-30%] ease-in-out duration-200" 
                    src="https://ik.imagekit.io/uddq1v9vn/electro_surge_website/blue_front.webp?updatedAt=1685276836808" alt="" />
                    <img className=" absolute z-10 h-[85vh] top-[-15%] left-[50%] translate-x-[-50%] brightness-95 drop-shadow-myDropShadow
                    hover:top-[-5%] ease-in-out duration-200" 
                    src="https://ik.imagekit.io/uddq1v9vn/electro_surge_website/red_front.webp?updatedAt=1685276836433" alt="" />
                    <img className=" absolute h-[82vh] top-[-20%] left-[62%] translate-x-[-50%] brightness-95 drop-shadow-myDropShadow
                    hover:top-[-30%] ease-in-out duration-200" 
                    src="https://ik.imagekit.io/uddq1v9vn/electro_surge_website/green_front.webp?updatedAt=1685276836932" alt="" />
                </section>

                <section className=" relative bg-court bg-center bg-cover h-[600px] p-[5%] ml-auto mr-auto mt-52">
                    <h1 className=" w-[40%] font-futura-pt-heavy tracking-wider text-white text-4xl">"Power Up: Unleash Your Potential with Dynamic Energy Drinks!"</h1>
                    <p className=" w-[40%] font-futur-pt-medium tracking-wider text-white mt-5">
                        Ignite your performance with our dynamic energy drinks. Unleash your potential, fuel your drive, 
                        and reach new heights of productivity and focus. Power up and conquer your goals!
                    </p>
                    <Link to={"/products"}>
                        <button className=" text-secondary bg-white font-futura-pt-heavy tracking-[0.15em] text-xl p-4 w-[18%] mt-5
                        hover:bg-myBlue hover:text-white ease-in-out duration-200">
                            Explore More
                        </button>
                    </Link>
                    <div className="group">
                        <img className=" absolute h-[82vh] top-[-10%] left-[50%] translate-x-[-50%] brightness-95 drop-shadow-myDropShadow 
                        group-hover:left-[45%] ease-in-out duration-300" 
                        src="https://ik.imagekit.io/uddq1v9vn/electro_surge_website/artic_oasis_front.webp?updatedAt=1685276836972" alt="" />
                        <img className=" absolute h-[82vh] z-10 top-[-5%] left-[57.5%] translate-x-[-42.5%] brightness-95 drop-shadow-myDropShadow 
                        group-hover:left-[55%] ease-in-out duration-200" 
                        src="https://ik.imagekit.io/uddq1v9vn/electro_surge_website/torrent_blue_front.webp?updatedAt=1685276836459" alt="" />
                        <img className=" absolute h-[85vh] z-20 top-[0] left-[65%] translate-x-[-35%] brightness-95 drop-shadow-myDropShadow 
                        group-hover:scale-110 ease-in-out duration-100" 
                        src="https://ik.imagekit.io/uddq1v9vn/electro_surge_website/raging_red_front.webp?updatedAt=1685276837001" alt="" />
                        <img className=" absolute h-[82vh] z-10 top-[-5%] left-[72.5%] translate-x-[-27.5%] brightness-95 drop-shadow-myDropShadow 
                        group-hover:left-[75%] ease-in-out duration-200" 
                        src="https://ik.imagekit.io/uddq1v9vn/electro_surge_website/gusting_green_front.webp?updatedAt=1685276836353" alt="" />
                        <img className=" absolute h-[82vh] top-[-10%] left-[80%] translate-x-[-20%] brightness-95 drop-shadow-myDropShadow
                        group-hover:left-[85%] ease-in-out duration-300" 
                        src="https://ik.imagekit.io/uddq1v9vn/electro_surge_website/black_out_burst_front.webp?updatedAt=1685276837247" alt="" />
                    </div>
                </section>
            </article>
        </>
    )
}