import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/Da-Vinci-Code.png" alt="Vinicius Bertelli" />
      <div>
        <strong>Vinicius Bertelli</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  ) 
}