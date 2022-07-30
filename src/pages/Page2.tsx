import Navbar from "../components/Navbar"
import EducationalPicture from "../components/Page2/EducationalPicture"
import ShortTile from "../components/Page2/ShortTile"
import Signup from "../components/Page2/Signup"

export default function Page2() {
    return (
        <div>
            <Navbar />
            <div className="m-20">
                <div className='flex flex-row w-full'>
                    <div className="w-1/2">
                        <ShortTile />
                        <Signup />
                    </div>
                    <div className="w-1/2">
                        <EducationalPicture />
                    </div>
                </div>
            </div>
        </div>
    )
}
