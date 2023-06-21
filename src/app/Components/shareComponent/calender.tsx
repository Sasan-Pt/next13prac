"use client"
import {useEffect,useState} from "react"

interface TestaItem {
  date: number;
  message: string[];
  monthName: string;
}
const Calender=()=>{
    const [currentTime,setCurrentTime]=useState<any>()
    const [testa,setTesta]=useState<TestaItem[]>([])

    useEffect(() => {
        setCurrentTime(() => {
          return new Date()
        });
      }, []);

      console.log(currentTime)
     

      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const options = { timeZone: userTimeZone };
      const userLocalTime = currentTime?.toLocaleString(undefined, options);
      const test=currentTime?.getDate()
      console.log(test)
      console.log(userLocalTime?.slice(17))

      
      function getDaysInMonth(year:number, month:number) {
        const numDays = new Date(year, month, 0).getDate();
        const days = [];
      
        for (let i = 1; i <= numDays; i++) {
          days.push(i);
        }
      
        return days;
      }
      
      // Example usage
      const year = 2023;
      const month = 2; // Note: January is month 0, February is month 1, and so on
      const daysInMonth = getDaysInMonth(year, month);

      function getMonthName(month:number) {
        const date = new Date(2000, month, 1);
        const options = { month: 'long' };
        return date.toLocaleString('en-US', options);
      }
      
      // Example usage
      // Note: January is month 0, February is month 1, and so on
      
      const monthName = getMonthName(month);
      const message=["sdasdasd","sdasdasda","dsadasda","sdasdasda","dsadasda","sdasdasda","dsadasda"]

      function testol(){
        for(let i = 1; i <= daysInMonth.length+1; i++){
          setTesta(prevState => [...prevState, { date: i, message: message.filter(h=>h[i]),monthName:monthName }]);
        }
      }
      console.log(testa)


    return(
        <div className="bg-[#202020]">
            <span>
                <h1 className="text-white">Estemated Time</h1>
                <div className="text-white">{userLocalTime}</div>
                <button onClick={testol}>click me bitch</button>
            </span>
        </div>
    )
}
export default Calender