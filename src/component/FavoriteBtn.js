/* eslint-disable react/prop-types */
import React from "react";
import { ReactComponent as Heart } from "../asset/heart.svg";
import { ReactComponent as HeartFilled } from "../asset/heart-filled.svg";

const FavoriteBtn = ({ addClassName, favorites, addToFavorites }) => {
  return (
    <button
      className={`group absolute right-0 size-12 items-center justify-center ${addClassName}`}
      onClick={addToFavorites}
    >
      {favorites ? (
        <HeartFilled />
      ) : (
        <>
          <Heart className="group-hover:hidden" />
          <HeartFilled className="hidden group-hover:block" />
        </>
      )}
    </button>
  );
};

export default FavoriteBtn;
