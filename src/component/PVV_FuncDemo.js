import React from 'react'

export default function PVV_FuncDemo(props) {
  return (
    <div>
        <hr/>
        <h2>function component demo</h2>
        <h3>su dung thuc tinh tu props</h3>
        <p>username:{props.username}</p>
        <p>fullnamename:{props.fullname}</p>
        <p>age:{props.age}</p>
    </div>
  )
}
