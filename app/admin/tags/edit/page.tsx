
import React from 'react';
import { API_URL } from '../../../../utils/constants';
import EditTagForm from '../../../../components/EditTagForm/EditTagForm';

type Props = {
  searchParams: {
    id: string
  }
}

export async function getTagData(id: string) {
  const res = await fetch(`${API_URL}/api/tag/getTag`, {
    method: 'POST',
    body: JSON.stringify({ id }),
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  });
  return await res.json();
}

export default async function EditTag({ searchParams: { id } }: Props) {

  const tagData = await getTagData(id);
  return (
    <div>
      <EditTagForm label={tagData.label} description={tagData.description} id={id} slug={tagData.slug} />
    </div>
  )
}