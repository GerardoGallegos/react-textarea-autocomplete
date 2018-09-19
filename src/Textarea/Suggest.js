import React, { Component } from 'react'
import { number, bool, array, string } from 'prop-types'

const styles = {
  panel: {
    position: 'absolute',
    minWidth: '150px',
    minHeight: '34px',
    background: '#FFF',
    boxShadow: '1px 3px 28px rgba(0,0,0,0.2)',
    animation: '200ms ease-out',
    willChange: 'transform, opacity',
    borderRadius: '5px',
    margin: 0,
    padding: 0
  },

  item: {
    background: '#FFF',
    color: '#222',
    listStyle: 'none',
    padding: '.5em 0'
  },

  itemActive: {
    background: '#3f51b5',
    color: '#FFF',
    listStyle: 'none',
    padding: '.5em 0'
  }
}

class Suggest extends Component {
  static propTypes = {
    // Top & Left number, cordenates of the caret
    top: number,
    left: number,

    // Index active for navegate in options
    activeIndex: number,

    // Array of suggest
    suggests: array,

    // Is open when is matched with the pattern
    isOpen: bool,

    // Character trigger, example #
    char: string,

    // Show character prev in the list if is passed true
    showCharInList: bool
  }

  render () {
    const { suggests, left, activeIndex, char, showCharInList, isOpen, classList, classItem, styleItemInactive, styleItemActive } = this.props
    const suggestStyles = {
      left: left - 75,
      top: `-${suggests.length * 36}px`,
      transform: isOpen ? 'scale(1)' : 'scale(0.9)',
      opacity: isOpen ? '1' : '0',
      transition: 'opacity 200ms ease-out, transform 200ms ease-out'
    }

    const endListStyles = {
      ...styles.panel,
      ...suggestStyles,
      ...classList
    }

    const itemStyleInactive = {
      ...styles.item,
      ...styleItemInactive
    }

    const itemStyleActive = {
      ...styles.itemActive,
      ...styleItemActive
    }

    return (
      <ul
        style={endListStyles}
        className={classList}
      >
        {suggests.map((suggest, index) => (
          <li key={suggest} style={index === activeIndex ? itemStyleActive : itemStyleInactive} className={classItem}>
            { showCharInList ? char : '' }
            { suggest }
          </li>
        ))}
      </ul>
    )
  }
}

export default Suggest
