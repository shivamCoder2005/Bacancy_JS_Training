function runWithLimit(tasks, limit) {
  let index = 0;
  let active = 0;

  return new Promise((resolve) => {
    function runNext() {
      // all done
      if (index === tasks.length && active === 0) {
        resolve();
        return;
      }

      // start new tasks while allowed
      while (active < limit && index < tasks.length) {
        const task = tasks[index];
        index++;
        active++;

        task()
          .then((res) => console.log(res))
          .catch((err) => console.error(err))
          .finally(() => {
            active--;
            runNext();
          });
      }
    }

    runNext();
  });
}


function createTask(id) {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${id} resolved`);
      }, Math.random() * 1000 * 10);
    });
}

function main() {
  const tasks = [];
  for (let index = 1; index <= 10; index++) {
    tasks.push(createTask(index));
  }
  runWithLimit(tasks, 2);
}

main();
