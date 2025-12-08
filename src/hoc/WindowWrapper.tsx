import { useLayoutEffect, useRef, type ComponentType, type FC } from "react";
import { useGSAP } from "@gsap/react";
import useWindowStore from "@store/window";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import type { DockApp, WindowName } from "@constants";

type WindowWrapperProps<T> = T;

const WindowWrapper = <T extends object>(
  Component: ComponentType<T>,
  windowKey: WindowName & DockApp["id"]
) => {
  const Wrapped: FC<WindowWrapperProps<T>> = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef<HTMLElement | null>(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      return () => {
        instance.kill();
      };
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section
        id={windowKey}
        ref={ref as any}
        style={{ zIndex }}
        className="absolute"
      >
        <Component {...(props as T)} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default WindowWrapper;
