import { createPdf } from '@services/pdf';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';

const invoice = (cart: Cart): TDocumentDefinitions => {
  const roundToTwoDecimals = (num: number) => Number(num.toFixed(2));
  const getProductVAT = (product: Item) =>
    roundToTwoDecimals(product.price.fullPrice * 0.18);
  const getProductTotalExcludingVAT = (product: Item) =>
    product.price.fullPrice * product.quantity;

  const getProductTotal = (product: Item) => {
    const { price } = product;
    return roundToTwoDecimals(
      price.fullPrice * product.quantity +
        getProductVAT(product) * product.quantity
    );
  };
  const { lines, totals } = cart;
  const items = lines.map((product) => {
    const { title, price, quantity } = product;

    return [
      title,
      quantity,
      price.fullPrice,
      getProductVAT(product),
      getProductTotalExcludingVAT(product),
      getProductTotal(product),
    ];
  });
  const { subtotal, totalVAT, total } = totals;
  return {
    header: {
      margin: 10,
      columns: [
        { text: 'Company Name', style: 'header' },
        { text: `Invoice No. ${cart.id}`, alignment: 'right' },
      ],
    },
    content: [
      {
        layout: {
          hLineWidth: () => 0,
          vLineWidth: () => 0,
          hLineColor: function (i) {
            return i === 1 ? 'black' : '#aaa';
          },
          fillColor: (i, node) => (i === 0 || i === node.table.body.length - 1 ? '#C0D1D8' : null),
        },
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
            lines.length > 0 ? ['Totals', '', '', totalVAT, subtotal, total] : Array(6).fill(''),
          ],
        },
      }
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
      },
      subheader: {
        fontSize: 14,
        bold: true,
        margin: [0, 15, 0, 0],
      },
      tableHeader: {
        bold: true,
        fontSize: 11,
        color: 'black',
      },
    },
  };
};

const tableHeader = (text: string) => ({ text, style: 'tableHeader' });

export const generateInvoice = (cart: Cart) => createPdf(invoice(cart)).open();
