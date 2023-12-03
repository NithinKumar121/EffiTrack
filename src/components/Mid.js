import Card from "./Card";
import {Graph} from "./Graph";

const Mid = ()=>{
    const cardData = [
        {
            title:'Leetcode',
            sub_title:'leetcode',
            count:'340',
            rank:'49+',
            comp_percent:'80%'
        },
        {
            title:'CodeForces',
            sub_title:'codechef',
            count:'340',
            rank:'49+',
            comp_percent:'56%'
        },
        {
            title:'CodeForces',
            class:'codeforces',
            sub_title:'leetcode',
            count:'340',
            rank:'49+',
            comp_percent:'70%'
        }
    ]
    return(
        <section className="mid-top mt-[1rem]">
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
            </div>
            <div className="mid-right">

            </div>
            {/* <Graph/> */}
        </section>
    )

}

export default Mid;