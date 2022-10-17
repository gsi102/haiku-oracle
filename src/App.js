import React, { useEffect } from "react";
import MainComponent from "./components/MainComponent/MainComponent";

import mainStyles from "./styles/mainStyles.module.scss";

export const tg = window.Telegram.WebApp;

function App() {
  return (
    <div className={mainStyles.app}>
      <MainComponent />
    </div>
  );
}
export default App;
