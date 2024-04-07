'use client'
import { createContext, useContext, useEffect, useReducer } from "react";

type AppState  = {
    logged_in : boolean
}

const initState: AppState = {
    logged_in : false
}

const redeucer = (state: AppState, action: any) => {
    let newState: AppState
    switch(action.type) {
        case 'initialize' :
            newState = { ...action.payload }
            break;
        case 'logged_in' :
            newState = {...state, logged_in : action.payload}
            break;
        default:
            newState = state
    }
    localStorage.setItem('app_state', JSON.stringify(newState))
    return newState
}

const AppContext = createContext<any>(undefined)

interface Props {
    children: React.ReactNode;
}

const AppWrapper: React.FC<Props> = ({ children }) => {

    const [ appState, dispatch ] = useReducer(redeucer, initState)

    useEffect(() => {
        let app_state_from_storage = localStorage.getItem('app_state');
        let initialState = app_state_from_storage ? JSON.parse(app_state_from_storage) : initState
        dispatch({type : 'initialize', payload : initialState})
    }, [])

    return <AppContext.Provider value={{
            appState,
            dispatch
        }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}

export default AppWrapper
