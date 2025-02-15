'use client'
import { TopBanner } from '@/UI/components/TopBanner/TopBanner'
import styles from './maps.module.scss'
import { MapsBanner } from '@/modules/MapsBanner/MapsBanner'
import { UnderBanner } from '@/UI/components/UnderBanner/UnderBanner'

export const Maps = () => {
  return (
    <main className={styles.mapsPage}>
      <TopBanner />
      <MapsBanner />
      <UnderBanner />
    </main>
  )
}
export default Maps
