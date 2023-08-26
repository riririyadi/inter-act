import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Homepage } from "./pages/Homepage";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-screen">
        <Header />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
