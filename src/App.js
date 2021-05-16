import Quiz from "./quiz";
import { useState, useEffect } from 'react';

export default function App({ domElement }) {

  const title = domElement.getAttribute('data-title');
  const course = domElement.getAttribute("data-course");
  const game = domElement.getAttribute("data-exercise");

  const [loading, setLoading] = useState();
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(false)
    // fetch(`https://quizes.free.beeceptor.com/quiz-maths`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setLoading(false);
    //     console.log(data);
    //     setData(data);
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //     setLoading(false);
    //     setError('error fetching from reddit');
    //   });
  }, [game])

  

  return (
    <div className="quiz_widget__app">
      <h1 className="quiz_widget__header">
        {title}
      </h1>
      <div className="quiz_widget__inner">
        {loading && "Loading..."}
        {error && error}
        {renderQuiz(game)}
      </div>
      <p className="reddit_widget__powered_by">
        This widget is powered by{" "}
        <a
          href="https://dvm.academy"
          rel="noopener noreferrer"
          target="_blank"
        >
          DVM Academy
        </a>
      </p>
    </div>
  );

}

function renderQuiz(game) {
  switch (game) {
    case 'simple_math_addition':
      return <Quiz quiz={game} />;
    case 'simple_math_subtraction':
      return <Quiz quiz={game} />;
    default:
      return <Quiz />
  };
}