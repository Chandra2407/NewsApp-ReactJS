import React from 'react'

const NewsItem = (props)=> {
  
     let {urlToImage,title,description,content,author,url}=props.article;
    return (
     <>
     <div onClick={props.onClick} className="card">
        <img className="card-img-top" src={urlToImage} alt="Cardcap"/>
        <div className="card-body">
        <a href={url} target="_blank" rel="noreferrer"><h2 className="card-text">{title}</h2></a>
          <p className="card-text">{description}</p>
          <p className="card-text">{content}</p>
          <p><strong>{author}</strong></p>
        </div>
    </div>
     </>
    )

}

export default NewsItem