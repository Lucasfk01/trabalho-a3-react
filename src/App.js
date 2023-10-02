import React, { useState } from 'react';

const App = () => {
  const [valorInput, setValorInput] = useState('');

  const handleChangeInput = (event) => {
    setValorInput(event.target.value);
  };

  
  return (
    <div
      style={{
        backgroundColor: 'lightblue',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <label htmlFor="seu-input">Nome: </label>
        <input
          style={{
            width: '500px',
            padding: '8px',
          }}
          type="text"
          id="seu-input"
          placeholder="Digite o nome do Livro ou Artigo que deseja procurar."
          value={valorInput}
          onChange={handleChangeInput}
        />
      </div>
    </div>
  );
};

export default App;
