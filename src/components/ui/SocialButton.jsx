import React from "react";

function SocialButton() {
  return (
    <>
      <a
        href="https://github.com/iamernesto14"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button py-3 px-7 text-white bg-transparent border border-mobile-100 rounded-full"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/ernesto-anokye"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button py-3 px-7 text-white bg-transparent border border-mobile-100 rounded-full"
      >
        LinkedIn
      </a>
      <a
        href="https://x.com/iamernesto14"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button py-3 px-7 text-white bg-transparent border border-mobile-100 rounded-full"
      >
        X
      </a>
    </>
  );
}

export default SocialButton;
