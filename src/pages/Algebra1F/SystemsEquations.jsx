import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {SystemsWordProblems2,SystemsTest1,SystemsTest2,SystemsbyElimination,SystemsbyInspection,SystemsWordProblems,SystemsbySubstitution,SystemsReview,SystemsbyGraphing} from "./Preview"

const SystemsEquations = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Systems by Elimination' img={SystemsbyElimination} link='https://drive.google.com/file/d/1r1YgEIQZLZr0Pnmm5sNgAhF7cFNyBjTu/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Systems by Graphing' img={SystemsbyGraphing} link='https://drive.google.com/file/d/1GLmpjt7ILmfiVbtZ-FLT1zMjWboNLtGd/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Systems by Inspection' img={SystemsbyInspection} link='https://drive.google.com/file/d/1iRcGUukf0IAAM-A9jputqQT3g7zZyy1C/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Systems by Substitution' img={SystemsbyInspection} link='https://drive.google.com/file/d/17ooOpFhktbO7Y_R4uY5ewlHWkKRh8rqZ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Systems Review' img={SystemsReview} link='https://drive.google.com/file/d/1vIFjvgArwH6ufvZ3OmTmCz1MKLJ7o4RF/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Systems Test 1' img={SystemsTest1} link='https://drive.google.com/file/d/16R3SMkPnGuKHg5rNbRlexgmVQ2OXRBod/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Systems Word Problems' img={SystemsWordProblems} link='https://drive.google.com/file/d/1QxsifHXJQNQ7U_e9y3rg3FiN-XfDaTQ4/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Systems Word Problems 2' img={SystemsWordProblems2} link='https://drive.google.com/file/d/1G0sjhksDsQG7n7EUrurE2CjTm8nIYPRn/view?usp=sharing' target='_blank' body = 'Download PDF' />    </div>

    </div>
    
)

export default SystemsEquations;