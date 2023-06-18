import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Spacer from '../components/Spacer';
import BuyProduct from '../components/buyProduct/BuyProduct';
import ReviewSnapshot from '../components/buyProduct/ReviewSnapshot';

export default function ProductInfo() {
    return (
        <>
            <Navbar />
            <Spacer />
            <BuyProduct />
            <ReviewSnapshot />
            <Footer />
        </>
    )
}