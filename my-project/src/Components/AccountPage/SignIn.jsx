import React from 'react';
import { FaGreaterThan } from 'react-icons/fa'

export const SignIn = () => {
    return (
        <div className="flex flex-col justify-between lg:flex-row p-4">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 md:mr-4">
                <form className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
            <div className="w-full lg:w-1/2 p-4 bg-[#F4F4F4] mt-4 md:ml-4">
                <h2 className="text-2xl text-start font-semibold ml-4 mb-4">New to our company?</h2>
                <p className="text-start text-gray-600 ml-4 mb-4">Create an account for the best experience</p>
                <ul className="mb-4 text-gray-600 ml-4">
                    <li className="flex items-center mb-4">
                        <FaGreaterThan className="mr-2" />
                        <div>Modify and track your orders</div>
                    </li>
                    <li className="flex items-center mb-4">
                        <FaGreaterThan className="mr-2" />
                        <div>Faster checkout</div>
                    </li>
                    <li className="flex items-center mb-4">
                        <FaGreaterThan className="mr-2" />
                        <div>Get a 10% discount for new customers</div>
                    </li>
                </ul>

                <button className="border py-2 px-4 mr-2 bg-black text-white w-full">Create an Account</button>
            </div>


        </div>
    );
};

export default SignIn;
