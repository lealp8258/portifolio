// ==========================================================================
// 1. LISTAGEM DO SISTEMA COM ARRAYS, OBJETOS E LAÇO FOR
// ==========================================================================
console.log("=== SISTEMA DO PORTFÓLIO DO PIETRO INICIADO ===");

const listaHabilidades = ["HTML5", "CSS3", "JavaScript"];

console.log("--- Listagem de Habilidades do Sistema ---");
for (let i = 0; i < listaHabilidades.length; i++) {
  console.log("Habilidade " + (i + 1) + ": " + listaHabilidades[i]);
}

// Array de objetos com os 3 projetos em destaque do portfólio
const listaProjetos = [
  {
    titulo: "Nexus Core AI",
    categoria: "Projeto fictício",
    descricao: "Interface de controle para modelos de inteligência artificial de última geração.",
    imagem: "img/previa-ia.svg",
    alt: "Prévia do projeto Nexus Core AI",
    tecnologias: "HTML5, CSS3, JavaScript",
    link: "https://github.com/"
  },
  {
    titulo: "Bot Vem X1 Fc — Portal Oficial",
    categoria: "Web App Interativo • Esportes",
    descricao: "Um site para acompanhar o melhor time, nele você pode ver as próximas partidas, qual divisão, quantos pontos para a próxima divisão, torcedores, estatística do time e desempenho dos jogadores.",
    imagem: "img/div-escudo.jpg",
    alt: "Escudo Bot Vem X1 Fc",
    tecnologias: "HTML5, CSS3, JavaScript",
    link: "https://github.com/"
  },
  {
    titulo: "Easy Work — App de Serviços Locais",
    categoria: "Mobile UI/UX • Aplicativo Web",
    descricao: "Plataforma móvel que conecta clientes a profissionais locais. Do pedido ao orçamento, tudo pelo app com busca por categorias, chat integrado para envio de fotos de problemas e painel completo para acompanhamento de desempenho do profissional.",
    imagem: "img/easy-work.jpg",
    alt: "Easy Work App",
    tecnologias: "HTML5, CSS3, JavaScript",
    link: "https://github.com/"
  }
];


// ==========================================================================
// 2. RECONHECIMENTO DOS ELEMENTOS DO HTML
// ==========================================================================
const containerProjetos = document.querySelector("#listaProjetos");
const botaoTema = document.querySelector("#botaoTema");
const botaoMenuMobile = document.querySelector("#botaoMenuMobile");
const menuMobile = document.querySelector("#menuMobile");

const formulario = document.querySelector("#formularioContato");
const campoNome = document.querySelector("#campoNome");
const campoEmail = document.querySelector("#campoEmail");
const campoAssunto = document.querySelector("#campoAssunto");
const campoMensagem = document.querySelector("#campoMensagem");

const erroNome = document.querySelector("#erroNome");
const erroEmail = document.querySelector("#erroEmail");
const erroAssunto = document.querySelector("#erroAssunto");
const erroMensagem = document.querySelector("#erroMensagem");
const avisoContato = document.querySelector("#avisoContato");


// ==========================================================================
// 3. FUNÇÃO PARA MONTAR OS PROJETOS NA TELA COM LAÇO FOR
// ==========================================================================
function montarProjetos() {
  if (!containerProjetos) return;

  containerProjetos.innerHTML = "";
  console.log("--- Listagem de Projetos do Sistema ---");

  for (let i = 0; i < listaProjetos.length; i++) {
    const projeto = listaProjetos[i];

    console.log(
      "Projeto " + (i + 1) + ": " + projeto.titulo + " | Tecnologias: " + projeto.tecnologias
    );

    containerProjetos.innerHTML += `
      <article class="cartao-projeto">
        <div>
          <img src="${projeto.imagem}" alt="${projeto.alt}" class="imagem-projeto">
          <div class="topo-projeto">
            <span class="etiqueta-ficticio">${projeto.categoria}</span>
            <i class="fa-solid fa-code texto-ciano icone-projeto"></i>
          </div>
          <h3 class="titulo-projeto">${projeto.titulo}</h3>
          <p class="descricao-projeto">${projeto.descricao}</p>
          <div class="tecnologias-projeto">
            <strong>Tecnologias:</strong>
            <span class="texto-ciano">${projeto.tecnologias}</span>
          </div>
        </div>
        <a href="${projeto.link}" target="_blank" class="link-projeto">
          Acessar projeto <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </article>
    `;
  }
}

montarProjetos();


// ==========================================================================
// 4. BOTÃO DE MODO CLARO E ESCURO (☀️ / 🌙)
// ==========================================================================
function alternarTema() {
  document.body.classList.toggle("modo-claro");
  const modoClaroAtivo = document.body.classList.contains("modo-claro");

  if (modoClaroAtivo) {
    botaoTema.textContent = "🌙 Escuro";
    console.log("Sistema: Modo Claro ativado (☀️)");
  } else {
    botaoTema.textContent = "☀️ Claro";
    console.log("Sistema: Modo Escuro ativado (🌙)");
  }
}

botaoTema.addEventListener("click", alternarTema);


// ==========================================================================
// 5. FUNÇÕES DE VALIDAÇÃO DO FORMULÁRIO
// ==========================================================================
function validarNome(nome) {
  if (nome === "") {
    return "Por favor, digite seu nome.";
  } else if (nome.length < 10 || !isNaN(nome)) {
    return "Coloque um nome válido (pelo menos 10 caracteres).";
  }
  return "";
}

function validarEmail(email) {
  if (email === "") {
    return "Por favor, digite seu e-mail.";
  } else if (!email.includes("@") || !email.includes(".")) {
    return "Coloque um e-mail válido (exemplo: seu@email.com).";
  }
  return "";
}

function validarAssunto(assunto) {
  if (assunto === "") {
    return "Por favor, digite o assunto.";
  } else if (assunto.length < 10 || !isNaN(assunto)) {
    return "Insira um assunto válido (pelo menos 10 caracteres).";
  }
  return "";
}

function validarMensagem(mensagem) {
  if (mensagem === "") {
    return "Por favor, escreva sua mensagem.";
  } else if (mensagem.length < 10) {
    return "A mensagem precisa ter pelo menos 10 caracteres.";
  }
  return "";
}


// ==========================================================================
// 6. MOSTRAR ERROS E ENVIAR O FORMULÁRIO
// ==========================================================================
function mostrarErro(campo, elementoErro, textoErro) {
  if (textoErro !== "") {
    elementoErro.textContent = textoErro;
    elementoErro.style.display = "flex";
    campo.classList.add("campo-erro");
  } else {
    elementoErro.textContent = "";
    elementoErro.style.display = "none";
    campo.classList.remove("campo-erro");
  }
}

function enviarFormulario(evento) {
  evento.preventDefault();

  const nome = campoNome.value.trim();
  const email = campoEmail.value.trim();
  const assunto = campoAssunto.value.trim();
  const mensagem = campoMensagem.value.trim();

  console.log("--- Dados Recebidos do Formulário ---");
  console.log("Nome:", nome);
  console.log("E-mail:", email);
  console.log("Assunto:", assunto);
  console.log("Mensagem:", mensagem);

  const erroDoNome = validarNome(nome);
  const erroDoEmail = validarEmail(email);
  const erroDoAssunto = validarAssunto(assunto);
  const erroDaMensagem = validarMensagem(mensagem);

  mostrarErro(campoNome, erroNome, erroDoNome);
  mostrarErro(campoEmail, erroEmail, erroDoEmail);
  mostrarErro(campoAssunto, erroAssunto, erroDoAssunto);
  mostrarErro(campoMensagem, erroMensagem, erroDaMensagem);

  if (erroDoNome !== "" || erroDoEmail !== "" || erroDoAssunto !== "" || erroDaMensagem !== "") {
    if (erroDoNome !== "") console.log("Erro no Nome:", erroDoNome);
    if (erroDoEmail !== "") console.log("Erro no E-mail:", erroDoEmail);
    if (erroDoAssunto !== "") console.log("Erro no Assunto:", erroDoAssunto);
    if (erroDaMensagem !== "") console.log("Erro na Mensagem:", erroDaMensagem);

    avisoContato.textContent = "Preencha corretamente os campos destacados em vermelho.";
    avisoContato.className = "aviso-contato aviso-erro";
    avisoContato.style.display = "flex";
    return;
  }

  console.log("Sucesso: Mensagem enviada com sucesso por " + nome + " (" + email + ")!");
  avisoContato.textContent = "Mensagem enviada com sucesso! Em breve o Pietro responderá.";
  avisoContato.className = "aviso-contato aviso-sucesso";
  avisoContato.style.display = "flex";
  formulario.reset();
}

formulario.addEventListener("submit", enviarFormulario);


// ==========================================================================
// 7. MENU NO CELULAR (USANDO LAÇO FOR PARA OS LINKS)
// ==========================================================================
function alternarMenu() {
  menuMobile.classList.toggle("escondido");
  console.log("Sistema: Menu mobile alternado.");
}

botaoMenuMobile.addEventListener("click", alternarMenu);

const linksMenu = menuMobile.querySelectorAll("a");
for (let i = 0; i < linksMenu.length; i++) {
  linksMenu[i].addEventListener("click", function () {
    menuMobile.classList.add("escondido");
  });
}
