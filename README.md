📅 Calendar App con Login Firebase
Questa è un'applicazione calendario realizzata in Angular che permette agli utenti di:

Effettuare il login con email e password tramite Firebase Authentication

Visualizzare, aggiungere, modificare ed eliminare eventi personali

Salvare gli eventi in LocalStorage, separatamente per ogni utente

Visualizzare eventi nel calendario solo dopo il login

🚀 Come iniziare
1. Clonare il progetto

2. Installare le dipendenze
npm install

3. Avviare il server di sviluppo
ng serve
Apri il browser e vai su http://localhost:4200/ per vedere l'app in esecuzione.

🔐 Configurazione Firebase
vai su firebase console e crea un progetto
successivamente vai sulla sezione authentication e crealo
vai su metodi di accesso e aggiungi un nuovo provider(in questo caso email)
finito tutto, spostati sulle impostazioni del progetto, scorri fino a trovare la sezione "le tue app"
clicca web, dai un nome e registra l'app
da qui appariranno le tue credenziali che andranno a sostituire quelle specificate qua sotto

Per abilitare il login, configura Firebase nel file src/environments/environment.ts con le tue credenziali:

nel file environment modifica con le credenziali el tuo progetto firebase
`export const environment = {
  firebase: {
    apiKey: 'LA_TUA_API_KEY',
    authDomain: 'TUO_DOMINIO.firebaseapp.com',
    projectId: 'TUO_PROJECT_ID',
    storageBucket: 'TUO_BUCKET',
    messagingSenderId: 'TUO_SENDER_ID',
    appId: 'TUO_APP_ID',
  }
};`
🧩 Funzionalità principali
🔑 Login utente con email e password tramite Firebase

📅 Calendario mensile dinamico

🎨 Eventi colorati con orari personalizzati

💾 Eventi salvati in LocalStorage, distinti per ogni utente

✍️ Modifica e cancellazione eventi singoli o multipli

⬅️➡️ Navigazione tra i mesi
