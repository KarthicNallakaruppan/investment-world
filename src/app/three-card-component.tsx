import { poppins } from './fonts/fonts'
import Image from 'next/image'; // Import the Image component
import investmentWorldIcon from './assets/images/investmentWorldIcon.svg'

export default function ThreeCardComponent() {
    return (
        <section className="py-8 bg-primary rounded-b-sm">
            <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                <article className="relative p-3 hover:transform hover:scale-105 duration-300 ">
                    <Image src={investmentWorldIcon} alt="icon" className="mb-6" width="70" height="70"/>
                    <div className="mt-1 p-2 absolute ml-8 top-2.5 left-8">
                        <h2 className={`${poppins.className} font-bold text-white`}>Investment advice and Portfolio management</h2>
                        <p className="mt-1 text-sm text-slate-400 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    </div>
                </article>
                <article className="relative p-3 hover:transform hover:scale-105 duration-300 ">
                    <Image src={investmentWorldIcon} alt="icon" className="mb-6" width="70" height="70"/>
                    <div className="mt-1 p-2 absolute ml-8 top-2.5 left-8">
                        <h2 className={`${poppins.className} font-bold text-white`}>Financial planning</h2>
                        <p className="mt-1 text-sm text-slate-400 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    </div>
                </article>
                <article className="relative p-3 hover:transform hover:scale-105 duration-300 ">
                    <Image src={investmentWorldIcon} alt="icon" className="mb-6" width="70" height="70"/>
                    <div className="mt-1 p-2 absolute ml-8 top-2.5 left-8">
                        <h2 className={`${poppins.className} font-bold text-white`}>Independent and fee only</h2>
                        <p className="mt-1 text-sm text-slate-400 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    </div>
                </article>

            </div>
        </section>
    )
}
