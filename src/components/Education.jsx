import React, { useState } from "react";
import { Transition } from "@headlessui/react";
// import { Card } from "flowbite-react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";


function Education() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="main-content">
            <div className="education-container">
                <h1 className="education-title">Education</h1>

                <div className="education-block">
                    <div className="education-year">2020 - 2024</div>
                    <div className="education-details">
                        <h3>B.A. Computer Science</h3>
                        <p><i className="fa fa-university" /> University of California, Berkeley</p>
                    </div>
                </div>

                <div className="education-block">
                    <div className="education-year">2020 - 2024</div>
                    <div className="education-details">
                        <h3>B.A. Data Science</h3>
                        <p><i className="fa fa-university" /> University of California, Berkeley</p>
                        <ul>
                            <li>Domain Emphasis - Applied Mathematics and Modeling</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;