import { ReactElement,  useRef, useEffect } from "react";
import styles from './Slider.module.scss'

export default function Slider({
    children
}: {
    children: ReactElement
}) {

    const sliderWrapper = useRef(null)

    useEffect(() => {
        console.log(children.length)
    }, [])

    return (
        <>
            <div ref={sliderWrapper}>
                {children}
            </div>

        </>
    )
}