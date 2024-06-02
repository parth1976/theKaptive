import React from 'react'
import { Routes, Route } from "react-router-dom";

// Import Components
import Layout from './layout'
import KeptiveDashboard from './KeptiveDashboard';


const TheKaptive = () => {

    return (
        <React.Fragment>
            <Layout>
                <Routes>
                    <Route path="/" element={<KeptiveDashboard />} />
                    <Route path="/layouts" element={<KeptiveDashboard />} />
                    <Route path="/reports" element={<KeptiveDashboard />} />
                    <Route path="/tables" element={<KeptiveDashboard />} />
                </Routes>
            </Layout>
        </React.Fragment>
    )
}

export default TheKaptive;