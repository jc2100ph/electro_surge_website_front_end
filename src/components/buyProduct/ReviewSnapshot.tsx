import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ReviewSnapshot() {

    const { id } = useParams()
    const page = 1

    const [averageRating, setAverageRating] = useState(0)
    const [reviewAmount, setReviewAmount] = useState(0)
    const [totalFiveStarRating, setTotalFiveStarRating] = useState(0)
    const [totalFourStarRating, setTotalFourStarRating] = useState(0)
    const [totalThreeStarRating, setTotalThreeStarRating] = useState(0)
    const [totalTwoStarRating, setTotalTwoStarRating] = useState(0)
    const [totalOneStarRating, setTotalOneStarRating] = useState(0)

    const [reviewData, setReviewData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reviewRatingResponse = await axios.get(`${import.meta.env.VITE_URL}/review/getReviewRatingData/${id}`)
                const reviewDataResponse = await axios.get(`${import.meta.env.VITE_URL}/review/getReviewData/${id}?page=${page}`)
                setAverageRating(reviewRatingResponse.data.averageRating)
                setReviewAmount(reviewRatingResponse.data.reviewAmount)
                setTotalFiveStarRating(reviewRatingResponse.data.totalFiveStarRating)
                setTotalFourStarRating(reviewRatingResponse.data.totalFourStarRating)
                setTotalThreeStarRating(reviewRatingResponse.data.totalThreeStarRating)
                setTotalTwoStarRating(reviewRatingResponse.data.totalTwoStarRating)
                setTotalOneStarRating(reviewRatingResponse.data.totalOneStarRating)
                setReviewData(reviewDataResponse.data.allReviews)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    let starRating: any = []

    const starRatingComponent = () => {
        let rating = averageRating

        for (let i = 0; i < rating; i++) {
            starRating.push(
                <svg key={i} width="40" height="40" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.0685 10.2763L17.0165 13.8126L18.2303 19.0774C18.2945 19.3527 18.2762 19.6407 18.1776 19.9056C18.079 20.1705 17.9045 20.4004 17.676 20.5666C17.4474 20.7329 17.1749 20.8281 16.8926 20.8403C16.6102 20.8525 16.3305 20.7812 16.0884 20.6353L11.4965 17.8502L6.91449 20.6353C6.67243 20.7812 6.39273 20.8525 6.11037 20.8403C5.82801 20.8281 5.55551 20.7329 5.32695 20.5666C5.09839 20.4004 4.9239 20.1705 4.82531 19.9056C4.72672 19.6407 4.70839 19.3527 4.77262 19.0774L5.98461 13.818L1.93176 10.2763C1.7174 10.0915 1.56239 9.8474 1.48618 9.57478C1.40997 9.30216 1.41595 9.01311 1.50336 8.74387C1.59077 8.47464 1.75573 8.2372 1.97754 8.06134C2.19936 7.88548 2.46816 7.77902 2.75023 7.75532L8.09234 7.29262L10.1776 2.31887C10.2865 2.05789 10.4702 1.83496 10.7055 1.67816C10.9409 1.52135 11.2173 1.43768 11.5001 1.43768C11.7829 1.43768 12.0594 1.52135 12.2947 1.67816C12.53 1.83496 12.7137 2.05789 12.8226 2.31887L14.9142 7.29262L20.2545 7.75532C20.5366 7.77902 20.8054 7.88548 21.0272 8.06134C21.249 8.2372 21.414 8.47464 21.5014 8.74387C21.5888 9.01311 21.5948 9.30216 21.5185 9.57478C21.4423 9.8474 21.2873 10.0915 21.073 10.2763H21.0685Z" fill="#282828" />
                </svg>
            )
        }
    }
    starRatingComponent()

    const productReviews = reviewData.map((object: any) => {
        let ReviewStarRating: any = []

        const reviewStarRatingComponent = () => {
            let rating = object.rating

            for (let i = 0; i < rating; i++) {
                ReviewStarRating.push(
                    <svg key={i} width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0685 10.2763L17.0165 13.8126L18.2303 19.0774C18.2945 19.3527 18.2762 19.6407 18.1776 19.9056C18.079 20.1705 17.9045 20.4004 17.676 20.5666C17.4474 20.7329 17.1749 20.8281 16.8926 20.8403C16.6102 20.8525 16.3305 20.7812 16.0884 20.6353L11.4965 17.8502L6.91449 20.6353C6.67243 20.7812 6.39273 20.8525 6.11037 20.8403C5.82801 20.8281 5.55551 20.7329 5.32695 20.5666C5.09839 20.4004 4.9239 20.1705 4.82531 19.9056C4.72672 19.6407 4.70839 19.3527 4.77262 19.0774L5.98461 13.818L1.93176 10.2763C1.7174 10.0915 1.56239 9.8474 1.48618 9.57478C1.40997 9.30216 1.41595 9.01311 1.50336 8.74387C1.59077 8.47464 1.75573 8.2372 1.97754 8.06134C2.19936 7.88548 2.46816 7.77902 2.75023 7.75532L8.09234 7.29262L10.1776 2.31887C10.2865 2.05789 10.4702 1.83496 10.7055 1.67816C10.9409 1.52135 11.2173 1.43768 11.5001 1.43768C11.7829 1.43768 12.0594 1.52135 12.2947 1.67816C12.53 1.83496 12.7137 2.05789 12.8226 2.31887L14.9142 7.29262L20.2545 7.75532C20.5366 7.77902 20.8054 7.88548 21.0272 8.06134C21.249 8.2372 21.414 8.47464 21.5014 8.74387C21.5888 9.01311 21.5948 9.30216 21.5185 9.57478C21.4423 9.8474 21.2873 10.0915 21.073 10.2763H21.0685Z" fill="#282828" />
                    </svg>
                )
            }
        }
        reviewStarRatingComponent()

        return (
            <>
                <div className="mb-10">
                    <h1 className=" font-futura-pt-heavy text-3xl tracking-wider mb-2">{object.title}</h1>
                    <div className=" flex mb-2">{ReviewStarRating}</div>
                    <p className=" font-futur-pt-medium tracking-wider text-tertiary w-[70%] mb-2">{object.reviewText}</p>
                    <p></p>
                </div>
            </>
        )
    })


    return (
        <>
            <div className="w-90%  ml-auto mr-auto mb-20">
                <section className="flex gap-10 mb-5">
                    <h1 className=" font-futura-pt-heavy text-4xl tracking-wider">Review Snapshot</h1>
                    <button className="btn !border-solid border-2 border-secondary p-2 w-[300px] font-futura-pt-heavy text-xl tracking-wider 
                    rounded-none hover:bg-secondary hover:text-white !ease-out !duration-200" onClick={() => (window as any).my_modal_1.showModal()
                        }>
                        Write A Button
                    </button>
                    <dialog id="my_modal_1" className="modal">
                        <form method="dialog" className="modal-box rounded-none p-1">
                            <div className=" bg-blue-500 mt-0 modal-action">
                                <button className="btn">Close</button>
                            </div>
                            <h1 className="">Hello!</h1>
                            <p className="">Press ESC key or click the button below to close</p>
                        </form>
                    </dialog>
                </section>

                <section className="flex gap-4 font-futura-pt-book tracking-wider text-2xl items-center mb-20">
                    <div className="flex gap-1">
                        {starRating}
                    </div>
                    <p>{reviewAmount} Reviews</p>
                </section>

                <section className=" font-futura-pt-book tracking-wider text-xl mb-32">
                    <div className="flex gap-5 mb-2 items-center">
                        <p>5 Star</p>
                        <div className=" relative w-[330px] h-[20px]">
                            <div className=" z-10 w-full h-full bg-myTransparent"></div>
                            <div className="z-20 top-0 absolute h-full bg-secondary" style={{ width: `${(totalFiveStarRating / reviewAmount) * 100}%` }}></div>
                        </div>
                        <div>{totalFiveStarRating}</div>
                    </div>
                    <div className="flex gap-5 mb-2 items-center">
                        <p>4 Star</p>
                        <div className=" relative w-[330px] h-[20px]">
                            <div className=" z-10 w-full h-full bg-myTransparent"></div>
                            <div className=" z-20 top-0 absolute h-full bg-secondary" style={{ width: `${(totalFourStarRating / reviewAmount) * 100}%` }}></div>
                        </div>
                        <div>{totalFourStarRating}</div>
                    </div>
                    <div className="flex gap-5 mb-2 items-center">
                        <p>3 Star</p>
                        <div className=" relative w-[330px] h-[20px]">
                            <div className=" z-10 w-full h-full bg-myTransparent"></div>
                            <div className=" z-20 top-0 absolute h-full bg-secondary" style={{ width: `${(totalThreeStarRating / reviewAmount) * 100}%` }}></div>
                        </div>
                        <div>{totalThreeStarRating}</div>
                    </div>
                    <div className="flex gap-5 mb-2 items-center">
                        <p>2 Star</p>
                        <div className=" relative w-[330px] h-[20px]">
                            <div className=" z-10 w-full h-full bg-myTransparent"></div>
                            <div className=" z-20 top-0 absolute w-[0%] h-full bg-secondary" style={{ width: `${(totalTwoStarRating / reviewAmount) * 100}%` }}></div>
                        </div>
                        <div>{totalTwoStarRating}</div>
                    </div>
                    <div className="flex gap-5 mb-2 items-center">
                        <p>1 Star</p>
                        <div className=" relative w-[330px] h-[20px]">
                            <div className=" z-10 w-full h-full bg-myTransparent"></div>
                            <div className=" z-20 top-0 absolute w-[0%] h-full bg-secondary" style={{ width: `${(totalOneStarRating / reviewAmount) * 100}%` }}></div>
                        </div>
                        <div>{totalOneStarRating}</div>
                    </div>
                </section>

                <section>
                    {productReviews}
                </section>
            </div>
        </>
    )
}