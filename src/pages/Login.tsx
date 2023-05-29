import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Spacer from '../components/Spacer';
import LoginForm from '../components/loginForm/LoginForm';


export default function Login(){
    return(
        <>
            <Navbar />
            <Spacer />
            <LoginForm />
            <Footer />
        </>
    )
}