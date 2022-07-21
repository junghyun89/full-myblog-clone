import './sidebar.css';
import sideImg from '../../img/0.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faPinterestSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('/categories');
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={sideImg} alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`}>
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <FontAwesomeIcon className="sidebarIcon" icon={faFacebookSquare} />
          <FontAwesomeIcon className="sidebarIcon" icon={faTwitterSquare} />
          <FontAwesomeIcon className="sidebarIcon" icon={faPinterestSquare} />
          <FontAwesomeIcon className="sidebarIcon" icon={faInstagramSquare} />
        </div>
      </div>
    </div>
  );
}
