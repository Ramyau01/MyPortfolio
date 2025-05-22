import { Headings } from "./Headings";

export const About = () => {
  return (
    <section
      id="about"
      aria-label="About Section"
      // className="my-24 md:my-32 align-element"
      className=" align-element"
    >
      <div className="flex md:flex-row flex-col-reverse py-20">
        <div className="md:w-1/2">
          <Headings text={"Ramya Unnikrishnan"}></Headings>
          <p className="text-center text-base">
            I'm a Front-End Developer with a solid background in web
            technologies and nearly 4.5 years of experience working with Python.
            After spending 4 years in the fitness industry, I bring a mix of
            tech skills, leadership, and hands-on client experience. Recently,
            I’ve focused on sharpening my skills in React.js, Tailwind CSS,
            building responsive, user-friendly applications. I enjoy working on
            collaborative projects and creating smooth, engaging digital
            experiences.
          </p>
          <p className="text-center text-base">
            I'm currently on an L2 visa and can be reached at
            <span> </span>
            <a
              href="tel:+14702267456"
              className="text-primary-content underline hover:text-primary"
            >
              +1 (470) 226-7456
            </a>
            or via email at <span> </span>
            <a
              href="mailto:ramyakrishnan13@gmail.com"
              className="text-primary-content underline hover:text-primary"
            >
              ramyakrishnan13@gmail.com
            </a>
            .
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center p-2">
          <img
            src="/ramya.webp"
            loading="lazy"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-primary-content object-cover"
            alt="picture of Ramya Unnikrishnan"
          ></img>
        </div>
      </div>
    </section>
  );
};
