export function fetchAPI(date) {
    // Mock data - in real life, this would be fetched from a server
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  }
  
  export function submitAPI(formData) {
    console.log('Submitted form data:', formData);
    return true; // Mock successful submission
  }
  