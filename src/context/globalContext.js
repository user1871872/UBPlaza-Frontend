import { createContext, useContext, useState } from "react";
const GlobalContext = createContext()
const GlobalProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [reservation] = useState([]);

    return (
        <GlobalContext.Provider value={{ cart, setCart, reservation }}>{children}</GlobalContext.Provider>
    )
}
export const GlobalState = () => { return useContext(GlobalContext) }

export default GlobalProvider;