import Displayforum from '@/pages/components/DisplayForum';
import { useState, useEffect } from 'react';
import { readForum } from './api';

export default function Home() {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await readForum();
      setResponse(result.data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="asd">
      {response.map((response, index) => {
        return (
          <Displayforum
            key={index}
            response={response}
          />
        );
      })}
    </div>
  );
}
