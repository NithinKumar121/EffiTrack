import Card from "./Card";
import GitProfile from "./GitProfile";
import LineChart from "./LIneChart";
import Upcoming from "./Upcoming";

const Mid = ()=>{
    const cardData = [
        {
            title:'Leetcode',
            sub_title:'leetcode',
            count:'340',
            rank:'49+',
            comp_percent:'80%',
            topic:'bg-cd1_red'
        },
        {
            title:'CodeChef',
            sub_title:'codechef',
            count:'340',
            rank:'49+',
            comp_percent:'56%',
            topic:'bg-cd1_orange'
        },
        {
            title:'CodeForces',
            sub_title:'codeforces',
            count:'340',
            rank:'49+',
            comp_percent:'70%',
            topic:'bg-cd1_green'
        }
    ]
    const github_data = {topic:"bg-cd1_purple"}
    return(
    <>
        <section className="mid-top mt-[.5rem]">
            <div className="mid-left">
                <div className="cards">
                    {
                        cardData.map((card,index)=>{
                            return(
                                <Card card={card}/>
                            );
                        })
                    }
                </div>
                <div className="graph-git">
                    {/* <div className="flex justify-center w-full">
                        <LineChart/>
                    </div> */}
                    <div className="rounded-xl h-full item2 shadow-md git-profile">
                        <GitProfile modify={github_data}/>
                    </div>
                    <div className="p-2 bg-white rounded-xl shadow-md ">
                        <LineChart/>
                    </div>
                </div>
            </div> 
            <div className="mid-right">
                <Upcoming/>
            </div>  
        </section>
        </>
    )

}

export default Mid;