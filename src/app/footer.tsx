import Image from 'next/image'; // Import the Image component
import Logo from './assets/images/logo.png'
import PIAMLogo from './assets/images/PIAMLogo.png'

export default function Footer() {
    return (
        <section className="px-8 mb-8" >
            <div className="w-full mx-auto p-4 md:py-8">
                <div className="sm:flex sm:justify-between flex-wrap">
                    <div className='flex'>
                        <a href="#" className="mb-4 mr-10 sm:mb-0">
                            <Image src={Logo} alt="icon" className="mb-6" width="120" height="120" />
                        </a>
                        <div><Image src={PIAMLogo} alt="icon" className="mb-6" width="120" height="120" /></div>
                    </div>
                    <div className="flex flex-col">
                        <ul className="flex flex-wrap mb-6 text-sm text-sm font-medium sm:mb-0 text-gray-600">
                            <li className='mb-2'>
                                <a href="#" className="mr-4 hover:underline hover:text-secondary md:mr-6 ">Home</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#" className="mr-4 hover:underline hover:text-secondary md:mr-6">Team</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#" className="mr-4 hover:underline hover:text-secondary md:mr-6 ">Services</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#" className="mr-4 hover:underline hover:text-secondary md:mr-6 ">Our clients</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#" className="mr-4 hover:underline hover:text-secondary md:mr-6 ">Important information</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#" className="hover:underline hover:text-secondary">Contact</a>
                            </li>
                        </ul>
                        <div className="flex flex-col text-gray-500 mt-6 sm:self-end">
                            <div className='flex flex-col sm:items-end'>
                                <span className='text-sm mb-2 text-black font-medium'><i className="mr-2 bi bi-telephone"/>Contact</span>
                                <a href="tel:+64 3 379 1334" className='text-sm hover:text-secondary'>+64 3 379 1334</a>
                                <a href="tel:0800 303 139" className='text-sm hover:text-secondary'>0800 303 139</a>
                            </div>
                            <div className='flex flex-col mt-6 sm:items-end'>
                                <span className='text-sm mb-2 text-black font-medium'><i className="mr-2 bi bi-geo-alt-fill"/>Address</span>
                                <span className='text-sm'>574 Mill Road, Ohoka RD2 <br />
                                    Kaiapoi 7692, New Zealand
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200  dark:border-gray-700 lg:my-8" />
                <span className="block text-xs text-gray-300 dark:text-gray-400">Copyright © 2023 Investment World Ltd. All Rights Reserved. <br /> Site by <a target="_blank" href="https://splashdigital.co.nz/" className="underline text-black hover:text-secondary">Splash digital.</a></span>
            </div>
        </section >
    )
}
