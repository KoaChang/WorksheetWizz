import styles from "../../style";
import {MenuBar,File,Back} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {Link} from 'react-router-dom'
import {AnglesofaPolygon,ParallelLinesandTransversals,ParallelLinesandTransversals2,InteriorandExteriorAngles,ComplementaryandSupplementary,LinearPairandVerticalAngles,GeometryVocab,SolvingMissingAngles, PointsLinesPlanesAnglesReview} from "./Preview"


const PointsLinesPlanesAngles = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='flex justify-start items-center xxs:px-4 xs:px-6 ss:px-6 sm:px-12 lg:px-12 md:px-12 relative bottom-10'>
            <Link to={'/product/geometry'}>
                <Back />
            </Link>
        </div>

        <div className='cards'>

<File title='Geometry Vocab' img={GeometryVocab} link='https://drive.google.com/file/d/1TqTVBsQiYkoYwQ4L103YPiHyO5i2mfq1/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Angles of a Polygon' img={AnglesofaPolygon} link='https://drive.google.com/file/d/1iQQ-zLseFRc6xG_cff-FlcB5LCBLmCEa/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Complementary and Supplementary' img={ComplementaryandSupplementary} link='https://drive.google.com/file/d/1BiheEWyO574XEAX6o0-9vW-ihAz-l0e1/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Interior and Exterior Angles' img={InteriorandExteriorAngles} link='https://drive.google.com/file/d/1Rii7E4R6407Dn6_B5NqMH_TrhH2SGQfa/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Linear Pair and Vertical Angles' img={LinearPairandVerticalAngles} link='https://drive.google.com/file/d/1z3imUktXfgIWw3GgjAJywXeDJnNvPKWG/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Solving Missing Angles' img={SolvingMissingAngles} link='https://drive.google.com/file/d/1B4zbuYVxr4mAkWUXqjXxCHYw7pX7hWXb/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Parallel Lines and Transversals' img={ParallelLinesandTransversals} link='https://drive.google.com/file/d/1WZMb7g91kBaovh037hM01-fJilQakDS-/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Parallel Lines and Transversals 2' img={ParallelLinesandTransversals2} link='https://drive.google.com/file/d/1ve1ylSvriwW2aQ8e9YiM-PX0Y3HLRHWK/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Points, Lines, Planes, Angles Review' img={PointsLinesPlanesAnglesReview} link='https://drive.google.com/file/d/1N7SugcEBy6ydGAe2ChoZDc-IKiyW1O5w/view?usp=sharing' target='_blank' body = 'Download PDF' />
        </div>

    </div>
    
)

export default PointsLinesPlanesAngles;