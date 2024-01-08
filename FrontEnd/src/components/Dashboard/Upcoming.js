import Leetcode from '../../assets/LeetCode_logo.png';

const Contest = () =>{
    return  (
        <>
            <div className="contest bg-white rounded-lg text-black
                            flex flex-row px-3 py-3  transition-all slowmo
                             gap-x-3 items-center next">
                    <div>
                        <img src={Leetcode} alt="leetcode" className='w-[30px] h-[30px]'></img>
                    </div>
                    <div className='grid'>
                        <h1 className='font-normal text-base'>Contest Name :</h1>
                        <h4 className='font-normal text-base'>Date : </h4>
                        <h2 className='font-normal text-base'>Platform :</h2>
                    </div>
                </div>
        </>
    )
}

const Upcoming = () =>{
    
    return(
        <>
        <div className='up-bg px-4 text-white py-4 rounded-xl h-full relative'>
            <h1 className="text-center text-2xl font-bold black">Upcoming Contest</h1>
            <div className='overflow-hidden h-[34rem] rounded-xl p-1 mt-3'>
                <div className='overflow-y-auto w-full h-full no-scrollbar flex flex-col gap-y-3'>
                    <Contest/>
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