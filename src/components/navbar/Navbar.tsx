import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { userIsNotLogin } from "../../store/login/loginSlice"
import { clearUserId } from "../../store/user/userSlice"

export default function Navbar() {
    const navigate = useNavigate()
    const hasUserLogin = useSelector((state: RootState) => state.hasUserLogin.value)
    const userId = useSelector((state: RootState) => state.userId.userId)
    const dispatch = useDispatch()

    const userLogout = async (e: { preventDefault: () => void; }) => {
        try {
            e.preventDefault()
            const logoutResponse = await axios.post(`${import.meta.env.VITE_URL}/user/logout`, {
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            )
            console.log(logoutResponse)
            dispatch(clearUserId())
            dispatch(userIsNotLogin())
            navigate("/")
        } catch (error) {
            console.error(error);
        }
    }
    const rightSideComponents = () => {
        return (
            <div className="flex items-center gap-7">
                <Link to={"/"}>
                    <button className="group">
                        <svg className="w-16 group-hover:w-20 ease-in-out duration-200" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="group-hover:stroke-black" d="M59.1302 14.8981H28.2264L7.86981 35.2547H48.3773L28.1239 55.5088H57.8304" stroke="white" stroke-width="6.3" stroke-miterlimit="10" />
                        </svg>
                    </button>
                </Link>
                <div className="font-futura-pt-demi text-white">
                    <Link to={"/products"}>
                        <button className="mr-7 tracking-widest
                                hover:text-myRed hover:underline underline-offset-8 hover:text-xl ease-in-out duration-200">
                            PRODUCT
                        </button>
                    </Link>
                    <button className="mr-7 tracking-wides
                            hover:text-myGreen hover:underline underline-offset-8 hover:text-xl ease-in-out duration-200">
                        ABOUT US
                    </button>
                    <button className="mr-7 tracking-widest
                            hover:text-myBlue hover:underline underline-offset-8 hover:text-xl ease-in-out duration-200">
                        SUPPORT
                    </button>
                </div>
            </div>
        )
    }

    const leftSideComponents = () => {
        return (
            <div className="flex items-center">
                <button className="group ml-7">
                    <svg className="w-7 group-hover:w-10 ease-in-out duration-200" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className=" group-hover:fill-myRed ease-in-out duration-200" d="M24.9133 23.5867L19.0457 17.7203C20.7464 15.6786 21.5944 13.0598 21.4134 10.4087C21.2324 7.75761 20.0363 5.27837 18.0739 3.48671C16.1115 1.69505 13.534 0.728915 10.8774 0.789289C8.22082 0.849664 5.68979 1.9319 3.81083 3.81086C1.93187 5.68982 0.849634 8.22085 0.789259 10.8774C0.728884 13.534 1.69502 16.1116 3.48668 18.0739C5.27834 20.0363 7.75758 21.2324 10.4087 21.4134C13.0597 21.5944 15.6786 20.7464 17.7203 19.0457L23.5867 24.9133C23.6738 25.0004 23.7772 25.0695 23.891 25.1166C24.0048 25.1638 24.1268 25.188 24.25 25.188C24.3732 25.188 24.4952 25.1638 24.609 25.1166C24.7228 25.0695 24.8262 25.0004 24.9133 24.9133C25.0004 24.8262 25.0695 24.7228 25.1166 24.609C25.1638 24.4952 25.188 24.3732 25.188 24.25C25.188 24.1268 25.1638 24.0049 25.1166 23.8911C25.0695 23.7773 25.0004 23.6738 24.9133 23.5867ZM2.68749 11.125C2.68749 9.45624 3.18234 7.82494 4.10947 6.4374C5.03659 5.04986 6.35435 3.9684 7.8961 3.32979C9.43785 2.69118 11.1344 2.52408 12.7711 2.84965C14.4078 3.17521 15.9112 3.9788 17.0912 5.15881C18.2712 6.33882 19.0748 7.84223 19.4004 9.47895C19.7259 11.1157 19.5588 12.8122 18.9202 14.3539C18.2816 15.8957 17.2002 17.2134 15.8126 18.1405C14.4251 19.0677 12.7938 19.5625 11.125 19.5625C8.88799 19.56 6.74332 18.6703 5.16152 17.0885C3.57972 15.5067 2.68997 13.362 2.68749 11.125Z" fill="white" />
                    </svg>
                </button>
                <div className="dropdown">
                    <button tabIndex={0} className="group ml-7 m-1">
                        <svg className="w-8 group-hover:w-10 ease-in-out duration-200" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className=" group-hover:fill-myGreen ease-in-out duration-200" d="M27.0609 24.8438C25.2762 21.7582 22.5258 19.5457 19.316 18.4969C20.9037 17.5517 22.1372 16.1115 22.8272 14.3974C23.5171 12.6833 23.6253 10.7902 23.1352 9.00864C22.6451 7.2271 21.5837 5.65571 20.114 4.53579C18.6444 3.41586 16.8477 2.80933 15 2.80933C13.1522 2.80933 11.3556 3.41586 9.88595 4.53579C8.41629 5.65571 7.3549 7.2271 6.86476 9.00864C6.37461 10.7902 6.48283 12.6833 7.17278 14.3974C7.86273 16.1115 9.09627 17.5517 10.684 18.4969C7.4742 19.5445 4.72381 21.757 2.93904 24.8438C2.87359 24.9505 2.83018 25.0692 2.81137 25.193C2.79255 25.3168 2.79872 25.4431 2.8295 25.5644C2.86028 25.6858 2.91506 25.7997 2.9906 25.8995C3.06613 25.9994 3.1609 26.0831 3.26931 26.1457C3.37771 26.2083 3.49756 26.2486 3.62179 26.2641C3.74601 26.2797 3.87209 26.2702 3.99258 26.2362C4.11308 26.2023 4.22555 26.1445 4.32337 26.0664C4.42118 25.9882 4.50235 25.8913 4.56209 25.7813C6.7699 21.9656 10.6722 19.6875 15 19.6875C19.3277 19.6875 23.2301 21.9656 25.4379 25.7813C25.4976 25.8913 25.5788 25.9882 25.6766 26.0664C25.7744 26.1445 25.8869 26.2023 26.0074 26.2362C26.1279 26.2702 26.254 26.2797 26.3782 26.2641C26.5024 26.2486 26.6222 26.2083 26.7307 26.1457C26.8391 26.0831 26.9338 25.9994 27.0094 25.8995C27.0849 25.7997 27.1397 25.6858 27.1705 25.5644C27.2012 25.4431 27.2074 25.3168 27.1886 25.193C27.1698 25.0692 27.1264 24.9505 27.0609 24.8438ZM8.43748 11.25C8.43748 9.95207 8.82237 8.68328 9.54346 7.60408C10.2646 6.52489 11.2895 5.68375 12.4886 5.18705C13.6878 4.69035 15.0073 4.5604 16.2803 4.81361C17.5533 5.06683 18.7226 5.69184 19.6404 6.60963C20.5582 7.52741 21.1832 8.69673 21.4364 9.96973C21.6896 11.2427 21.5596 12.5622 21.0629 13.7614C20.5662 14.9605 19.7251 15.9854 18.6459 16.7065C17.5667 17.4276 16.2979 17.8125 15 17.8125C13.2601 17.8107 11.592 17.1187 10.3616 15.8883C9.13135 14.658 8.43934 12.9899 8.43748 11.25Z" fill="white" />
                        </svg>
                    </button>
                    <ul className="dropdown-content menu p-2 bg-white w-[10vw]" tabIndex={0}>
                        {
                            (hasUserLogin === false) ?
                                <>
                                    <li>
                                        <Link className="font-futura-pt-heavy tracking-wider !rounded-none hover:bg-tertiary hover:text-white" to="/login">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256">
                                                <path fill="currentColor" d="m141.66 133.66l-40 40a8 8 0 0 1-11.32-11.32L116.69 136H24a8 8 0 0 1 0-16h92.69L90.34 93.66a8 8 0 0 1 11.32-11.32l40 40a8 8 0 0 1 0 11.32ZM192 32h-56a8 8 0 0 0 0 16h56v160h-56a8 8 0 0 0 0 16h56a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Z" />
                                            </svg>
                                            Log In
                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <Link className=" p-2 font-futura-pt-heavy tracking-wider !rounded-none hover:bg-tertiary hover:text-white" to={`/dashboard/${userId}`} >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256">
                                                <path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM74.08 197.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0ZM96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32Zm97.76 66.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75a88 88 0 1 1 131.52 0Z" />
                                            </svg>
                                            User Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <button className=" p-2 font-futura-pt-heavy tracking-wider !rounded-none hover:bg-tertiary hover:text-white" onClick={userLogout}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256">
                                                <path fill="currentColor" d="M112 216a8 8 0 0 1-8 8H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h56a8 8 0 0 1 0 16H48v160h56a8 8 0 0 1 8 8Zm109.66-93.66l-40-40a8 8 0 0 0-11.32 11.32L196.69 120H104a8 8 0 0 0 0 16h92.69l-26.35 26.34a8 8 0 0 0 11.32 11.32l40-40a8 8 0 0 0 0-11.32Z" />
                                            </svg>
                                            Log out
                                        </button>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
                <button className="group ml-7">
                    <svg className="w-7 group-hover:w-10 ease-in-out duration-200" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className=" group-hover:fill-myBlue ease-in-out duration-200" d="M26.032 5.89883C25.944 5.79352 25.834 5.70882 25.7096 5.6507C25.5853 5.59259 25.4497 5.56248 25.3125 5.5625H6.40781L5.83477 2.41484C5.75628 1.98281 5.52865 1.59204 5.19157 1.31064C4.85449 1.02923 4.42934 0.875063 3.99023 0.875H1.875C1.62636 0.875 1.3879 0.973772 1.21209 1.14959C1.03627 1.3254 0.9375 1.56386 0.9375 1.8125C0.9375 2.06114 1.03627 2.2996 1.21209 2.47541C1.3879 2.65123 1.62636 2.75 1.875 2.75H3.98437L6.97969 19.1902C7.06792 19.6778 7.28339 20.1334 7.6043 20.5109C7.16138 20.9246 6.8417 21.4529 6.68069 22.0372C6.51969 22.6215 6.52365 23.2389 6.69214 23.8211C6.86064 24.4033 7.18708 24.9274 7.63526 25.3354C8.08345 25.7434 8.63588 26.0192 9.23128 26.1324C9.82668 26.2456 10.4418 26.1917 11.0084 25.9766C11.575 25.7615 12.071 25.3937 12.4414 24.914C12.8117 24.4342 13.042 23.8613 13.1066 23.2587C13.1712 22.6561 13.0676 22.0474 12.8074 21.5H18.1301C17.9203 21.9391 17.8118 22.4196 17.8125 22.9062C17.8125 23.5552 18.0049 24.1896 18.3655 24.7292C18.726 25.2688 19.2385 25.6894 19.8381 25.9377C20.4376 26.1861 21.0974 26.2511 21.7339 26.1245C22.3704 25.9978 22.9551 25.6853 23.4139 25.2264C23.8728 24.7676 24.1853 24.1829 24.312 23.5464C24.4386 22.9099 24.3736 22.2501 24.1252 21.6506C23.8769 21.051 23.4563 20.5385 22.9167 20.178C22.3771 19.8174 21.7427 19.625 21.0937 19.625H9.74648C9.52693 19.625 9.31436 19.5479 9.14582 19.4072C8.97728 19.2665 8.86346 19.0711 8.82422 18.8551L8.45273 16.8125H22.0465C22.7051 16.8124 23.3429 16.5811 23.8485 16.159C24.3541 15.7369 24.6955 15.1508 24.8133 14.5027L26.2383 6.66758C26.2624 6.53216 26.2564 6.39308 26.2208 6.26023C26.1851 6.12737 26.1207 6.00399 26.032 5.89883ZM11.25 22.9062C11.25 23.1844 11.1675 23.4563 11.013 23.6875C10.8585 23.9188 10.6389 24.099 10.3819 24.2055C10.1249 24.3119 9.84219 24.3397 9.5694 24.2855C9.29662 24.2312 9.04605 24.0973 8.84938 23.9006C8.65271 23.704 8.51878 23.4534 8.46452 23.1806C8.41026 22.9078 8.43811 22.6251 8.54454 22.3681C8.65098 22.1111 8.83122 21.8915 9.06248 21.737C9.29374 21.5825 9.56562 21.5 9.84375 21.5C10.2167 21.5 10.5744 21.6482 10.8381 21.9119C11.1018 22.1756 11.25 22.5333 11.25 22.9062ZM22.5 22.9062C22.5 23.1844 22.4175 23.4563 22.263 23.6875C22.1085 23.9188 21.8889 24.099 21.6319 24.2055C21.3749 24.3119 21.0922 24.3397 20.8194 24.2855C20.5466 24.2312 20.296 24.0973 20.0994 23.9006C19.9027 23.704 19.7688 23.4534 19.7145 23.1806C19.6603 22.9078 19.6881 22.6251 19.7945 22.3681C19.901 22.1111 20.0812 21.8915 20.3125 21.737C20.5437 21.5825 20.8156 21.5 21.0937 21.5C21.4667 21.5 21.8244 21.6482 22.0881 21.9119C22.3518 22.1756 22.5 22.5333 22.5 22.9062ZM22.9687 14.1676C22.9294 14.3842 22.8151 14.58 22.6458 14.7208C22.4765 14.8616 22.2631 14.9383 22.043 14.9375H8.11172L6.74883 7.4375H24.1887L22.9687 14.1676Z" fill="white" />
                    </svg>
                </button>
            </div>
        )
    }


    return (
        <>
            <nav className="absolute z-40 w-full bg-myTransparent grid place-items-center h-24">
                <div className="flex justify-between w-90%">
                    {rightSideComponents()}
                    {leftSideComponents()}
                </div>
            </nav>
        </>
    )
}