import type { Content } from './types';

export const pt: Content = {
  meta: {
    title: 'Thiago Fidelis — Engenheiro Front-End Sênior',
    description:
      'Engenheiro front-end sênior com React, TypeScript e micro-frontends. Aberto a vagas 100% remotas.',
    htmlLang: 'pt-BR',
  },
  ui: {
    skipLink: 'Ir para o conteúdo',
    navAria: 'Seções',
    languageAria: 'Idioma',
    languageNames: { en: 'English', pt: 'Português' },
    nav: {
      impact: 'Impacto',
      cases: 'Cases',
      experience: 'Experiência',
      projects: 'Projetos',
      skills: 'Competências',
      contact: 'Contato',
    },
    links: {
      resume: 'Currículo',
      email: 'E-mail',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      source: 'Código-fonte',
    },
    caseLabels: {
      role: 'Minha parte',
      period: 'Quando',
      stack: 'Stack',
      context: 'Contexto',
      problem: 'Problema',
      actions: 'O que eu fiz',
      result: 'Resultado',
      readCase: 'Ver o case',
    },
    footer: 'Feito com Vite, React e TypeScript.',
  },
  hero: {
    headline: 'Deixo sistemas front‑end grandes mais rápidos e mais fáceis de mudar.',
    lede: 'Engenheiro Front-End Sênior no Mercado Livre. React, TypeScript e micro-frontends, com BFFs em Node.js por trás. Quase seis anos em software e mais de nove no serviço público antes disso.',
    availability: 'Aberto a vagas sênior de front-end 100% remotas.',
    chart: {
      title: 'Tempo até o primeiro render',
      note: 'Dois micro-frontends de um CRM comercial, medidos em produção.',
      before: 'Antes',
      after: 'Depois',
      faster: 'mais rápido',
      rows: ['App 1', 'App 2'],
    },
  },
  impact: {
    heading: 'Impacto selecionado',
    items: [
      {
        label: 'Arquitetura',
        body: 'Ajudei a separar um backoffice compartilhado por 4 times em micro-frontends por domínio, com Webpack Module Federation, para que cada time desenvolvesse e fizesse deploy de forma independente.',
        caseId: 'backoffice',
      },
      {
        label: 'Performance',
        body: 'Reduzi em 60–67% o tempo até o primeiro render dos micro-frontends de um CRM comercial, medido em produção.',
        caseId: 'crm',
      },
      {
        label: 'Confiabilidade',
        body: 'Encontrei e corrigi o esgotamento de memória que derrubava os pods de um BFF Node.js/TypeScript quase todo dia, rastreando a causa pelos logs de produção.',
        caseId: 'bff',
      },
      {
        label: 'Escala',
        body: 'Construí uma ferramenta de envio em massa de autosserviço que permite a uma pessoa alcançar mais de 8.000 pessoas no Slack em um dia, substituindo envios manuais.',
      },
      {
        label: 'Time',
        body: 'Mentorei vários engenheiros em diferentes times; todos foram promovidos depois. Criei skills de IA que padronizam investigações de performance em micro-frontends.',
      },
    ],
  },
  cases: {
    heading: 'Cases',
    intro: 'Três problemas em que atuei, o que fiz e como sei que funcionou.',
    items: [
      {
        id: 'crm',
        title: 'Reduzindo em 60–67% o tempo até o primeiro render de um CRM comercial',
        facts: {
          role: 'Construí as quatro aplicações e fiz a correção',
          period: '2026',
          stack: 'React, TypeScript, BFFs em Node.js, módulos remotos de micro-frontend',
        },
        context:
          'Em 2026 construí do zero quatro aplicações para um CRM comercial no Mercado Livre: funil, recomendações e alertas, agenda e planejamento de contas. Cada uma é um front-end em React e TypeScript com um BFF em Node.js, entregue como módulo remoto de um host de micro-frontends.',
        problem:
          'As telas esperavam todas as suas chamadas e requisições terminarem antes de renderizar qualquer coisa.',
        actions: [
          'Medi o tempo até o primeiro render dos micro-frontends do CRM em produção.',
          'Removi as chamadas e requisições que bloqueavam o primeiro render, para que a tela não espere tudo carregar.',
        ],
        result:
          'O tempo até o primeiro render caiu entre 60% e 67%. Dois exemplos: de 1,2 s para 0,4 s e de 2 s para 0,8 s.',
        evidence: 'Medido em produção.',
      },
      {
        id: 'bff',
        title: 'Descobrindo por que um BFF de session replay não parava de cair',
        facts: {
          role: 'Investiguei e corrigi',
          period: '2025',
          stack: 'Node.js, TypeScript, New Relic, Datadog',
        },
        context:
          'O backoffice de atendimento reproduz sessões de usuários por um middleware de session replay em um BFF Node.js e TypeScript. Para uma gravação longa, o middleware busca várias páginas de chunks e combina seus eventos.',
        problem:
          'As instâncias são limitadas a 2 GB e normalmente usavam cerca de 300 MB. Sempre que um usuário abria uma gravação longa com muitos chunks, a memória acabava, a instância caía e um novo pod subia. Acontecia quase todo dia.',
        actions: [
          'Rastreei a sessão que falhava pelos logs no momento da queda.',
          'Reproduzi a queda em ambiente de teste.',
          'Encontrei chamadas flatMap aninhadas sobre arrays de eventos muito grandes e as substituí por loops simples.',
          'Adicionei log de páginas de chunks por sessão, para rastrear qualquer recorrência no New Relic e no Datadog.',
        ],
        result:
          'A memória se manteve perto da base. As quedas e os novos pods pararam, sem recorrência desde então.',
        evidence: 'Observado em produção: nenhuma queda ou novo pod desde a correção.',
      },
      {
        id: 'backoffice',
        title: 'Dividindo um backoffice compartilhado em micro-frontends por domínio',
        facts: {
          role: 'Ajudei a definir a divisão e construí módulos',
          period: 'Fim de 2024 a 2025',
          stack: 'React, TypeScript, Webpack Module Federation',
        },
        context:
          'O backoffice é uma ferramenta interna para analisar casos de atendimento de commerce e fintech. A visão de detalhe do caso precisava exibir mais de 15 tipos de entidades de negócio (compra, pagamento, envio, reclamação e outras), e cada caso tinha um subconjunto diferente conforme a unidade de negócio. Quatro times trabalhavam na mesma aplicação.',
        problem:
          'Com tudo em uma única aplicação, ficava mais difícil manter e evoluir cada parte de forma independente.',
        actions: [
          'Ajudei a definir a arquitetura: módulos separados por domínio, seguindo o princípio da responsabilidade única, para reduzir o acoplamento.',
          'Estruturei os módulos e a configuração do Module Federation, e a comunicação entre eles: props e callbacks passados pelo host.',
          'Desenvolvi o módulo de cards de status (dados das entidades) e o de linha do tempo (eventos cronológicos).',
          'Conduzi sozinho a migração de um contrato central de entidade (case para friction) em 4 micro-frontends, com feature flags para manter o fluxo legado funcionando.',
        ],
        result:
          'Os times ganharam autonomia: os módulos podem ser desenvolvidos e publicados de forma independente, e a manutenção ficou mais simples porque as responsabilidades estão separadas por domínio.',
        evidence: 'Observado pelos times. Sem métricas quantificadas.',
      },
    ],
  },
  experience: {
    heading: 'Experiência',
    items: [
      {
        company: 'Mercado Livre',
        role: 'Engenheiro Front-End Sênior (promovido de Pleno)',
        period: 'jan 2025 – atual',
        place: 'Remoto',
        summary:
          'Engenheiro front-end em ferramentas de Customer Experience: um backoffice de atendimento e um CRM comercial, construídos como micro-frontends com React, TypeScript e BFFs em Node.js.',
        groups: [
          {
            title: '2026: Plataforma de CRM',
            bullets: [
              'Construí do zero 4 aplicações para um CRM comercial (funil, recomendações e alertas, agenda, planejamento de contas), entregues como módulos remotos de micro-frontend.',
              'Reduzi em 60–67% o tempo até o primeiro render em produção (de 1,2 s para 0,4 s e de 2 s para 0,8 s), removendo chamadas que faziam a tela esperar tudo carregar.',
              'Rastreei um HTTP 502 intermitente até uma automação externa enviando um ID de usuário inválido, e não uma dependência falhando, correlacionando IDs de requisição entre serviços. Propus validação retornando HTTP 400.',
              'Contribuí em APIs Go existentes (parâmetros de consulta, classificação de erros) e executei migrations de banco para adicionar campos.',
            ],
          },
          {
            title: '2025: Backoffice de atendimento',
            bullets: [
              'A partir do fim de 2024, ajudei a definir e implementar a divisão de um backoffice monolítico (4 times, uma aplicação) em micro-frontends por domínio com Webpack Module Federation.',
              'Desenvolvi os módulos de cards de status e de linha do tempo de uma visão de detalhe de caso que exibe mais de 15 tipos de entidade de negócio.',
              'Corrigi o esgotamento de memória no middleware de session replay de um BFF Node.js/TypeScript que derrubava pods quase todo dia.',
              'Construí uma ferramenta de envio em massa de autosserviço (editor de mensagem, importação de público pelo Google Sheets, envio de teste) que permite a uma pessoa alcançar mais de 8.000 pessoas no Slack em um dia, substituindo envios manuais.',
              'Conduzi sozinho a migração de um contrato central de entidade (case para friction) em 4 micro-frontends, com feature flags para manter o fluxo legado funcionando.',
            ],
          },
          {
            title: 'Produto e design',
            bullets: [
              'Levantei e refinei requisitos diretamente com partes interessadas e times de negócio.',
              'Onde não havia time dedicado de UX/UI, desenhei telas e fluxos de navegação a partir dos componentes e tokens do Design System da empresa.',
            ],
          },
          {
            title: 'Engenharia com IA e mentoria',
            bullets: [
              'Criei skills de IA que padronizam investigações de performance de micro-frontends: auditam bundle, renderização React, lazy loading e rede, priorizam correções por impacto e as aplicam em uma worktree isolada com build, lint e testes.',
              'Mentorei vários engenheiros em diferentes times (juniores quando era pleno, semi sêniores desde que me tornei sênior, buddy de 2 novos integrantes); todos foram promovidos depois.',
            ],
          },
        ],
      },
      {
        company: 'Mercado Livre',
        role: 'Engenheiro de Software (Pleno)',
        period: 'out 2022 – dez 2024',
        place: 'Remoto',
        summary:
          'Engenheiro front-end em ferramentas de atendimento enquanto o time dividia um app legado de suporte em micro-frontends.',
        groups: [
          {
            bullets: [
              'Construí a parte de renderização (rrweb) de uma prova de conceito de session replay, desafio dado pelo meu líder técnico, enquanto outro time era responsável pela gravação.',
              'Construí os novos componentes de UI do chat e o micro-frontend de chat, com fluxos de ajuda assistida.',
              'Ajudei a estruturar a Timeline como micro-frontend independente e construí sua suíte de testes end-to-end com Cypress. Adicionei o ID do caso aos logs e eventos do New Relic para acelerar o diagnóstico em produção.',
              'Construí a página de detalhe do caso com estados independentes de carregamento, erro e nova tentativa por seção, para que o erro de um serviço não bloqueasse toda a análise.',
              'Trabalhei com tech leads, product managers e designers de UX/UI: inspecionei protótipos no Figma e handoffs de design system, alinhei estados de componentes, regras de negócio e fluxos de exceção, e participei das discussões iniciais de produto sobre trade-offs técnicos e de negócio.',
              'Validei responsividade e a implementação fiel do Design System da empresa em aplicações grandes.',
            ],
          },
        ],
      },
      {
        company: 'Invillia',
        role: 'Desenvolvedor Front-End Pleno (promovido de Júnior)',
        period: 'nov 2020 – out 2022',
        place: 'Remoto',
        note: 'Cliente: PagSeguro. Júnior até jul 2021, pleno depois.',
        groups: [
          {
            bullets: [
              'Atuei na área “Minha Conta”, onde o lojista gerencia e transfere maquininhas. Apoiei o suporte em transferências com falha e consultei o banco de dados para investigar bugs.',
              'Após a promoção, construí todas as telas e componentes de um gerenciador de transferência de maquininhas em lote, do zero, junto com outro desenvolvedor front-end e um engenheiro sênior.',
              'Passei para o programa indique e ganhe: criei novas landing pages e evoluí a página onde o cliente acompanha indicações e bônus.',
            ],
          },
        ],
      },
      {
        company: 'Fundação CASA',
        role: 'Agente de Apoio Socioeducativo (funcionário público)',
        period: 'jun 2011 – nov 2020',
        place: 'São Paulo, Brasil',
        summary:
          'Trabalhei diretamente com adolescentes no sistema socioeducativo estadual antes de migrar para desenvolvimento de software em 2020.',
        groups: [],
      },
    ],
  },
  projects: {
    heading: 'Projetos pessoais',
    intro: 'Feitos fora do trabalho. Não são experiência profissional.',
    items: {
      'mfe-communication':
        'Plataforma de administração escolar construída como cinco micro-frontends implantáveis de forma independente (Module Federation, Vite, React, TypeScript), com contrato de eventos de domínio versionado via WebSocket e quality gates no CI.',
      'secretaria-backend':
        'API em Go com arquitetura hexagonal e MariaDB, autenticação OIDC/JWKS com Supabase, autorização por escopo, rate limiting, ADRs e revisão de segurança.',
    },
  },
  skills: {
    heading: 'Competências e formação',
    groups: [
      {
        label: 'Front-end',
        items: [
          'React',
          'TypeScript',
          'JavaScript',
          'Next.js',
          'Redux Toolkit',
          'Redux Saga',
          'i18n',
        ],
      },
      {
        label: 'Arquitetura',
        items: [
          'Micro-frontends (módulos remotos)',
          'Webpack Module Federation',
          'Rollouts com feature flags',
        ],
      },
      { label: 'Testes', items: ['Jest', 'Cypress'] },
      {
        label: 'Back-end',
        items: [
          'Node.js (BFFs)',
          'REST',
          'Go (contribuições em APIs existentes)',
          'Migrations SQL',
        ],
      },
      {
        label: 'Observabilidade',
        items: ['Datadog', 'New Relic', 'Grafana', 'Kibana', 'Splunk', 'Sentry'],
      },
      {
        label: 'Desenvolvimento com IA',
        items: [
          'Claude Code',
          'Cursor',
          'Codex',
          'GitHub Copilot',
          'Spec-Driven Development',
          'MCP',
          'Skills de IA próprias',
        ],
      },
      {
        label: 'Produto e design',
        items: [
          'Handoff no Figma',
          'Design System da empresa (componentes e tokens)',
          'Storybook',
          'Bibliotecas de componentes',
          'Levantamento de requisitos',
        ],
      },
      {
        label: 'Forma de trabalho e documentação',
        items: [
          'Kanban',
          'Docfy (documentação de projetos)',
          'Com e sem times dedicados de UX, design e produto',
        ],
      },
      {
        label: 'Uso anterior ou pessoal',
        items: [
          'Docker, Kubernetes e CI/CD com Jenkins (na Invillia)',
          'Vite, Go e MariaDB (projetos pessoais)',
        ],
      },
    ],
    languages: {
      label: 'Idiomas',
      value:
        'Português (nativo), Inglês (intermediário, documentação técnica), Espanhol (profissional, usado no trabalho)',
    },
    education: {
      label: 'Formação',
      value: 'Tecnólogo em Análise e Desenvolvimento de Sistemas, Fatec Taquaritinga, 2011–2014',
    },
  },
  contact: {
    heading: 'Contato',
    lede: 'Procuro uma vaga sênior de front-end 100% remota. O jeito mais rápido de falar comigo é por e-mail.',
    location: 'Baseado em Taquaritinga, SP, Brasil.',
  },
};
