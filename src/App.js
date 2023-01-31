import React, { useState } from "react";

function App() {
 
  const handleClose = () => {
    console.log('holaa')
    window.postMessage("closeWebView", "*");
  };
  return (
     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p>Example Page</p>
      <button onClick={handleClose}>Close WebView</button>
    </div>
  );
}

export default App;
