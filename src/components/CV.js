import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const CV = () => {
	// const [numPages, setNumPages] = useState(null);
	// const [pageNumber, setPageNumber] = useState(1);

	// function onDocumentLoadSuccess({ numPages }) {
	// 	setNumPages(numPages);
	// }

	return (
		<div className="cv">
			<Document
				file='/cv.pdf'
			// onLoadSuccess={onDocumentLoadSuccess}
			>
				<Page pageNumber={1} width={800} />
			</Document>
			{/* <p>Page {pageNumber} of {numPages}</p> */}
		</div>
	);
}

export default CV;