import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";
import { aboutMeInfo } from "#constants";

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />

          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="about-me space-y-4 max-w-6xl mx-auto">
        {/* Header */}
        <div className="space-y-3">
          <h2>About Me</h2>
          <p className="text-base text-gray-500">
            I’m Juan Santillán, a Front-End Engineer focused on building
            scalable, thoughtful, and high-performance digital experiences. I
            care deeply about clarity, design systems, and creating products
            that balance usability, performance, and intention.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-[1fr_1.8fr] gap-6 items-start">
          {/* Imagen principal */}
          <img
            src="/images/juan_photo.png"
            alt="Juan Santillán"
            className="rounded-lg object-cover w-full h-86"
          />

          {/* Texto + Mini Galería */}
          <div className="space-y-8">
            <div className=" text-gray-600 leading-relaxed">
              <p>
                Outside of coding, I stay grounded through boxing and running,
                sharpen my strategic thinking with chess and video games, and
                enjoy quiet moments with my cats — constantly exploring the
                balance between discipline, creativity, and play.
              </p>
            </div>

            {/* Mini Galería */}
            <div className="grid grid-cols-3 gap-4">
              {aboutMeInfo.map(({ id, title, image }) => (
                <img
                  key={id}
                  src={image}
                  alt={title}
                  className="rounded-lg object-cover w-full h-24 hover:scale-105 transition duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
