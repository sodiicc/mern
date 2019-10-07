import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

const Exercise = props => {
  const exercise = props.exercise
  return (
    <tr>
      <td>{exercise.username}</td>
      <td>{exercise.description}</td>
      <td>{exercise.duration}</td>
      <td>{exercise.date.substring(0,10)}</td>
      <td>
        <Link to={'/edit/'+exercise._id}>edit</Link> |{' '}
        <Link to='/' onClick={() => {props.deleteExercise(exercise._id)}}>delete</Link>        
      </td>
    </tr>
  )
}

export const ExercisesList = () => {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    axios.get('/exercises')
    .then(res => setExercises(res.data))
    .catch(err => console.log(err))
  }, [])

  const deleteExercise = (id) => {
    axios.delete('/exercises/'+ id)
    setExercises(exercises.filter(el => el._id !== id))
  }

  const exerciseList = () => {
    return exercises.map(currentExercise => {
      return <Exercise key={currentExercise._id} exercise={currentExercise} deleteExercise={deleteExercise} />
    })
  }

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className='table'>
        <thead className='thead-light'>
          <tr>
            <th>Username</th>
            <th>Decription</th>
            <th>Diration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exerciseList()}</tbody>
      </table>
    </div>
  )
}