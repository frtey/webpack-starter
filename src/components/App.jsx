import "../styles/index.scss";
import Recipes from "./Recipes";
import image from "../images/Stone_Path_006_ambientOcclusion.jpg";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>React</h1>
        </section>
        <img src={image} alt="pierre" width="250" />
      <Recipes />
      </main>

    </>
  );
};

export default App;
