import { getGamesByCategory } from "../data/appdatadata_utils.js";
import { CardsList } from "../components/CardList/CardsList.jsx"

export default function TDS(){
    const tdsGames = getGamesByCategory("TDS")
    return(
        <main className="main-inner">
            <CardsList id="tds" title ="TDS" data={tdsGames}/>
        </main>
    )
}