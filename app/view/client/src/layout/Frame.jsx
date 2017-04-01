import React, { Component } from 'react'
import Nav from './Nav'

class Frame extends Component {
  render () {
    return (
      <div className='frame'>
        <section className='header'>
          <Nav />
        </section>
        <section className='contianer'>
          {this.props.children}
        </section>
      </div>
    )
  }
}

Frame.propTypes = {
  children: React.PropTypes.node
}

export default Frame