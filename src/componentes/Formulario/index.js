import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao';
import { useState } from 'react';


const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [posicao, setPosicao] = useState('')
  const [imagem, setImagem] = useState('')
  const [team, setTeam] = useState('')

  const aoSalvar = (event) => {
    event.preventDefault()
    props.aoPlayerCadastrado({
      nome,
      posicao,
      imagem,
      team,
    })

    setNome('')
    setPosicao('')
    setImagem('')
    setTeam('')
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <CampoTexto
          obligated={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obligated={true}
          label="Posição"
          placeholder="Digite o seu posição"
          valor={posicao}
          aoAlterado={valor => setPosicao(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite a url da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obligated={true}
          label="Time"
          itens={props.teams}
          valor={team}
          aoAlterado={valor => setTeam(valor)}
        />
        <Botao>
          Create Card
        </Botao>
      </form>
    </section>
  )

}

export default Formulario