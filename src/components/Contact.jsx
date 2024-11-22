'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function Component() {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const recipientEmail = "cmsst@vnrvjiet.in"; 
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent("Query from CMSST")}&body=${encodeURIComponent(query)}`;
    window.location.href = gmailUrl;
    setQuery('');
  }

  return (
    <Card className="w-full mx-auto mt-4">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>Leave your query and we will get back to you.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Textarea
            placeholder="Type your query here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-h-[100px] rounded"
            aria-label="Query"

          />
        </CardContent>
        <CardFooter className="w-full flex justify-end">
          <Button type="submit" className="rounded">
            Send Query
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
