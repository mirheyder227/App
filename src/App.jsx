import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainRoutes from "./Pages/Routes";
import { PageHeader } from "./components";

function App() {
  console.log(import.meta.env.VITE_APP_API_TOKEN,);
  return (
    <>
    <PageHeader/>
      <Header/>
      <MainRoutes />
      <Footer />
    </>
  );
}

export default App;
