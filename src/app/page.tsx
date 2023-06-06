import Image from "next/image";
import Header from "@/app/Components/shareComponent/header/header";

export default function Home() {
  return (
    <div className={"grid grid-cols-[2%,1fr,2%] "}>
      <div className="col-start-2 col-end-3">
        <Header />
      </div>
    </div>
  );
}
