import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailPage, ErrorPage, ListPage } from "pages/index";

import "assets/styles/main.css";

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
