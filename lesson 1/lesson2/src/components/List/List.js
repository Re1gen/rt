import React from 'react';

const List = ({myDay}) => {
    return (
        <div>
            {
                myDay.map(item => (
                    <div key={item.id}>
                        <p>{item.title}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default List;