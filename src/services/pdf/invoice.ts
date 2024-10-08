import { createPdf, tableHeader, header, styles } from '@services/pdf';
import { cartService } from '@services/cart'
import type { TDocumentDefinitions } from 'pdfmake/interfaces';

const invoice = (cart: Cart): TDocumentDefinitions => {
  const {getProductTotal, getProductTotalExcludingVAT, getProductVAT, f} = cartService();
  const { lines, totals } = cart;
  const items = lines.map((product) => {
    const { title, price, quantity } = product;
    return [
      title,
      quantity,
      f(price.fullPrice),
      f(getProductVAT(product)),
      f(getProductTotalExcludingVAT(product)),
      f(getProductTotal(product)),
    ];
  });
  const { subtotal, totalVAT, total, shipping } = totals;
  return {
    header: header(),
    content: [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['*', 'auto', 'auto', 'auto', 'auto', 'auto'],
          body: [
            [
              tableHeader('Title'),
              tableHeader('Quantity'),
              tableHeader('Price'),
              tableHeader('VAT'),
              tableHeader('Total Exc. VAT'),
              tableHeader('Total'),
            ],
            ...items,
            lines.length > 0 ? ['Totals', '', '', f(totalVAT), f(subtotal), f(total)] : Array(6).fill(''),
          ],
        },
      },
      {
        text: `Shipping: ${f(shipping)}`,
        margin: [0, 0, 0, 10],
      },
      {
        text: `Total: ${f(total + shipping)}`,
        margin: [0, 0, 0, 10],
      },
      {
        text: 'Thank you for your purchase!',
        margin: [0, 0, 0, 10],
      },
      {
        text: 'Please pay within 30 days.',
        margin: [0, 0, 0, 10],
      },
      {
        text: 'For any inquiries, please contact us at:',
        margin: [0, 0, 0, 10],
      }
    ],
    styles
  };
};


export const generateInvoice = (cart: Cart) => createPdf(invoice(cart)).open();

const getBaseURL = () => {
  const { protocol, hostname, port } = window.location;
  return `${protocol}//${hostname}${port ? `:${port}` : ''}/`;
}