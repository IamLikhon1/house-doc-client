import { useEffect } from "react";

function ShowDataOnTop() {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
  return (
    <></>
  )
}

export default ShowDataOnTop