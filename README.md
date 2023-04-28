# appFigurinhas
Aplicativo com React Native que procura figurinhas em uma API de acordo com as solicitações do usuário.


## Como rodar o projeto:

- Clone este repositório com `git clone`.
- Instale as dependencias usando `npm install` ou `yarn install`.
- inicie o projeto com `expo start`.

## Ferramentas utilizadas


* [React Native](https://reactnative.dev/docs/getting-started)
* [React Navigation](https://reactnavigation.org/docs/getting-started//)
* [React Native Vector Icons](https://oblador.github.io/react-native-vector-icons/)
* [GIPHY](https://developers.giphy.com/docs/api/endpoint/#search)
* [Axios](https://axios-http.com/docs/intro)

## Considerações
* GIPHY: Para que o banco de figurinhas [GIPHY](https://developers.giphy.com/docs/api/endpoint/#search) aceite requisições, você precisa ter um token da API, então deve criar esse token e enviar no header da requisição HTTP, todo esse processo é detalhado na documentação. Ao adquirir sua _Key_ na API, crie um arquivo chamado _`API_KEY.js`_ dentro da pasta `src`, e nesse arquivo declare uma variavel de texto contendo sua _Key_.