import { createBrowserRouter } from "react-router-dom";
import Loyout from "./Loyout.jsx";
import Menu from "./pages/Menu.jsx";
import Profil from "./pages/Profil.jsx";
import Pantry from "./pages/Pantry.jsx";
import SchoppingList from "./pages/SchoppingList.jsx";
import News from "./pages/News.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Loyout />,
    children: [
      { index: true, element: <Menu /> },
      { path: "menu", element: <Menu /> },
      { path: "profil", element: <Profil /> },
      { path: "pantry", element: <Pantry /> },
      { path: "shopping-list", element: <SchoppingList /> },
      { path: "news", element: <News /> },
    ],
  },
]);