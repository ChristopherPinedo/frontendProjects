import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      if (counter !== 0) {
        setCounter(counter - 1);
        console.log(counter);
        return;
      }
      navigate('/dashboard/home');
    }, 1000);
  }, [counter]);

  return (
    <>
      <div className="container flex h-screen  flex-col items-center justify-center gap-6">
        <h1 className="prose prose-2xl">404 - Page Not Found</h1>
        <h4 className="prose ">You will be redirect in {counter}</h4>
      </div>
    </>
  );
}

export default NotFoundPage;
