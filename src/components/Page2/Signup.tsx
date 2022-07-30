import React from 'react'

function Signup() {
    return (
        <div className="flex flex-col p-12 space-y-10 ">
            <button className=" bg-white hover:bg-transparent text-grey-900 font-semibold hover:text-white py-2 px-4 border border-white rounded">
                Sign up with Facebook
            </button>
            <button className=" bg-white hover:bg-transparent text-grey-900 font-semibold hover:text-white py-2 px-4 border border-white rounded">
                Sign up with Google
            </button>
            <button className=" bg-white hover:bg-transparent text-grey-900 font-semibold hover:text-white py-2 px-4 border border-white rounded">
                Sign up with Apple
            </button>
            <button className=" bg-white hover:bg-transparent text-grey-900 font-semibold hover:text-white py-2 px-4 border border-white rounded">
                Sign up with Email
            </button>
        </div>

    )
}

export default Signup;