// src/components/Chatbot.jsx
import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Load the Botpress chat scripts
    const injectBotpressScript = () => {
      const script1 = document.createElement('script');
      script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
      script1.async = true;

      const script2 = document.createElement('script');
      script2.src = "https://files.bpcontent.cloud/2024/10/22/07/20241022071232-C1S2P9K8.js";
      script2.async = true;

      document.body.appendChild(script1);
      document.body.appendChild(script2);

      // Cleanup the scripts on component unmount
      return () => {
        document.body.removeChild(script1);
        document.body.removeChild(script2);
      };
    };

    injectBotpressScript();
  }, []);

  return null; // This component doesn't need to render anything
};

export default Chatbot;
