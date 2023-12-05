import GitRepo from '../assets/github.png'

const Showcase = () =>{
    return(
        <>
            <div className="showcase-top">
                <div className="showcase-favourite">
                    <h1> Add your Favourite Repository </h1>
                    <div className="repo-favourites">
                        <div className="repo-favourite">
                            <img src={GitRepo}></img>
                            <p>Repo name : Helloworld </p>
                            <h6>Star: 50</h6>
                            <a href="">Link here !</a>
                        </div>

                        <div className="favourite">

                        </div>
                    </div>
                </div>
                <div className="showcase-socails">
                    <h1>Add Your Social Media Links</h1>
                </div>
            </div>
        </>
    )
}


export default Showcase;