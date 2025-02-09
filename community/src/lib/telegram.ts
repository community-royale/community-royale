interface TelegramWebApp {
  ready: () => void;
  expand: () => void;
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp;
  };
}

declare var window: Window & typeof globalThis;

export const initTelegramApp = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-web-app.js";
    script.async = true;
    script.onload = () => {
      if (window.Telegram.WebApp) {
        // Initialize the Web App
        window.Telegram.WebApp.ready();
        // Expand the Web App to full height
        window.Telegram.WebApp.expand();
        resolve(window.Telegram.WebApp);
      }
    };
    document.head.appendChild(script);
  });
};
