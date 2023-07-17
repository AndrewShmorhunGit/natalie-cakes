async function client(endpoint: string, customConfig = {}): Promise<Response> {
  const config = {
    method: "GET",
    "Content-Type": "application/json",
    ...customConfig,
  };

  const response = await window.fetch(
    process.env.REACT_APP_API_URL + endpoint,
    config
  );
  const data = response;
  if (response.ok) {
    console.log(data);
    return data;
  } else {
    return Promise.reject(data);
  }
}

export { client };
