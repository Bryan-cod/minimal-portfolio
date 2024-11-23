import React, { useState } from "react";
import { Transition } from "@headlessui/react";


function Intro() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="main-content">
            <div className="general-info-container">
                <h1 className="title">General Information</h1>
                <div className="info-grid">
                    <div className="info-label">Name</div>
                    <div className="info-value">Bryan Flores</div>

                    <div className="info-label">Email</div>
                    <div className="info-value">
                        <a href="mailto:bflores09@berkeley.edu">bflores09@berkeley.edu</a>
                    </div>

                    <div className="info-label">Programming Languages</div>
                    <div className="info-value">
                        Python, Java, C, SQL/PostgreSQL, React, HTML, CSS, JavaScript, C, Golang, Ruby, Typescript
                    </div>

                    <div className="info-label">Tools</div>
                    <div className="info-value">
                    Git, Matplotlib, Bootstrap, Seaborn, Numpy, SIMD, Pandas, RISC-V, Ruby on Rails, React, 
                    jQuery, Node.js, Express.js, MongoDB, Postgres, Heroku, Figma, AWS CDK, AWS SDK, S3, AWS Lambda, AWS Bedrock
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Intro;