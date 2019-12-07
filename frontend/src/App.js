import React from "react";
import GoogleMap from "./components/GoogleMap/GoogleMap";
import "./App.css";

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("direccion");
  return (
    <div className="App">
      <GoogleMap lat={5.6984895} lon={-74.03693240000001} direccion={myParam} />
    </div>
  );
}

export default App;
