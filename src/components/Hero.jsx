import viewIcon from "../assets/view-icon.svg";
import downloadIcon from "../assets/download-icon.svg";
import { Button, LinkButton, IconButtons } from "./Buttons";

export const Hero = ({ height }) => {
  return (
    <div
      className="hero"
      style={{
        height: `calc(100vh - ${height})`,
      }}
    >
      <div className="hero-content text-center flex flex-col">
        <div className="max-w-md">
          <h1 className="font-bold text-3xl md:text-4xl leading-7 md:leading-14 tracking-widest">
            Hi I'm Ramya!
          </h1>
          <h2 className="font-extrabold text-2xl md:text-3xl md:leading-14 tracking-widest mt-4 md:mt-2 text-primary-content">
            &lt;A Frontend Developer /&gt;
          </h2>
          <p className="py-6 leading-6 tracking-wider text-lg md:text-xl">
            I build exceptional digital experiences that combine stunning design
            with cutting-edge technology.
          </p>
        </div>
        <div className="flex gap-2">
          <Button className="w-1/2 bg-white border-black shadow-none text-black">
            <span>
              <img src={viewIcon} className="w-6 h-6" aria-hidden="true"></img>
            </span>
            Projects
          </Button>
          <LinkButton
            href="./Ramya Unnikrishnan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Resume"
            className=" w-1/2 flex gap-2 bg-white border-black text-black shadow-none"
            download
          >
            <span>
              <img src={downloadIcon} className="w-6 h-6" aria-hidden="true" />
            </span>
            Resume
          </LinkButton>
        </div>
        <div className="flex flex-row gap-4 pt-4">
          <IconButtons></IconButtons>
        </div>
      </div>
    </div>
  );
};
