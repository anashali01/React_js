import React, { memo } from 'react'

const Child = ({sum}) => {

    console.log(`Child Component!`);
    
  return (
    <div>
      <h2>Sum : {sum} </h2>
    </div>
  )
}

export default memo(Child)
