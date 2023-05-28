
export default function HeadArticle(){
    return(
        <>
            <div className=" mt-40 mb-40">
                <section className="grid grid-cols-[2fr,1fr] gap-5 w-90% ml-auto mr-auto mb-52">
                    <div className="grid grid-cols-2">
                        <img className="object-cover brightness-75 h-[500px]" src="https://ik.imagekit.io/uddq1v9vn/electro_surge_website/nba.jpg?updatedAt=1685154577890"></img>
                        <img className="object-cover brightness-75 h-[500px]" src="https://ik.imagekit.io/uddq1v9vn/electro_surge_website/nba_2.jpg?updatedAt=1685154577979"></img>
                    </div>
                    <div className="tracking-wider place-self-end">
                        <h1 className=" text-secondary font-futura-pt-heavy text-2xl mb-5">Playoff Intensity: NBA's Finest Battle for Championship Glory</h1>
                        <p className= " text-tertiary font-futur-pt-medium mb-5">
                            "Experience the electrifying NBA Playoff intensity as basketball's elite athletes compete for championship glory, 
                            fueled by the refreshing energy of Electro Surge sport drink."
                        </p>
                        <button className=" bg-secondary font-futura-pt-heavy text-xl text-white p-4 w-40 tracking-[0.15em] 
                        hover:bg-myRed ease-in-out duration-200">
                            Shop Now
                        </button>
                    </div>
                </section>

                <section className="grid grid-cols-[1fr,2fr] place-item gap-5 w-90% ml-auto mr-auto">
                    <div className="tracking-wider place-self-end">
                        <h1 className=" text-secondary font-futura-pt-heavy text-2xl mb-5">Grand Slam Spectacular: MLB Season Kickoff Unleashes Diamond Excitement</h1>
                        <p className= " text-tertiary font-futur-pt-medium mb-5">
                        "Get ready for a thrilling ride as the MLB season swings into action, igniting the diamond with unforgettable moments and fierce competition."
                        </p>
                        <button className=" bg-secondary font-futura-pt-heavy text-xl text-white p-4 w-40 tracking-[0.15em] 
                        hover:bg-myGreen ease-in-out duration-200">
                            Shop Now
                        </button>
                    </div>
                    <div>
                        <img className=" object-cover h-[500px] brightness-75 w-full" src="https://ik.imagekit.io/uddq1v9vn/electro_surge_website/mlb.jpg?updatedAt=1685154577986"></img>
                    </div>
                </section>
            </div>
        </>
    )
}