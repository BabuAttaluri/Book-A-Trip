import React from 'react';

const Scrollh = (props) => {
  return( 
    <div style={{overflowY: 'scroll', height:'63vh'}}>
      {props.children}
    </div>	
  );
}

export default Scrollh;