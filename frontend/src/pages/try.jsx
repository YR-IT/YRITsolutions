import React from 'react'

const Try = () => {
    const [data,setdata] = React.useState("dev")
  return (
    <>
        <form>
            {/* Content here to change state */}
        </form>
        {data=='app'?<AppForm/>:<div></div>} 
        {data=='dev'?<DevForm/>:<div></div>} 
        {data=='mobile'?<Mobile/>:<div></div>} 
    </>
  )
}

export default Try