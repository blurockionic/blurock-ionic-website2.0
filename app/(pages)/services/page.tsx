import React from 'react'
import HeroSection from '@/app/components/Services/hero'
import FeaturetteDashboard from '@/app/components/Services/featurreteDashboard'
import FeatureSuite from '@/app/components/Services/featuretteSuite'
import TeamStats from '@/app/components/Services/teamStats'
import TailoredServices from '@/app/components/Services/tailoredServices'

const Services = () => {
  return (
    <>
    {/* Hero Section */}
    <HeroSection />

    {/* Featurette Dashboard */}
    <FeaturetteDashboard />

    {/* Tailored Services */}
    <TailoredServices />

    {/* Feature Suite */}
    <FeatureSuite />

    {/* Team Stats */}
    <TeamStats />
  </>
  )
}

export default Services