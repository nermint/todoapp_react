import React from 'react';

import './ListItems.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {trash} from  '@fortawesome/fontawesome-free-solid';

const ListItems = ({item, deleteItem})=>{


  return(
    <div className="items">
    { item.name }
    <FontAwesomeIcon
     className="trash" 
     icon="trash"
     onClick={ ()=>deleteItem(item.id)}/>
    </div>
  );
}

export default ListItems;