let codiciSconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];



function submitFun(event) {
    console.log("entrato in funzione");
    let prezzoTotale = 0;
    event.preventDefault();
    costo = calcoloPrezzo(prezzoTotale);
    document.getElementById("prezzo").innerHTML = "Il prezzo finale è di " + applicaSconto(costo) + "€"
}


function applicaSconto(prezzoBase) {
    let sconto = document.getElementById("DisCode").value;
    for (let scontoUtente of codiciSconto){
        if (scontoUtente == sconto) {
            document.getElementById("DisCode").classList.remove("text-danger")
            let indiceSconto = codiciSconto.indexOf(scontoUtente);
            codiciSconto.splice(indiceSconto, 1);
            return prezzoScontato = prezzoBase * 0.75;
        }
    }
    
    if (sconto == ""){
        return prezzoBase;
    }
        document.getElementById("DisCode").classList.add("text-danger")
        alert("CODICE SCONTO NON VALIDO O INESISTENTE");
        return prezzoBase;
}


function calcoloPrezzo(prezzo) {
    let tipoLavoro = document.getElementById("Select").value;
    let tariffa = 0;
    let oreLavoro = document.getElementById("Hours").value;
    switch (true) {
        case tipoLavoro == 1:
            tariffa = 20.5;
            return prezzo = (tariffa * oreLavoro).toFixed(2);

        case tipoLavoro == 2:
            tariffa = 15.3;
            return prezzo = (tariffa * oreLavoro).toFixed(2);

        case tipoLavoro == 3:
            tariffa = 33.6;
            return prezzo = (tariffa * oreLavoro).toFixed(2);

    }

}