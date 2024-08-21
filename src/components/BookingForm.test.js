import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders BookingForm and submits data', () => {
  const availableTimes = ["17:00", "18:00"];
  const updateTimes = jest.fn();
  const submitForm = jest.fn();

  render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

  fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2023-08-01' } });
  fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '18:00' } });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: 2 } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

  fireEvent.click(screen.getByText(/Make Your reservation/i));

  expect(submitForm).toHaveBeenCalledWith({
    date: '2023-08-01',
    time: '18:00',
    guests: 2,
    occasion: 'Birthday',
  });
});
