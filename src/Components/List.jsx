import React from 'react';
import './List.css';
import ListItem from './ListItem';


function List({ ids, entities,activePage,setActivePage,activeAnchor,setActiveAnchor}) {
 
    return (
        <ul  className='menu'>
            {ids.map((page,index) => {
                return <ListItem
                    key={index} page={entities.pages[page]}
                    entities={entities}
                    activePage={activePage}
                    setActivePage={setActivePage}
                    activeAnchor={activeAnchor}
                    setActiveAnchor={setActiveAnchor}
                />
            })}
        </ul>
    )
}

export default List;



