# **Documento de Requisitos – IFPlay**

# **1\. Visão Geral**

## **1.1 Objetivo**

O IFPlay é uma plataforma de votação musical destinada aos estudantes do Instituto Federal, permitindo que a comunidade estudantil escolha, por meio de votação, as músicas que serão reproduzidas durante os intervalos.

O sistema tem como objetivo democratizar a escolha das músicas reproduzidas na instituição, garantindo que toda música executada seja previamente escolhida pelos estudantes através de votação.

O sistema deverá fornecer:

* Sistema de votação musical.  
* Sistema de sugestões de músicas.  
* Caixa de Sugestões para filas de espera.  
* Painel administrativo.  
* Sistema de Rádio Escolar.  
* Controle de usuários e permissões.  
* Histórico de votações.  
* Gestão da programação musical.

---

# **2\. Conceitos do Sistema**

## **2.1 Princípio Fundamental**

Toda música reproduzida pelo IFPlay deverá obrigatoriamente passar por uma votação estudantil.

---

## **2.2 Origem das Músicas**

As músicas participantes das votações poderão vir de duas fontes:

### **Sugestões do Período Atual**

Músicas sugeridas pelos estudantes enquanto uma votação está aberta e ainda existem vagas disponíveis.

### **Caixa de Sugestões**

Fila de espera para músicas sugeridas quando não existem mais vagas disponíveis na votação atual.

As músicas armazenadas nessa fila poderão participar de votações futuras.

Importante:

Uma música presente na Caixa de Sugestões não possui garantia de reprodução.

Ela deverá participar de uma votação futura e vencer ou ser selecionada dentro dos critérios da votação para ser reproduzida.

---

# **3\. Perfis de Usuário**

## **3.1 Visitante**

Usuário sem autenticação.

Permissões:

* Visualizar a votação ativa.  
* Visualizar informações da votação.  
* Participar da votação.  
* Sugerir músicas.  
* Acompanhar resultados públicos quando liberados.

---

## **3.2 Usuário Comum**

Usuário autenticado.

Permissões:

* Acessar o painel da Rádio.  
* Visualizar programação atual.  
* Operar recursos autorizados da rádio.  
* Visualizar histórico de votações.

---

## **3.3 Administrador**

Permissões:

* Todas as permissões do Usuário Comum.  
* Gerenciar formulários de votação.  
* Gerenciar usuários.  
* Gerenciar a Caixa de Sugestões.  
* Configurar regras de votação.  
* Gerenciar vinhetas.  
* Operar a Rádio.  
* Consultar relatórios.

---

# **4\. Módulo de Votação**

## **4.1 Cadastro de Formulário**

O administrador deverá poder criar formulários de votação contendo:

* Título.  
* Descrição.  
* Data de início.  
* Data de encerramento.  
* Quantidade máxima de músicas participantes.  
* Quantidade de votos permitidos por participante.  
* Tipo de votação.  
* Regras específicas da votação.

---

## **4.2 Tipos de Votação**

### **Música Única**

O estudante vota em apenas uma música.

Exemplo:

* Música A  
* Música B  
* Música C

Quantidade de votos:

* 1 voto

A música mais votada será a vencedora.

---

### **Playlist**

O estudante poderá votar em várias músicas.

Exemplo:

* Música A  
* Música B  
* Música C  
* Música D  
* Música E

Quantidade de votos:

* 3 músicas

As músicas mais votadas formarão a playlist vencedora.

---

## **4.3 Configuração de Vagas**

Cada votação possuirá uma quantidade máxima de músicas participantes.

Exemplo:

* 10 vagas disponíveis.

Ao atingir o limite, novas sugestões serão enviadas automaticamente para a Caixa de Sugestões.

---

## **4.4 Participação dos Estudantes**

Os estudantes poderão:

* Votar nas músicas disponíveis.  
* Sugerir novas músicas.

---

## **4.5 Vigência**

A votação poderá possuir duração configurável.

Exemplos:

* Mesmo dia.  
* Uma semana.  
* Um mês.  
* Período personalizado.

Ao término da vigência:

* A votação será encerrada automaticamente.  
* Os resultados serão consolidados.

---

## **4.6 Resultado**

Ao encerrar a votação o sistema deverá:

* Apurar automaticamente os votos.  
* Classificar as músicas por quantidade de votos.  
* Definir a música ou playlist vencedora.  
* Disponibilizar o resultado para a Rádio.

---

# **5\. Caixa de Sugestões**

## **5.1 Objetivo**

Armazenar sugestões de músicas que não puderam participar da votação atual devido ao limite de vagas.

---

## **5.2 Dados da Sugestão**

O estudante deverá informar:

* Nome da música.  
* Nome do artista (opcional).  
* Período desejado:  
  * Manhã  
  * Noite

---

## **5.3 Fila de Sugestões**

Cada sugestão deverá possuir um status.

Status possíveis:

* Pendente.  
* Selecionada para votação.  
* Rejeitada.  
* Utilizada.

---

## **5.4 Integração com Votações**

O administrador poderá definir qual percentual das vagas da próxima votação será reservado para músicas da Caixa de Sugestões.

Exemplo:

Total de vagas:

* 10

Configuração:

* 50% das vagas reservadas para a Caixa.

Resultado:

* 5 músicas oriundas da Caixa de Sugestões.  
* 5 músicas provenientes das sugestões do período atual.

O administrador poderá apenas definir as regras de composição das vagas.

O administrador não poderá definir quais músicas serão reproduzidas.

A escolha final sempre será realizada pelos estudantes através da votação.

---

## **5.5 Administração da Caixa**

O administrador poderá:

* Consultar sugestões pendentes.  
* Filtrar sugestões por período.  
* Remover sugestões inadequadas.  
* Limpar a fila.  
* Ajustar a porcentagem de vagas reservadas.  
* Marcar sugestões como utilizadas.

---

# **6\. Módulo Rádio**

## **6.1 Objetivo**

Gerenciar a reprodução das músicas vencedoras das votações.

---

## **6.2 Programação Musical**

A programação deverá ser formada exclusivamente por músicas vencedoras das votações.

O sistema não deverá permitir a inclusão manual de músicas fora do processo de votação.

---

## **6.3 Playlist Vencedora**

Após o encerramento da votação:

* O resultado deverá ser enviado automaticamente para a Rádio.  
* A música vencedora ou playlist vencedora deverá compor a programação.  
* A ordem deverá respeitar a classificação da votação quando aplicável.

---

## **6.4 Timeline da Rádio**

O sistema deverá apresentar:

* Música atual.  
* Próxima música.  
* Tempo restante.  
* Histórico recente.  
* Programação futura.

---

## **6.5 Controles da Rádio**

O operador deverá possuir:

* Play.  
* Pause.  
* Próxima música.  
* Música anterior.  
* Controle de volume.  
* Controle de reprodução.

---

## **6.6 Sistema de Vinhetas**

O sistema deverá permitir a reprodução de vinhetas durante a execução da música.

Fluxo:

1. Música em execução.  
2. Operador aciona uma vinheta.  
3. O volume da música é reduzido gradualmente.  
4. A vinheta é reproduzida.  
5. O volume retorna gradualmente ao nível anterior.

---

## **6.7 Biblioteca de Vinhetas**

O administrador poderá:

* Cadastrar vinhetas.  
* Editar vinhetas.  
* Excluir vinhetas.  
* Categorizar vinhetas.

Categorias sugeridas:

* Eventos.  
* Comunicados.  
* Institucionais.  
* Avisos.

---

# **7\. Painel Administrativo**

## **7.1 Dashboard**

O sistema deverá exibir indicadores como:

* Votação ativa.  
* Total de votos.  
* Participação dos estudantes.  
* Músicas mais votadas.  
* Sugestões pendentes.  
* Histórico de votações.  
* Estatísticas da Rádio.

---

## **7.2 Gestão de Formulários**

O administrador poderá:

* Criar formulário.  
* Editar formulário.  
* Duplicar formulário.  
* Encerrar formulário.  
* Excluir formulário.  
* Consultar histórico.

---

## **7.3 Duplicação de Formulários**

Ao duplicar uma votação o sistema deverá copiar:

* Quantidade de vagas.  
* Quantidade de votos permitidos.  
* Configurações.  
* Regras.  
* Percentuais da Caixa de Sugestões.

Permitindo alterar:

* Datas.  
* Título.  
* Descrição.  
* Participantes.

---

## **7.4 Gestão de Usuários**

O administrador poderá:

* Criar usuários.  
* Editar usuários.  
* Bloquear usuários.  
* Excluir usuários.  
* Alterar permissões.

Perfis disponíveis:

* Administrador.  
* Usuário Comum.

---

# **8\. Requisitos Não Funcionais**

## **8.1 Segurança**

* Autenticação por login e senha.  
* Senhas armazenadas utilizando hash seguro.  
* Controle de acesso baseado em perfis.  
* Proteção contra acessos não autorizados.

---

## **8.2 Usabilidade**

* Interface intuitiva.  
* Compatibilidade com dispositivos móveis.  
* Processo de votação simplificado.  
* Tempo médio de votação inferior a 30 segundos.

---

## **8.3 Desempenho**

* Suportar centenas de votos simultaneamente.  
* Atualização rápida dos resultados.  
* Baixa latência para reprodução da Rádio.

---

## **8.4 Auditoria**

O sistema deverá registrar:

* Criação de formulários.  
* Alterações de regras.  
* Alterações de usuários.  
* Operações da Rádio.  
* Alterações na Caixa de Sugestões.

---

# **9\. Regras de Negócio**

RN001 \- Apenas uma votação poderá estar ativa por vez.

RN002 \- Toda votação deve possuir data de início e término.

RN003 \- A quantidade de votos permitidos deve ser configurável.

RN004 \- A quantidade máxima de músicas participantes deve ser configurável.

RN005 \- Sugestões excedentes devem ser enviadas para a Caixa de Sugestões.

RN006 \- O percentual de vagas reservado para a Caixa de Sugestões deve ser configurável.

RN007 \- O encerramento da votação deve ocorrer automaticamente ao final da vigência.

RN008 \- O resultado da votação deve alimentar automaticamente a programação da Rádio.

RN009 \- Apenas administradores podem criar ou alterar votações.

RN010 \- Apenas administradores podem gerenciar usuários.

RN011 \- A reprodução de vinhetas deve reduzir e restaurar automaticamente o volume da música em execução.

RN012 \- Toda música reproduzida pelo IFPlay deve obrigatoriamente ter participado de uma votação.

RN013 \- Administradores não podem inserir músicas diretamente na programação oficial da Rádio.

RN014 \- A Caixa de Sugestões funciona apenas como fila de candidatas para futuras votações.

RN015 \- Uma música presente na Caixa de Sugestões não possui garantia de reprodução.

RN016 \- A decisão final sobre as músicas reproduzidas pertence exclusivamente aos estudantes através da votação.

RN017 \- O administrador administra o processo de votação, mas não define os vencedores.

