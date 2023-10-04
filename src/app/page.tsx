import HeroSection from "./hero-section"
import ThreeCardComponent from "./three-card-component"
import Header from "./header"
import Features from "./features"
import QuoteSection from "./quote-section"
import Footer from "./footer"

export default function Home() {
  return (
    <main className="min-h-screen 2xl:container m-auto">
      <Header/>
      <HeroSection/>
      <ThreeCardComponent/>
      <Features/>
      <QuoteSection/>
      <Footer/>
    </main>
  )
}
