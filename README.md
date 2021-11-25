# Web-Scraper-JS

Executar via NodeJS pelo console de comando.

Projeto de web-scraper (coletor de dados de paginas web) criado em JavaScript utilizando Node.JS e as bibliotecas Express, Axios e Cheerio.

O projeto esta pré-definido para buscar no site https://www.uol.com.br/esporte/ as thumbnails e alimentar uma Array com o titulo e o link de cada materia encontrada.

Tendo em vista que a maioria dos sites mantem uma estrutura constante para facilitar o carregamento de conteudo mantendo o estilo pré definido do portal, é possível adaptar esse projeto para outros sites, para fazer isso é necessário que seja trocado o valor da constante URL para o site desejado e manualmente realizar uma inspeção no portal de qual a maneira que normalmente é postado o conteudo e com isso atualizar a constanten tituloScr e linkSrc, também pode ser inserido ou excluido o que vai ser exibido ajustando os valores que recebem o comando scrapedArray.push que define os valores que serão armezados e ficarão disponíveis para manipulação.
