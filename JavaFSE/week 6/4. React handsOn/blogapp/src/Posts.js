import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error:null
    };
  }
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch posts');
        }
        return res.json();
      })
      .then((data) => {
        const postObjects = data.slice(0, 5).map(
          (p) => new Post(p.id, p.title, p.body)
        );
        this.setState({ posts: postObjects });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }
  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('An error occurred: ' + error.message);
    console.error('componentDidCatch:', error, info);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <p style={{ color: 'red' }}>Error: {error.message}</p>;
    }
    return (
      <div>
        <h2>Blog Posts</h2>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
