
export default function Footer(){
    return(
        <>
            <footer className=" bg-secondary">
                <div className="grid grid-cols-[1fr,2fr] w-90% ml-auto mr-auto">
                    <section className="mt-5 mb-5">
                        <svg className=" ml-auto mr-auto" width="127" height="101" viewBox="0 0 127 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M126.28 7H60.3974L17 50.3974H103.356L60.1788 93.5762H123.509" stroke="white" stroke-width="13.4307" stroke-miterlimit="10"/>
                        </svg>
                        <p className=" font-futura-pt-heavy text-white tracking-wider text-center mt-3">"Unleash Your Inner Athlete, Defy Your Limits!"</p>
                        <div className="flex gap-5 items-center justify-center mt-2">
                            <button className="group">
                                <svg className=" group-hover:scale-125 ease-in-out duration-150" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="group-hover:fill-myRed ease-in-out duration-150 " d="M16.6666 25.0002L25.3166 20.0002L16.6666 15.0002V25.0002ZM35.9333 11.9502C36.15 12.7335 36.3 13.7835 36.4 15.1168C36.5166 16.4502 36.5666 17.6002 36.5666 18.6002L36.6666 20.0002C36.6666 23.6502 36.4 26.3335 35.9333 28.0502C35.5166 29.5502 34.55 30.5168 33.05 30.9335C32.2666 31.1502 30.8333 31.3002 28.6333 31.4002C26.4666 31.5168 24.4833 31.5668 22.65 31.5668L20 31.6668C13.0166 31.6668 8.66665 31.4002 6.94998 30.9335C5.44998 30.5168 4.48331 29.5502 4.06665 28.0502C3.84998 27.2668 3.69998 26.2168 3.59998 24.8835C3.48331 23.5502 3.43331 22.4002 3.43331 21.4002L3.33331 20.0002C3.33331 16.3502 3.59998 13.6668 4.06665 11.9502C4.48331 10.4502 5.44998 9.4835 6.94998 9.06683C7.73331 8.85016 9.16665 8.70016 11.3666 8.60016C13.5333 8.4835 15.5166 8.4335 17.35 8.4335L20 8.3335C26.9833 8.3335 31.3333 8.60016 33.05 9.06683C34.55 9.4835 35.5166 10.4502 35.9333 11.9502Z" fill="white"/>
                                </svg>
                            </button>
                            <button className="group">
                                <svg className=" group-hover:scale-125 ease-in-out duration-150" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="group-hover:fill-indigo-700 ease-in-out duration-150 " d="M11.375 2.9165H23.625C28.2917 2.9165 32.0833 6.70817 32.0833 11.3748V23.6248C32.0833 25.8681 31.1922 28.0195 29.6059 29.6058C28.0197 31.192 25.8683 32.0832 23.625 32.0832H11.375C6.70832 32.0832 2.91666 28.2915 2.91666 23.6248V11.3748C2.91666 9.13155 3.8078 6.98014 5.39404 5.39389C6.98029 3.80765 9.1317 2.9165 11.375 2.9165ZM11.0833 5.83317C9.69094 5.83317 8.35558 6.38629 7.37101 7.37086C6.38645 8.35543 5.83332 9.69078 5.83332 11.0832V23.9165C5.83332 26.8186 8.18124 29.1665 11.0833 29.1665H23.9167C25.309 29.1665 26.6444 28.6134 27.629 27.6288C28.6135 26.6442 29.1667 25.3089 29.1667 23.9165V11.0832C29.1667 8.18109 26.8187 5.83317 23.9167 5.83317H11.0833ZM25.1562 8.02067C25.6397 8.02067 26.1034 8.21273 26.4452 8.55459C26.7871 8.89645 26.9792 9.36012 26.9792 9.84359C26.9792 10.3271 26.7871 10.7907 26.4452 11.1326C26.1034 11.4744 25.6397 11.6665 25.1562 11.6665C24.6728 11.6665 24.2091 11.4744 23.8672 11.1326C23.5254 10.7907 23.3333 10.3271 23.3333 9.84359C23.3333 9.36012 23.5254 8.89645 23.8672 8.55459C24.2091 8.21273 24.6728 8.02067 25.1562 8.02067ZM17.5 10.2082C19.4339 10.2082 21.2885 10.9764 22.656 12.3439C24.0234 13.7113 24.7917 15.566 24.7917 17.4998C24.7917 19.4337 24.0234 21.2884 22.656 22.6558C21.2885 24.0233 19.4339 24.7915 17.5 24.7915C15.5661 24.7915 13.7115 24.0233 12.344 22.6558C10.9766 21.2884 10.2083 19.4337 10.2083 17.4998C10.2083 15.566 10.9766 13.7113 12.344 12.3439C13.7115 10.9764 15.5661 10.2082 17.5 10.2082ZM17.5 13.1248C16.3397 13.1248 15.2269 13.5858 14.4064 14.4062C13.5859 15.2267 13.125 16.3395 13.125 17.4998C13.125 18.6602 13.5859 19.773 14.4064 20.5934C15.2269 21.4139 16.3397 21.8748 17.5 21.8748C18.6603 21.8748 19.7731 21.4139 20.5936 20.5934C21.4141 19.773 21.875 18.6602 21.875 17.4998C21.875 16.3395 21.4141 15.2267 20.5936 14.4062C19.7731 13.5858 18.6603 13.1248 17.5 13.1248Z" fill="white"/>
                                </svg>
                            </button>
                            <button className="group">
                                <svg className=" group-hover:scale-125 ease-in-out duration-150" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="group-hover:fill-blue-600 ease-in-out duration-150 " d="M17.5 2.9751C9.47916 2.9751 2.91666 9.52302 2.91666 17.5876C2.91666 24.8793 8.25416 30.9313 15.225 32.0251V21.8168H11.5208V17.5876H15.225V14.3647C15.225 10.7043 17.3979 8.69176 20.7375 8.69176C22.3271 8.69176 23.9896 8.96885 23.9896 8.96885V12.5709H22.1521C20.3437 12.5709 19.775 13.6938 19.775 14.8459V17.5876H23.8292L23.1729 21.8168H19.775V32.0251C23.2115 31.4824 26.3407 29.729 28.5978 27.0814C30.8549 24.4339 32.0911 21.0667 32.0833 17.5876C32.0833 9.52302 25.5208 2.9751 17.5 2.9751Z" fill="white"/>
                                </svg>
                            </button>
                            <button className="group">
                                <svg className=" group-hover:scale-125 ease-in-out duration-150" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="group-hover:fill-cyan-400 ease-in-out duration-150 "  d="M32.7542 8.75016C31.6312 9.26058 30.4208 9.596 29.1667 9.75641C30.45 8.9835 31.4417 7.7585 31.9083 6.28558C30.6979 7.01475 29.3562 7.52516 27.9417 7.81683C26.7896 6.56266 25.1708 5.8335 23.3333 5.8335C19.9062 5.8335 17.1062 8.6335 17.1062 12.0897C17.1062 12.5856 17.1646 13.0668 17.2667 13.5189C12.075 13.2564 7.45207 10.7627 4.37499 6.98558C3.8354 7.90433 3.52915 8.9835 3.52915 10.121C3.52915 12.2939 4.6229 14.2189 6.31457 15.3127C5.27915 15.3127 4.31665 15.021 3.47082 14.5835V14.6272C3.47082 17.6606 5.62915 20.1981 8.48749 20.7668C7.5698 21.018 6.60637 21.0529 5.6729 20.8689C6.069 22.1121 6.84473 23.1999 7.89105 23.9794C8.93738 24.7589 10.2017 25.191 11.5062 25.2147C9.29486 26.9654 6.55373 27.9117 3.73332 27.8981C3.23749 27.8981 2.74165 27.8689 2.24582 27.8106C5.01665 29.5897 8.31249 30.6252 11.8417 30.6252C23.3333 30.6252 29.6479 21.0877 29.6479 12.8189C29.6479 12.5418 29.6479 12.2793 29.6333 12.0022C30.8583 11.1272 31.9083 10.0189 32.7542 8.75016Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                        <p className="font-futura-pt-heavy text-white tracking-wider text-center mt-3">© 2023 Electro Surge, Inc. All Rights Reserved.</p>
                    </section>
                    <section className="flex gap-20 text-white ml-auto mr-auto mt-5">
                        <div className="flex flex-col gap-2">
                            <h1 className=" font-futura-pt-heavy text-2xl tracking-[0.15em]">PRODUCTS</h1>
                            <button className=" font-futura-pt-book text-xl tracking-wider text-left hover:underline underline-offset-8">Classic Flavor</button>
                            <button className=" font-futura-pt-book text-xl tracking-wider text-left hover:underline underline-offset-8">Neo Flavor</button>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className=" font-futura-pt-heavy text-2xl tracking-[0.15em]">SUPPORT</h1>
                            <button className=" font-futura-pt-book text-xl tracking-wider text-left hover:underline underline-offset-8">About Us</button>
                            <button className=" font-futura-pt-book text-xl tracking-wider text-left hover:underline underline-offset-8">Warranty</button>
                            <button className=" font-futura-pt-book text-xl tracking-wider text-left hover:underline underline-offset-8">FAQ</button>
                            <button className=" font-futura-pt-book text-xl tracking-wider text-left hover:underline underline-offset-8">Contact</button>
                            <button className=" font-futura-pt-book text-xl tracking-wider text-left hover:underline underline-offset-8">Terms & conditions</button>
                        </div>
                    </section>
                </div>
            </footer>
        </>
    )
}