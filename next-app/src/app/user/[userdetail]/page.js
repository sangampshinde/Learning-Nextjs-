import React from 'react'

export async function getUserById(id) {
  const res = await fetch(`http://localhost:3000/users/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) return null
  return res.json()
}

const UserDetils = async ({ params }) => {
  
  const { userdetail } = params
  // console.log(userdetail);


    const user = await getUserById(userdetail);
    console.log(user);

  if (!user) {
    return <div>User not found</div>
  }



  return (
   <div>
    <h1>User Details</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Email:</strong> {user.email}</p>
   </div>
  )
}

export default UserDetils