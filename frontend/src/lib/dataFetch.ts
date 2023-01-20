import axios from 'axios';
import { ApiResponse } from '@/types/data';

export const fetcher = async (url: string) => {
  try {
    const res = await axios.get<ApiResponse>(url);
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
