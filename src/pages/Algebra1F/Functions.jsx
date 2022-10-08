import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"

import {AverageRateofChange,AverageRateofChange2,DiscreteRelations,DomainandRange,DomainRangeWordProblems,
EvaluatingFunctions,FunctionNotation,FunctionOperations,FunctionsReview,FunctionsTest,FunctionsTest2,
IdentifyingFunctions,IntervalNotation,IntervalNotation2,IntervalsofIncreaseDecrease} from './Preview'

const Functions = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>


        <File title='Average Rate of Change' img={AverageRateofChange} link='https://drive.google.com/file/d/1YxdmQJULQFQGVeCP86vxR9d5_rujojH7/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Average Rate of Change2' img={AverageRateofChange2} link='https://drive.google.com/file/d/1FKTQBQIxZghVrmC6HrA1LbNJ922N8WHC/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Discrete Relations' img={DiscreteRelations} link='https://drive.google.com/file/d/1WQQvk-TqQVj10glVrqzF0YbxF4Pyb5eB/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Domain and Range' img={DomainandRange} link='https://drive.google.com/file/d/1A9B9BpyBLAiHdZHD3yoRf4I3LSGP9lLT/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Evaluating Functions' img={EvaluatingFunctions} link='https://drive.google.com/file/d/1LPz1lKra4Gr-jq3h6r9CPvKQ0Q2D2M49/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Function Notation' img={FunctionNotation} link='https://drive.google.com/file/d/1aVxdYdbCAmLoOLsLAk8omzUB3zZBJJVl/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Function Operations' img={FunctionOperations} link='https://drive.google.com/file/d/1d0w5p2PLIlDxfIjX8M3OqZwVw6n-s1XN/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Functions Review' img={FunctionsReview} link='https://drive.google.com/file/d/1I5dC-kyWoqTeW03jvpo33oqXEbAvCBJD/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Functions Test' img={FunctionsTest} link='https://drive.google.com/file/d/1LITNk0t_zqBX41yie-NLtNYIVSuHJol-/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Functions Test 2' img={FunctionsTest2} link='https://drive.google.com/file/d/1lkbnEhSf2cCkpWz3vUSiDggaiFJG8ue5/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Identifying Functions' img={IdentifyingFunctions} link='https://drive.google.com/file/d/1NEv_cVXC2ZZ0OK-Rrk_9KTi7ZsawJoWy/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Interval Notation' img={IntervalNotation} link='https://drive.google.com/file/d/19GXn4ia27-HzOiaelPkG1p9zEd2pPNzt/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Interval Notation 2' img={IntervalNotation2} link='https://drive.google.com/file/d/1rUmHqVZes8Aqwg2W_n1fyewAkxKHITDs/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Intervals of Increase and Decrease' img={IntervalsofIncreaseDecrease} link='https://drive.google.com/file/d/1dQJ5or0sO1QzvVDACJSpO1jpzdW0DYg4/view?usp=sharing' target='_blank' body = 'Download PDF' />  </div>

    </div>
    
)

export default Functions;