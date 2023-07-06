import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import starredSlice from '../../data/starredSlice';
import { Movie } from '../../components/Movie';
import { Icon } from '../../components/Icon';
import { MoviesGrid } from '../../components/MoviesGrid';

import './starred.scss';

const Starred = () => {
  const state = useSelector(state => state);
  const { starred } = state;
  const { clearAllStarred } = starredSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className="starred" data-testid="starred">
      {starred.starredMovies.length > 0 && (
        <div data-testid="starred-movies" className="starred-movies">
          <h6 className="header">Starred movies</h6>
          <MoviesGrid>
            {starred.starredMovies.map(movie => (
              <Movie movie={movie} key={movie.id} />
            ))}
          </MoviesGrid>

          <footer className="text-center">
            <button className="btn btn-primary" onClick={() => dispatch(clearAllStarred())}>
              Remove all starred
            </button>
          </footer>
        </div>
      )}

      {starred.starredMovies.length === 0 && (
        <div className="text-center empty-cart">
          <Icon iconName="star" width="1rem" height="1rem" />
          <p>There are no starred movies.</p>
          <p>
            Go to <Link to="/">Home</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export { Starred };
