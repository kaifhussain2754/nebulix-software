import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = "https://files.bpcontent.cloud/2024/10/22/07/20241022071232-C1S2P9K8.js";
    script2.async = true;

    // Append the first script and wait for it to load
    const loadScripts = () => {
      return new Promise((resolve) => {
        script1.onload = () => {
          document.body.appendChild(script2);
          resolve();
        };
        document.body.appendChild(script1);
      });
    };

    const injectBotpressScripts = async () => {
      await loadScripts();
      // Optionally, add any additional initialization logic here after both scripts have loaded
    };

    injectBotpressScripts();

    // Cleanup function to remove scripts
    return () => {
      if (document.body.contains(script1)) {
        document.body.removeChild(script1);
      }
      if (document.body.contains(script2)) {
        document.body.removeChild(script2);
      }
    };
  }, []);

  return null; // This component doesn't need to render anything
};

export default Chatbot;
