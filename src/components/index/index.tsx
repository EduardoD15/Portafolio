import Carousel from "../carousel/carousel";
import Skill from "../skills/skills";
import Header from "../main/header";
import Projects from "../projects/ProjectsFilterPage";
import Experience from "../experience/experience";

export default function Home() {
    return (
        <div className="text-white">     
            <Header scrollToSectionId="Carousel" />
       
            <main>
                <article id="Carousel" className="m-auto w-[95%] mb-[50px] max-w-screen-2xl">
                    <h2 className="text-white font-bold text-center text-3xl mt-[10px]">
                        Proyectos destacados
                    </h2>
                    <hr className="w-24 border-t-4 shadow-[0_0_20px_#8e44ad] border-purple-600 mx-auto mt-2" />
                    <Carousel />
                </article>

                <article className="m-auto mt-[70px] w-[95%] mb-[50px] max-w-screen-2xl">
                   <Skill />
                </article>

                <article className="">
                    <Projects/>
                </article>
                <div className="m-auto mt-[20px] w-[95%] mb-[50px] max-w-screen-2xl">
                    <Experience/>
                </div>

            </main>
        </div>
    );
}