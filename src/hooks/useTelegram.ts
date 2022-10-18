import React from "react";

// @ts-ignore
const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    tg.close();
  };

  return { tg, onClose };
}
