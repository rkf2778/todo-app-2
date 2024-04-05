'use client'
import React, { useState } from 'react'
import { deleteAllToDoAction } from '../_actions'
import toast from 'react-hot-toast'

function DeleteAllToDo() {
  const [loader, setLoading] = useState(false)

  const handleDeleteAllToDo = async () => {
    setLoading(true)
    try {
      await deleteAllToDoAction()
      toast.success('All ToDos Deleted Successfully')
      setLoading(false)
    } catch (error) {
      setLoading(false)
      toast.error('Something went wrong')
      console.log(error)
    }
  }

  return (
    <button
      onClick={handleDeleteAllToDo}
      className='mb-3 ml-2 rounded bg-slate-700 px-2 py-2 text-sm text-white'
      disabled={loader}
    >
      Delete All
    </button>
  )
}

export default DeleteAllToDo
