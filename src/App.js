import { createContext, useEffect, useState } from "react";
import "./App.css";
import Start from "./pages/Start/Start";
import FontStyles from "./pages/FontStyles/FontStyles";
import History from "./pages/History/History";
import TypeTesterDisplay from "./pages/TypeTester/TypeTester";
import NavBar from "./components/NavBar/NavBar";

const ScrollContext = createContext(0);

function App() {
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  return (
    <div className="App">
      <ScrollContext.Provider value={y}>
        <NavBar />
        <Start />
        <FontStyles />
        <History />
        <TypeTesterDisplay />
      </ScrollContext.Provider>
    </div>
  );
}

export { ScrollContext };
export default App;
