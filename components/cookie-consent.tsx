'use client';

import { useEffect, useState } from 'react';
import { JSX } from 'react/jsx-runtime';

const COOKIE_NAME = 'cookie_consent';
const COOKIE_DURATION_DAYS = 365;

function getCookie(name: string): boolean {
  return document.cookie.split('; ').some(cookie => cookie.startsWith(`${name}=true`));
}

function setCookie(name: string, value: string, days: number): void {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

interface CookieConsentProps {
  onAccept?: () => void;
}

export default function CookieConsent({ onAccept }: CookieConsentProps): JSX.Element | null {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookie(COOKIE_NAME)) {
      setVisible(true);
    } else {
      if (onAccept) onAccept();
    }
  }, [onAccept]);

  const handleAccept = (): void => {
    setCookie(COOKIE_NAME, 'true', COOKIE_DURATION_DAYS);
    setVisible(false);
    if (onAccept) onAccept();
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center justify-between z-50">
      <p className="text-sm mb-2 md:mb-0">
        We use cookies to improve your experience. By using our site, you accept our cookie policy.
      </p>
      <button
        onClick={handleAccept}
        className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded"
      >
        Accept
      </button>
    </div>
  );
}
