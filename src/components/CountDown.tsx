import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/CountDown.module.css';



export function CountDown(){
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown 
  } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  

  return(
    <div>

      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
          disabled
          className={styles.countdownButtonFinished}
        >
          Ciclo encerrado
          <img src="icons/done.png" alt=""/>
        </button>
      ) : (
        <>
          { isActive ? (
            <button
              type="button" 
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
           > Abandonar ciclo
            <img src="icons/close3.png" alt="close"/>
           </button>
      ) : (
          <button
            type="button" 
            className={styles.countdownButton}
            onClick={startCountdown}
          > Iniciar um ciclo
          <img src="icons/start.png" alt="start"/>
          </button>
      )   }
        </>
      )}
    </div>  
  );
}