document.addEventListener('DOMContentLoaded', function() {
    const btnVisualizar = document.getElementById('btnVisualizar');
    const pdfViewer = document.getElementById('pdf-viewer');
    const encerramento = document.getElementById('encerramento');
    const pdfIframe = document.getElementById('pdfIframe');

    btnVisualizar.addEventListener('click', function() {
        const arquivoPDF = 'proposta.pdf';
        
        // VERIFICA SE É CELULAR
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // CELULAR: Abre em nova aba
            window.open(arquivoPDF, '_blank');
            
            // Mostra a seção do PDF
            pdfViewer.style.display = 'flex';
            pdfViewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Mostra mensagem de aviso
            const wrapper = document.querySelector('.pdf-wrapper');
            if (wrapper) {
                // Remove aviso antigo se existir
                const antigo = wrapper.querySelector('.aviso-celular');
                if (antigo) antigo.remove();
                
                const aviso = document.createElement('div');
                aviso.className = 'aviso-celular';
                aviso.style.cssText = 'text-align: center; padding: 2rem; background: #f8f4f0; border-radius: 12px; margin: 1rem;';
                aviso.innerHTML = `
                    <i class="fas fa-file-pdf" style="font-size: 2.5rem; color: #af8459; margin-bottom: 1rem; display: block;"></i>
                    <p style="color: #764b36; font-size: 1.1rem; margin-bottom: 0.5rem;">
                        📄 O PDF abriu em uma nova aba!
                    </p>
                    <p style="color: #764b36; font-size: 0.9rem;">
                        Se não abriu, <a href="${arquivoPDF}" target="_blank" style="color: #af8459; font-weight: 600;">clique aqui</a>
                    </p>
                `;
                wrapper.appendChild(aviso);
            }
            
            // Esconde o iframe no celular
            pdfIframe.style.display = 'none';
            
            setTimeout(() => {
                encerramento.style.display = 'flex';
                encerramento.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 1500);
            
        } else {
            // COMPUTADOR: Mostra no iframe
            pdfIframe.style.display = 'block';
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
