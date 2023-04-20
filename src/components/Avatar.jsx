import React from "react";

function Avatar({ src }) {
  return (
    <div className="avatar flex justify-center">
      <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={src} />
      </div>
    </div>
  );
}

export default Avatar;
