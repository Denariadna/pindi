import { getGamesByCategory } from "../data/appdatadata_utils.js";
import { CardsList } from "../components/CardList/CardsList.jsx"

export default function Popular(){
    const popularGames = getGamesByCategory("popular");
    return(
        <main className="main-inner">
            <CardsList id="popular" title ="Популярные" data={popularGames}/>
        </main>
    )
}