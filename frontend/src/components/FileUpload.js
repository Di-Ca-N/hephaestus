import "./FileUpload.css"

import Thumbnail from './Thumbnail';


function FileUpload({ files, registerFiles, removeFile, nextStep }) {
  return (
    <>
      <div className="file-container">
        <h1>Load Files</h1>
        <div className="file-display">
          {files.length > 0 ?
            files.map((file, idx) =>
              <Thumbnail
                key={idx}
                file={file}
                fileId={idx}
                removeFunction={removeFile}
              />) :
            "Upload some files to start!"
          }
        </div>
        {files.length > 0 && 
          <button 
            className="next-button" 
            onClick={nextStep}
          >
          <span 
            className="material-icons" 
            style={{ fontSize: 42 }}
          >
            navigate_next
          </span>
        </button>
}
      </div>
      <form encType="multipart/form-data">
        <input
          type="file"
          className="hidden"
          id="file-upload"
          name="files"
          accept=".pdf"
          multiple
          onChange={registerFiles}
        />
        <label className="file-upload" htmlFor="file-upload">
          <span className="material-icons">add</span>
          Upload PDF
        </label>
      </form>
    </>
  )
}

export default FileUpload;