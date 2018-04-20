const requestHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json'
});

const fetchResponse = async url => {
  const options = {
    method: 'GET',
    headers: requestHeaders()
  };

  const response = await fetch(url, options);
  if (response.status === 204) {
    return {};
  }

  return response;
};

const fetchJson = async url => {
  const response = await fetchResponse(url);
  const body = await response.json();

  if (response.status >= 300) {
    const error = new Error(body.message);
    error.response = body;
    error.status = response.status;
    throw error;
  }

  return body;
};

export default fetchJson;
