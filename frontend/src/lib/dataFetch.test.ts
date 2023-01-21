/**
 * Test for dataFetch function
 *
 * @module dataFetch
 */

import axios from 'axios';
import { dataFetch } from './dataFetch';

jest.mock('axios');

describe('dataFetch', () => {
  /**
   * Test case: data fetching
   *
   * @function
   *
   * @async
   * @returns {Promise<void>} - returns a promise that resolves with no value
   */
  it('should fetch data and return an array', async () => {
    const url = 'https://example.com/data';
    const data = [
      { id: 1, name: 'Test' },
      { id: 2, name: 'Test2' },
    ];
    const res = { data: { data }, status: 200, statusText: 'OK' };
    (axios.get as jest.Mock).mockResolvedValue(res);

    const result = await dataFetch(url);
    expect(axios.get).toHaveBeenCalledWith(url);
    expect(result).toEqual(data);
  });

  /**
   * Test case: error handling
   *
   * @function
   *
   * @async
   * @returns {Promise<void>} - returns a promise that resolves with no value
   */
  it('should throw an error if the request fails', async () => {
    const url = 'https://example.com/data';
    const error = new Error('Request failed');
    (axios.get as jest.Mock).mockRejectedValue(error);

    try {
      await dataFetch(url);
    } catch (err) {
      expect(axios.get).toHaveBeenCalledWith(url);
      expect(err).toEqual(error);
    }
  });
});
