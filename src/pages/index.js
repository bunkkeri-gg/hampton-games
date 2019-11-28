import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TimeTable from "../components/timetable"
import Maps from "../components/maps"

const IndexPage = () => (
  <Layout>
    <SEO title="Info" />
    <Maps />
    <TimeTable />
  </Layout>
)

export default IndexPage
