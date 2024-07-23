import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import CheckBox from './Components/CheckBox';
import './App.css';

function App() {
  const [color, setColor] = useState('No color');
  const [count, setCount] = useState(0);

  function handleColor(color) {
    setColor(color);
    console.log(color);
    return;
  }

  function Divisor({ nombre }) {
    return (
      <>
        <div className="divisor">
          <div className="nombreSeccion">
            <p>{nombre}</p>
          </div>
          <div className="line">
            <hr />
          </div>
        </div>
      </>
    );
  }

  function InputText({ placeholder, type }) {
    return (
      <input className="input-text" type={type} placeholder={placeholder} />
    );
  }

  // function CheckBox({ text }) {
  //   return (
  //     <div className="chckbx">
  //       <input className="checkBox" type="checkbox" id={'chbx' + text} />
  //       <label for={'chbx' + text}>{text}</label>
  //     </div>
  //   );
  // }

  return (
    <div className="presupuestador">
      <div className="header">
        <p>Nuevo Presupuesto</p>
      </div>
      <div className="titulo">
        <InputText placeholder={'Titulo de presupuesto...'} />
        <div className="paleta-colores">
          <p>Asignarle un color</p>
          <button className="circle red" onClick={() => handleColor('red')} />
          <button
            className="circle yellow"
            onClick={() => handleColor('yellow')}
          />
          <button
            className="circle green"
            onClick={() => handleColor('green')}
          />
          <button className="circle cyan" onClick={() => handleColor('cyan')} />
          <button className="circle blue" onClick={() => handleColor('blue')} />
          <button
            className="circle purple"
            onClick={() => handleColor('purple')}
          />
        </div>
        {/* <div>
          <p>{color}</p>
        </div> */}

        <div className="seccion descripcion">
          <Divisor nombre={'Descripción'} type={'text'} />
          <div className="inputDetalle">
            <div className="opciones">
              <div className="opcionesEstilo">
                <button className="opcion bold">
                  <p>B</p>
                </button>
                <button className="opcion italic">
                  <p>I</p>
                </button>
                <button className="opcion sub">
                  <p>S</p>
                </button>
              </div>
              <div className="opcionesAlineacion">
                <button className="opcion left">
                  <p>1</p>
                </button>
                <button className="opcion center">
                  <p>2</p>
                </button>
                <button className="opcion right">
                  <p>3</p>
                </button>
                <button className="opcion fill">
                  <p>4</p>
                </button>
                <button className="opcion list">
                  <p>5</p>
                </button>
              </div>
            </div>
            <div className="inputText">
              <input
                className="inputTexto"
                type="text"
                placeholder="Detalle el presupuesto aquí..."
              />
            </div>
          </div>
        </div>
        <div className="seccion destinatario">
          <Divisor nombre={'Destinatario'} />
          <InputText placeholder={'Nombre'} type={'text'} />
          <InputText placeholder={'Dirección de trabajo'} type={'text'} />
          <InputText placeholder={'Teléfono'} type={'text'} />
          <InputText placeholder={'Email'} type={'email'} />
        </div>
        <div className="seccion tipo-trabajo">
          <Divisor nombre={'Tipo de trabajo'} />
          {/* <div className="checkBoxDiv">
            <CheckBox text={'Pintura'} />
            <CheckBox text={'Plomería'} />
            <CheckBox text={'Gas'} />
            <CheckBox text={'Mampostería'} />
          </div> */}
          <CheckBox />
        </div>
        <div className="seccion incluye">
          <Divisor nombre={'Qué incluye'} />
        </div>
      </div>
    </div>
  );
}

export default App;
