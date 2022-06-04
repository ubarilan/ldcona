import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';

export default function LoginForm({
    googleRedirectUri,
}: {
    googleRedirectUri: string;
}) {
    return (
        <div>
            <div
                className="
            flex flex-col
            bg-white
            shadow-md
            px-4
            sm:px-6
            md:px-8
            lg:px-10
            py-8
            rounded-3xl
            w-50
            max-w-md
          "
            >
                <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
                    Welcome Back
                </div>
                <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
                    Enter your credentials to access your account
                </div>
                <div className="mt-10">
                    <form
                        action="/apie/login"
                        method="POST"
                        name="login"
                        className="mt-2 flex flex-col lg:w-1/2 width"
                    >
                        <div className="flex flex-col mb-5">
                            <label
                                htmlFor="email"
                                className="mb-1 text-xs tracking-wide text-gray-600"
                            >
                                E-Mail Address:
                            </label>
                            <div className="relative">
                                <div
                                    className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    absolute
                                    left-2
                                    top-0
                                    h-full
                                    w-5
                                    text-blue-500
                  "
                                >
                                    <FontAwesomeIcon icon={faAt} />
                                </div>

                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-80
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mb-6">
                            <label
                                htmlFor="password"
                                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                            >
                                Password:
                            </label>
                            <div className="relative">
                                <div
                                    className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-2
                    top-0
                    h-full
                    w-5
                    text-blue-500
                  "
                                >
                                    <FontAwesomeIcon icon={faLock} />
                                </div>

                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-80
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>

                        <div className="flex w-full">
                            <button
                                type="submit"
                                className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
                            >
                                <span className="mr-2 uppercase">Sign In</span>
                                <span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex justify-center items-center mt-6">
                <span
                    className="ml-2 inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center"
                >
                    Login with
                    <a
                        href={googleRedirectUri}
                        className="text-xs ml-1 text-blue-500 font-semibold"
                    >
                        Google
                    </a>
                </span>
            </div>
        </div>
    );
}
