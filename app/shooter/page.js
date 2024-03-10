import { getGamesByCategory } from "../data/appdatadata_utils.js";
import { CardsList } from "../components/CardList/CardsList.jsx"

export default function Shooter(){
    const shooterGames = getGamesByCategory("shooter");
    return(
        <main className="main-inner">
            <CardsList id="shooter" title ="Шутеры" data={shooterGames}/>
        </main>
    )
}