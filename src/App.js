import React, { useState } from 'react';
import './App.css';
import NGLViewer from './NGLViewer';

function App() {
  const [pdbFile, setPdbFile] = useState(null);
  const [viewType, setViewType] = useState('cartoon');  // Default view type

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target.result;
        setPdbFile(fileContent);
      };
      reader.readAsText(file);
    }
  };

  const handleViewChange = (event) => {
    setViewType(event.target.value);
  };

  return (
    <div className="App">
      <h1>NGL PDB Viewer</h1>
      <input type="file" accept=".pdb" onChange={handleFileChange} />
      
      <div className="controls">
        <label htmlFor="view-type">Select View Type:</label>
        <select id="view-type" value={viewType} onChange={handleViewChange}>
          <option value="hide">Hide</option>
          <option value="cartoon">Cartoon</option>
          <option value="ball+stick">Ball + Stick</option>
          <option value="ribbon">Ribbon</option>
          <option value="backbone">Backbone</option>
          <option value="licorice">Licorice</option>
          <option value="spacefill">Spacefill</option>
          <option value="line">Line</option>
          <option value="contact">Contact</option>
          <option value="helixorient">Helix Orient</option>
          <option value="hyperball">Hyperball</option>
          <option value="rocket">Rocket</option>
        </select>
      </div>

      {pdbFile && (
        <NGLViewer pdbFile={pdbFile} viewType={viewType} />
      )}
    </div>
  );
}

export default App;
