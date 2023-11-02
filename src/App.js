import Home from "./components/pages/Home/home";
import THBankingProject from "./components/pages/THBankingProject/thbankingProject";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/THBanking",
      element: <THBankingProject />,
    },
  ]);
  

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
