import React, { useState } from "react";
import useToggle from "./hooks/useToggle";

export default function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeartBroken, toggleIsHeartBroken] = useToggle(false);
  const [isApple, toggisApple] = useToggle(true);

  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? "😀" : "😭"}</h1>
      <h1 onClick={toggleIsHeartBroken}>{isHeartBroken ? "💔" : "💖"}</h1>
      <h1 onClick={toggisApple}>{isApple ? "🍎" : "🍉"}</h1>
    </div>
  );
}
