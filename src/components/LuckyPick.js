import React from 'react'
import { createUseStyles } from 'react-jss'

import PropTypes from 'prop-types'

const useStyles = createUseStyles({
  luckyPickBtn: {
    fontSize: '1em',
    margin: '.5em',
    borderRadius: '5px',
    alignItems: 'center',
    textDecoration: 'none',
  }
})

export const LuckyPick = (props) => {
  const classes = useStyles()

  return (
    <button className={classes.luckyPickBtn} onClick={props.luckyPick}>Lucky Pick</button>
  )
}

LuckyPick.propTypes = {
  luckyPick: PropTypes.func.isRequired
}
