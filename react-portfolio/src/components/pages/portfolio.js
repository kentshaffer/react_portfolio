import React from 'react';

function Portfolio(props) {

  return (
    <ul>
      {props.projectArray.map((item) => {
        return (
          <li key={item.id}>{item.name}</li>
          );
        })}

    </ul>
  );
}

export default Portfolio;