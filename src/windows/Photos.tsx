import { WindowControls } from "@components";
import { gallery, galleryAlbums, type GalleryAlbumId } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";
import clsx from "clsx";
import { useState } from "react";

const Photos = () => {
  const { openWindow } = useWindowStore();
  const [album, setAlbum] = useState<GalleryAlbumId>("all");

  const photos =
    album === "all" ? gallery : gallery.filter((p) => p.album === album);

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Gallery</h2>
      </div>

      <div className="flex w-full">
        <div className="sidebar">
          <h2>Albums</h2>
          <ul>
            {galleryAlbums.map(({ id, title, icon }) => (
              <li
                key={id}
                onClick={() => setAlbum(id)}
                className={clsx(id === album && "active")}
              >
                <img src={icon} alt="" />
                <p className="truncate">{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <ul>
            {photos.map(({ id, name, caption, img }) => (
              <li
                key={id}
                onClick={() =>
                  openWindow("imgfile", {
                    id,
                    name,
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    imageUrl: img,
                  })
                }
              >
                <img src={img} alt={caption} loading="lazy" />
                <p>{caption}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;
