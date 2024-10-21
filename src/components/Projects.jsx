import React, { useState } from "react";

function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="main-content">
            <div className="education-container">
                <h1 className="education-title">Projects</h1>

                <div className="education-block">
                    <div className="education-year">Spring 2023</div>
                    <div className="education-details">
                        <h3>Secure File Sharing System</h3>
                        <p><i className="fa fa-university" /></p>
                        <ul>
                            <li>Designed and implemented a robust and secure file-sharing client application in Golang, ensuring data privacy and preventing tampering by utilizing cryptographic primitives.</li>
                            <li>The client provided users with features such as authentication, file saving, loading, overwriting, appending, sharing, and revoking access.</li>    
                        </ul>
                    </div>
                </div>

                <div className="education-block">
                    <div className="education-year">Fall 2021</div>
                    <div className="education-details">
                        <h3>Version Control System</h3>
                        <p><i className="fa fa-university" /></p>
                        <ul>
                            <li>Designed and created a version control system from scratch in Java mimicking some of the basic features of the popular system Git.</li>
                            <li>Implemented features such as init, add, commit, rm, log, find, status, checkout, branch, merge, and much more, honing my skills in creating user-friendly software tools and managing intricate data structures.</li>    
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;