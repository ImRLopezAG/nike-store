import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import type { TDocumentDefinitions } from 'pdfmake/interfaces';


pdfMake.vfs = {
  ...pdfFonts.pdfMake.vfs,
  
}

export const createPdf = (doc: TDocumentDefinitions) => pdfMake.createPdf(doc);