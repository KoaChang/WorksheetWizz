import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {RedoxReactions,PrecipitationReactions,TypesofChemicalReactions,Stoichiometry} from "./Preview"

const ChemicalReaction = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/chemistry'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>
    
<File title='Stoichiometry' img={Stoichiometry} link='https://drive.google.com/file/d/1O2w-a2ZlRgpDmlpXoMEqVxTYi3Mk-QxD/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Types of Chemical Reactions' img={TypesofChemicalReactions} link='https://drive.google.com/file/d/1EH3Uq66I_dp0bzHMirp95xOa1umXDBSY/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Precipitation Reactions' img={PrecipitationReactions} link='https://drive.google.com/file/d/1aOaYefz_5LoxTaWn2BPNNo0XQaS5N92z/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Redox Reactions' img={RedoxReactions} link='https://drive.google.com/file/d/1ZdeJojeC2f5h4zffNHgk6ch2zjXHEcOJ/view?usp=sharing' target='_blank' body = 'Download PDF' /> </div>

    </div>
    
)

export default ChemicalReaction;