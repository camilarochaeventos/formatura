// ============================================
// CONFIGURAÇÕES DO SITE - EDITAR AQUI!
// ============================================

const CONFIG = {
    // INFORMAÇÕES DA ESCOLA
    escola: {
        nome: 'Colégio EME',
        mensagemBoasVindas: `Olá, equipe do Colégio EME!<br />
        É com imensa satisfação que apresento nossa proposta personalizada 
        para transformar sua formatura em um evento inesquecível. 
        Com dedicação, criatividade e anos de experiência, 
        cuidamos de cada detalhe para que esse momento seja único.`
    },

    // TEMPO DE EXPERIÊNCIA
    experiencia: {
        anos: '10',
        texto: 'Há <strong>mais de 10 anos</strong> transformando sonhos em momentos inesquecíveis.'
    },

    // CONTATOS - LINKS CORRETOS!
    contatos: {
        whatsapp: 'https://wa.me/5521988666854', // WhatsApp da Camila
        instagram: 'https://instagram.com/camilarochaeventos' // Instagram
    },

    // ARQUIVO PDF
    pdf: {
        arquivo: 'proposta.pdf'
    },

    // TÍTULO DO SITE
    tituloPagina: 'Camila Rocha Eventos - Proposta'
};

// ============================================
// NÃO ALTERE DAQUI PARA BAIXO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    document.title = CONFIG.tituloPagina;
    document.getElementById('nomeEscola').textContent = CONFIG.escola.nome;
    document.getElementById('mensagemBoasVindas').innerHTML = CONFIG.escola.mensagemBoasVindas;
    document.getElementById('mensagemAnos').innerHTML = CONFIG.experiencia.texto;
    document.getElementById('linkWhatsapp').href = CONFIG.contatos.whatsapp;
    document.getElementById('linkInstagram').href = CONFIG.contatos.instagram;
    window.CONFIG_PDF = CONFIG.pdf.arquivo;
});