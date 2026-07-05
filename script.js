document.addEventListener('DOMContentLoaded', function() {
    const btnVisualizar = document.getElementById('btnVisualizar');
    const pdfViewer = document.getElementById('pdf-viewer');
    const encerramento = document.getElementById('encerramento');
    const pdfIframe = document.getElementById('pdfIframe');

    btnVisualizar.addEventListener('click', function() {
        const arquivoPDF = 'proposta.pdf';
        
        // DETECTA SE É CELULAR E SE É iOS
        const isMobile = window.innerWidth <= 768;
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        
        // SE FOR iOS OU CELULAR -> ABRE EM NOVA ABA
        if (isMobile || isIOS) {
            // Tenta abrir em nova aba
            window.open(arquivoPDF, '_blank');
            
            // Mostra as seções mesmo assim
            pdfViewer.style.display = 'flex';
            pdfViewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // Adiciona um aviso no iframe para o iOS
            pdfIframe.src = '';
            pdfIframe.style.display = 'none';
            
            // Mostra uma mensagem amigável
            const avisoDiv = document.createElement('div');
            avisoDiv.id = 'aviso-ios';
            avisoDiv.innerHTML = `
                <div style="text-align: center; padding: 2rem; background: #f8f4f0; border-radius: 12px; margin: 1rem;">
                    <i class="fas fa-file-pdf" style="font-size: 3rem; color: #af8459; margin-bottom: 1rem; display: block;"></i>
                    <p style="color: #764b36; font-size: 1.1rem; margin-bottom: 1rem;">
                        📱 O PDF abriu em uma nova aba!
                    </p>
                    <p style="color: #764b36; font-size: 0.9rem;">
                        Se não abriu automaticamente, <a href="${arquivoPDF}" target="_blank" style="color: #af8459; font-weight: 600;">clique aqui</a> para abrir.
                    </p>
                </div>
            `;
            
            // Remove aviso antigo se existir
            const avisoAntigo = document.getElementById('aviso-ios');
            if (avisoAntigo) avisoAntigo.remove();
            
            // Adiciona o aviso
            const pdfWrapper = document.querySelector('.pdf-wrapper');
            if (pdfWrapper) {
                pdfWrapper.appendChild(avisoDiv);
            }
            
            setTimeout(() => {
                encerramento.style.display = 'flex';
                encerramento.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 1500);
            
        } else {
            // No computador: mostra no iframe
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
