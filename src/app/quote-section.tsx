import { poppins } from './fonts/fonts'
import Light from './assets/images/light.png'
import Image from 'next/image'; // Import the Image component

export default function QuoteSection(){
    return (
        <div className="bg-background container flex flex-col px-12 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center mb-32">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                  <h2 className={`${poppins.className} font-extrabold md:text-4xl text-2xl text-primary mb-2`}>
                    "We respect and value the openness and trust of our clients."</h2>                    
                    <div className="mt-8 space-y-5">
                    <span className="text-center mb-6 text-sm text-gray-600">Our philosophy is “pleasure now as well as later” when it comes to money! Our aim is to help you have a great life and achieve your potential. Our goal is to support and guide you with your savings and investments so that your life works out well for you.</span>
                    </div>
                </div>

                <div className="self-center mt-6 flex">
                    <button className="self-center font-semibold bg-secondary text-white mr-8 py-3 px-12 rounded-full hover:bg-primary duration-200 flex items-center"><i className="bi bi-chat-left-text mr-2"/>Message us today!</button>
                    <a href="#" className="self-center text-sm text-primary hover:text-secondary underline duration-200">Learn more</a>
                </div>
            </div>    
            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                <Image src={Light} className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"  alt="glasses photo"/>
            </div>
        </div>
    )
}