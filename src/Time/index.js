import Colaborador from '../componentes/Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        props.colaboradores.length > 0 &&
        <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderBottomColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    ) // return condição 1 && termo a ser retornado caso condição 1 = true. Retorna o que está após o operador and | também pode ser usado o ternário: condição ? jsx : ''
}

export default Time