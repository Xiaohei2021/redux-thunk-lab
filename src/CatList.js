// write your CatList component here
import React, { Component } from 'react'

export default class CatList extends Component {
  render() {
    const cat = this.props.catPics.map((cat)=> <img src={cat.url} key={cat.id} alt={cat.id} />)

    return (
        <div>
          CatList
            {cat}
        </div>
    )
  }
}
