import React, {useEffect} from "react";

function App() {
   useEffect(() => {
     window.ReactNativeWebView.postMessage('back');
   }, [])
  
  return (
     <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#080029', height: '100vh' }}>
      <p style={{color: 'white'}}>Volviendo a Evently ...</p>
    </div>
  );
}

export default App;
