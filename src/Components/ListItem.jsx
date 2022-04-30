import React, { useState } from 'react';
import List from './List';
import './ListItem.css';
import arrowUp from './images/arrow-up.png';
import arrowDown from './images/arrow-down.png';

function ListItem({ page, entities, activePage, setActivePage, activeAnchor, setActiveAnchor }) {

    const [displayPages, setDisplayPages] = useState(false);
    const { title, url, pages, anchors, id, level } = page;

    const indentPage = {
        paddingLeft: `${26 + level * 20}px`
    }

    const indentAnchor = {
        paddingLeft: `${46 + level * 20}px`
    }

    const positionArrow = {
        left: `${3 + level * 20}px`
    }


    function onChangeActiveId(e) {
        e.preventDefault()
        setActivePage(id)

    }

    function showPages() {
        setDisplayPages(!displayPages)
    }

    return (
        <li key={id} id={id} >
            <div className='title-wrapper'>
                {pages && (
                    <img
                        style={positionArrow}
                        src={displayPages ? arrowUp : arrowDown}
                        onClick={showPages}
                        alt={title}>
                    </img>
                )}

                <a
                    style={indentPage}
                    key={id} onClick={onChangeActiveId}
                    className={activePage === id ? 'active-page' : ''}
                    href={url}>{title}
                </a>
            </div>

            {anchors && activePage === id && (
                <ul className='anchor-list'>
                    {anchors.map((elem) => (
                        <li
                            id={entities.anchors[elem].id}
                            key={entities.anchors[elem].id}
                            className='anchor-item'
                        >
                            <div className='title-wrapper'>
                                <a
                                    onClick={() => setActiveAnchor(entities.anchors[elem].id)}
                                    className={activePage === id && activeAnchor === entities.anchors[elem].id ? 'active-page' : 'active-anchor'}
                                    href={`/#${entities.anchors[elem].url}/${entities.anchors[elem].anchor}`}
                                    style={indentAnchor}
                                >
                                    {entities.anchors[elem].title}
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {displayPages && pages &&
                <List
                    ids={pages}
                    entities={entities}
                    activePage={activePage}
                    setActivePage={setActivePage}
                    activeAnchor={activeAnchor}
                    setActiveAnchor={setActiveAnchor}

                />
            }

        </li>
    );

}

export default ListItem;