    const ul = document.querySelector(`ul`);
    const term = document.querySelector(`#input`);
    const submit = document.querySelector(`#term`);
    const error = document.querySelector(`.error`);
    const clearAll = document.querySelector(`.clearall`);
    const clrEffect = document.querySelector(`.coloreffect`);
    const mttr = document.querySelector(`body`)
    const cover = document.querySelector(`.background`)
    var color = false;
 
    submit.addEventListener(`submit`, (e)=>{
        console.log(term);
        fetch(`https://dad-jokes.p.rapidapi.com/joke/search?term=${term.value}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "6485a298ccmsh50c49557d180251p144e64jsn5cd0c942dacd",
                "x-rapidapi-host": "dad-jokes.p.rapidapi.com"
            }
        })
        .then((res) => res.json())
        .then((users) => {
            console.log(users.punchline);
            if(users.body == ``)
            {
                error.innerHTML = `joke related ${term.value} not found`;
                error.style.display = `block`;
                setTimeout(() => {
                error.style.display = `none`;
                },3000);
                term.value = ``; 
            }
            else
            { 
                const data = users.body;
                console.log(data);
                data.forEach(user => {
                const joke = document.createElement(`ul`);
                joke.innerHTML = `
                <ul class = "jokebox">
                <li>${user.setup}<br><b>${user.punchline}</b></li>
                
                </ul>`;
                ul.appendChild(joke); 
                term.value = ``;
                clearAll.style.display = `block`; 
               });
            } 
        });
        e.preventDefault();
    });
    clearAll.addEventListener("click", () => {
        
        
            console.log(`hello`);
            ul.innerHTML = ``;
            clearAll.style.display = `none`;
        
    });
  