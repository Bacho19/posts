import { PageWrapper, theme } from "./themes";
import MyRoutes from "./routes";

const App = () => {
  return <PageWrapper theme={theme}>{<MyRoutes />}</PageWrapper>;
};

export default App;
