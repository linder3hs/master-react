import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DetailPage, HomePage } from "../pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
