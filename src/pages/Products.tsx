import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Spacer from '../components/Spacer';
import AllProducts from '../components/products/AllProducts';



export default function Products(){
    return(
        <>
            <Navbar />
            <Spacer />
            <AllProducts />
            <Footer />
        </>
    )
}