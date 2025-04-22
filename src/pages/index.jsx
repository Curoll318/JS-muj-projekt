import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const Footer = () => {
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
}


document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Webová aplikace - updated</h1>
      <br />
      <Odkazy />
    </header>
    <main>
      <p>Nový řádek.</p>
    </main>
    <Footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </Footer>
  </div>
);
