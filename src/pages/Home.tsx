import Navbar from "../components/navbar/Navbar"
import Carousel from "../components/carousel/Carousel"
import HeadArticle from "../components/home_article/HeadArticle"
import GridArticle from "../components/home_article/GridArticle"
import ProductArticle from "../components/home_article/ProductArticle"

export default function Home() {
    return(
        <>
            <Navbar />
            <Carousel />
            <HeadArticle />
            <GridArticle />
            <ProductArticle />
        </>
    )
}