// API
export const url = "http://localhost:3001/"
export const headers = {
  'Authorization': "readable",
  'Content-Type': 'application/json'
}

export const showError = (error) => console.log('fetch failed: ' , error.statusText);