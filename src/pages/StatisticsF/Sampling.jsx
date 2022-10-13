import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {CentralLimitTheorem,SamplingDistributions2,SamplingDistributions,SamplingDistributionoftheSampleMean,CentralLimitTheorem2,SampleProportionsandMeans,SampleDistributionofaSamplingDistribution} from "./Preview"

const Sampling = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/statistics'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>

      
<File title='Sampling Distributions' img={SamplingDistributions} link='https://drive.google.com/file/d/1rXUodpSWlsz7NacqTHFcn7cZMhV3gzYw/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Sampling Distributions 2' img={SamplingDistributions2} link='https://drive.google.com/file/d/1isBOznylBX-OnYrbq9uHgJ5Ihkx9FEAD/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Sampling Distribution of the Sample Mean' img={SamplingDistributionoftheSampleMean} link='https://drive.google.com/file/d/1CUQeIbNS6AV7FyJzPUNdpzdrYsI5pTQW/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Sample Proportions and Means' img={SampleProportionsandMeans} link='https://drive.google.com/file/d/1ipbtTJb-MTO4txBQmxBKGCXpDn5qOGkx/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Central Limit Theorem' img={CentralLimitTheorem} link='https://drive.google.com/file/d/1WFY-RyZUKulE59bwnKjFo4_rhMO8mbQ6/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Central Limit Theorem 2' img={CentralLimitTheorem2} link='https://drive.google.com/file/d/1BEM5QGdJ_Lv_irBSFRk6S8ZRrZ9vt-pg/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Sampling;