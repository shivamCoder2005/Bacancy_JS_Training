function promiseAll(promisearr) {
  return new Promise((resolve, reject) => {
    const result = new Array(promisearr.length);
    let count = 0;
    promisearr.forEach((promise, index) => {
      promise
        .then((data) => {
          count++;
          result[index] = data;
          if (count == promisearr.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

function promiseAllSettleded(promisearr) {
  return new Promise((resolve, reject) => {
    const result = new Array(promisearr.length);
    let count = 0;
    promisearr.forEach((promise, index) => {
      promise
        .then((data) => {
          count++;
          result[index] = data;
          if (count == promisearr.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          count++;
          result[index] = err;
          if (count == promisearr.length) {
            resolve(result);
          }
        });
    });
  });
}

function promiseRace(promisearr) {
  return new Promise((resolve, reject) => {
    promisearr.forEach((promise) => {
      promise
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

function promiseAny(promisearr) {
  return new Promise((resolve, reject) => {
    promisearr.forEach((promise) => {
      promise
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
}

async function myfunc() {
    
  const promisearr = [];
  for (let index = 1; index <= 5; index++) {
    promisearr.push(
      new Promise((res, rej) => {
        setTimeout(() => {
        }, index * 1000);
      }),
    );
  }

  try {
    const result = await promiseAny(promisearr);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myfunc();
