import React from 'react'

type itemType = {
    item : {
        name : string,
        link:string
    }
}


const NavItem = ({item}:itemType) => {
  return (
    <a href={item.link}>{item.name}</a>
  )
}

export default NavItem