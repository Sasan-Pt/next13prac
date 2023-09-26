"use client"
import {useEffect,useRef,useState} from "react"
import {left} from "@popperjs/core";

interface TestaItem {
  date: number;
  message: string[];
  monthName: string;
}
const Calender=()=>{

    const [testa,setTesta]=useState<TestaItem[]>([])
    const [currentTime,setCurrentTime]=useState<Date>()
    const [testolf,setTestolf]=useState<any>()
    const [openCalender,setOpenCalender]=useState<boolean>(false)
    const [objectSizeToArray,setObjectSizeToArray]=useState<any>()
    const [size,setSize]=useState<number>(0)
    const [movingCarousel,setMovingCarousel]=useState<string>("-translate-x-[0px]")
    const [carouselIndex,setCarouselIndex]=useState()
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
      const message=["sdasdasd"]

      function testol(){
        setOpenCalender(true)
      }
      const ulinfo=useRef()

      const ref=useRef(null)



    useEffect(() => {
        if( ref && ref?.current?.children[0]){
          
             setSize(()=>ref?.current?.children[0].getBoundingClientRect().width || undefined)
            const ulinfoChildren=ref?.current|| undefined;

            //setObjectSizeToArray(()=>{return Object.values(ulinfoChildren)})
        }
        for(let i = 1; i <= daysInMonth.length+1; i++){
          setTesta(prevState => [...prevState, { date: i, message: message.filter(h=>h[i]),monthName:monthName }]);
        }


    },[openCalender,ulinfo])
    console.log(size)
/*  if (openCalender && size) {
            console.log("i works")
       ulinfo?.current.style.left=
/!*            objectSizeToArray.forEach((slide: HTMLLinkElement, index: number) => {
                slide.style.left = 1800+ "px";
            });*!/
    }*/
    const rotateMe:any=(index:number)=>{
       setObjectSizeToArray(size *index+"px")
    }
/*    useEffect(() => {
        if (openCalender && size && objectSizeToArray) {
            console.log("i works")
            objectSizeToArray.forEach((slide: HTMLLinkElement, index: number) => {
                slide.style.left = 8000+ "px";
            });

        }
    },[objectSizeToArray])*/
      if (ulinfo && testolf) {
        console.log("bitch")
        console.log(testolf)
        testolf?.forEach((slide: HTMLLinkElement, index: number) => {
          slide.style.left = size * index + "px";
        });
      }

    const x=[1,2,3]
      function testtol(props:number[]){
         console.log(x)
      }
      console.log(openCalender)

      const setingMovingCarousel=(e)=>{
        console.log(e)
        console.log("hi",e.children[0])
        console.log(e.style.left)
        console.log("salam",ref.current)
 
        const sizeWithOutPixel=Number(e.style.left.split("px")[0])
        ref.current.style.transform =
        "translateX(-" + sizeWithOutPixel +"px"+ ")";
        console.log(sizeWithOutPixel)
        const numberak=sizeWithOutPixel*9
        setMovingCarousel("-translate-x-["+e.style.left+"px]")
        console.log(movingCarousel);
        
      }


      return(
        <div className="bg-[#202020]">
            <span>
                <h1 className="text-white">Estemated Time</h1>
                <div className="text-white">{userLocalTime}</div>
                <button onClick={testol}>click me bitch</button>
            </span>
            <div className="flex  w-full ">


                  <button className="absolute top-1/2 -translate-y-1/2 -right-9 bg-white" onClick={(e)=>console.log(e.target)}>sdgssagfsg</button>
                <div className="w-full ">
                    <div className=" relative text-white  " >
                        <div className="absolute w-full flex space-x-6 overflow-hidden " >
                        <ul className={`list-none  flex  w-full`} ref={ref} onClick={(e)=>setingMovingCarousel(e.target)}>

                {openCalender?testa.map((x,index)=>{
                  return(
                    <li key={Math.random()} className={`mt-2 bg-red-600 mr-4 shadow-sm`} style={{left : size *index+"px"}} >
                      <div className="flex flex-col items-center justify-center">
                      <div>{x.monthName}</div>
                      <div>{x.message}</div>
                      <div>{x.date}</div>
                      </div>
                    </li> 
                  )
                  
                }):null}
            
                </ul>
                        </div>
                    </div>
                </div>



              <button className="absolute top-1/2 -translate-y-1/2 -left-9 bg-white" onClick={(e)=>console.log(e.target)}>sfdag</button>



            </div>
        </div>
    )
}
export default Calender