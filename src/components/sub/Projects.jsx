import { ProjectInfo } from "../../assets/data";
import { Headings } from "./Headings";
import { Modal } from "./Modal";
export const Projects = () => {
  return (
    <section
      aria-label="Projects Section"
      className=" align-element"
      id="projects"
    >
      <div className="py-20">
        <Headings text={"Projects"}></Headings>
        <div className="flex flex-col sm:flex-row gap-8">
          {ProjectInfo.map((project) => {
            const {
              id,
              image,
              type,
              title,
              website_url,
              github_url,
              techstack,
              description,
            } = project;
            return (
              <div
                key={id}
                className="relative group card bg-white  shadow-sm w-full"
              >
                <span className="absolute top-2 left-4 badge badge-sm text-white bg-primary-content font-bold">
                  {type}
                </span>
                <figure className="pt-10">
                  <img src={image} alt={`Image of the project ${title}`} />
                </figure>
                <div className="card-body p-2">
                  <h2 className="card-title text-center text-base md:text-lg ">
                    {title}
                  </h2>
                </div>
                <div className="absolute inset-0 bg-primary-content/100 opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white px-4 text-center rounded-box">
                  <ul className="flex flex-col gap-2 text-sm mt-6 sm:mt-8">
                    {techstack.map((tech, id) => (
                      <li key={id} className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                  <div className=" justify-center">
                    <button
                      className=" btn btn-primary btn-sm "
                      aria-label="know more about the project"
                      onClick={() => document.getElementById(id).showModal()}
                    >
                      Know More
                    </button>
                    <dialog id={id} className="modal">
                      <div className="modal-box w-11/12 max-w-5xl max-h-[80vh] text-black flex flex-col">
                        <div className="flex-grow overflow-y-auto">
                          <Modal
                            details={description}
                            githubURL={github_url}
                            websiteURL={website_url}
                          ></Modal>
                        </div>
                        <div>
                          <div className="modal-action">
                            <form method="dialog">
                              {/* if there is a button, it will close the modal */}
                              <button className="btn" aria-label="close button">
                                Close
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
