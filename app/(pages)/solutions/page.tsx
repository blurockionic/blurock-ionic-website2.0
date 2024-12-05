import React from 'react'
import HeroSection from '@/app/components/Solutions/hero'
import FeaturetteDashboard from '@/app/components/Solutions/featurreteDashboard'
import FeaturetteOrder from '@/app/components/Solutions/featuretteOrder'
import FeaturetteEmployee from '@/app/components/Solutions/featuretteEmployee'
import FeatureSuite from '@/app/components/Solutions/featuretteSuite'
import TeamStats from '@/app/components/Solutions/teamStats'

const Services = () => {
  return (
    <>

      {/* Hero Section: Main banner */}
      <HeroSection />

      {/* Featurette Dashboard: Highlights dashboard features */}
      <FeaturetteDashboard />

      {/* Featurette Order: Showcases order management features */}
      <FeaturetteOrder />

      {/* Featurette Employee: Focuses on employee management features */}
      <FeaturetteEmployee />

      {/* Feature Suite: Overview of comprehensive feature suite */}
      <FeatureSuite />

      {/* Team Stats: Displays team statistics */}
      <TeamStats />

    </>
  )
}

export default Services