import React from 'react'

// Components
import Footer from './components/footer'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'

const Layout = (props) => {
    return (
        <React.Fragment>
            <div className="k_layout">

                {/* Sidebar */}
                <Sidebar />

                <div className="k_content">
                    {/* Navbar Content*/}

                    <Navbar />

                    {/* All Page Content */}
                    {props.children}

                    {/* Footer Content*/}
                    <Footer />

                </div>

            </div>
        </React.Fragment>
    )
}

export default Layout