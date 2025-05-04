import Link from 'next/link';
import React from 'react'

export async function getusers(){
    const users = await fetch('http://localhost:3000/users');
    const data = await users.json();
    return data;
}

const page = async() => {

    const users = await getusers();

  return (
    <div>
        <p>User List</p>
        {users.map((user, index) => (
            <div key={index}>
            <Link href={`/user/${index}`}>{user.name}</Link>
            </div>
        ))}
    </div>
  )
}

export default page