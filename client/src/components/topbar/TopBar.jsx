import './topbar.css';
import myImg from '../../img/jeong1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = 'http://localhost:5000/images/';

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <div className="topLogo">
          <Link to="/">안JUNG</Link>
        </div>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/">ABOUT</Link>
          </li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link to="/write">WRITE</Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings" className="imgBox">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link to="/register">REGISTER</Link>
            </li>
          </ul>
        )}
        <FontAwesomeIcon icon={faSearch} className="searchIcon" />
      </div>
    </div>
  );
}
