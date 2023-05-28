import Navbar from "../components/navbar/Navbar"
import Carousel from "../components/carousel/Carousel"
import HeadArticle from "../components/home_article/HeadArticle"
import GridArticle from "../components/home_article/GridArticle"

export default function Home() {
    return(
        <>
            <Navbar />
            <Carousel />
            <HeadArticle />
            <GridArticle />
        </>
    )
}