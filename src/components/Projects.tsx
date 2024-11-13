import React from 'react'
import Link from 'next/link'
import { EyeIcon, GithubIcon } from 'lucide-react'

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto py-16 px-4 md:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="mt-8 space-y-8">
          <div>
            <h3 className="text-2xl font-semibold">Image Captioning & Raspberry Pi</h3>
            <div className="mt-4 space-y-2">
              <p>
                • Developed an electronic classroom where multiple users can simultaneously view and draw on a "chalkboard" with each person's edits synchronized
              </p>
              <p>
                • Implemented using Python, FastAPI, and Huggingface for robust image processing and real-time collaboration
              </p>
            </div>
            <div className="mt-4 flex gap-4">
              <Link
                href="https://github.com/Makufff/Image-Captioning-Raspberry-Pi"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                prefetch={false}
                target='_blank'
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Camera Workflow With Adobe Lightroom</h3>
            <div className="mt-4 space-y-2">
              <p>
                • Developed an automated photo editing script using Adobe Lightroom plugins
              </p>
              <p>
                • Integrated with Google Photos API for automatic photo uploads after editing
              </p>
              <p>
                • Technologies used: Lua, Google API
              </p>
            </div>
            <div className="mt-4 flex gap-4">
              <Link
                href="https://github.com/Makufff/camera-workflow-with-adobe-lightroom"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                prefetch={false}
                target='_blank'
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Music2LeadSheet</h3>
            <div className="mt-4 space-y-2">
              <p>
                • Created a web application that generates leadsheets from song vocals
              </p>
              <p>
                • Built using Python, FastAPI, and Huggingface for audio processing and music notation generation
              </p>
              <p>
                • Implemented user-friendly interface for song upload and leadsheet generation
              </p>
            </div>
            <div className="mt-4 flex gap-4">
              <Link
                href="https://github.com/Makufff/Music2LeadSheet"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                prefetch={false}
                target='_blank'
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Object Detection Application</h3>
            <div className="mt-4 space-y-2">
              <p>
                • Built a cross-platform application implementing object detection capabilities
              </p>
              <p>
                • Utilized Python, FastAPI, Huggingface for backend processing, and Flutter/Dart for the cross-platform frontend
              </p>
              <p>
                • Implemented real-time object detection with optimized performance
              </p>
            </div>
            <div className="mt-4 flex gap-4">
              <Link
                href="https://github.com/Makufff/Object-Detection-Template-application"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                prefetch={false}
                target='_blank'
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Flashboi - AI-Powered Flashcard Generator</h3>
            <div className="mt-4 space-y-2">
              <p>
                • Developed an innovative solution using Llama 3 to automatically generate high-quality flashcards from PDF documents
              </p>
              <p>
                • Integrated advanced features including personalized study recommendations and multi-language support
              </p>
              <p>
                • Built using Python, Together AI, and llama-index for efficient document processing and AI-powered content generation
              </p>
              <p>
                • Won "Best Use of Together AI" award ($2,500 in credits) at Llama 3 Hackathon
              </p>
            </div>
            <div className="mt-4 flex gap-4">
              <Link
                href="https://github.com/Alpaca-8b-Llama3Hackathon"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                prefetch={false}
                target='_blank'
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects