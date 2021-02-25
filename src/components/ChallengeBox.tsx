import {useContext} from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const {activeChallenge, resetChallenge} = useContext(ChallengesContext)

    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
            <div className={styles.challengeActive}>
                <header>Gana {activeChallenge.amount}</header>
                <main>
                    <img src={`icons/${activeChallenge.type}.svg`}/>
                    <strong>Nuevo desafío</strong>
                    <p>{activeChallenge.description}</p>
                </main>

                <footer>
                    <button 
                    type="button" 
                    className={styles.challengeFailedButton}
                    onClick={resetChallenge}>
                        Fallé
                    </button>
                    <button 
                    type="button"
                    className={styles.challengeSucceededButton}>
                        Completé
                    </button>
                </footer>
            </div>
            ) : (
            <div className={styles.challengeNotActive}>
                <strong>Termina un ciclo para recibir un desafío</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Sube de nivel completando desafíos.
                </p>
            </div>
            )}     
        </div>
    )
}