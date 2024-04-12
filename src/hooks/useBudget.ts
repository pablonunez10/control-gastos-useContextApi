import { useContext } from "react";
import { BudgetContext } from "../context/BudgetConext";

export const useBudget = () => {
    const context = useContext(BudgetContext)
    if(!context) {
        throw new Error('useBudget must be used whitin a BudgetProvider')
    }
    return context
}