import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import MobileWindowHeader from "#components/mobile/WindowHeader";
import useWindowStore from "#store/window";
import React from "react";

const MobileImageContent = () => {
  const {
    windows: {
      imgfile: { data },
    },
  } = useWindowStore();

  if (!data) return null;

  const { title, imageUrl } = data;

  return (
    <>
      <MobileWindowHeader windowKey="imgfile" title="Preview" />

      <div className="preview">
        <img src={imageUrl} alt={title} />
      </div>
    </>
  );
};

const MobileImage = MobileWindowWrapper(MobileImageContent, "imgfile");

export default MobileImage;
