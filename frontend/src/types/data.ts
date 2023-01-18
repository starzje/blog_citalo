export interface DataType {
  id: number;
  attributes: {
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    content: string;
    title: string;
    slug: string;
    category: string;
  };
}
