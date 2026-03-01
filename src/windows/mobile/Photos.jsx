import { gallery } from "#constants";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import MobileWindowHeader from "#components/mobile/WindowHeader";
import useWindowStore from "#store/window";

const MobilePhotosContent = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      <MobileWindowHeader windowKey="photos" title="All Photos" />

      <div className="gallery">
        <ul>
          {gallery.map(({ id, img }) => (
            <li
              key={id}
              onClick={() =>
                openWindow("imgfile", {
                  id,
                  name: "Gallery image",
                  icon: "/images/image.png",
                  kind: "file",
                  fileType: "img",
                  imageUrl: img,
                })
              }
            >
              <img src={img} alt={`Gallery image ${id}`} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const MobilePhotos = MobileWindowWrapper(MobilePhotosContent, "photos");

export default MobilePhotos;
