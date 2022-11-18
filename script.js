let codiciSconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
let sito = [
    {
        titolo: "Cabin Website",
        foto: "cabin.png",
    },
    {
        titolo: "Cake Website",
        foto: "cake.png",
    },
    {
        titolo: "Circus Website",
        foto: "circus.png",
    },
    {
        titolo: "Game Website",
        foto: "game.png",
    },
    {
        titolo: "Safe Website",
        foto: "safe.png",
    },
    {
        titolo: "Submarine Website",
        foto: "submarine.png",
    }
]


function submitFun(event) {
    let prezzoTotale = 0;
    event.preventDefault();
    costo = calcoloPrezzo(prezzoTotale);
    document.getElementById("prezzo").innerHTML = "Il prezzo finale è di " + applicaSconto(costo) + "€"
}


function applicaSconto(prezzoBase) {
    let sconto = document.getElementById("DisCode").value;
    for (let scontoUtente of codiciSconto) {
        if (scontoUtente == sconto) {
            document.getElementById("DisCode").classList.remove("text-danger")
            let indiceSconto = codiciSconto.indexOf(scontoUtente);
            codiciSconto.splice(indiceSconto, 1);
            return prezzoScontato = prezzoBase * 0.75;
        }
    }

    if (sconto == "") {
        return prezzoBase;
    }
    document.getElementById("DisCode").classList.add("text-danger")
    alert("CODICE SCONTO NON VALIDO O INESISTENTE");
    return prezzoBase;
}


function calcoloPrezzo(prezzo) {
    let tipoLavoro = document.getElementById("Select").value;
    tipoLavoro = parseInt(tipoLavoro);
    let tariffa = 0;
    let oreLavoro = document.getElementById("Hours").value;
    switch (tipoLavoro) {
        case 1:
            tariffa = 20.5;
            return prezzo = (tariffa * oreLavoro).toFixed(2);

        case 2:
            tariffa = 15.3;
            return prezzo = (tariffa * oreLavoro).toFixed(2);

        case 3:
            tariffa = 33.6;
            return prezzo = (tariffa * oreLavoro).toFixed(2);

    }


}
for (let pagina of sito) {
    document.getElementById("cardSito").innerHTML +=
        `<div class="col-12 col-md-6 col-lg-4">
        <div class="card border-0 shadow bg-body">
            <img src="img/portfolio/${pagina.foto}" class="card-img-top" alt="immagine non trovata">
            <div class="card-body">
                <div>
                    <h5 class="card-title p-3 mb-2">${pagina.titolo}</h5>
                    <button type="button" class="btn btn-info mx-2">Preview</button>
                    <button type="button" class="btn btn-outline-info mx-2">Visit site</button>
                </div>
            </div>
        </div>
    </div>
        `
}