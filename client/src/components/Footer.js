import React from 'react'
import { makeStyles } from '@material-ui/core'

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  clickable: {
    '&:hover': {
      opacity: 1.5,
      color: 'black',
    },
    textDecoration: 'none',
    marginLeft: '5px',
    color: 'blue',
    fontWeight: 'bold',
    opacity: 0.5,
  },
}))

export default function Footer() {
  const classes = useStyles()
  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        bottom: 0,
        height: '30px',
        backgroundColor: 'rgba(0,0,0,.32)',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: '10px',
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'Helvetica',
      }}
    >
      <div
        style={{ paddingLeft: '10px', marginLeft: '20px', color: '#414141' }}
      >
        Github Repo -
        <a
          href="https://github.com/Arwa-Bhojawala/Trellone.git"
          rel="noopener noreferrer"
          target="_blank"
          className={classes.clickable}
        >
          {' '}
          Trellone{' '}
        </a>
      </div>
    </div>
  )
}
