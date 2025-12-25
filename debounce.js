function debounce(fn, delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn(...args)
        }, delay)
    }

}

const search = (query) => {
    console.log("Searching for query : ", query)
};

const searchWithDebounce = debounce(search, 1000);

searchWithDebounce("Hello")
searchWithDebounce("Hello What ")
searchWithDebounce("Hello What are ")
searchWithDebounce("Hello What are you")
searchWithDebounce("Hello What are you doing")
searchWithDebounce("Hello What are you doing and ")
searchWithDebounce("Hello What are you doing and why")
searchWithDebounce("Hello What are you doing and why")