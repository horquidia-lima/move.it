import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/63380921?s=460&u=e84210593f3fb5ef5b12d08a99a7cec367829337&v=4" alt="Horquidia Lima"/>
            <div>
                <strong>Horquidia Lima</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}

