import PageWrapper from "./component/layouts/PageWrapper";
import MyRoutes from "./routes";

const App = () => {
  return <PageWrapper>{<MyRoutes />}</PageWrapper>;
};

export default App;
