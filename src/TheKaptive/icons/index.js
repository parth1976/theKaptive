import React from 'react';

// Components
import Toolbar from '../layout/components/toolbar';

const Icons = () => {
    return (
        <React.Fragment>

            {/* Common header Toolbar */}
            <Toolbar title="Editable Icons" sectitle="Icons" maintitle="Editable Icons" />

            <div className="k_layout-list">

                {/* Common Header Title */}
                <div className="k_common-title">
                    <h2 className="k_mb-10">Editable with Icons</h2>
                    <p>Just click on word which you want to change and enter.</p>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Icons