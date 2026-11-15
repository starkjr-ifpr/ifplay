# Roadmap do IFPlay

Mapa de todas as tasks do projeto, por fase, com as dependências entre elas.

## Como escolher uma task

1. Vá em **Issues** e filtre pela label **`pronta`** — são as tasks sem dependência aberta, que você pode pegar agora.
2. Escolha pelo nível: 🟢 `nível 1 · fácil` (primeira task) · 🟡 `nível 2 · médio` · 🔴 `nível 3 · difícil`.
3. Issues com **`bloqueada`** dependem de outra que ainda não terminou. A seção **🔗 Dependências** da issue diz qual. Quando a dependência for mergeada, o Tech Lead troca a label para `pronta`.
4. Siga o [Fluxo de desenvolvimento](../FLUXO%20DE%20DESENVOLVIMENTO.MD): se atribua → comente → branch → PR com `Closes #N`.

Links rápidos: [tasks prontas](https://github.com/starkjr-ifpr/ifplay/issues?q=is%3Aopen+label%3Apronta) · [prontas e fáceis](https://github.com/starkjr-ifpr/ifplay/issues?q=is%3Aopen+label%3Apronta+label%3A%22n%C3%ADvel+1+%C2%B7+f%C3%A1cil%22) · [milestones](https://github.com/starkjr-ifpr/ifplay/milestones)

> Contratos de API e nomes de tabelas: [modelo-de-dados.md](modelo-de-dados.md)


## F0 Sprint 0

| Issue | Task | Nível | Depende de |
|---|---|---|---|
| #1 | `FE01` Criar componente Button | 🟢 | — |
| #2 | `FE02` Criar componente Card | 🟢 | — |
| #3 | `FE03` Criar componente Input | 🟢 | — |
| #4 | `FE04` Criar componente Badge | 🟢 | — |
| #5 | `FE05` Página inicial (visual) | 🟢 | #1 |
| #6 | `FE06` Criar Header / navegação | 🟢 | — |
| #7 | `FE07` Criar Footer | 🟢 | — |
| #8 | `FE08` Página 404 | 🟢 | — |
| #9 | `FE09` Criar SongCard | 🟢 | #1, #2 |
| #10 | `FE10` Criar VotingCard | 🟢 | #1, #2, #4 |
| #12 | `BE02` GET /songs (estrutura routes → controller → service) | 🟢 | #16 |
| #16 | `BE06` Service de Song | 🟢 | #15 |
| #17 | `BE07` POST /songs | 🟢 | #12 |
| #18 | `BE08` GET /songs/:id | 🟢 | #12 |
| #19 | `BE09` DELETE /songs/:id | 🟢 | #12 |
| #20 | `BE10` Documentar a API de músicas | 🟢 | #17, #18, #19 |

```mermaid
flowchart LR
  FE01["#1 FE01<br/>Criar componente Button"]
  FE02["#2 FE02<br/>Criar componente Card"]
  FE03["#3 FE03<br/>Criar componente Input"]
  FE04["#4 FE04<br/>Criar componente Badge"]
  FE05["#5 FE05<br/>Página inicial (visual)"]
  FE06["#6 FE06<br/>Criar Header / navegação"]
  FE07["#7 FE07<br/>Criar Footer"]
  FE08["#8 FE08<br/>Página 404"]
  FE09["#9 FE09<br/>Criar SongCard"]
  FE10["#10 FE10<br/>Criar VotingCard"]
  BE02["#12 BE02<br/>GET /songs (estrutura routes → contr…"]
  BE06["#16 BE06<br/>Service de Song"]
  BE07["#17 BE07<br/>POST /songs"]
  BE08["#18 BE08<br/>GET /songs/:id"]
  BE09["#19 BE09<br/>DELETE /songs/:id"]
  BE10["#20 BE10<br/>Documentar a API de músicas"]
  FE01 --> FE05
  FE01 --> FE09
  FE02 --> FE09
  FE01 --> FE10
  FE02 --> FE10
  FE04 --> FE10
  BE06 --> BE02
  BE02 --> BE07
  BE02 --> BE08
  BE02 --> BE09
  BE07 --> BE10
  BE08 --> BE10
  BE09 --> BE10
  class FE08 ready
  class BE06 ready
  classDef ready fill:#d4f8d4,stroke:#2da44e
  classDef ext fill:#eee,stroke:#999,stroke-dasharray:3 3
```

<sub>Verde = pronta no momento da criação · cinza tracejado = issue de outra fase.</sub>

## F1 Fundação

| Issue | Task | Nível | Depende de |
|---|---|---|---|
| #31 | `INF01` CI: lint + build do frontend e backend em todo PR | 🟡 | — |
| #32 | `INF02` Prettier e convenções de código | 🟢 | — |
| #33 | `INF03` Configurar testes no backend (Vitest) + primeiro teste | 🟡 | — |
| #34 | `BE11` Tratamento global de erros | 🟡 | — |
| #35 | `DB01` Model User + migration | 🟢 | — |
| #37 | `BE12` Seed: admin padrão + músicas de exemplo | 🟢 | #35, #36 |
| #38 | `BE13` POST /auth/login (bcrypt + JWT) | 🟡 | #35 |
| #39 | `BE14` Middlewares authenticate e requireAdmin | 🟡 | #38 |
| #40 | `BE15` GET /auth/me | 🟢 | #39 |
| #41 | `FE11` Layout público (Header + Footer + Outlet) e rotas | 🟢 | #6, #7, #8 |
| #42 | `FE12` Componentes Select e Textarea | 🟢 | — |
| #43 | `FE13` Modal de confirmação | 🟡 | #1 |
| #44 | `FE14` Alert, Spinner e EmptyState | 🟢 | — |
| #45 | `FE15` Tabela genérica | 🟢 | — |
| #46 | `FE16` Página de Login | 🟡 | #1, #3, #38 |
| #47 | `FE17` AuthContext e rotas protegidas | 🟡 | #46, #40 |
| #48 | `FE18` Layout administrativo (sidebar) | 🟢 | #1 |

```mermaid
flowchart LR
  INF01["#31 INF01<br/>CI: lint + build do frontend e backe…"]
  INF02["#32 INF02<br/>Prettier e convenções de código"]
  INF03["#33 INF03<br/>Configurar testes no backend (Vitest…"]
  BE11["#34 BE11<br/>Tratamento global de erros"]
  DB01["#35 DB01<br/>Model User + migration"]
  BE12["#37 BE12<br/>Seed: admin padrão + músicas de exem…"]
  BE13["#38 BE13<br/>POST /auth/login (bcrypt + JWT)"]
  BE14["#39 BE14<br/>Middlewares authenticate e requireAd…"]
  BE15["#40 BE15<br/>GET /auth/me"]
  FE11["#41 FE11<br/>Layout público (Header + Footer + Ou…"]
  FE12["#42 FE12<br/>Componentes Select e Textarea"]
  FE13["#43 FE13<br/>Modal de confirmação"]
  FE14["#44 FE14<br/>Alert, Spinner e EmptyState"]
  FE15["#45 FE15<br/>Tabela genérica"]
  FE16["#46 FE16<br/>Página de Login"]
  FE17["#47 FE17<br/>AuthContext e rotas protegidas"]
  FE18["#48 FE18<br/>Layout administrativo (sidebar)"]
  DB10(["#36 DB10"]):::ext
  FE01(["#1 FE01"]):::ext
  FE03(["#3 FE03"]):::ext
  FE06(["#6 FE06"]):::ext
  FE07(["#7 FE07"]):::ext
  FE08(["#8 FE08"]):::ext
  DB01 --> BE12
  DB10 --> BE12
  DB01 --> BE13
  BE13 --> BE14
  BE14 --> BE15
  FE06 --> FE11
  FE07 --> FE11
  FE08 --> FE11
  FE01 --> FE13
  FE01 --> FE16
  FE03 --> FE16
  BE13 --> FE16
  FE16 --> FE17
  BE15 --> FE17
  FE01 --> FE18
  class INF01 ready
  class INF02 ready
  class INF03 ready
  class BE11 ready
  class DB01 ready
  class FE12 ready
  class FE14 ready
  class FE15 ready
  classDef ready fill:#d4f8d4,stroke:#2da44e
  classDef ext fill:#eee,stroke:#999,stroke-dasharray:3 3
```

<sub>Verde = pronta no momento da criação · cinza tracejado = issue de outra fase.</sub>

## F2 Votação & Sugestões

| Issue | Task | Nível | Depende de |
|---|---|---|---|
| #36 | `DB10` Ajustar model Song: artista opcional + link do YouTube | 🟢 | — |
| #49 | `BE20` Utilitário: validar link do YouTube e extrair o videoId | 🟢 | — |
| #50 | `DB11` Models Voting, VotingSong e Vote | 🟡 | #36 |
| #51 | `DB12` Model Suggestion (Caixa de Sugestões) | 🟢 | #50 |
| #52 | `BE21` POST /admin/votings — criar votação com regras de negócio | 🔴 | #50 |
| #53 | `BE22` Listar e detalhar votações (admin e histórico público) | 🟢 | #50 |
| #54 | `BE23` PUT /admin/votings/:id — editar votação | 🟡 | #52 |
| #55 | `BE24` DELETE /admin/votings/:id | 🟢 | #50 |
| #56 | `BE25` POST /admin/votings/:id/duplicate | 🟢 | #52 |
| #57 | `BE26` GET /votings/active — votação ativa (público) | 🟡 | #50 |
| #58 | `BE27` POST /votings/:id/votes — registrar votos | 🟡 | #50 |
| #59 | `BE28` POST /suggestions — sugerir música (votação atual ou Caixa) | 🔴 | #51, #49 |
| #60 | `BE29` Serviço de apuração closeVoting() | 🔴 | #51 |
| #61 | `BE30` Agendador: ativar e encerrar votações automaticamente | 🟡 | #60 |
| #62 | `BE31` Ao ativar: reservar vagas para a Caixa de Sugestões | 🔴 | #61 |
| #63 | `BE32` POST /admin/votings/:id/close — encerrar manualmente | 🟢 | #60 |
| #64 | `BE33` GET /votings/:id/results — resultado público | 🟢 | #60 |
| #65 | `BE34` Caixa de Sugestões: rotas administrativas | 🟡 | #51 |
| #66 | `FE20` Services e tipos TypeScript de votações e sugestões | 🟢 | — |
| #67 | `FE21` SongCard com miniatura do YouTube | 🟢 | #9 |
| #68 | `FE22` Página da votação ativa | 🟡 | #9, #44, #66, #57, #58 |
| #69 | `FE23` Página Sugerir música | 🟡 | #3, #42, #44, #66, #59 |
| #70 | `FE24` Página de resultado da votação | 🟡 | #44, #66, #64 |
| #71 | `FE25` Home com votação ativa e contagem regressiva | 🟡 | #5, #10, #66, #53, #57 |

```mermaid
flowchart LR
  DB10["#36 DB10<br/>Ajustar model Song: artista opcional…"]
  BE20["#49 BE20<br/>Utilitário: validar link do YouTube …"]
  DB11["#50 DB11<br/>Models Voting, VotingSong e Vote"]
  DB12["#51 DB12<br/>Model Suggestion (Caixa de Sugestões)"]
  BE21["#52 BE21<br/>POST /admin/votings — criar votação …"]
  BE22["#53 BE22<br/>Listar e detalhar votações (admin e …"]
  BE23["#54 BE23<br/>PUT /admin/votings/:id — editar vota…"]
  BE24["#55 BE24<br/>DELETE /admin/votings/:id"]
  BE25["#56 BE25<br/>POST /admin/votings/:id/duplicate"]
  BE26["#57 BE26<br/>GET /votings/active — votação ativa …"]
  BE27["#58 BE27<br/>POST /votings/:id/votes — registrar …"]
  BE28["#59 BE28<br/>POST /suggestions — sugerir música (…"]
  BE29["#60 BE29<br/>Serviço de apuração closeVoting()"]
  BE30["#61 BE30<br/>Agendador: ativar e encerrar votaçõe…"]
  BE31["#62 BE31<br/>Ao ativar: reservar vagas para a Cai…"]
  BE32["#63 BE32<br/>POST /admin/votings/:id/close — ence…"]
  BE33["#64 BE33<br/>GET /votings/:id/results — resultado…"]
  BE34["#65 BE34<br/>Caixa de Sugestões: rotas administra…"]
  FE20["#66 FE20<br/>Services e tipos TypeScript de votaç…"]
  FE21["#67 FE21<br/>SongCard com miniatura do YouTube"]
  FE22["#68 FE22<br/>Página da votação ativa"]
  FE23["#69 FE23<br/>Página Sugerir música"]
  FE24["#70 FE24<br/>Página de resultado da votação"]
  FE25["#71 FE25<br/>Home com votação ativa e contagem re…"]
  FE03(["#3 FE03"]):::ext
  FE05(["#5 FE05"]):::ext
  FE09(["#9 FE09"]):::ext
  FE10(["#10 FE10"]):::ext
  FE12(["#42 FE12"]):::ext
  FE14(["#44 FE14"]):::ext
  DB10 --> DB11
  DB11 --> DB12
  DB11 --> BE21
  DB11 --> BE22
  BE21 --> BE23
  DB11 --> BE24
  BE21 --> BE25
  DB11 --> BE26
  DB11 --> BE27
  DB12 --> BE28
  BE20 --> BE28
  DB12 --> BE29
  BE29 --> BE30
  BE30 --> BE31
  BE29 --> BE32
  BE29 --> BE33
  DB12 --> BE34
  FE09 --> FE21
  FE09 --> FE22
  FE14 --> FE22
  FE20 --> FE22
  BE26 --> FE22
  BE27 --> FE22
  FE03 --> FE23
  FE12 --> FE23
  FE14 --> FE23
  FE20 --> FE23
  BE28 --> FE23
  FE14 --> FE24
  FE20 --> FE24
  BE33 --> FE24
  FE05 --> FE25
  FE10 --> FE25
  FE20 --> FE25
  BE22 --> FE25
  BE26 --> FE25
  class DB10 ready
  class BE20 ready
  class FE20 ready
  classDef ready fill:#d4f8d4,stroke:#2da44e
  classDef ext fill:#eee,stroke:#999,stroke-dasharray:3 3
```

<sub>Verde = pronta no momento da criação · cinza tracejado = issue de outra fase.</sub>

## F3 Painel Admin

| Issue | Task | Nível | Depende de |
|---|---|---|---|
| #72 | `FE30` Admin: lista de votações | 🟡 | #4, #45, #48, #53 |
| #73 | `FE31` Admin: formulário de criar/editar votação | 🔴 | #3, #42, #48, #52, #54 |
| #74 | `FE32` Admin: duplicar, encerrar e excluir votação | 🟡 | #43, #72, #55, #56, #63 |
| #75 | `FE33` Admin: tela da Caixa de Sugestões | 🟡 | #4, #43, #45, #48, #65 |
| #76 | `BE35` Usuários: criar e listar | 🟡 | #39 |
| #77 | `BE36` Usuários: editar, alterar perfil, bloquear e excluir | 🟡 | #76 |
| #78 | `FE34` Admin: tela de gestão de usuários | 🟡 | #4, #43, #45, #48, #76, #77 |
| #79 | `FE35` Histórico de votações (usuário logado) | 🟢 | #45, #47, #53 |

```mermaid
flowchart LR
  FE30["#72 FE30<br/>Admin: lista de votações"]
  FE31["#73 FE31<br/>Admin: formulário de criar/editar vo…"]
  FE32["#74 FE32<br/>Admin: duplicar, encerrar e excluir …"]
  FE33["#75 FE33<br/>Admin: tela da Caixa de Sugestões"]
  BE35["#76 BE35<br/>Usuários: criar e listar"]
  BE36["#77 BE36<br/>Usuários: editar, alterar perfil, bl…"]
  FE34["#78 FE34<br/>Admin: tela de gestão de usuários"]
  FE35["#79 FE35<br/>Histórico de votações (usuário logado)"]
  BE14(["#39 BE14"]):::ext
  BE21(["#52 BE21"]):::ext
  BE22(["#53 BE22"]):::ext
  BE23(["#54 BE23"]):::ext
  BE24(["#55 BE24"]):::ext
  BE25(["#56 BE25"]):::ext
  BE32(["#63 BE32"]):::ext
  BE34(["#65 BE34"]):::ext
  FE03(["#3 FE03"]):::ext
  FE04(["#4 FE04"]):::ext
  FE12(["#42 FE12"]):::ext
  FE13(["#43 FE13"]):::ext
  FE15(["#45 FE15"]):::ext
  FE17(["#47 FE17"]):::ext
  FE18(["#48 FE18"]):::ext
  FE04 --> FE30
  FE15 --> FE30
  FE18 --> FE30
  BE22 --> FE30
  FE03 --> FE31
  FE12 --> FE31
  FE18 --> FE31
  BE21 --> FE31
  BE23 --> FE31
  FE13 --> FE32
  FE30 --> FE32
  BE24 --> FE32
  BE25 --> FE32
  BE32 --> FE32
  FE04 --> FE33
  FE13 --> FE33
  FE15 --> FE33
  FE18 --> FE33
  BE34 --> FE33
  BE14 --> BE35
  BE35 --> BE36
  FE04 --> FE34
  FE13 --> FE34
  FE15 --> FE34
  FE18 --> FE34
  BE35 --> FE34
  BE36 --> FE34
  FE15 --> FE35
  FE17 --> FE35
  BE22 --> FE35
  classDef ready fill:#d4f8d4,stroke:#2da44e
  classDef ext fill:#eee,stroke:#999,stroke-dasharray:3 3
```

<sub>Verde = pronta no momento da criação · cinza tracejado = issue de outra fase.</sub>

## F4 Rádio

| Issue | Task | Nível | Depende de |
|---|---|---|---|
| #80 | `SP01` Spike: prova de conceito com o player do YouTube | 🟡 | — |
| #81 | `DB40` Model RadioQueueItem (programação da rádio) | 🟢 | #50 |
| #82 | `BE40` Enviar vencedores para a fila da rádio ao encerrar | 🟡 | #60, #81 |
| #83 | `BE41` GET /radio/timeline | 🟡 | #81, #39 |
| #84 | `BE42` Operações da rádio: tocar, próxima, anterior, terminou | 🟡 | #81, #39 |
| #85 | `FE40` Hook useYouTubePlayer | 🔴 | #80 |
| #86 | `FE41` Painel da rádio: timeline | 🟡 | #4, #47, #48, #83 |
| #87 | `FE42` Controles da rádio | 🔴 | #85, #86, #84 |
| #88 | `FE43` Rádio: avanço automático e tempo restante | 🟡 | #87 |

```mermaid
flowchart LR
  SP01["#80 SP01<br/>Spike: prova de conceito com o playe…"]
  DB40["#81 DB40<br/>Model RadioQueueItem (programação da…"]
  BE40["#82 BE40<br/>Enviar vencedores para a fila da rád…"]
  BE41["#83 BE41<br/>GET /radio/timeline"]
  BE42["#84 BE42<br/>Operações da rádio: tocar, próxima, …"]
  FE40["#85 FE40<br/>Hook useYouTubePlayer"]
  FE41["#86 FE41<br/>Painel da rádio: timeline"]
  FE42["#87 FE42<br/>Controles da rádio"]
  FE43["#88 FE43<br/>Rádio: avanço automático e tempo res…"]
  BE14(["#39 BE14"]):::ext
  BE29(["#60 BE29"]):::ext
  DB11(["#50 DB11"]):::ext
  FE04(["#4 FE04"]):::ext
  FE17(["#47 FE17"]):::ext
  FE18(["#48 FE18"]):::ext
  DB11 --> DB40
  BE29 --> BE40
  DB40 --> BE40
  DB40 --> BE41
  BE14 --> BE41
  DB40 --> BE42
  BE14 --> BE42
  SP01 --> FE40
  FE04 --> FE41
  FE17 --> FE41
  FE18 --> FE41
  BE41 --> FE41
  FE40 --> FE42
  FE41 --> FE42
  BE42 --> FE42
  FE42 --> FE43
  class SP01 ready
  classDef ready fill:#d4f8d4,stroke:#2da44e
  classDef ext fill:#eee,stroke:#999,stroke-dasharray:3 3
```

<sub>Verde = pronta no momento da criação · cinza tracejado = issue de outra fase.</sub>

## F5 Vinhetas, Auditoria & Dashboard

| Issue | Task | Nível | Depende de |
|---|---|---|---|
| #89 | `DB50` Model Jingle (vinhetas) | 🟢 | — |
| #90 | `BE50` Upload de arquivos de áudio | 🔴 | #89 |
| #91 | `BE51` CRUD de vinhetas | 🟡 | #90, #39 |
| #92 | `FE50` Admin: biblioteca de vinhetas | 🟡 | #4, #43, #45, #48, #91 |
| #93 | `FE51` Tocar vinheta com redução gradual de volume | 🔴 | #85, #87, #91 |
| #94 | `DB51` Model AuditLog + auditService | 🟡 | #35 |
| #95 | `BE52` Registrar auditoria nas operações | 🟡 | #94, #52, #54, #65, #77, #84 |
| #96 | `BE53` Consulta de auditoria (API + tela) | 🟢 | #94, #39, #45, #48 |
| #97 | `BE54` GET /admin/dashboard — indicadores | 🟡 | #60, #81, #39 |
| #98 | `FE54` Admin: dashboard | 🟡 | #2, #48, #97 |
| #99 | `FE55` Revisão de responsividade e acessibilidade das telas públicas | 🟢 | #68, #69, #70, #71 |

```mermaid
flowchart LR
  DB50["#89 DB50<br/>Model Jingle (vinhetas)"]
  BE50["#90 BE50<br/>Upload de arquivos de áudio"]
  BE51["#91 BE51<br/>CRUD de vinhetas"]
  FE50["#92 FE50<br/>Admin: biblioteca de vinhetas"]
  FE51["#93 FE51<br/>Tocar vinheta com redução gradual de…"]
  DB51["#94 DB51<br/>Model AuditLog + auditService"]
  BE52["#95 BE52<br/>Registrar auditoria nas operações"]
  BE53["#96 BE53<br/>Consulta de auditoria (API + tela)"]
  BE54["#97 BE54<br/>GET /admin/dashboard — indicadores"]
  FE54["#98 FE54<br/>Admin: dashboard"]
  FE55["#99 FE55<br/>Revisão de responsividade e acessibi…"]
  BE14(["#39 BE14"]):::ext
  BE21(["#52 BE21"]):::ext
  BE23(["#54 BE23"]):::ext
  BE29(["#60 BE29"]):::ext
  BE34(["#65 BE34"]):::ext
  BE36(["#77 BE36"]):::ext
  BE42(["#84 BE42"]):::ext
  DB01(["#35 DB01"]):::ext
  DB40(["#81 DB40"]):::ext
  FE02(["#2 FE02"]):::ext
  FE04(["#4 FE04"]):::ext
  FE13(["#43 FE13"]):::ext
  FE15(["#45 FE15"]):::ext
  FE18(["#48 FE18"]):::ext
  FE22(["#68 FE22"]):::ext
  FE23(["#69 FE23"]):::ext
  FE24(["#70 FE24"]):::ext
  FE25(["#71 FE25"]):::ext
  FE40(["#85 FE40"]):::ext
  FE42(["#87 FE42"]):::ext
  DB50 --> BE50
  BE50 --> BE51
  BE14 --> BE51
  FE04 --> FE50
  FE13 --> FE50
  FE15 --> FE50
  FE18 --> FE50
  BE51 --> FE50
  FE40 --> FE51
  FE42 --> FE51
  BE51 --> FE51
  DB01 --> DB51
  DB51 --> BE52
  BE21 --> BE52
  BE23 --> BE52
  BE34 --> BE52
  BE36 --> BE52
  BE42 --> BE52
  DB51 --> BE53
  BE14 --> BE53
  FE15 --> BE53
  FE18 --> BE53
  BE29 --> BE54
  DB40 --> BE54
  BE14 --> BE54
  FE02 --> FE54
  FE18 --> FE54
  BE54 --> FE54
  FE22 --> FE55
  FE23 --> FE55
  FE24 --> FE55
  FE25 --> FE55
  class DB50 ready
  classDef ready fill:#d4f8d4,stroke:#2da44e
  classDef ext fill:#eee,stroke:#999,stroke-dasharray:3 3
```

<sub>Verde = pronta no momento da criação · cinza tracejado = issue de outra fase.</sub>

## Futuro

| Issue | Task | Nível | Depende de |
|---|---|---|---|
| #100 | `FUT01` [Futuro] Login de estudante e 1 voto por aluno | 🔴 | — |
