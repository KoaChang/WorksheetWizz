import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {ArithmeticSequenceandSeries,SequencesandSeriesReview,ArithmeticSequence,SeriesReview,GeometricSeries,GeometricSequences,ArithmeticSeries,GeometricSequencesandSeries,SequencesandSeriesProperties} from "./Preview"

const Series = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Arithmetic Sequence' img={ArithmeticSequence} link='https://drive.google.com/file/d/1Nbv9mTAZVpgAyr_Lze6ISLQVtVkOIclg/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Arithmetic Sequence and Series' img={ArithmeticSequenceandSeries} link='https://drive.google.com/file/d/1XhiRuc_fZqbOeHntr_21AJBSYoS1hrYr/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Arithmetic Series' img={ArithmeticSeries} link='https://drive.google.com/file/d/1qsMA0Ufyx2bsyX3sgUyr37IiXS4B6hwd/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Geometric Sequences' img={GeometricSequences} link='https://drive.google.com/file/d/1hDMOXFVs81dglCxnMcp9Bu4722oZV0RS/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Geometric Series' img={GeometricSeries} link='https://drive.google.com/file/d/1Typ_aX9ZTr2_pbKA9WTp0LCRt31NF-Me/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Geometric Sequences and Series' img={GeometricSequencesandSeries} link='https://drive.google.com/file/d/1Px5ACj7wXqv8sTewbm1hU0egOMZt4Lnl/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Sequences and Series Review' img={SequencesandSeriesReview} link='https://drive.google.com/file/d/1Hoq44qXXtpniEjLRYdDz0W7kluoiZWx-/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Series Review' img={SeriesReview} link='https://drive.google.com/file/d/1-i9e2xgArnBPAEKKu0qnrQXsvytaT70S/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Sequences and Series Properties ' img={SequencesandSeriesProperties} link='https://drive.google.com/file/d/1cQGNaI3XKiOaFzLEeRaJ7wxl9MZjZSSZ/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default Series;