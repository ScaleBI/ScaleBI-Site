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

  if (!caseStudy) return <div>Not Found</div>;

  return (
    <>
      <Hero data={caseStudy.hero} />
      <Challenge data={caseStudy.challenge} />
     <WhyScaleBI data={caseStudy.whyScaleBI} />
       <Solution data={caseStudy.solution} />
      <Results data={caseStudy.results} />
     <LookingAhead data={caseStudy.lookingAhead} />
    </>
  );
}
