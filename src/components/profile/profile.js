import React from 'react';
import classnames from 'classnames/bind'
import style from './style.scss'
import image from './image.jpg'

const c = classnames.bind(style)

export const ProfilePage = ()=> (
  <div className={c('card')}>
    <img src={image}/>
    Profile Page
  </div>
)