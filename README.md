<div align="center">
  <h1>
    :mag_right: <i>elastic-search-api</i>
  </h1>
  <p>A simple search API using Node.js and Elasticsearch</p>

  <div>
    <a href="https://www.codacy.com/manual/danielccunha/elasticsearch-api?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=danielccunha/elasticsearch-api&amp;utm_campaign=Badge_Grade"><img src="https://app.codacy.com/project/badge/Grade/c39c41fa941247f58aa8c86aaa6057ee"/></a>
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
</div>

## :rocket: Technologies

- [Elasticsearch][elasticsearch]
- [TypeScript][typescript]
- [Node.js][nodejs]
- [Express][express]
- [Docker][docker]

## :fire: Usage

To use this project you'll basically have to clone it using [Git][git] and run it using [Docker][docker].

```sh
# Cloning the repository
git clone https://github.com/danielccunha/elasticsearch-api.git
cd elasticsearch-api

# Running it with Docker on http://localhost:3333
docker-compose up -d
```

Then, on your browser, navigate to `http://localhost:3333/search?query=IT` and the response should look something like this:

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

[git]: https://git-scm.com/
[docker]: https://www.docker.com/
[nodejs]: https://nodejs.org/
[express]: http://expressjs.com/
[typescript]: https://www.typescriptlang.org/
[elasticsearch]: https://www.elastic.co/pt/
