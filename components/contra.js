import React, { useEffect } from 'react';

const ContraBadge = ({ userId, theme = 'dark', username }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://contra.com/static/embed/sdk.js';
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, [userId, theme, username]);

  return (
    <div
      className="contra-hire-me-button"
      data-analyticsUserId={userId}
      data-theme={theme}
      data-username={username}
    />
  );
};

export default ContraBadge;