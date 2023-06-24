"use client"
import {useEffect,useState} from "react"

interface TestaItem {
  date: number;
  message: string[];
  monthName: string;
}
const Calender=()=>{
    
    const [testa,setTesta]=useState<TestaItem[]>([])
    const [currentTime,setCurrentTime]=useState<Date>()

    useEffect(() => {
        setCurrentTime(() => {
          return new Date()
        });
      }, []);

     

      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const options = { timeZone: userTimeZone };
      const userLocalTime = currentTime?.toLocaleString(undefined, options);
      const test=currentTime?.getDate()

      
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
            <div className="relative -my-0 mx-auto w-4/5 h-[600px]">
              <div className="bg-green h-full relative">
                
                  <button className="absolute top-1/2 -translate-y-1/2 -right-9">sdgssagfsg</button>
      
              <ul className="p-0 m-0 list-none">
                {testa.map((x,index)=>{
                  return(
                    <li key={index} className="bg-slate-500 mt-2 absolute w-full top-0 bottom-0 ">
                      <div className="w-full h-full">
                      <div>{x.monthName}</div>
                      <div>{x.message}</div>
                      <div>{x.date}</div>
                      </div>

                    </li>
                  )
                })}
              </ul>
              
              <button className="absolute top-1/2 -translate-y-1/2 -left-9">sfdag</button>

                
              </div>
            </div>
        </div>
    )
}
export default Calender