import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent {
projects: Array<Project> = [
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
    // pictureLink: 'https://gabrielsturtevant.com/assets/images/projects/project-featured.png',
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
    // pictureLink: 'https://gabrielsturtevant.com/assets/images/projects/project-1.png',
    projectLink: 'https://github.com/GabrielSturtevant/JavaPathFindingExample'
  },
];
}

export interface Project {
  title: string;
  summary?: string;
  description: Array<string>;
  picturePath?: string;
  pictureLink?: string;
  projectLink?: string;

}
