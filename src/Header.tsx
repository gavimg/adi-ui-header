import React from 'react';
import { User } from '@gadagi/types';
import { colors, typography } from '@gadagi/design-system';
import { UserMenu } from './UserMenu';

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
    <header
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 1.5rem', height: '56px',
        background: colors.neutral[800],
        borderBottom: `1px solid ${colors.neutral[900]}`,
        position: 'sticky', top: 0, zIndex: 50,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {logo}
        <span
          style={{
            fontSize: typography.fontSize.lg,
            fontWeight: typography.fontWeight.semibold,
            color: '#fff',
            letterSpacing: '-0.01em',
          }}
        >
          {appName}
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {user && <UserMenu user={user} onLogout={onLogout} />}
      </div>
    </header>
  );
};
