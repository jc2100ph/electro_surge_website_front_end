
export default function AllProducts(){
    return(
        <>
            <div className=" w-90%  ml-auto mr-auto mb-20">
                <div className="breadcrumbs mb-10">
                    <ul>
                        <li className=" font-futura-pt-book tracking-wider hover:font-futura-pt-heavy "><a>Home</a></li> 
                        <li className=" font-futura-pt-heavy tracking-wider">All Products</li>
                    </ul>
                </div>

                <section className="grid place-items-center">
                    <h1 className=" font-futura-pt-heavy text-center text-5xl tracking-wider">All Products</h1>
                    <button >
                        <img className="w-[50%] ml-auto mr-auto hover:scale-125 ease-in-out duration-200" src="https://ik.imagekit.io/uddq1v9vn/electro_surge_website/classic_flavor.webp?updatedAt=1685412322411" alt="" />
                    </button>
                    <h2 className=" font-futura-pt-heavy text-4xl tracking-[0.15em] p-3 border-solid border-secondary border-4">Classic Flavors</h2>

                    <button >
                        <img className="w-[50%] ml-auto mr-auto hover:scale-125 ease-in-out duration-200" src="https://ik.imagekit.io/uddq1v9vn/electro_surge_website/neo_flavor.webp?updatedAt=1685412322416" alt="" />
                    </button>
                    <h2 className=" font-futura-pt-heavy text-4xl tracking-[0.15em] p-3 border-solid border-secondary border-4">Neo Flavors</h2>
                </section>
            </div>
            
        </>
    )
}