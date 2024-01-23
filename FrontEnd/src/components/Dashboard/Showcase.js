import GitRepo from '../../assets/github.png'

const Favourite = () =>{
    return(
        <>
            <div className="repo-favourite bg-[#f4f5f6] text-[#333] dark:bg-[#333] shadow-xl hover:shadow-none ease-in duration-300 cursor-default dark:text-[#f3f3f3]">
                            <img src={GitRepo} alt='github'></img>
                            <p>Repo name : Helloworld </p>
                            <h6>Star: 50</h6>
                            <a href="/">Link here !</a>
            </div>
        </>
    )
}

const Social = () =>{
    return(
        <>
            <div className='social-media shadow-xl hover:shadow-none ease-in duration-300 cursor-default bg-[#f4f5f6] dark:bg-[#333] dark:text-white text-[#333]'>
                <img src={GitRepo} alt='github' className='w-[40px] h-[40px]'></img>
                <div className='social-media-inner'>
                    <h2 className='text-l font-medium'>username : Cibiyanna26</h2>
                    <h4>Platform : LinkedIn</h4>
                </div>
            </div>
        </>
    )
}


const Showcase = () =>{
    return(
        <>
            <div className="showcase-top ">
                <div className="showcase-favourite bg-[#fff] dark:bg-[#1d1d1d] dark:text-[#f3f3f3] text=[#333] mt-2 rounded-xl p-3">
                    <h1> Add your Favourite Repository </h1>
                    <div className="repo-favourites">
                        <Favourite/>
                        <Favourite/>
                        <Favourite/>
                    </div>
                </div>
                <div className="showcase-socails bg-[#fff] dark:bg-[#1d1d1d] dark:text-[#f1f1f1] rounded-xl p-3">
                    <h1 >Add Your Social Media Links</h1>
                    <div className='socail-medias'>
                        <Social/>
                        <Social/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Showcase;