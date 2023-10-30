import React, {useEffect} from 'react';
import './Navigation.css';


export const Navigation = () => {
  useEffect(() => {
    const storage = window.sessionStorage;
  }, []);

  return (
    <div>
      <div className="navigation">
        <div id="swimbi-vertical">
          <ul>
            <li><a href="/friends">Friends</a></li>            
            <li><a href="/albums">Albums</a></li>                                                          
          </ul>
        </div>  
      </div>
    </div>
  )
}