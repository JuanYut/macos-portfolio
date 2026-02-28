import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <div
        id="window-header"
        className="flex items-center px-4 py-2 border-b border-neutral-200"
      >
        <WindowControls target="resume" />

        <h2>juan-santillan-resume.pdf</h2>

        <div className="flex items-center gap-3">
          {/* Prev */}
          <button
            onClick={() => setPageNumber((prev) => prev - 1)}
            disabled={pageNumber <= 1}
            className="text-2xl px-2 rounded hover:bg-neutral-100 transition disabled:opacity-40 cursor-pointer"
          >
            ‹
          </button>

          {/* Page indicator */}
          <span className="text-xs text-neutral-500 text-center">
            {pageNumber} / {numPages}
          </span>

          {/* Next */}
          <button
            onClick={() => setPageNumber((prev) => prev + 1)}
            disabled={pageNumber >= numPages}
            className="text-2xl px-2 rounded hover:bg-neutral-100 transition disabled:opacity-40 cursor-pointer"
          >
            ›
          </button>

          {/* Download */}
          <a
            href="/files/juan-santillan-resume.pdf"
            download
            title="Download resume"
            className="flex items-center gap-1 px-3 py-1.5 rounded hover:bg-neutral-100 transition"
          >
            <span className="text-xs font-medium">Download</span>
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Document view */}
      <div className="flex flex-col items-center p-4 ">
        <Document
          file="/files/juan-santillan-resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} renderTextLayer renderAnnotationLayer />
        </Document>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
