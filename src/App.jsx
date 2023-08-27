import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import UseMemoPage from "./pages/UseMemoPage";
import TodosPage from "./pages/todo-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/usememo" element={<UseMemoPage />} />
          <Route index path="/todos" element={<TodosPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
