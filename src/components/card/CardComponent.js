import React, { Component } from 'react'
import Child from '../child/Child';

export class CardComponent extends Component {
  render() {
    return (
      <div className="card-component">
        Hello from new card

        <Child className='hey' index={1} />
        <Child index={2} />
        <Child index={3} />
      </div>
    )
  }
}

export default CardComponent