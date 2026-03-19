import React from 'react';
import { User } from '@gadagi/types';
import { UserMenu } from './UserMenu';
import './Header.scss';

interface HeaderProps {
  appName?: string;
  user?: User | null;
  onLogout?: () => void;
  logo?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  appName = 'gadagi Platform',
  user,
  onLogout = () => {},
  logo,
}) => {
  return (
    <header className="ui-header">
      <div className="ui-header__brand">
        {logo}
        <span className="ui-header__title">{appName}</span>
      </div>

      <div className="ui-header__actions">
        {user && <UserMenu user={user} onLogout={onLogout} />}
      </div>
    </header>
  );
};
