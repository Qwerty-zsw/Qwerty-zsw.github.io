import { useRoutes } from "react-router-dom";
import routes from "./routes";

const App = () => {
  let router = useRoutes(routes);

  return (
    <div className="w-100 h-100">
      {router}
    </div>
  );
};

export default App;
