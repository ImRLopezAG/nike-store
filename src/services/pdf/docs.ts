import type {
  Content,
  TableLayout,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';

export const tableHeader = (text: string) => ({ text, style: 'tableHeader' });

export const header = (): Content => ({
  margin: 10,
  columns: [
    {
      text: 'Invoice',
      style: 'header',
    },
    {
      text: 'Date: ' + new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date()),
      alignment: 'right',
    },
  ],
});

export const styles: TDocumentDefinitions['styles'] = {
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
};

export const layout = (): TableLayout => ({
  hLineWidth: () => 0,
  vLineWidth: () => 0,
  hLineColor: function (i) {
    return i === 1 ? 'black' : '#aaa';
  },
  fillColor: (i, node) =>
    i === 0 || i === node.table.body.length - 1 ? '#C0D1D8' : null,
});
