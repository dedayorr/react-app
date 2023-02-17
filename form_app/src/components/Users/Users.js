import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { User } from '../User/User';

export const Users = () => {

    const data = [
        {
            id:uuidv4(),
            name: "dedayo",
            email: "dedayo16@gmail.com",
            isverified: false
        },
        {
            id:uuidv4(),
            name: "dedayo",
            email: "dedayo16@gmail.com",
            isverified: true
        },
        {
            id:uuidv4(),
            name: "dedayo",
            email: "dedayo16@gmail.com",
            isverified: true
        },
        {
            id:uuidv4(),
            name: "dedayo",
            email: "dedayo16@gmail.com",
            isverified: false
        },
        {
            id:uuidv4(),
            name: "dedayo",
            email: "dedayo16@gmail.com",
            isverified: true,
            friends : ["bolu", "bayo", "dayo"]
        },
        
    ]

    const verify = data.filter((data) => data.isverified === true)

  return (
<>
    <div>
        {verify.map((item)=> <User  key={item.id} user={item.name} />)}
        {/* {data.friends.map((friend,i) => <User key={i} item={friend.friends}/>)} */}
    </div>
    </>    
  )
}
