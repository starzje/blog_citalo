import { useCallback, useMemo, FC } from 'react';
import { ArticleProps } from '@/types';
import { filterPostsInput } from '@/lib/filterPosts';

const InputSearchBar: FC<ArticleProps> = ({
  posts,
  setSearchTerm,
  searchTerm,
}) => {
  const filteredPosts = useMemo(
    () => filterPostsInput(posts, searchTerm),
    [posts, searchTerm]
  );
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm && setSearchTerm(e.target.value);
    },
    [setSearchTerm]
  );

  return (
    <div className="mx-auto  max-w-screen-md pb-10 leading-6">
      <form className="mx-auto relative flex  flex-col justify-between rounded-lg border p-2 sm:flex-row sm:items-center sm:p-0 md:w-1/2 w-full">
        <input
          type="name"
          name="search"
          autoComplete="off"
          className="pl-3 w-full cursor-text rounded-md py-4 outline-double outline-2 outline-dark-brown ring-light-brown sm:border-0 focus:ring "
          placeholder="Pretraži recenzije:"
          value={searchTerm}
          onChange={handleChange}
        />
        <div className="left-0 top-14 absolute z-[999] w-full bg-light-brown divide-y rounded-b-xl shadow-lg sm:mr-32 ">
          {searchTerm !== '' &&
            filteredPosts.map((post) => {
              return (
                <div
                  key={post.id}
                  className=" cursor-pointer px-4 py-2 text-gray-600 hover:bg-dark-brown hover:text-white"
                  onClick={() =>
                    setSearchTerm && setSearchTerm(post.attributes.title)
                  }
                >
                  <span className="m-0 font-medium">
                    {post.attributes.title}
                  </span>
                </div>
              );
            })}
        </div>
      </form>
    </div>
  );
};

export default InputSearchBar;
