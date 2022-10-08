import styles from "../../style";
import {MenuBar,File} from '../../components';
import {pdf,folder,folder2,one_step} from '../../assets'
import "../Product.css"
import {ProbabilityIntro,BinomialProbability,MultiplicationRuleIndependentEvents,BinomialDistributions,RandomVariablesandExpectedValue,ConditionalProbability2,BinomialDistributions2,RandomVariables,PermutationsvsCombinations,TransformationofRandomVariables,RandomVariables2,ProbabilityReview,ConditionalProbability} from "./Preview"


const ProbabilityDist = () => (

    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <MenuBar />
                </div>
        </div>
        
        <br />
        <br />

        <div className='cards'>

        <File title='Probability Intro' img={ProbabilityIntro} link='https://drive.google.com/file/d/1Sjn8rm9DHrjCTNg4fiLU_R7FWeGu0JUG/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Multiplication Rule Independent Events' img={MultiplicationRuleIndependentEvents} link='https://drive.google.com/file/d/1bSfakHBDOEKL9XBSJWGjV6DYU9Jt96gD/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Conditional Probability' img={ConditionalProbability} link='https://drive.google.com/file/d/1p-Po-dN6-aige3ZOiokAvlzjIYl7-eWG/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Conditional Probability 2' img={ConditionalProbability2} link='https://drive.google.com/file/d/1asCSj-g62LfRTM9KfD398LoIfNupVnLZ/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Binomial Probability' img={BinomialProbability} link='https://drive.google.com/file/d/1e6fNEOtV2j1ghGI2ex2bqpctvajhXkKB/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Binomial Distributions' img={BinomialDistributions} link='https://drive.google.com/file/d/1kzKXBJlK5SPZI6zG5SN2Vt-FGpw9_XG2/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Binomial Distributions 2' img={BinomialDistributions2} link='https://drive.google.com/file/d/1VQJAW8V9pwhSnhgeqorm-MUaJkWbaS00/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Permutations vs Combinations' img={PermutationsvsCombinations} link='https://drive.google.com/file/d/1zZKf8iLPXoxqbFk3pdCbhjGxSDarshez/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Probability Review' img={ProbabilityReview} link='https://drive.google.com/file/d/1igQREI5n0TBm9G9nXWQWsiMgVGivNOj0/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Random Variables and Expected Value' img={RandomVariablesandExpectedValue} link='https://drive.google.com/file/d/1HhyM20EZ9VJPsWBKp3W5YKF-d3nC8XS_/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Random Variables' img={RandomVariables} link='https://drive.google.com/file/d/1sT7Z7ZQQ69KBdF9QQnoFhKnhSyIppZ43/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Random Variables 2' img={RandomVariables2} link='https://drive.google.com/file/d/10KPjiKMorhyEaW7MwT9SxExSgzWAWEQc/view?usp=sharing' target='_blank' body = 'Download PDF' />
<File title='Transformation of Random Variables' img={TransformationofRandomVariables} link='https://drive.google.com/file/d/1GXAqrF2tzUiKy2fcBglQTMyGv5tD-GPp/view?usp=sharing' target='_blank' body = 'Download PDF' />

        </div>

    </div>
    
)

export default ProbabilityDist;