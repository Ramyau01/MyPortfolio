import { socialLinks } from "../assets/data";
export const Button = ({ children }) => {
  return <button className="btn btn-primary">{children}</button>;
};

export const LinkButton = (props) => {
  const { children, className, ...rest } = props;
  return (
    <a className={`btn btn-primary ${className || ""}`} {...rest}>
      {children}
    </a>
  );
};

export const IconButtons = () => {
  return (
    <>
      {socialLinks.map((linkItem) => {
        const { id, icon, url, linkInfo } = linkItem;
        return (
          <a
            key={id}
            className="rounded-lg hover:bg-primary hover:text-secondary transition-colors"
            href={url}
            target="_blank"
            aria-label={linkInfo}
          >
            <img
              src={icon}
              className="w-7 sm:w-8 md:w-8"
              aria-hidden="true"
            ></img>
          </a>
        );
      })}
    </>
  );
};
