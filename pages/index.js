import JobList from '@/components/jobs/jobList/JobList'
import Footer from '@/components/layout/footer/Footer'
import { Header } from '@/components/layout/header/Header'
import Preview from '@/components/layout/preview/Preview'
import Testimonial from '@/components/layout/testimonial/Testimonial'


export default function Home() {

  return (
    <>
      <Header />
      <Testimonial />
      <Preview/>
      <Footer />
    </>
  )
}
