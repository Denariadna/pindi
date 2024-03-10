import { getGamesByCategory } from "../data/appdatadata_utils.js";
import { CardsList } from "../components/CardList/CardsList.jsx"

export default function Pixel(){
    const pixelGames = getGamesByCategory("pixel");
    return(
        <main className="main-inner">
            <CardsList id="pixel" title ="Пиксельные" data={pixelGames}/>
        </main>
    )
}