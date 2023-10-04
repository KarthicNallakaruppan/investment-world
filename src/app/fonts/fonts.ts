import { Inter, Poppins } from 'next/font/google'
 
// define your variable fonts
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['500','600', '700', '800', '900'], })

 
export { inter, poppins }