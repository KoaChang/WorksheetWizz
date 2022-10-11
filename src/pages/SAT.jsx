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
            <File title='March 2019 SAT' img={March2019SAT} body='Download PDF' link='https://drive.google.com/file/d/1c8fvvWoFgBoSOBw1MM05JxRdTI5qIU7f/view?usp=sharing' target='_blank'/>
            <File title='April 2019 SAT' img={April2019SAT} body='Download PDF' link='https://drive.google.com/file/d/1I9Ch9_EwSp-4apER5tI8BI8lw163EBll/view?usp=sharing' target='_blank'/>
            <File title='May 2019 International SAT' img={May2019InternationalSAT} body='Download PDF' link='https://drive.google.com/file/d/18EfaPq6yMLSb-I7E2eghUK7zUvdxLKMB/view?usp=sharing' target='_blank'/>
             <File title='May 2019 US SAT'  img={May2019USSAT} body='Download PDF' link='https://drive.google.com/file/d/1q1jLlo9rF7yAM-LXndW8uIWk_qMJC5Tp/view?usp=sharing' target='_blank'/>
             <File title='October 2019 SAT' img={October2019SAT} body='Download PDF' link='https://drive.google.com/file/d/1PzjVK2I7pGJfxoElVCUzRv_7zCyRHDUG/view?usp=sharing' target='_blank'/>
            <File title='March 2020 SAT' img={March2020SAT} body='Download PDF' link='https://drive.google.com/file/d/1kRiesxcUL470dfgea6vZgbmgKcbErpAE/view?usp=sharing' target='_blank'/>
            <File title='October 2020 SAT' img={October2020SAT} body='Download PDF' link='https://drive.google.com/file/d/1s-xuA7XOdZcyY7SHTdkS-FT_0ECy15Ba/view?usp=sharing' target='_blank'/>
            <File title='March 2021 SAT'  img={March2021SAT} body='Download PDF' link='https://drive.google.com/file/d/1bsx9vw_5n0UjQSnLFhmUAEHT4I4ngI1V/view?usp=sharing' target='_blank'/>
            <File title='April 2021 SAT' img={April2021SAT} body='Download PDF' link='https://drive.google.com/file/d/1W3l0lYQNp--CiZYIZH1iyfWMKe8hXQv2/view?usp=sharing' target='_blank'/>
            <File title='May 2021 International SAT' img={May2021InternationalSAT} body='Download PDF' link='https://drive.google.com/file/d/1gNp1j1jeSkSO8zvo_NZTX_twY_EjoH0y/view?usp=sharing' target='_blank'/>
            <File title='May 2021 US SAT' img={May2021USSAT} body='Download PDF' link='https://drive.google.com/file/d/19IT0FG4AFpsY1D5hulspkjYnIMfyu6lX/view?usp=sharing' target='_blank'/>
             <File title='October 2021 SAT' img={October2021SAT} body='Download PDF' link='https://drive.google.com/file/d/12qaF6oWM84vtKcncS_wrcM9bq2y58ahp/view?usp=sharing' target='_blank'/>
            <File title='March 2022 SAT'   img={March2022SAT} body='Download PDF' link='https://drive.google.com/file/d/1vTzt53MVdTsxeFUR6LP1KyXigkU3j0su/view?usp=sharing' target='_blank'/>
            <File title='April 2022 SAT' img={April2022SAT} body='Download PDF' link='https://drive.google.com/file/d/16HiyN53rVR7qqRQLS-v1rn8r6Wvps97r/view?usp=sharing' target='_blank'/>
             <File title='May 2022 International SAT' img={May2022InternationalSAT} body='Download PDF' link='https://drive.google.com/file/d/1_KTnQsKzupnXO2MgHaPssPMAmmLO016N/view?usp=sharing' target='_blank'/>
             <File title='May 2022 US SAT' img={May2022USSATQAS} body='Download PDF' link='https://drive.google.com/file/d/1s-mE3UQM1MzVt_2OG-FQvVShFGO6OPdl/view?usp=sharing' target='_blank'/>
            
        </div>

    </div>
    
)

export default SAT;