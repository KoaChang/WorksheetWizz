import styles from "../style";
import {MenuBar,File} from '../components';
import "./Product.css"

import {October2021SAT,SATPracticeTest9,March2019SAT,SATPracticeTest8,April2022SAT,October2020SAT,May2021InternationalSAT,May2019InternationalSAT,April2021SAT,March2020SAT,SATPracticeTest10,October2019SAT,March2021SAT,May2021USSAT,SATPracticeTest6,May2022USSATQAS,SATPracticeTest7,SATPracticeTest5,May2019USSAT,March2022SAT,SATPracticeTest1,SATPracticeTest3,April2019SAT,May2022InternationalSAT} from '../assets/SATPreview'

const SAT = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            <File title='SAT Practice Test 1' img={SATPracticeTest1} body='Download PDF' link='https://drive.google.com/file/d/1xphyZTI3fORWNXolzuoZHDu02lPTafD_/view?usp=sharing' target='_blank'/>
            <File title='SAT Practice Test 3' img={SATPracticeTest3} body='Download PDF' link='https://drive.google.com/file/d/1sJlcAgxWUDhM3NYYQNmmvaskZ4YQZKqE/view?usp=sharing' target='_blank'/>
            <File title='SAT Practice Test 5' img={SATPracticeTest5} body='Download PDF' link='https://drive.google.com/file/d/1GQI-N61dS29Hq22eT0Dk_E7ixxOE15Uy/view?usp=sharing' target='_blank'/>
            <File title='SAT Practice Test 6' img={SATPracticeTest6} body='Download PDF' link='https://drive.google.com/file/d/1PdJMoTnj0yX2Qm6f-0H2iMjdSRlC-1zp/view?usp=sharing' target='_blank'/>
            <File title='SAT Practice Test 7' img={SATPracticeTest7} body='Download PDF' link='https://drive.google.com/file/d/1PHKefi2bmBLMyOnF1q_SEpVAqhYcfgha/view?usp=sharing' target='_blank'/>
            <File title='SAT Practice Test 8' img={SATPracticeTest8} body='Download PDF' link='https://drive.google.com/file/d/1FHSyzjDsqAaKYO2S2gayu0awphVo3FyJ/view?usp=sharing' target='_blank'/>
            <File title='SAT Practice Test 9' img={SATPracticeTest9} body='Download PDF' link='https://drive.google.com/file/d/1IQ5TNRTnbQFlbazWXhkMIichIP6IonDb/view?usp=sharing' target='_blank'/>
            <File title='SAT Practice Test 10' img={SATPracticeTest10} body='Download PDF' link='https://drive.google.com/file/d/116ofTb53bYoHTZOfUGMFgeMT-Zbkz-C6/view?usp=sharing' target='_blank'/>
            <File title='March 2019 SAT' img={March2019SAT} body='Download PDF' link='https://drive.google.com/file/d/1KQP753elYfUR68gMcJtfPy8lTbmu6rT3/view?usp=sharing' target='_blank'/>
            <File title='April 2019 SAT' img={April2019SAT} body='Download PDF' link='https://drive.google.com/file/d/1Hk8WdLem4MEjOpbK1KSRZFYVfxxKB3e-/view?usp=sharing' target='_blank'/>
            <File title='May 2019 International SAT' img={May2019InternationalSAT} body='Download PDF' link='https://drive.google.com/file/d/18l7Znwqr86dSp1khuyTQkpr9GM8tQR47/view?usp=sharing' target='_blank'/>
             <File title='May 2019 US SAT'  img={May2019USSAT} body='Download PDF' link='https://drive.google.com/file/d/1G-6i40_98rdKKE6Zshi_chZo6aQMCrBq/view?usp=sharing' target='_blank'/>
             <File title='October 2019 SAT' img={October2019SAT} body='Download PDF' link='https://drive.google.com/file/d/1c4w52Qxyy_84fHdHXeMOt2EtZWKPDEvL/view?usp=sharing' target='_blank'/>
            <File title='March 2020 SAT' img={March2020SAT} body='Download PDF' link='https://drive.google.com/file/d/18n4H75jgFNEF0dT1aYi-yb5ZoI03pJcH/view?usp=sharing' target='_blank'/>
            <File title='October 2020 SAT' img={October2020SAT} body='Download PDF' link='https://drive.google.com/file/d/193UrHExEiVhsVBTcKHmBxnSzjTQ3HYAs/view?usp=sharing' target='_blank'/>
            <File title='March 2021 SAT'  img={March2021SAT} body='Download PDF' link='https://drive.google.com/file/d/1FGN1y9PruIhQlzo97U3j_uoxnI7LRxRg/view?usp=sharing' target='_blank'/>
            <File title='April 2021 SAT' img={April2021SAT} body='Download PDF' link='https://drive.google.com/file/d/1Dnot_sg71Qs2TWmU8hMRVIwB4jBZyqV8/view?usp=sharing' target='_blank'/>
            <File title='May 2021 International SAT' img={May2021InternationalSAT} body='Download PDF' link='https://drive.google.com/file/d/1OLGCkibVPF0ndbGMu05GRpyHkZd-L0Tx/view?usp=sharing' target='_blank'/>
            <File title='May 2021 US SAT' img={May2021USSAT} body='Download PDF' link='https://drive.google.com/file/d/1jYnYXp6jns9p8ZqnYx6XzHODjGluPWMH/view?usp=sharing' target='_blank'/>
             <File title='October 2021 SAT' img={October2021SAT} body='Download PDF' link='https://drive.google.com/file/d/1tfXRtda3EsqO14N8x56K-kTSnBBYx1vk/view?usp=sharing' target='_blank'/>
            <File title='March 2022 SAT'   img={March2022SAT} body='Download PDF' link='https://drive.google.com/file/d/1yaSESlBiuIB1yl_1y8oeMTywZGlQgTA0/view?usp=sharing' target='_blank'/>
            <File title='April 2022 SAT' img={April2022SAT} body='Download PDF' link='https://drive.google.com/file/d/1mvRw1TZc8CHq_voxkR6woCIm6Txt2cZv/view?usp=sharing' target='_blank'/>
             <File title='May 2022 International SAT' img={May2022InternationalSAT} body='Download PDF' link='https://drive.google.com/file/d/1FR9ScyH9tG1Kyhwu675Hg0pwaQys2S56/view?usp=sharing' target='_blank'/>
             <File title='May 2022 US SAT' img={May2022USSATQAS} body='Download PDF' link='https://drive.google.com/file/d/1WEf9rCYyImELD1Je3S7ZSgRNcjnfXy8G/view?usp=sharing' target='_blank'/>
            
        </div>

    </div>
    
)

export default SAT;