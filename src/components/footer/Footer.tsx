import React, {useEffect} from 'react';
import './Footer.css';


export const Footer = () => {
  useEffect(() => {
    const storage = window.sessionStorage;
  }, []);

  return (
    <div>
      <div className="footer">
      </div>
    </div>
  )
}