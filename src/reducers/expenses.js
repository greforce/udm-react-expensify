import { bindActionCreators } from "../../../../../Library/Caches/typescript/3.2/node_modules/redux";

// Expenses reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_EXPENSES':
      return action.expenses;
      
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense,
      ];

    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);

    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};
