'use client'
import React from 'react'
import { deleteAllToDoAction } from '../_actions'

const handleDeleteAllToDo = async () => {
  try {
    await deleteAllToDoAction()
  } catch (error) {
    console.log(error)
  }
}
function DeleteAllToDo() {
  return (
    <button
      onClick={handleDeleteAllToDo}
      className='mb-3 ml-2 rounded bg-slate-700 px-2 py-2 text-sm text-white'
    >
      Delete All
    </button>
  )
}

export default DeleteAllToDo
