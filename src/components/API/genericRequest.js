export const DBRequest = async (method, headers, body, UrlRequest) => {
  const requestOptions = {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  };
  try {
    const response = await fetch(
      "http://localhost:4000/" + UrlRequest,
      requestOptions
    );
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};
