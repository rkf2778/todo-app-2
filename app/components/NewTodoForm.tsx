'use client'

import { useRef, useState } from 'react'
import { createTodoAction } from '@/app/_actions'

const NewTodoForm = () => {
  let [loader, setLoading] = useState(true)
  const formRef = useRef<HTMLFormElement>(null)

  async function action(data: FormData) {
    setLoading(false) //False
    // console.log('SET FALSE:', loader)

    const title = data.get('title')
    if (typeof title !== 'string' || !title || title.length < 0) {
      setLoading(true)
      return
    }
    await createTodoAction(title)
    setTimeout(() => {
      setLoading(true) //True
      // console.log('SET TRUE:', loader)
      formRef.current?.reset()
    }, 1000)
  }

  return (
    <form ref={formRef} action={action}>
      <h2 className='mb-2 font-medium'>Create a New Todo</h2>
      <input
        type='text'
        name='title'
        className='rounded border border-slate-400 px-2 py-0.5'
      />
      <button
        type='submit'
        className='ml-2 rounded bg-slate-700 px-2 py-1 text-sm text-white disabled:bg-opacity-50'
        disabled={!loader}
      >
        Add Todo
      </button>
    </form>
  )
}

export default NewTodoForm
