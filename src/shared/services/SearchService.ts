import { Client } from 'elasticsearch';
import { connect } from '@config/elasticsearch';

type IStock = {
  ticker: string;
  identifier: string;
};

class SearchService {
  private client: Client = connect();

  async search(query: string): Promise<IStock[]> {
    const { hits } = await this.client.search<IStock>({
      index: 'stocks',
      body: {
        query: {
          bool: {
            should: [
              {
                match: {
                  identifier: query,
                },
              },
              {
                prefix: {
                  ticker: query,
                },
              },
              {
                prefix: {
                  identifier: query,
                },
              },
              {
                match_phrase_prefix: {
                  identifier: query,
                },
              },
            ],
          },
        },
      },
    });

    return hits.hits.map((hit) => hit._source);
  }
}

export default SearchService;
