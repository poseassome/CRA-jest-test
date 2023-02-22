import { fireEvent, render, screen } from "@testing-library/react";
import CountBtn from "./CountBtn";

describe('<CountBtn />', () => {
  test('increment button and decrement button', () => {
    render(<CountBtn />);
    const incrementBtn = screen.getByTestId('incrementBtn');
    const decrementBtn = screen.getByTestId('decrementBtn');
    
    expect(incrementBtn).toBeInTheDocument();
    expect(decrementBtn).toBeInTheDocument();
  })

  test('click Event', () => {
    const incrementFn = jest.fn();
    const decrementFn = jest.fn();
    render(<CountBtn incrementFn={incrementFn} decrementFn={decrementFn} />)
    
    const incrementBtn = screen.getByTestId('incrementBtn');
    const decrementBtn = screen.getByTestId('decrementBtn');
    
    fireEvent.click(incrementBtn);
    fireEvent.click(decrementBtn);

    expect(incrementFn).toBeCalled();
    expect(decrementFn).toBeCalled();
  })
})