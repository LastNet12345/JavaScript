//HTTP request methods
// GET   - Hämta data 
// POST  - Skriva data 
// PUT   - Uppdaterar hela objektet
// PATCH - Uppdaterar delar eller hela objektet
// DELETE - Tar bort ett objekt

// console.log(window);

let btn1 = document.querySelector('#btn1');
let textoutput = document.querySelector('#text-output');

// btn1.addEventListener('click', function(){
//     fetch('text.txt')
//             .then(function(res){
//                     console.log(res);
//                     return res.text();
//             })
//             .then(function(data){
//                 console.log(data);
//                 textoutput.innerHTML = `<p>${data}</p>`
//             })
// })


btn1.addEventListener('click', function () {
    fetch('text.txt')
        .then(res => res.text())
        .then(data => {
            console.log(data);
            textoutput.innerHTML = `<p>${data}</p>`;
        })
        .catch(err => console.log('Error: ' + err));

    // console.log(1);
})


let btn2 = document.querySelector('#btn2');
let jsonOutput = document.querySelector('#json-output');

const getJson = () => {
    fetch('json.json')
        .then(res => {
            // console.log(res);
            // if (res.ok)
                return res.json()
            // throw new Error('Error when fetching');
        })
        .then(data => {
            console.log(data);

            jsonOutput.innerHTML = "";

            data.forEach(post => {
                jsonOutput.innerHTML +=
                    `
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">${post.title}</h3>
                        <p class="card-text">${post.body}</p>
                    </div>
                </div>
                
                `
            });

        })
        .catch(err => console.log('Error: ', err));

    console.log(23);
}

btn2.addEventListener('click', getJson);

let btn3 = document.querySelector('#btn3');
let gitOutput = document.querySelector('#git-output');

const getGit = () => {

    fetch('https://api.github.com/users/Lexicon-Net/repos', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(res => {
            // if (res.ok)
                return res.json();
            // throw new Error('Failed to get repos');
        })
        .then(data => {
            console.log(data);

            gitOutput.innerHTML = '';

            data.forEach(repo => {
                gitOutput.innerHTML +=
                    `
                    <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">${repo.name}</h5>
                    <p class="card-text">This repository have been forked ${repo.forks_count} times</p>
                    <a href="${repo.html_url}" class="card-link">${repo.name}</a>
                    <a href="${repo.owner.html_url}" class="card-link">Organisation</a>
                    </div>
                    </div>

                      `

            })
        })
        .catch(err => console.log('ERROR: ' + err));
        }




btn3.addEventListener('click', getGit)




const getData = async (url = 'json.json') => {
    
    const res = await fetch(url);
    
    if(!res.ok)
    throw new Error('Error');
    
    const data = await res.json();
    
    
    // work with data here
    
    //console.log(data);
    return data;
    
}


// let result = await getData('json.json');
// console.log(result);
getData('json.json')
.then(data => console.log(data))
.catch(err => console.log(err));

console.log('Heeeeeyyy!!!!');


let btn4 = document.querySelector('#btn4');
let gitAsyncOutput = document.querySelector('#gitasync-output');

const getGitAsync = async () => {

    try {
        const res = await fetch('https://api.github.com/users/Lexicon-Net/repos', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });
        const data = await res.json();
    
        gitAsyncOutput.innerHTML = '';
        data.forEach(repo => {
                gitAsyncOutput.innerHTML +=
                `
                <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${repo.name}</h5>
                  <p class="card-text">This repository have been forked ${repo.forks_count} times</p>
                  <a href="${repo.html_url}" class="card-link">${repo.name}</a>
                  <a href="${repo.owner.html_url}" class="card-link">Organisation</a>
                </div>
                </div>
    
                `
            })
        
    } catch (error) {
        console.log('Error: ', error);
    }

}


btn4.addEventListener('click', getGitAsync)