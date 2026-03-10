/* ═══════════════════════════════════
   AREA DATA — Conteúdo profissional revisado
═══════════════════════════════════ */
const AREAS=[
{
  num:'Área 01', name:'Direito Empresarial', short:'Contratos · M&A · Governança',
  color:'#4A9EFF', colorBg:'rgba(74,158,255,.1)', colorBorder:'rgba(74,158,255,.25)',
  icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2.5"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M12 12v4"/><path d="M8 14h8"/></svg>`,
  desc:'Prestamos assessoria jurídica empresarial com foco em resultados práticos para o negócio. Desde a abertura da empresa até contratos de maior complexidade, nossa equipe atua de forma próxima ao cliente, entendendo o contexto antes de propor qualquer solução. Trabalhamos com pequenas e médias empresas que precisam de suporte jurídico confiável e acessível.',
  quote:'"Entendemos que cada empresa é única. Nosso trabalho começa muito antes do problema aparecer."',
  tags:['Contratos Empresariais','Societário','Compliance','Abertura de Empresa','Recuperação','Governança','LGPD','Due Diligence'],
  svcs:['Abertura e regularização de empresas','Contratos comerciais e empresariais','Reestruturação societária','Assessoria em recuperação extrajudicial','Implementação de compliance básico','Adequação à LGPD','Revisão e negociação de contratos','Planejamento sucessório empresarial'],
  stats:[{n:'38',l:'Empresas atendidas'},{n:'R$ 12M',l:'Em contratos estruturados'},{n:'91%',l:'Taxa de êxito'},{n:'3',l:'Advogados na área'},{n:'4 anos',l:'De atuação'},{n:'Goiânia',l:'Sede principal'}],
  sd:'Escritório jovem com foco em empresas de pequeno e médio porte. Construímos nossa reputação na transparência e proximidade com o cliente.',
  faqs:[
    {q:'Quanto tempo leva abrir uma empresa do zero?',a:'Dependendo do município e atividade, entre 5 e 20 dias úteis. Cuidamos de todo o processo: elaboração do contrato social, registro na Junta Comercial, CNPJ, alvará e inscrições estaduais e municipais quando necessário.'},
    {q:'Quando é necessário formalizar um acordo de sócios?',a:'Sempre que houver mais de um sócio. O acordo de sócios previne conflitos ao definir regras claras de gestão, distribuição de lucros, saída de sócios e tomada de decisões estratégicas. Recomendamos fazê-lo na abertura da empresa, não depois do primeiro conflito.'},
    {q:'Como a LGPD afeta pequenas empresas?',a:'Toda empresa que coleta dados pessoais — mesmo um simples cadastro de clientes — está sujeita à LGPD. As penalidades chegam a 2% do faturamento. Ajudamos a mapear os dados tratados, elaborar políticas de privacidade e adequar contratos com fornecedores e colaboradores.'},
  ],
  casos:[
    {badge:'Societário',ano:'2023',cliente:'Distribuidora regional',tribunal:'Extrajudicial',titulo:'Reestruturação de cotas e entrada de sócio investidor',resumo:'Cliente buscou assessoria para restructurar o quadro societário e formalizar a entrada de um investidor-anjo. Elaboramos um acordo de acionistas completo, revisamos o contrato social e estruturamos a cláusula de vesting para os fundadores, protegendo o controle da empresa durante o período de investimento.',resultado:'Entrada do investidor concluída em 22 dias, sem disputas societárias posteriores'},
    {badge:'Contratos',ano:'2024',cliente:'Empresa de tecnologia — SaaS',tribunal:'Extrajudicial',titulo:'Revisão e padronização de contratos B2B',resumo:'Empresa de software com contratos despadronizados e cláusulas de responsabilidade inadequadas. Revisamos todo o portfólio de contratos de clientes, criamos um modelo escalável com limitação de responsabilidade, SLA e proteção de dados conforme a LGPD, além de um fluxo de aprovação interno.',resultado:'Redução de 60% no tempo de fechamento de contratos e zero disputas contratuais em 8 meses'},
    {badge:'Recuperação',ano:'2024',cliente:'Comércio varejista — Goiânia',tribunal:'1ª Vara Empresarial — TJGO',titulo:'Recuperação extrajudicial com credores bancários',resumo:'Varejista com passivo bancário de R$ 1,8M e risco de falência. Negociamos diretamente com dois credores financeiros a reestruturação da dívida com carência de 6 meses e desconto nos juros. Evitamos a via judicial e mantivemos a empresa em operação durante todo o processo.',resultado:'Acordo firmado com redução de 35% nos encargos e prazo de 48 meses para quitação'},
  ],
},
{
  num:'Área 02', name:'Direito Trabalhista', short:'CLT · Relações Coletivas · Auditoria',
  color:'#FF7B54', colorBg:'rgba(255,123,84,.1)', colorBorder:'rgba(255,123,84,.25)',
  icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  desc:'Atuamos na defesa de empresas e trabalhadores em reclamações trabalhistas e na assessoria preventiva para redução de passivo. Para empresas, nosso foco é identificar vulnerabilidades antes que virem processos. Para trabalhadores, garantimos que os direitos sejam reconhecidos de forma justa.',
  quote:'"Passivo trabalhista cresce silenciosamente. Detectar e corrigir antes de uma fiscalização ou ação é o melhor caminho."',
  tags:['Reclamações Trabalhistas','Auditoria Preventiva','Acordos Extrajudiciais','Demissões','Reforma Trabalhista','Teletrabalho','Hora Extra','Assédio Moral'],
  svcs:['Defesa em reclamações trabalhistas','Auditoria trabalhista preventiva','Negociação de rescisões','Elaboração de contratos de trabalho','Assessoria em demissões coletivas','Consultoria em teletrabalho e banco de horas','Regulamento interno e código de conduta','Orientação a trabalhadores sobre direitos'],
  stats:[{n:'74',l:'Reclamações geridas'},{n:'68%',l:'Resolução extrajudicial'},{n:'R$ 320k',l:'Em passivos evitados'},{n:'2',l:'Especialistas trabalhistas'},{n:'4 anos',l:'De atuação'},{n:'TRT-18',l:'Tribunal de referência'}],
  sd:'Atuamos principalmente no TRT da 18ª Região (GO/TO) com foco em acordos extrajudiciais e auditorias preventivas para pequenas e médias empresas.',
  faqs:[
    {q:'Quais os principais riscos trabalhistas para pequenas empresas?',a:'Contrato de trabalho mal redigido, banco de horas sem acordo coletivo, pagamento de horas extras sem controle de ponto, ausência de registro de empregado e confusão entre CLT e contrato de prestação de serviços são os mais comuns. Uma auditoria preventiva identifica e corrige esses pontos antes que virem ações.'},
    {q:'Vale a pena fazer acordo na Justiça do Trabalho?',a:'Na maioria dos casos, sim. Acordos homologados na Justiça do Trabalho extinguem o processo com quitação das verbas negociadas, evitando o risco de uma condenação maior e anos de recurso. Analisamos cada caso para indicar se o acordo é vantajoso e qual o limite razoável de negociação.'},
    {q:'Empregado demitido pode contestar o valor das verbas rescisórias?',a:'Sim. O trabalhador tem 2 anos após a extinção do contrato para ingressar com reclamação trabalhista. Se houver divergência nos valores, podemos revisar os cálculos, verificar a regularidade da rescisão e orientar sobre a viabilidade de contestação judicial ou extrajudicial.'},
  ],
  casos:[
    {badge:'Defesa Empresarial',ano:'2023',cliente:'Clínica odontológica — 12 funcionários',tribunal:'1ª Vara do Trabalho — Goiânia',titulo:'Defesa em reclamação com pedido de vínculo e verbas rescisórias',resumo:'Dentista colaboradora ingressou com reclamação pedindo reconhecimento de vínculo empregatício e pagamento de FGTS, 13º e férias dos últimos 3 anos. Levantamos documentos que comprovavam a natureza autônoma da relação e a ausência de subordinação. Audiência de instrução com oitiva de 3 testemunhas.',resultado:'Sentença favorável à clínica: vínculo não reconhecido e pedidos julgados improcedentes'},
    {badge:'Acordo Extrajudicial',ano:'2024',cliente:'Construtora — 28 funcionários',tribunal:'Extrajudicial / CEJUSC-TRT',titulo:'Negociação de rescisões em encerramento de obra',resumo:'Construtora precisava encerrar contrato de 28 trabalhadores ao fim de uma obra. Calculamos todas as verbas rescisórias, identificamos 4 situações de risco de ação futura e negociamos individualmente com os trabalhadores, incluindo quitação ampla homologada no CEJUSC do TRT.',resultado:'Zero ações trabalhistas após 12 meses do encerramento, quitação homologada em 100% dos casos'},
    {badge:'Auditoria Preventiva',ano:'2024',cliente:'Rede de franquias — 3 unidades',tribunal:'Consultoria preventiva',titulo:'Auditoria e adequação trabalhista em rede de alimentação',resumo:'Franqueado com 3 unidades e 40 colaboradores apresentava irregularidades em contratos, banco de horas e jornada de trabalho. Realizamos auditoria completa, identificamos 11 pontos de risco e entregamos um plano de ação por prioridade. Acompanhamos a implementação ao longo de 90 dias.',resultado:'Passivo estimado de R$ 180k mitigado antes de qualquer fiscalização ou ação'},
  ],
},
{
  num:'Área 03', name:'Direito Civil e Família', short:'Sucessões · Patrimônio · Contratos',
  color:'#A78BFA', colorBg:'rgba(167,139,250,.1)', colorBorder:'rgba(167,139,250,.25)',
  icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  desc:'Cuidamos das questões jurídicas que mais impactam a vida das famílias: separações, inventários, guarda de filhos e organização do patrimônio. Trabalhamos com empatia, tentando sempre encontrar soluções consensuais antes de partir para o litígio. Quando a disputa é inevitável, defendemos com firmeza.',
  quote:'"Questões de família exigem tanto técnica jurídica quanto sensibilidade humana. Trabalhamos com as duas."',
  tags:['Divórcio','Guarda e Alimentos','Inventário','Holding Familiar','Contratos','Responsabilidade Civil','Consumidor','Usucapião'],
  svcs:['Divórcio consensual e litigioso','Regulamentação de guarda e alimentos','Revisão de alimentos','Inventário extrajudicial e judicial','Constituição de holding familiar','Elaboração de testamentos','Contratos de compra, venda e locação','Ações de indenização e reparação de danos'],
  stats:[{n:'52',l:'Casos de família'},{n:'71%',l:'Resolvidos sem litígio'},{n:'R$ 4,2M',l:'Patrimônio inventariado'},{n:'2',l:'Especialistas na área'},{n:'4 anos',l:'De atuação'},{n:'TJGO',l:'Tribunal de referência'}],
  sd:'Mais de 70% dos casos de família foram resolvidos sem necessidade de ação judicial, priorizando acordos que preservam os vínculos familiares.',
  faqs:[
    {q:'Quando vale a pena constituir uma holding familiar?',a:'Quando a família possui patrimônio relevante em imóveis ou participações societárias. A holding pode reduzir significativamente o custo da sucessão, organizar a gestão dos bens e proteger o patrimônio de credores pessoais dos sócios. O ideal é constituí-la enquanto os titulares estão em plena capacidade civil.'},
    {q:'É possível fazer inventário sem ir à Justiça?',a:'Sim. O inventário extrajudicial é feito em cartório quando todos os herdeiros são maiores, capazes e concordam com a partilha, e não há testamento. É muito mais rápido (30 a 90 dias) e econômico que o judicial. Assessoramos desde a organização dos documentos até a lavratura da escritura.'},
    {q:'Como funciona a guarda compartilhada na prática?',a:'A guarda compartilhada significa que ambos os pais têm responsabilidade conjunta nas decisões sobre educação, saúde e bem-estar dos filhos, independente de onde a criança reside. O acordo deve definir a residência de referência, a rotina de convivência e os critérios para decisões importantes. Orientamos os pais para que o acordo priorize o interesse dos filhos.'},
  ],
  casos:[
    {badge:'Inventário',ano:'2023',cliente:'Família — 3 herdeiros',tribunal:'1º Tabelionato — Goiânia',titulo:'Inventário extrajudicial com imóvel rural e urban',resumo:'Família com 3 filhos maiores e herdeiros precisava inventariar 2 imóveis (um rural e um apartamento) após falecimento do pai. Organizamos toda a documentação, realizamos a regularização pendente do imóvel rural e conduzimos o processo em cartório com a partilha acordada entre os herdeiros.',resultado:'Escritura de inventário lavrada em 47 dias, sem nenhuma ação judicial'},
    {badge:'Divórcio Litigioso',ano:'2023',cliente:'Cliente — nome preservado',tribunal:'2ª Vara de Família — Goiânia',titulo:'Divórcio com disputa de guarda e partilha de empresa',resumo:'Cliente buscou o escritório após separação com conflito sobre guarda dos filhos e partilha de cotas de uma empresa familiar. Conduzimos a ação de divórcio e a ação de reconhecimento e dissolução de sociedade de fato, obtendo guarda compartilhada e reconhecimento da participação da cliente nos ativos societários.',resultado:'Guarda compartilhada decretada, cliente reconhecida como titular de 50% das cotas'},
    {badge:'Holding Familiar',ano:'2024',cliente:'Casal empresário — Goiânia',tribunal:'Cartório + Junta Comercial',titulo:'Constituição de holding para organização patrimonial',resumo:'Casal com 4 imóveis e participação em 2 empresas buscou organizar o patrimônio antes de iniciar o planejamento sucessório. Constituímos a holding familiar, transferimos os imóveis para a pessoa jurídica com planejamento tributário e elaboramos o acordo de cotistas com cláusulas de proteção patrimonial.',resultado:'Redução estimada de 40% no custo successório e proteção contra credores individuais'},
  ],
},
{
  num:'Área 04', name:'Direito Tributário', short:'Planejamento · Defesa · Créditos',
  color:'#34D399', colorBg:'rgba(52,211,153,.1)', colorBorder:'rgba(52,211,153,.25)',
  icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  desc:'Ajudamos empresas a pagar menos tributos dentro da lei e a se defender quando o Fisco autua de forma indevida. Nossa atuação é direta e objetiva: analisamos a situação real, apontamos onde existe oportunidade de economia ou recuperação de crédito, e acompanhamos a execução com transparência.',
  quote:'"Pagar tributo é uma obrigação. Pagar mais do que o devido, não. Cada empresa tem oportunidades concretas que ainda não foram mapeadas."',
  tags:['Planejamento Tributário','CARF','Recuperação de Créditos','ICMS','ISS','Simples Nacional','Reforma Tributária','PIS/COFINS'],
  svcs:['Planejamento tributário para PMEs','Defesa em autuações fiscais','Recuperação de tributos pagos a maior','Consultoria no Simples Nacional','Orientação na reforma tributária','Parcelamentos de débitos fiscais','Revisão de obrigações acessórias','Impugnação de autos de infração'],
  stats:[{n:'29',l:'Empresas assessoradas'},{n:'78%',l:'De êxito nas defesas'},{n:'R$ 890k',l:'Em créditos recuperados'},{n:'2',l:'Tributaristas'},{n:'4 anos',l:'De atuação'},{n:'SEFAZ/GO',l:'Fisco de referência'}],
  sd:'Foco em pequenas e médias empresas no Simples Nacional e no Lucro Presumido, com histórico crescente de recuperações tributárias bem-sucedidas.',
  faqs:[
    {q:'Como sei se minha empresa está pagando tributos corretamente?',a:'Na maioria das vezes, não há como saber sem uma revisão fiscal detalhada. Erros no enquadramento tributário, uso incorreto de alíquotas e obrigações acessórias preenchidas de forma equivocada são muito comuns. Realizamos uma análise dos últimos 5 anos para identificar tanto pagamentos a maior quanto riscos de autuação.'},
    {q:'O Simples Nacional é sempre a melhor opção?',a:'Não necessariamente. Depende da atividade, do faturamento, da margem de lucro e da folha de pagamento. Em alguns casos, o Lucro Presumido ou até o Lucro Real resultam em carga tributária menor. Fazemos o comparativo antes de qualquer recomendação.'},
    {q:'O que acontece se a empresa receber um auto de infração?',a:'Há prazo de 30 dias para impugnar administrativamente, sem necessidade de pagar. A impugnação bem fundamentada pode cancelar ou reduzir significativamente o valor do auto. Não pague antes de consultar um especialista — muitos autos têm vícios formais ou materiais que tornam a impugnação viável.'},
  ],
  casos:[
    {badge:'Recuperação de Crédito',ano:'2023',cliente:'Transportadora — Simples Nacional',tribunal:'Receita Federal — DRF Goiânia',titulo:'Identificação e recuperação de PIS/COFINS pago a maior',resumo:'Transportadora enquadrada no Simples Nacional havia migrado para o Lucro Presumido sem revisão das guias de PIS/COFINS. Identificamos recolhimentos indevidos nos 5 anos anteriores. Apresentamos o pedido de restituição com a documentação correta e acompanhamos todo o processo junto à Receita.',resultado:'R$ 68 mil restituídos em 6 meses, integralmente corrigidos pela Selic'},
    {badge:'Defesa Fiscal',ano:'2024',cliente:'Comércio de materiais de construção',tribunal:'SEFAZ/GO — DRT Goiânia',titulo:'Impugnação de auto de infração por diferença de ICMS',resumo:'Cliente recebeu auto de infração de R$ 142k por suposta diferença de ICMS em operações interestaduais. Analisamos os documentos fiscais, identificamos que parte dos produtos tinham alíquota diferenciada prevista em convênio ICMS e preparamos a impugnação com base na legislação específica.',resultado:'Auto reduzido em 61% após julgamento na 1ª instância administrativa'},
    {badge:'Planejamento Tributário',ano:'2024',cliente:'Clínica médica — Lucro Presumido',tribunal:'Consultoria preventiva',titulo:'Revisão de enquadramento tributário e redução de carga fiscal',resumo:'Clínica médica com 4 sócios tributada no Lucro Presumido. Revisamos o faturamento, a composição de receitas e os serviços prestados. Identificamos que parte das receitas se qualificava como atividade hospitalar, com alíquota de IRPJ diferenciada, e que havia possibilidade de segregação de atividades.',resultado:'Redução de R$ 28k/ano na carga tributária sem alteração da estrutura societária'},
  ],
},
{
  num:'Área 05', name:'Direito Imobiliário', short:'Incorporação · Locação · Due Diligence',
  color:'#F59E0B', colorBg:'rgba(245,158,11,.1)', colorBorder:'rgba(245,158,11,.25)',
  icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  desc:'Assessoramos compradores, vendedores, locadores e investidores imobiliários para que cada transação seja segura do ponto de vista jurídico. Realizamos análise completa da documentação antes de qualquer negócio e acompanhamos a formalização até o registro em cartório, sem deixar pontas soltas.',
  quote:'"Um imóvel mal documentado pode se tornar um problema por décadas. Nossa função é garantir que isso nunca aconteça com nossos clientes."',
  tags:['Compra e Venda','Due Diligence','Locação Comercial','Contratos de Imóveis','Regularização','Financiamento','Usucapião','Distrato'],
  svcs:['Due diligence jurídica completa','Contratos de compra, venda e permuta','Assessoria em locações comerciais e residenciais','Ações de despejo e revisional','Regularização de imóveis e documentação','Distrato e resilição de contratos de incorporação','Usucapião extrajudicial','Assessoria em financiamentos imobiliários'],
  stats:[{n:'83',l:'Transações assessoradas'},{n:'R$ 28M',l:'Em imóveis negociados'},{n:'0',l:'Fraudes documentais'},{n:'2',l:'Especialistas'},{n:'4 anos',l:'De atuação'},{n:'TJGO',l:'Tribunal de referência'}],
  sd:'Desde a fundação, realizamos a due diligence de todos os imóveis com o mesmo rigor, independente do valor da transação. Nenhum cliente teve problema documental após o fechamento.',
  faqs:[
    {q:'O que analisar antes de comprar um imóvel?',a:'Certidão de matrícula atualizada, certidões negativas de débitos fiscais do imóvel e do vendedor, verificação de ações judiciais, conformidade com o zoneamento municipal e histórico de transferências. Realizamos toda essa análise em até 10 dias úteis e entregamos um relatório claro sobre os riscos encontrados.'},
    {q:'Como funciona o distrato em imóvel na planta?',a:'A Lei 13.786/2018 regula os distratos com incorporadoras. Em geral, o comprador tem direito à restituição de 75% a 85% dos valores pagos. Mas dependendo das cláusulas do contrato e da situação da obra, é possível negociar condições melhores ou até buscar rescisão por inadimplemento da incorporadora.'},
    {q:'Posso fazer uma locação comercial sem advogado?',a:'Tecnicamente sim, mas não recomendamos. Contratos de locação comercial envolvem valores altos, prazos longos e cláusulas que podem gerar litígios sérios. Um contrato bem elaborado define com precisão: responsabilidades por obras, índice de reajuste, garantias, vigência, renovação e penalidades. O custo da assessoria é irrelevante diante do risco de um contrato mal feito.'},
  ],
  casos:[
    {badge:'Due Diligence',ano:'2023',cliente:'Investidor — aquisição comercial',tribunal:'Cartório de Imóveis — Goiânia',titulo:'Identificação de hipoteca oculta em imóvel comercial',resumo:'Investidor estava prestes a fechar a compra de uma sala comercial por R$ 420k. Durante a due diligence, identificamos na matrícula uma hipoteca bancária extinta porém sem baixa formal, e uma ação de cobrança em nome do vendedor. Paralisamos a negociação, notificamos o vendedor e obtivemos a baixa e a quitação da ação como condição de fechamento.',resultado:'Comprador protegido de vício que poderia levar à perda do imóvel'},
    {badge:'Despejo',ano:'2023',cliente:'Proprietária — sala comercial',tribunal:'8ª Vara Cível — Goiânia',titulo:'Ação de despejo por falta de pagamento com liminar',resumo:'Locatária de sala comercial acumulou 4 meses de aluguel sem pagar e não respondia às notificações. Ingressamos com ação de despejo pelo rito especial da Lei 8.245/91, obtendo liminar de desocupação em 15 dias. A locatária desocupou voluntariamente após a citação, evitando o cumprimento forçado.',resultado:'Imóvel retomado em 32 dias, sem necessidade de intervenção do oficial de justiça'},
    {badge:'Regularização',ano:'2024',cliente:'Família — imóvel rural',tribunal:'INCRA + Cartório',titulo:'Regularização fundiária de imóvel rural sem escritura',resumo:'Família ocupava há 18 anos uma chácara de 2 alqueires sem documentação formal. Levantamos toda a cadeia possessória, obtivemos certidões do INCRA, ajuizamos ação de usucapião extrajudicial com anuência dos confrontantes e acompanhamos o processo até o registro da escritura em nome da família.',resultado:'Escritura de usucapião registrada após 8 meses de processo extrajudicial'},
  ],
},
{
  num:'Área 06', name:'Direito Penal Estratégico', short:'Crimes Empresariais · HC · Investigação',
  color:'#F87171', colorBg:'rgba(248,113,113,.1)', colorBorder:'rgba(248,113,113,.25)',
  icon:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  desc:'Defendemos empresários, executivos e profissionais em investigações e ações penais que envolvem crimes econômicos, tributários e empresariais. Nossa atuação é discreta, estratégica e focada no resultado. Conhecemos os procedimentos do GAECO, da Receita Federal e do Ministério Público, e sabemos como construir uma defesa eficaz desde o início.',
  quote:'"Em direito penal, o timing da defesa define o resultado. Chegar cedo no processo é a diferença entre uma solução e um problema de anos."',
  tags:['Crimes Empresariais','Crimes Tributários','Estelionato','Habeas Corpus','Investigação Defensiva','ANPP','Recursos','Sigilo Total'],
  svcs:['Defesa em inquéritos policiais e TCO','Crimes contra a ordem tributária','Estelionato e fraudes empresariais','Impetração de habeas corpus','Análise de termos de colaboração','Acordos de não persecução penal (ANPP)','Recursos para TJ, STJ e STF','Investigação defensiva'],
  stats:[{n:'21',l:'Casos penais'},{n:'81%',l:'De êxito nas defesas'},{n:'8',l:'Habeas corpus impetrados'},{n:'2',l:'Criminalistas'},{n:'4 anos',l:'De atuação'},{n:'TJGO/TRF1',l:'Tribunais de atuação'}],
  sd:'Escritório pequeno e especializado, com foco em crimes econômicos. A discrição e o sigilo absoluto são inegociáveis em todos os casos que atendemos.',
  faqs:[
    {q:'Quando devo contratar um advogado criminal?',a:'O quanto antes. Idealmente antes de qualquer depoimento ou intimação policial. Muitos erros processuais que comprometem a defesa ocorrem justamente nessa fase inicial, quando a pessoa ainda acredita que pode esclarecer tudo sozinha. A presença de advogado desde o inquérito é um direito constitucional e uma necessidade estratégica.'},
    {q:'O que é um Acordo de Não Persecução Penal?',a:'O ANPP é um acordo entre o Ministério Público e o investigado, homologado pelo juiz, que evita o oferecimento de denúncia. É possível quando o crime tem pena mínima inferior a 4 anos, não há violência ou grave ameaça, e o investigado confessa e aceita cumprir condições como reparação do dano e prestação de serviços. Avaliamos a viabilidade em cada caso.'},
    {q:'Como funciona o sigilo nos casos criminais?',a:'Todos os casos são tratados com sigilo absoluto. Não divulgamos nomes de clientes, detalhes de casos ou estratégias de defesa. Em casos sensíveis, utilizamos canais de comunicação seguros e reuniões presenciais. O sigilo profissional do advogado é protegido constitucionalmente e é um valor inegociável do nosso escritório.'},
  ],
  casos:[
    {badge:'Habeas Corpus',ano:'2023',cliente:'Empresário — setor de construção',tribunal:'TJGO — 2ª Câmara Criminal',titulo:'HC preventivo em investigação por fraude em licitação',resumo:'Cliente alvo de inquérito policial por suposta fraude em processo licitatório municipal. Com base na análise dos autos, identificamos que o indiciamento era iminente e que havia risco concreto de prisão preventiva. Impetramos HC preventivo no TJGO com pedido de salvo-conduto, documentando a ausência dos requisitos da custódia cautelar.',resultado:'HC concedido — salvo-conduto expedido, cliente nunca preso durante toda a investigação'},
    {badge:'Crime Tributário',ano:'2024',cliente:'Sócio de empresa — omissão de receitas',tribunal:'Justiça Federal — 1ª Vara Criminal Goiânia',titulo:'Defesa em ação penal por crime contra a ordem tributária',resumo:'Cliente denunciado pelo MPF por supressão de tributos federais com base em autuação da Receita Federal. Paralelamente à defesa criminal, orientamos o parcelamento integral do débito tributário, o que extinguiu a punibilidade antes da sentença.',resultado:'Extinção da punibilidade declarada pelo juiz federal — processo arquivado'},
    {badge:'ANPP',ano:'2024',cliente:'Gerente bancário — estelionato',tribunal:'MP/GO + 3ª Vara Criminal — Goiânia',titulo:'Negociação de Acordo de Não Persecução Penal',resumo:'Cliente acusado de estelionato praticado no exercício da função em agência bancária. Identificamos que o caso reunia os requisitos legais para o ANPP e negociamos diretamente com o MP/GO, incluindo reparação do dano e prestação de serviços à comunidade.',resultado:'ANPP homologado — cliente sem condenação criminal e com pena extinta após cumprimento'},
  ]
},
];

/* zone positions */
const POS=[
  {cx:25,cy:27},{cx:76,cy:22},
  {cx:15,cy:60},{cx:85,cy:57},
  {cx:36,cy:79},{cx:65,cy:77}
];
const CONNS=[[0,1],[0,2],[1,3],[2,4],[3,5],[4,5],[1,2],[0,3]];


/* ── DEVICE TIER ── */
const isLowEnd = (
  navigator.hardwareConcurrency <= 2 ||
  navigator.deviceMemory <= 2 ||
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
);
const particleCount = isLowEnd ? 18 : 50;
const orbCount      = isLowEnd ? 2  : 5;

/* ── CURSOR ── */
const curEl=document.getElementById('cur'),cring=document.querySelector('.cring');
if(isLowEnd){if(curEl)curEl.style.display='none';if(cring)cring.style.display='none';}
let mx=window.innerWidth/2,my=window.innerHeight/2,rx=mx,ry=my;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;if(curEl)curEl.style.left=mx+'px',curEl.style.top=my+'px';if(typeof mouse!=='undefined'){mouse.x=mx;mouse.y=my;}},{passive:true});
// cursor ring merged into canvas loop
function hov(el){el.addEventListener('mouseenter',()=>document.body.classList.add('hov'));el.addEventListener('mouseleave',()=>document.body.classList.remove('hov'));}

/* ── CANVAS ── */
(function(){
  const c=document.getElementById('cv'),x=c.getContext('2d',{alpha:false});
  let W,H;const rsz=()=>{W=c.width=innerWidth;H=c.height=innerHeight;};rsz();addEventListener('resize',rsz,{passive:true});
  const pts=Array.from({length:particleCount},()=>({x:Math.random(),y:Math.random(),vx:(Math.random()-.5)*.000052,vy:(Math.random()-.5)*.000052,r:Math.random()*1.3+.3,a:Math.random()*.32+.07}));
  const _allOrbs=[{x:.2,y:.22,sz:.7,c:'201,168,76',s:.000088,p:0},{x:.8,y:.68,sz:.62,c:'160,120,50',s:.000068,p:2.2},{x:.5,y:.48,sz:.46,c:'210,180,90',s:.000128,p:4},{x:.1,y:.75,sz:.34,c:'201,168,76',s:.00011,p:1},{x:.9,y:.15,sz:.4,c:'150,110,44',s:.0001,p:3.4}];
  const orbs=_allOrbs.slice(0,orbCount);
  let mouse={x:innerWidth/2,y:innerHeight/2};
  // mousemove merged into single listener above
  (function draw(ts){
    if(_rafPaused){requestAnimationFrame(draw);return;}
    x.clearRect(0,0,W,H);x.fillStyle='#0A0907';x.fillRect(0,0,W,H);
    orbs.forEach(o=>{
      const ox=(o.x+Math.sin(ts*o.s+o.p)*.1)*W,oy=(o.y+Math.cos(ts*o.s*.7+o.p)*.09)*H,rad=o.sz*Math.max(W,H);
      const g=x.createRadialGradient(ox,oy,0,ox,oy,rad);
      g.addColorStop(0,`rgba(${o.c},.11)`);g.addColorStop(.42,`rgba(${o.c},.03)`);g.addColorStop(1,'rgba(0,0,0,0)');
      x.fillStyle=g;x.fillRect(0,0,W,H);
    });
    const mg=x.createRadialGradient(mouse.x,mouse.y,0,mouse.x,mouse.y,240);
    mg.addColorStop(0,'rgba(201,168,76,.055)');mg.addColorStop(1,'rgba(0,0,0,0)');
    x.fillStyle=mg;x.fillRect(0,0,W,H);
    pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>1)p.vx*=-1;if(p.y<0||p.y>1)p.vy*=-1;x.beginPath();x.arc(p.x*W,p.y*H,p.r,0,Math.PI*2);x.fillStyle=`rgba(201,168,76,${p.a})`;x.fill();});
    const v=x.createRadialGradient(W/2,H/2,0,W/2,H/2,Math.max(W,H)*.8);
    v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,0,0,.7)');
    x.fillStyle=v;x.fillRect(0,0,W,H);
    // cursor ring update (merged loop)
    if(!isLowEnd&&cring){rx+=(mx-rx)*.14;ry+=(my-ry)*.14;cring.style.left=rx+'px';cring.style.top=ry+'px';}
    requestAnimationFrame(draw);
  })(0);
})();


/* ── PAGE VISIBILITY — pause canvas when hidden ── */
let _rafPaused = false;
document.addEventListener('visibilitychange', () => {
  _rafPaused = document.hidden;
});

/* ── BUILD MAP ── */
const mapWrap=document.getElementById('mapWrap');
const stage=document.getElementById('stage');
const N=AREAS.length;
function sW(){return stage.clientWidth;}
function sH(){return stage.clientHeight;}
function zp(i){return{x:POS[i].cx/100*sW(),y:POS[i].cy/100*sH()};}

AREAS.forEach((a,i)=>{
  const el=document.createElement('div');el.className='zone';el.id='z'+i;
  el.style.setProperty('--zc',a.color);
  el.innerHTML=`
    <div class="z-pulse" style="border-color:${a.color}22"></div>
    <div class="z-pulse2" style="border-color:${a.color}11"></div>
    <div class="z-dot" id="zdot${i}" style="border-color:${a.colorBorder}">${a.icon.replace('stroke="currentColor"',`stroke="${a.color}"`)}</div>
    <div class="z-card" id="zcard${i}">
      <div class="z-num">${a.num}</div>
      <div class="z-name">${a.name}</div>
      <div class="z-sub">${a.short}</div>
    </div>`;
  el.addEventListener('click',()=>{if(i===ci){openD(i);}else{goTo(i);}});
  hov(el);
  mapWrap.appendChild(el);
});

/* dots */
const bbDots=document.getElementById('bbDots');
AREAS.forEach((_,i)=>{
  const d=document.createElement('div');d.className='bd';
  d.style.cssText=`--dc:${AREAS[i].color}`;
  d.addEventListener('click',()=>goTo(i));
  bbDots.appendChild(d);
});
document.querySelectorAll('.bd.on').forEach(d=>{d.style.background=d.style.getPropertyValue('--dc');});

const dFdots=document.getElementById('dFdots');
AREAS.forEach((_,i)=>{const d=document.createElement('div');d.className='dfd';dFdots.appendChild(d);});

/* ── LINES ── */
function buildLines(){
  const svg=document.getElementById('connSvg');
  svg.setAttribute('width',sW());svg.setAttribute('height',sH());
  svg.innerHTML='';
  CONNS.forEach(([a,b])=>{
    const pa=zp(a),pb=zp(b);
    const line=document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1',pa.x);line.setAttribute('y1',pa.y);
    line.setAttribute('x2',pb.x);line.setAttribute('y2',pb.y);
    line.setAttribute('stroke','rgba(201,168,76,.06)');
    line.setAttribute('stroke-width','1');
    line.setAttribute('stroke-dasharray','4 10');
    svg.appendChild(line);
    const dot=document.createElementNS('http://www.w3.org/2000/svg','circle');
    dot.setAttribute('cx',(pa.x+pb.x)/2);dot.setAttribute('cy',(pa.y+pb.y)/2);
    dot.setAttribute('r','2');dot.setAttribute('fill','rgba(201,168,76,.1)');
    svg.appendChild(dot);
  });
}
function posZones(){AREAS.forEach((_,i)=>{const el=document.getElementById('z'+i),p=zp(i);el.style.left=p.x+'px';el.style.top=p.y+'px';});}

/* ── STATE ── */
let ci=0,isOv=false;

function zoomTo(idx){
  const sc=window.innerWidth<640?2:2.4;
  const p=zp(idx);
  const tx=sW()/2-p.x*sc,ty=sH()/2-p.y*sc;
  mapWrap.style.transformOrigin='0 0';
  mapWrap.style.transform=`translate(${tx}px,${ty}px) scale(${sc})`;
  isOv=false;
  document.getElementById('btnOv').classList.remove('on');
}
function zoomOut(){
  mapWrap.style.transformOrigin='center center';
  mapWrap.style.transform='none';
  isOv=true;
  AREAS.forEach((_,i)=>{document.getElementById('z'+i).classList.remove('dimmed');});
  document.getElementById('btnOv').classList.add('on');
}
function toggleOv(){if(isOv){zoomTo(ci);updateStates();}else{zoomOut();}}
function updateStates(){
  AREAS.forEach((_,i)=>{
    const el=document.getElementById('z'+i);
    const isActive=i===ci;
    el.classList.toggle('active',isActive);
    el.classList.toggle('dimmed',!isOv&&!isActive);
    // color active dot glow
    const dot=document.getElementById('zdot'+i);
    if(isActive){dot.style.boxShadow=`0 0 0 1px ${AREAS[i].colorBorder},0 8px 32px ${AREAS[i].color}33,0 0 60px ${AREAS[i].color}18,inset 0 1px 0 rgba(255,255,255,.07)`;}
    else{dot.style.boxShadow='';}
  });
  // update dots color
  document.querySelectorAll('.bd').forEach((d,i)=>{
    d.classList.toggle('on',i===ci);
    d.style.background=i===ci?AREAS[i].color:'rgba(201,168,76,.18)';
    d.style.boxShadow=i===ci?`0 0 8px ${AREAS[i].color}66`:'';
    d.style.width=i===ci?'34px':'18px';
  });
}
function goTo(idx){
  ci=((idx%N)+N)%N;
  isOv=false;
  updateStates();
  zoomTo(ci);
  document.getElementById('bbCnt').textContent=String(ci+1).padStart(2,'0')+' / '+String(N).padStart(2,'0');
  document.getElementById('bbArea').textContent=AREAS[ci].name;
  document.getElementById('bbArea').style.color=AREAS[ci].color;
  document.getElementById('btnOv').classList.remove('on');
}
function mv(d){goTo(ci+d);}

/* ── ENTER ── */
function enterSite(){
  document.getElementById('splash').classList.add('out');
  setTimeout(()=>{posZones();buildLines();document.querySelectorAll('a,button').forEach(hov);goTo(0);},700);
}

/* ── DETAIL ── */
let di=0;
function openD(idx){
  try{
  di=idx;const a=AREAS[idx];
  /* color the modal */
  document.getElementById('dBar').style.background=`linear-gradient(90deg,transparent,${a.color},transparent)`;
  document.getElementById('dIcoBox').innerHTML=a.icon.replace('stroke="currentColor"',`stroke="${a.color}"`);
  document.getElementById('dIcoBox').style.background=a.colorBg;
  document.getElementById('dIcoBox').style.border=`1px solid ${a.colorBorder}`;
  document.getElementById('dN').textContent=a.num;
  document.getElementById('dN').style.color=a.color;
  document.getElementById('dT').textContent=a.name;
  document.getElementById('dQ').style.borderColor=a.color;
  document.getElementById('dQ').textContent=a.quote;
  /* color service dots */
  document.querySelectorAll('.db-si-dot').forEach(d=>d.style.background=a.color);
  /* color stat numbers */
  document.querySelectorAll('.db-sn').forEach(d=>d.style.color=a.color);
  /* color cta buttons */
  ['dCmBtn','dCmBtn2','dCmBtn3','dCmBtn4'].forEach(id=>{
    const el=document.getElementById(id);
    if(el){el.style.background=a.color;el.style.color='#0A0907';}
  });
  document.getElementById('dDesc').textContent=a.desc;
  document.getElementById('dTags').innerHTML=a.tags.map(t=>`<span class="db-tag">${t}</span>`).join('');
  document.getElementById('dSvcs').innerHTML=a.svcs.map(s=>`<div class="db-si"><span class="db-si-dot" style="background:${a.color}"></span>${s}</div>`).join('');
  document.getElementById('dStats').innerHTML=a.stats.map(s=>`<div class="db-sb"><span class="db-sn" style="color:${a.color}">${s.n}</span><span class="db-sl">${s.l}</span></div>`).join('');
  document.getElementById('dSD').textContent=a.sd;
  // render casos
  document.getElementById('dCasos').innerHTML=a.casos.map(c=>`
    <div class="caso">
      <div class="caso-hd">
        <span class="caso-badge" style="color:${a.color};border-color:${a.colorBorder};background:${a.colorBg}">${c.badge}</span>
        <div class="caso-titulo">${c.titulo}</div>
      </div>
      <div class="caso-meta">
        <span class="caso-m">${c.ano}</span>
        <div class="caso-dot"></div>
        <span class="caso-m">${c.cliente}</span>
        <div class="caso-dot"></div>
        <span class="caso-m">${c.tribunal}</span>
      </div>
      <div class="caso-body">
        <p class="caso-resumo">${c.resumo}</p>
        <div class="caso-resultado">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="${a.color}" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          <span class="caso-r-label">Resultado —</span>
          <span class="caso-r-val">${c.resultado}</span>
        </div>
      </div>
    </div>`).join('');
  document.getElementById('dFaq').innerHTML=(a.faqs||[]).map((f,i)=>`<div class="fq" id="fq${i}"><button class="fq-q" onclick="tfq(${i})">${f.q}<span class="fq-arr">▾</span></button><div class="fq-a">${f.a}</div></div>`).join('');
  document.querySelectorAll('.dfd').forEach((d,i)=>{d.classList.toggle('on',i===idx);if(i===idx)d.style.background=a.color;else d.style.background='';});
  tab(0);
  document.getElementById('det').classList.add('show');
  }catch(e){console.error('openD error:',e);}
}
function closeD(){document.getElementById('det').classList.remove('show');}
function bgC(e){if(e.target===document.getElementById('det'))closeD();}
function navD(d){di=((di+d)%N+N)%N;goTo(di);openD(di);}
function tab(i){document.querySelectorAll('.db-tab').forEach((t,j)=>t.classList.toggle('on',j===i));document.querySelectorAll('.pn').forEach((p,j)=>p.classList.toggle('on',j===i));document.querySelector('.db-body').scrollTop=0;}
function tfq(i){document.getElementById('fq'+i).classList.toggle('op');}

/* ── KEYBOARD ── */
document.addEventListener('keydown',e=>{
  const det=document.getElementById('det');
  if(det.classList.contains('show')){if(e.key==='Escape')closeD();return;}
  if(e.key==='ArrowRight'||e.key==='ArrowDown')mv(1);
  else if(e.key==='ArrowLeft'||e.key==='ArrowUp')mv(-1);
  else if(e.key==='Enter'||e.key===' '){e.preventDefault();openD(ci);}
  else if(e.key==='Escape'){if(isOv)zoomTo(ci),updateStates();else zoomOut();}
});

/* ── TOUCH SWIPE ── */
let tx0=null;
stage.addEventListener('touchstart',e=>{tx0=e.touches[0].clientX;},{passive:true});
stage.addEventListener('touchend',e=>{
  if(tx0===null)return;
  const dx=e.changedTouches[0].clientX-tx0;
  if(Math.abs(dx)>44){mv(dx<0?1:-1);}
  tx0=null;
},{passive:true});

/* ── RESIZE ── */
let resizeTimer;
addEventListener('resize',()=>{
  clearTimeout(resizeTimer);
  resizeTimer=setTimeout(()=>{posZones();buildLines();if(!isOv)zoomTo(ci);},80);
},{passive:true});

/* ── CASOS CONSOLIDADOS ── */
const AREA_LABELS=['Empresarial','Trabalhista','Civil','Tributário','Imobiliário','Penal'];
function allCasos(){
  const out=[];
  AREAS.forEach((a,ai)=>{
    (a.casos||[]).forEach(c=>out.push({...c,area:AREA_LABELS[ai],color:a.color,colorBg:a.colorBg,colorBorder:a.colorBorder,areaIdx:ai}));
  });
  return out;
}
function casoHTML(c){
  return `<div class="caso" data-area="${c.area}">
    <div class="caso-hd">
      <span class="caso-badge" style="color:${c.color};border-color:${c.colorBorder};background:${c.colorBg}">${c.badge}</span>
      <div class="caso-titulo">${c.titulo}</div>
    </div>
    <div class="caso-meta">
      <span class="caso-m" style="color:${c.color};opacity:.8">${c.area}</span>
      <div class="caso-dot"></div>
      <span class="caso-m">${c.ano}</span>
      <div class="caso-dot"></div>
      <span class="caso-m">${c.tribunal}</span>
    </div>
    <div class="caso-body">
      <p class="caso-resumo">${c.resumo}</p>
      <div class="caso-resultado">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="${c.color}" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        <span class="caso-r-label">Resultado —</span>
        <span class="caso-r-val">${c.resultado}</span>
      </div>
    </div>
  </div>`;
}
let casosFilter='todos';
function renderAllCasos(){
  const list=allCasos();
  const filtered=casosFilter==='todos'?list:list.filter(c=>c.area===casosFilter);
  document.getElementById('ccList').innerHTML=filtered.map(casoHTML).join('');
  document.getElementById('ccCount').textContent=filtered.length+' '+(filtered.length===1?'caso':'casos');
}
function filterCasos(area,btn){
  casosFilter=area;
  document.querySelectorAll('.cc-ft').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  renderAllCasos();
}

/* ── PANELS ── */
let activePanel=null;
function openPanel(id){
  if(activePanel&&activePanel.id==='panel-'+id){closePanel();return;}
  closePanel();
  const el=document.getElementById('panel-'+id);
  if(!el)return;
  document.getElementById('panelOverlay').classList.add('show');
  el.classList.add('show');
  activePanel=el;
  if(id==='casos') renderAllCasos();
}
function closePanel(){
  if(activePanel){activePanel.classList.remove('show');activePanel=null;}
  document.getElementById('panelOverlay').classList.remove('show');
}