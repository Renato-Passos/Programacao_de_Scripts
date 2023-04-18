import MeuComponente from "./components/MeuComponente";
import { Provider } from "./contexts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider>
          <MeuComponente />
        </Provider>
      </header>
    </div>
  );
}

export default App;
