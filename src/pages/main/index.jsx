import { Movie } from '../../components/Movie';
import './main.scss';

const Movies = ({ movies, viewTrailer, closeCard }) => {
  return (
    <div data-testid="movies">
      {movies.movies.results?.map(movie => {
        return (
          <Movie movie={movie} key={movie.id} viewTrailer={viewTrailer} closeCard={closeCard} />
        );
      })}
    </div>
  );
};

export { Movies };
