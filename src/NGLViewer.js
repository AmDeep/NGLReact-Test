import React, { useEffect, useRef } from 'react';

const NGLViewer = ({ pdbFile, viewType }) => {
  const viewerRef = useRef(null);
  
  useEffect(() => {
    if (!pdbFile) return;

    // Initialize NGL viewer
    const stage = new window.NGL.Stage(viewerRef.current);
    stage.loadFile(pdbFile, { format: 'pdb' }).then((structure) => {
      const component = structure.getComponentList()[0];
      
      // Apply the selected view type
      component.clearRepresentations();
      component.addRepresentation(viewType);
      component.autoView();
    });

    // Cleanup when the component is unmounted or updated
    return () => {
      stage.dispose();
    };
  }, [pdbFile, viewType]);

  return <div ref={viewerRef} style={{ width: '100%', height: '600px' }}></div>;
};

export default NGLViewer;
