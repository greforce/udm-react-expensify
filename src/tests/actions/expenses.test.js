import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  fetchExpenses,
  startFetchExpenses,
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  startRemoveExpense,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database.ref('expenses').set(expensesData).then(() => done());
});

test('should setup remove expense action object', () => {
  const action = removeExpense('123abc');
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('should remove expense from database and store', (done) => {
  const store = createMockStore({});
  store.dispatch(startRemoveExpense(expenses[1].id)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id: expenses[1].id,
    });
    return database.ref(`expenses/${expenses[1].id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeNull();
    done();
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', {
    description: 'Test expense',
    note: 'Test note',
    amount: 50.25,
    createdAt: 777,
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'Test expense',
      note: 'Test note',
      amount: 50.25,
      createdAt: 777,
    },
  });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2],
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000,
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData,
      },
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const defaultExpenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  };
  store.dispatch(startAddExpense()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultExpenseData,
      },
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultExpenseData);
    done();
  });
});

test('should setup fetch expenses action object with provided values', () => {
  const action = fetchExpenses(expenses);
  expect(action).toEqual({
    type: 'FETCH_EXPENSES',
    expenses,
  });
});

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startFetchExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'FETCH_EXPENSES',
      expenses,
    });
    done();
  });
});


// test('should setup add expense object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '',
//       amount: 0,
//       createdAt: 0,
//       note: '',
//       id: expect.any(String),
//     },
//   });
// });