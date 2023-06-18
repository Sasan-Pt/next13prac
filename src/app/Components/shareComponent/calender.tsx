"use client"
import {useEffect,useState} from "react"
const Calender=()=>{
    const [currentTime,setCurrentTime]=useState<string>()
    useEffect(() => {
        setCurrentTime(() => {
          const timeServer = ("0" + new Date);
    
          return `${timeServer}`;
        });
      }, []);


      const serverTime = currentTime
       const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const options = { timeZone: userTimeZone };
      const userLocalTime = serverTime?.toLocaleString(undefined, options);

    return(
        <div className="bg-[#202020]">
            <span>
                <h1>Estemated Time</h1>
                { <div className="text-white">{userLocalTime}</div> }
            </span>
        </div>
    )
}
export default Calender