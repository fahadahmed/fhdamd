'use client'

import React from 'react';

export default function CreateIssue() {

  const handleCreateIssue = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      issueName: { value: string };
      issueDescription: { value: string };
    };

    const name = target.issueName.value;
    const description = target.issueDescription.value;

    const res = await fetch(`/api/issue/createIssue`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(await res.json())
  }
  return (
    <div>
      <h1>Create a New Issue</h1>
      <ul>
        <li>Issue Number is generated automatically</li>
        <li>Issue Slug is generated automatically as per formula - Issue# [Issue Number]</li>
        <li>Issue includes a name and excerpt</li>
        <li>Issue includes the count of number of posts made part of the issue</li>
      </ul>
      <p>In essence, the issue would be automatically created when a new post is created and there is no unpublished version of existing issue. Hence the editing of the issue will also be severely limited. One needs to think about the action of unpublishing and publishing and how this would affect the creation of posts and issues.</p>
      <p>Currently for the sake of getting the admin section up and running we would have a manual way for all the CRUD operations.</p>
      <form onSubmit={handleCreateIssue}>
        <input type="text" name="issueName" placeholder="Enter the name of the Issue" />
        <input type="text" name="issueDescription" placeholder="Enter the description of the issue." />
        <button>Create Issue</button>
      </form>
    </div>
  )
}