import authReducer from '../../reducers/auth';

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set uid for login', () => {
  const uid = 'x123';
  const action = {
    type: 'LOGIN',
    uid,
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(uid);
});

test('should clear uid for logout', () => {
  const uid = 'x123';
  const action = {
    type: 'LOGOUT',
  };
  const state = authReducer({ uid }, action);
  expect(state).toEqual({});
});
