import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"

import {AreaasaLimitandSigmaNotation,RectilinearMotionandAverageValueReview,ShellMethodandArcLength,VolumesSolidsandWashers,AreaBetweenTwoCurves,RectilinearMotionReview,RiemannSums,AverageValueofFunction} from "./Preview"

const ApplicationsIntegration = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

<File title='Area as a Limit and Sigma Notation' img={AreaasaLimitandSigmaNotation} link='https://drive.google.com/file/d/1nWEKZrA_BeGiDTeaPNoqruxR4vKVz4Mv/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Riemann Sums' img={RiemannSums} link='https://drive.google.com/file/d/1_ZmrosyjGezBKqLjytjmaW1xyEgk7N6k/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Area Between Two Curves' img={AreaBetweenTwoCurves} link='https://drive.google.com/file/d/1mSpk5XjzuvWokR15F0ntGVORhjYgeYIw/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Volumes of Solids and Washers'  img={VolumesSolidsandWashers} body='Download PDF' link='https://drive.google.com/file/d/1EcPLExeu2evCPWmRjusis4HcyG_bXK2f/view?usp=sharing' target='_blank'/>
<File title='Shell Method and Arc Length' img={ShellMethodandArcLength} link='https://drive.google.com/file/d/13putBPMsPy5wnc93W48k3OeEZ6FHao3S/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Rectilinear Motion Review' img={RectilinearMotionReview} link='https://drive.google.com/file/d/1cVFEA04Z7jdWwFrrrlNKnHnJ7f4fNtHY/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Rectilinear Motion and Average Value Review' img={RectilinearMotionandAverageValueReview} link='https://drive.google.com/file/d/1aFZG5vvwqqFfLPLeRbKQLUQwtjKeJtud/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Average Value of a Function'   img={AverageValueofFunction} body='Download PDF' link='https://drive.google.com/file/d/1TPCNIg37ruQYc4Efn07BseHjF15SIgLE/view?usp=sharing' target='_blank'/>  
        </div>

    </div>
    
)

export default ApplicationsIntegration;