import React from 'react'
import { useLocation } from 'react-router-dom'

const PageText = () => {

  const location = useLocation();
  // need to change below(now its test feature)
  let text;
  switch (location.pathname) {
    case '/Home':
      text = 'Welcome';
      break;
    case '/Profile':
      text = 'Profile Page';
      break;
    case '/Settings':
      text = 'Settings';
      break;
    default:
      text = 'Main Page';
  }

  return (
    <div className='text-white'>{text}</div>
  )
}

export default PageText