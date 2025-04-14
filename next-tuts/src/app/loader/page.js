import React from 'react'

const  apidata = async () => {
    const response = await fetch("https://dummyjson.com/users");
     const data = await response.json();
     return data.users;
}

const Loader = async () => {

    const users = await apidata();
    // console.log(users);

  return (
    <div>
        <h2>Loader in Next js</h2>
        <ol>
            {users.map(user =>(
                <li key={user.id}>{user.firstName}</li>
            ))}
        </ol>
    </div>
  )
}

export default Loader