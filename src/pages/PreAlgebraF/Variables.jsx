import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {NumberPatterns,EvaluatingVariableExpressions,MadMinutes,CompletingPatterns,NumberPatterns2,EvaluatingExpressions,PartsofanExpressions2,PartsofanExpression} from "./Preview"

const Variables = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Number Patterns' img={NumberPatterns} link='https://drive.google.com/file/d/1PeVV8SCFsO_wby_JQxKbJKmnQNsdKTPx/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Number Patterns 2' img={NumberPatterns2} link='https://drive.google.com/file/d/15hnrG9yNkVs-NFrqvbQk5GmnuwCRvGBJ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Evaluating Expressions' img={EvaluatingExpressions} link='https://drive.google.com/file/d/1tSKVVRQe28fk8PTA_0MWDWtmxG69Tl6K/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Evaluating Variable Expressions' img={EvaluatingVariableExpressions} link='https://drive.google.com/file/d/1f-FVewGBuUTSsMQMMvT_dAgsDGFcTylG/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Mad Minutes' img={MadMinutes} link='https://drive.google.com/file/d/1igaY_QLmpafZ2_v-_erHrB6AapMyrDHF/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Completing Patterns' img={CompletingPatterns} link='https://drive.google.com/file/d/1haVmFC5dvY56pKH0YcCsXGUcAQjTEfbF/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Parts of an Expression' img={PartsofanExpression} link='https://drive.google.com/file/d/1TOxzAPCPbE82R-cLE_8ZF7NybFW8nATQ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Parts of an Expressions 2' img={PartsofanExpressions2} link='https://drive.google.com/file/d/1JkKbveGBimF4fZPLvacvv4xecNBU4fO2/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Variables;