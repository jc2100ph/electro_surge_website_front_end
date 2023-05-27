export default function Carousel(){
    return (
        <>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://ik.imagekit.io/uddq1v9vn/electro_surge_website/banner_1_with_text.webp?updatedAt=1685082409413" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="group">
                            <svg className="w-20 group-hover:w-28 ease-in-out duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path className=" group-hover:fill-myRed ease-in-out duration-200" fill="white" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"/>
                            </svg>
                        </a> 
                        <a href="#slide2" className="group">
                            <svg className="w-20 group-hover:w-28 ease-in-out duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path className=" group-hover:fill-myGreen ease-in-out duration-200" fill="white" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/>
                            </svg>
                        </a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://ik.imagekit.io/uddq1v9vn/electro_surge_website/banner_2_with_text.webp?updatedAt=1685082409272" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="group">
                            <svg className="w-20 group-hover:w-28 ease-in-out duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path className=" group-hover:fill-myBlue ease-in-out duration-200" fill="white" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"/>
                            </svg>
                        </a> 
                        <a href="#slide3" className="group">
                            <svg className="w-20 group-hover:w-28 ease-in-out duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path className=" group-hover:fill-myRed ease-in-out duration-200" fill="white" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/>
                            </svg>
                        </a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://ik.imagekit.io/uddq1v9vn/electro_surge_website/banner_3_with_text_.webp?updatedAt=1685082493937" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="group">
                            <svg className="w-20 group-hover:w-28 ease-in-out duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path className=" group-hover:fill-myGreen ease-in-out duration-200" fill="white" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z"/>
                            </svg>
                        </a> 
                        <a href="#slide1" className="group">
                            <svg className="w-20 group-hover:w-28 ease-in-out duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path className=" group-hover:fill-myBlue ease-in-out duration-200" fill="white" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/>
                            </svg>
                        </a>
                    </div>
                </div> 
            </div>
        </>
    )
}