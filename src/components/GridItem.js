import React from 'react'
import { createUseStyles } from 'react-jss'
import PropTypes from 'prop-types'

const useStyles = createUseStyles({
  button: {
    backgroundColor: ({ hasValue, value }) => {
      const selectedColor = '#b00d00'
      const basicColor = '#eeef55'

      if (hasValue) {
        return selectedColor
      }

      return basicColor
    },
    width: '100%',
    margin: 'auto',
    padding: 10,
    borderRadius: '10px',
    color: props => props.hasValue ? 'white' : 'black',
    '&:hover': {
      border: [
        [1,'solid', 'black']
      ],
      borderRadius: '5px',
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: '0.2',
      border: [1],
      
    }
  }
})

export const GridItem = (props) => {
  const hasValue = props.selectedNumbers.includes(props.value)
  const isDisabled = (props.hasReachedSelectionLimit && (hasValue === false))

  const classes = useStyles({ hasValue, value: props.value })

  return (
    <button
      disabled={isDisabled}
      value={props.value}
      onClick={e => props.onItemClick(e.target.value)} className={classes.button}
    >
      {props.value}
    </button>
  )
}

GridItem.propTypes = {
  selectedNumbers: PropTypes.arrayOf(PropTypes.number),
  onItemClick: PropTypes.func.isRequired,
  hasReachedSelectionLimit: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired
}
