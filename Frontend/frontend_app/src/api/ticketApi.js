const defaultHeaders = (token) => ({
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Request-Method': ['POST', "GET", "OPTIONS", "HEAD"],
  'Content-Type': 'application/json',
  'Authorization': 'Token ' + token,
});

export const createTicket = (dictVariables) => (
  fetch("http://127.0.0.1:8000/ticket/", {
    method: "POST",
    headers: defaultHeaders(dictVariables['token']),
    body: JSON.stringify(dictVariables['data'])
  })
  .then(response => response.json())
);

export const getUserTicketsApi = (token) => (
  fetch("http://127.0.0.1:8000/ticket/?token="+token, {
    method: "GET",
    headers: defaultHeaders(token),
  })
  .then(response => response.json())
);