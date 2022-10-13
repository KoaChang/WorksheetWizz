import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {XsonBothSides,DifficultQuadratics,CombiningLikeTerms,XYAddSub,OneStepEquations,XYSub,TwoStepEquations,XYAdd,XYSubb,DistributiveProperty,XYMult,EasyQuadratics} from "./Preview"
import {Link} from 'react-router-dom'

const Ladder = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/algebra1'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>
            <File title='One-Step Equations'    img={OneStepEquations} body='Download PDF' link='https://drive.google.com/file/d/1Zp8M8T_13GaQ6-T0Y0eEKoSrSoA3FGwF/view?usp=sharing' target='_blank'/>
            <File title='Two-Step Equations'    img={TwoStepEquations} body='Download PDF' link='https://drive.google.com/file/d/1NharNy8bYLbnvxc72V0QVw59EHx-Errx/view?usp=sharing' target='_blank' />
<File title='Combining Like Terms' img={CombiningLikeTerms} link='https://drive.google.com/file/d/1-77XST8dkuWRxM5atLs4plcqLhcagqid/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='X on Both Sides'  img={XsonBothSides} body='Download PDF' link='https://drive.google.com/file/d/12xZlqFXT4lzbyjRtD1PoFijLXlJ8489H/view?usp=sharing' target='_blank'/>
<File title='Distributive Property' img={DistributiveProperty} link='https://drive.google.com/file/d/12OKO7XXVRNDwet-cYZMcFcY5Nz4Ko9nq/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Solve x,y by Addition' img={XYAdd} link='https://drive.google.com/file/d/1RaYl8LAFw1bC1xquHnGpgQ8EWgKELUy7/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Solve x,y by Subtraction' img={XYSub} link='https://drive.google.com/file/d/1okjCsMj8-g-PKMtWWH9Y2IJovo9Xm1L2/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Solve x,y by Addition/Subtraction'  img={XYAddSub} body='Download PDF' link='https://drive.google.com/file/d/1Eu4mgE7LikVOR0ULwZjhCcS54_JsQs6b/view?usp=sharing' target='_blank'/>
            <File title='Solve x,y by Multiplication'  img={XYMult} body='Download PDF' link='https://drive.google.com/file/d/1InAHaE-LW3NJ1qhPWOK0oTvy_Yf3FVAl/view?usp=sharing' target='_blank'/>
            <File title='Solve x,y by Substituion'   img={XYSubb} body='Download PDF' link='https://drive.google.com/file/d/1WQnZMNuq0azRbBx5cnebkYTf7ED-U2eq/view?usp=sharing' target='_blank'/>
<File title='100 Easy Quadratics' img={EasyQuadratics} link='https://drive.google.com/file/d/1x1HnhwYjkFKrL_fdhRaHLTKBxSuc0sqd/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='100 Difficult Quadratics' img={DifficultQuadratics} link='https://drive.google.com/file/d/1byqPKA59LKzz95hT0L4vVSToq6ZGy0FU/view?usp=sharing' target='_blank' body = 'Download PDF' />
     
        </div>

    </div>
    
)

export default Ladder;