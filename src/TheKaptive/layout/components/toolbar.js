import React from 'react'

const Toolbar = (props) => {
    return (
        <React.Fragment>
            <div className="k_toolbar-header k_flex k_align-center k_content-between k_px-20">
                
                <h1 className="k_cp">{props.title}</h1>

                <ul className="k_flex k_align-center">
                    <li className="k_cp active">Home</li>
                    <li className="k_cp">{props.sectitle}</li>
                    <li className="k_cp">{props.maintitle}</li>
                </ul>
                
            </div>
        </React.Fragment>
    )
}

export default Toolbar