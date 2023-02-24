function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const input = document.getElementById('location');
    const button = document.getElementById('submit');
    const forecast = document.getElementById('forecast');
    const current  = document.getElementById('current');
    const upcomming = document.getElementById('upcoming');
    button.addEventListener('click', async ()=> {
        try {
            const response = await fetch(url);
            const data = await response.json();
            const userName = input.value;
            let findCode = '';
            current.replaceChildren();
            upcomming.replaceChildren();
            for (const location of data) {
                if (location.name == userName) {
                    findCode = location.code;
                }
            }
            if (!findCode) {
                throw new Error('Error');
            }
            else {
                const codeUrl = `http://localhost:3030/jsonstore/forecaster/today/${findCode}`;
                const codeResponse = await fetch(codeUrl);
                const codeData = await codeResponse.json();
                //console.log(codeData)
                const futureUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/${findCode}`;
                const futureResponse = await fetch(futureUrl);
                const futureData = await futureResponse.json();
                //console.log(futureData)
                forecast.style.display ='';
                const label = document.createElement('div');
                label.classList.add('label');
                label.innerText = 'Current conditions';
                const forecasts = document.createElement('div');
                forecasts.classList.add('forecasts');
                const symbol = document.createElement('span');
                symbol.classList.add('symbol');
                if(codeData.forecast.condition == 'Sunny'){
                    symbol.innerText = '☀';
                }
                else if (codeData.forecast.condition == 'Partly sunny'){
                    symbol.innerText ='⛅';
                }
                else if (codeData.forecast.condition == 'Overcast'){
                    symbol.innerText = '☁';
                }
                else if (codeData.forecast.condition == 'Rain'){
                    symbol.innerText = '☂'
                }
                else if (codeData.forecast.condition == 'Degrees'){
                    symbol.innerText = '°';
                }
                const condition = document.createElement('span');
                condition.classList.add('condition');
                const firstSpan = document.createElement('span');
                firstSpan.classList.add('forecast-data');
                firstSpan.innerText = codeData.name;
                const secondSpan = document.createElement('span');
                secondSpan.classList.add('forecast-data');
                secondSpan.innerText = codeData.forecast.low + '°/' + codeData.forecast.high + '°';
                const thirdSpan = document.createElement('span');
                thirdSpan.classList.add('forecast-data');
                thirdSpan.innerText = codeData.forecast.condition;

                condition.appendChild(firstSpan);
                condition.appendChild(secondSpan);
                condition.appendChild(thirdSpan);
                forecasts.appendChild(symbol);
                forecasts.appendChild(condition);
                current.appendChild(label);
                current.appendChild(forecasts);

                // upcomming -----------------------------------------------------
                const label2 = document.createElement('div');
                label2.classList.add('label');
                label2.innerText = 'Three-day forecast';
                const upDiv = document.createElement('div');
                upDiv.classList.add('forecast-info');
                let index = 0;
                for(const day of futureData.forecast){
                const upSpan = document.createElement('span');
                upSpan.classList.add('upcoming');
                const fourthSpan = document.createElement('span');
                fourthSpan.classList.add('symbol');
               
                    if(day.condition == 'Sunny'){
                        fourthSpan.innerText = '☀';
                    }
                    else if (day.condition == 'Partly sunny'){
                        fourthSpan.innerText ='⛅';
                    }
                    else if (day.condition == 'Overcast'){
                        fourthSpan.innerText = '☁';
                    }
                    else if (day.condition == 'Rain'){
                        fourthSpan.innerText = '☂'
                    }
                    else if (day.condition == 'Degrees'){
                        fourthSpan.innerText = '°';
                    }
                    const fifthSpan = document.createElement('span');
                    fifthSpan.classList.add('forecast-data');
                    fifthSpan.innerText = futureData.forecast[index].low + '°/' + futureData.forecast[index].high + '°';
                    index++;
                    const sixthSpan = document.createElement('span');
                    sixthSpan.classList.add('forecast-data');
                    sixthSpan.innerText = day.condition;
                    upSpan.appendChild(fourthSpan);
                    upSpan.appendChild(fifthSpan);
                    upSpan.appendChild(sixthSpan);
                    upDiv.appendChild(upSpan);
                    upcomming.appendChild(label2);
                    upcomming.appendChild(upDiv);
                }
                
                
            }
        }
        catch (error) {
            console.log('Error');
        }

    })
}

attachEvents();