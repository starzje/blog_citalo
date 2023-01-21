import axios, { AxiosResponse } from 'axios';
import { ApiResponse } from '@/types/data';
import { Data } from '@/types/data';

export const dataFetch = async (url: string): Promise<Data[]> => {
  try {
    const res: AxiosResponse<ApiResponse> = await axios.get(url);

    if (res.status === 200) {
      return res.data.data;
    } else {
      throw new Error(res.statusText);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
