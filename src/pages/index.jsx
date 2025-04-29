import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const name1 = 'Silvestr';
const image1 =
  'https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/elephant.jpg';
const text1 =
  'Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechny kolemjdoucí.';

const name2 = 'Ctirad';
const image2 =
  'https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/mouse.jpg';
const text2 =
  'Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře.';



const Plysaci = () => {

  const Plysak = (props) => {
    return (
      <div className='plushy'>
        <img src={props.imgLocation}/>
        <strong>{props.plushyName}</strong>
        <p>{props.plushyDescription}</p>
      </div>
    )
  }

  return (
    <div>
      <Plysak
      imgLocation='https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/elephant.jpg'
      plushyName='Silvestr'
      plushyDescription='Silvestr rád pozoruje dění za oknem a upřímně se usmívá na všechny kolemjdoucí.'
      />

      <Plysak 
      imgLocation='https://kodim.cz/cms/assets/czechitas/js2/lekce/sablony-komponenty/cv-komponenty/plysaci/mouse.jpg'
      plushyName='Ctirad'
      plushyDescription='Ctirad tráví svůj čas v blízkosti lednice a s očekáváním pozoruje její bílé dveře.'
      />
    </div>
  )
}


document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <h1>Plyšáci</h1>
    </header>
    <main>
      <div className="plushies">
        <div className="plushy">
          <img className="plushy__image" src={image1} alt={name1} />
          <h2 className="plushy__name">{name1}</h2>
          <p className="plushy__text">{text1}</p>
        </div>
        <div className="plushy">
          <img className="plushy__image" src={image2} alt={name2} />
          <h2 className="plushy__name">{name2}</h2>
          <p className="plushy__text">{text2}</p>
        </div>
      </div>
    </main>
  </div>
);