"use client"
import { ReactElement,  useRef, useEffect, useState } from "react";
import Button from "@/components/atoms/Button/Button";
import styles from './Slider.module.scss'

export default function Slider({
    sliderWidth,
    children
}: {
    sliderWidth: string
    children: Array<ReactElement>
}) {

    const slidesContainer = useRef<HTMLDivElement | null>(null)
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [sliderWrapperWidth, setSliderWrapperWidth] = useState<number>(0);
    const [slideWidth, setSlideWidth] = useState<number>(0);
    const [auto, setAuto] = useState<number>(0)



    const setSlider = () => {
        if (slidesContainer.current) {
            setSlideWidth(slidesContainer.current.clientWidth); 
        }
    }

    const prevSlide = () => {
        auto !== -1 && setAuto(-1)
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        }
    }

    const nextSlide = () => {
        auto !== -1 && setAuto(-1)
        if (currentSlide < children.length - 1) {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const toSlide = (index: number) => {
        auto !== -1 && setAuto(-1)
        setCurrentSlide(index)
    }

    useEffect(() => {
        setSlider();
        window.addEventListener('resize', setSlider)
        return () => window.removeEventListener('resize', setSlider);
    }, [])
    
    
    useEffect(() => {
        setSliderWrapperWidth(slideWidth * children.length)
    }, [slideWidth])


    useEffect(() => {
        if (auto !== -1) {
            const test = setInterval(() => {
                currentSlide < children.length - 1 ? nextSlide(): toSlide(0);
                setAuto(auto + 1);
            }, 5000);
            return () => clearInterval(test);
        } 
    }, [auto])

    return (         
        <div className={styles.slider} >
            <div style={{width: sliderWidth}}>
                <div className={styles.slidesContainer} ref={slidesContainer} >
                    <div className={styles.sliderWrapper}
                        style={sliderWrapperWidth !== 0 ? { 
                                width: `${sliderWrapperWidth}px`,
                                transform: `translateX(-${currentSlide * slideWidth}px)`
                            } : {width: `${100 * children.length}%`}
                        }> 
                        {children.map((child, idx) => 
                            <figure key={idx}>{child}</figure>
                        )} 
                    </div>
                </div>
                <nav className={styles.controls}>
                    {currentSlide !== 0 && 
                        <Button 
                            clicked={() => prevSlide()} 
                            classes={styles.left}
                        >{`<`}</Button> }
                    {currentSlide < children.length - 1 && 
                        <Button 
                            clicked={() => nextSlide()} 
                            classes={styles.right}
                        >{`>`}</Button> 
                    }
                </nav>
            </div>
            <nav>
                <ul>
                {children && children[0] && children.map((child, number) => (
                    <li key={number} className='page-item'>
                        <Button 
                            clicked={() => toSlide(number)} 
                            active={number === currentSlide}
                        ></Button>
                    </li>
                ))}
                </ul>
            </nav>
        </div>
    )
}