import React from 'react'

const Navbar = () => {

    return (
        <React.Fragment>
            <div className="k_content-header k_flex k_align-center k_content-between k_px-20">

                {/* Header Left side */}
                <div className="k_content-header-left">
                    <div className="k_input-common k_relative">
                        <input type="text" className="form-control k_input" placeholder="Search..." />
                        <i className="ri-search-line k_input-btn k_cp"></i>
                    </div>
                </div>

                {/* Header Right side */}
                <div className="k_content-header-right k_flex k_align-center">
                    <div className="k_common-icon k_flex k_cp">
                        <i className="ri-mail-fill"></i>
                        <span className="k_dot"></span>
                    </div>
                    <div className="k_common-icon k_flex k_cp">
                        <i className="ri-notification-3-fill"></i>
                        <span className="k_dot"></span>
                    </div>
                    <div className="k_common-icon k_common-icon-menu k_flex k_cp">
                        <i className="ri-align-justify"></i>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Navbar