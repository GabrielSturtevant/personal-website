export interface Job {
  company: string;
  title: string;
  dateRange: string;
  location: string;
  website: string;
  description: Array<string>;
}

export interface Project {
  title: string;
  summary?: string;
  description: Array<string>;
  picturePath?: string;
  pictureLink?: string;
  projectLink?: string;

}

export interface Info {
  name: string;
  title: string;
  city: string;
  phone: string;
  email: string;
  website: string;
  github: string;
  linkedin: string
  aboutMe: Array<string>;
  projects: Array<Project>;
  jobs: Array<Job>;
}

export const INFO: Info = {
  name: 'Gabriel Sturtevant',
  title: 'Software Engineer',
  city: 'Los Angeles, CA',
  phone: '661-532-8176',
  email: 'Sturtevant.Gabriel@gmail.com',
  website: 'Sturtevant.tech',
  github: 'https://github.com/GabrielSturtevant',
  linkedin: 'https://www.linkedin.com/in/gabriel-sturtevant-751b8797',
  aboutMe: [
    'Seasoned software engineer seeking a challenging senior software engineer position that utilizes my 6+ years of experience in software engineering and proven track record of driving technical excellence. Seeking an opportunity to leverage my expertise in Angular, Java/Spring Boot, Ruby/Rails, REST API design and implementation, and software security to deliver high-quality, scalable solutions that meet business needs. Eager to contribute to a team that values continuous improvement, cross-functional collaboration, and industry-leading technology adoption. Committed to delivering high-quality software products, exceeding client expectations, and promoting a culture of technical excellence and software quality.',
    'I have a deep passion for technology and open source software. Technology isn\'t just work for me, it is my pastime and my favorite hobby.'
  ],
  projects: [
    {
      title: 'Linux Based Virtualization Server',
      summary: 'A virtualization server used to build new projects and learn new technologies',
      description: [
        '	Linux based virtualization server used to provide access to a variety of tools and environments to allow centralized storage and computational resources. Allows for an area to continue learning and honing skills.',
        '	Docker VM used to spin up reusable containers to test new applications, configurations, and give a standard development environment for personal projects.',
        '	Virtualized NAS (Open Media Vault) with over 45 TB of mixed HDD and SSD storage. Used to centralize user data for various personal computers via NFS to ensure data continuity regardless of machine being used.',
        '	VM for NGINX reverse proxy with LetsEncrypt user agent for https certification. Used to provide internet accessible access to projects and applications hosted on the homelab.',
        '	Nextcloud VM used to provide a self hosted cloud storage solution, allowing for automated backup of digital assets such as phone photos and videos.',
        '	Home Assistant VM used to provide a unified control/programming interface to various different smart home devices, that utilize disparate apps and communication standards (WiFi, Zigbee, ZeeWave).'
      ],
      picturePath: 'assets/images/projects/homelab-htop.png',
      pictureLink: 'https://sturtevant.tech/assets/images/projects/homelab-htop.png'
    },
    {
      title: 'Custom Built Router',
      description: [
        'Intel i5 based router with 16gb of RAM and a 120gb SSD. Running the FreeBSD based PfSense operating system.',
        'Configured with multiple VLANs to segregate network traffic. Allowing me to keep IoT smart devices from being able to reach into my more sensitive networks that connects to my loved one\'s devices. Additionally allows me to prevent my home security cameras from connecting to the internet at all, guaranteeing that images of my home wont be leaked online, even if a camera manufacturer gets hacked.',
        'SNORT intrusion detection configured to protect my network from bad actors trying to attack my internet facing services.',
        'Network-wide ad blocking implemented via a DNS sinkhole and a constantly updated list of known ad-server ip addresses.'
      ]
    },
    {
      title: 'Network Video Recorder',
      description: [
        'Windows based machine used as a control hub for network attached IP security cameras.',
        'Utilizes self hosted AI to analyze video motion events and filter out unwanted notifications that don’t match predetermined criteria.',
        'Implements pub/sub messaging paradigm to communicate with Home Assistant and provide real time alerts.'
      ]
    },
    {
      title: 'Python Server Control Layer',
      summary: 'A language agnostic interface designed to link an Android application to a remotely hosted SQLite database',
      description: [
        'The culminating project for my introduction to software development class at CSUN.',
        'The program is designed to listen on an open port for calls from a corresponding Android application that classmates implemented. Once a call is received, the program will parse the received text and determine whether a command was issued. If a command was issued, the program would query an SQLite database that would be stored local relative to the server control layer.'
      ],
      picturePath: 'assets/images/projects/project-featured.png',
      pictureLink: 'https://sturtevant.tech/assets/images/projects/project-featured.png',
      projectLink: 'https://github.com/GabrielSturtevant/Networkstuff'
    },
    {
      title: 'Visual Path Finding Demonstration',
      summary: 'A visual demonstration of navigating a weighted graph using the A* algorithm',
      description: [
        'This culminating project of my advanced data structures course at CSUN.',
        'This project was designed using a set of tools for the UI that were provided by the instructor. The project utilizes Java. The purpose of this project was to demonstrate a working understanding of the concepts of hash-tables, priority queues, and the A* path finding algorithm within a set of constraints provided by the teacher.',
        'Once the program is run, the user must select two points, the program will then visually display the A* path finding process starting from the first selected point until the second selected point is encountered. Once this occurs, the "player" will begin to move from the first point along the selected path until it either finds a map (purple indicators) to treasure (yellow indicators), at which point it will stop it\'s current path, recalculate a path to the treasure that the map leads to and will continue, disregarding additional maps it passes, until the treasure is found. Upon finding the treasure, a new path will be calculated from the current position to the originally selected final position, where the process will repeat itself until the final destination is reached.'
      ],
      picturePath: 'assets/images/projects/project-1.png',
      pictureLink: 'https://sturtevant.tech/assets/images/projects/project-1.png',
      projectLink: 'https://github.com/GabrielSturtevant/JavaPathFindingExample'
    },
  ],
  jobs: [
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
