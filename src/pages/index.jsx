import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

/*const Footer = () => {
  return (
    <footer>
      <p>Czechitas, nová patička</p>
    </footer>
  );
}

const Odkazy = () => {
  return (

    <ul>
      <li><a href="#">Odkaz 1</a></li>
      <li><a href="#">Odkaz 2</a></li>
      <li><a href="#">Odkaz 3</a></li>
      <li><a href="#">Odkaz 4</a></li>
    </ul>
  )
}*/

const name1 = 'Silvestr';
const image1 = 'https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/elephant.jpg';
const text1 =
'Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechny kolemjdoucí.'
const name2 = 'Ctirad';
const image2 = 'https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/mouse.jpg';
const text2 =
'Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře.'

const Plysak1 = () => {
  return (
    <div className="plushy">
<img className="plushy__image" src={image1} />
<h2 className="plushy__name">{name1}</h2>
<p className="plushy__text">{text1}</p>
</div>
  )
}

const Plysak2 = () => {
  return (
    <div className="plushy">
<img className="plushy__image" src={image2} />
<h2 className="plushy__name">{name2}</h2>
<p className="plushy__text">{text2}</p>
</div>
  )
}


document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <h1>Plyšáci</h1>
      <br />
      <Plysak1 />
      <br />
      <Plysak2 />
    </header>
    <main>
    <div className="plushies"></div>
    </main>
   
  </div>
);

