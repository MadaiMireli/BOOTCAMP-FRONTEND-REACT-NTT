import "./FormSend.css"
const FormSend = () => {
  return (
    <div className="resume__send">
        <div className="container__input">
            <label htmlFor="name">Nombres: </label>
            <input type="text" id="nombres"/>
        </div>
        <div className="container__input">
            <label htmlFor="lastname">Apellidos: </label>
            <input type="text" id="lastname"/>
        </div>
        <div className="container__input">
            <label htmlFor="distrito">Distrito: </label>
            <select name="distrito" id="distrito"></select>
        </div>
        <div className="container__input">
            <label htmlFor="direction">Dirección: </label>
            <input type="text" id="direction"/>
        </div>
        <div className="container__input">
            <label htmlFor="reference">Referencia: </label>
            <input type="text" id="reference"/>
        </div>
        <div className="container__input">
            <label htmlFor="direction">Dirección: </label>
            <input type="text" id="direction"/>
        </div>
        <div className="container__input">
            <label htmlFor="celphone">Celular: </label>
            <input type="text" id="celphone"/>
        </div>

        <button className="send__resumen">
            Comprar
        </button>
    </div>
  )
}

export default FormSend
