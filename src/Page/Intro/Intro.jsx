import Banner from '../../Assets/Img/Banner.svg'
import DownArrow from '../../Assets/Img/Down-arrow.png'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

import './intro.style.scss'

export default function Intro() {

    const textRef = useRef()

    useEffect(() => {
        init(textRef.current,{
            showCursor: true,
            backSpeed:60,
            backDelay:1500,
            strings: ['Front-end Dev','Designer','Content-creator']
        })
    }, [])
    return (
        <div className='Intro' id='intro'>
            <div className="left">
                <div className="imgContainer">
                <img src={Banner} alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                <h1>Hi Buddy, Im</h1>
                <h2>Faithulla</h2>
                <h3>I`m a <span ref={textRef}></span></h3>
                </div>
                <a href="#portfilio">
                    <img className='arrows' src={DownArrow} alt="" />
                </a>
            </div>
        </div>
    )
}
