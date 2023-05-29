import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Spacer from '../components/Spacer';
import RegisterForm from '../components/registerForm/RegisterForm';


export default function Login(){
    return(
        <>
            <Navbar />
            <Spacer />
            <RegisterForm />
            <Footer />
        </>
    )
}