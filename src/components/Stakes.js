import React from 'react'
import { createUseStyles } from 'react-jss'

import PropTypes from 'prop-types'
import dollarSym from '../assets/dollarSymbol.png'

const useStyles = createUseStyles({
  stake: {
    outline: 'none',
    fontSize: '1em',
    margin: '.5em',
    borderRadius: '5px',
    alignItems: 'center',
    textDecoration: 'none'
  },
  isDefault: {
    extend: 'stake',
    background: 'green',
    color: 'white'
  },
  inputContainer: {
    height: '100%',
    marginLeft: '5vw',
    marginTop: '1vh',
    borderRadius: '5px',
    background: '#efefef',
  },
  input: {
    display: 'inline-block',
    fontWeight: '400',
    color: '#377D6A',
    background: '#efefef',
  },
  label: {
    //display: 'inline-block',
    fontSize: '1em',
    marginLeft: '1vw',
    //padding: '10px 15px',
    borderRadius: '5px',
  }
})

export const Stakes = (props) => {
  const stakes = []
  const classes = useStyles(props)

  props.stakes.forEach(
    (stake) => {
      const isDefault = stake === props.selectedStake

      stakes.push(
        <button onClick={() => props.placeStake(stake)} key={`stake-${stake}`} className={isDefault ? classes.isDefault : classes.stake}
        >
          <img className={classes.logo} src={dollarSym} alt={`money-${stake}`} width='10px' />
          {stake}
        </button>
      )
    }
  )

  return (
    <>
      {stakes}
      <div className={classes.inputContainer}>
        <input type='number' id='stake' min='0' value={props.selectedStake} name='playerStake' onChange={e => props.placeStake(e.target.value)} className={classes.inputArea} />
        <label htmlFor='stake' className={classes.label}>Stake</label>
      </div>
    </>
  )
}

Stakes.propTypes = {
  stakes: PropTypes.arrayOf(PropTypes.number),
  selectedStake: PropTypes.number.isRequired,
  placeStake: PropTypes.func.isRequired
}
