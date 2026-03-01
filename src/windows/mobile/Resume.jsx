import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import MobileWindowHeader from "#components/mobile/WindowHeader";
import { Document, Page, pdfjs } from "react-pdf";
import { useState, useRef, useLayoutEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const MobileResumeContent = () => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    // Initial width
    updateWidth();

    // Use ResizeObserver for better performance
    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <>
      <MobileWindowHeader windowKey="resume" title="Resume" />

      <div ref={containerRef} className="w-full">
        <Document className="resume-pdf" file="files/resume.pdf">
          <Page
            pageNumber={1}
            width={containerWidth || undefined}
            renderTextLayer
            renderAnnotationLayer
          />
        </Document>
      </div>
    </>
  );
};

const MobileResume = MobileWindowWrapper(MobileResumeContent, "resume");

export default MobileResume;
