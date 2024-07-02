import PdfMake from 'pdfmake'
import type { TDocumentDefinitions } from 'pdfmake/interfaces'

const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-MediumItalic.ttf',
  },
}

const printer = new PdfMake(fonts)

export const createPdf = (docDefinition: TDocumentDefinitions) => {
  return printer.createPdfKitDocument(docDefinition)
}