import React, { useState } from 'react'

const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: '', type: 'danger'});

  const showAlert = ({text, type = 'danger'}) => setAlert({ 
    show: true,
    text,
    type
  })

  const hideAlert = () => setAlert({ 
    show: false,
    text: '',
    type: 'danger'
  })

  // Hooks don't return jsx, they return most often an object or an array
 
  return { alert, showAlert, hideAlert };
}

export default useAlert;
