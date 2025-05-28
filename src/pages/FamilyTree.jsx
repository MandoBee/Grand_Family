import React from 'react'
import { useParams } from 'react-router-dom'

function FamilyTree() {
  const { treeId } = useParams()
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Family Tree</h1>
      <p>Tree ID: {treeId}</p>
    </div>
  )
}

export default FamilyTree