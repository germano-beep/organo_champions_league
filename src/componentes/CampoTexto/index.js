import './CampoTexto.css'

const CampoTexto = (props) => {

  return (
    <div className="campo-texto">
      <label>{ props.label }</label>
      <input value={props.valor} onChange={event => props.aoAlterado(event.target.value)} required={props.obligated} placeholder={props.placeholder}/>
    </div>
  )
}


export default CampoTexto