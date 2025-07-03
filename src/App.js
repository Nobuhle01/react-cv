import React, { useRef } from 'react';
import Resume from './components/Resume';
import './App.css';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function App() {
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: 'Nobuhle-Ntshangase-CV',
  });

  const handleDownloadPDF = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = pageWidth;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

    if (imgHeight > pageHeight) {
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, pageHeight);
    } else {
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    }

    pdf.save('Nobuhle-Ntshangase-CV.pdf');
  };

  return (
    <div className="App">
      <button className="print-button" onClick={handlePrint}>
        Print / Preview
      </button>
      <button className="print-button" onClick={handleDownloadPDF}>
        Download PDF
      </button>
      <Resume ref={resumeRef} />
    </div>
  );
}

export default App;
