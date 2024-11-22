'use client'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PdfPreview() {
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border border-gray-200 rounded-xl m-6">
      <CardHeader className="flex items-center justify-between p-4 bg-gray-100 rounded-t-xl">
        <CardTitle className="flex items-center gap-4">
          <div>
            <img
              src="https://cdn.one-educationgroup.com/sites/2/2021/12/loughborough-2.png"
              alt="Loughborough University Logo"
              className="w-full p-6"
            />
            <h1 className="text-lg text-center font-bold text-gray-800">
              MOU with Loughborough, UK.pdf
            </h1>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center p-4">
        <Link
          href="https://drive.google.com/file/d/1wsW1vhKHTzBuFFcnHAVFPAHuvUUOSeZA/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 bg-slate-300 py-1.5 px-2.5 rounded hover:text-blue-800 font-medium"
        >
          Open PDF
        </Link>
      </CardContent>
    </Card>
  )
}
