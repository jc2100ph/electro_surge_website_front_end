import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"



export default function UserDashboard() {

    const [data, setData] = useState({
        userData: { _id: "", firstName: "", lastName: "", email: "" },
        findOrder: { _id: "", itemQuantity: 0, totalPrice: 0, dateOrdered: 0, status: "" },
        findCart: {
            _id: "",
            userId: "",
            totalCartPrice: 0,
            userCart: [{ _id: "", cartPictureUrl: "", cartName: "", cartQuantity: 0, cartPrice: 0 }]
        }
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axios.get(`${import.meta.env.VITE_URL}/user/getUserData`, {
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

    }, [])
    console.log(data)



    let cart

    if (data.findCart.userCart && data.findCart.userCart.length > 0) {
        cart = data.findCart.userCart.map((userCart: any) => (
            <section key={userCart._id} className="flex gap-4 items-center">
                <div>
                    <img className="w-[60px]" src={`${userCart.cartPictureUrl}`} alt="" />
                </div>
                <div>
                    <h1 className="font-futura-pt-heavy tracking-wider">{userCart.cartName}</h1>
                    <p className="font-futura-pt-book tracking-wider">Quantity: {userCart.cartQuantity}</p>
                    <p className="font-futura-pt-book tracking-wide">Price: {userCart.cartPrice}</p>
                    <button
                        className="border-solid border-secondary border-2 p-2 w-[70%] font-futura-pt-heavy tracking-[0.15em] hover:bg-secondary hover:text-white ease-in-out duration-200"
                        onClick={async (e) => {
                            try {
                                e.preventDefault();
                                await axios.post(
                                    `${import.meta.env.VITE_URL}/user/removeFromCart/${userCart._id}`,
                                    {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                    }
                                );
                                window.location.reload();
                            } catch (error) {
                                console.log(error);
                            }
                        }}
                    >
                        Remove From Cart
                    </button>
                </div>
            </section>
        ));
    } else {
        cart = <p>No cart</p>;
    }

    if (data === null) {
        return (
            <>
                <h1>Loading</h1>
            </>
        )
    }

    return (
        <>
            <div className="place w-90%  ml-auto mr-auto mb-20">
                <div className="breadcrumbs mb-10">
                    <ul>
                        <li className=" font-futura-pt-book tracking-wider hover:font-futura-pt-heavy ">
                            <Link to={"/"}>
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className=" font-futura-pt-heavy tracking-wider">User</li>
                    </ul>
                </div>

                <h1 className=" font-futura-pt-heavy text-5xl tracking-wider underline underline-offset-8 mb-5">User Dashboard</h1>

                <section className="grid justify-between grid-cols-2">
                    <div>
                        <div className=" mb-10">
                            <h3 className=" font-futur-pt-medium text-2xl tracking-wider mb-3">Welcome {data.userData.firstName} {data.userData.lastName}</h3>
                            <h4 className=" font-futur-pt-medium text-xl tracking-wider">Email:</h4>
                            <p className=" font-futura-pt-book text-xl tracking-wider">{data.userData.email}</p>
                        </div>

                        <h2 className="font-futura-pt-heavy text-3xl tracking-wider mb-4">Order History</h2>
                        <div>
                            <div className="flex gap-5 font-futur-pt-medium tracking-wider">
                                {
                                    (data.findOrder === null) ?
                                        <>
                                            <p>No orders</p>
                                        </>
                                        :
                                        <>
                                            <div>
                                                <p>Order Id: {data.findOrder._id}</p>
                                                <p>Item Quantity: {data.findOrder.itemQuantity}</p>
                                                <p>Total Price: {data.findOrder.totalPrice}</p>
                                            </div>
                                            <div>
                                                <p>Order Placed: {data.findOrder.dateOrdered}</p>
                                                <p>Status: {data.findOrder.status}</p>
                                            </div>
                                        </>
                                }
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-futura-pt-heavy text-3xl tracking-wider mb-4">Cart</h2>
                        <div className="mb-5">
                            {cart}
                        </div>
                        <p className=" font-futura-pt-heavy tracking-wider text-xl">Total Price: ₱{data.findCart.totalCartPrice}</p>
                        <Link to={`/checkout/${data.userData._id}`}>
                            <button className=" bg-secondary p-2 text-white w-[50%] font-futura-pt-heavy text-3xl tracking-[0.15em]
                            hover:bg-myBlue ease-in-out duration-200">
                                Check Out
                            </button>
                        </Link>
                    </div>
                </section >
            </div >
        </>
    )
}