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

    const setSlider = () => {
        if (slidesContainer.current) {
            setSlideWidth(slidesContainer.current.clientWidth); 
        }
    }

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        }
    }

    const nextSlide = () => {
        if (currentSlide < children.length - 1) {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const toSlide = (index: number) => {
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
                    {currentSlide !== 0 && <Button 
                        text={`<`}
                        clicked={() => prevSlide()} 
                        classes={styles.left}
                    /> }
                    {currentSlide < children.length - 1 && 
                        <Button 
                            text={`>`}
                            clicked={() => nextSlide()} 
                            classes={styles.right}
                        />
                    }
                </nav>
            </div>
            <nav>
                <ul>
                {children && children[0] && children.map((child, number) => (
                    <li key={number} className='page-item'>
                        <Button 
                            text={`${number + 1}`}
                            clicked={() => toSlide(number)} 
                            active={number === currentSlide ? true : false}
                        />
                    </li>
                ))}
                </ul>
            </nav>
        </div>
    )
}