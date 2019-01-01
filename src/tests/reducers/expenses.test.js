import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expenseData = {
    id: '555',
    description: 'Laptom',
    amount: 29500,
    createdAt: 200000,
    note: 'New used laptop',
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: expenseData,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expenseData]);
});

test('should edit expense', () => {
  const amount = 200000;
  const expenseUpdates = {
    amount,
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: expenseUpdates,
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit expense if expense not found', () => {
  const amount = 122000;
  const expenseUpdates = {
    amount,
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: expenseUpdates,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should fetch expenses', () => {
  const action = {
    type: 'FETCH_EXPENSES',
    expenses: [expenses[1]],
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
