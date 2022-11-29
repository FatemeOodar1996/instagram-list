import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/detailpage";
import ListPage from "./pages/listpage";
import "./assets/styles/main.css";
import ErrorPage from "pages/errorpage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListPage />}></Route>
                <Route path="/detailpage/:id" element={<DetailPage />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
