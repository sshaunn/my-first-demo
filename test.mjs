const fetch = require('node-fetch');

function fetchApi() {
    fetch('http://localhost:3001/api/tasks')
        .then(res => {
            return res.json();
        });
}
console.log(fetchApi());