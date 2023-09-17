
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`
   

    

    const AoDigitado = (evento) => {
       props.aoAlterado(evento.target.value)
    }
    return (  
        <div className="campo-texto">
            <label>{props.label}
            </label>
            <input value={props.valor} onChange={AoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}
export default CampoTexto