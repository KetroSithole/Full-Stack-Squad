import Navbar from "../components/Navbar"
import EducationalPicture from "../components/Page2/EducationalPicture"
import ShortTile from "../components/Page2/ShortTile"
import Signup from "../components/Page2/Signup"

export default function Page2() {
    return (
        <div>
            <Navbar />
            <div className='flex flex-row w-full'>
                <div>
                    <ShortTile />
                    <Signup />
                </div>
                <div>
                    <EducationalPicture />
                </div>
            </div>
        </div>
    )
}
