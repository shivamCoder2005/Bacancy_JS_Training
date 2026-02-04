// problem :-

// https://jsonplaceholder.typicode.com/users/1
// https://jsonplaceholder.typicode.com/posts?userId=1
// https://jsonplaceholder.typicode.com/comments?postId=1

async function makeAPI(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function getUser(url) {
  return makeAPI(url);
}
function getPost(url) {
  return makeAPI(url);
}
function getComment(url) {
  return makeAPI(url);
}

async function data_aggregator() {
  let baseUrl = "https://jsonplaceholder.typicode.com";
  let userId = 1;
  try {
    const userData = await getUser(baseUrl + `/users/${userId}`);
    if (!userData) throw new Error("User Not Found");

    const postData = await getUser(baseUrl + `/posts?userId=${userId}`);
    if (!postData || postData.length == 0) throw new Error("Post Not Found");

    const postId = postData[0].id;
    const commentData = await getUser(baseUrl + `/comments?postId=${postId}`);
    if (!commentData || commentData.length == 0)
      throw new Error("Comment Not Found");

    console.log(userData,postData,commentData)

  } catch (error) {
    console.log(error);
  }
}

data_aggregator();
