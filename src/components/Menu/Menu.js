import React from 'react'
import './Menu.css'
import { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import MenuBrunch from '../MenuBrunch/MenuBrunch'
import MenuLunch from '../MenuLunch/MenuLunch'
import MenuDinner from '../MenuDinner/MenuDinner'
import MenuDessert from '../MenuDessert/MenuDessert'
import Menus from './Menus.json'

<<<<<<< HEAD
const Menu = () => {
  return (
    <div className='menu-container'>
      <nav>
        <Link to='/' >Brunch</Link>
        <Link to='/lunch-menu' >Lunch</Link>
        <Link to='/dinner-menu' >Dinner</Link>
        <Link to='/dessert-menu' >Dessert</Link>
      </nav>
      <div className='current-menu'>
        <Route exact path='/' render={MenuBrunch} />
        <Route path='/lunch-menu' render={MenuLunch} />
        <Route path='/dinner-menu' render={MenuDinner} />
        <Route path='/dessert-menu' render={MenuDessert} />
=======
console.log(Menus);

class Menu extends Component {
  constructor() {
    super()
    this.state = {
      menus: Menus
    }
  }
  render() {
    console.log(this.state.menus.Dinner)
    return (
      <div className='menu-container'>
        <nav>
          <Link to='/'>Brunch</Link>
          <Link to='/lunch-menu'>Lunch</Link>
          <Link to='/dinner-menu'>Dinner</Link>
          <Link to='/dessert-menu'>Dessert</Link>
        </nav>
        <div className='current-menu'>
          <Route exact path='/' render={MenuBrunch} />
          <Route path='/lunch-menu' render={MenuLunch} />
          <Route path='/dinner-menu' render={() =>
            <MenuDinner menu={this.state.menus.Dinner} />} />
          <Route path='/dessert-menu' render={MenuDessert} />
        </div>
>>>>>>> 0ccabeb4cd502829394426e69aa6576623003c14
      </div>
    )
  }

}
