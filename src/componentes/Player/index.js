import './Player.css'

const Player = ({ nome, posicao, imagem }) => {

  return (<div className='player'>
    <div className='cabecalho'>
      <img src={imagem} alt={`Player ${nome}`}></img>
    </div>

    <div className='rodape'>
      <h4>{nome}</h4>
      <h5>{posicao}</h5>
    </div>
  </div>)

}

export default Player