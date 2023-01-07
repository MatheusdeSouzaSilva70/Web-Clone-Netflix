import "./FeaturedMovie.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const FeaturedMovie = ({item}) => {

let firstData = new Date(item.first_air_date);
let genres = [];

for(let i in item.genres){
    genres.push(item.genres[i].name);
}

let description = item.overview;
if( description.length > 170){
    description = description.substring(0, 170) + '...';
}

  return (
   <section className="featured" style={{
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
   }}>
    <div className="featured--vertical">
        <div className="featured--horizontal">
            <div className="featured--name"> {item.original_name} </div>
            <div className="featured--info">
                <div className="featured--points">{item.vote_average} Pontos</div>
                <div className="featured--year">{firstData.getFullYear()} </div>
                <div className="featured--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                <div className="featured--description">{description}</div>
                <div className="featured--buttons">
                    <a href={`/watch/${item.id}`} className="featured--watchbutton">▶️ Assistir</a>
                    <a href={`/list/add/${item.id}`} className="featured--mylistbutton" >+ Minha lista </a>
                </div>
                <div className="featured--genres"><strong>Generos: </strong>{genres.join(', ')}</div>

            </div>
        </div>
    </div>

   </section>
  )
}

export default FeaturedMovie