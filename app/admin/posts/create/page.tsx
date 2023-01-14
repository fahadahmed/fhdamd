'use client'

import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

const inputStyles = {
  marginTop: '0.5rem',
  marginBottom: '0.5rem',
  padding: '1rem'
}

const textAreaStyles = {
  marginTop: '0.5rem',
  marginBottom: '0.5rem',
  padding: '1rem',
}

export default function CreatePost() {

  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState('');
  const [posts, setPosts] = useState([]);

  const handleCreatePost = async () => {
    const res = await fetch(`/api/post/createPost`, {
      method: 'POST',
      body: JSON.stringify({ title, excerpt, content, slug, tags }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(await res.json());
  }

  const handleTitleChange = (e: React.BaseSyntheticEvent) => {
    setTitle(e.target.value)
    handleSlugCreation(e);
  }

  const handleSlugCreation = (e: React.BaseSyntheticEvent) => {
    setSlug(e.target.value.replace(/ /g, "-").toLowerCase());
  }

  const checkSlug = () => {
    const value = slug.replace(/ /g, "-").toLowerCase();
    // compare the value with all the posts slug values
    // if the value matches then generate a unique hex value and append to the slug
    const existingSlug = posts.find((post: any) => post.slug === value);
    if (Boolean(existingSlug)) {
      const id = nanoid(6);
      const appendedSlug = slug + '-' + id;
      setSlug(appendedSlug);
    }
  }

  const handleTagCreation = (e: React.KeyboardEvent) => {
    if (e.key == 'Enter') {
      let currentTags: string[] = [...tags];
      currentTags.push(tag);
      setTags(currentTags)
      setTag('')
    }
  }

  const fetchPosts = async () => {
    const res = await fetch(`/api/posts`);
    const fetchedPosts = await res.json();
    setPosts(fetchedPosts);
  }

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Create a New Post</h1>
      <form
        id="createPost"
        style={{
          display: 'grid',
          gridTemplateColumns: '9fr 3fr',
          gap: '2rem',
          height: '100%'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="text"
            name="title"
            placeholder="Enter the title of the post"
            style={inputStyles}
            value={title}
            onChange={handleTitleChange}
            onBlur={checkSlug}
          />
          <input
            type="text"
            disabled
            name="slug"
            style={inputStyles}
            value={slug}
          />
          <input
            type="text"
            name="excerpt"
            placeholder="What is this post about?"
            style={inputStyles}
            value={excerpt}
            onChange={e => setExcerpt(e.target.value)}
          />
          <textarea
            name="content"
            cols={30}
            rows={10}
            placeholder="Type markdown content here"
            style={textAreaStyles}
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <input
            type="text"
            name="tag"
            placeholder="Add some tags to categorise the post"
            value={tag}
            onChange={e => setTag(e.target.value)}
            style={inputStyles}
            onKeyUp={handleTagCreation}
          />
          <div style={{ marginTop: '1rem' }}>
            {tags.length > 0 ? (
              tags.map((tag, i) => (
                <span key={i} style={{
                  padding: '0.5rem',
                  background: '#efefef',
                  borderRadius: '3rem',
                  margin: '0.5rem'
                }}>{tag}</span>
              ))
            ) : null}
          </div>
        </div>
        <div>
          <button type="button" onClick={handleCreatePost}>Save Post</button>
        </div>
      </form>
    </>
  )
}