import React, { PropTypes } from 'react';
import { Dropdown, MenuItem } from 'react-bootstrap';
import UserToggle from './UserToggle';
import s from './UserDropdown.css';
import cx from 'classnames';

class UserDropdown extends React.Component {
  static propTypes = {
    user: PropTypes.string
  };

  render() {
    const { user } = this.props;
    return (
      <div className={cx("nav notifications pull-right",s['user-dropdown'])}>
        <Dropdown bsStyle="white" title="User" className="pull-right" id="user">
          <UserToggle user={user} bsRole="toggle"/>
          <ul className={cx("dropdown-menu",s['menu'])} bsRole="menu">
            <MenuItem eventKey="1"><i className="fa fa-user"/>Profile</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="2"><i className="fa fa-key"/>Change password</MenuItem>
            <MenuItem eventKey="3"><i className="fa fa-sign-out"/>Logout</MenuItem>
          </ul>
        </Dropdown>
      </div>
    );
  }
}

export default UserDropdown