import dayjs from "dayjs";
import { navIcons, navLinks, type NavLinksTypes } from "@constants";
import useWindowStore from "@store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">William's portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }: NavLinksTypes) => (
            <li key={id} onClick={() => openWindow(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("dd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
