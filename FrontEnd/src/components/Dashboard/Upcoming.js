import Leetcode from '../../assets/LeetCode_logo.png';

const Contest = () =>{
    return  (
        <>
            <div className="contest bg-[#497174] text-white rounded-xl 
                            flex flex-row px-3 py-3 mt-3
                             gap-x-3 items-center ">
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
        <div className='bg-[#D6E4E5] p-4 rounded-xl h-[73.5vh]'>
            <h1 className="text-center text-2xl font-bold black lg:mb-4">Upcoming Contest</h1>
            <div className='overflow-hidden h-[65vh] rounded-xl p-1 mb-[1rem]'>
                <div className='overflow-y-auto w-full h-full no-scrollbar flex flex-col gap-y-3'>
                    <Contest/>
                    <Contest/>
                    <Contest/>
                    <Contest/>
                    <Contest/>
                    <Contest/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Upcoming;