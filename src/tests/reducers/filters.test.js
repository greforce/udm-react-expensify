import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    finishDate: moment().endOf('month'),
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    finishDate: undefined,
    sortBy: 'amount',
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    finishDate: moment().endOf('month'),
  };
  const action = { type: 'SET_TEXT_FILTER', text: 'my test' };
  const state = filtersReducer(currentState, action);
  expect(state.text).toBe('my test');
});

test('should set startDate filter', () => {
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    finishDate: moment().endOf('month'),
  };
  const action = { type: 'SET_START_DATE', startDate: moment().startOf('month').subtract(4, 'days') };
  const state = filtersReducer(currentState, action);
  expect(state.startDate).toEqual(moment().startOf('month').subtract(4, 'days'));
});

test('should set finishDate filter', () => {
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    finishDate: moment().endOf('month'),
  };
  const action = { type: 'SET_FINISH_DATE', finishDate: moment().startOf('month').add(10, 'days') };
  const state = filtersReducer(currentState, action);
  expect(state.finishDate).toEqual(moment().startOf('month').add(10, 'days'));
});
