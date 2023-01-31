

function App() {
  const handleBackButton = () => {
    window.postMessage('back');
    console.log('new deploy')
  };
  return (
     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p>Example Page</p>
      <button onClick={handleBackButton}>Close WebView</button>
    </div>
  );
}

export default App;
