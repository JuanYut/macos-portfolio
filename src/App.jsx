import gsap from "gsap";
import { Draggable } from "gsap/all";

import { Navbar, Welcome, Dock } from "#components";
import { Resume, Terminal, Safari, Finder } from "#windows";

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
    </main>
  );
};

export default App;
