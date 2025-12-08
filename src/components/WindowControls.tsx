import type { DockApp, WindowName } from "@constants";
import useWindowStore from "@store/window";

const WindowControls = ({ target }: { target: WindowName & DockApp["id"] }) => {
  const { closeWindow } = useWindowStore();
  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" />
      <div className="maximize" />
    </div>
  );
};

export default WindowControls;
