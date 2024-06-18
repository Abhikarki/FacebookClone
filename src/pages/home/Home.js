import React from 'react';
import "./Home.scss";
import Stories from '../../components/stories/Stories';
import Post from '../../components/posts/Post';

export default function Home() {
  return (
    <div className="home">
      <Stories/>
      <Post/>
    </div>
  )
}
