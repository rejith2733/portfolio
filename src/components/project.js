import Project1 from '../assets/project1.jpg';
import Project2 from '../assets/virtual-keyboard.webp'
export default function project()
{
    return <section className="flex  flex-col py-20 px-5 justify-center  bg-secondary text-white" id="Project"> 
        <div className="w-1/2">
            <div className="flex justify-center flex-col">

            <h1 className="text-4xl text-white border-b-4 border-[#2b2d77] mb-5 w-[160px] font-hero-font ">

                PROJECTS
            </h1> 
            <p className="py-4 px-4 font-hero-font ">These are some of my projects.I have build these with React.js,CSS,HTML,flask and Python ,Check them out.</p>
            </div>
        </div>
        <div className="w-full" >
            <div className="flex flex-col md:flex-row px-5 gap-10">
                <div className="relative">

                  <img className=" h-[250px] w-[500px]"src={Project1} alt="" />
                <div className="project-desc">
                    <p className="text-center px-5 py-5">"Crafting sleek, dynamic front ends for responsive watch shop websites, seamlessly blending style with functionality for an immersive browsing experience."</p>
                </div>
                </div>
                <div className="relative">
                    <img className=" h-[250px] w-[500px]" src={Project2} alt="" />
                    <div  className="project-desc">
                        <p className='text-center px-5 py-5'>"Integrating Flask to create a fluid virtual keyboard and mouse interface, enhancing user interaction with intuitive controls and seamless web navigation."</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}