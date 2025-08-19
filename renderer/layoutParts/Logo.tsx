import logoUrl from '@/assets/logo.png';
import { container } from './Logo.css.ts';
import { useState } from 'react';

export function Logo() {
  const [showLocalImage, setShowLocalImage] = useState(false);

  return (
    <div className={container}>
      <a href="/">
        {
          !showLocalImage && (
            <img
              src="https://avatars.githubusercontent.com/u/28552513?v=4"
              height={64}
              width={64}
              alt="logo"
              key="remote-logo"
              onError={() => {
                setShowLocalImage(true);
              }}
            />
          )
        }
        {
          showLocalImage && (
            <img src={logoUrl} height={64} width={64} alt="logo" key="local-logo" />
          )
        }
      </a>
    </div>
  );
}
