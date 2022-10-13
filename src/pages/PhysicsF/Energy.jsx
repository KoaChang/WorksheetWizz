import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {WorkandPower,PotentialandKineticEnergy,ElasticPotentialEnergy,ConservationofEnergy} from "./Preview"


const Energy = () => (

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

        <File title='Work and Power' img={WorkandPower} link='https://drive.google.com/file/d/1QFN3nerkHc6AghLkJuMAjqBAFHe4z61f/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Potential and Kinetic Energy' img={PotentialandKineticEnergy} link='https://drive.google.com/file/d/1w7uHbEIT0Meu3VpcMcLhVs57-jmV5xFG/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Elastic Potential Energy' img={ElasticPotentialEnergy} link='https://drive.google.com/file/d/17BioFx-dvod_pK3TB2A2K565v9Q7Vt-2/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Conservation of Energy' img={ConservationofEnergy} link='https://drive.google.com/file/d/1wfcQicg1ImDT-41txO3LsAP50sO_grGX/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Energy;