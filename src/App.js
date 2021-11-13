import Catalog from "./components/Catalog/Catalog";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import Edit from "./components/Edit/Edit";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import WelcomeWorld from "./components/WelcomeWorld/WelcomeWorld";

function App() {
  return (
    <div id="box">
      <main id="main-content"></main>
      <Header />
      <WelcomeWorld />
      <Catalog />
      <Create />
      <Details />
      <Edit />
      <Login />
      <Register />
    </div>
  );
}

export default App;
