'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Faqs', [{
        question: 'Come funziona il periodo di prova di Soundwave Premium?',
        answer: "Se non hai mai avuto Premium prima d'ora, potresti avere diritto a un periodo di prova gratuito (o a una tariffa ridotta). Per i periodi di prova, devi comunque inserire un metodo di pagamento valido per iscriverti. Lo utilizzeremo per confermare il tuo Paese o la tua regione ed effettuare i pagamenti qualora decidessi di tenere Premium al termine dell'offerta. Ti invieremo un promemoria 7 giorni prima del termine del periodo di prova. Si applicano termini e condizioni e restrizioni in base al Paese.",
      },
      {
        question: 'Come posso annullare il mio piano Premium?',
        answer: "Puoi facilmente annullare il piano Premium quando vuoi sulla pagina del tuo account. Premium sarà attivo fino alla prossima data di fatturazione, quindi il tuo account passerà al piano gratuito. Quando il tuo account passerà alla versione gratuita, manterrai tutte le tue playlist e la musica salvata e potrai ascoltarle con gli annunci.",
        },
        {
          question: "Quanto costa Soundwave Premium in Italia?",
          answer: "I prezzi di Soundwave Premium in questo Paese (Italia) sono diversi a seconda del piano Premium scelto: il piano Soundwave Premium Individual costa 10,99 € al mese, il piano Premium Duo costa 14,99 € al mese, il piano Premium Family costa 17,99 € al mese e il piano Premium Student costa 5,99 € al mese. Se non hai mai avuto un piano Premium prima d'ora, potresti avere diritto a un periodo di prova gratuito (o a una tariffa ridotta). Si applicano termini e condizioni e restrizioni in base al Paese.",
        },
        {
          question: "Come funziona il piano Premium Family?",
          answer: "Premium Family è un piano per un massimo di 6 persone che vivono insieme. È più conveniente rispetto a un account Premium Individual a prezzo pieno per ciascuno. Ti chiederemo l'indirizzo per avere la conferma che risiediate nello stesso luogo. Potrai invitare le persone al piano subito dopo l'acquisto. Ogni membro dispone di un account Premium separato e può ascoltare musica contemporaneamente con il proprio account. Tutta la musica e tutte le playlist salvate sono di proprietà dei singoli membri. Gli altri intestatari dell'account non possono vedere ciò che stai ascoltando."
        },
        {
          question: "Come funziona il piano Premium Student?",
          answer: "Il piano è pensato per gli studenti iscritti a un'università accreditata e con un'età superiore a 18 anni. Puoi ottenere Premium Student per un massimo di 4 anni."
      }], {});
  },

  async down (queryInterface, Sequelize) {
  }
};
