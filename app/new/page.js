import { getGamesByCategory } from "../data/appdatadata_utils.js";
import { CardsList } from "../components/CardList/CardsList.jsx"

export default function New(){
    const newGames = getGamesByCategory("new")
    return(
        <main className="main-inner">
            <CardsList id="new" title ="Новинки" data={newGames}/>
        </main>
    )
}