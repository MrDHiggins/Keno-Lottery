import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import PropTypes from 'prop-types'

import { Modal } from './Modal'
import { GridItem } from './GridItem'

const useStyles = createUseStyles({
  gridContainer: {
    display: 'grid',
    gridGap: '5px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
    gridTemplateRows: 'repeat(0, 50px)',
    width: (windowWidth) => {
      switch (true) {
        case windowWidth <= 849:
          return '91%'
        case windowWidth > 1619:
          return '48%'
        case windowWidth <= 1148:
          return '81%'
        default:
          return '50%'
      }
    },
    margin: 'auto'
  }
})

const ListOfErrors = (props) => {
  const errors = []

  if (props.hasReachedSelectionLimit === false) {
    errors.push(<li key={1}>Please select a total of 5 numbers</li>)
  }

  if (props.selectedStake <= 0) {
    errors.push(<li key={2}>Stake value must be greater than or equal to 1</li>)
  }

  return (
    <ul>
      {errors}
    </ul>
  )
}

export const Grid = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(
    () => {
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, []
  )

  const classes = useStyles(windowWidth)

  function renderGrid () {
    const grid = []

    for (let i = 1; i <= props.size; i++) {
      grid.push(
        <GridItem
          {...props}
          value={i}
          key={`btn-${i}`}
          hasReachedSelectionLimit={props.hasReachedSelectionLimit}
        />
      )
    }

    return grid
  }

  return (
    <div className={classes.gridContainer}>
      <Modal {...props}>
        {props.isValidBet ? 'YOU WIN!' : <ListOfErrors {...props}/>}
      </Modal>
      {renderGrid()}
    </div>
  )
}

Grid.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  hasReachedSelectionLimit: PropTypes.bool.isRequired,
  isValidBet: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired
}

ListOfErrors.propTypes = {
  hasReachedSelectionLimit: PropTypes.bool.isRequired,
  selectedStake: PropTypes.number.isRequired
}
