import getExpensesTotal from '../../selectors/expensesTotal';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const total = getExpensesTotal([]);
  expect(total).toBe(0);
});

test('should return 0 if no expenses', () => {
  const total = getExpensesTotal([expenses[1]]);
  expect(total).toBe(expenses[1].amount);
});

test('should return 0 if no expenses', () => {
  const total = getExpensesTotal([expenses[0], expenses[1]]);
  expect(total).toBe(expenses[0].amount + expenses[1].amount);
});
