import Navbar from "../components/navbar/Navbar"
import Carousel from "../components/carousel/Carousel"
import HeadArticle from "../components/home_article/HeadArticle"
import GridArticle from "../components/home_article/GridArticle"
import ProductArticle from "../components/home_article/ProductArticle"
import Footer from "../components/footer/Footer"

export default function Home() {
    return(
        <>
            <Navbar />
            <Carousel />
            <HeadArticle />
            <GridArticle />
            <ProductArticle />
            <Footer />
        </>
    )
}