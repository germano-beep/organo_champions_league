import Player from '../Player'
import './Team.css'

const Team = (props) => {
  return (
    props.players.length > 0 && <section className='team' style={{ backgroundColor: props.corPrimaria }}>
      <h3 style={{ borderColor: props.corSecundaria }}>{props.nome}</h3>
      <div className='players'>
        {props.players.map(player => <Player
          key={player.nome}
          nome={player.nome}
          posicao={player.posicao}
          imagem={player.imagem}
        />)}
      </div>
    </section>
  )
}

export default Team
