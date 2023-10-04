import { poppins } from './fonts/fonts'

export default function HeroSection() {
    return (
        <section className="w-full bg-cover bg-center py-48 hero-section rounded-t-sm" >
            <div className="text-center text-white flex flex-col">
                <h1 className={`${poppins.className} font-extrabold lg:text-4xl xs:text-2xl text-white text-center mb-2`}>
                    Investment world limited</h1>
                <span className="text-white text-center mb-6">A Financial Planning and investment advisory firm based in Christchurch.</span>
                <button className="self-center font-semibold bg-secondary text-white py-3 px-12 flex items-center rounded-full hover:bg-primary duration-200"><i className="mr-2 bi bi-telephone"/>Let's talk</button>
            </div>
        </section>
    )
}