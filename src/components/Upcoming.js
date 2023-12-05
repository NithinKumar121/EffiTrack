import Leetcode from '../assets/LeetCode_logo.png';

const Contest = () =>{
    return  (
        <>
            <div className="contest bg-white rounded-xl ease-in duration-300
                            flex flex-row px-3 py-3 mt-3 hover:shadow-none
                            shadow-xl gap-x-4 items-center">
                    <div>
                        <img src={Leetcode} alt="leetcode" className='w-[40px] h-[40px]'></img>
                    </div>
                    <div>
                        <h1 className='font-semibold'>Contest Name :</h1>
                        <h4 className='font-semibold'>Date : </h4>
                        <p className='font-semibold'>Time :</p>
                    </div>
                </div>
        </>
    )
}


const Upcoming = () =>{
    return(
        <>
            <h1 className="text-center text-2xl font-bold text-gray-600">Upcoming Contest</h1>
            <div className="upcoming-contests overflow">
                <Contest/>
                <Contest/>
                <Contest/>
                <Contest/>
            </div>
        </>
    )
}

export default Upcoming;