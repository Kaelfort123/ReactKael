import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Searchother from "./Components/Searchother";
import HorarioCliDent from "./Components/HorarioCliDent";
import HorarioCliDentMenu from "./Components/HorarioCliDentMenu";
import TituloCliDentMenu from "./Components/TituloCliDentMenu";

export default function App() {
  return (
    <div className="App">
      <Searchother></Searchother>

      <HorarioCliDent></HorarioCliDent>
      <TituloCliDentMenu />
      <HorarioCliDentMenu />
    </div>
  );
}
