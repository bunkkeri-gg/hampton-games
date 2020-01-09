import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TimeTable from "../components/timetable"
import Maps from "../components/maps"
import Venue from "../components/venue"
import Sponsor from "../components/sponsor"

const IndexPage = () => (
  <Layout>
    <SEO title="Info" />
    <Venue />
    <TimeTable />
    <Maps />
    <Sponsor />
  </Layout>
)

export default IndexPage
