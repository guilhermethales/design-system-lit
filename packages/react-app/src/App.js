import '@guilhermethales/button'
import '@guilhermethales/input'
import { useRef } from 'react';

function App() {
  let inputRef = useRef();

  const handleClick = () => {
    console.log(inputRef.current.value, 'input value');
  }
  
  return (
    <>
      <sb-button onClick={handleClick}>Teste</sb-button>

      <sb-input
        placeholder="Digite o nome da carteira"
        ref={inputRef}
      />
    </>
  );
}

export default App;
