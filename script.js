let codiciSconto = ["YHDNU32, JANJC63, PWKCN25, SJDPO96, POCIE24"];






function submit(event) {
    event.preventDefault();
    costo = calcoloPrezzo();
    sconto = document.getElementById("DisCode").value;
    let totale = applicaSconto(costo, sconto);
    document.getElementById("prezzo").innerHTML = "Il prezzo finale è di " + totale.tofixed(1) + "€"
}


function applicaSconto(prezzoBase, codiceInserito) {
    let sconto = document.getElementById("DisCode").value;
    for (sconto of codiciSconto) {
        if (sconto == codiceInserito) {
            document.getElementById("DisCode").classList.remove("text-danger")
            let indiceSconto = codiciSconto.indexOf(sconto);
            codiciSconto.splice(indiceSconto, 1);
            return prezzoScontato = prezzoBase * 0.75;
        } else {
            document.getElementById("DisCode").classList.add("text-danger")
            alert("CODICE SCONTO NON VALIDO O INESISTENTE");
            return prezzoBase;
        }
    }
}


function calcoloPrezzo() {
    let tipoLavoro = document.getElementById("Select").value;
    let tariffa = 0;

    switch (tipoLavoro) {
        case 1:
            tariffa = 20.5;
            break;

        case 2:
            tariffa = 15.3;
            break;

        case 3:
            tariffa = 33.6;
            break;

    }
    let oreLavoro = document.getElementById("Hours").value;
    prezzo = tipoLavoro * oreLavoro;
    return prezzo;

}