import {createContext, useContext, useEffect, useState} from 'react';

const EstateContext = createContext({})

export const EstateContextProvider = ({children}) => {
    const [estate, setEstate] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [optionA, setOptionA] = useState(null)
    const [optionB, setOptionB] = useState(null)
    const [lastSetOption, setLastSetOption] = useState('B')

    useEffect(() => {
        const getEstate = async () => {
            try {
                const response = await fetch('https://estate-comparison.codeboot.cz/list.php')
                const data = await response.json()
                setEstate(data.slice(0, 10))
                setOptionA(data[0])
                setOptionB(data[1])
            } catch (error) {
                console.log('error during fetching data', error)
            } finally {
                setIsLoaded(true)
            }
        }
        getEstate()
    }, []);

    const updateLastSetOption = () => {
        setLastSetOption(lastSetOption === 'A' ? 'B' : 'A')
    }

    return (
        <EstateContext.Provider value={{
            estate,
            isLoaded,
            optionA,
            optionB,
            setOptionA,
            setOptionB,
            lastSetOption,
            updateLastSetOption
        }}>
            {children}
        </EstateContext.Provider>
    )
}

export const useEstateContext = () => {
    return useContext(EstateContext)
}
