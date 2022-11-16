import "./Thumbnail.css"

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { useState } from 'react';

function Thumbnail({ file, fileId, removeFunction }) {
  const [pageCount, setPageCount] = useState(0);

  function removeSelf() {
    removeFunction(fileId);
  }

  function updatePageCount({ numPages }) {
    setPageCount(numPages);
  }


  return (
    <div className="file-card">
      <button onClick={removeSelf}>
        <span className="material-icons">close</span>
      </button>
      <Document
        className="file-card--img"
        file={file}
        onLoadSuccess={updatePageCount}>
        <Page
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          scale={0.5} />
      </Document>
      <div className="file-card--label">
        <span>{file.name}<br />({pageCount} pages)</span>
      </div>
    </div>
  )
}

export default Thumbnail;