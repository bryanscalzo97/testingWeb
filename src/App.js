

function App() {
  const handleBackButton = () => {
    window.ReactNativeWebView.postMessage('back');
    console.log('new deploy2')
  };
  return (
     <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p>Example Page</p>
      <button onClick={handleBackButton}>Close WebView</button>
    </div>
  );
}

export default App;
