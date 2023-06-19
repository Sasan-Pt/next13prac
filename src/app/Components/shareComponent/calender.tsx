"use client"
import { data } from "autoprefixer";
import {useEffect,useState} from "react"
const Calender=()=>{
    const [currentTime,setCurrentTime]=useState<string>()
    useEffect(() => {
        setCurrentTime(() => {
          const timeServer =  ("0" + new Date)

          return `${timeServer}`;
        });
      }, []);

      console.log(currentTime)

      const serverTime = new Date();
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const options = { timeZone: userTimeZone };
      const userLocalTime = serverTime?.toLocaleString(undefined, options);
      const test=serverTime?.getDate()
      console.log(test)
      console.log(userLocalTime?.slice(17))


      
      function getDaysInMonth(year, month) {
        const numDays = new Date(year, month, 0).getDate();
        const days = [];
      
        for (let i = 1; i <= numDays; i++) {
          days.push(i);
        }
      
        return days;
      }
      
      // Example usage
      const year = 2023;
      const month = 7; // Note: January is month 0, February is month 1, and so on
      
      const daysInMonth = getDaysInMonth(year, month);
      console.log(daysInMonth); 

      function getMonthName(monthh) {
        const date = new Date(2000, month, 1);
        const options = { month: 'long' };
        return date.toLocaleString('en-US', options);
      }
      
      // Example usage
      const monthh = 2; // Note: January is month 0, February is month 1, and so on
      
      const monthName = getMonthName(monthh);
      console.log(monthName); 


    return(
        <div className="bg-[#202020]">
            <span>
                <h1 className="text-white">Estemated Time</h1>
                <div className="text-white">{userLocalTime?.slice(17)}</div>
            </span>
        </div>
    )
}
export default Calender