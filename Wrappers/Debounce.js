const wrapper = (callback, timeout) => {
    let timer;

    return function () {
        const fn = () => {
            callback.apply(this, arguments);
        };

        clearTimeout(timer);
        timer = setTimeout(fn, timeout);
    };
};

// USE
function click(e) {
    console.log('e.target: ', e.target.value);
}

const wrapClick = wrapper(click, 500);
document.querySelector('.search').addEventListener('keyup', wrapClick);