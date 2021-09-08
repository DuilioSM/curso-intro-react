import React from 'react';
import './TodoLoading.css'

const TodoLoading = () => {
  return (
    <li className="TodoItem-loading">
      <div className="LoaderBalls">
        <span className="LoaderBalls__item"></span>
        <span className="LoaderBalls__item"></span>
        <span className="LoaderBalls__item"></span>
      </div>
    </li>
  )
}

export {TodoLoading};