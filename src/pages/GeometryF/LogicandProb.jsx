import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"

import {TruthTables2,GeometricProbability3,GeometricProbability2,GeometricProbability,LogicChains,ConditionalStatements,ConditionalStatements2,LogicalReasoning,TruthTables} from "./Preview"

const LogicandProb = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
            
<File title='Logical Reasoning' img={LogicalReasoning} link='https://drive.google.com/file/d/1_thv-aqEhVqBTLzPieO95GJCTNAasaoq/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Conditional Statements' img={ConditionalStatements} link='https://drive.google.com/file/d/1hnOE8yhyHHbaoV9HpuGNOLokl3sHHijz/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Conditional Statements 2' img={ConditionalStatements2} link='https://drive.google.com/file/d/1uG9a-qgMRPPQ-LfwPdx1fBo-JTIaNCYL/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Geometric Probability' img={GeometricProbability} link='https://drive.google.com/file/d/1N-1MlGiA2oP0Eiysh3TJviAXdCcjlSFO/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Geometric Probability 2' img={GeometricProbability2} link='https://drive.google.com/file/d/1Q1EDpZL3shKGfBfuH3FQdCPC-6Eaq3g5/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Geometric Probability 3' img={GeometricProbability3} link='https://drive.google.com/file/d/1TI0zWhS9ld27FbkPmaj23ny9iF3oQ4sx/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Logic Chains' img={LogicChains} link='https://drive.google.com/file/d/1xnLVF9vbABvwhC-BCbjYZIrU4GBsyPef/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Truth Tables' img={TruthTables} link='https://drive.google.com/file/d/1ykeGt2IgRGql_5NELV7lkgQj1AXNcgO-/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Truth Tables 2' img={TruthTables2} link='https://drive.google.com/file/d/1W0gCQrc_9dSNCXpjkpf9ed8FiKL8d3Kx/view?usp=sharing' target='_blank' body = 'Download PDF' /> </div>

    </div>
    
)

export default LogicandProb;