import React, { useState } from "react";

const Footer = (props) => {
  const year = new Date().getFullYear();
  const date = new Date().toLocaleTimeString();
  const [time, setTime] = useState(date);

  const getTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };
  setInterval(getTime, 1000);

  return (
    <footer className="bg-neutral-800 text-zinc-400 mb-5">
      <div className="text-center py-6">
        <p>
          © {year} by Aji Bimantoro. {time}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
