import React from 'react'

function Signup() {
    return (
        <div className="flex flex-col border p-12 space-y-10">
            <button className="border p-2">Sign up with Facebook</button>
            <button className="border p-2">Sign up with Google</button>
            <button className="border p-2">Sign up with Apple</button>
            <button className="border p-2">Sign up with Email</button>
        </div>

    )
}

export default Signup;