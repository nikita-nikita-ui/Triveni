import { useState, useEffect } from "react";
import Splash from "./pages/Splash/Splash";
import Home from "./pages/Home/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 sec splash
  }, []);

  return loading ? <Splash /> : <Home />;
}

export default App;
