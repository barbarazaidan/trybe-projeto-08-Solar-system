import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
// import Mercúrio from '../images/Mercurio.png';
// import Vênus from '../images/Venus.png';
// import Terra from '../images/Terra.png';
// import Marte from '../images/Marte.png';
// import Júpiter from '../images/Jupiter.png';
// import Saturno from '../images/Saturno.png';
// import Urano from '../images/Urano.png';
// import Netuno from '../images/Netuno.png';
import planets from '../data/planets';

// Fiz o código abaixo quando tinha lido sobre a pasta data que está no src. Então, acabei criando meu próprio data.

// class SolarSystem extends React.Component {
//   render() {
//     const namePlanets = [
//       'Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno',
//     ];
//     const images = [Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano, Netuno];

//     const planets = namePlanets.map((planet, index) => ( // precisa desses parênteses por conta do retorno do HTML
//       <li key={ planet }>
//         <PlanetCard planetName={ planet } planetImage={ images[index] } />
//       </li>));
//     return (
//       <div data-testid="solar-system">
//         <Title headline="Planetas" />
//         <ul>
//           {planets}
//         </ul>
//       </div>
//     );
//   }
// }
// ------------------------------------------------------------

class SolarSystem extends React.Component {
  render() {
    const listOfPlanets = planets.map(({ name, image }) => ( // precisa desses parênteses por conta do retorno do HTML
      <li key={ name }>
        <PlanetCard planetName={ name } planetImage={ image } />
      </li>));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          {listOfPlanets}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
