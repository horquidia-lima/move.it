import { createContext, useState, ReactNode } from 'react'
import challenges from '../Challenges.json'

interface Challenge {
    type: 'body' | 'eye'
    description: string
    amount: number
}
interface ChallengesContextData {
    level: number
    currentExperience: number
    challengesCompleted: number
    experienceToNextLevel: number
    activeChallenge: Challenge
    levelUp: () => void
    startNewChallenge: () => void
    resetChallenge: () => void
}

interface ChallengesProviderProps {
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({children}: ChallengesProviderProps){

    const [level, setlevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp() {
        setlevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    return(
        <ChallengesContext.Provider 
            value={{
                level, 
                currentExperience, 
                experienceToNextLevel,
                challengesCompleted, 
                levelUp,
                startNewChallenge,
                activeChallenge,
                resetChallenge}}
                >
            {children}
        </ChallengesContext.Provider>
    )
}