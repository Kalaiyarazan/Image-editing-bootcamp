import React, { useState, useEffect } from 'react';
import { scoreData } from '../data/data';

const ScoreTask = () => {
  const [scoreTask, setScoreTask] = useState('');
  const [search, setSearch] = useState('');

  localStorage.getItem('score') ||
    localStorage.setItem('score', JSON.stringify(scoreData));

  useEffect(() => {
    setScoreTask(JSON.parse(localStorage.getItem('score')));
  }, []);

  const onScoreChange = (score, id) => {
    const updatedScore = scoreTask.map((data) =>
      data.id === id ? { ...data, score } : { ...data }
    );

    setScoreTask(updatedScore);
    console.log(updatedScore);
    localStorage.setItem('score', JSON.stringify(updatedScore));
  };

  return (
    <div>
      <h1>Search Task</h1>
      <div className='search-field'>
        <input
          type='text'
          name='search'
          id='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Enter Task Id#'
        />
      </div>
      <hr />
      <div>Enter Task ID# to search through edited images</div>
      <div className='card-list'>
        {scoreTask &&
          scoreTask.map((data) =>
            data.taskId === Number(search) ? (
              <div class='card'>
                <img src={data.imgUrl} alt='Preview' />
                <div class='card-container'>
                  <h3>
                    <b>Task ID# {data.taskId}</b>
                  </h3>
                  <h4>
                    <b>Editor: {data.user}</b>
                  </h4>
                  <div className='score-section'>
                    <p>Assign Score</p>
                    <input
                      type='range'
                      min='0'
                      max='10'
                      step='1'
                      value={data.score}
                      onChange={(e) => onScoreChange(e.target.value, data.id)}
                    />
                    <button className='btn'>{data.score}</button>
                  </div>
                </div>
              </div>
            ) : null
          )}
      </div>
    </div>
  );
};

export default ScoreTask;
