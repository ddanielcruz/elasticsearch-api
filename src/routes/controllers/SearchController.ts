import { Request, Response } from 'express';
import SearchService from '@services/SearchService';

class SearchController {
  private service = new SearchService();

  index = async (request: Request, response: Response): Promise<Response> => {
    const query = request.query.query?.toString() || '';
    const stocks = await this.service.search(query);

    response.header('X-Total-Count', stocks.length.toString());
    return response.json(stocks);
  };
}

export default new SearchController();
