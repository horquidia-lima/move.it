import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {

    const hasActiveChallenge = true
    return(
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ? (
            <div className={styles.challengeActive}>
                <header>Gana 400 xp</header>
                <main>
                    <img src="icons/body.svg" alt="body"/>
                    <strong>Nuevo desafío</strong>
                    <p>Levántese y camine 3 minutos..</p>
                </main>

                <footer>
                    <button 
                    type="button" 
                    className={styles.challengeFailedButton}>
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