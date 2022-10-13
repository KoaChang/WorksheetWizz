import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {DynamicsSet,NewtonsSecondLaw,FreeBodyDiagrams,NewtonsFirstLaw,NewtonsThirdLaw} from "./Preview"


const Dynamics = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/physics'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>
     
<File title='Dynamics Set' img={DynamicsSet} link='https://drive.google.com/file/d/1COvLwZVQSIz9AfzIH-jgZl43aq9a9pVV/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Newtons Second Law' img={NewtonsSecondLaw} link='https://drive.google.com/file/d/1seVRPZFzU8OFllx-Gdyv5IyZD-xLOHdD/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Free Body Diagrams' img={FreeBodyDiagrams} link='https://drive.google.com/file/d/1auRiggaHWFdTvRB_YM4Tx3V0R5_TPbJa/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Newtons First Law' img={NewtonsFirstLaw} link='https://drive.google.com/file/d/1l8jPj5MYH0A8qA2qUoEV3hqnDXa2yr9y/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Newtons Third Law' img={NewtonsThirdLaw} link='https://drive.google.com/file/d/1LZ77BtVWpLB1kSu_C2glf_dIx-bTaXU1/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Dynamics;