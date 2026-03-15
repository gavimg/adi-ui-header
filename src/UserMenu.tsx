import React, { useState } from 'react';
import { User } from '@adi/types';
import { Button, colors, typography } from '@adi/design-system';

interface UserMenuProps {
  user: User;
  onLogout: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({ user, onLogout }) => {
  const [open, setOpen] = useState(false);
  const initials = `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          background: 'transparent', border: 'none', cursor: 'pointer', color: '#fff',
        }}
      >
        <div
          style={{
            width: '32px', height: '32px', borderRadius: '50%',
            background: colors.primary[500],
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.semibold,
            color: '#fff',
          }}
        >
          {initials}
        </div>
        <span style={{ fontSize: typography.fontSize.sm }}>{user.firstName}</span>
      </button>

      {open && (
        <div
          style={{
            position: 'absolute', right: 0, top: '100%', marginTop: '8px',
            background: '#fff', border: `1px solid ${colors.neutral[200]}`,
            borderRadius: '8px', padding: '8px', minWidth: '160px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 100,
          }}
        >
          <div style={{ padding: '8px 12px', borderBottom: `1px solid ${colors.neutral[100]}`, marginBottom: '4px' }}>
            <p style={{ fontSize: typography.fontSize.sm, fontWeight: typography.fontWeight.medium, color: colors.neutral[800], margin: 0 }}>
              {user.firstName} {user.lastName}
            </p>
            <p style={{ fontSize: typography.fontSize.xs, color: colors.neutral[400], margin: 0 }}>{user.email}</p>
          </div>
          <Button variant="ghost" size="sm" fullWidth onClick={() => { setOpen(false); onLogout(); }}>
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
};
