import React, { useState } from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

function App() {
  const [likeColor,setLikeColor] = useState('')
  const hendelLike = () => {
    const color = likeColor ? '' : 'primary'
    setLikeColor(color)
  }
  return (
    <div>
      {/* materila-ui-icon */}
      <ThumbUpAltIcon onClick={hendelLike} color={likeColor}/>
    </div>
  );
}

export default App;
