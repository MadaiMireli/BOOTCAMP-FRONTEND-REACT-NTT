import { Outlet } from "react-router";

import { Footer, Header } from "../";
import { AppProvider } from "../../providers/AppProvider";

export const AppLayout = () => {
  return (
    <AppProvider>
      <Header />

      <Outlet />

      <Footer />
    </AppProvider>
  );
};
