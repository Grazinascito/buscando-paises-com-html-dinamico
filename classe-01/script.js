const pegandoBody = document.querySelector('body');
const divPais = document.querySelector('.paises');
const inputBusca = document.querySelector('.busca');



fetch('https://restcountries.eu/rest/v2/all').then(responseDoFetch => {
    const jsonDaResponse = responseDoFetch.json();
    

    
    jsonDaResponse.then(body => {


        inputBusca.addEventListener('keydown', (event) => {
            
        if(event.key !== 'Enter' || !inputBusca.value) return;

        const nomePais = document.createElement('h2');
        const regiao = document.createElement('span');
        const capital = document.createElement('span');
        const populacao = document.createElement('p');
        const bandeira = document.createElement('img');

        const divContainer = document.createElement('div');
        divContainer.classList.add('pais');


        body.forEach(info => {
                    
                    if(inputBusca.value === info.name){
                        if(info.name){
                            nomePais.textContent = info.name;
                            regiao.textContent = info.region;
                            capital.textContent = info.capital;
                            populacao.textContent = info.population;
                            bandeira.src = info.flag;
                            divContainer.append(nomePais, regiao, capital, populacao, bandeira);
                            divPais.append(divContainer);
                        }
                    }
    
                        
          
                        

              
            });
        });

       
    });
       
});