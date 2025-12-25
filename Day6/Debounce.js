function debounce(func, delay) {
  let timeoutId; 

  return function (args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.bind(this, args); 
    }, delay);
  };
}


function sayHello(name) {
  console.log("Hello " + name);
}

const debouncedHello = debounce(sayHello, 1000);

// debouncedHello("Rahul");
// debouncedHello("Shakya");
debouncedHello("Bro");

