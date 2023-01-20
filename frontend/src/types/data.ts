export interface Data {
  id: number;
  attributes: {
    title: string;
    content: string;
    slug: string;
    category: string;
    image?: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export interface ApiResponse {
  data: Data[];
}

export interface SinglePostProps {
  title: string;
  content: string;
  slug: string;
  category: string;
  image: string;
}
