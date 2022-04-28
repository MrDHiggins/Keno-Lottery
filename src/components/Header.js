import React from 'react'
import { createUseStyles } from 'react-jss'
import DMLogo from "../assets/dotModusLogo.png"

const useStyles = createUseStyles({
  logo: {

    alignItems: 'center',
  },
  logoContainer: {
    margin: 'auto',
    width: '13%',
    padding: '10px'
  }
})

export const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.logoContainer}>
      <img className={classes.logo} src={DMLogo} alt='keno' />
    </div>
  )
}
