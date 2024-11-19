import AboutImage from '../assets/about.png';
export default function about()
{
    const config={
        line1:'Hi,I am Rejith P,I  build a  beautiful Websites with React.js and Tailwind  CSS',
        line2:'I am proficient in Frontend skills like React.js,Redux Tool Kit,Axios,Tailwind CSS,and SaSS',
        line3:'I am proficient in backend skills like Node.js,MongoDB '
    }
    return <section className="flex flex-col md:flex-row px-5 bg-primary" id="About">
        <div className="w-1/2">
            <img src={AboutImage} />
        </div>
        <div className="w-1/2 flex justify-center">
            <div className="flex  flex-col justify-center">

                <h1 className="text-4xl text-white border-b-4 border-[#2b2d77] mb-5 w-[160px] font-hero-font ">About Me</h1>
                 <p className='text-white pb-5 '>{config.line1}</p>
                 <p className='text-white pb-5' >{config.line2}</p>
                 <p className='text-white pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}