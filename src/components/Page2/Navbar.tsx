export default function Navbar() {
    return (
        <div>
            <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <p className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Full Stack Squad</span>
                    </p>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/page2" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                     <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-gray-900 py-2 px-4 border border-white hover:border-transparent rounded">
                                     Sign in
                                    </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
