var mail = prompt("inserisci la tua mail per accedere")

mailAccepted = ['ale.pug2@gmail.com', 'florian@gmail.com', 'flavio@gmail.com', 'francesco@gmail.com']

var mailExist = false;

for (var i = 0 ; i < mailAccepted.length ; i++) {
    
    var singleMail = mailAccepted[i];

    if (mail === singleMail) {

        mailExist = true;

        document.getElementById('verificationMail').innerHTML = (mail + " accesso effettuato correttamente.");
        console.log(mail + " accesso effettuato correttamente.");
    }
}
if (!mailExist) {
    console.log("La mail che hai inserito non è registrata. Inserire una delle seguenti " + mailAccepted.join(", "));
    document.getElementById('verificationMail').innerHTML = ("La mail che hai inserito non è registrata. Inserire una delle seguenti " + mailAccepted.join(", "));
}