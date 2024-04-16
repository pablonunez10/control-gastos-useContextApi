import { useMemo } from "react"
import BudgetForm from "./Components/BudgetForm"
import { useBudget } from "./hooks/useBudget"
import BudgetTracker from "./Components/BudgetTracker"
import ExpenseModal from "./Components/ExpenseModal"
import ExpenseList from "./Components/ExpenseList"
function App() {
 const {state} = useBudget()
 const isValidBudget =  useMemo(() =>state.budget > 0, [state.budget])
  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">Planificador de Gastos</h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ? <BudgetTracker/>: <BudgetForm />}
      </div>
      {isValidBudget && (
        <main className="max-x-3xl mx-auto py-10">
         <ExpenseList/> 
          <ExpenseModal/>
        </main>
      )}
    </>
  )
}

export default App
