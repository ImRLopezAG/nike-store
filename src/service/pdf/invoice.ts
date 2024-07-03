import { createPdf } from '@services/pdf';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';

const invoice: TDocumentDefinitions = {
  content: [
    { text: 'Invoice', style: 'header' },
    { text: 'From: Company', style: 'subheader' },
    { text: 'To: Customer', style: 'subheader' },
    { text: 'Items', style: 'subheader' },
    {
      layout: {
        hLineWidth: function (i, node) {
          if (i === 0 || i === node.table.body.length) {
            return 0;
          }
          return i === node.table.headerRows ? 2 : 0;
        },
        vLineWidth: () => 0,
        hLineColor: function (i) {
          return i === 1 ? 'black' : '#aaa';
        },
      },
      table: {
        headerRows: 1,
        widths: ['*', 'auto', 'auto'],
        body: [
          ['Item', 'Price', 'Quantity'],
          ['Item 1', '200', '2'],
          ['Item 2', '100', '1'],
        ],
      },
    },
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
  },
};

export const generateInvoice = () => createPdf(invoice).open();
