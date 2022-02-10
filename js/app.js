// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.



// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi ha il numero più alto.  (e se pari?)
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”



                //  ESERCIZIO 1


             

            

        //     let registerUsers= ['gianni.pinotto@gmail.com','evaquo.felice@libero.com','mario.rossi@alice.it','ciccio.panza@yahoo.it','manuelfreund@gmail.com'];

        //     const userMail = prompt('inserisci qui la tua mail');

        //     console.log(registerUsers.indexOf(userMail));

        //    if (registerUsers.indexOf(userMail) === -1) {
        //         console.log(registerUsers.indexOf(userMail));

        //     alert('email inserita non registata, procedere alla registrazione ?');


        //    }

        //    else { 
        //        alert('Bentornato! Ora puoi continuare la navigazione!')
        //    }




             //    ESERCIZIO 2




    // generare un numero per l'utente

    // esito
    //   delay 
    // generare un numero per il pc 
    //  esito
    // delay
    // comparare i risultati 

        let playerName = prompt('Inserisci il tuo nome...');

        console.log(playerName);

        let nome = document.getElementById('user-name')

        console.log(nome)
       
        nome.innerHTML = playerName

        let diceRoll = [1,2,3,4,58,6];

        console.log(diceRoll.length);
       
        let diceBtn = document.getElementById('roll-dice')
        
        

        
        

        diceBtn.addEventListener("click",function(){

        let playerRoll = parseInt(Math.random()*diceRoll.length)

        let pcRoll = parseInt(Math.random()*diceRoll.length)



        if (playerRoll > pcRoll) {
            alert('You Win!!!')
        }

        else if (playerRoll < pcRoll){
            alert('YOU LOSE!!!!')
        }

        else {
            alert('ITS A DRAW')
        }

    }
    )
