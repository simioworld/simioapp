import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import React from "react";
interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const FavoriteButton = ({
  isFavorite,
  onClick,
  disabled,
}: FavoriteButtonProps) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();

    onClick();
  };

  return (
    <div className="group">
      <button
        className={cn(
          "opacity-0 group-hover:opacity-100 transition hover:text-blue-600",
          disabled && "cursor-not-allowed opacity-75"
        )}
        onClick={handleClick}
        disabled={disabled}
      >
        <Heart
          className={cn(
            "h-4 w-4 fill-white",
            isFavorite && "fill-blue-600 text-white"
          )}
        />
      </button>
    </div>
  );
};

export default FavoriteButton;
