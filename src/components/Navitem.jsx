import React from 'react';

const Navitem = ({itemTitle, changePage}) => {
    return (
        <li onClick={() => changePage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
    );
};

export default Navitem;