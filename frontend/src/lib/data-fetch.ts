export default class DataFetch {
  constructor() {}

  async fetchData(path: string, params?: string) {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/${path}/${params}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}
