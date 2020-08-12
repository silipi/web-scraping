# Web Scraping com Puppeteer

## Funcionalidade

Este projeto tem como funcionalidade somente testar os conceitos do framework [Puppeteer](https://github.com/puppeteer/puppeteer). E com isso, realizar um web-scraping na página dos filmes mais bem avaliados do [IMDb](https://www.imdb.com/chart/top/?ref_=nv_mv_250) e pegar as imagens e expôr em um frontend simples.

Infelizmente a performance não está otimizada, pois só estarei pegando o link das imagens e renderizando elas com este link, então ele carrega todas. Poderia ser feito o download de cada imagem, mas para manter simples, ficou decidido assim.

As informações recolhidas da IMDb serão armazenadas em um arquivo 'linksImageIMDb.json', o qual não está incluso neste repositório, justamente para você clonar ele e testar! :D

## Como executar

Para executar, será necessário clonar este repositório, instalar as dependências com 'npm install' e rodar o script 'npm run scraping', que irá executar o arquivo server.js e rodar o Puppeteer com as configurações definidas para garimpar o site.
