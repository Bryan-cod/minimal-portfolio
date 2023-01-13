import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Intro() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div class="grid grid-cols-5 gap-4">
                <div className="col-start-3 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div className="text-3xl justify-center font-bold text-gray-900">About Me</div>
                </div>
            </div>
            <div class="grid grid-cols-9 gap-4">
                <div className="col-span-4 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* <!-- Replace with your content --> */}
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">This is a example text that has no other meaning than to see what the output is and how it looks.</div>
                    </div>
                    {/* <!-- /End replace --> */}
                </div>
                <div className="col-start-6 col-span-4 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">This is a example text that has no other meaning than to see what the output is and how it looks.</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Intro;