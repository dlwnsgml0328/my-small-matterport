'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ShowcaseBundleWindow } from '../../../public/mpsdk_bundle/sdk';

const Matterport = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);

    return () => {
      setIsRendered(false);
    };
  }, []);

  const onLoad = useCallback(() => {
    if (!iframeRef.current) {
      alert('iframeRef.current is null');
      return;
    }

    iframeRef?.current?.contentWindow?.MP_SDK.connect(
      iframeRef?.current?.contentWindow as ShowcaseBundleWindow
    )
      .then((sdk) => {
        console.log('sdk:', sdk);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <>
      <h1>Hey</h1>

      {!isRendered ? (
        <span>Loading...</span>
      ) : (
        <iframe
          width='853'
          height='480'
          src={`/mpsdk_bundle/showcase.html?m=9bn8wwnC87a&applicationKey=${process.env.NEXT_PUBLIC_MATTERPORT_KEY}`}
          frameBorder='0'
          allow='fullscreen; vr'
          id='showcase-iframe'
          ref={iframeRef}
          onLoad={onLoad}
        />
      )}
    </>
  );
};

export default Matterport;

/**
 * 윈도우에 window.MP_SDK 가 없는디?
 */
