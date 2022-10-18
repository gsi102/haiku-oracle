import React, { useEffect } from "react";
import MainComponent from "./components/MainComponent/MainComponent";

import mainStyles from "./styles/mainStyles.module.scss";

function App() {
  return (
    <div className={mainStyles.app}>
      <MainComponent />
    </div>
  );
}
export default App;
