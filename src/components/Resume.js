import ResumeImage from '../assets/resume.png';
export default function Resume()
{
    return <section className="flex flex-col md:flex-row px-5 bg-primary" id="Resume">
        <div className="py-5 w-1/2 flex justify-center md:justify-center">
            <img className="w-[400px]" src={ResumeImage} alt/>
        </div>
        <div className="w-1/2 flex justify-end">
            <div className="flex  flex-col justify-center">

                <h1 className="text-4xl text-white border-b-4 border-[#2b2d77] mb-5 w-[140px] font-hero-font ">Resume</h1>
                 <p className='text-white pb-5 '>You can view my Resume  <a className="btn"href="https://drive.google.com/file/d/1VLFTHdSyaWLubxm7g7-tAQg8GxSDOSyP/view?usp=sharing">Download</a></p>
               
            </div>
        </div>
    </section>
}