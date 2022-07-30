import Card from '../components/Page1/Card';
import Navbar from '../components/Page1/Navbar';

function Page1() {
    return (
        <div>
            <Navbar />
            <div className='m-16'>
                <div className='flex flex-row mb-8'>
                    <div className='flex flex-row w-screen '>
                        <button className='w-1/4 border m-8 p-4 rounded-lg bg-dark-cornflower-blue text-white font-semibold hover:bg-midnight-blue group hover:shadow'>Student Results</button>
                    </div>
                    <div className='flex flex-row-reverse w-screen '>
                        <button className='w-auto border m-8 p-4 rounded-lg bg-dark-cornflower-blue text-white font-semibold hover:bg-midnight-blue group hover:shadow'>Download Report</button>
                    </div>
                </div>
                <div className='border m-8'>
                    <div className='m-16 p-4 border w-1/6 mb-11'>
                        <h1>School Name</h1>
                    </div>
                    <br />
                    <div className='m-16 flex flex-row space-x-80'>
                        <Card />
                        <Card />
                        <Card />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page1