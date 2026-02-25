import { WindowControls } from "@components";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 space-y-6 bg-white">
        <div className="flex gap-2 items-center">
          {subtitle && <h3 className="text-lg font-semibold">{subtitle}</h3>}
          {image && (
            <div>
              <img
                src={"/images/Rolling_Eyes_Emoji_Icon.jpg"}
                alt={name}
                className="w-8 h-8 rounded"
              />
            </div>
          )}
        </div>
        {Array.isArray(description) && description.length > 0 && (
          <div className="space-y-3 leading-relaxed text-base text-gray-800">
            {description.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
