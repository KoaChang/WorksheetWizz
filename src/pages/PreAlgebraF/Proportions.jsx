import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import {ConstantofProportionality,SolvingProportions,ConstantofProportionalityGraph,SolvingProportions2,ProportionsWordProblems,IdentifyingProportionalRelationships,ProportionsWordProblems2} from "./Preview"


const Proportions = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Identifying Proportional Relationships' img={IdentifyingProportionalRelationships} link='https://drive.google.com/file/d/15y_ydaQjQzMhVpaA8qlwVHb68ThDPdXi/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Constant of Proportionality' img={ConstantofProportionality} link='https://drive.google.com/file/d/1GyAU2B5ON2Jfe3sbb1t4Fr5T-ohkdA20/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Solving Proportions 2' img={SolvingProportions2} link='https://drive.google.com/file/d/1EBKVYFf74guMWWrCw-z9B-3AkRmP_c2_/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Solving Proportions' img={SolvingProportions} link='https://drive.google.com/file/d/1sl9g02xIrqzin0Lb8SZr8HfbM4n3Dh-N/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Constant of Proportionality Graph' img={ConstantofProportionalityGraph} link='https://drive.google.com/file/d/1btzdaUEXEP9hoFoihl6x8iPcldZm1sO_/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Proportions Word Problems' img={ProportionsWordProblems} link='https://drive.google.com/file/d/1S4EfBu8zuW0dtFx4AKrT-4bw4P4Z3ANL/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Proportions Word Problems 2' img={ProportionsWordProblems2} link='https://drive.google.com/file/d/1WgUcLzWWpCRRLlZLXQuoigynTDdjuZEp/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Proportions;