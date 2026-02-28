import { Edit, PlusIcon, Share } from "lucide-react";

import useWindowStore from "#store/window";
import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";

const ImageFile = () => {
  const {
    windows: {
      imgfile: { data },
    },
  } = useWindowStore();

  if (!data) return null;

  const { title, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <p>{title}</p>

        <div className="flex items-end gap-3">
          <Edit className="icon" />
          <PlusIcon className="icon" />
          <Share className="icon" />
        </div>
      </div>

      <div className="preview">
        <img src={imageUrl} alt={title} />
      </div>
    </>
  );
};

const ImageFileWindow = WindowWrapper(ImageFile, "imgfile");

export default ImageFileWindow;
