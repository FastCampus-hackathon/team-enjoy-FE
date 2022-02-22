import AllRoutes from "routes/Routes";
import "./App.css";
import Store from "store/Store";

function App() {
  return (
    <Store>
      <AllRoutes />
    </Store>
  );
}

export default App;
