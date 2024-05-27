import { useState } from 'react'

export const Register = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [id, setId] = useState('')
    const [people, setPeople] = useState([])
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const newPerson = { name, username, email, phone, id }
      const personExists = people.some(person => person.id === id || person.email === email)
  
      if (personExists) {
        alert('The persona already exists.')
      } else {
        setPeople([...people, newPerson])
        setName('')
        setUsername('')
        setEmail('')
        setPhone('')
        setId('')
        alert('Thanks to sign up.')
      }
    }
  return (
    <>
    <div>
        <h1 className='m-2 text-5xl font-bold text-center text-teal-500'>Record</h1>
        <div className='flex flex-col items-center justify-center p-10 m-8 w-100 h-280 bg-gradient-to-b from-teal-600 via-emerald-500 to-teal-600 rounded-xl'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center space-y-4'>
                <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} className='p-2 font-bold rounded-xl'/>
                <input type='text' placeholder='User' value={username} onChange={(e) => setUsername(e.target.value)} className='p-2 font-bold rounded-xl'/>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='p-2 font-bold rounded-xl'/>
                <input type='tel' placeholder='Cellphone' value={phone} onChange={(e) => setPhone(e.target.value)} className='p-2 font-bold rounded-xl'/>
                <input type='text' placeholder='ID' value={id} onChange={(e) => setId(e.target.value)} className='p-2 font-bold rounded-xl'/>
                <button type='submit' className='p-4 font-bold text-white bg-blue-500 rounded-xl hover:bg-lime-600'>Register</button>
            </form>
        </div>
    </div>
    </>
  )
}