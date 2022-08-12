import Layout from "./components/Layout";
import About from "./components/About";
import Variant from "./components/Variant";

function App() {
  return (
    <Layout>
      {/*Variant no tiene background ---> corrijamos: que body tenga background-color black*/}
      <About />
      <Variant />
    </Layout>
  );
}

export default App;
