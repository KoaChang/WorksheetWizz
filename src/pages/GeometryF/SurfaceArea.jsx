import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import {SurfaceAreaF,VolumesofSolids,AreasSurfaceAreasVolumes,SurfaceAreaandVolumesReivew,RatiosofSimilarSolids2,RatiosofSimilarSolids} from "./Preview"

const SurfaceArea = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
<File title='Areas, Surface Areas, Volumes' img={AreasSurfaceAreasVolumes} link='https://drive.google.com/file/d/1iUkBkax7WtJXpWYSbCMr4lYJJMKy3zET/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Surface Area' img={SurfaceAreaF} link='https://drive.google.com/file/d/1RLdUbti_Ogx-u6-PvgBFwSuVsYrKar-W/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Volumes of Solids' img={VolumesofSolids} link='https://drive.google.com/file/d/17nmJyKQ7ZlB-xjIamcph_LFFdN0rUijl/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Surface Area and Volumes Review' img={SurfaceAreaandVolumesReivew} link='https://drive.google.com/file/d/1Zmkmd9zUOmol0xcT_TRn-SPK3lgyay8v/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Ratios of Similar Solids' img={RatiosofSimilarSolids} link='https://drive.google.com/file/d/1fdM1bZ5yPFvnieaBiVGWjfSvs94yuSVw/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default SurfaceArea;