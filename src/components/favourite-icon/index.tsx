import React from "react";

interface IProps {
  color: string;
  onClick?: () => void;
}

export const FavouriteIcon: React.FC<IProps> = ({ color, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill={color}
      fillRule="evenodd"
      viewBox="0 0 16 16"
      onClick={() => {
        onClick?.();
      }}
      role={onClick ? "button" : "img"}
    >
      <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
    </svg>
  );
};
