import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from 'react-toastify';


export default function BuyProduct(){

    const { id } = useParams()
    const [data, setData]: any = useState([])

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [averageRating, setAverageRating] = useState(0)
    const [reviewAmount, setReviewAmount] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [flavor, setFlavor] = useState("")
    const [pictureUrl, setPictureUrl] = useState("")
    const [productPrice, setProductPrice] = useState(0)
    const totalOrderPrice = productPrice * quantity

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const productResponse = await axios.get(`https://electro-surge-website-back-end.onrender.com/product/getProductData/${id}`)
                const ReviewRatingResponse = await axios.get(`https://electro-surge-website-back-end.onrender.com/review/getReviewRatingData/${id}`)
                setData(productResponse.data)
                setTitle(productResponse.data.name)
                setDescription(productResponse.data.description)
                setAverageRating(ReviewRatingResponse.data.averageRating)
                setReviewAmount(ReviewRatingResponse.data.reviewAmount)
                setFlavor(productResponse.data.option[0].color)
                setPictureUrl(productResponse.data.option[0].pictureUrl)
                setProductPrice(productResponse.data.option[0].price)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])
    
    let starRating: any = []

    const starRatingComponent = () => {
        let rating = averageRating
        
        for(let i=0; i < rating ; i++){
            starRating.push(
            <svg key={i} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.0685 10.2763L17.0165 13.8126L18.2303 19.0774C18.2945 19.3527 18.2762 19.6407 18.1776 19.9056C18.079 20.1705 17.9045 20.4004 17.676 20.5666C17.4474 20.7329 17.1749 20.8281 16.8926 20.8403C16.6102 20.8525 16.3305 20.7812 16.0884 20.6353L11.4965 17.8502L6.91449 20.6353C6.67243 20.7812 6.39273 20.8525 6.11037 20.8403C5.82801 20.8281 5.55551 20.7329 5.32695 20.5666C5.09839 20.4004 4.9239 20.1705 4.82531 19.9056C4.72672 19.6407 4.70839 19.3527 4.77262 19.0774L5.98461 13.818L1.93176 10.2763C1.7174 10.0915 1.56239 9.8474 1.48618 9.57478C1.40997 9.30216 1.41595 9.01311 1.50336 8.74387C1.59077 8.47464 1.75573 8.2372 1.97754 8.06134C2.19936 7.88548 2.46816 7.77902 2.75023 7.75532L8.09234 7.29262L10.1776 2.31887C10.2865 2.05789 10.4702 1.83496 10.7055 1.67816C10.9409 1.52135 11.2173 1.43768 11.5001 1.43768C11.7829 1.43768 12.0594 1.52135 12.2947 1.67816C12.53 1.83496 12.7137 2.05789 12.8226 2.31887L14.9142 7.29262L20.2545 7.75532C20.5366 7.77902 20.8054 7.88548 21.0272 8.06134C21.249 8.2372 21.414 8.47464 21.5014 8.74387C21.5888 9.01311 21.5948 9.30216 21.5185 9.57478C21.4423 9.8474 21.2873 10.0915 21.073 10.2763H21.0685Z" fill="#282828"/>
            </svg>
            )
        }
    }
    starRatingComponent()

    const flavorOptions = data.option?.map((option: any) =>{
        return(
            <option key={option._id} value={option.color} style={{color: `${option.hex}`}}>
                {option.color}
            </option>
        )
    })

    const handleFlavorChange = (e: { target: { value: any; }; }) => {
        const selectedFlavor = e.target.value;
        setFlavor(selectedFlavor)

        const selectedOption = data.option?.find((option: any) => option.color === selectedFlavor);
        if (selectedOption) {
            setPictureUrl(selectedOption.pictureUrl)
        }
    };

    const addToCart = async (e: { preventDefault: () => void; }) => {
        try {
            e.preventDefault()
            const responseAddToCart = await axios.post(`https://electro-surge-website-back-end.onrender.com/user/addToCart`,{
                orderProductId: id,
                orderName: title,
                orderColor: flavor,
                orderPictureUrl: pictureUrl,
                orderQuantity: quantity,
                orderPrice: totalOrderPrice
            } ,{ withCredentials: true, 
                headers: {'Content-Type': 'application/json'
            }})

            if(responseAddToCart.data === true){
                toast.success('Successfully add to cart', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }else if(responseAddToCart.data === "no token"){
                toast.warn('Login in first', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }else{
                toast.error('Something went wrong try again', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="w-90%  ml-auto mr-auto mb-20">
                <div className="breadcrumbs mb-10">
                    <ul>
                        <li className=" font-futura-pt-book tracking-wider hover:font-futura-pt-heavy ">
                            <Link to={"/"}>
                                <a>Home</a>
                            </Link>
                        </li> 
                        <li className=" font-futura-pt-book tracking-wider hover:font-futura-pt-heavy ">
                            <Link to={"/products"}>
                                <a>All Product</a>
                            </Link>
                        </li> 
                        <li className=" font-futura-pt-heavy tracking-wider">Sports Drink</li>
                    </ul>
                </div>
                
                <section className="grid grid-cols-2 gap-5 mb-20">
                    <div className=" border-secondary border-2 brightness-90 drop-shadow-myDropShadow ">
                        <img className="w-[200px] ml-auto mr-auto" src={pictureUrl} alt="" />
                    </div>
                    <div>
                        <h1 className=" font-futura-pt-heavy text-2xl tracking-wider mb-1">{title}</h1>
                        <p className=" font-futura-pt-book tracking-wider mb-2">"{description}"</p>
                        <div>
                            <div className="flex gap-4 font-futura-pt-book tracking-wider mb-2">
                                <div className="flex gap-1">
                                    {starRating}
                                </div>
                                <p>{averageRating.toFixed(2)}/5({reviewAmount})</p>
                                <a>Write A Review</a>
                            </div>
                        </div>
                        <p className=" font-futura-pt-heavy text-2xl mb-2">₱ {totalOrderPrice}</p>
                        <p className=" font-futura-pt-heavy text-2xl mb-2">Amount</p>
                        <select className=" font-futura-pt-book text-xl select tracking-wider w-full max-w-xs 
                        rounded-none border-b-2 border-t-0 border-l-0 border-r-0 border-secondary mb-4" 
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                        value={quantity}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                        </select>
                        <p className=" font-futura-pt-heavy text-2xl mb-2">Flavor</p>
                        <select className=" font-futura-pt-book text-xl select tracking-wider w-full max-w-xs 
                        rounded-none border-b-2 border-t-0 border-l-0 border-r-0 border-secondary mb-4"
                        value={flavor} onChange={handleFlavorChange} >
                            {flavorOptions}
                        </select>
                        <br></br>
                        <button className=" p-3 w-[300px] font-futura-pt-heavy text-2xl tracking-[0.15em] bg-secondary text-white 
                        hover:bg-myGreen ease-in-out duration-200" onClick={addToCart}>
                            Add To Cart
                        </button>
                    </div>
                </section>

                <section className="grid grid-cols-3">
                    <img className="w-[320px]" src="https://ik.imagekit.io/uddq1v9vn/electro_surge_website/label.png?updatedAt=1685754322701" alt="" />
                    <div >
                        <h1 className=" font-futura-pt-heavy text-2xl tracking-wider mb-5">Ingredients</h1>
                        <p className=" font-futura-pt-book tracking-wider w-[80%]">
                            Carbonated Water, Natural Flavorings (Citrus Extracts, Berry Extracts), Electrolyte Blend (Potassium Citrate, Sodium Citrate, 
                            Magnesium Citrate, Calcium Citrate), Citric Acid, Stevia Extract, Monk Fruit Extract, Malic Acid, Potassium Sorbate (Preservative), 
                            Sodium Benzoate (Preservative), Gum Acacia, Sucralose, Acesulfame Potassium, Calcium Disodium EDTA (to protect flavor), Yellow 5, Blue 1.
                        </p>
                    </div>
                    <div className=" ml-auto mr-auto">
                        <div className="flex items-center">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.4852 26.8898C47.6886 27.093 47.8499 27.3343 47.96 27.5998C48.0701 27.8654 48.1267 28.15 48.1267 28.4375C48.1267 28.725 48.0701 29.0096 47.96 29.2752C47.8499 29.5407 47.6886 29.782 47.4852 29.9852L32.1727 45.2977C31.9695 45.501 31.7283 45.6624 31.4627 45.7725C31.1971 45.8826 30.9125 45.9392 30.625 45.9392C30.3375 45.9392 30.0529 45.8826 29.7873 45.7725C29.5218 45.6624 29.2805 45.501 29.0774 45.2977L22.5149 38.7352C22.1044 38.3247 21.8738 37.768 21.8738 37.1875C21.8738 36.607 22.1044 36.0503 22.5149 35.6398C22.9253 35.2294 23.482 34.9988 24.0625 34.9988C24.643 34.9988 25.1997 35.2294 25.6102 35.6398L30.625 40.6574L44.3899 26.8898C44.593 26.6865 44.8343 26.5251 45.0998 26.415C45.3654 26.3049 45.65 26.2483 45.9375 26.2483C46.225 26.2483 46.5096 26.3049 46.7752 26.415C47.0408 26.5251 47.282 26.6865 47.4852 26.8898ZM63.4375 35C63.4375 40.6244 61.7697 46.1225 58.6449 50.799C55.5202 55.4756 51.0788 59.1205 45.8826 61.2728C40.6863 63.4252 34.9685 63.9884 29.4521 62.8911C23.9358 61.7938 18.8687 59.0854 14.8917 55.1084C10.9146 51.1313 8.2062 46.0642 7.10893 40.5479C6.01166 35.0316 6.57482 29.3137 8.72719 24.1174C10.8796 18.9212 14.5245 14.4798 19.201 11.3551C23.8775 8.23033 29.3756 6.5625 35 6.5625C42.5397 6.57046 49.7682 9.5691 55.0996 14.9004C60.4309 20.2318 63.4296 27.4604 63.4375 35ZM59.0625 35C59.0625 30.2409 57.6513 25.5886 55.0073 21.6316C52.3632 17.6745 48.6052 14.5904 44.2083 12.7691C39.8115 10.9479 34.9733 10.4714 30.3057 11.3999C25.638 12.3283 21.3505 14.62 17.9853 17.9852C14.6201 21.3504 12.3283 25.638 11.3999 30.3056C10.4714 34.9733 10.9479 39.8115 12.7692 44.2083C14.5904 48.6052 17.6745 52.3632 21.6316 55.0072C25.5887 57.6513 30.2409 59.0625 35 59.0625C41.3796 59.0553 47.4958 56.5178 52.0068 52.0068C56.5178 47.4957 59.0553 41.3796 59.0625 35Z" fill="black"/>
                            </svg>
                            <p className="font-futura-pt-heavy text-2xl tracking-wider">140mg Caffeine</p>
                        </div>
                        <div className="flex items-center">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.4852 26.8898C47.6886 27.093 47.8499 27.3343 47.96 27.5998C48.0701 27.8654 48.1267 28.15 48.1267 28.4375C48.1267 28.725 48.0701 29.0096 47.96 29.2752C47.8499 29.5407 47.6886 29.782 47.4852 29.9852L32.1727 45.2977C31.9695 45.501 31.7283 45.6624 31.4627 45.7725C31.1971 45.8826 30.9125 45.9392 30.625 45.9392C30.3375 45.9392 30.0529 45.8826 29.7873 45.7725C29.5218 45.6624 29.2805 45.501 29.0774 45.2977L22.5149 38.7352C22.1044 38.3247 21.8738 37.768 21.8738 37.1875C21.8738 36.607 22.1044 36.0503 22.5149 35.6398C22.9253 35.2294 23.482 34.9988 24.0625 34.9988C24.643 34.9988 25.1997 35.2294 25.6102 35.6398L30.625 40.6574L44.3899 26.8898C44.593 26.6865 44.8343 26.5251 45.0998 26.415C45.3654 26.3049 45.65 26.2483 45.9375 26.2483C46.225 26.2483 46.5096 26.3049 46.7752 26.415C47.0408 26.5251 47.282 26.6865 47.4852 26.8898ZM63.4375 35C63.4375 40.6244 61.7697 46.1225 58.6449 50.799C55.5202 55.4756 51.0788 59.1205 45.8826 61.2728C40.6863 63.4252 34.9685 63.9884 29.4521 62.8911C23.9358 61.7938 18.8687 59.0854 14.8917 55.1084C10.9146 51.1313 8.2062 46.0642 7.10893 40.5479C6.01166 35.0316 6.57482 29.3137 8.72719 24.1174C10.8796 18.9212 14.5245 14.4798 19.201 11.3551C23.8775 8.23033 29.3756 6.5625 35 6.5625C42.5397 6.57046 49.7682 9.5691 55.0996 14.9004C60.4309 20.2318 63.4296 27.4604 63.4375 35ZM59.0625 35C59.0625 30.2409 57.6513 25.5886 55.0073 21.6316C52.3632 17.6745 48.6052 14.5904 44.2083 12.7691C39.8115 10.9479 34.9733 10.4714 30.3057 11.3999C25.638 12.3283 21.3505 14.62 17.9853 17.9852C14.6201 21.3504 12.3283 25.638 11.3999 30.3056C10.4714 34.9733 10.9479 39.8115 12.7692 44.2083C14.5904 48.6052 17.6745 52.3632 21.6316 55.0072C25.5887 57.6513 30.2409 59.0625 35 59.0625C41.3796 59.0553 47.4958 56.5178 52.0068 52.0068C56.5178 47.4957 59.0553 41.3796 59.0625 35Z" fill="black"/>
                            </svg>
                            <p className="font-futura-pt-heavy text-2xl tracking-wider">1,440mg Electrolytes</p>
                        </div>
                        <div className="flex items-center">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.4852 26.8898C47.6886 27.093 47.8499 27.3343 47.96 27.5998C48.0701 27.8654 48.1267 28.15 48.1267 28.4375C48.1267 28.725 48.0701 29.0096 47.96 29.2752C47.8499 29.5407 47.6886 29.782 47.4852 29.9852L32.1727 45.2977C31.9695 45.501 31.7283 45.6624 31.4627 45.7725C31.1971 45.8826 30.9125 45.9392 30.625 45.9392C30.3375 45.9392 30.0529 45.8826 29.7873 45.7725C29.5218 45.6624 29.2805 45.501 29.0774 45.2977L22.5149 38.7352C22.1044 38.3247 21.8738 37.768 21.8738 37.1875C21.8738 36.607 22.1044 36.0503 22.5149 35.6398C22.9253 35.2294 23.482 34.9988 24.0625 34.9988C24.643 34.9988 25.1997 35.2294 25.6102 35.6398L30.625 40.6574L44.3899 26.8898C44.593 26.6865 44.8343 26.5251 45.0998 26.415C45.3654 26.3049 45.65 26.2483 45.9375 26.2483C46.225 26.2483 46.5096 26.3049 46.7752 26.415C47.0408 26.5251 47.282 26.6865 47.4852 26.8898ZM63.4375 35C63.4375 40.6244 61.7697 46.1225 58.6449 50.799C55.5202 55.4756 51.0788 59.1205 45.8826 61.2728C40.6863 63.4252 34.9685 63.9884 29.4521 62.8911C23.9358 61.7938 18.8687 59.0854 14.8917 55.1084C10.9146 51.1313 8.2062 46.0642 7.10893 40.5479C6.01166 35.0316 6.57482 29.3137 8.72719 24.1174C10.8796 18.9212 14.5245 14.4798 19.201 11.3551C23.8775 8.23033 29.3756 6.5625 35 6.5625C42.5397 6.57046 49.7682 9.5691 55.0996 14.9004C60.4309 20.2318 63.4296 27.4604 63.4375 35ZM59.0625 35C59.0625 30.2409 57.6513 25.5886 55.0073 21.6316C52.3632 17.6745 48.6052 14.5904 44.2083 12.7691C39.8115 10.9479 34.9733 10.4714 30.3057 11.3999C25.638 12.3283 21.3505 14.62 17.9853 17.9852C14.6201 21.3504 12.3283 25.638 11.3999 30.3056C10.4714 34.9733 10.9479 39.8115 12.7692 44.2083C14.5904 48.6052 17.6745 52.3632 21.6316 55.0072C25.5887 57.6513 30.2409 59.0625 35 59.0625C41.3796 59.0553 47.4958 56.5178 52.0068 52.0068C56.5178 47.4957 59.0553 41.3796 59.0625 35Z" fill="black"/>
                            </svg>
                            <p className="font-futura-pt-heavy text-2xl tracking-wider">Antioxidants & B Vitamins</p>
                        </div>
                        <div className="flex items-center">
                            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.4852 26.8898C47.6886 27.093 47.8499 27.3343 47.96 27.5998C48.0701 27.8654 48.1267 28.15 48.1267 28.4375C48.1267 28.725 48.0701 29.0096 47.96 29.2752C47.8499 29.5407 47.6886 29.782 47.4852 29.9852L32.1727 45.2977C31.9695 45.501 31.7283 45.6624 31.4627 45.7725C31.1971 45.8826 30.9125 45.9392 30.625 45.9392C30.3375 45.9392 30.0529 45.8826 29.7873 45.7725C29.5218 45.6624 29.2805 45.501 29.0774 45.2977L22.5149 38.7352C22.1044 38.3247 21.8738 37.768 21.8738 37.1875C21.8738 36.607 22.1044 36.0503 22.5149 35.6398C22.9253 35.2294 23.482 34.9988 24.0625 34.9988C24.643 34.9988 25.1997 35.2294 25.6102 35.6398L30.625 40.6574L44.3899 26.8898C44.593 26.6865 44.8343 26.5251 45.0998 26.415C45.3654 26.3049 45.65 26.2483 45.9375 26.2483C46.225 26.2483 46.5096 26.3049 46.7752 26.415C47.0408 26.5251 47.282 26.6865 47.4852 26.8898ZM63.4375 35C63.4375 40.6244 61.7697 46.1225 58.6449 50.799C55.5202 55.4756 51.0788 59.1205 45.8826 61.2728C40.6863 63.4252 34.9685 63.9884 29.4521 62.8911C23.9358 61.7938 18.8687 59.0854 14.8917 55.1084C10.9146 51.1313 8.2062 46.0642 7.10893 40.5479C6.01166 35.0316 6.57482 29.3137 8.72719 24.1174C10.8796 18.9212 14.5245 14.4798 19.201 11.3551C23.8775 8.23033 29.3756 6.5625 35 6.5625C42.5397 6.57046 49.7682 9.5691 55.0996 14.9004C60.4309 20.2318 63.4296 27.4604 63.4375 35ZM59.0625 35C59.0625 30.2409 57.6513 25.5886 55.0073 21.6316C52.3632 17.6745 48.6052 14.5904 44.2083 12.7691C39.8115 10.9479 34.9733 10.4714 30.3057 11.3999C25.638 12.3283 21.3505 14.62 17.9853 17.9852C14.6201 21.3504 12.3283 25.638 11.3999 30.3056C10.4714 34.9733 10.9479 39.8115 12.7692 44.2083C14.5904 48.6052 17.6745 52.3632 21.6316 55.0072C25.5887 57.6513 30.2409 59.0625 35 59.0625C41.3796 59.0553 47.4958 56.5178 52.0068 52.0068C56.5178 47.4957 59.0553 41.3796 59.0625 35Z" fill="black"/>
                            </svg>
                            <p className="font-futura-pt-heavy text-2xl tracking-wider">Potassium-Packed Electrolytes</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}