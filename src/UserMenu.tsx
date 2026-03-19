import React, { useState } from 'react';
import { User } from '@gadagi/types';
import { Button } from '@gadagi/design-system';
import './UserMenu.scss';

interface UserMenuProps {
  user: User;
  onLogout: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({ user, onLogout }) => {
  const [open, setOpen] = useState(false);
  const initials = `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();

  return (
    <div className="user-menu">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="user-menu__trigger"
      >
        <div className="user-menu__avatar">{initials}</div>
        <span className="user-menu__name">{user.firstName}</span>
      </button>

      {open && (
        <div className="user-menu__dropdown">
          <div className="user-menu__profile">
            <p className="user-menu__profile-name">
              {user.firstName} {user.lastName}
            </p>
            <p className="user-menu__profile-email">{user.email}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            fullWidth
            onClick={() => {
              setOpen(false);
              onLogout();
            }}
          >
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
};
