document.addEventListener('DOMContentLoaded', function() {
    const btnVisualizar = document.getElementById('btnVisualizar');
    const pdfViewer = document.getElementById('pdf-viewer');
    const encerramento = document.getElementById('encerramento');
    const pdfIframe = document.getElementById('pdfIframe');

    btnVisualizar.addEventListener('click', function() {
        const arquivoPDF = 'proposta.pdf';
        
        // DETECTA SE É CELULAR
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // No celular: abre em nova aba
            window.open(arquivoPDF, '_blank');
            
            // Mostra as seções mesmo assim
            pdfViewer.style.display = 'flex';
            pdfViewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            setTimeout(() => {
                encerramento.style.display = 'flex';
                encerramento.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 1500);
        } else {
            // No computador: mostra no iframe
            pdfIframe.src = arquivoPDF;
            pdfViewer.style.display = 'flex';
            pdfViewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            setTimeout(() => {
                encerramento.style.display = 'flex';
                encerramento.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 1500);
        }
    });
});
