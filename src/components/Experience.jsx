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
      <div className="py-20">
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
      </div>
    </section>
  );
};
