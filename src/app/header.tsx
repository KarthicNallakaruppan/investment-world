import Image from 'next/image'; // Import the Image component
import Logo from './assets/images/logo.png'

export default function Header(){
    return (
        <section>
           

<header>
    <nav className="fixed z-20 w-full bg-white/80 dark:bg-gray-900/80 navbar peer-checked:navbar-active md:relative md:bg-transparent dark:shadow-none">
        <div className="xl:container m-auto px-6 md:px-12">
            <div className="flex flex-wrap items-center justify-between gap-6 md:pb-3 md:gap-0">
                <div className="w-full flex justify-between lg:w-auto">
                    <a href="#" aria-label="logo" className="flex space-x-2 items-center">
                        <Image src={Logo} alt="icon" className="mb-6" width="120" height="120"/>
                    </a>
                    <label className="peer-checked:hamburger block relative z-20 p-6 mr-16 cursor-pointer lg:hidden ">
                        <i className='bi bi-list text-4xl'/>
                    </label>
                </div>
                <div className="navmenu hidden w-full flex-wrap grow justify-end items-center mb-16 space-y-8 p-6 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                    <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                        <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                            <li>
                                <a href="#" className="block md:px-4 transition hover:text-primary ">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block md:px-4 transition hover:text-primary ">
                                    <span>Team</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block md:px-4 transition hover:text-primary ">
                                    <span>Services</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block md:px-4 transition hover:text-primary ">
                                    <span>Our clients</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block md:px-4 transition hover:text-primary ">
                                    <span>Important information</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block md:px-4 transition hover:text-primary ">
                                    <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full space-y-2 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max ">
                        <a href="tel:+64 3 379 1334" className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                            <span className="relative text-sm font-semibold text-white dark:text-gray-900">Call us</span>                    
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header> 
                                    
        </section>
    )
}
