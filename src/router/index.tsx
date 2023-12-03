import Layout from "@/layout/Layout"
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import * as pages from '../pages';

const Router = () => {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Navigate to="/tasklist" />} />
                        <Route path="/tasklist" element={<pages.Tasklist />} />
                        <Route path="/tasklist/add" element={<pages.AddTask />} />
                        <Route path="/tasklist/edit/:id" element={<pages.AddTask />} />
                    </Route>
                </Routes>
            </HashRouter>
        </>
    )
}

export default Router