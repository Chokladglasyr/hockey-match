import { createContext, useState, type ReactNode } from "react";

interface LanguageContextType {
    eng: boolean;
    toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode
}

const LanguageProvider = ({children}: LanguageProviderProps) => {
     const [eng, setEng] = useState(false)

  const toggleLanguage = () =>{
    setEng((prev) => !prev)
  }
    return (
        <LanguageContext.Provider value={{eng, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}
export {LanguageContext, LanguageProvider}