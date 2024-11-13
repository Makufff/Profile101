import React from 'react'

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto py-16 px-4 md:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="mt-8 space-y-8">
          <div>
            <h3 className="text-2xl font-semibold">Co-Founder & Full Stack Developer</h3>
            <p className="text-muted-foreground">Fridayz VPS, 2024 - Present</p>
            <div className="mt-4 space-y-2">
              <p>
                • Designed and developed static website using NextJS for front-end
              </p>
              <p>
                • Designed and developing web application using NextJS, Xen Orchestra for virtual machine management, and PostgreSQL database
              </p>
              <p>
                • Built automated VPS rental system for customers
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Computer Vision & LLM Intern</h3>
            <p className="text-muted-foreground">V89 Technology, August 2024 - October 2024</p>
            <div className="mt-4 space-y-2">
              <p>
                • Implemented deep learning models for object recognition
              </p>
              <p>
                • Compressed and implemented YOLO model for CPU execution
              </p>
              <p>
                • Developed AI project management systems using LLM and GraphRAG
              </p>
              <p>
                • Integrated computer vision models with web applications using Docker and REST API
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Junior Web Developer</h3>
            <p className="text-muted-foreground">Sriyapai School, 2020 - 2023</p>
            <div className="mt-4 space-y-2">
              <p>
                • Developed and deployed web application for Grade 7 and Grade 10 student list search using React and SQL
              </p>
              <p>
                • Created web application for sharing love experiences using React and SQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience