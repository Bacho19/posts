import { useEffect } from "react";
import PageWrapper from "./components/layouts/PageWrapper";
import MainRoutes from "./routes";
import { useAppDispatch } from "./store";
import { getMeAction } from "./store/actions/auth";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    token && dispatch(getMeAction());
  }, [dispatch]);

  return <PageWrapper>{<MainRoutes />}</PageWrapper>;
};

export default App;
