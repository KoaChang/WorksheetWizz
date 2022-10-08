import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2} from '../../assets'
import "../Product.css"
import {IntegratingTrigFunctions,SecondFundamentalTheoremofCalculus,IntegratingbyPartialFractionsReview,FirstFundamentalTheoremofCalculus,SecondFundamentalTheoremofCalculusReview,IntegrationbyPartialFractions,IndefiniteIntegrals,FundamentalTheoremofCalculusReview,DefiniteIntegralswithSubstitutions,TrigSubstitutionsIntegrals,AccumalationofChange,IntegrationbySubstitution,IntegrationbyPartsReview,DefiniteIntegrals2,IntegrationbyParts2,IntegrationbyParts,DefiniteIntegrals,IntegrationbySubstitutionReview} from "./Preview"

const IntegrationAccumulation = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>
    
            <File title='Accumulation of Change' img={AccumalationofChange} body='Download PDF' link='https://drive.google.com/file/d/1UxUhVDLcY3jazw80r6oHIfVuIWb18BF4/view?usp=sharing' target='_blank'/>
<File title='Indefinite Integrals' img={IndefiniteIntegrals} link='https://drive.google.com/file/d/1-BY3jBZl_SNdj0XXmcyLsO-xFZjFRTle/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Definite Integrals' img={DefiniteIntegrals} link='https://drive.google.com/file/d/1lp4wovbhBx4Qku6ilcygACUhQ-weFTva/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Definite Integrals 2' img={DefiniteIntegrals2} link='https://drive.google.com/file/d/1Bqo8mwqf1594yVqF0KLjf-FKkFo-2WOn/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Definite Integrals with Substitutions' img={DefiniteIntegralswithSubstitutions} link='https://drive.google.com/file/d/1K8OyrSRcQ9OHd65gj-Uv-rdng-sWFWhT/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Integration by Substitution' img={IntegrationbySubstitution} link='https://drive.google.com/file/d/183syDmP1XhKL1aUiBYRVSUhzgr-YqkTB/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Integration by Substitution Review' img={IntegrationbySubstitutionReview} link='https://drive.google.com/file/d/15OylZXxDKmkgJguRDtkGaKIQN51ebUk8/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Integration by Partial Fractions' img={IntegrationbyPartialFractions} link='https://drive.google.com/file/d/1jGxDa_5MDJ1yoX_cjZiVHYJ3G9W8qpN2/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Integrating by Partial Fractions Review' img={IntegratingbyPartialFractionsReview} link='https://drive.google.com/file/d/1DsJLDL191muDP9GJtXaeClKElPpyDJUB/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Integrating Trig Functions' img={IntegratingTrigFunctions} link='https://drive.google.com/file/d/1eXZIOsSzBXwD0KeBtECEyR6DByg_EChf/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Trig Substitutions Integrals' img={TrigSubstitutionsIntegrals} link='https://drive.google.com/file/d/10brj_E2UGRRrcJqbL0PchqqQg5KQtcEx/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Integration by Parts' img={IntegratingTrigFunctions} link='https://drive.google.com/file/d/1HlShCXEVs8HFsahJrSCfelled61VGyEr/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Integration by Parts 2' img={IntegrationbyParts2} link='https://drive.google.com/file/d/1exO_497uMlbY1nyOgbVP4OjHi3pfpHNX/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Integration by Parts Review' img={IntegrationbyPartsReview} link='https://drive.google.com/file/d/1Ehn7A9yiDjfHEDsb0YudhFHbZ9P8EtW6/view?usp=sharing' target='_blank' body = 'Download PDF' />

<File title='First Fundamental Theorem of Calculus'   img={FirstFundamentalTheoremofCalculus} body='Download PDF' link='https://drive.google.com/file/d/1h7jif_0hapNKyj3a886-bmptb1jYL_UD/view?usp=sharing' target='_blank'/>
   <File title='Fundamental Theorem of Calculus Review' img={FundamentalTheoremofCalculusReview} link='https://drive.google.com/file/d/1H5PHt1ocHMV7c8EKqU5EVjz4YoUZx1s_/view?usp=sharing' target='_blank' body = 'Download PDF' />   

   <File title='Second Fundamental Theorem of Calculus'   img={SecondFundamentalTheoremofCalculus} body='Download PDF' link='https://drive.google.com/file/d/1jGxDa_5MDJ1yoX_cjZiVHYJ3G9W8qpN2/view?usp=sharing' target='_blank'/>
            <File title='Second Fundamental Theorem of Calculus Review'   img={SecondFundamentalTheoremofCalculusReview} body='Download PDF' link='https://drive.google.com/file/d/1Fty6D-MaJUJQlXB9diSHV9OW2X4Dy-Gb/view?usp=sharing' target='_blank'/>
        </div>

    </div>
    
)

export default IntegrationAccumulation;