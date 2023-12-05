import GitRepo from '../assets/github.png'

const Favourite = () =>{
    return(
        <>
            <div className="repo-favourite shadow-xl hover:shadow-none ease-in duration-300 cursor-default">
                            <img src={GitRepo}></img>
                            <p>Repo name : Helloworld </p>
                            <h6>Star: 50</h6>
                            <a href="">Link here !</a>
            </div>
        </>
    )
}

const Social = () =>{
    return(
        <>
            <div className='social-media shadow-xl hover:shadow-none ease-in duration-300 cursor-default'>
                <img src={GitRepo} className='w-[40px] h-[40px]'></img>
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
            <div className="showcase-top">
                <div className="showcase-favourite">
                    <h1> Add your Favourite Repository </h1>
                    <div className="repo-favourites">
                        <Favourite/>
                        <Favourite/>
                        <Favourite/>
                    </div>
                </div>
                <div className="showcase-socails">
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