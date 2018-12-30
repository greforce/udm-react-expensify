import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage expense={expenses[1]} editExpense={editExpense} removeExpense={removeExpense} history={history} />);
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find(ExpenseForm).prop('onSubmit')(expenses[2]);
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenLastCalledWith(expenses[1].id);
  expect(history.push).toHaveBeenLastCalledWith('/');
});
