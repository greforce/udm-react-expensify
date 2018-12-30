import moment from 'moment';
import { setStartDate, setFinishDate } from '../../actions/filters';
import { sortByDate, sortByAmount } from '../../actions/filters';
import { setTextFilter } from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0),
  });
});

test('should generate set finish date action object', () => {
  const action = setFinishDate(moment(0));
  expect(action).toEqual({
    type: 'SET_FINISH_DATE',
    finishDate: moment(0),
  });
});

test('should generate action object for sort by date', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate action object for sort by amount', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate set text filter action object with provided value', () => {
  const text = 'test text';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text,
  });
});

test('should generate set text filter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  });
});
