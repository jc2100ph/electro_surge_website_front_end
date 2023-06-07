import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { toast } from 'react-toastify';

export default function UserCheckOut(){

    const navigate = useNavigate()

    const [data, setData] = useState({ 
        userData: { firstName: "", lastName: ""},
        findCart: {userCart:[{orderPictureUrl: "", orderName:"", orderQuantity:0, orderPrice:0, _id:""}]},
        CartTotalPrice: ""
    })

    const [country, setCountry] = useState("Philippines")
    const [place, setPlace] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [city, setCity] = useState("")
    const [region, setRegion] = useState("")

    const completeAddress = `${place}, ${city}, ${region}, ${zipCode}, ${country}`
    
    useEffect(() => {
        const fetchData =async () => {
            try {
                const userResponse = await axios.get(`${process.env.RENDER_URL}/user/getUserData`, {
                    withCredentials: true,
                    headers: {
                    'Content-Type': 'application/json'
                    }
                })
                setData(userResponse.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()    
    },[])

    const cart = data.findCart.userCart.map((userCart : any) => {
        return(
            <>
                <section key={userCart._id} className="flex gap-4 items-center">
                    <div>
                        <img className="w-[60px]" src={`${userCart.orderPictureUrl}`} alt="" />
                    </div>
                    <div>
                        <h1 className=" font-futura-pt-heavy tracking-wider">{userCart.orderName}</h1>
                        <p className=" font-futura-pt-book tracking-wider">Quantity: {userCart.orderQuantity}</p>
                        <p className=" font-futura-pt-book tracking-wide">Price: {userCart.orderPrice}</p>
                    </div>
                </section>
            </>
        )
    })

    const checkOut = async () => {
        try {
            const createOrderResponse = await axios.post(`${process.env.RENDER_URL}/order/createOrder`,{
                itemQuantity: 0,
                totalPrice: data.CartTotalPrice,
                address: completeAddress
            } ,{ withCredentials: true, 
                headers: {'Content-Type': 'application/json'
            }})
            toast.success('Successfully Added Product', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return setTimeout(() => {navigate("/")}, 3000);
        } catch (error) {
            console.log(error)
        }
    }

    if(data === null){
        return (
            <>
                <h1>Loading</h1>
            </>
        )
    }
    
    return(
        <>
            <section className="w-90% ml-auto mr-auto mb-20 grid grid-cols-2 gap-10">
                <div className=" font-futur-pt-medium tracking-wider text-tertiary text-xl">
                    <div className="mb-10">
                        <p className="text-secondary text-2xl mb-3">User: {data.userData.firstName} {data.userData.lastName}</p>
                        <p className="text-secondary text-2xl">Email: </p>
                    </div>
                    <form action="">
                        <div className=" flex flex-col mb-3 w-[60%]">
                            <label htmlFor="mobileNo">Mobile NO:</label>
                            <input className=" bg-myTransparent p-2" type="text" />
                        </div>
                        <div className=" flex flex-col mb-3">
                            <label htmlFor="country">Country:</label>
                            <select className=" bg-myTransparent p-2" name="country" id="country" 
                            onChange={(e) => setCountry(e.target.value)} value={country}>
                                <option value="Philippines">Philippines</option>
                            </select>
                        </div>
                        <div className=" flex flex-col mb-8">
                            <label htmlFor="place">Apartment Suite, Etc:</label>
                            <input className=" bg-myTransparent p-2" type="text" name="place" id="place"
                            onChange={(e) => {setPlace(e.target.value)}} required/>
                        </div>
                        <div className=" flex items-center justify-between mb-3">
                            <div className=" flex flex-col w-[48%]">
                                <label htmlFor="zipCode">Zip Code:</label>
                                <input className=" bg-myTransparent p-2" type="text" name="zipCode" id="zipCode"
                                onChange={(e) => {setZipCode(e.target.value)}} required/>
                            </div>
                            <div className=" flex flex-col w-[48%]">
                                <label htmlFor="city">City:</label>
                                <input className=" bg-myTransparent p-2" type="text" name="city" id="city"
                                onChange={(e) => {setCity(e.target.value)}} required/>
                            </div>
                        </div>
                        <div className=" flex flex-col mb-10">
                            <label htmlFor="region">Region:</label>
                            <input className=" bg-myTransparent p-2" type="text" name="region" id="region"
                            onChange={(e) => {setRegion(e.target.value)}} required/>
                        </div>
                        <button className=" bg-secondary p-3 font-futura-pt-heavy tracking-[0.15em] text-white w-[50%]" onClick={checkOut}>
                            Check Out Now
                        </button>
                    </form>
                </div>
                <div className=" justify-self-center">
                    {cart}
                    <p className=" font-futura-pt-heavy tracking-wider text-xl">Total Price: ₱{data.CartTotalPrice}</p>
                </div>
            </section>
        </>
    )
}