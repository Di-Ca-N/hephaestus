import { useState } from 'react';
import './App.css';

import FileUpload from './components/FileUpload';


function App() {
  const [files, setFiles] = useState([]);
  const [step, setStep] = useState(0);

  function nextStep() {
    setStep(step + 1);
  }

  function registerFiles(event) {
    setFiles([...files, ...event.target.files]);
  }

  function removeFile(index) {
    const filesAux = [...files];
    filesAux.splice(index, 1);
    setFiles(filesAux);
  }

  const componentToRender = {
    0: <FileUpload
        files={files} 
        registerFiles={registerFiles} 
        removeFile={removeFile}
        nextStep={nextStep}
      />
  }
  return (
    <>
      <header className="header">
        Hephaestus
      </header>
      <main>
        {componentToRender[step]}
      </main>
    </>
  );
}

export default App;
