import { links } from "../assets/data";
export const Navlinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, text, url } = link;
        return (
          <li key={id}>
            <a href={url} role="menuitem" className="text-base">
              {text}
            </a>
          </li>
        );
      })}
    </>
  );
};
