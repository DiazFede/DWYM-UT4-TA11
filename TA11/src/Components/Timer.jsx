import { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup: detener el temporizador cuando el componente se desmonte
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Se ejecuta una vez cuando el componente se monta

  return (
    <div>
      <h1>Tiempo transcurrido: {seconds} segundos</h1>
    </div>
  );
};

export default Timer;
