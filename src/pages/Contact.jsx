import { Button } from '@/components/ui/Button';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact(){
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    // simple validation
    if(!form.name || !form.email) return alert('Please fill name and email')
    // pretend send
    setTimeout(()=> setSent(true), 600)
  }

  return (
    <div className='max-w-3xl mx-auto p-6'>
      {sent ? (
        <div className='p-6 bg-green-50 rounded-md'>Thanks — we received your message.</div>
      ) : (
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input value={form.name} onChange={e=>setForm({...form, name: e.target.value})} placeholder='Name' className='w-full p-3 border rounded-md' />
          <input value={form.email} onChange={e=>setForm({...form, email: e.target.value})} placeholder='Email' className='w-full p-3 border rounded-md' />
          <textarea value={form.message} onChange={e=>setForm({...form, message: e.target.value})} placeholder='Message' className='w-full p-3 border rounded-md h-40' />
          <Button className='bg-primary text-white' type='submit'>Send Message</Button>
        </form>
      )}
    </div>
  )
}
