let s = 0;
setInterval(() => {
    console.log(new Date().getTime())
}, 1000)

let id = 0;
function renderNewResolution(value, resolved) {
    let current = document.createElement('div');
    current.classList.add('promise-container');
    current.innerHTML = `<p><b>#${id++}</b><br>${new Date().getTime()}<br><i>${resolved?"Resolved promise:":"Rejected promise:"}</i> <span style="font-family: Consolas;">${value}</span></p>`
    current.style.backgroundColor = resolved ? 'greenyellow' : '#fe3030';
    document.body.appendChild(current);
}
function runPromise(promise) {
    promise.then((value) => renderNewResolution(value, true)).catch((value) => renderNewResolution(value, false));
}

const task1promise = new Promise((resolve, reject) => {
    let rand = Math.random();
    if (rand > 0.5) {resolve('TASK 1: Data fetched successfully')}
    else {reject('TASK 1: Failed to fetch data')}
});
const task2promise = new Promise((resolve, reject) => {
    setTimeout(() => {resolve('TASK 2: Task completed')} , 3000)
});
const task3promises = new Promise((resolve, reject) => {
    resolve();
});

task1promise.then(console.log).catch(console.log);
task2promise.then(console.log);
task3promises.then(console.log('TASK 3: Step 1 completed')).then(console.log('TASK 3: Step 2 completed')).then(console.log('TASK 3: All steps completed'));