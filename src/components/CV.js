import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const CV = () => {
	return (
		<div className="cv">
			<Document
				file='/cv.pdf'
			>
				<Page pageNumber={1} width={800} />
			</Document>
		</div>
	);
}

export default CV;