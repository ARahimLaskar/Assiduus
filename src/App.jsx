import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Menu } from "./components/Menu";
import { HomePage } from "./components/HomePage";
import { TotalCashFlow } from "./components/TotalCashFlow";
import { AccountWatchlist } from "./components/AccountWatchlist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex" }}>
      <Menu />
      <HomePage />
    </div>
  );
}

export default App;
