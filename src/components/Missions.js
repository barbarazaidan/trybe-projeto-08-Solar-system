import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const listOfMissions = missions.map(({ name, year, country, destination }) => ( // todas as info abaixo estão em uma única linha, por isso não usei {}, só dei as quebras para i lint não reclamar de tamanho e ficar mais legível
      <li key={ name } className="liDeCadaMissao">
        <MissionCard
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />
      </li>));
    return (
      <div data-testid="missions" className="divMissoes">
        <Title headline="Missões" />
        <section className="sectionMissoes">
          <ul className="infoMissoes">
            {listOfMissions}
          </ul>
        </section>
      </div>
    );
  }
}

export default Missions;
