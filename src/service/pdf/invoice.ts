import { createPdf } from '@services/pdf'
import type { TDocumentDefinitions } from 'pdfmake/interfaces'


const invoice: TDocumentDefinitions = {
  content: [
    {
      text: 'Invoice',
      style: 'header',
    },
    {
      text: 'From',
      style: 'subheader',
    },
    {
      text: 'TanStack',
      style: 'subheader',
    },
    {
      text: 'To',
      style: 'subheader',
    },
    {
      text: 'Client',
      style: 'subheader',
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
}

export const generateInvoice = () =>  createPdf(invoice)