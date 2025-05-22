export const Modal = ({ details, githubURL, websiteURL }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-center gap-4 my-4">
        <a
          href={githubURL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm text-primary-content hover:bg-primary hover:text-white transition"
        >
          GitHub Repository
        </a>
        <a
          href={websiteURL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm text-primary-content hover:bg-primary hover:text-white transition"
        >
          Live Demo
        </a>
      </div>

      <div>
        <ul>
          {details.map((detail, index) => (
            <li key={index} className="mb-3.5">
              <div className="flex flex-row gap-2">
                <span className="block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className=" text-primary h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div className="text-start"> {detail}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
