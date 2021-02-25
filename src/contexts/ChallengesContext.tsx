import { createContext, useState, ReactNode } from 'react'

interface ChallengesContextData {
    level: number
    currentExperience: number
    challengesCompleted: number
    levelUp: () => void
    startNewChallenge: () => void
}

interface ChallengesProviderProps {
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({children}: ChallengesProviderProps){

    const [level, setlevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)


    function levelUp() {
        setlevel(level + 1)
    }

    function startNewChallenge() {
        console.log('nada')
    }
    return(
        <ChallengesContext.Provider 
            value={{
                level, 
                currentExperience, 
                challengesCompleted, 
                levelUp,
                startNewChallenge}}
                >
            {children}
        </ChallengesContext.Provider>
    )
}