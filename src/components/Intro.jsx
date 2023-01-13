import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Intro() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="flex text-3xl justify-center font-bold text-gray-900">About Me</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* <!-- Replace with your content --> */}
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                    </div>
                    {/* <!-- /End replace --> */}
                </div>
            </main>
        </div>

    );
}

export default Intro;