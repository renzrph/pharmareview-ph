import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectModule from "./pages/SelectModule/SelectModule";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ModuleOne from "./pages/ModuleOne/ModuleOne";
import ModuleTwo from "./pages/ModuleTwo/ModuleTwo";
import ModuleThree from "./pages/ModuleThree/ModuleThree";
import ModuleFour from "./pages/ModuleFour/ModuleFour";
import ModuleFive from "./pages/ModuleFive/ModuleFive";
import ModuleSix from "./pages/ModuleSix/ModuleSix";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pharmareview-ph" element={<SelectModule />} />
        <Route path="/pharmareview-ph/module-1" element={<ModuleOne />} />
        <Route path="/pharmareview-ph/module-2" element={<ModuleTwo />} />
        <Route path="/pharmareview-ph/module-3" element={<ModuleThree />} />
        <Route path="/pharmareview-ph/module-4" element={<ModuleFour />} />
        <Route path="/pharmareview-ph/module-5" element={<ModuleFive />} />
        <Route path="/pharmareview-ph/module-6" element={<ModuleSix />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
