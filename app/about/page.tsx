import ThreeDText from '@/components/atoms/3dText/ThreeDText';



export default function About() {
    return (
        <main>
            <h1>
                <span>About </span>
                <ThreeDText text='me' smaller={true} />
            </h1>
        </main>
    )
}