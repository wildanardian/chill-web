import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import router from "./routes";

const root = document.getElementById("root");

ReactDOM.createRoot(root as HTMLElement).render(
  <RouterProvider router={router} />,
);
