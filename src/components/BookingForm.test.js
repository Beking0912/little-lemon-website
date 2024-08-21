import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders BookingForm and submits data', () => {
  const availableTimes = ["17:00", "18:00"];
  const updateTimes = jest.fn();
  const submitForm = jest.fn();

  render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />);

  fireEvent.change(screen.getByLabelText(/Choose Date:/i), { target: { value: '2023-08-01' } });
  fireEvent.change(screen.getByLabelText(/Choose Time:/i), { target: { value: '18:00' } });
  fireEvent.change(screen.getByLabelText(/Number of Guests:/i), { target: { value: 2 } });
  fireEvent.change(screen.getByLabelText(/Occasion:/i), { target: { value: 'Birthday' } });

  fireEvent.click(screen.getByText(/Make Reservation/i));

  expect(submitForm).toHaveBeenCalledWith({
    date: '2023-08-01',
    time: '18:00',
    guests: '2',
    occasion: 'Birthday',
  });
});
