function obliczenia(){
    const poczatkowy_przebieg = parseFloat(document.getElementById("poczatkowy_przebieg").value);
    const koncowy_przebieg = parseFloat(document.getElementById("koncowy_przebieg").value);
    const poczatkowy_stan_zbiornika = parseFloat(document.getElementById("poczatkowy_stan_zbiornika").value);
    const km = koncowy_przebieg - poczatkowy_przebieg; // output
    const spalanie_na_100_km = (km * 8.6) / 100;
    const koncowy_stan_zbiornika = poczatkowy_stan_zbiornika - spalanie_na_100_km; // output
    const zaokraglony_stan_zbiornika = Math.round(koncowy_stan_zbiornika); 

    const wynikDiv = document.getElementById("wynik");
      wynikDiv.innerHTML = `
    Przejechane kilometry: ${km.toFixed(1)} km <br>
    Spalone paliwo (przy 8.6l/100km): ${spalanie_na_100_km.toFixed(2)} litrów<br>
    Końcowy stan zbiornika: ${zaokraglony_stan_zbiornika.toFixed(2)} litrów
    `;

}