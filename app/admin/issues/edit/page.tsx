
import React from 'react';
import { API_URL } from '../../../../utils/constants';
import EditIssueForm from '../../../../components/EditIssueForm/EditIssueForm';

async function getIssueData(id: string) {
  const res = await fetch(`${API_URL}/api/issue/getIssue`, {
    method: 'POST',
    body: JSON.stringify({ id }),
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  });
  return await res.json();
}

export default async function EditIssue({ searchParams: { id } }: any) {

  const issueData = await getIssueData(id);
  return (
    <div>
      <EditIssueForm
        name={issueData.name}
        description={issueData.description}
        id={id}
        slug={issueData.slug}
      />
    </div>
  )
}