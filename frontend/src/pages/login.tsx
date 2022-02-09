import { FormEvent, useRef } from 'react';

export default function Login() {
    const form = useRef(null);

    return (
        <div className="flex vertical-center">
            <div className="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
                <h1 className="font-bold text-2xl my-10"> Login </h1>
                <form
                    ref={form}
                    action="/apie/login"
                    method="POST"
                    name="login"
                    className="mt-2 flex flex-col lg:w-1/2 w-8/12 "
                >
                    <div className="flex flex-wrap w-full relative h-15 items-center rounded mb-6 pr-10">
                        <div className="flex -mr-px justify-center w-15 p-4">
                            <span className="flex items-center leading-normal px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                                <i className="fas fa-user-circle"></i>
                            </span>
                        </div>
                        <input
                            name="email"
                            type="text"
                            className="flex-shrink flex-grow leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                            placeholder="Email"
                        />
                    </div>
                    <div className="flex flex-wrap w-full relative h-15 items-center rounded mb-4">
                        <div className="flex -mr-px justify-center w-15 p-4">
                            <span className="flex items-center leading-normal rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                        <input
                            name="password"
                            type="password"
                            className="flex-shrink flex-grow leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                            placeholder="Password"
                        />
                    </div>
                    <input
                        value="Login"
                        type="submit"
                        className="cursor-pointer	bg-blue-400 py-4 text-center px-17 md:px-12 md:py-4 rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20 transition duration-500 ease-in-out hover:bg-green-400 transform hover:-translate-y-1"
                    ></input>
                </form>
            </div>
        </div>
    );
}
