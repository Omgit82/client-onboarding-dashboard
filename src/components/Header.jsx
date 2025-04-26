import React from 'react';

const Header = () => {
  return (
    <header style={headerStyles}>
      <h1 style={titleStyles}>Client Onboarding Dashboard</h1>
      <p style={subtitleStyles}>Track client progress, feature usage, and support tickets.</p>
    </header>
  );
};

const headerStyles = {
  backgroundColor: '#2E294E',
  color: 'white',
  padding: '1.5rem',
  textAlign: 'center',
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
};

const titleStyles = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: '2.5rem',
};

const subtitleStyles = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: '1.2rem',
  color: '#F4F4F4',
};

export default Header;
