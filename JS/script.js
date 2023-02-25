/*@qui Ciao ragazzi,
Esercizio di oggi:
FizzBuzz nome repo: js-fizzbuzz
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
 ma che per i multipli di 3 stampi “Fizz” al posto del numero
  e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 
3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
 Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma 
così come lo faremmo "a mano"
BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append())
un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1,
a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
 Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot 
fornito in consegna.
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:
*/


/*pseudo-codice:
- associo una funzione all'id _numbercontainer






*/
//creo variabile  assegno  prendihtml. da html cerca l'id  (id)   
let ContainerEl = document.getElementById("_numbercontainer")
console.log(ContainerEl)

// sintassi (ciclo = for) (creo un indice con una variabile (let i) e assegno il valore (1); if condizione = true  esegui ciclo)
// (i <= 100; = condizione), se false esce dal ciclo; aumenta la variabile che ho creato che funge da contatore di 1 tramite
// il (i++), es se voglio aumentare di 2 (i +=2) salva su se stesso, se stesso + 2 e aumenta.
for (let i = 1; i <= 100; i++) {
    // console.log(i)

    // creo variabile e la assegno a: vado su html creo un nuovo elemento di tipo ("tag")
    let newEl = document.createElement("span");
    // prendo la variabile creata all'inizio e uso il metodo append (variabile newEl appena creata)
    // facendo così dico all'html che la nuova classe è figlia della prima.
    ContainerEl.append(newEl);
    // variabile (contenitore)  .vado ad inserire il valore nell'html (innerHTML) = valore da inserire (i) se voglio
    // che cambia ad ogni ciclo.
    newEl.innerHTML = i;
    

    newEl.style.width = "200px";
    newEl.style.height = "200px";
    newEl.style.display = "flex";
    newEl.style.justifyContent = "center";
    newEl.style.alignItems = "center";
    // console.log(newEl.innerHTML);

// se i è divisibile per 3 =paragonato a 0 (deve dare resto 0)
    

    if (i % 3 == 0 && i % 5 == 0){
    newEl.innerHTML ="FizzBuzz"
    newEl.style.background = "red";
    console.log(newEl.innerHTML)
    


    } else if (i % 3 == 0) {
        newEl.innerHTML = "Fizz";
        console.log(newEl.innerHTML)
        newEl.style.background = "lightgreen";


    } else if (i % 5 == 0) {
        newEl.innerHTML ="Buzz"
        console.log(newEl.innerHTML)
        newEl.style.background = "yellow";


   

    }else{
    
        console.log(newEl.innerHTML)
        newEl.style.background = "lightblue";


    }



}
