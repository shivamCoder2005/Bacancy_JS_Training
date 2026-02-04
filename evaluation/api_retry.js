// JS: Implement API Retry Logic

// Write a function that takes a url and retry count, calls the API, and retries the request up to
// the given number of times if the API call fails.

async function makeAPIReq(url) {
  const response = await fetch(url);
  const data = response.json();
  return data;
}

async function retryAPI(url, limit) {
  if (limit == 0) {
    return;
  }
  try {
    const data = await makeAPIReq(url);
    console.log(data);
  } catch (error) {
    console.log(error);
    return retryAPI(url, limit - 1);
  }
}

retryAPI("https://jsonplaceholder.typicode.com/todos/1", 5);
