import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
// import { NavLink } from 'react-router-dom'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer/'
import styles from './index.less'

@CSSModules(styles)
class User extends Component {
  static propTypes = {
    user: PropTypes.object
  }
  render () {
    let { user } = this.props
    let avatarSrc = user ? user.avatar : ''
    return (
      <div styleName="container">
        { avatarSrc
          ? <Header logoName="木纹子印象派" buttonLink="/newphoto" buttonName="发布" avatarSrc={avatarSrc} shadow />
          : <Header logoName="木纹子印象派" buttonLink="/register" buttonName="注册" shadow />
        }
        <div>
          <div styleName="top-background" style={{backgroundImage: 'url(/img/common/personal_bg.jpg)'}} />
          <div styleName="main"><h2>正在开发中...</h2></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default User
