import { useState } from 'react';
import Banner from './componentes/Banner/';
import Formulario from './componentes/Formulario/';
import Team from './componentes/Team';
import Footer from './componentes/Footer/';

function App() {

  const teams = [
    {
      nome: 'Real Madrid',
      corPrimaria: '#FEECA1',
      corSecundaria: '#00529F',
    },
    {
      nome: 'Milan',
      corPrimaria: '#E59898',
      corSecundaria: '#152238',
    },
    {
      nome: 'Liverpool',
      corPrimaria: '#D04545',
      corSecundaria: '#152238',
    },
    {
      nome: 'Bayern Munchen',
      corPrimaria: '#F88A82',
      corSecundaria: '#152238',
    },
    {
      nome: 'Barcelona',
      corPrimaria: '#46A4D1',
      corSecundaria: '#152238',
    },
    {
      nome: 'Ajax',
      corPrimaria: '#FFD9D9',
      corSecundaria: '#152238',
    },
    {
      nome: 'Internazionale Milano',
      corPrimaria: '#98CCE6',
      corSecundaria: '#152238',
    },
    {
      nome: 'Manchester United',
      corPrimaria: '#D55858',
      corSecundaria: '#152238',
    },

  ]

  const [players, setPlayers] = useState([])

  const aoNovoPlayerAdicionado = (player) => {
    setPlayers([...players, player])

  }

  return (
    <div className="App">
      <Banner />
      <Formulario teams={teams.map(team => team.nome)} aoPlayerCadastrado={player => aoNovoPlayerAdicionado(player)} />
      {teams.map(team =>
        <Team
          key={team.nome}
          nome={team.nome}
          corPrimaria={team.corPrimaria}
          corSecundaria={team.corSecundaria}
          players={players.filter( player => player.team === team.nome)}
        />)}
        <Footer/>

    </div>
  );
}

export default App;
