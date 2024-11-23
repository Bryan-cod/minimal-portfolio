import React, { useState } from "react";

function Experience() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="main-content">
            <div className="education-container">
                <h1 className="education-title">Experience</h1>

                <div className="education-block">
                    <div className="education-year">Fall 2024 </div>
                    <div className="education-details">
                        <h3>University of California, Berkeley </h3>
                        <p><i className="fa fa-university" /> Undergraduate Course Staff 1 (UCS1)</p>
                        <ul>
                            <li>Held office hours, graded assignments, reviewed exams, and hosted project parties for a class size of 200+ students.</li>
                            <li>Taught students, with no prior coding experience, fundamental CS concepts in Python, including recursion, abstraction, OOP, and efficiency analysis.</li>   
                        </ul>
                    </div>
                </div>

                <div className="education-block">
                    <div className="education-year">Summer 2024 </div>
                    <div className="education-details">
                        <h3>Amazon </h3>
                        <p><i className="fa fa-university" /> Software Development Engineer Intern</p>
                        <ul>
                            <li>Designed and implemented a GenerativeAI-based integration assistant for client developers to integrate our API with their ecommerce system leveraging AWS Lambda and Amazon Bedrock.</li>
                            <li>Utilized various prompt engineering techniques and retrieval-augmented generation (RAG) to help reduce hallucinations and increase accuracy</li>
                        </ul>
                    </div>
                </div>

                <div className="education-block">
                    <div className="education-year">Spring 2023 - Fall 2023 </div>
                    <div className="education-details">
                        <h3>University of California, Berkeley </h3>
                        <p><i className="fa fa-university" /> Academic Intern (AI)</p>
                        <ul>
                            <li>Worked under course staff in helping students with their projects/assignments during both Office Hours and Lab Sections  </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Experience;