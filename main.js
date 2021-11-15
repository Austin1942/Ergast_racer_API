const getData = async() =>{
    let season = document.querySelector('#season').value;
    let round = document.querySelector('#round').value;
    console.log(season)
    console.log(round)
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    console.log(response.data)
    return response.data
};

const loadData = async() =>{
    let racerData = await getData();
    let drivers = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings

    
    let firstName = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName
    let lastName = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName
    let dateOfBirth = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.dateOfBirth
    let position = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position
    let wins = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].wins
    let nationality = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality
    let constructor = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].constructorId

    console.log(firstName)
    console.log(lastName)
    console.log(dateOfBirth)
    console.log(position)
    console.log(wins)
    console.log(nationality)
    console.log(constructor)

    let firstName1 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.givenName
    let lastName1 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.familyName
    let dateOfBirth1 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.dateOfBirth
    let position1 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].position
    let wins1 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].wins
    let nationality1 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.nationality
    let constructor1 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Constructors[0].constructorId

    console.log(firstName1)
    console.log(lastName1)
    console.log(dateOfBirth1)
    console.log(position1)
    console.log(wins1)
    console.log(nationality1)
    console.log(constructor1)

    let firstName2 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.givenName
    let lastName2 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.familyName
    let dateOfBirth2 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.dateOfBirth
    let position2 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].position
    let wins2 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].wins
    let nationality2 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.nationality
    let constructor2 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Constructors[0].constructorId

    console.log(firstName2)
    console.log(lastName2)
    console.log(dateOfBirth2)
    console.log(position2)
    console.log(wins2)
    console.log(nationality2)
    console.log(constructor2)

    let firstName3 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.givenName
    let lastName3 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.familyName
    let dateOfBirth3 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.dateOfBirth
    let position3 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].position
    let wins3 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].wins
    let nationality3 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.nationality
    let constructor3 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Constructors[0].constructorId

    console.log(firstName3)
    console.log(lastName3)
    console.log(dateOfBirth3)
    console.log(position3)
    console.log(wins3)
    console.log(nationality3)
    console.log(constructor3)

    let firstName4 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.givenName
    let lastName4 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.familyName
    let dateOfBirth4 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.dateOfBirth
    let position4 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].position
    let wins4 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].wins
    let nationality4 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.nationality
    let constructor4 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Constructors[0].constructorId

    console.log(firstName4)
    console.log(lastName4)
    console.log(dateOfBirth4)
    console.log(position4)
    console.log(wins4)
    console.log(nationality4)
    console.log(constructor4)

    let firstName5 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.givenName
    let lastName5 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.familyName
    let dateOfBirth5 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.dateOfBirth
    let position5 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].position
    let wins5 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].wins
    let nationality5 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.nationality
    let constructor5 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Constructors[0].constructorId

    console.log(firstName5)
    console.log(lastName5)
    console.log(dateOfBirth5)
    console.log(position5)
    console.log(wins5)
    console.log(nationality5)
    console.log(constructor5)

    let firstName6 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.givenName
    let lastName6 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.familyName
    let dateOfBirth6 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.dateOfBirth
    let position6 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].position
    let wins6 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].wins
    let nationality6 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.nationality
    let constructor6 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Constructors[0].constructorId

    console.log(firstName6)
    console.log(lastName6)
    console.log(dateOfBirth6)
    console.log(position6)
    console.log(wins6)
    console.log(nationality6)
    console.log(constructor6)

    let firstName7 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].Driver.givenName
    let lastName7 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].Driver.familyName
    let dateOfBirth7 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].Driver.dateOfBirth
    let position7 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].position
    let wins7 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].wins
    let nationality7 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].Driver.nationality
    let constructor7 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].Constructors[0].constructorId

    console.log(firstName7)
    console.log(lastName7)
    console.log(dateOfBirth7)
    console.log(position7)
    console.log(wins7)
    console.log(nationality7)
    console.log(constructor7)

    let firstName8 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[8].Driver.givenName
    let lastName8 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[8].Driver.familyName
    let dateOfBirth8 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[8].Driver.dateOfBirth
    let position8 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[8].position
    let wins8 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[8].wins
    let nationality8 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[8].Driver.nationality
    let constructor8 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[8].Constructors[0].constructorId

    console.log(firstName8)
    console.log(lastName8)
    console.log(dateOfBirth8)
    console.log(position8)
    console.log(wins8)
    console.log(nationality8)
    console.log(constructor8)

    let firstName9 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[9].Driver.givenName
    let lastName9 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[9].Driver.familyName
    let dateOfBirth9 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[9].Driver.dateOfBirth
    let position9 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[9].position
    let wins9 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[9].wins
    let nationality9 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[9].Driver.nationality
    let constructor9 = racerData.MRData.StandingsTable.StandingsLists[0].DriverStandings[9].Constructors[0].constructorId

    console.log(firstName9)
    console.log(lastName9)
    console.log(dateOfBirth9)
    console.log(position9)
    console.log(wins9)
    console.log(nationality9)
    console.log(constructor9)
    
    //for (let racerInfo = 0; racerInfo < drivers.length; racerInfo++)
    //drivers[racerInfo]
    racerIf = document.getElementById(`racer-info`);
    tr = document.createElement('tr');
            racerIf.appendChild(tr);
            
            th = document.createElement("th");
            th.scope="row";
            th.innerHTML = firstName;
            tr.appendChild(th);

            td= document.createElement('td');
            td.innerText = lastName;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = dateOfBirth;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = position;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = wins;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = nationality;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText=constructor;
            tr.appendChild(td);

    tr = document.createElement('tr');
            racerIf.appendChild(tr);
            
            th = document.createElement("th");
            th.scope="row";
            th.innerHTML = firstName1;
            tr.appendChild(th);

            td= document.createElement('td');
            td.innerText = lastName1;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = dateOfBirth1;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = position1;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = wins1;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = nationality1;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText=constructor1;
            tr.appendChild(td);
    
    tr = document.createElement('tr');
            racerIf.appendChild(tr);
            
            th = document.createElement("th");
            th.scope="row";
            th.innerHTML = firstName2;
            tr.appendChild(th);

            td= document.createElement('td');
            td.innerText = lastName2;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = dateOfBirth2;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = position2;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = wins2;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = nationality2;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText=constructor2;
            tr.appendChild(td);

    tr = document.createElement('tr');
            racerIf.appendChild(tr);
            
            th = document.createElement("th");
            th.scope="row";
            th.innerHTML = firstName3;
            tr.appendChild(th);

            td= document.createElement('td');
            td.innerText = lastName3;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = dateOfBirth3;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = position3;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = wins3;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = nationality3;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText=constructor3;
            tr.appendChild(td);
            
    tr = document.createElement('tr');
            racerIf.appendChild(tr);
            
            th = document.createElement("th");
            th.scope="row";
            th.innerHTML = firstName4;
            tr.appendChild(th);

            td= document.createElement('td');
            td.innerText = lastName4;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = dateOfBirth4;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = position4;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = wins4;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = nationality4;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText=constructor4;
            tr.appendChild(td);

    tr = document.createElement('tr');
            racerIf.appendChild(tr);
            
            th = document.createElement("th");
            th.scope="row";
            th.innerHTML = firstName5;
            tr.appendChild(th);

            td= document.createElement('td');
            td.innerText = lastName5;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = dateOfBirth5;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = position5;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = wins5;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = nationality5;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText=constructor5;
            tr.appendChild(td);

    tr = document.createElement('tr');
            racerIf.appendChild(tr);
            
            th = document.createElement("th");
            th.scope="row";
            th.innerHTML = firstName6;
            tr.appendChild(th);

            td= document.createElement('td');
            td.innerText = lastName6;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = dateOfBirth6;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = position6;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = wins6;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = nationality6;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText=constructor6;
            tr.appendChild(td);

    tr = document.createElement('tr');
            racerIf.appendChild(tr);
            
            th = document.createElement("th");
            th.scope="row";
            th.innerHTML = firstName7;
            tr.appendChild(th);

            td= document.createElement('td');
            td.innerText = lastName7;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = dateOfBirth7;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = position7;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = wins7;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = nationality7;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText=constructor7;
            tr.appendChild(td);

    tr = document.createElement('tr');
            racerIf.appendChild(tr);
            
            th = document.createElement("th");
            th.scope="row";
            th.innerHTML = firstName8;
            tr.appendChild(th);

            td= document.createElement('td');
            td.innerText = lastName8;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = dateOfBirth8;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = position8;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = wins8;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = nationality8;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText=constructor8;
            tr.appendChild(td);

    tr = document.createElement('tr');
            racerIf.appendChild(tr);
            
            th = document.createElement("th");
            th.scope="row";
            th.innerHTML = firstName9;
            tr.appendChild(th);

            td= document.createElement('td');
            td.innerText = lastName9;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = dateOfBirth9;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = position9;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = wins9;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText = nationality9;
            tr.appendChild(td);

            td= document.createElement('td');
            td.innerText=constructor9;
            tr.appendChild(td);
};


