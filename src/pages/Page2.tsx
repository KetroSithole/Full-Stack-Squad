import Navbar from "../components/Page2/Navbar"
import EducationalPicture from "../components/Page2/EducationalPicture"
import ShortTile from "../components/Page2/ShortTile"
import Signup from "../components/Page2/Signup"

export default function Page2() {
    return (
        <div className='bg-gray-900 h-screen'>
            <Navbar />
            <div className="m-20 p-8">
                <div className='grid grid-cols-2 gap-4 place-items-center'>
                    <div className="w-full p-8 place-content-center">
                        <ShortTile />
                        <Signup />
                    </div>
                    <div className="h-full w-full p-8">
                        <EducationalPicture />
                    </div>
                </div>
            </div>
        </div>
    )
}
