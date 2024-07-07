export const cards = {
  Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
  MasterCard: /^5[1-5][0-9]{14}$/,
  'American Express': /^3[47][0-9]{13}$/,
  Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
}
type CardHolder = KeyOf<typeof cards>;
export const generateHolder = () => {
  let cardNumber: string = '';
  let cardHolder: CardHolder = 'Visa';
  const loop = true;
  const next = (a: number, b: number) =>
    Math.floor(Math.random() * (b - a + 1) + a);

  while (loop) {
    cardNumber = Array.from({ length: 16 }, () => next(0, 9).toString()).join('');
    cardHolder = (Object.keys(cards).find((card) => cards[card as CardHolder].test(cardNumber)) ?? 'Visa') as CardHolder;
    if (cards.MasterCard.test(cardNumber) || cards.Visa.test(cardNumber) || cards['American Express'].test(cardNumber) || cards.Discover.test(cardNumber)) break;
  }
  
  return {
    number: cardNumber.match(/.{1,4}/g)?.join(' ') ?? '',
    cardNumber,
    month: next(1, 12).toString(),
    year: (new Date().getFullYear() + next(0, 9)).toString().slice(-2),
    cvc: Array.from({ length: 3 }, () => next(0, 9).toString()).join(''),
    holder: cardHolder,
  }
};
