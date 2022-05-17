import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor
} from '@testing-library/react';
import { LoginForm } from '../LoginForm';
import * as reactRedux from 'react-redux';
import { createTestStore } from '../../_testUtils/createTestStore';
import * as actionCreator from '../../_actions/auth/actionCreators';
import * as reactRouterDOM from 'react-router-dom';
import * as faker from 'faker';

/* constants for this test */
const FAKE_EMAIL = faker.internet.email();
const FAKE_PASSWORD = faker.internet.password();
const FAKE_EMAIL_WITH_WRONG_FORMAT = faker.lorem.word();

/* setup mocks for this test */
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

jest.mock('../../_actions/auth/actionCreators', () => ({
  ...jest.requireActual('../../_actions/auth/actionCreators'),
  LoginUserAsync: jest.fn()
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn()
}));

/**
 *  pushSpy will be wrapped in a closure, `() => ({ push: pushSpy })`, hence we can't do something like pushSpy.mockClear() to clear its memory
 *  hence, the work around is, setup a jest.fn() here, and mock implementation before tests start:
    pushSpy.mockClear();
    (reactRouterDOM.useHistory as jest.Mock).mockImplementationOnce(() => ({
      push: pushSpy
    }));
 * */
const pushSpy = jest.fn();

describe('<LoginForm />', () => {
  // global settings for all test blocks
  afterAll(jest.resetAllMocks);

  describe('[Existence & validations]', () => {
    /* settings for this testing block ONLY */
    beforeEach(() => {
      (reactRedux.useSelector as jest.Mock).mockImplementationOnce(
        (selectorFn) =>
          selectorFn({
            auth: {
              user: null,
              error: null,
              hasLoggedIn: false
            },
            loadingStatus: { loading: false }
          })
      );

      render(
        <reactRedux.Provider store={createTestStore()}>
          <LoginForm />
        </reactRedux.Provider>
      );
    });

    afterEach(cleanup);

    test('[Existence] should contain input for email & password, and sign in button', () => {
      // screen.debug()
      const emailInput = screen.queryByPlaceholderText(/Email Address */i);
      expect(emailInput).toBeInTheDocument();

      const passwordInput = screen.queryByPlaceholderText(/Password */i);
      expect(passwordInput).toBeInTheDocument();

      const signInBtn = screen.getByRole('button', { name: 'signInBtn' });
      expect(signInBtn).toBeInTheDocument();
      expect(signInBtn).toHaveTextContent('Sign In');
    });

    test('[Validations] should display error message when submit, while email & password are empty', async () => {
      const signInBtn = screen.getByRole('button', { name: 'signInBtn' });

      await waitFor(() => {
        fireEvent.click(signInBtn);
      });

      expect(screen.queryAllByText(/Required/i).length).toBe(2);
    });

    test('[Validations] should display error message when password is empty', async () => {
      const signInBtn = screen.getByRole('button', { name: 'signInBtn' });

      const emailInput = screen.queryByPlaceholderText(/Email Address */i);

      await waitFor(() => {
        fireEvent.change(emailInput!, {
          target: { value: FAKE_EMAIL }
        });
      });

      await waitFor(() => {
        fireEvent.click(signInBtn);
      });

      expect(screen.queryAllByText(/Required/i).length).toBe(1);
    });

    test('[Validations] should display error message when user leave email blank', async () => {
      const emailInput = screen.queryByPlaceholderText(/Email Address */i)!;

      await waitFor(() => {
        fireEvent.blur(emailInput);
      });

      expect(screen.queryAllByText(/Required/i).length).toBe(1);
    });

    test('[Validations] should display error message if email format not valid', async () => {
      const emailInput = screen.queryByPlaceholderText(/Email Address */i)!;

      await waitFor(() => {
        fireEvent.change(emailInput!, {
          target: { value: FAKE_EMAIL_WITH_WRONG_FORMAT }
        });
      });

      await waitFor(() => {
        fireEvent.blur(emailInput);
      });

      expect(screen.queryAllByText(/Invalid email/i).length).toBe(1);
    });
  });

  describe('[Actions]', () => {
    /* settings for this testing block ONLY */
    beforeEach(() => {
      // we clear the memory of pushSpy, and re-assign it to reactRouterDOM.useHistory
      pushSpy.mockClear();
      (reactRouterDOM.useHistory as jest.Mock).mockImplementationOnce(() => ({
        push: pushSpy
      }));

      (reactRedux.useSelector as jest.Mock).mockImplementationOnce(
        (selectorFn) =>
          selectorFn({
            auth: {
              user: null,
              error: null,
              hasLoggedIn: true
            },
            loadingStatus: { loading: false }
          })
      );

      render(
        <reactRedux.Provider store={createTestStore()}>
          <LoginForm />
        </reactRedux.Provider>
      );

      // (reactRedux.useDispatch as jest.Mock).mockReturnValue(mockedDispatch);
      mockDispatch.mockClear();
    });

    afterEach(cleanup);

    test('[Submission] should submit correct email & password', async () => {
      // const useDispatchSpy = jest.fn();
      // (reactRedux.useDispatch as jest.Mock).mockReturnValue(useDispatchSpy);
      const emailInput = screen.getByPlaceholderText(/Email Address */i)!;

      await waitFor(() => {
        fireEvent.change(emailInput!, {
          target: { value: FAKE_EMAIL }
        });
      });

      const passwordInput = screen.getByPlaceholderText(/Password */i)!;

      await waitFor(() => {
        fireEvent.change(passwordInput!, {
          target: { value: FAKE_PASSWORD }
        });
      });

      const signInBtn = screen.getByRole('button', { name: 'signInBtn' });

      await waitFor(() => {
        fireEvent.click(signInBtn);
      });

      expect(mockDispatch).toHaveBeenCalledTimes(1);

      expect(actionCreator.LoginUserAsync).toHaveBeenCalledTimes(1);
      expect(actionCreator.LoginUserAsync).toHaveBeenLastCalledWith({
        email: FAKE_EMAIL,
        password: FAKE_PASSWORD
      });

      expect(pushSpy).toHaveBeenCalledTimes(1);
      expect(pushSpy).toHaveBeenCalledWith('/home');
    });
  });
});
