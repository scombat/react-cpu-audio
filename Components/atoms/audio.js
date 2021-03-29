import React, { useEffect } from 'react';

export const Audio = () => {
  useEffect(() => import("../../public/vendors/cpu-audio.min.js"), []);

  return (
    <div>
      <cpu-audio>
        <audio controls src='/blank.mp3'></audio>
      </cpu-audio>
    </div>
  )
};