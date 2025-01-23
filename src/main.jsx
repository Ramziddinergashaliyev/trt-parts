import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
const App = lazy(() => import("./App.jsx"));
import { BrowserRouter } from "react-router-dom";
import "./lang/i18n.js";
import Leazy from "./components/leazy/Leazy.jsx";
import { store } from "./context/index.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Leazy />}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </StrictMode>
);
