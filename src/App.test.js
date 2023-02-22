import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('renders CountView and CountBtn', () => {
    render(<App />);
    const view = screen.getByText('현재 숫자: 0');
    const btn = screen.getAllByRole('button');

    expect(view).toBeInTheDocument();
    expect(btn.length).toBe(2)
  });

  test('increment by 1 each time', () => {
    render(<App />);
    const initialScreen = screen.getByText('현재 숫자: 0');
    expect(initialScreen).toBeInTheDocument();

    const incrementBtn = screen.getByTestId('incrementBtn');

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);

    const resultScreen = screen.getByText('현재 숫자: 3');
    expect(resultScreen).toBeInTheDocument();
  })

  test('decrement by 1 each time', () => {
    render(<App />);
    const initialScreen = screen.getByText('현재 숫자: 0');
    expect(initialScreen).toBeInTheDocument();

    const decrementBtn = screen.getByTestId('decrementBtn');

    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);

    const resultScreen = screen.getByText('현재 숫자: -2');
    expect(resultScreen).toBeInTheDocument();
  })
})
