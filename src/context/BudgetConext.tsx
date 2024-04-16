import { Dispatch, ReactNode, createContext, useReducer } from "react"
import { BudgetActions, BudgetState, budgetReducer, initialState } from "../reducers/budget-reducer"
type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
    helloworld: () => void 
}
type BudgetProviderProps = {
    children: ReactNode
}
export const BudgetContext = createContext<BudgetContextProps>(null!)
export const BudgetProvider = ({children} : BudgetProviderProps) => {

    const [state, dispatch ] = useReducer(budgetReducer, initialState)
    const helloWorld = () => {
        console.log("helloworld")
    }

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                helloworld: helloWorld
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}