# Progetto CER

## Introduzione
Durante il corso di Calcolatori Elettronici e Reti di Calcolatori è stato illustrato un argomento tanto attuale quanto interessante, ovvero le tipologie di virtualizzazione. Per la realizzazione della tesina è stato scelto come argomento Docker per trattare ed illustrare alcuni degli strumenti odierni che ci permettono di sfruttare la virtualizzazione a livello di SO. Il progetto mira a dimostrare le potenzialità di Docker nel contesto del cloud computing attraverso la creazione e l'implementazione di una piccola applicazione web di test adeguatamente organizzata in container. 

## Tecnologia alla base: Docker Engine

## Idea e organizzazione

## Sviluppo e tecnologie adottate

## Modalità d'uso
Per utilizzare il progetto e provare il suo corretto funzionamento è necessario eseguire alcuni passaggi fondamentali. Come anticipato prima, l'applicazione gira in container Docker quindi sarà necessario costruire tutte le immagini necessarie per i container e avviarli. Fortunatamente tutto ciò viene automatizzato da Docker e quindi basterà lanciare un solo comando per la costruzione dell'infrastruttura:

```
docker compose --env-file ./dev.env up
```
> Nel comando è presente anche l'integrazione di un file .env necessario per le credenziali del db e altro. Il file è stato aggiunto per dimostrare la flessibilità di Docker nel passare tra i vari ambienti di sviluppo.

Una volta avviati tutti i container, per usufruire dell'app sarà necessario effettuare le migrations del db e successivamente i seed. Entrare nel container dell'app node, spostarsi nella cartella del codice sorgente e lanciare il comando:

```
npx sequelize-cli db:migrate
```
e successivamente:

```
npx sequelize-cli db:seed:all
```

Una volta effettuato il seed, l'app sarà pronta per l'uso e raggiungibile su  ```localhost:80```
## Riconoscimenti
Il progetto è stato ideato e realizzato da Michele Bevilacqua.


