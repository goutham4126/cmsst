'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PdfPreview() {
  const conference = {
    id: 1,
    title: 'Complete Conference Report',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg',
    link: 'https://drive.google.com/file/d/1f0DDz13K_daRyB6YKkpWeT0kARatTHAw/view?usp=sharing',
  }

  const workshops = [
    {
      id: 2,
      title: 'National Workshop Proposal',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg',
      link: 'https://drive.google.com/file/d/1SCerFeo5wycaoGd4cyhKUbqbj1FI_DFl/view?usp=sharing',
    },
    {
      id: 3,
      title: 'Report on Storytelling Workshop',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg',
      link: 'https://docs.google.com/document/d/1MRMQwaKt-5aqKytcP-xXczlAKGGn5GTg/edit?usp=sharing&ouid=114029620044185980932&rtpof=true&sd=true',
    },
    {
      id: 4,
      title: 'Workshop Brochure',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg',
      link: 'https://drive.google.com/file/d/1EqQ8FWeGDIgkORvkJQS5LAHjt4REpNVv/view?usp=sharing',
    },
  ]

  const images = [
    {
      src: 'https://i.postimg.cc/9FwJkS2p/Group-photo-with-the-participants-of-the-workshop.jpg',
      alt: 'Group photo with the participants of the workshop',
    },
    {
      src: 'https://i.postimg.cc/bvpgswtC/Prof-Mike-Wilson-Head-Dept-of-Storytelling-Loughborough-University-UK-conducting-the-session.jpg',
      alt: 'Prof. Mike Wilson conducting the session',
    },
    {
      src: 'https://i.postimg.cc/V6HWG9Hp/Dr-Chennakesava-Rao-Director-VNRVJIET-addressing-the-gathering.jpg',
      alt: 'Dr. Chennakesava Rao addressing the gathering',
    },
  ]

  return (
    <div className="space-y-8 p-6">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={600}
            height={600}
            className="rounded-lg shadow-lg"
          />
        ))}
      </div>
      <h1 className="text-2xl font-semibold mb-2">Conferences</h1>
      <Card className="w-full max-w-md shadow-lg border border-gray-200 rounded-xl">
        <CardHeader className="flex items-center justify-between p-4 bg-gray-100 rounded-t-xl">
          <CardTitle className="flex items-center gap-4">
            <div>
              <img
                src={conference.logo}
                alt={`${conference.title} Logo`}
                className="w-full p-6"
              />
              <h1 className="text-lg text-center font-bold text-gray-800">
                {conference.title}
              </h1>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-4">
          <Link
            href={conference.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 py-1.5 px-2.5 rounded hover:text-blue-800 font-medium"
          >
            Learn more ...
          </Link>
        </CardContent>
      </Card>

      <h1 className="text-2xl font-semibold mb-2">Workshops</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workshops.map((workshop) => (
          <Card key={workshop.id} className="w-full shadow-lg border border-gray-200 rounded-xl">
            <CardHeader className="flex items-center justify-between p-4 bg-gray-100 rounded-t-xl">
              <CardTitle className="flex items-center gap-4">
                <div>
                  <img
                    src={workshop.logo}
                    alt={`${workshop.title} Logo`}
                    className="w-full p-4"
                  />
                  <h1 className="text-sm text-center font-bold text-gray-800">
                    {workshop.title}
                  </h1>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-4">
              <Link
                href={workshop.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 py-1.5 px-2.5 rounded hover:text-blue-800 font-medium"
              >
                Learn more ...
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
