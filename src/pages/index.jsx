import {React, useState, useEffect, useMemo} from 'react'

const Teste = () => {
  const [name, SetName] = useState('Caio');

  const handleChangeName = () => {
    SetName(x => x === "Cavalcanti" ? 'Caio' : 'Cavalcanti');
  }

  // useEffect(()=>{
  //   alert('renderizei')
  // },[{handleChangeName}]);

  const calculo = 10 * 200;

  return (
    <>
      <p>Seu nome é {name}</p>
      <button onClick={handleChangeName}>Aperte para mudar</button>

    </>
  )
}

export default Teste