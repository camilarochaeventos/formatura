document.addEventListener('DOMContentLoaded', function() {
    const btnVisualizar = document.getElementById('btnVisualizar');
    const pdfViewer = document.getElementById('pdf-viewer');
    const encerramento = document.getElementById('encerramento');
    const pdfIframe = document.getElementById('pdfIframe');

    btnVisualizar.addEventListener('click', function() {
        // Usa o nome do arquivo do config.js
        const arquivoPDF = window.CONFIG_PDF || 'proposta.pdf';
        
        // Carrega o PDF
        pdfIframe.src = arquivoPDF;
        
        // Mostra a seção do PDF
        pdfViewer.style.display = 'flex';
        
        // Rola suavemente
        pdfViewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Mostra o encerramento
        setTimeout(() => {
            encerramento.style.display = 'flex';
            encerramento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 1500);
    });
});