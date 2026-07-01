const fs = require('fs');
const PDFParser = require('pdf2json');

function extract(file) {
  return new Promise((resolve) => {
    const pdfParser = new PDFParser();
    pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
    pdfParser.on("pdfParser_dataReady", pdfData => {
      console.log('\n=== ' + file + ' ===');
      pdfData.Pages[0].Texts.forEach(text => {
        const str = decodeURIComponent(text.R[0].T);
        if (str.includes('SI') || str.includes('NO') || str.includes('Favismo') || str.includes('Hipertensión') || str.includes('Diabetes') || str.includes('Sufre')) {
          const x = text.x * 22.5;
          const y = text.y * 22.5;
          const pdfLibY = 841.89 - y;
          console.log(`x: ${x.toFixed(2)}, pdfLib_y: ${pdfLibY.toFixed(2)} - "${str}"`);
        }
      });
      resolve();
    });
    pdfParser.loadPDF(file);
  });
}

async function run() {
  try {
    await extract('./src/assets/pdf/non_pharma_es.pdf');
    await extract('./src/assets/pdf/ozone_autohemo_es.pdf');
  } catch (err) {
    console.error(err);
  }
}
run();
