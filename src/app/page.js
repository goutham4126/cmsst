import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Plan from "@/components/Plan"
import Contact from "@/components/Contact"
import Image from "next/image"
import { MobileCarousel,DesktopCarousel } from "@/components/MembersCarousel"
import { FaBookOpen, FaLightbulb, FaBullseye, FaTrophy, FaUsers,FaRegHandPointRight } from "react-icons/fa"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Centre for Memory Studies and Storytelling - <Link href="https://vnrvjiet.ac.in/" className="text-primary">VNRVJIET</Link></h1>
      <Tabs defaultValue="introduction" className="w-full">
        <TabsList className="grid w-full grid-cols-2 gap-4 lg:grid-cols-6">
          <TabsTrigger value="introduction" className="bg-blue-400 text-white">
            <FaBookOpen className="inline mr-2" /> Introduction
          </TabsTrigger>
          <TabsTrigger value="significance" className="bg-blue-400 text-white">
            <FaLightbulb className="inline mr-2" /> Significance
          </TabsTrigger>
          <TabsTrigger value="vision" className="bg-blue-400 text-white">
            <FaBullseye className="inline mr-2" /> Vision & Mission
          </TabsTrigger>
          <TabsTrigger value="objectives" className="bg-blue-400 text-white">
            <FaTrophy className="inline mr-2" /> Objectives
          </TabsTrigger>
          <TabsTrigger value="outcomes" className="bg-blue-400 text-white">
            <FaTrophy className="inline mr-2" /> Outcomes
          </TabsTrigger>
          <TabsTrigger value="people" className="bg-blue-400 text-white">
            <FaUsers className="inline mr-2" /> People
          </TabsTrigger>
        </TabsList>
        
        <Card className="mt-24 md:mt-6 rounded-md border p-4">
          <TabsContent value="introduction">
            <div className="bg-gradient-to-r from-blue-50 to-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-4">
                <FaRegHandPointRight className="text-blue-800 mr-4 h-6 w-6" />
                <h2 className="text-2xl font-bold text-blue-900">Introduction</h2>
              </div>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Memory studies as a branch of knowledge began its presence by forging concepts of <span className="font-semibold text-blue-800">cultural memory</span> to demand special focus from scholars of media studies, sociologists, literary critics, and also natural scientists. Memory studies is an increasingly diverse, interdisciplinary, and dynamic field that requires consistent enquiry into the concepts and their application, providing a theoretical, conceptual, and methodological framework for this new field of study.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                <span className="font-semibold text-blue-800">Cultural memory</span> conserves heritage by involving an act of remembering and forgetting. This act involves narration, which contributes to the identity of an individual, a society, and a nation. Such stories are narrated in various ways – embodied, written, oral, performance, painting, and digital technologies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Storytelling holds great significance today as a teaching/learning tool and a part of the major entertainment industry, including cinema, television, and video gaming. It is an ancient tradition in many cultures, recognized by India&apos;s <span className="font-semibold text-blue-800">NEP-2020</span> as one of the primary teaching/learning strategies for students of all levels. Along with imagination, individual memory, and cultural memory, storytelling forms a strong connection with memory.
              </p>
            </div>
          </TabsContent>

                  
          <TabsContent value="significance">
          <div className="bg-gradient-to-r from-blue-50 to-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <FaRegHandPointRight className="text-blue-800 mr-4 h-6 w-6" /> 
              <h2 className="text-2xl font-bold text-blue-900">Significance</h2>
            </div>
            <p className="mb-4 text-gray-700 leading-relaxed">
              As we are dealing with an explosion of technology in the world, there is always an advantage of preserving what we need to know and what we want our future generations to know. In an attempt to study and document certain amount of vital information that assumes significance in defining who we are, this interdisciplinary centre of excellence plans to bring researchers, academicians, corporate companies, and students onto one platform to research, study, and apply various strategies of storytelling to the industry.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              This centre attempts to understand the various storytelling strategies adapted by different communities, regions, and nations to preserve their memories. In this context, it becomes imperative to study the theoretical and methodological approaches from psychology, sociology, cultural studies, media studies, arts, history, and literature to scrutinize how our understanding of the past, present, and future is formed, framed, mediated, and remediated through various strategies of storytelling.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We can use data science and artificial intelligence to enhance our comprehension. Therefore, this centre will help in building a team of scholars from different fields of knowledge like psychology, humanities, media studies, storytelling industry, arts, and computer science. As a team, they will engage in interdisciplinary enquiry into memory studies and storytelling, evolve with peer-reviewed publications, patents, and knowledge-sharing activities, courses to be taught to both UG and PG students, guidance of Ph.D. scholars, and undertake consultancy work.
            </p>
          </div>
        </TabsContent>
          
        <TabsContent value="vision">
          <div className="bg-gradient-to-r from-blue-50 to-white shadow-md rounded-lg p-6">
            {/* Vision Section */}
            <div className="flex items-center mb-4">
              <FaRegHandPointRight className="text-blue-800 mr-4 h-6 w-6" /> 
              <h2 className="text-2xl font-bold text-blue-900">
                Vision
              </h2>
            </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                To become a centre for excellence in memory studies and storytelling, one of its kind in bringing together a team of dedicated scholars from the humanities, psychology, data science, sociology, arts to work under one umbrella. This centre intends to take up interdisciplinary research and develop a plural comprehension of memory studies. At the same time, this centre will develop the ecosystem of researching, applying, and teaching the two core areas of greater significance, memory studies and storytelling.
              </p>

            {/* Mission Section */}
            <div className="flex items-center mb-4">
              <FaRegHandPointRight className="text-blue-800 mr-4 h-6 w-6" /> 
              <h2 className="text-2xl font-bold text-blue-900">
                Mission
              </h2>
            </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                A group of scholars from different disciplines of humanities, psychology, data scientists, experts from storytelling arts came together to comprehend the interface of one field of knowledge with the others. This endeavour intends to take up interdisciplinary study of memory studies and storytelling with the ecosystem where the collaboration of industry with academia facilitates a meaningful discussion among all the concerned scholars.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This can happen through projects, knowledge sharing sessions like conferences, workshops, symposia, peer-reviewed publications, offering unique courses to undergraduate students, postgraduate students, guiding Ph.D. students, offering projects and internships to both UG and PG students, and undertaking consultancy work.
              </p>
          </div>
        </TabsContent>

          
        <TabsContent value="objectives">
          <div className="bg-gradient-to-r from-blue-50 to-white shadow-md rounded-lg p-6">
             <div className="flex items-center mb-4">
              <FaRegHandPointRight className="text-blue-800 mr-4 h-6 w-6" /> 
              <h2 className="text-2xl font-bold text-blue-900">
                Objectives
              </h2>
            </div>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-blue-800">➤</span>
                <span>To establish a unique centre of excellence in memory studies and storytelling</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-800">➤</span>
                <span>To create an ecosystem of interdisciplinary research</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-800">➤</span>
                <span>To develop research culture, improve the publications, patents, and consultancy projects along with research projects</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-800">➤</span>
                <span>To make students a part of the centre offer, projects and internships</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-800">➤</span>
                <span>To offer niche courses to students with cutting-edge knowledge in memory studies and storytelling</span>
              </li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="outcomes">
          <div className="bg-gradient-to-r from-blue-50 to-white shadow-md rounded-lg p-6">
             <div className="flex items-center mb-4">
              <FaRegHandPointRight className="text-blue-800 mr-4 h-6 w-6" /> 
              <h2 className="text-2xl font-bold text-blue-900">
                Outcomes
              </h2>
            </div>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-blue-800">➤</span>
                <span>VNRVJIET will house a unique centre of excellence for memory studies and storytelling</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-800">➤</span>
                <span>Many research scholars from different fields like Literature, Language studies, Psychology, Management sciences, Data sciences, Artificial Intelligence along with arts will collaborate for interdisciplinary research</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-800">➤</span>
                <span>The faculty members will be able to do quality research, publish, apply for patents, undertake consultancy projects along with research projects</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-800">➤</span>
                <span>Both UG and PG students will get projects and internship</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-800">➤</span>
                <span>We will offer some unique courses related to memory studies and storytelling to both UG and PG students</span>
              </li>
            </ul>
          </div>
        </TabsContent>
          <TabsContent value="people">
            <div className="hidden lg:block">
              <DesktopCarousel />
            </div>
            <div className="block lg:hidden">
              <MobileCarousel />
            </div>
          </TabsContent>
        </Card>
      </Tabs>
      <section className="space-y-4 mt-4">
          <Card className="p-6">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <Image
                  src="https://i.postimg.cc/V6HWG9Hp/Dr-Chennakesava-Rao-Director-VNRVJIET-addressing-the-gathering.jpg"
                  alt="Dr. Chennakesava Rao addressing the gathering"
                  width={600}
                  height={600}
                  className="rounded-xl object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">International Collaborations</h2>
                <p className="text-muted-foreground">
                  International collaborations with universities across the globe will certainly make knowledge
                  sharing easy and effective. Storytelling Academy of Loughborough University, UK showed in
                  collaborating with us in this endeavour. We can collaborate with other universities and industries
                  of similar interest.
                </p>
                <h2 className="text-xl font-bold my-4">National Collaborations</h2>
                <p className="text-muted-foreground">
                  At this point of time IIT Chennai and EFLU Hyderabad are working in the area of memory
                  studies, and both showed interest in collaborating with us. We can think of collaborating with 
                  other organizations of repute in this journey.
                </p>
              </div>
            </div>
          </Card>
      </section>
      <Plan/>
      <Contact/>
    </div>
  )
}