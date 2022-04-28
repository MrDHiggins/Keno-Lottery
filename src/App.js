import React from 'react'
import { Provider } from 'react-redux'
import { createUseStyles } from 'react-jss'

import { store } from './app/store'
import Keno from './components/Keno'

export const mainColor = 'whitesmoke'

// global style
const useStyles = createUseStyles({
  '@global': {
    body: {
      backgroundColor: mainColor
    }
  }
})

function App () {
  useStyles()

  return (
    <Provider store={store}>
      <Keno />
    </Provider>
  )
};

export default App
