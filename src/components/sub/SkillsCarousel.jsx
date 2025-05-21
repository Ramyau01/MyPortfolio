import { skillsData } from "../../assets/data";
export const Carousel = () => {
  return (
    <div className="carousel rounded-box w-full shadow-lg">
      {skillsData.map((skill, id) => {
        const isFirst = id === 0;
        const isLast = id === skillsData.length - 1;
        const roundedLeftClass = isFirst ? "rounded-l-box" : "";
        const roundedRightClass = isLast ? "rounded-r-box" : "";
        return (
          <div
            className={`carousel-item w-15 border border-gray-300 flex flex-col p-4 justify-center items-center  ${roundedLeftClass} ${roundedRightClass}`}
            key={id}
          >
            <img
              src={skill.icon}
              className="w-10 h-10"
              alt={skill.name}
              loading="lazy"
            ></img>
            <p className="font-stretch-75% text-start pt-2">{skill.name}</p>
          </div>
        );
      })}
    </div>
  );
};
