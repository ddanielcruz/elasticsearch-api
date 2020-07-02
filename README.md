<div align="center">
  <h1>
    :mag_right: <i>elastic-search-api</i>
  </h1>
  <p>
    A simple search API using Node.js and Elasticsearch
  </p>

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/danielccunha/elastic-search-api?color=%233a86ff">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/danielccunha/elastic-search-api?color=%233a86ff">
  <a href="https://www.linkedin.com/in/daniel-cunha-53053816b/">
    <img alt="Made by Daniel Cunha" src="https://img.shields.io/badge/made%20by-Daniel%20Cunha-%23?color=%233a86ff">
  </a>
  <a href="https://github.com/danielccunha/crwn-clothing/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/danielccunha/elastic-search-api?color=%233a86ff">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=%233a86ff">
</div>

## Prerequisites

- [Docker](https://www.docker.com/) for instantly running the project
- [Node.js](https://nodejs.org/en/) in case you don't want to use Docker

## Installing

Clone the project and start it using `docker-compose up`. In case you don't want to use docker, open `src/config/elastic.js` file and update the host url. Then run the project using `yarn start`.

```sh
# Clone the project
git clone https://github.com/danielccunha/elastic-search-api
cd elastic-search-api

# Run it using docker
docker-compose up

# In case you won't use docker
yarn start
```

## Usage

This API has only one endpoint used to search brazilian stocks. Open your browser and navigate to `http://localhost:3000/search?query=ITAU`. In case everything is working fine, the response should look like this:

```json
[
  {
    "ticker": "ITUB3",
    "identifier": "BANCO ITAU UNIBANCO ON"
  },
  {
    "ticker": "ITUB4",
    "identifier": "BANCO ITAU UNIBANCO PN"
  },
  {
    "ticker": "ITEC3",
    "identifier": "ITAUTEC ON"
  },
  {
    "ticker": "ITSA3",
    "identifier": "ITAUSA ON"
  },
  {
    "ticker": "ITSA4",
    "identifier": "ITAUSA PN"
  }
]
```

## :memo: License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[source]: https://www.worldometers.info/coronavirus/
[git]: https://git-scm.com/
[docker]: https://www.docker.com/
[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[express]: http://expressjs.com/
[typescript]: https://www.typescriptlang.org/
