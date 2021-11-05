import '../../constants/matchMedia';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Landing from './index';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const middleWares = [thunk];
const initialState = {
  homeReducer: {
    children: [],
    currentChild: {},
  },
};
const mockStore = configureStore(middleWares);
const store = mockStore(initialState);

describe('Child Detail page', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/home']}>
          <Landing />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('should render normally', () => {
    expect(screen.getByTestId('landing-test-id')).toBeInTheDocument();
  });
});
