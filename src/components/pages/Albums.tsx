import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Pages.css';


interface Album {
  code: string;
  description: string;
}

function Albums() {
  const [album, setAlbum] = useState<Album[]>([]);

  useEffect(() => {
  }, []);

  return (
    <div className='container'>
      <div className="text container-table">Albums</div>
      
    </div>
  );
}

export default Albums;
