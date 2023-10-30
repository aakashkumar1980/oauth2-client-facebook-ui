import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pages.css';


interface Friend {
  code: string;
  description: string;
}

function Friends() {
  const [friend, setFriend] = useState<Friend[]>([]);

  useEffect(() => {
  }, []);

  return (
    <div className='container'>
      <div className="text container-table">Friends</div>
      
    </div>
  );
}

export default Friends;
