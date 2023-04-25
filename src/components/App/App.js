
import { useState } from 'react';
import './App.css';
import Portal from '../Portal/Portal';
import Modal from '../Modal/Modal';
import Context from '../Context/Context';
import { MyContext } from '../MyContext/MyContext';

function App() {

   const [state, setState] = useState({
    color: 'white'
  })

  const [showModal, setShowModal] = useState(false);

  const handleChangeColor = () => {

    switch(state.color){
      case 'white':
        setState({color: 'black'});
        document.body.style.backgroundColor = '#ccc'
        break;
      case 'black':
        setState({color: 'white'});
        document.body.style.backgroundColor = '#fff'
        break;
    }
  }

  return (
    <div className="App">

      <button onClick={() => setShowModal(!showModal)}>
        modal
      </button>

      {showModal && (
      <Portal>
        <Modal onClose={() => {
          setShowModal(false)
        }}/>
      </Portal>)}


      <MyContext.Provider value ={state.color}>
        <Context />
      </MyContext.Provider>
      <button onClick={handleChangeColor}>change color</button>

    </div>
  );
}

export default App;
