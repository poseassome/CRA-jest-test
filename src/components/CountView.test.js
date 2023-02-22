import { render, screen } from "@testing-library/react";
import CountView from "./CountView";

describe('<CountView />', () => {
  test('show the current count state.', () => {
    let sample = 0;
    render(<CountView count={sample} />);
    const initial = screen.getByText('현재 숫자: 0');
    expect(initial).toBeInTheDocument();

    sample = 15;
    render(<CountView count={sample} />);
    const result = screen.getByText('현재 숫자: 15');
    expect(result).toBeInTheDocument();
  })
})