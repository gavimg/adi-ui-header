# @gadagi/ui-header - Header Component

A flexible header component for the Gadagi platform micro-frontend architecture.

## Overview

This package provides a customizable header component with navigation, user menu, and theme switching capabilities for all Gadagi micro-frontends.

## Installation

```bash
npm install @gadagi/ui-header
```

## Peer Dependencies

```bash
npm install react react-dom @gadagi/design-system @gadagi/types
```

## Features

- 🎨 **Customizable** - Flexible branding and layout options
- 🧭 **Navigation** - Integrated navigation menu support
- 👤 **User Menu** - User profile and authentication controls
- 🌓 **Theme Switcher** - Built-in light/dark theme toggle
- 📱 **Responsive** - Mobile-friendly design
- 🎯 **TypeScript** - Full type safety

## Quick Start

```tsx
import { Header } from '@gadagi/ui-header';
import { ThemeProvider } from '@gadagi/design-system';

function App() {
  return (
    <ThemeProvider>
      <Header
        title="Gadagi Platform"
        logo="/logo.svg"
        user={{
          name: "John Doe",
          avatar: "/avatar.jpg"
        }}
        onLogout={() => console.log('logout')}
      />
    </ThemeProvider>
  );
}
```

## Components

### Header

The main header component with customizable sections.

```tsx
import { Header } from '@gadagi/ui-header';

<Header
  title="Dashboard"
  logo="/logo.svg"
  user={user}
  onLogout={handleLogout}
  onThemeToggle={handleThemeToggle}
  navigationItems={navItems}
/>
```

**Props:**
- `title?: string` - Header title text
- `logo?: string` - Logo image URL
- `user?: User` - Current user information
- `onLogout?: () => void` - Logout callback
- `onThemeToggle?: () => void` - Theme toggle callback
- `navigationItems?: NavItem[]` - Navigation menu items
- `showThemeToggle?: boolean` - Show theme switcher (default: true)
- `showUserMenu?: boolean` - Show user menu (default: true)
- `className?: string` - Additional CSS classes

### UserMenu

Dropdown menu for user actions.

```tsx
import { UserMenu } from '@gadagi/ui-header';

<UserMenu
  user={{
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatar.jpg"
  }}
  onLogout={handleLogout}
  onProfile={() => navigate('/profile')}
  onSettings={() => navigate('/settings')}
/>
```

**Props:**
- `user: User` - User information
- `onLogout: () => void` - Logout callback
- `onProfile?: () => void` - Profile navigation callback
- `onSettings?: () => void` - Settings navigation callback

### ThemeToggle

Theme switching button.

```tsx
import { ThemeToggle } from '@gadagi/ui-header';

<ThemeToggle
  theme="light"
  onToggle={handleThemeToggle}
/>
```

**Props:**
- `theme: 'light' | 'dark'` - Current theme
- `onToggle: () => void` - Theme toggle callback

## Usage Examples

### Basic Header

```tsx
import { Header } from '@gadagi/ui-header';

function BasicHeader() {
  return (
    <Header
      title="My App"
      logo="/logo.svg"
    />
  );
}
```

### Header with User Menu

```tsx
function HeaderWithUser() {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatar.jpg"
  });

  const handleLogout = () => {
    // Logout logic
  };

  return (
    <Header
      title="Dashboard"
      user={user}
      onLogout={handleLogout}
    />
  );
}
```

### Header with Navigation

```tsx
function HeaderWithNavigation() {
  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', path: '/dashboard' },
    { id: 'users', label: 'Users', path: '/users' },
    { id: 'reports', label: 'Reports', path: '/reports' }
  ];

  return (
    <Header
      title="Admin Panel"
      navigationItems={navigationItems}
      onThemeToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    />
  );
}
```

### Custom Styling

```tsx
function CustomHeader() {
  return (
    <Header
      title="Custom App"
      className="custom-header"
      showThemeToggle={false}
      showUserMenu={false}
    />
  );
}
```

```css
.custom-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}
```

## Integration with Design System

The header component integrates seamlessly with the Gadagi design system:

```tsx
import { Header } from '@gadagi/ui-header';
import { ThemeProvider, useTheme } from '@gadagi/design-system';

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeProvider>
      <Header
        title="Gadagi Platform"
        onThemeToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </ThemeProvider>
  );
}
```

## Responsive Design

The header automatically adapts to different screen sizes:

- **Desktop**: Full header with all sections
- **Tablet**: Compact navigation
- **Mobile**: Hamburger menu with slide-out navigation

```tsx
// Mobile navigation is handled automatically
<Header
  title="Mobile App"
  navigationItems={navItems}
  // Navigation becomes a hamburger menu on small screens
/>
```

## Accessibility Features

- **Keyboard Navigation**: Full tab support
- **Screen Readers**: Proper ARIA labels
- **Focus Management**: Logical focus flow
- **Color Contrast**: WCAG compliant colors

## TypeScript Support

Full TypeScript support with proper interfaces:

```tsx
import { HeaderProps, User } from '@gadagi/ui-header';
import { NavItem } from '@gadagi/types';

const user: User = {
  name: 'John Doe',
  email: 'john@example.com',
  avatar: '/avatar.jpg'
};

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', path: '/' }
];

const headerProps: HeaderProps = {
  title: 'App',
  user,
  navigationItems: navItems
};
```

## Customization

### Custom Branding

```tsx
<Header
  title="My Brand"
  logo="/custom-logo.svg"
  className="brand-header"
/>
```

### Custom Actions

```tsx
function CustomActions() {
  return (
    <div className="header-actions">
      <button onClick={handleNotification}>
        <BellIcon />
      </button>
      <button onClick={handleSearch}>
        <SearchIcon />
      </button>
    </div>
  );
}

<Header
  title="App"
  rightActions={<CustomActions />}
/>
```

## Development

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

MIT © Gadagi Team
