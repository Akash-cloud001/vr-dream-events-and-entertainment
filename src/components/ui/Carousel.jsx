import React, { useEffect, useRef } from "react";

const Carousel = ({images, classes, size=100, direction='forward'}) => {
    const scrollers = useRef()

    useEffect(()=>{
        if (!images || images.length === 0) return;
        scrollers.current = document.querySelectorAll(".scroller");
        if(scrollers.current){
            addAnimation();
        }

        function addAnimation(){
            let imagesLen =  images?.length;
            console.log(imagesLen)
            scrollers.current.forEach(element => {
                element.setAttribute("data-animated", true)

                const scrollerInner = element.querySelector('.scoller__inner')
                const scrollerContent = Array.from(scrollerInner.children)
                if(scrollerContent){
                    scrollerContent.forEach(item =>{
                        const duplicatedItem = item.cloneNode(true);
                        duplicatedItem.setAttribute('aria-hidden', true);
                        scrollerInner.append(duplicatedItem)
                    })
                }
            });
        }

    },[images])

    return (
        <section className="w-full overflow-hidden">
            <div className={`scroller mx-auto ${classes}`}  data-direction={direction}>
                <ul className="tag-list scoller__inner">
                    {images?.map((img, idx)=>(
                        <li key={idx}>
                            <img src={img} alt="image" height={size} width={size} className="object-contain aspect-square" />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Carousel;