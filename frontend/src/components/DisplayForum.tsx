import { SinglePostProps } from '@/types/data';
import SinglePost from './SinglePost';

const Displayforum: React.FC<SinglePostProps> = ({
  title,
  content,
  slug,
  category,
  image,
}) => {
  return (
    <div>
      <div>
        <SinglePost
          image={image}
          content={content}
          title={title}
          slug={slug}
          category={category}
        />
      </div>
    </div>
  );
};
export default Displayforum;
