import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import Spacer from "../components/Spacer"
import UserCheckOut from "../components/userCheckOut/UserCheckOut"

export default function Dashboard() {
    return(
        <>
            <Navbar />
            <Spacer />
            <UserCheckOut />
            <Footer />
        </>
    )
}