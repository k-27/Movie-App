import React, {useCallback, useEffect, useState,Suspense} from 'react';
import styles from './HomeStyle.module.css';
import {Container,Row,Col } from 'react-bootstrap';
import { fetchMovies,resetAllLoaded } from "../redux/actions/movieListing";
import { useDispatch, useSelector } from "react-redux";
import FallBackCard from './card/FallBackCard';
import Header from './header/Header'
const MovieCard = React.lazy(() => import('./card/MovieCard'));

function Home() {

  //state from redux store
  const movieList = useSelector(store=>store.moviesReducer.movies)
  const pageNumber = useSelector(store=>store.moviesReducer.pageNumber)
  const allLoaded = useSelector(store=>store.moviesReducer.allLoaded)
  const loading = useSelector(store=>store.moviesReducer.loading)
  const searchKeyword = useSelector(store=>store.moviesReducer.searchKeyword)

  //local state to store filtered movies
  const [filteredMovies, setFilteredMovies] =  useState([])

  const dispatch = useDispatch();

  const handleScroll = useCallback((e)=>{
    let scrollHeight = e.target.documentElement.scrollHeight;
    let currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if((currentHeight+1 >= scrollHeight) && !loading){
      fetchMovies(pageNumber)(dispatch)
    }
  },[pageNumber,loading,dispatch])

  useEffect(() => {
    if (!allLoaded) document.addEventListener('scroll', handleScroll);
  return () => {
    document.removeEventListener('scroll', handleScroll)
  };
  },[ handleScroll,dispatch,allLoaded])

  useEffect(()=>{
    fetchMovies(1)(dispatch)
  return () => {
     dispatch(resetAllLoaded())
    }
  },[])
  
  useEffect(()=>{
    if(searchKeyword){
      setFilteredMovies( movieList.filter( (movie) => movie.name.toLowerCase().includes(searchKeyword.toLowerCase())))
    }else{
      setFilteredMovies(movieList)
    }  
  },[searchKeyword,movieList])

  return (  
    <Container className={styles.main} fluid>
      <Header />
      <Row className={styles.contents} >
        {filteredMovies.map((movie)=>{
          return(
            <Col xs={4} sm={3} md={2} >
              <Suspense fallback={<FallBackCard />}>
                <MovieCard title={movie["name"]} poster={movie["poster-image"]}/>
              </Suspense>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Home

