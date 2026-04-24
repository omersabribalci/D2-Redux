import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from '../store/actions/favoritesActions';

const FavoriteMovieList = (props) => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  return (
    <div className="flex-1 sm:max-w-[250px] p-5 pr-5 bg-white shadow rounded-md">
      <h5 className="font-bold">Favori Filmler</h5>
      {
        <div className="pt-3 text-sm">
          {favorites.map((movie) => (
            <div className="py-1 flex gap-2 justify-between">
              <Link
                key={movie.id}
                to={`/movies/${movie.id}`}
                data-testid="favorite-movie"
              >
                {movie.title}
              </Link>
              <span
                onClick={() => dispatch(removeFavorite(movie.id))}
                className="material-icons hover:text-red-600 text-[18px] cursor-pointer"
              >
                remove_circle
              </span>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default FavoriteMovieList;
