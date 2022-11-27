import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const listOfMissions = missions.map(({ name, year, country, destination }) => ( // todas as info abaixo estão em uma única linha, por isso não usei {}, só dei as quebras para i lint não reclamar de tamanho e ficar mais legível
      <li key={ name }>
        <MissionCard
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
        />
      </li>));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ul>
          {listOfMissions}
        </ul>
      </div>
    );
  }
}

export default Missions;
