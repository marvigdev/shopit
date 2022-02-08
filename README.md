# shopit

Este é o repositório do `shopit`, uma aplicação feita em `React`, `Typescript` e `TailwindCSS`.

Criado por [Marcos Vinicius](https://www.linkedin.com/in/marvigdev).

## Sobre

`shopit` é uma aplicação simples, que lista itens da [API do Mercado Livre](https://developers.mercadolivre.com.br/), e o usuário pode adicionar estes itens para um `carrinho`, onde ele pode ver a soma dos itens como também pode copiar os dados da sua "compra". Usuários também podem utilizar o campo de busca para filtrar por itens específicos.

## As tecnologias

Este projeto é inspirado no projeto `TrybeShopping`, um projeto desenvolvido por alunos da [Trybe](https://www.betrybe.com), também utilizando a API do Mercado Livre.

Decidi recriar a aplicação utilizando (https://reactjs.org)[React], por ser uma biblioteca amplamente utilizada e simples de utilizar. Usei [TailwindCSS](https://tailwindcss.com/) por ser uma forma rápida de estilizar minha aplicação, sem me preocupar com arquivos .css ou nomear classes. Para finalizar, utilizei [Typescript](https://www.typescriptlang.org/) por ser quase obrigatório no ambiente Javascript, evitando erros simples e acelerando o desenvolvimento da aplicação.

## Aprendizados

Aprendi `Context API`, uma ótima opção para lidar com estados utilizados por vários componentes, criando uma "fonte" de dados e podendo manipulá-los pelo `context`.
Desenvolvi também minha noção de componetização, tentando ao máximo criar componentes reutilizáveis e descritivos.

## To-do

- [ ] Salvar carrinho no `localStorage`
- [ ] Resolver a estilização quando as imagens vindas da API possuem alturas diferentes
- [ ] Implementar os filtros que a API do Mercado Livre oferece
- [ ] Listar categorias

##

Obrigado por ler :)
