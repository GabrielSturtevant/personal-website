import {Component} from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  jobs: Array<Job> = [
    {
      company: 'BlackLine',
      title: 'Software Engineer',
      dateRange: 'Jan. 2018 – Aug. 2022',
      location: 'Woodland Hills, CA',
      website: 'https://www.blackline.com/',
      description: [
        'Led the design and development of an Angular 2+ frontend that was deployed to AWS S3 buckets and unified multiple microservices. The result was an extensible, reactive, and modular frontend that streamlined the software development process, allowing for modular deployment.',
        'Instrumental in the successful design, implementation, and ongoing maintenance of multiple enterprise-level software-as-a-service (SaaS) microservices. Utilizing my expertise in Java/Spring Boot and Ruby/Rails, I effectively executed on complex technical projects and delivered high-quality, scalable solutions that met the needs of the business.',
        'Designed and implemented REST APIs using industry-standard technologies to provide seamless communication between microservices and front-end applications. ',
        'Demonstrated expertise in integrating systems using Service-Oriented Architecture (SOA) techniques, including web services, XML/JSON/HTTPS protocols, resulting in seamless exchange of data across enterprise systems.',
        'Utilized best practices for security, scalability, and performance, ensuring high availability and data integrity. ',
        'Conducted thorough testing and debugging to maintain a high level of code quality and delivered APIs within established timelines.',
        'Reduced ramp-up time through the automation of development environment creation using Docker, resulting in improved efficiency and productivity and laid the groundwork for future serverless application deployment.',
        'Designed a highly efficient and seamless database migration strategy, ensuring zero downtime for smooth operation during transition.',
        'Contributed to the development of high-throughput, low-latency application communication using Apache Kafka, resulting in a more scalable and resilient infrastructure.',
        'Led meetings with multiple levels of management to articulate the advantages of adopting a company-wide API gateway, resulting in its successful implementation.',
        'Successfully led the initiative to introduce microservices to the company\'s technology stack, resulting in a shift towards a microservice-centric architecture paradigm and improving overall software development efficiency and scalability.',
        'Drove the reduction of bugs by 50% through my expertise in testing, troubleshooting, debugging, optimization, scaling, and improvement.',
        'Boosted software efficiency by 20% through collaboration with cross-functional teams on code reviews, functional and technical specifications, and test plans.',
        'Ensured a 99% pass rate on security audits by implementing advanced software development techniques that met expectations for integration, performance, security, and maintainability.',
        'Accelerated software development speed by 30% through the adoption of industry-leading tools and technologies through my in-depth research, testing, and benchmarking.',
        'Achieved a 90% customer satisfaction rate by promoting a culture of technical excellence and software quality through my focus on good practices, clean and secure code, and addressing areas of concern.',
        'Delivered high-quality software products within established timelines, exceeding client expectations and adhering to coding standards and requirements.',
        'Maintained a 99.9% success rate for software releases by providing critical maintenance, deployment, and release support, including off-hours support when necessary.',
        'Developed a deployment strategy for applications on Linux virtual machines utilizing Jenkins and shell scripting.',
        'Implemented continuous integration and delivery (CI/CD) pipeline that streamlined the software development process and reduced time to market by 25%.',
        'Developed and maintained software documentation, providing a comprehensive guide for maintenance and future development, improving collaboration and knowledge sharing within the team.',
        'Interviewed over 30 potential candidates for engineering, technical, and senior leadership positions, playing an active role in building a strong team.',
        'Mentored and coached junior engineers on both technical and soft skills, as well as onboarding new peers, contributing to their professional growth and development.'
      ]
    },
    {
      company: 'Meta+LAB (CSUN)',
      title: 'Backend PhP Developer, Scrum Master',
      dateRange: 'Jan. 2017 – Nov. 2017',
      location: 'Northridge, CA',
      website: 'https://www.csun.edu/',
      description: [
        'Honed skills in PHP, Laravel, HTML, CSS, jQuery, Laravel Blade, and JavaScript while working as a back-end developer on the Electronic Thesis Dissertation v3 (ETDv3) project using an Agile process with a Scrum framework.',
        'Saved up to $60k in yearly costs for CSUN and generated recurrent revenue by delivering a white-label application for a fully digital thesis and dissertation review process.',
        'Boosted application efficiency through developing and maintaining back-end PHP modules, resulting in seamless operation and enhanced user satisfaction.',
        'Established strong stakeholder relationships, achieving a 95% satisfaction rate among university administrators and faculty.',
        'Accelerated project timelines by 25% through cross-functional collaboration and utilization of Agile/Scrum methodology.',
        'Ensured clear and comprehensive understanding of the application through contributing to technical documentation for future development and maintenance.',
        'Maintained a 95% satisfaction rate among users and reduced bug reports by 40% through providing ongoing support and maintenance for the application.',
        'Invited to join the company eight months ahead of the cohort as a part-time developer, showcasing exceptional talent and a drive to learn.',
        'Led the final development, integration testing, UAT, and deployment of the ETDv3 system as a scrum master.',
        'Demonstrated strong leadership skills and attention to detail by conducting a full code review and creating a plan to mitigate defects.',
        'Inspired students, staff, and clients with an open, positive, and thoughtful personality, leaving a positive impact on the META+LAB community.',
        'Embraced challenges as opportunities for personal and team improvement, demonstrating a drive to learn and grow in the field.'
      ]
    },
    {
      company: 'BlackLine',
      title: 'Software Development Intern',
      dateRange: 'Summer 2016',
      location: 'Woodland Hills, CA',
      website: 'https://www.blackline.com/',
      description: [
        'Saved the company thousands in recurring annual licensing fees by replacing proprietary software modules with open source equivalents on over 100 different application pages.',
        'Quickly integrated into team and adapted to .Net stack and company processes',
        'Assigned to a team responsible for adding functionality to core product and addressing critical production issues',
        'Demonstrated enthusiasm in working on various projects ranging from simple one-line changes to complex framework replacements',
        'Exhibited strong problem-solving skills, not only fixing issues, but also identifying root causes and implementing solutions',
        'Displayed strong technical aptitude and ability to navigate technical review procedures and extensive documentation requirements.'
      ]
    },
    {
      company: 'Opportunities For Learning',
      title: 'Math Tutor',
      dateRange: '2014-2015',
      location: 'Lancaster, CA',
      website: 'https://oflschools.org/',
      description: [
        'Taught students needing math help in groups or individually.',
        'Handled skill based tutoring in Algebra I and II, Geometry and Trigonometry.',
        'Developed resources to tutor students to build Math Skills.',
        'Evaluated students to measure skill progression and determine improvement areas.',
        'Coordinated with tutors and library staff to offer engaging activities after school.',
        'Supported students to develop and meet academic goals.',
        'Helped students to prepare for tests.',
        'Recorded and reported student progress.',
        'Attended scheduled staff meetings.',
        'Formulated and executed school and student plan with School Principal.',
        'Assisted Middle and High School students in Calculus, Pre Algebra, Algebra I&II and Geometry.'
      ]
    }
  ]
}

export interface Job {
  company: string;
  title: string;
  dateRange: string;
  location: string;
  website:string;
  description: Array<string>;
}
