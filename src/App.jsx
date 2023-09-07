import { LanguageSelector, ProductsList } from "./components";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <LanguageSelector />
      </header>

      <ProductsList />
    </div>
  );
}

export default App;
