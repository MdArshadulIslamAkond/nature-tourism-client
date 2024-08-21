import { useEffect, useState } from "react";

const Banner = () => {
    const [image, setImage] = useState(1);
    const [user, setUser] = useState(null);
    
 
    // const arra = useMemo(()=>arr(id), [])
    useEffect(() =>{
        let int = setInterval(() =>{
            setImage((prevImage) => ((prevImage + 1) >= 8 ? 1 : prevImage + 1));
        }, 5000);
        return () => clearInterval(int);
    }, [])
    useEffect(() =>{
        const arr = [
            {
                id: 1,
                img: "https://i.ibb.co/1qMWhBf/Sixty-Dome-Mosque-Bagerhat.jpg"
            },
            {
                id: 2,
                img: "https://i.ibb.co/z4ZN0s7/blogi-JR0-K1s-WVNFzin-GC-l4r3-Ids-VLyx-Zfkr.jpg"
            },
            {
                id: 3,
                img: "https://i.ibb.co/qDrFdhM/sundarban-package-tour.webp"
            },
            {
                id: 4,
                img: "https://i.ibb.co/34N420J/mahasthangarh.jpg"
            },
            {
                id: 5,
                img: "https://i.ibb.co/m63LJBm/1-a92-GOsmt-F8ja-XFduh-WLPgw.jpg"
            },
            {
                id: 6,
                img: "https://i.ibb.co/Z6ksxgk/Untitled-7.jpg"
            },
            {
                id: 7,
                img: "https://i.ibb.co/qmvhJqF/jorna.jpg"
            }
        ]
        arr.find((item)=>{
        if(item.id === image){
            // console.log(item.id);
            // console.log(item.img);
            setUser(item.img);
            // return item.img;
        }
       });
        
    }, [image])
    

  return (
    <div className="">
        
      <div className="carousel rounded-none">
      <div id="item1" className="carousel-item w-full">
          <img
            src={user}
            className="object-cover w-screen h-[calc(100vh-70px)]"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        
        
        {/* <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/1qMWhBf/Sixty-Dome-Mosque-Bagerhat.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/ZJtGN6Y/images-2.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/61MNPfB/1-ah9wbe4y-Nd5y3-WOMF0-Hw-Sw.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/34N420J/mahasthangarh.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div id="item5" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/m63LJBm/1-a92-GOsmt-F8ja-XFduh-WLPgw.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div id="item6" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/Z6ksxgk/Untitled-7.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div id="item7" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/j5M2q65/images.jpg"
            className="w-full"
            alt="Tailwind CSS Carousel component"
          />
        </div> */}
      </div>
      
    </div>
  );
};

export default Banner;
