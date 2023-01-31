

function App() {
  const handleBackButton = () => {
    window.postMessage('back');
  };
  return (
     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p>Example Page</p>
      <button onClick={handleBackButton}>Close WebView</button>
    </div>
  );
}

export default App;
