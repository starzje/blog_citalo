import React, { useState } from 'react';
import Link from 'next/link';
import SinglePost from './SinglePost';

export interface DisplayforumProps {
  response: any;
}

const Displayforum: React.FC<DisplayforumProps> = ({ response }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className={'asd'}>
        <SinglePost
          image={response?.attributes?.image?.data?.attributes?.url}
          content={response?.attributes?.content}
          title={response?.attributes?.title}
          slug={response?.attributes?.slug}
        />
        <div>
          <Link href="/upload">
            <button>Ask a question</button>
          </Link>
          <button>Login</button>
        </div>
      </div>
      <div className={'asd'}>
        <p>Posted By: </p>
      </div>
      <div className={'asd'}>
        <p className={'asd'}>Description of the Question</p>
      </div>
      <div className={'asd'}>
        <h2 className="bg-red-500 text-lg">Answers </h2>
        <div className={'asd'}>
          <form>
            <textarea
              typeof="text"
              placeholder="Enter your answer"
              rows={5}
            />
            <button>Post</button>
          </form>
        </div>
        <button
          className={'asd'}
          onClick={() => setShow(!show)}
        >
          {show ? 'Hide Answers' : 'Show Answers'}
        </button>
        {show ? (
          <div className={'asd'}>
            <div className={'asd'}>
              <p className={'asd'}>Miracle</p>
              <p className={'asd'}>Try doing it Like this</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Displayforum;
