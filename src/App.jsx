import gsap from "gsap";
import { Draggable } from "gsap/all";

import { Navbar, Welcome, Dock } from "#components";
import {
  Resume,
  Terminal,
  Safari,
  Finder,
  TextFile,
  ImageFile,
} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />

      <TextFile />
      <ImageFile />
    </main>
  );
};

export default App;
