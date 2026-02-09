// JS: Async Data Aggregation Using Promises

// You are required to fetch related data from multiple APIs and create a summary.
// Steps:
// Fetch a user
// Fetch posts for that user
// Fetch comments for one of the posts

// Combine the results into a single summary object

// Example:

// summary: {
// user: "Leanne Graham",
// postCount: 10,
// commentCount: 5

// }

// Contraints:

// Use Promise.all
// Use async/await
// Handle errors properly
// Return or log a summary object

async function makeAPIReq(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

async function getUser() {
  return await makeAPIReq("https://jsonplaceholder.typicode.com/todos/1");
}
async function getPost() {
  return await makeAPIReq("https://jsonplaceholder.typicode.com/todos/1");
}
async function getComment() {
  return await makeAPIReq("https://jsonplaceholder.typicode.com/todos/1");
}

async function data_aggregation() {
  const userPromise = getUser();
  const postPromise = getPost();
  const commentPromise = getComment();

  const result = await Promise.all([userPromise, postPromise, commentPromise]);
  console.log(result);
}

data_aggregation()