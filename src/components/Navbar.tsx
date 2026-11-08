import dayjs from "dayjs";
import { navIcons, navLinks } from "@constants";
import { useLocationStore } from "@store/location";
import useWindowStore from "@store/window";
import type { NavLinksTypes } from "../types/windowTypes";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const { resetActiveLocation } = useLocationStore();

  const openLink = (type: NavLinksTypes["type"]) => {
    // "Projects" always shows the Work folder.
    if (type === "finder") resetActiveLocation();
    openWindow(type);
  };

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">William's portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }: NavLinksTypes) => (
            <li key={id} onClick={() => openLink(type)}>
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
