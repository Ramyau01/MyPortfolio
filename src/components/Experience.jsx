import { Headings } from "./sub/Headings";
import { Timeline } from "./sub/Timeline";
import { Skills } from "./sub/Skills";
import { Carousel } from "./sub/SkillsCarousel";
export const Experience = () => {
  return (
    <section
      className="align-element my-16"
      id="skills"
      aria-label="Experience and Skills"
    >
      <Headings text={"Experience and Skills"}></Headings>
      <div className="flex flex-col-reverse gap-10 md:flex-row">
        <div>
          <Timeline></Timeline>
        </div>
        <div className="hidden md:flex items-start">
          <Skills></Skills>
        </div>
        <div className="block md:hidden">
          <Carousel></Carousel>
        </div>
      </div>
    </section>
  );
};

//  <div className="relative w-full h-full flex flex-col justify-center items-center gap-y-10 lg:gap-y-20 py-10 ">
//    <div className=" bg-amber-300 w-80 md:w-[480px] px-12 relative lg:-left-[300px]">
//      <div className="relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wider">
//        <h3 className="text-lg sm:text-xl font-light text-gray-700">
//          Foundation and Basics
//        </h3>
//        <p className="text-gray-800">
//          <span className="block font-light">Education:</span>
//          <span className="block pl-2 font-extralight">Education details</span>
//        </p>
//        <div className="text-gray-800">
//          <span className="block font-light">Experience</span>
//          <ul className="pl-2">
//            <li className="my-1 font-extralight">Experience details</li>
//          </ul>
//        </div>
//        <span className="absolute top-20 left-full text-red-300">icon</span>
//      </div>
//      <div className="absolute w-14 top-20 left-full border border-gray-300 rounded-full aspect-square grid place-items-center text-red-400 font-light">
//        2020
//      </div>
//    </div>
//    <div className="absolute w-1 h-full bg-gray-300"></div>
//  </div>;
