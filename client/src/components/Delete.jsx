import axios from 'axios';
import React from 'react';

const DeleteCard = props => {


  const deleteCard = () => {
    const id = {
      item_id: props.item_id
    }
    console.log(id);
    axios.delete("/item", {
      data: {
        item_id: props.item_id
      }
    })
  }

  return (
    <button className='delete' onClick={deleteCard}>&#10060;</button>
  )
};

export default DeleteCard