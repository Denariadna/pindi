import {getGamesByCategory} from './data/appdatadata_utils';
import Image from "next/image";
import Styles from "./page.module.css";

import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import {CardsList} from './components/CardList/CardsList';

export default function Home() {
  const popularGames = getGamesByCategory('popular')
  const newGames = getGamesByCategory('new')

  return (
    <main className="main">
      <Banner/>
      <CardsList id="popular" title = "Популярные" data={popularGames}/>
      <CardsList id="new" title = "Новинка" data={newGames}/>
      <Promo/>  
    </main>
  );
}
