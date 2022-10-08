import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import {FiveDigitAddition,AdditionWordProblems,ThreeDigitAddition,TwoDigitAddition,LargeNumberAddition,SingleDigitAddition,MadMinuteAddition,FourDigitAddition} from "./Preview"


const Addition = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Single Digit Addition' img={SingleDigitAddition} link='https://drive.google.com/file/d/1zEkQi6oajpc1KNIS1ysHpJ6iO6q6rhFI/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Two Digit Addition' img={TwoDigitAddition} link='https://drive.google.com/file/d/1RQoGzWt6egsjb8M49M3QXTg5yfHXZjcd/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Three Digit Addition' img={ThreeDigitAddition} link='https://drive.google.com/file/d/1Lod6uGLedpR4UVTkGIdxoeLyei-clqvS/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Four Digit Addition' img={FourDigitAddition} link='https://drive.google.com/file/d/1aHpy6eBJfShPbD9WF3JbXvDsgwwaTrbo/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Five Digit Addition' img={FiveDigitAddition} link='https://drive.google.com/file/d/1ARXKamn0BjGL2a3qaX9_BqN-hqVj6wEm/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Addition Word Problems' img={AdditionWordProblems} link='https://drive.google.com/file/d/1wTVR2PWWGZ1iQCLE3L3cSfYp0Jk78jSB/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Large Number Addition' img={LargeNumberAddition} link='https://drive.google.com/file/d/17yhy9ovPjc8L_IX-BVH9-D74_nL4AYEj/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Mad Minute Addition' img={MadMinuteAddition} link='https://drive.google.com/file/d/1aSUymFSDXNoT_qDll8zmEGNcKetRzG-g/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Addition;