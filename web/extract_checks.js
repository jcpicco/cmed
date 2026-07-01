const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();

function printFields(file) {
  return new Promise(resolve => {
    pdfExtract.extract(file, {}, (err, data) => {
      if (err) return console.log(err);
      console.log('\n=== ' + file + ' ===');
      data.pages[0].content.forEach(c => {
        if (c.str.includes('SI') || c.str.includes('NO') || c.str.includes('Favismo') || c.str.includes('Hipertens') || c.str.includes('Diabetes') || c.str.includes('Sufre')) {
          const pdfLibY = 841.89 - c.y;
          console.log(`x: ${c.x.toFixed(2)}, pdfLib_y: ${pdfLibY.toFixed(2)} - "${c.str}"`);
        }
      });
      resolve();
    });
  });
}

async function run() {
  await printFields('./src/assets/pdf/non_pharma_es.pdf');
  await printFields('./src/assets/pdf/ozone_autohemo_es.pdf');
}
run();
