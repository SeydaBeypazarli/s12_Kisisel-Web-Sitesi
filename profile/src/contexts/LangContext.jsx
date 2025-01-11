import { createContext, useContext, useState } from "react"; 
export const LangContext = createContext();

const LangContextProvider = ({children}) => {
    const [lang,setLang] = useState("en")
    return(
        <LangContext.Provider value = {{lang,setLang}}>
            {children}
        </LangContext.Provider>
    )
}
export default LangContextProvider;
export const useLang = () => {
    return useContext(LangContext);
}