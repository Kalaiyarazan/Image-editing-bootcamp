import React, { useState, useEffect } from 'react';

const CreateTask = () => {
  const [task, setTask] = useState([]);
  const [taskData, setTaskData] = useState({
    imageURL: '',
    taskId: '',
    taskDescription: '',
  });

  const onImageChange = (e) => {
    const isFile = e.target.files[0];

    if (isFile) {
      const file = URL.createObjectURL(e.target.files[0]);
      setTaskData({ ...taskData, imageURL: file });
    } else {
      setTaskData({ ...taskData, imageURL: '' });
    }
  };

  const onSubmit = () => {
    setTask([taskData, ...task]);
    setTaskData({ ...taskData, imageURL: '', taskId: '', taskDescription: '' });
  };

  useEffect(() => {
    const prevTaskData = JSON.parse(localStorage.getItem('task')) || [];
    if (prevTaskData !== []) {
      setTask([...prevTaskData]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(task));
  }, [task]);

  return (
    <div className='create-task'>
      <h1>Create Task</h1>
      <div className='task-panel'>
        <div className='image-uploader'>
          <div className='upload-preview'>
            <img
              src={taskData.imageURL}
              alt='Upload Preview'
              className={`upload-preview-image ${
                taskData.imageURL && `active`
              }`}
            />
            <span
              className={`image-preview-text ${
                taskData.imageURL && `inactive`
              }`}
            >
              Upload Preview
            </span>
          </div>
          <input
            type='file'
            id='img'
            name='img'
            accept='image/*'
            onChange={onImageChange}
          />
        </div>
        <div className='task-detail'>
          <div>
            <label htmlFor='task-id'>Task ID#</label>
            <br />
            <input
              type='text'
              name='taskId'
              id='task-id'
              value={taskData.taskId}
              onChange={(e) =>
                setTaskData({ ...taskData, taskId: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor='task-description'>Task Description</label> <br />
            <textarea
              name='taskDescription'
              cols='30'
              rows='5'
              id='task-description'
              value={taskData.taskDescription}
              onChange={(e) =>
                setTaskData({ ...taskData, taskDescription: e.target.value })
              }
            ></textarea>
          </div>
          <button onClick={onSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
