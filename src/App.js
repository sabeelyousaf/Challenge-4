import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
function App() {
  const groupByOwners = (files) => {
    const owners = {};

    for (const file in files) {
      const owner = files[file];

      if (!owners[owner]) {
        owners[owner] = [];
      }

      owners[owner].push(file);
    }

    return owners;
  };

  // Example usage with useEffect (to demonstrate usage in a React component)
  useEffect(() => {
    const files = {
      "insurance.txt": "Company A",
      "letter.docx": "Company A",
      "Contract.docx": "Company B"
    };

    const result = groupByOwners(files);
    console.log(result); // Output the grouped data
  }, []);

  return <div>Check console for grouped data</div>;
}
export default App;
