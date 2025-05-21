import { skillsData } from "../../assets/data";
import { motion } from "framer-motion";

export const Skills = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-3 lg:gap-y-6 lg:gap-x-4">
      {skillsData.map((skill, id) => {
        return (
          <motion.div
            custom={id}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5, once: true }}
            key={id}
            className="flex flex-row items-center gap-x-3 rounded-xl border p-3 border-gray-100 shadow-md"
          >
            <img
              src={skill.icon}
              className="w-8 h-8"
              alt={skill.name}
              loading="lazy"
            ></img>
            <p className="font-stretch-75% text-start ">{skill.name}</p>
          </motion.div>
        );
      })}
    </div>
  );
};
