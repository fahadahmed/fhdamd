import React from 'react';

export default function Tags() {
  return (
    <div>
      <h3>Tags Section</h3>
      <ul>
        <li>Create Tags</li>
        <li>Read a list of tags</li>
        <li>Update tags</li>
        <li>Delete Tags - When a tag is deleted, then a cloud function is run to delete all the tags in the list of posts</li>
      </ul>
    </div>
  )
}