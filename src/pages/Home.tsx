import { Hero } from '../components/sections/Hero'
import { Navbar } from '../components/sections/Navbar'
import AboutMe from '../components/sections/About'
import { Skills } from '../components/sections/Skills'
import { Projects } from '../components/sections/Projects'
import { Activities } from '../components/sections/Activities'
import { Achievements } from '../components/sections/Achievements'
import { Contact } from '../components/sections/Contact'
import { Footer } from '../components/sections/Footer'
import { heroContent } from '../constants/profile'
import { skills } from '../constants/skills'
import { projects } from '../constants/projects'
import { activities } from '../constants/activities'
import { socialLinks } from '../constants/socials'

const Home = () => {
  const achievements = activities.filter(a => a.category !== 'Event')

  return (
    <div className="bg-mist text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar />
      <main className="pt-10">
        <Hero {...heroContent} />
        <AboutMe />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Activities activities={activities} />
        <Achievements achievements={achievements} />
        <Contact socialLinks={socialLinks} />
      </main>
      <Footer />
    </div>
  )
}

export default Home
