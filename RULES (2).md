# Regras do projeto: site de portfólio pessoal

Este é o site de portfólio de uma pessoa iniciante em programação. Todo o código deve ser simples o bastante para ela ler e entender.

Leia o que já existe antes de criar qualquer coisa nova.

## Parte 1: Sobre o meu site

### Quem sou eu
- Nome e perfil: Pietro, desenvolvedor de software e criador de experiências digitais. [confirmar título ou cargo]
- Frase principal (usar no topo da página): [frase principal do Pietro: ainda a definir. Não inventar; usar este marcador até eu escolher.]

### Objetivo e público
- O site é para recrutadores de tecnologia, possíveis clientes e líderes da área de tecnologia conhecerem meu perfil e meus projetos.
- Ações que quero que a pessoa faça: visualizar meus projetos (fictícios e reais), conhecer minhas habilidades com ícones, ouvir a música de fundo e entrar em contato.
- Tom dos textos: profissional, minimalista, moderno e impactante.
- O site deve parecer: tecnológico, minimalista e elite.

### Tecnologias deste projeto (a ficha manda)
- Somente HTML5 e CSS3, **sem JavaScript**. Não criar arquivo `.js` nem usar a tag `script`. Toda interatividade e estilo são resolvidos só com HTML e CSS. As regras de JavaScript da Parte 2 só passam a valer se eu mudar essa decisão.
- Navegação por links de âncora (exemplo: `href="#projetos"`) e rolagem suave com `scroll-behavior: smooth` no CSS.
- Formulário de contato em HTML puro (nome, e-mail, assunto e mensagem). Sem JavaScript e sem servidor, ele só envia por um destino no `action`: use [destino do formulário: e-mail com mailto ou serviço de envio, a definir]. Avise isso ao entregar.

### Estrutura do site
- Página única (one-page), com menu fixo no topo que leva a cada seção.
- Seções, nesta ordem (todas essenciais):
  1. **Início (Hero):** nome Pietro, apresentação impactante, frase principal, botões de ação e o player de áudio no topo.
  2. **Sobre mim:** texto destacando o Pietro como profissional de referência em tecnologia e desenvolvimento, com padrões altos de qualidade.
  3. **Habilidades:** cards de habilidades, cada um com seu símbolo ou ícone visual.
  4. **Projetos:** 3 projetos com descrição marcante e tecnologias utilizadas.
  5. **Contato:** formulário, e-mail de contato direto e links para GitHub e LinkedIn.

### Player de áudio
- Use o player HTML5 nativo (`audio` com `controls`) no topo da página, com os controles visíveis para dar play, pausar e ajustar o volume.
- Música: "Lose Control", de Yeat.
- O arquivo de áudio será fornecido por mim. Use [caminho do arquivo de áudio] até eu informar onde ele fica. Não invente caminho nem link, e não baixe nem procure a música.

### Conteúdo
- Texto de Sobre mim (meu texto, usar como está): "Sou o Pietro, uma referência em desenvolvimento de software e criação de experiências digitais de alta performance. Minha trajetória é pautada pela excelência técnica absoluta e pela entrega de soluções inovadoras que redefinem os padrões da indústria. Combinando uma visão estética apurada com arquiteturas de código limpas, robustas e escaláveis, domino desde a concepção visual até a implementação dos sistemas mais complexos."
- Habilidades: HTML5, CSS3, JavaScript, Git, Python e UI/UX. Todas devem ter seu ícone SVG incorporado. Não invente níveis de domínio.
- Projetos (3 projetos fictícios, criados por mim):
  1. AuraPay Protocol: plataforma fintech descentralizada com dashboards analíticos em tempo real.
  2. Nexus Core AI: interface de controle para modelos de inteligência artificial de última geração.
  3. Vortex Store Engine: plataforma de e-commerce de alto padrão e ultrarrápida.
- Em cada card de projeto, identifique de forma discreta que é um projeto fictício (exemplo: etiqueta "Projeto fictício"). Para tecnologias e links, use [tecnologias: a definir] e [link do projeto] até eu informar.
- Contato: [e-mail], [link do GitHub] e [link do LinkedIn]. Pendentes.

### Identidade visual (design system)
- Cores principais, definidas como variáveis CSS no `:root` (se o projeto já tiver variáveis de cor, reaproveite os nomes que existem):
  - preto-azulado `#080B12` (fundo)
  - azul elétrico `#287BFF` (destaque)
  - roxo `#8057FF` (destaque)
  - texto claro e legível
- Modo escuro nativo: o site já nasce escuro. Não crie botão para alternar para modo claro. Garanta bom contraste de texto.
- Fontes: Inter, com sans-serif como alternativa, carregada pelo Google Fonts. Modernas, limpas e legíveis, com títulos marcantes. No máximo 2 famílias.
- Visual minimalista, com muito espaço em branco e hierarquia visual clara (títulos, subtítulos e textos com tamanhos bem diferentes).
- Ícones das habilidades: SVG incorporado no HTML, como pede a ficha. Para os demais ícones, use Font Awesome. Nunca use emojis como ícones.
- Componentes (botão, card, menu): reaproveite os que já existem em vez de criar outros parecidos.

### Inspirações (só para guiar, não copiar)
- Awwwards (awwwards.com): composição criativa e animações discretas. Aplicar uma composição original e microinterações leves em CSS.
- Linear (linear.app): visual escuro, hierarquia clara, tipografia moderna e detalhes em cor. Aplicar fundo escuro, cards organizados e cores minimalistas.
- Apple (apple.com): imagens grandes, bastante espaço e apresentação limpa. Aplicar títulos fortes e seções bem separadas.
- Nunca copiar o layout de nenhum desses sites e não parecer uma página de produto.

### O que evitar
- Excesso de texto, excesso de efeitos, animações exageradas, navegação confusa e visual confuso.
- Aparência corporativa demais.
- Use apenas microinterações discretas em CSS (hover e transições suaves).

### Experiência da página
- Layout responsivo, funcionando bem no celular e no computador.
- Navegação simples: menu fixo no topo que leva a Início, Sobre mim, Habilidades, Projetos e Contato.
- Destaque para os projetos e chamadas para ação (botões) claras.
- Deve transmitir competência técnica de forma minimalista e impactante.

## Parte 2: Como trabalhar (igual para todos, não editar)

### Tecnologias e arquivos
- Use somente HTML, CSS e JavaScript puros. Não use frameworks nem bibliotecas.
- Exceções permitidas: Font Awesome (ícones) e Google Fonts (fontes), ambos por link no HTML. Nunca use emojis como ícones.
- Mantenha a estrutura de arquivos que já existe. Só crie arquivos novos se eu pedir.
- Imagens ficam na pasta `img/`.

### HTML
- Use tags semânticas: `header`, `nav`, `main`, `section`, `article` e `footer`.
- Escreva nomes de classes e comentários em português, em minúsculas e com hífen (exemplo: `cartao-projeto`).
- Todo `img` deve ter um `alt` descritivo.
- Use apenas um `h1` por página.
- Não use as tags `table` e `blockquote`.

### CSS
- Escreva CSS simples, sem truques avançados.
- Use medidas somente em `rem`, `px` e `%`.
- Use variáveis CSS para as cores. O modo escuro troca essas variáveis.
- Organize o `style.css` em blocos com comentário, um por seção da página.
- Agrupe todos os efeitos de `hover` e `transition` em um único bloco, no final do arquivo, com um comentário que o identifique.
- Faça o layout funcionar no celular, com no máximo uma `media query` simples por seção.

### JavaScript
- Escreva JS simples e comentado em português, usando `querySelector`, `addEventListener` e `classList`.
- Cada função deve fazer uma coisa só.

### Forma de trabalhar
- Faça somente o que foi pedido, uma seção ou uma mudança por vez. Não crie nem altere arquivos que eu não pedi.
- Antes de uma mudança grande (várias seções ou refazer algo inteiro), explique o plano em poucas linhas e espere a minha confirmação.
- Ao terminar, explique em 3 a 5 linhas, em linguagem simples, o que foi criado ou alterado.
- Nunca invente textos pessoais, links ou dados. Use marcadores entre colchetes.
- Se um pedido meu entrar em conflito com estas regras, avise e pergunte como prefiro seguir.

### Interação
- Só pergunte quando faltar uma informação essencial, e faça uma pergunta por vez. Se o pedido estiver claro, execute.
- Se eu disser "vai direto", registre a suposição que você fez e siga.
- Ao trocar de modo, diga qual modo está sugerindo e por quê, em uma frase, e pergunte se pode seguir.

## Modos de trabalho

Cada modo tem um arquivo em `.agents/rules/`. Use o modo que combina com o pedido, ou o que eu chamar pelo nome (`modo planejador`, `modo depurador`, `modo revisor`, `modo explicador`).

| Sinais no pedido | Modo |
| --- | --- |
| planejar, dividir em fases, ordem das seções, o que fazer primeiro | Planejador |
| bug, quebrou, não aparece, erro no console, não funciona no celular | Depurador |
| revisar, conferir, checklist, está bom?, antes de entregar | Revisor |
| explica, o que esse código faz, não entendi | Explicador |

### Transições
- Planejador: executa uma fase por vez e, ao fim de cada uma, pode ir para Revisor.
- Depurador: se o problema mostrar falha de estrutura, volta para Planejador.
- Revisor: se achar um bug, passa para Depurador. Só corrige o que eu pedir.
- Explicador: depois de explicar, volta ao que estava sendo feito.

### Gates (checagens antes de agir)
- **A. Interação:** vale a seção "Interação" acima.
- **B. Mudança em algo que já existe** (várias seções, estilos globais, variáveis, estrutura do HTML): siga `analise-de-mudanca.md`.
- **C. Decisão que afeta mais de uma área** (visual, conteúdo e código ao mesmo tempo): siga `multi-persona.md`.
- **D. A ficha manda:** objetivo, público e identidade visual desta Parte 1 não mudam sozinhos. Se um pedido contrariar a ficha, avise e pergunte.
