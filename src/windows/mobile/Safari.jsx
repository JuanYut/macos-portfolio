import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Copy,
  Mic,
  MoveRight,
  Search,
  Share,
} from "lucide-react";
import React from "react";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import MobileWindowHeader from "#components/mobile/WindowHeader";

const MobileSafariContent = () => {
  return (
    <>
      <h2>Safari Mobile</h2>
    </>
  );
};

const MobileSafari = MobileWindowWrapper(MobileSafariContent, "safari");

export default MobileSafari;
