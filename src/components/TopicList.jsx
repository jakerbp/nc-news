import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../utils";

const TopicList = () => {
    const [topics, setTopics] = useState([{slug:'one'},'two','three']);
    const [loading, setLoading] = useState(true);

useEffect(()=>{
    fetchTopics().then((topicsData) => {
        setTopics(topicsData);
        setLoading(false);
      });
},[])
if (loading) return <h3 className="loading">LOADING...</h3>;
  return (
    
      <ol className="topic-filter">
        <p className="filter-title">FILTER BY TOPIC:</p>
        <Link to={`/articles`}><li key='all'><button className="topic-pill">All</button></li></Link>
      {topics.map((topic)=>{
       return <Link to={`/articles?topic=${topic.slug}`} key={topic.slug}><li ><button className="topic-pill">{topic.slug}</button></li></Link>
      })}
      </ol>

  );
};

export default TopicList;
