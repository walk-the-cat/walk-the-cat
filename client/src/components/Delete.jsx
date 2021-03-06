import axios from 'axios';
import React from 'react';

const DeleteCard = props => {
  const deleteCard = async() => {
    const id = {
      item_id: props.item_id
    }
    
    await axios.delete("/api/item", {
      data: {
        item_id: props.item_id
      }
    })
    props.update()
  }

  return (
    <button className='delete' onClick={deleteCard}><img src="./client/public/pictures/delete-icon.png"/></button>
  )
};

export default DeleteCard