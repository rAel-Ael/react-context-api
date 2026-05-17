import { createContext } from "react";
import { useState } from "react";

const BudgetContext = createContext (null);

function BudgetProvider ({children}) {
    const [budgetMode, setBudgetMode] = useState(false);

    const budgetText = {
        budgetMode,
        setBudgetMode
    };



return (
    <BudgetContext value={budgetText}>
        {children}
    </BudgetContext>

    )
}
export default BudgetContext;