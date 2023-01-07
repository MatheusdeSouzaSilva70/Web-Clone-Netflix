
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

import { useEffect, useState } from "react";
import Header from './components/Header';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
      const loadAll = async () =>{
          // Pegando a lista total

          let list = await Tmdb.getHomeList();
          setMovieList(list);

          // pegando o featured

          let originals = list.filter(i=> i.slug === 'originals');
          let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
          let chosen = originals[0].items.results[randomChosen];
          let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
          setFeaturedData(chosenInfo);
         
      }

      loadAll();
    }, []);

    useEffect(() =>{
      const scrollListener = () =>{
        if(window.scrollY >70){
          setBlackHeader(true);
        } else{
          setBlackHeader(false);
        }
      }
      window.addEventListener('scroll', scrollListener);

      return() =>{
        window.removeEventListener('scroll', scrollListener);
      }
    },[])
    // 
  
  return (
    

    <div className="App">
      <Header black={blackHeader}/>
      {featuredData && 
       <FeaturedMovie item={featuredData}/>
       }
     
     <section className= "lists"> 
      {movieList && movieList.map((item, key) => (
           <MovieRow key={key} title={item.title} items={item.items}/>
          
      ))}
     </section>
     <footer>
     <div className="footer-item"> Feito por: <span>Matheus de Souza Silva,</span>ano:2023<span></span><br/></div>
         <div className="footer-item"> Direitos de imagem para Netflix</div>
          <div className="footer-item">Dados pego pelo site Themoviedb.org</div>
          

     </footer>
     {movieList.length <=0 && 
     <div className="loading">
     <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="carregando" />
     </div>
     
     }
    </div>
  );
}

export default App;
