import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import Spacer from "../components/Spacer"
import UserDashboard from "../components/userDashboard/UserDashboard"

export default function Dashboard() {
    return(
        <>
            <Navbar />
            <Spacer />
            <UserDashboard />
            <Footer />
        </>
    )
}