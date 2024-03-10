import { getGamesByCategory } from "../data/appdatadata_utils.js";
import { CardsList } from "../components/CardList/CardsList.jsx"

export default function Runner(){
    const runnerGames = getGamesByCategory("runner");
    return(
        <main className="main-inner">
            <CardsList id="runner" title ="Ранеры" data={runnerGames}/>
        </main>
    )
}