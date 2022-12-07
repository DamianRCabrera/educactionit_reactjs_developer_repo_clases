// import Repaso from './components/repaso';
// import EjercicioUno from './components/ejerciciouno';
import ItemListaSimple from './components/itemLista';
import Lista from './components/lista';
import Ejercicio2 from './components/ejerciciodos';
import './App.css';

const json = [
  {
    id: 1,
    detalle: 'Sacar al perro'
  },
  {
    id: 2,
    detalle: 'Ir al gym'
  },
  {
    id: 3,
    detalle: 'Buscar info de Java'
  },
  {
    id: 4,
    detalle: 'Pagar recibo de Internet'
  },
  {
    id: 5,
    detalle: 'Regar plantas'
  }
]

function App() {
  return (
    <div className="App">
      {/* <Repaso /> */}
      {/* <EjercicioUno /> */}
      {/* <Lista>
        {json.map((item) => {
          return <ItemListaSimple key={item.id} detalle={item.detalle} />
        })}
      </Lista> */}
      <Ejercicio2></Ejercicio2>
    </div>
  );
}

export default App;
