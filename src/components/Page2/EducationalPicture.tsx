import React from 'react'

export default function EducationalPicture() {
    return (
        // <div className="border min-h-full">
        //     <img
        //         src="/public/pexels-photo-81209.jpeg"
        //         className="p-1 bg-white border rounded max-w-sm"
        //         alt="..."
        //     />
        // </div>
        <div style={{ 
            backgroundImage: `url("https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` 
          }} className='h-full bg-center rounded-lg'>
        </div>
    )
}
