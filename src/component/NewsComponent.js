import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes  from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
// document.title = `News App - ${this.props.category}`
const NewsComponent = (props)=> {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
 const updateNews=async()=>{
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
  setLoading(true)
  let data = await fetch(url);
  let parsedData = await data.json();
  setArticles(parsedData.articles);
  setTotalResults(parsedData.totalResults);
  setLoading(false)
  }
  // async componentDidMount(){
  //   await this.updateNews();
  //   // console.log("hti");
  //   }
  useEffect(() => {
      updateNews();
  },[])
  
  const handlePrevClick= async()=>{
    setLoading(true);
    setPage(page-1);
    setTimeout(async() => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&category=${props.category}&apiKey=${props.apiKey}&page=${page-1}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
       setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false)
    }, 1000);
  }
  const handleNextClick = async()=>{
    setLoading(true);
    setPage(page+1);
    setTimeout(async() => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
       setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false)
    }, 1000);
  }

 
  const handleClick = async(url)=>{
    // let newArticles = this.state.articles.filter((article)=>{
    //   return article.url!==url;
    // })
    // this.setState({
    //   articles:newArticles
    // })
    // console.log(url);
  }
  const fetchMoreData = async() => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    // this.setState({
    //   page:this.state.page+1,
    //   loading:true,
    // });
    setLoading(true);
    setPage(page+1);
    setTimeout(async() => {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
       setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setLoading(false)
    }, 1000);
 
  };
  
    return (
      <>
      <h1 style={{textAlign:"center",margin:"2rem",fontWeight:"bold",fontSize:"4rem"}}>Top Headlines</h1>
      {loading && <Spinner/>}
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner />}
        >
      <div className="NewsComponent">
      {articles.map((article,index)=>{
        return(
          <NewsItem onClick={()=>handleClick(article.url)} key={index} article={article}/>
        )
      })}
      </div>
      </InfiniteScroll>
      <div className="pagination">
      <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>Prev</button>
      <button disabled={page>=Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next</button>
      </div>

      </>
    )
}

NewsComponent.defaultProps = {
  country:'in',
  pageSize:8,
  category:'general'
}
NewsComponent.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

export default NewsComponent;