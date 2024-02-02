"use client"
import { ReactElement,  useRef, useEffect, useState } from "react";
import Button from "@/components/ui/Button/Button";
import styles from './Slider.module.scss'

interface SliderProps {
    children: ReactElement[]
}

const Slider = ({ children }: SliderProps) => {
    const slidesContainer = useRef<HTMLDivElement>(null)

    const [slider, setSlider] = useState({
        slideWidth: 0,
        currentSlide: 0,
        auto: 0
    })


    const setWidth = () => {
        if (slidesContainer.current) {
            setSlider((prev) => ({
                ...prev, 
                slideWidth: slidesContainer.current?.clientWidth || 0
            }))
        }
    }

    const prevSlide = () => {
        setSlider((prev) => ({
            ...prev, 
            auto: prev.auto !== -1 ? -1: prev.auto,
            currentSlide: prev.currentSlide > 0 ? prev.currentSlide - 1 : prev.currentSlide
        }))
    }

    const nextSlide = () => {
        setSlider((prev) => ({
            ...prev, 
            auto: prev.auto !== -1 ? -1: prev.auto,
            currentSlide: prev.currentSlide < children.length - 1 ? prev.currentSlide + 1 : prev.currentSlide
        }))
    }

    const toSlide = (index: number) => {
        setSlider((prev) => ({
            ...prev, 
            auto: prev.auto !== -1 ? -1: prev.auto,
            currentSlide: index
        }))
    }

    useEffect(() => {
        setWidth();
        window.addEventListener('resize', setWidth)
        return () => window.removeEventListener('resize', setWidth);
    }, [])

    useEffect(() => {
        if (slider.auto !== -1) {

            const test = setInterval(() => {
                slider.currentSlide < children.length - 1 ? nextSlide(): toSlide(0);
                setSlider((prev) => ({...prev, auto: prev.auto + 1}))
            }, 5000);


            return () => clearInterval(test);
        } 
    }, [slider.auto])

    return (         
        <div className={styles.slider}>
            <div>
                <div className={styles.sliderWrapper} ref={slidesContainer} 
                    style={{'--translateX': `-${slider.currentSlide * slider.slideWidth}px`} as React.CSSProperties}>
                        
                    {children.map((child, idx) => 
                        <figure key={idx}>{child}</figure>
                    )} 
                </div>
                <nav className={styles.controls}>
                    {slider.currentSlide !== 0 && 
                        <Button onClick={() => prevSlide()} className={styles.left}>{`<`}</Button> 
                    }
                    {slider.currentSlide < children.length - 1 && 
                        <Button onClick={() => nextSlide()} className={styles.right}>{`>`}</Button> 
                    }
                </nav>
            </div>
            <nav>
                <ul>
                {children && children[0] && children.map((_, number) => (
                    <li key={number} className='page-item'>
                        <Button 
                            onClick={() => toSlide(number)} 
                            active={number === slider.currentSlide}
                            title={`go to slide ${number}`}
                        ></Button>
                    </li>
                ))}
                </ul>
            </nav>
        </div>
    )
}

Slider.displayName = 'Slider';

export default Slider;