import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container px-12">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-grey-800 mt-8">
        Made with ❤️ by Prashant Raj
      </div>
    </div>
  );
};

export default AppLayout;
