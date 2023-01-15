'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import type { Post } from '../../pages/types/post';
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

type Props = {
  post: Post
}

export default function EditPostForm({ post }: Props) {

  const [title, setTitle] = useState(post.title)
  const [excerpt, setExcerpt] = useState(post.excerpt);
  const [content, setContent] = useState(post.content);
  const [slug, setSlug] = useState(post.slug);
  const [tags, setTags] = useState<string[]>(post.tags);
  const [tag, setTag] = useState('');

  const handleUpdatePost = async () => {
    const id = post.id;
    const res = await fetch(`/api/post/updatePost`, {
      method: 'POST',
      body: JSON.stringify({ id, title, excerpt, content, slug, tags }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(await res.json());
  }

  const handleTitleChange = (e: React.BaseSyntheticEvent) => {
    setTitle(e.target.value)
  }

  const handleTagCreation = (e: React.KeyboardEvent) => {
    if (e.key == 'Enter') {
      let currentTags: string[] = [...tags];
      currentTags.push(tag);
      setTags(currentTags)
      setTag('')
    }
  }

  return (
    <>
      <h1>Update Post</h1>
      <form
        id="updatePost"
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
          <button type="button" onClick={handleUpdatePost}>Update Post</button>
          <Link href="/admin/posts">Back to posts</Link>
        </div>
      </form>
    </>
  )
}