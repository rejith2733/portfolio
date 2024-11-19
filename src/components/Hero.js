import HeroImg from '../assets/hero-img.png'
import { FaFacebook ,FaTwitter ,FaLinkedinIn} from "react-icons/fa";
export default function Hero(options) {
    const config={
        subtitle:'Im a Full-stack-developer and Designer'

    }
    return <section className="flex flex-col md:flex-row px-5 py-32  bg-secondary justify-center" id="Hero">
        <div className="w-1/2  flex flex-col">

        <h1 className="w-1/2 text-white text-6xl font-hero-font">Hi,<br />Im P Rejith
        <p className="text-2xl">{config.subtitle}</p>
        </h1>
        <div className="flex py-10 ">
            <a href="#" className="pr-5 hover:text-white"><FaFacebook size={30}/></a>
            <a href="#" className="pr-5 hover:text-white"><FaTwitter size={30} /></a>
            <a href="#" className="pr-5 hover:text-white"><FaLinkedinIn size={30}/></a>

        </div>
        </div>
        <img  className="md:w-1/3 "src={HeroImg} />
    </section>
}