'use client'

import { useRef, useState } from 'react'
import { createTodoAction } from '@/app/_actions'
import toast from 'react-hot-toast'

const NewTodoForm = () => {
  const [loader, setLoading] = useState(false) // Changed initial state to false
  const formRef = useRef<HTMLFormElement>(null)

  async function action(data: FormData) {
    setLoading(true) // Set loading to true when action starts
    const title = data.get('title')
    if (typeof title !== 'string' || !title || title.length < 0) {
      setLoading(false) // Reset loading state if validation fails
      return
    }
    try {
      await createTodoAction(title)
      toast.success('Todo Added Successfully')
      setLoading(false) //True
      formRef.current?.reset()
    } catch (error) {
      toast.error('Something went wrong')
      setLoading(false)
      console.error('Error creating todo:', error)
    }
  }

  function handleButtonClick() {
    setLoading(true) // Set loading to true immediately upon clicking
    formRef.current?.dispatchEvent(
      new Event('submit', { bubbles: true, cancelable: true })
    )
  }

  return (
    <form ref={formRef} action={action}>
      <h2 className='mb-2 font-medium'>Create a New Todo</h2>
      <input
        type='text'
        maxLength={100}
        name='title'
        className='rounded border border-slate-400 px-2 py-0.5'
      />
      <button
        type='submit'
        className='ml-2 rounded bg-slate-700 px-2 py-1 text-sm text-white disabled:bg-opacity-50'
        disabled={loader}
        onClick={handleButtonClick}
      >
        {loader ? 'Adding Todo...' : 'Add Todo'}
      </button>
    </form>
  )
}

export default NewTodoForm
