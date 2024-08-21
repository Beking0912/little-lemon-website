import React, { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../mock/api"; 
import { useNavigate } from "react-router-dom";

function initializeTimes() {
  const today = new Date().toISOString().split("T")[0];
  return fetchAPI(today);
}

function updateTimes(state, action) {
  if (action.type === "update") {
    return fetchAPI(action.payload);
  }
  return state;
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/confirmed");
    }
  };

  const handleTimes = (date) => {
    dispatch({ type: "update", payload: date });
  }

  return (
    <div className="booking">
      <h1>Book a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={handleTimes}
        submitForm={submitForm}
      />
    </div>
  );
}

export default BookingPage;
