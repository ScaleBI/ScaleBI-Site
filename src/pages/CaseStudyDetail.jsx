import { useParams } from "react-router-dom";
import  caseStudies  from "../data/CaseStudiesData";
import Hero from "../sections/caseStudyDetail/Hero";
import Challenge from "../sections/caseStudyDetail/Challenge";
import WhyScaleBI from "../sections/caseStudyDetail/WhyScaleBI";
import Solution from "../sections/caseStudyDetail/Solution";
import Results from "../sections/caseStudyDetail/Results";
import LookingAhead from "../sections/caseStudyDetail/LookingAhead";

export default function CaseStudyDetail() {
  const { slug } = useParams();

  const caseStudy = caseStudies.find(
    (item) => item.slug === slug
  );


return (
  <>
    {caseStudy?.hero && <Hero data={caseStudy.hero} />}
    {caseStudy?.challenge && <Challenge data={caseStudy.challenge} />}
    {caseStudy?.whyScaleBI && <WhyScaleBI data={caseStudy.whyScaleBI} />}
    {caseStudy?.solution && <Solution data={caseStudy.solution} />}
    {caseStudy?.results && <Results data={caseStudy.results} />}
    {caseStudy?.lookingAhead && <LookingAhead data={caseStudy.lookingAhead} />}
  </>
);
}
