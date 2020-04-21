import React, { Component } from 'react';
export default class introContainer extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-container-text">
                    <h3>
                        More than just shorter links
					</h3>
                    <p>
                        Build your brand's recognition and get detailed insights on how your links are performing.
					</p>
                    <button className="u-get-started">Get Started</button>
                </div>
                {/* <div className="header-container-image">
                    <img src={"../../public/images/illustration-working.svg"} />
				</div> */}
            </div>
        )
    }
}