import Home from "./containers/Home/Home";
import { MenuProvider } from "./contexts/menu";

function App() {
  return (
    <MenuProvider>
      <Home />
    </MenuProvider>
  );
}

export default App;
