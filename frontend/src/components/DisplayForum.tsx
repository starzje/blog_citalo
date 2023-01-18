import SinglePost from './SinglePost';
import { DataType } from '@/types/data';

export interface DisplayForumProps {
  response: DataType;
}

const Displayforum: React.FC<DisplayForumProps> = ({ response }) => {
  return (
    <div>
      <div className={'asd'}>
        <SinglePost
          image={response.attributes.image.data.attributes.url}
          content={response.attributes.content}
          title={response.attributes.title}
          slug={response.attributes.slug}
          category={response.attributes.category}
        />
      </div>
    </div>
  );
};
export default Displayforum;
