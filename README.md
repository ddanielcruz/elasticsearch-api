# elastic-search-api

> A simple search API using Node.js and Elasticsearch

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

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/danielccunha/elastic-search-api/issues)

## License

Licensed under the MIT license.
