import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PersonalCard from './../components/personal-card/personal-card.component'
import PersonalityCard from './../components/personality-card/personality-card.component'
import JourneyCard from './../components/journey-card/journey-card.component'
import TechnologyCard from './../components/technologies-card/technology-card.component'
import ProjectsCard from './../components/projects-card/projects-card.component'
import Footer from './../components/footer/custom-footer.component'

const IndexPage = () => (
  <Layout>
    <SEO title="Aykut Elevli" />
    <div>
      <PersonalCard />
      <PersonalityCard />
      <JourneyCard />
      <TechnologyCard />
      <ProjectsCard/>
      <Footer/>
    </div>
  </Layout>
)

export default IndexPage
