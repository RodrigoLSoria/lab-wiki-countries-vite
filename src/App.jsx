import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CountryDetails from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";


function App() {
  let { countryAlpha3Code } = useParams()

  return (
    <div>
      <Navbar />
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path="/:countryAlpha3Code" element={<CountryDetails />} />

      </Routes>



    </div >
  );
}



export default App;