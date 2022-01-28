export default function Task() {
    return (
        <div className="w-full h-64 flex flex-col justify-between bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4">
            <div>
                <h4 className="text-gray-800 font-bold mb-3">
                    13 things to work on
                </h4>
                <p className="text-gray-800 text-sm">
                    Our interior design experts work with you to create the
                    space that you have been dreaming about.
                </p>
            </div>
            <div>
                <div className="flex items-center justify-between text-gray-800 ">
                    <p className="text-sm">March 28, 2020</p>
                    <div className="w-8 h-8 rounded-full dark:text-gray-800 border border-red-700 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#B91C1C"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
