import { poppins } from './fonts/fonts'
import Image from 'next/image'; // Import the Image component

export default function Features() {
    return (
        <section className="my-32 flex flex-col">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                <article className=" p-3 hover:transform hover:scale-105 duration-300 ">
                    <div className="backdrop-image bg-cover bg-left mb-6 h-96 rounded-sm"/>
                    <div className="mt-1 p-2">
                        <h2 className={`${poppins.className} font-bold text-black`}>What we do?</h2>
                        <p className="mt-1 text-sm text-gray-600">Every investor is different and comes with their own set of expectations, needs and objectives. We work with you in the best way to suit you, given your personality, lifestyle and individual financial situation.</p>
                    </div>
                </article>
                <article className=" p-3 hover:transform hover:scale-105 duration-300 ">
                <div className="backdrop-image bg-cover bg-center mb-6 h-96 rounded-sm"/>
                    <div className="mt-1 p-2">
                        <h2 className={`${poppins.className} font-bold text-black`}>Why we do?</h2>
                        <p className="mt-1 text-sm text-gray-600">We like people.  Our reward is seeing you lead the life you want.  We like finding a way to give you confidence that you can do what you want and that the funds will be available. And we are fascinated by the world of investment.</p>
                    </div>
                </article>
                <article className=" p-3 hover:transform hover:scale-105 duration-300 ">
                <div className="backdrop-image mb-6 h-96 rounded-sm bg-cover bg-right"/>
                    <div className="mt-1 p-2">
                        <h2 className={`${poppins.className} font-bold text-black`}>What does it cost?</h2>
                        <p className="mt-1 text-sm text-gray-600">We are a fee-only planning and investment advisory firm. We rebate investment entry fees
                            commissions and brokerage.  We accept brokerage only in special circumstances.</p>
                    </div>
                </article>
            </div>
            <article className="self-center flex justify-center items-center mt-6 flex-wrap">
                <button className="self-center font-semibold bg-secondary text-white mr-8 py-3 px-12 rounded-full hover:bg-primary duration-200 flex items-center mb-6"><i className="bi bi-chat-left-text mr-2"/>Message us today!</button>
                <a href="#" className="self-center text-sm text-primary hover:text-secondary underline duration-200 mb-6">Learn more</a>
            </article>
        </section>
    )
}
