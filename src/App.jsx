import { Outlet } from "react-router-dom";
import "./App.css";
import LayoutApp from "./components/layout/LayoutApp";


function App() {
  return (
    <LayoutApp>
          <Outlet />
   </LayoutApp>
  );
}

export default App;
