import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { Element } from "react-scroll";
import { animateScroll as scroll } from 'react-scroll';

const App = () => {
  let router = useRoutes(routes);
  scroll.scrollTo(0);

  return (
    <Element name="top" className="element w-100 h-100">
      <div className="w-100 h-100">{router}</div>
    </Element>
  );
};

export default App;
