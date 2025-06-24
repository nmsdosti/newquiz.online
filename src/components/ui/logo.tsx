import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <Link to="/" className={`block ${className}`}>
      <div className="flex items-center space-x-2">
        <img
          src="https://i.postimg.cc/pXxdtDJz/quiz-online-logo.png"
          alt="Quiz Online Logo"
          className="h-12 w-auto ml-16"
        />
      </div>
    </Link>
  );
};

export default Logo;
