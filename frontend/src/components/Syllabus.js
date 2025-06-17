import React, { useEffect, useState } from "react";
import StackGrid from "react-stack-grid";
import mapper from "../commons/mapper";
import AnimatedTileBackground from "./AnimatedTileBackground";
import algo from "../assets/algo.jpg";
import aws_serverless from "../assets/aws_serverless.jpg";
import aws from "../assets/aws.webp";
import backend from "../assets/backend-development.jpg";
import data_structures from "../assets/data_structures.jpg";
import dbms from "../assets/dbms.jpg";
import devops from "../assets/devops.jpg";
import cloud_computing from '../assets/cloud_computing.jpg'
import frontend from "../assets/frontend-development.png";
import networking from "../assets/networks.webp";
import os from "../assets/os.png";
import soft_skills from "../assets/soft_skills.jpg";
import software_engineering from "../assets/software_eng.jpg";
import sys_design from "../assets/sys_design.png";
import probability from "../assets/prob_stats.jpg";
import linear_algebra from "../assets/algebra.jpg";
import calculus from "../assets/calculus.jpg";
import programming from "../assets/python.jpg";
import warehouse from "../assets/warehouse.webp";
import machine_learning from "../assets/ml.jpg";
import artificial_intelligence from "../assets/ai.jpg";
import coa from '../assets/coa.jpeg';
import dl from '../assets/dl.png';
import dm from '../assets/dm.jpg';
import info_cyber_sec from '../assets/it_and_cyber_sec.jpeg';

//import web_tech from "../assets/web_tech.avif";
import web_tech from "../assets/web_tech.jpg";
import Footer from "./Footer";

const syllabus = mapper.Contents;
// const syllabus = {
//     "Full-Stack Developer Course": {
//         "Frontend Development": {
//             "HTML, CSS, and JavaScript Basics": {
//                 "HTML Basics": {
//                     "Structure of an HTML Document": true,
//                     "Semantic HTML Elements": true,
//                     "Forms and Input Types": true,
//                     "HTML5 Features (Canvas, Audio, Video)": true
//                 },
//                 "CSS Basics": {
//                     "Selectors and Specificity": true,
//                     "Box Model": true,
//                     "Positioning and Layout": {
//                         "Flexbox": true,
//                         "Grid": true
//                     },
//                     "Media Queries and Responsive Design": true
//                 },
//                 "JavaScript Basics": {
//                     "Data Types and Variables": true,
//                     "Functions and Scope": true,
//                     "DOM Manipulation": true,
//                     "Events and Event Handling": true,
//                     "Promises and Async/Await": true
//                 }
//             },
//             "Advanced JavaScript (ES6+)": {
//                 "Arrow Functions": true,
//                 "Destructuring and Spread Operators": true,
//                 "Modules and Imports/Exports": true,
//                 "Classes and Inheritance": true,
//                 "Closures and Lexical Scope": true,
//                 "Async Iterators and Generators": true
//             },
//             "Frameworks: React": {
//                 "Introduction to React": {
//                     "What is React?": true,
//                     "JSX and Virtual DOM": true,
//                     "Creating React Components": true
//                 },
//                 "React Hooks": {
//                     "useState and useEffect": true,
//                     "useContext and Context API": true,
//                     "useReducer for State Management": true,
//                     "Custom Hooks": true
//                 },
//                 "React Routing": {
//                     "React Router Basics": true,
//                     "Dynamic Routing": true,
//                     "Protected Routes": true
//                 },
//                 "React Performance Optimization": {
//                     "Memoization with React.memo and useMemo": true,
//                     "Code Splitting with React.lazy and Suspense": true,
//                     "Avoiding Re-renders": true
//                 },
//                 "React Ecosystem": {
//                     "State Management Libraries": {
//                         "Redux": true,
//                         "MobX": true,
//                         "Zustand": true
//                     },
//                     "Styling Libraries": {
//                         "Styled Components": true,
//                         "CSS Modules": true,
//                         "Tailwind CSS": true
//                     },
//                     "Form Handling Libraries": {
//                         "Formik": true,
//                         "React Hook Form": true
//                     }
//                 }
//             },
//             "Responsive Design and CSS Frameworks (React Focused)": {
//                 "CSS Frameworks": {
//                     "Bootstrap": true,
//                     "Tailwind CSS": true,
//                     "Material-UI": true
//                 },
//                 "Responsive Design": {
//                     "Media Queries with Styled Components": true,
//                     "Responsive Typography and Grids": true
//                 }
//             },
//             "State Management": {
//                 "React Context API": true,
//                 "Redux Basics": {
//                     "Actions, Reducers, and Store": true,
//                     "Middleware (Redux Thunk, Redux Saga)": true
//                 },
//                 "React Query (Server State Management)": true
//             },
//             "Testing Tools": {
//                 "Unit Testing with Jest": true,
//                 "Component Testing with React Testing Library": true,
//                 "End-to-End Testing with Cypress": true
//             },
//             "Performance Optimization Techniques": {
//                 "Lazy Loading Components": true,
//                 "Memoization": true,
//                 "Tree Shaking and Code Splitting": true,
//                 "Analyzing Bundle Size with Webpack Analyzer": true
//             },
//             "Accessibility and SEO": {
//                 "ARIA Roles and Labels": true,
//                 "Keyboard Navigation": true,
//                 "Meta Tags and Open Graph Protocol": true,
//                 "Server-Side Rendering (Next.js)": true,
//                 "Core Web Vitals Optimization": true
//             },
//             "Microfrontend": {
//                 "Introduction to Microfrontends": {
//                     "What are Microfrontends?": true,
//                     "Benefits and Use Cases": true,
//                     "Challenges in Microfrontend Architecture": true
//                 },
//                 "Microfrontend Design Approaches": {
//                     "Horizontal Split": true,
//                     "Vertical Split": true,
//                     "Component-level Integration": true
//                 },
//                 "Microfrontend Frameworks and Tools": {
//                     "Webpack Module Federation": true,
//                     "Single-SPA": true,
//                     "Bit.dev": true
//                 },
//                 "Building Microfrontend Applications": {
//                     "Setting Up Module Federation with Webpack": true,
//                     "Sharing Dependencies Between Microfrontends": true,
//                     "Handling Routing in Microfrontend Applications": true,
//                     "Inter-Microfrontend Communication": true
//                 },
//                 "Deploying Microfrontends": {
//                     "Independent Deployment Strategies": true,
//                     "Versioning and Backward Compatibility": true,
//                     "Using CI/CD Pipelines for Microfrontend Deployment": true
//                 }
//             }
//         },
//         "Backend Development": {
//             "Introduction to Backend Development": {
//                 "What is Backend Development?": true,
//                 "Role of the Backend in a Full-Stack Application": true,
//                 "Overview of Backend Technologies and Tools": true
//             },
//             "Spring, Node.js, and Express.js": {
//                 "Spring Framework": {
//                     "Introduction to Spring": true,
//                     "Spring Core (Dependency Injection)": true,
//                     "Spring Boot for Rapid Development": true,
//                     "Spring MVC (Model-View-Controller)": true,
//                     "Building RESTful APIs with Spring Boot": true,
//                     "Spring Security for Authentication and Authorization": true
//                 },
//                 "Node.js": {
//                     "Introduction to Node.js": true,
//                     "Node.js Architecture": true,
//                     "Asynchronous Programming with Node.js": true,
//                     "Event Loop and Non-blocking I/O": true,
//                     "File System and Streams in Node.js": true
//                 },
//                 "Express.js": {
//                     "Introduction to Express.js": true,
//                     "Routing with Express": true,
//                     "Middleware Functions": true,
//                     "Building RESTful APIs with Express": true,
//                     "Error Handling in Express": true
//                 }
//             },
//             "RESTful APIs and GraphQL": {
//                 "Introduction to RESTful APIs": true,
//                 "HTTP Methods and Status Codes": true,
//                 "API Design Best Practices": true,
//                 "Introduction to GraphQL": true,
//                 "Query, Mutation, and Subscription in GraphQL": true,
//                 "Integrating GraphQL with Node.js or Spring Boot": true,
//                 "Versioning and Documentation (Swagger, Postman)": true
//             },
//             "Authentication and Authorization": {
//                 "Overview of Authentication and Authorization": true,
//                 "Implementing JWT (JSON Web Token)": true,
//                 "OAuth 2.0 and OpenID Connect": true,
//                 "Role-Based Access Control (RBAC)": true,
//                 "Session Management and Cookies": true,
//                 "Social Logins with OAuth (Google, Facebook, GitHub)": true
//             },
//             "Database Integration (SQL and NoSQL)": {
//                 "Introduction to SQL Databases": {
//                     "Relational Database Concepts": true,
//                     "Basic CRUD Operations with SQL": true,
//                     "Joins, Indexing, and Optimization": true,
//                     "Transactions and ACID Properties": true
//                 },
//                 "NoSQL Databases": {
//                     "Introduction to NoSQL": true,
//                     "Document-based Databases (MongoDB)": true,
//                     "Key-Value Stores (Redis)": true,
//                     "Differences Between SQL and NoSQL": true
//                 },
//                 "Database Integration with Backend": {
//                     "Connecting to SQL Databases with JDBC or Sequelize": true,
//                     "Integrating NoSQL Databases with Mongoose": true,
//                     "Database Migrations and Schema Management": true
//                 }
//             },
//             "Object-Relational Mapping (ORM)": {
//                 "Introduction to ORM": true,
//                 "Hibernate Basics": true,
//                 "Sequelize Basics for Node.js": true,
//                 "Mongoose Basics for MongoDB": true,
//                 "Using ORMs for CRUD Operations": true,
//                 "Handling Relationships in ORMs (One-to-One, One-to-Many, Many-to-Many)": true
//             },
//             "Microservices Architecture": {
//                 "Introduction to Microservices": true,
//                 "Monolithic vs Microservices Architecture": true,
//                 "Service Discovery with Eureka": true,
//                 "API Gateway (Zuul, Kong)": true,
//                 "Communication Between Microservices (REST, gRPC, Event-Driven)": true,
//                 "Database Strategies for Microservices (Shared vs Independent)": true,
//                 "Deploying Microservices with Docker and Kubernetes": true
//             },
//             "Error Handling and Logging": {
//                 "Types of Errors in Backend Applications": true,
//                 "Error Handling Strategies": {
//                     "Try-Catch Blocks": true,
//                     "Global Error Handling": true,
//                     "Validation Errors": true
//                 },
//                 "Logging Tools and Practices": {
//                     "Introduction to Logging": true,
//                     "Using Winston for Logging in Node.js": true,
//                     "Using Logback for Logging in Spring Boot": true,
//                     "Centralized Logging with ELK Stack": true,
//                     "Monitoring Logs with AWS CloudWatch or Grafana": true
//                 }
//             }
//         },
//         "AWS Serverless": {
//             "Introduction to Serverless Computing": {
//                 "What is Serverless?": true,
//                 "Benefits of Serverless Architecture": true,
//                 "Overview of AWS Serverless Services": true
//             },
//             "AWS Lambda": {
//                 "Introduction to AWS Lambda": true,
//                 "Creating and Deploying Lambda Functions": true,
//                 "Event-Driven Architecture with Lambda": true,
//                 "Monitoring and Debugging Lambda Functions": true,
//                 "Best Practices for AWS Lambda": true
//             },
//             "API Gateway": {
//                 "Introduction to Amazon API Gateway": true,
//                 "Creating and Managing REST APIs": true,
//                 "Integrating API Gateway with AWS Lambda": true,
//                 "Authentication and Authorization with API Gateway": true,
//                 "CORS and Rate Limiting": true
//             },
//             "AWS DynamoDB": {
//                 "Introduction to DynamoDB": true,
//                 "Creating and Managing Tables": true,
//                 "Data Modeling with DynamoDB": true,
//                 "DynamoDB Streams": true,
//                 "Best Practices for DynamoDB Performance": true
//             },
//             "Serverless Frameworks": {
//                 "Introduction to Serverless Framework": true,
//                 "Deploying Applications with Serverless Framework": true,
//                 "Comparison with SAM (Serverless Application Model)": true
//             },
//             "Event Sources": {
//                 "AWS S3 as Event Source": true,
//                 "DynamoDB Streams as Event Source": true,
//                 "Amazon SNS and SQS Integration": true,
//                 "AWS EventBridge": true
//             },
//             "Serverless Monitoring and Security": {
//                 "Monitoring with AWS CloudWatch": true,
//                 "Setting Up Alarms and Logs": true,
//                 "Security Best Practices for Serverless Applications": true,
//                 "IAM Role Management for Serverless": true
//             },
//             "CI/CD for Serverless Applications": {
//                 "Introduction to AWS CodePipeline": true,
//                 "Building CI/CD Pipelines for Serverless": true,
//                 "Testing Serverless Applications": true,
//                 "Deploying Serverless Applications with Automation": true
//             },
//             "Additional Serverless Services": {
//                 "AWS AppSync for GraphQL APIs": true,
//                 "AWS Step Functions for Orchestration": true,
//                 "AWS Cognito for User Management": true,
//                 "AWS SAM CLI for Deployment": true
//             },
//             "Case Studies and Hands-On": {
//                 "Building a Serverless Web Application": true,
//                 "Serverless Data Processing Pipeline": true,
//                 "Serverless Real-Time Applications with WebSockets": true,
//                 "Serverless Chat Application": true
//             }
//         },
//         "Database Management": {
//             "Introduction to Databases": {
//                 "What is a Database?": true,
//                 "Types of Databases (Relational, NoSQL, Graph, etc.)": true,
//                 "Database Management Systems (DBMS)": true,
//                 "SQL vs NoSQL Databases": true
//             },
//             "Relational Databases (PostgreSQL, MySQL)": {
//                 "Introduction to Relational Databases": true,
//                 "Relational Algebra and Database Theory": true,
//                 "SQL Basics": {
//                     "Creating and Managing Tables": true,
//                     "CRUD Operations (INSERT, SELECT, UPDATE, DELETE)": true,
//                     "Joins (Inner, Outer, Left, Right)": true,
//                     "Aggregate Functions (SUM, AVG, COUNT)": true
//                 },
//                 "Advanced SQL": {
//                     "Subqueries and Nested Queries": true,
//                     "Views, Triggers, and Stored Procedures": true,
//                     "Transactions and ACID Properties": true,
//                     "Error Handling in SQL Queries": true
//                 },
//                 "PostgreSQL Features": {
//                     "Data Types and Table Constraints": true,
//                     "Using PostgreSQL Extensions (PostGIS, etc.)": true,
//                     "Indexing in PostgreSQL": true,
//                     "Query Performance Tuning in PostgreSQL": true
//                 },
//                 "MySQL Features": {
//                     "Data Types and Constraints": true,
//                     "Replication and Clustering in MySQL": true,
//                     "Using MySQL Workbench": true,
//                     "Query Optimization in MySQL": true
//                 }
//             },
//             "NoSQL Databases (MongoDB, DynamoDB)": {
//                 "Introduction to NoSQL Databases": true,
//                 "Key-Value Stores (Redis, DynamoDB)": true,
//                 "Document Stores (MongoDB)": {
//                     "Understanding JSON Documents": true,
//                     "CRUD Operations in MongoDB": true,
//                     "Indexes in MongoDB": true,
//                     "Aggregation Framework": true
//                 },
//                 "DynamoDB Features": {
//                     "Creating Tables and Partition Keys": true,
//                     "DynamoDB Streams": true,
//                     "Global and Local Secondary Indexes": true,
//                     "Data Modeling in DynamoDB": true
//                 },
//                 "Comparing NoSQL to SQL": {
//                     "Use Cases for NoSQL": true,
//                     "Scaling in NoSQL Databases": true
//                 }
//             },
//             "Database Design and Normalization": {
//                 "Introduction to Database Design": true,
//                 "Entity-Relationship (ER) Modeling": true,
//                 "Normalization": {
//                     "First Normal Form (1NF)": true,
//                     "Second Normal Form (2NF)": true,
//                     "Third Normal Form (3NF)": true,
//                     "Boyce-Codd Normal Form (BCNF)": true
//                 },
//                 "Denormalization": true,
//                 "Database Schema Design Best Practices": true
//             },
//             "Indexing and Query Optimization": {
//                 "Introduction to Indexing": {
//                     "Clustered vs Non-Clustered Indexes": true,
//                     "Hash Indexes and B-Tree Indexes": true,
//                     "Index Maintenance and Costs": true
//                 },
//                 "Query Optimization": {
//                     "Using Explain Plans": true,
//                     "Query Caching": true,
//                     "Optimizing Joins and Subqueries": true,
//                     "Partitioning and Sharding": true
//                 },
//                 "Performance Tuning Tools": {
//                     "PostgreSQL Query Analyzer": true,
//                     "MySQL Query Profiler": true,
//                     "MongoDB Profiler": true
//                 }
//             },
//             "Backup and Recovery": {
//                 "Backup Strategies": true,
//                 "Point-in-Time Recovery (PITR)": true,
//                 "Disaster Recovery Planning": true,
//                 "Backup Tools (pg_dump, mysqldump, MongoDump)": true
//             },
//             "Distributed Databases and Scalability": {
//                 "Introduction to Distributed Databases": true,
//                 "Replication (Master-Slave, Master-Master)": true,
//                 "Sharding and Partitioning Strategies": true,
//                 "Eventual Consistency vs Strong Consistency": true,
//                 "CAP Theorem": true
//             },
//             "Hands-On Projects": {
//                 "Designing a Library Management System": true,
//                 "Building an E-Commerce Database Schema": true,
//                 "Implementing Real-Time Analytics with MongoDB": true,
//                 "Building a Scalable DynamoDB Application": true
//             }
//         },
//         "DevOps and Deployment": {
//             "Introduction to DevOps": {
//                 "What is DevOps?": true,
//                 "DevOps Lifecycle": true,
//                 "Benefits of DevOps": true,
//                 "DevOps Culture and Practices": true
//             },
//             "Version Control (Git and GitHub)": {
//                 "Introduction to Version Control Systems": true,
//                 "Git Basics": {
//                     "Initializing Repositories": true,
//                     "Staging and Committing Changes": true,
//                     "Branching and Merging": true,
//                     "Resolving Merge Conflicts": true
//                 },
//                 "Advanced Git Features": {
//                     "Interactive Rebase": true,
//                     "Cherry Picking Commits": true,
//                     "Git Stash": true,
//                     "Tagging and Release Management": true
//                 },
//                 "GitHub Workflow": {
//                     "Using Pull Requests": true,
//                     "Code Reviews and Collaboration": true,
//                     "Setting Up GitHub Actions for CI/CD": true,
//                     "Using GitHub Issues and Projects": true
//                 }
//             },
//             "Continuous Integration/Continuous Deployment (CI/CD)": {
//                 "Introduction to CI/CD": true,
//                 "Setting Up CI Pipelines": {
//                     "Using Jenkins for CI/CD": true,
//                     "GitHub Actions for CI": true,
//                     "GitLab CI/CD": true
//                 },
//                 "Continuous Deployment Practices": {
//                     "Automating Tests in Pipelines": true,
//                     "Blue-Green Deployment": true,
//                     "Canary Deployment": true,
//                     "Rolling Updates": true
//                 },
//                 "Monitoring CI/CD Pipelines": true,
//                 "Tools for CI/CD": {
//                     "Jenkins": true,
//                     "GitHub Actions": true,
//                     "CircleCI": true,
//                     "GitLab CI/CD": true
//                 }
//             },
//             "Containerization (Docker)": {
//                 "Introduction to Docker": true,
//                 "Building Docker Images": true,
//                 "Docker Containers": {
//                     "Starting and Stopping Containers": true,
//                     "Inspecting and Managing Containers": true,
//                     "Networking in Docker": true,
//                     "Volumes and Data Persistence": true
//                 },
//                 "Docker Compose": {
//                     "Introduction to Docker Compose": true,
//                     "Writing docker-compose.yml": true,
//                     "Managing Multi-Container Applications": true
//                 },
//                 "Optimizing Docker Images": {
//                     "Using Multi-Stage Builds": true,
//                     "Minimizing Image Sizes": true
//                 }
//             },
//             "Orchestration (Kubernetes)": {
//                 "Introduction to Kubernetes": true,
//                 "Kubernetes Architecture": {
//                     "Master and Worker Nodes": true,
//                     "Pods and Deployments": true,
//                     "Services and Networking": true
//                 },
//                 "Kubernetes Basics": {
//                     "Setting Up a Local Cluster (Minikube)": true,
//                     "Deploying Applications to Kubernetes": true,
//                     "Scaling Applications": true
//                 },
//                 "Advanced Kubernetes": {
//                     "Helm Charts": true,
//                     "Kubernetes Secrets and ConfigMaps": true,
//                     "Auto-scaling with Horizontal Pod Autoscaler": true,
//                     "Monitoring Kubernetes with Prometheus and Grafana": true
//                 },
//                 "Kubernetes in Production": {
//                     "Rolling Updates and Rollbacks": true,
//                     "Cluster Monitoring and Logging": true,
//                     "Security Best Practices for Kubernetes": true
//                 }
//             },
//             "Cloud Platforms (AWS, Azure, GCP)": {
//                 "Introduction to Cloud Platforms": true,
//                 "AWS for DevOps": {
//                     "AWS Elastic Beanstalk": true,
//                     "AWS ECS and EKS": true,
//                     "AWS CodePipeline and CodeBuild": true,
//                     "S3 for Storage and Hosting": true,
//                     "CloudFormation for Infrastructure as Code": true
//                 },
//                 "Azure for DevOps": {
//                     "Azure DevOps Pipelines": true,
//                     "Azure Kubernetes Service (AKS)": true,
//                     "Azure Resource Manager (ARM) Templates": true
//                 },
//                 "GCP for DevOps": {
//                     "Google Kubernetes Engine (GKE)": true,
//                     "Cloud Build for CI/CD": true,
//                     "Cloud Functions for Serverless Deployments": true
//                 }
//             },
//             "Monitoring and Logging Tools (Prometheus, ELK Stack)": {
//                 "Introduction to Monitoring and Logging": true,
//                 "Using Prometheus": {
//                     "Setting Up Prometheus": true,
//                     "Writing Prometheus Queries (PromQL)": true,
//                     "Visualizing Metrics with Grafana": true
//                 },
//                 "Using the ELK Stack": {
//                     "Setting Up Elasticsearch, Logstash, and Kibana": true,
//                     "Indexing and Querying Logs with Elasticsearch": true,
//                     "Building Dashboards with Kibana": true
//                 },
//                 "Integrating Monitoring with CI/CD Pipelines": true,
//                 "Alerting and Notifications": true
//             },
//             "Infrastructure as Code (IaC)": {
//                 "Introduction to IaC": true,
//                 "Using Terraform for Infrastructure Management": true,
//                 "AWS CloudFormation": true,
//                 "Ansible for Configuration Management": true,
//                 "Best Practices for IaC": true
//             },
//             "Hands-On Projects": {
//                 "Setting Up a CI/CD Pipeline with Jenkins": true,
//                 "Building and Deploying a Dockerized Application": true,
//                 "Deploying a Scalable Application to Kubernetes": true,
//                 "Monitoring Applications with Prometheus and Grafana": true,
//                 "Using Terraform to Manage Cloud Infrastructure": true
//             }
//         },
//         "Software Engineering": {
//             "Introduction to Software Engineering": {
//                 "What is Software Engineering?": true,
//                 "Software Development Life Cycle (SDLC)": {
//                     "Phases of SDLC": true,
//                     "Waterfall Model": true,
//                     "Iterative and Incremental Models": true,
//                     "Agile Methodology": true
//                 },
//                 "Importance of Software Engineering": true,
//                 "Software Engineering Ethics": true
//             },
//             "Requirements Engineering": {
//                 "Understanding Requirements": {
//                     "Functional and Non-Functional Requirements": true,
//                     "User Stories and Use Cases": true
//                 },
//                 "Requirements Gathering Techniques": {
//                     "Interviews and Surveys": true,
//                     "Workshops and Brainstorming": true,
//                     "Prototyping": true
//                 },
//                 "Requirements Documentation": {
//                     "SRS (Software Requirements Specification)": true,
//                     "Tools for Requirements Documentation (Jira, Confluence)": true
//                 },
//                 "Requirements Validation": true
//             },
//             "Software Design": {
//                 "Principles of Software Design": {
//                     "SOLID Principles": true,
//                     "Separation of Concerns": true,
//                     "Design Patterns (Creational, Structural, Behavioral)": true
//                 },
//                 "Architectural Design": {
//                     "Monolithic vs Microservices Architecture": true,
//                     "Layered Architecture": true,
//                     "Client-Server Architecture": true
//                 },
//                 "UI/UX Design Principles": {
//                     "Wireframing and Prototyping": true,
//                     "Human-Computer Interaction Basics": true,
//                     "Accessibility in Design": true
//                 },
//                 "Design Documentation": true
//             },
//             "Software Development Methodologies": {
//                 "Traditional Models": {
//                     "Waterfall Model": true,
//                     "V-Model": true
//                 },
//                 "Agile Models": {
//                     "Scrum": {
//                         "Roles in Scrum": true,
//                         "Artifacts in Scrum": true,
//                         "Events in Scrum": true
//                     },
//                     "Kanban": true,
//                     "Extreme Programming (XP)": true
//                 },
//                 "Hybrid Models (Agile-Waterfall)": true
//             },
//             "Software Testing and Quality Assurance": {
//                 "Testing Fundamentals": {
//                     "What is Software Testing?": true,
//                     "Levels of Testing (Unit, Integration, System, Acceptance)": true,
//                     "Types of Testing (Black Box, White Box, Grey Box)": true
//                 },
//                 "Test-Driven Development (TDD)": true,
//                 "Automated Testing": {
//                     "Tools (Selenium, JUnit, TestNG)": true,
//                     "Continuous Testing in CI/CD Pipelines": true
//                 },
//                 "Quality Assurance Practices": {
//                     "Defect Management": true,
//                     "Peer Reviews and Code Inspections": true,
//                     "Quality Metrics and KPIs": true
//                 }
//             },
//             "Software Maintenance": {
//                 "Types of Maintenance": {
//                     "Corrective Maintenance": true,
//                     "Adaptive Maintenance": true,
//                     "Perfective Maintenance": true,
//                     "Preventive Maintenance": true
//                 },
//                 "Version Control and Configuration Management": {
//                     "Version Control Tools (Git, SVN)": true,
//                     "Release Management": true,
//                     "Continuous Integration and Deployment": true
//                 },
//                 "Refactoring and Reengineering": true
//             },
//             "Software Project Management": {
//                 "Project Planning": {
//                     "Defining Scope and Objectives": true,
//                     "Work Breakdown Structure (WBS)": true,
//                     "Estimating Costs and Time": true
//                 },
//                 "Risk Management": {
//                     "Identifying Risks": true,
//                     "Mitigation Strategies": true,
//                     "Monitoring and Controlling Risks": true
//                 },
//                 "Team Management": {
//                     "Forming and Leading Teams": true,
//                     "Conflict Resolution": true,
//                     "Motivating Team Members": true
//                 },
//                 "Project Tracking Tools": {
//                     "Gantt Charts": true,
//                     "Kanban Boards": true,
//                     "Tools (Microsoft Project, Trello, Asana)": true
//                 }
//             },
//             "Software Metrics and Measurement": {
//                 "Introduction to Metrics": true,
//                 "Process Metrics": true,
//                 "Product Metrics": true,
//                 "Project Metrics": true,
//                 "Tools for Software Metrics (SonarQube, CodeClimate)": true
//             },
//             "Emerging Trends in Software Engineering": {
//                 "DevOps and Continuous Delivery": true,
//                 "AI and Machine Learning in Software Engineering": true,
//                 "Cloud-Native Applications": true,
//                 "Low-Code and No-Code Platforms": true
//             },
//             "Case Studies and Practical Applications": {
//                 "Case Study 1: Building an E-Commerce Application": true,
//                 "Case Study 2: Developing a Scalable SaaS Product": true,
//                 "Case Study 3: Migrating a Legacy System to Microservices": true,
//                 "Case Study 4: Implementing Agile in a Large Organization": true
//             }
//         },
//         "Data Structures": {
//             "Introduction to Data Structures": {
//                 "What is a Data Structure?": true,
//                 "Importance of Data Structures in Programming": true,
//                 "Classification of Data Structures": {
//                     "Linear Data Structures": true,
//                     "Non-Linear Data Structures": true
//                 },
//                 "Complexity Analysis": {
//                     "Time Complexity": true,
//                     "Space Complexity": true,
//                     "Big-O, Big-Theta, and Big-Omega Notation": true
//                 }
//             },
//             "Array": {
//                 "Introduction to Arrays": true,
//                 "Operations on Arrays": {
//                     "Insertion and Deletion": true,
//                     "Traversal": true,
//                     "Searching and Sorting": true
//                 },
//                 "Two-Dimensional Arrays": true,
//                 "Applications of Arrays": {
//                     "Matrix Operations": true,
//                     "Dynamic Arrays": true
//                 }
//             },
//             "Linked List": {
//                 "Introduction to Linked Lists": {
//                     "Singly Linked List": true,
//                     "Doubly Linked List": true,
//                     "Circular Linked List": true
//                 },
//                 "Operations on Linked Lists": {
//                     "Insertion": true,
//                     "Deletion": true,
//                     "Reversal": true
//                 },
//                 "Applications of Linked Lists": {
//                     "Implementing Stacks and Queues": true,
//                     "Dynamic Memory Allocation": true
//                 }
//             },
//             "Stack": {
//                 "Introduction to Stack": true,
//                 "Operations on Stack": {
//                     "Push and Pop": true,
//                     "Peek/Top Operation": true
//                 },
//                 "Applications of Stack": {
//                     "Expression Evaluation (Postfix, Prefix)": true,
//                     "Backtracking (Maze Problems, Recursion)": true,
//                     "Parenthesis Matching": true
//                 }
//             },
//             "Queue": {
//                 "Introduction to Queue": true,
//                 "Types of Queues": {
//                     "Simple Queue": true,
//                     "Circular Queue": true,
//                     "Priority Queue": true,
//                     "Deque (Double-Ended Queue)": true
//                 },
//                 "Applications of Queue": {
//                     "Scheduling Algorithms": true,
//                     "Breadth-First Search (BFS)": true
//                 }
//             },
//             "Hashing": {
//                 "Introduction to Hashing": true,
//                 "Hash Functions": {
//                     "Division Method": true,
//                     "Multiplication Method": true,
//                     "Universal Hashing": true
//                 },
//                 "Collision Resolution Techniques": {
//                     "Chaining": true,
//                     "Open Addressing (Linear Probing, Quadratic Probing)": true
//                 },
//                 "Applications of Hashing": {
//                     "Hash Tables": true,
//                     "Dictionary Implementation": true
//                 }
//             },
//             "Trees": {
//                 "Introduction to Trees": {
//                     "Terminology (Root, Node, Height, Depth)": true,
//                     "Types of Trees (General Tree, Binary Tree)": true
//                 },
//                 "Binary Trees": {
//                     "Binary Search Tree (BST)": true,
//                     "Balanced Trees (AVL, Red-Black Tree)": true,
//                     "Heap (Max Heap, Min Heap)": true
//                 },
//                 "Tree Traversal Techniques": {
//                     "Inorder Traversal": true,
//                     "Preorder Traversal": true,
//                     "Postorder Traversal": true,
//                     "Level Order Traversal": true
//                 },
//                 "Applications of Trees": {
//                     "Huffman Encoding": true,
//                     "Expression Trees": true
//                 }
//             },
//             "Graphs": {
//                 "Introduction to Graphs": {
//                     "Terminology (Vertex, Edge, Degree)": true,
//                     "Representation of Graphs (Adjacency Matrix, Adjacency List)": true
//                 },
//                 "Graph Traversal Algorithms": {
//                     "Breadth-First Search (BFS)": true,
//                     "Depth-First Search (DFS)": true
//                 },
//                 "Shortest Path Algorithms": {
//                     "Dijkstra's Algorithm": true,
//                     "Bellman-Ford Algorithm": true,
//                     "Floyd-Warshall Algorithm": true
//                 },
//                 "Minimum Spanning Tree (MST)": {
//                     "Prim's Algorithm": true,
//                     "Kruskal's Algorithm": true
//                 },
//                 "Applications of Graphs": {
//                     "Social Network Analysis": true,
//                     "Network Routing": true,
//                     "Topological Sorting": true
//                 }
//             },
//             "Heap": {
//                 "Introduction to Heaps": true,
//                 "Heap Operations": {
//                     "Insertion": true,
//                     "Deletion (Heapify)": true
//                 },
//                 "Heap Applications": {
//                     "Priority Queue Implementation": true,
//                     "Heap Sort": true
//                 }
//             },
//             "Trie": {
//                 "Introduction to Trie": true,
//                 "Operations on Trie": {
//                     "Insertion": true,
//                     "Search": true,
//                     "Deletion": true
//                 },
//                 "Applications of Trie": {
//                     "Autocomplete Systems": true,
//                     "Spell Checking": true,
//                     "IP Routing (Longest Prefix Match)": true
//                 }
//             },
//             "Advanced Data Structures": {
//                 "Segment Tree": {
//                     "Introduction and Construction": true,
//                     "Range Query and Update": true
//                 },
//                 "Fenwick Tree (Binary Indexed Tree)": {
//                     "Introduction and Construction": true,
//                     "Point Update and Range Query": true
//                 },
//                 "Disjoint Set Union (Union-Find)": {
//                     "Union by Rank": true,
//                     "Path Compression": true,
//                     "Applications (Kruskal's Algorithm)": true
//                 }
//             },
//             "Case Studies and Practical Applications": {
//                 "Case Study: Designing a Search Engine with Tries": true,
//                 "Case Study: Social Network Analysis using Graphs": true,
//                 "Practical Project: Implementing a Custom Hash Table": true,
//                 "Practical Project: Scheduling System with Priority Queues": true
//             }
//         },
//         "Algorithms": {
//             "Introduction to Algorithms": {
//                 "What is an Algorithm?": true,
//                 "Characteristics of a Good Algorithm": true,
//                 "Importance of Algorithms in Problem Solving": true,
//                 "Algorithm Complexity": {
//                     "Time Complexity Analysis": true,
//                     "Space Complexity Analysis": true,
//                     "Big-O, Big-Theta, and Big-Omega Notation": true
//                 }
//             },
//             "Sorting Algorithms": {
//                 "Comparison-Based Sorting": {
//                     "Bubble Sort": {
//                         "Implementation in Java": true,
//                         "Time Complexity Analysis": true
//                     },
//                     "Selection Sort": true,
//                     "Insertion Sort": true,
//                     "Merge Sort": true,
//                     "Quick Sort": {
//                         "Pivot Selection Strategies": true,
//                         "Worst-Case and Average-Case Analysis": true
//                     },
//                     "Heap Sort": true
//                 },
//                 "Non-Comparison-Based Sorting": {
//                     "Counting Sort": true,
//                     "Radix Sort": true,
//                     "Bucket Sort": true
//                 },
//                 "Interview Applications of Sorting Algorithms": {
//                     "Sorting for Interval Problems": true,
//                     "Sorting for String Anagrams": true
//                 }
//             },
//             "Searching Algorithms": {
//                 "Linear Search": true,
//                 "Binary Search": {
//                     "Iterative and Recursive Implementations in Java": true,
//                     "Applications in Coding Interviews": true
//                 },
//                 "Ternary Search": true,
//                 "Exponential Search": true
//             },
//             "Recursion and Backtracking": {
//                 "Introduction to Recursion": {
//                     "Base Case and Recursive Case": true,
//                     "Tail Recursion": true
//                 },
//                 "Backtracking Algorithms": {
//                     "N-Queens Problem": true,
//                     "Sudoku Solver": true,
//                     "Rat in a Maze": true,
//                     "Word Search": true
//                 },
//                 "Optimization Techniques": {
//                     "Memoization with Recursion": true,
//                     "Dynamic Programming vs Recursion": true
//                 }
//             },
//             "Divide and Conquer": {
//                 "Introduction to Divide and Conquer": true,
//                 "Key Problems and Solutions": {
//                     "Merge Sort": true,
//                     "Quick Sort": true,
//                     "Binary Search": true,
//                     "Closest Pair of Points": true
//                 }
//             },
//             "Dynamic Programming (DP)": {
//                 "Introduction to DP": {
//                     "Memoization and Tabulation Techniques": true,
//                     "Overlapping Subproblems and Optimal Substructure": true
//                 },
//                 "Classic DP Problems": {
//                     "Fibonacci Sequence": true,
//                     "Longest Common Subsequence (LCS)": true,
//                     "Longest Increasing Subsequence (LIS)": true,
//                     "Knapsack Problem (0/1 Knapsack, Unbounded Knapsack)": true,
//                     "Coin Change Problem": true,
//                     "Matrix Chain Multiplication": true,
//                     "Palindromic Substrings": true
//                 },
//                 "Advanced DP Problems": {
//                     "Egg Dropping Problem": true,
//                     "Wildcard Pattern Matching": true,
//                     "Word Break Problem": true,
//                     "Shortest Path in Weighted Grid (Dijkstra with DP)": true
//                 }
//             },
//             "Greedy Algorithms": {
//                 "Introduction to Greedy Approach": true,
//                 "Classic Problems": {
//                     "Activity Selection Problem": true,
//                     "Huffman Encoding": true,
//                     "Minimum Spanning Tree": {
//                         "Kruskal's Algorithm": true,
//                         "Prim's Algorithm": true
//                     },
//                     "Fractional Knapsack": true
//                 },
//                 "Applications in Coding Interviews": {
//                     "Interval Scheduling": true,
//                     "Job Sequencing": true,
//                     "Optimal Merge Pattern": true
//                 }
//             },
//             "Graph Algorithms": {
//                 "Graph Representation": {
//                     "Adjacency Matrix": true,
//                     "Adjacency List": true
//                 },
//                 "Graph Traversal": {
//                     "Depth-First Search (DFS)": true,
//                     "Breadth-First Search (BFS)": true
//                 },
//                 "Shortest Path Algorithms": {
//                     "Dijkstra's Algorithm": true,
//                     "Bellman-Ford Algorithm": true,
//                     "Floyd-Warshall Algorithm": true
//                 },
//                 "Minimum Spanning Tree (MST)": true,
//                 "Topological Sorting": true,
//                 "Strongly Connected Components (SCC)": true,
//                 "Applications in Real-World Problems": {
//                     "Network Routing": true,
//                     "Social Network Analysis": true
//                 }
//             },
//             "String Algorithms": {
//                 "String Matching Algorithms": {
//                     "Naive Pattern Matching": true,
//                     "Knuth-Morris-Pratt (KMP)": true,
//                     "Rabin-Karp Algorithm": true
//                 },
//                 "Advanced String Problems": {
//                     "Longest Palindromic Substring": true,
//                     "Z-Algorithm for Pattern Matching": true,
//                     "Suffix Arrays and Suffix Trees": true
//                 },
//                 "Applications in Coding Interviews": {
//                     "Check for Anagrams": true,
//                     "Find Substring with Concatenation of All Words": true,
//                     "Longest Common Prefix": true
//                 }
//             },
//             "Mathematical Algorithms": {
//                 "Number Theory Basics": {
//                     "Greatest Common Divisor (GCD) using Euclid’s Algorithm": true,
//                     "Prime Factorization (Sieve of Eratosthenes)": true,
//                     "Modular Arithmetic": true
//                 },
//                 "Bit Manipulation": {
//                     "Understanding Bitwise Operators": true,
//                     "Counting Set Bits (Brian Kernighan's Algorithm)": true,
//                     "Applications in Interview Problems": {
//                         "Single Number": true,
//                         "Power of Two": true
//                     }
//                 },
//                 "Matrix Algorithms": {
//                     "Matrix Multiplication": true,
//                     "Matrix Rotation": true,
//                     "Spiral Traversal": true
//                 }
//             },
//             "Advanced Topics": {
//                 "Disjoint Set Union (Union-Find)": {
//                     "Union by Rank and Path Compression": true,
//                     "Applications in Kruskal’s Algorithm": true
//                 },
//                 "Segment Trees": {
//                     "Construction and Query": true,
//                     "Lazy Propagation": true
//                 },
//                 "Fenwick Tree (Binary Indexed Tree)": true,
//                 "Trie": {
//                     "Insert and Search Operations": true,
//                     "Applications in Autocomplete": true
//                 }
//             },
//             "Case Studies and Practical Applications": {
//                 "Case Study: Designing a Ride-Sharing System": true,
//                 "Case Study: Implementing a Payment Gateway": true,
//                 "Practical Project: Real-Time Chat Application Using Graph Algorithms": true
//             }
//         }
//         ,
//         "System Design": {
//             "Introduction to System Design": {
//                 "What is System Design?": true,
//                 "Importance of System Design in Scalable Systems": true,
//                 "Types of System Design (High-Level, Low-Level)": true,
//                 "System Design Process Overview": true
//             },
//             "Key Concepts in System Design": {
//                 "Scalability": {
//                     "Vertical Scaling vs Horizontal Scaling": true,
//                     "Stateless and Stateful Services": true
//                 },
//                 "Availability": {
//                     "High Availability": true,
//                     "Fault Tolerance": true,
//                     "Failover Mechanisms": true
//                 },
//                 "Consistency": {
//                     "CAP Theorem": true,
//                     "Eventual Consistency vs Strong Consistency": true
//                 },
//                 "Latency and Throughput": true,
//                 "Reliability and Durability": true
//             },
//             "Components of System Design": {
//                 "Load Balancers": {
//                     "Layer 4 vs Layer 7 Load Balancing": true,
//                     "Health Checks and Failover": true
//                 },
//                 "Databases": {
//                     "SQL vs NoSQL": true,
//                     "Database Sharding and Partitioning": true,
//                     "Replication (Master-Slave, Master-Master)": true,
//                     "Caching for Databases": true
//                 },
//                 "Caching": {
//                     "Introduction to Caching": true,
//                     "Cache Eviction Policies": true,
//                     "Caching Strategies (Write-Through, Write-Back, Write-Around)": true,
//                     "Tools (Redis, Memcached)": true
//                 },
//                 "Message Queues and Stream Processing": {
//                     "Introduction to Message Queues": true,
//                     "Message Brokers (RabbitMQ, Kafka)": true,
//                     "Use Cases for Message Queues": true,
//                     "Stream Processing Frameworks (Apache Kafka, Flink)": true
//                 },
//                 "API Gateway and Rate Limiting": {
//                     "What is an API Gateway?": true,
//                     "Rate Limiting Strategies": true,
//                     "Throttling Mechanisms": true
//                 },
//                 "CDN (Content Delivery Networks)": {
//                     "How CDNs Work": true,
//                     "Caching at the Edge": true,
//                     "CDN Providers (Cloudflare, Akamai)": true
//                 }
//             },
//             "Designing Scalable Systems": {
//                 "Distributed Systems": {
//                     "Characteristics of Distributed Systems": true,
//                     "Challenges in Distributed Systems": true,
//                     "Consensus Algorithms (Paxos, Raft)": true
//                 },
//                 "Microservices Architecture": {
//                     "Microservices vs Monoliths": true,
//                     "Inter-Service Communication (REST, gRPC, Message Queues)": true,
//                     "Service Discovery Mechanisms": true,
//                     "Database Per Microservice": true
//                 },
//                 "Event-Driven Architectures": {
//                     "Introduction to Event-Driven Systems": true,
//                     "Event Sourcing": true,
//                     "CQRS (Command Query Responsibility Segregation)": true
//                 }
//             },
//             "Designing Specific Systems": {
//                 "Designing a URL Shortener": {
//                     "High-Level Design": true,
//                     "Database Schema for URL Shortening": true,
//                     "Generating Unique Short URLs": true,
//                     "Handling High Traffic": true
//                 },
//                 "Designing a Messaging System": {
//                     "Real-Time Messaging Architecture": true,
//                     "Ensuring Message Delivery": true,
//                     "Handling Offline Users": true
//                 },
//                 "Designing an E-Commerce System": {
//                     "Product Catalog Service": true,
//                     "Order Management System": true,
//                     "Inventory Management System": true,
//                     "Payment Gateway Integration": true
//                 },
//                 "Designing a Social Media Feed": {
//                     "Newsfeed Generation": true,
//                     "Content Ranking Algorithms": true,
//                     "Handling User Interactions": true
//                 },
//                 "Designing a Video Streaming Platform": {
//                     "Video Encoding and Storage": true,
//                     "Streaming Protocols (HLS, DASH)": true,
//                     "Content Distribution with CDNs": true
//                 }
//             },
//             "Performance Optimization": {
//                 "Database Optimization": {
//                     "Indexing Strategies": true,
//                     "Query Optimization": true
//                 },
//                 "Application Optimization": {
//                     "Reducing Latency": true,
//                     "Horizontal Scaling of Services": true,
//                     "Load Testing Tools (JMeter, Locust)": true
//                 },
//                 "Monitoring and Debugging": {
//                     "Application Monitoring Tools (Datadog, New Relic)": true,
//                     "Distributed Tracing": true,
//                     "Debugging Distributed Systems": true
//                 }
//             },
//             "Security and Compliance": {
//                 "Data Security": {
//                     "Encryption in Transit and at Rest": true,
//                     "Securing APIs": true
//                 },
//                 "Authentication and Authorization": {
//                     "OAuth2 and OpenID Connect": true,
//                     "Role-Based Access Control (RBAC)": true,
//                     "Token-Based Authentication (JWT)": true
//                 },
//                 "Compliance Standards": {
//                     "GDPR": true,
//                     "PCI DSS for Payment Systems": true,
//                     "HIPAA for Healthcare Applications": true
//                 }
//             },
//             "Emerging Trends in System Design": {
//                 "Serverless Architecture": {
//                     "What is Serverless?": true,
//                     "Use Cases for Serverless": true,
//                     "Serverless Frameworks (AWS Lambda, Google Cloud Functions)": true
//                 },
//                 "AI-Driven System Design": {
//                     "AI for Load Prediction": true,
//                     "Automated Scaling with AI": true
//                 },
//                 "Blockchain Systems": {
//                     "Introduction to Blockchain Technology": true,
//                     "Consensus Mechanisms in Blockchain": true,
//                     "Applications of Blockchain in Distributed Systems": true
//                 }
//             },
//             "Case Studies and Practical Projects": {
//                 "Case Study: Designing a Scalable Food Delivery System": true,
//                 "Case Study: Building a High-Performance Ad Platform": true,
//                 "Practical Project: Designing a Scalable Online Learning Platform": true
//             }
//         },
//         "Operating System": {
//             "Introduction to Operating Systems": {
//                 "What is an Operating System?": true,
//                 "Functions of an Operating System": true,
//                 "Types of Operating Systems (Batch, Time-Sharing, Distributed, etc.)": true,
//                 "Examples of Popular Operating Systems (Linux, Windows, macOS)": true
//             },
//             "System Structures": {
//                 "Operating System Services": true,
//                 "System Calls": {
//                     "Types of System Calls": true,
//                     "Examples in Linux and Windows": true
//                 },
//                 "System Programs": true,
//                 "Operating System Architectures": {
//                     "Monolithic Kernel": true,
//                     "Microkernel": true,
//                     "Hybrid Systems": true
//                 }
//             },
//             "Processes and Threads": {
//                 "Processes": {
//                     "What is a Process?": true,
//                     "Process States and State Transitions": true,
//                     "Process Control Block (PCB)": true,
//                     "Context Switching": true
//                 },
//                 "Threads": {
//                     "What is a Thread?": true,
//                     "User-Level vs Kernel-Level Threads": true,
//                     "Multithreading Models": true
//                 },
//                 "Inter-Process Communication (IPC)": {
//                     "Shared Memory": true,
//                     "Message Passing": true,
//                     "Pipes and Sockets": true
//                 }
//             },
//             "Process Scheduling": {
//                 "Introduction to Scheduling": true,
//                 "Types of Scheduling Algorithms": {
//                     "First-Come-First-Serve (FCFS)": true,
//                     "Shortest Job Next (SJN)": true,
//                     "Priority Scheduling": true,
//                     "Round Robin (RR)": true,
//                     "Multilevel Queue Scheduling": true,
//                     "Multilevel Feedback Queue Scheduling": true
//                 },
//                 "Scheduling Metrics": {
//                     "CPU Utilization": true,
//                     "Throughput": true,
//                     "Turnaround Time": true,
//                     "Waiting Time": true,
//                     "Response Time": true
//                 }
//             },
//             "Memory Management": {
//                 "Memory Hierarchy": {
//                     "Registers": true,
//                     "Cache": true,
//                     "Main Memory": true,
//                     "Virtual Memory": true
//                 },
//                 "Memory Allocation": {
//                     "Contiguous Allocation": true,
//                     "Paging": true,
//                     "Segmentation": true,
//                     "Paging vs Segmentation": true
//                 },
//                 "Virtual Memory": {
//                     "Demand Paging": true,
//                     "Page Replacement Algorithms": {
//                         "FIFO": true,
//                         "Optimal": true,
//                         "LRU": true,
//                         "Clock": true
//                     },
//                     "Thrashing": true
//                 }
//             },
//             "File Systems": {
//                 "File Concepts": {
//                     "File Attributes": true,
//                     "File Operations": true,
//                     "File Types": true
//                 },
//                 "File System Implementation": {
//                     "Directory Structures": true,
//                     "Allocation Methods": {
//                         "Contiguous Allocation": true,
//                         "Linked Allocation": true,
//                         "Indexed Allocation": true
//                     },
//                     "Free-Space Management": true
//                 },
//                 "File System Examples": {
//                     "FAT32": true,
//                     "NTFS": true,
//                     "Ext4": true
//                 }
//             },
//             "Input/Output Management": {
//                 "I/O Hardware": {
//                     "Controllers and Devices": true,
//                     "Device Drivers": true
//                 },
//                 "I/O Techniques": {
//                     "Polling": true,
//                     "Interrupts": true,
//                     "Direct Memory Access (DMA)": true
//                 },
//                 "Disk Scheduling Algorithms": {
//                     "First-Come-First-Serve (FCFS)": true,
//                     "Shortest Seek Time First (SSTF)": true,
//                     "SCAN": true,
//                     "C-SCAN": true,
//                     "LOOK and C-LOOK": true
//                 }
//             },
//             "Deadlocks": {
//                 "What is a Deadlock?": true,
//                 "Conditions for Deadlock": true,
//                 "Deadlock Prevention": true,
//                 "Deadlock Avoidance (Banker's Algorithm)": true,
//                 "Deadlock Detection and Recovery": true
//             },
//             "Security and Protection": {
//                 "Goals of Protection": true,
//                 "Access Control Mechanisms": true,
//                 "Security Threats and Attacks": true,
//                 "User Authentication Methods": true,
//                 "Encryption Techniques": true
//             },
//             "Virtualization": {
//                 "Introduction to Virtualization": true,
//                 "Types of Virtualization (Full, Para, Hardware)": true,
//                 "Hypervisors (Type 1 and Type 2)": true,
//                 "Containers and OS-Level Virtualization (Docker)": true
//             },
//             "Distributed Systems": {
//                 "Introduction to Distributed Systems": true,
//                 "Advantages and Challenges of Distributed Systems": true,
//                 "Distributed File Systems": {
//                     "HDFS (Hadoop Distributed File System)": true,
//                     "NFS (Network File System)": true
//                 },
//                 "Distributed Synchronization": {
//                     "Lamport Timestamps": true,
//                     "Election Algorithms (Bully, Ring)": true
//                 }
//             },
//             "Real-Time Operating Systems": {
//                 "Introduction to RTOS": true,
//                 "Hard vs Soft Real-Time Systems": true,
//                 "Task Scheduling in RTOS": true,
//                 "Examples of RTOS (VxWorks, FreeRTOS)": true
//             },
//             "Case Studies and Hands-On Projects": {
//                 "Case Study: Analyzing Linux Kernel Architecture": true,
//                 "Case Study: Comparing Windows and macOS File Systems": true,
//                 "Practical Project: Building a Simple Shell Program": true,
//                 "Practical Project: Simulating a Process Scheduler": true
//             }
//         },
//         "Computer Networks": {
//             "Introduction to Computer Networks": {
//                 "What is a Computer Network?": true,
//                 "Goals of Networking": true,
//                 "Types of Networks": {
//                     "LAN (Local Area Network)": true,
//                     "WAN (Wide Area Network)": true,
//                     "MAN (Metropolitan Area Network)": true,
//                     "PAN (Personal Area Network)": true
//                 },
//                 "Network Topologies": {
//                     "Bus": true,
//                     "Star": true,
//                     "Ring": true,
//                     "Mesh": true,
//                     "Hybrid": true
//                 },
//                 "Applications of Networking": true
//             },
//             "Network Models": {
//                 "OSI Model": {
//                     "Introduction to OSI Layers": true,
//                     "Functions of Each Layer": true,
//                     "Protocols in OSI Model": true
//                 },
//                 "TCP/IP Model": {
//                     "Comparison with OSI Model": true,
//                     "Layers in TCP/IP Model": true,
//                     "Common Protocols in TCP/IP": true
//                 }
//             },
//             "Physical Layer": {
//                 "Introduction to Physical Layer": true,
//                 "Transmission Media": {
//                     "Guided Media (Twisted Pair, Coaxial, Fiber Optics)": true,
//                     "Unguided Media (Radio Waves, Microwaves, Infrared)": true
//                 },
//                 "Data Encoding Techniques": {
//                     "Digital-to-Digital Encoding": true,
//                     "Analog-to-Digital Conversion": true,
//                     "Digital-to-Analog Conversion": true
//                 },
//                 "Multiplexing and Demultiplexing": {
//                     "Time Division Multiplexing (TDM)": true,
//                     "Frequency Division Multiplexing (FDM)": true,
//                     "Wavelength Division Multiplexing (WDM)": true
//                 },
//                 "Switching Techniques": {
//                     "Circuit Switching": true,
//                     "Packet Switching": true,
//                     "Message Switching": true
//                 }
//             },
//             "Data Link Layer": {
//                 "Functions of Data Link Layer": true,
//                 "Error Detection and Correction": {
//                     "Parity Check": true,
//                     "Cyclic Redundancy Check (CRC)": true,
//                     "Hamming Code": true
//                 },
//                 "Flow Control": {
//                     "Stop-and-Wait Protocol": true,
//                     "Sliding Window Protocol": true
//                 },
//                 "Medium Access Control (MAC)": {
//                     "ALOHA (Pure and Slotted)": true,
//                     "CSMA/CD (Carrier Sense Multiple Access with Collision Detection)": true,
//                     "CSMA/CA (Collision Avoidance)": true
//                 },
//                 "Switching in Data Link Layer": true
//             },
//             "Network Layer": {
//                 "Functions of Network Layer": true,
//                 "Routing Algorithms": {
//                     "Shortest Path Routing (Dijkstra's Algorithm)": true,
//                     "Flooding": true,
//                     "Distance Vector Routing (Bellman-Ford Algorithm)": true,
//                     "Link State Routing": true
//                 },
//                 "IP Addressing": {
//                     "IPv4 Addressing and Classes": true,
//                     "IPv6 Addressing": true,
//                     "Subnetting and Supernetting": true
//                 },
//                 "Routing Protocols": {
//                     "RIP (Routing Information Protocol)": true,
//                     "OSPF (Open Shortest Path First)": true,
//                     "BGP (Border Gateway Protocol)": true
//                 },
//                 "NAT (Network Address Translation)": true
//             },
//             "Transport Layer": {
//                 "Functions of Transport Layer": true,
//                 "Connection-Oriented vs Connectionless Services": true,
//                 "TCP (Transmission Control Protocol)": {
//                     "Features of TCP": true,
//                     "TCP Header": true,
//                     "Three-Way Handshake": true,
//                     "Congestion Control in TCP": true
//                 },
//                 "UDP (User Datagram Protocol)": {
//                     "Features of UDP": true,
//                     "Use Cases of UDP": true
//                 }
//             },
//             "Application Layer": {
//                 "DNS (Domain Name System)": {
//                     "DNS Resolution Process": true,
//                     "Types of DNS Records (A, AAAA, CNAME, MX)": true
//                 },
//                 "HTTP and HTTPS": {
//                     "How HTTP Works": true,
//                     "Differences Between HTTP and HTTPS": true,
//                     "HTTPS and SSL/TLS": true
//                 },
//                 "Email Protocols": {
//                     "SMTP (Simple Mail Transfer Protocol)": true,
//                     "IMAP (Internet Message Access Protocol)": true,
//                     "POP3 (Post Office Protocol)": true
//                 },
//                 "File Transfer Protocols": {
//                     "FTP (File Transfer Protocol)": true,
//                     "SFTP (Secure File Transfer Protocol)": true
//                 }
//             },
//             "Network Security": {
//                 "Introduction to Network Security": true,
//                 "Common Security Threats": {
//                     "Phishing": true,
//                     "Man-in-the-Middle Attack": true,
//                     "DDoS (Distributed Denial of Service)": true
//                 },
//                 "Encryption Techniques": {
//                     "Symmetric Encryption": true,
//                     "Asymmetric Encryption": true,
//                     "Hashing Algorithms (MD5, SHA)": true
//                 },
//                 "Firewalls and VPNs": {
//                     "Types of Firewalls": true,
//                     "VPNs (Virtual Private Networks)": true,
//                     "IPSec (Internet Protocol Security)": true
//                 }
//             },
//             "Wireless Networks": {
//                 "Introduction to Wireless Networking": true,
//                 "Wi-Fi Standards (802.11 a/b/g/n/ac/ax)": true,
//                 "Bluetooth and Zigbee": true,
//                 "Cellular Networks (2G, 3G, 4G, 5G)": true,
//                 "Ad-Hoc Networks and Mesh Networks": true
//             },
//             "Emerging Trends in Networking": {
//                 "Software-Defined Networking (SDN)": true,
//                 "Network Function Virtualization (NFV)": true,
//                 "IoT Networking": true,
//                 "Edge Computing and Fog Computing": true,
//                 "5G and Beyond": true
//             },
//             "Case Studies and Practical Applications": {
//                 "Case Study: Designing a Secure Enterprise Network": true,
//                 "Case Study: Analyzing Internet Routing": true,
//                 "Practical Project: Building a Simple Chat Application with Sockets": true,
//                 "Practical Project: Setting Up a Private Cloud Network": true
//             }
//         },
//         "Soft Skills and Best Practices": {
//             "Agile Development and Scrum": {
//                 "Introduction to Agile Methodology": {
//                     "Principles of Agile": true,
//                     "Benefits of Agile over Traditional Models": true
//                 },
//                 "Scrum Framework": {
//                     "Roles in Scrum (Scrum Master, Product Owner, Development Team)": true,
//                     "Artifacts (Product Backlog, Sprint Backlog, Increment)": true,
//                     "Events (Sprint Planning, Daily Scrum, Sprint Review, Retrospective)": true
//                 },
//                 "Best Practices in Agile": {
//                     "Effective Sprint Planning": true,
//                     "Tracking Progress with Burndown Charts": true,
//                     "Conducting Productive Retrospectives": true
//                 }
//             },
//             "Problem Solving and Debugging": {
//                 "Understanding Problem-Solving": {
//                     "Defining Problems Clearly": true,
//                     "Breaking Problems into Smaller Parts": true,
//                     "Analyzing Root Causes (5 Whys, Fishbone Diagram)": true
//                 },
//                 "Debugging Skills": {
//                     "Debugging Tools and Techniques": true,
//                     "Systematic Debugging Steps": true,
//                     "Collaborative Debugging in Teams": true
//                 },
//                 "Case Studies and Practice": {
//                     "Solving Real-Life Software Issues": true,
//                     "Analyzing Past Debugging Challenges": true
//                 }
//             },
//             "Clean Code Practices": {
//                 "Principles of Clean Code": {
//                     "Writing Readable and Maintainable Code": true,
//                     "Naming Conventions for Variables and Methods": true,
//                     "Avoiding Code Smells": true
//                 },
//                 "Refactoring Code": {
//                     "Identifying Areas for Improvement": true,
//                     "Step-by-Step Refactoring": true,
//                     "Testing After Refactoring": true
//                 },
//                 "Documentation and Comments": {
//                     "Writing Meaningful Comments": true,
//                     "Creating Documentation for APIs and Libraries": true
//                 },
//                 "Code Review Practices": {
//                     "Conducting Effective Code Reviews": true,
//                     "Providing Constructive Feedback": true,
//                     "Handling Feedback Gracefully": true
//                 }
//             },
//             "Collaboration and Communication": {
//                 "Collaboration in Teams": {
//                     "Building Trust in Teams": true,
//                     "Fostering Inclusive Work Environments": true,
//                     "Handling Conflicts Constructively": true
//                 },
//                 "Communication Skills": {
//                     "Effective Verbal Communication": true,
//                     "Active Listening Techniques": true,
//                     "Writing Clear and Concise Emails": true,
//                     "Creating Impactful Presentations": true
//                 },
//                 "Stakeholder Management": {
//                     "Understanding Stakeholder Needs": true,
//                     "Providing Regular Updates to Stakeholders": true,
//                     "Handling Difficult Conversations": true
//                 },
//                 "Cross-Functional Collaboration": {
//                     "Working with Design Teams": true,
//                     "Collaborating with QA Engineers": true,
//                     "Interfacing with Product Managers": true
//                 }
//             },
//             "Time Management and Productivity": {
//                 "Time Management Techniques": {
//                     "Eisenhower Matrix for Prioritization": true,
//                     "Pomodoro Technique for Focused Work": true,
//                     "Time Blocking for Scheduling Tasks": true
//                 },
//                 "Productivity Best Practices": {
//                     "Avoiding Multitasking": true,
//                     "Minimizing Distractions (Digital and Physical)": true,
//                     "Creating a Productive Workspace": true
//                 },
//                 "Goal Setting and Tracking": {
//                     "SMART Goals (Specific, Measurable, Achievable, Relevant, Time-Bound)": true,
//                     "Using Tools for Goal Tracking (Trello, Asana)": true,
//                     "Reviewing Progress Regularly": true
//                 },
//                 "Stress Management": {
//                     "Recognizing Signs of Burnout": true,
//                     "Practicing Mindfulness and Meditation": true,
//                     "Balancing Work and Personal Life": true
//                 }
//             }
//         }
//     },
//     "Data Science and Artificial Intelligence": {
//         "Probability and Statistics": {
//             "Basic Probability Concepts": {
//                 "Counting (Permutation and Combination)": true,
//                 "Probability Axioms and Rules": true,
//                 "Sample Space and Events": true,
//                 "Independent and Mutually Exclusive Events": true,
//                 "Marginal, Conditional, and Joint Probability": true
//             },
//             "Theorems and Distributions": {
//                 "Bayes Theorem": true,
//                 "Random Variables": {
//                     "Discrete Random Variables": {
//                         "Probability Mass Function (PMF)": true,
//                         "Bernoulli and Binomial Distributions": true
//                     },
//                     "Continuous Random Variables": {
//                         "Probability Density Function (PDF)": true,
//                         "Uniform, Exponential, Poisson, Normal, and Standard Normal Distributions": true
//                     }
//                 },
//                 "Cumulative Distribution Function (CDF)": true,
//                 "Central Limit Theorem": true
//             },
//             "Descriptive Statistics": {
//                 "Mean, Median, and Mode": true,
//                 "Variance and Standard Deviation": true,
//                 "Correlation and Covariance": true
//             },
//             "Hypothesis Testing": {
//                 "Confidence Intervals": true,
//                 "z-Test, t-Test, and Chi-Squared Test": true
//             }
//         },
//         "Linear Algebra": {
//             "Vector Spaces": {
//                 "Vector Space and Subspaces": true,
//                 "Linear Dependence and Independence": true
//             },
//             "Matrix Operations": {
//                 "Projection, Orthogonal, and Idempotent Matrices": true,
//                 "Partition Matrices and Properties": true
//             },
//             "Key Concepts": {
//                 "Quadratic Forms": true,
//                 "Gaussian Elimination": true,
//                 "Eigenvalues and Eigenvectors": true,
//                 "Determinants and Rank": true,
//                 "Nullity and Projections": true
//             },
//             "Decompositions": {
//                 "LU Decomposition": true,
//                 "Singular Value Decomposition (SVD)": true
//             }
//         },
//         "Calculus and Optimization": {
//             "Basic Calculus": {
//                 "Functions of a Single Variable": true,
//                 "Limit, Continuity, and Differentiability": true,
//                 "Taylor Series Expansion": true
//             },
//             "Optimization": {
//                 "Maxima and Minima": true,
//                 "Single Variable Optimization": true
//             }
//         },
//         "Programming, Data Structures, and Algorithms": {
//             "Programming with Python": true,
//             "Basic Data Structures": {
//                 "Stacks, Queues, and Linked Lists": true,
//                 "Trees and Hash Tables": true
//             },
//             "Algorithms": {
//                 "Search Algorithms": {
//                     "Linear Search": true,
//                     "Binary Search": true
//                 },
//                 "Sorting Algorithms": {
//                     "Selection Sort, Bubble Sort, and Insertion Sort": true,
//                     "Divide and Conquer: Mergesort and Quicksort": true
//                 }
//             },
//             "Graph Theory": {
//                 "Introduction to Graph Theory": true,
//                 "Basic Graph Algorithms": {
//                     "Traversals (BFS and DFS)": true,
//                     "Shortest Path Algorithms": true
//                 }
//             }
//         },
//         "Database Management and Warehousing": {
//             "Database Fundamentals": {
//                 "ER-Model and Relational Model": true,
//                 "Relational Algebra and Tuple Calculus": true,
//                 "SQL and Integrity Constraints": true
//             },
//             "Data Processing": {
//                 "File Organization and Indexing": true,
//                 "Data Transformation Techniques": {
//                     "Normalization and Discretization": true,
//                     "Sampling and Compression": true
//                 }
//             },
//             "Data Warehousing": {
//                 "Schema for Multidimensional Data Models": true,
//                 "Concept Hierarchies": true,
//                 "Measures and Computations": true
//             }
//         },
//         "Machine Learning": {
//             "Supervised Learning": {
//                 "Regression": {
//                     "Simple and Multiple Linear Regression": true,
//                     "Ridge Regression": true
//                 },
//                 "Classification": {
//                     "Logistic Regression": true,
//                     "K-Nearest Neighbor (KNN)": true,
//                     "Naive Bayes Classifier": true,
//                     "Support Vector Machine (SVM)": true,
//                     "Decision Trees": true
//                 },
//                 "Cross-Validation Techniques": {
//                     "Leave-One-Out Cross-Validation (LOO)": true,
//                     "K-Folds Cross-Validation": true
//                 },
//                 "Neural Networks": {
//                     "Feed-Forward Neural Networks": true,
//                     "Multi-Layer Perceptrons (MLP)": true
//                 }
//             },
//             "Unsupervised Learning": {
//                 "Clustering": {
//                     "K-Means and K-Medoid": true,
//                     "Hierarchical Clustering (Single-Linkage, Multiple-Linkage)": true
//                 },
//                 "Dimensionality Reduction": {
//                     "Principal Component Analysis (PCA)": true
//                 }
//             }
//         },
//         "Artificial Intelligence": {
//             "Search": {
//                 "Informed and Uninformed Search": true,
//                 "Adversarial Search": true
//             },
//             "Logic": {
//                 "Propositional Logic": true,
//                 "Predicate Logic": true
//             },
//             "Reasoning Under Uncertainty": {
//                 "Conditional Independence Representation": true,
//                 "Exact Inference through Variable Elimination": true,
//                 "Approximate Inference through Sampling": true
//             }
//         }
//     }
// };
const calculateLeafNodesProgress = (node) => {
    let total = 0;
    let completed = 0;

    const traverse = (currentNode) => {
        if (typeof currentNode !== "object" || !currentNode) return;

        if (currentNode.___md___) {
            total += 1;
            completed += 1;
        } else if (!currentNode.___urlPath___) {
            // It's a leaf node without ___md___
            total += 1;
        }

        Object.entries(currentNode).forEach(([key, value]) => {
            if (key !== "___urlPath___" && key !== "___md___") {
                traverse(value);
            }
        });
    };

    traverse(node);
    const progress = total > 0 ? Math.round((completed / total) * 100) : 0;
    return progress;
};

const Tile = ({ title, link, image, progress }) => (
    <a
        href={link}
        style={{
            display: "block",
            textDecoration: "none",
            color: "#333",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s, box-shadow 0.2s",
            textAlign: "center",
        }}
        onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.3)";
        }}
        onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
        }}
    >
        <div
            style={{
                height: "150px",
                background: `url(${image}) no-repeat center center/cover`,
            }}
        ></div>
        <div
            style={{
                padding: "15px",
                fontSize: "1em",
                fontWeight: "bold",
                backgroundColor: "#fdfdfd",
            }}
        >
            {title}
        </div>
        {/* Progress Bar */}
        <div
            style={{
                backgroundColor: "#f0f0f0",
                borderRadius: "5px",
                margin: "10px 15px",
                overflow: "hidden",
                height: "10px",

            }}
        >
            <div
                style={{
                    width: `${progress}%`,
                    height: "100%",
                    backgroundColor: "#4caf50",
                }}
            ></div>
        </div>
        <div
            style={{
                textAlign: "center",
                fontSize: "0.9em",
                color: "#555",
                backgroundColor: "#eaeaea",
            }}
        >
            {progress}% Completed
        </div>
    </a>
);

const renderTiles = (topics, basePath) => {
    // Placeholder images for each topic
    const placeholderImages = {
        "Backend Development": backend,
        "Frontend Development": frontend,
        "Web Technology (Foundation)": web_tech,
        "AWS Certified Developer - Associate": aws,
        "AWS Serverless": aws_serverless,
        "Database Management": dbms,
        "DevOps and Deployment": devops,
        "Software Engineering": software_engineering,
        "Data Structures": data_structures,
        "Algorithms": algo,
        "System Design": sys_design,
        "Discrete Mathematics": dm,
        "Digital Logic": dl,
        "Computer Organization and Architecture": coa,
        "Operating System": os,
        "Computer Networks": networking,
        "Cloud Computing": cloud_computing,
        "Information & Cyber Security": info_cyber_sec,
        "Soft Skills and Best Practices": soft_skills,
        "Probability and Statistics": probability,
        "Linear Algebra": linear_algebra,
        "Calculus and Optimization": calculus,
        "Programming, Data Structures, and Algorithms": programming,
        "Database Management and Warehousing": warehouse,
        "Machine Learning": machine_learning,
        "Artificial Intelligence": artificial_intelligence,
    };

    return Object.entries(topics)
        .filter(([topic]) => topic !== "___urlPath___") // Exclude metadata like "___urlPath___"
        .map(([topic, value], idx) => {
            const encodedTopic = value?.___urlPath___ || topic; // Use `___urlPath___` if it exists
            const isMarkdown = value?.___md___; // Check for `___md___`

            const fullPath = isMarkdown
                ? `${basePath}/markdowns/${value.___md___}` // Markdown file path
                : `${basePath}/${encodedTopic}`; // Child topic path

            // Assign image or fallback to a default placeholder
            const image = placeholderImages[topic] || "default_image_path_here";
            // Calculate progress for the current tile
            const progress = calculateLeafNodesProgress(value);

            return (
                <Tile
                    key={idx} // Ensure unique keys for React
                    title={topic}
                    link={fullPath}
                    image={image}
                    progress={progress} // Pass progress to Tile

                />
            );
        });
};


const Syllabus = () => {
    const [columnWidth, setColumnWidth] = useState(200); // Default to 200px for desktop

    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setColumnWidth(window.innerWidth <= 768 ? 300 : 200); // Use 300px for mobile, 200px for desktop
        };

        // Set initial column width based on current window size
        handleResize();

        // Add event listener for resize
        window.addEventListener("resize", handleResize);

        return () => {
            // Clean up the event listener
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowTitle(true);
        }, 1000);

        return () => {
            clearInterval(timeout);
        };
    }, []);

    return (
        <div
            style={{
                margin: "auto",
                maxWidth: "1200px",
                background: "none",

            }}
        >

            <div className="courseTitle">
                {showTitle && (
                    <h1
                        className="syllabus-header"
                    >
                        {/* TechNotes Pro */}
                    </h1>
                )}


            </div>




            {/* Full-Stack Developer Section */}
            <div className="tiles-wrapper rotate-right">

                <h2
                    className="tiles-header"
                >
                    Full-Stack Dev 🖥️🌐⚙️
                </h2>

                <StackGrid className="stack-grid-wrapper" columnWidth={columnWidth} gutterWidth={20} gutterHeight={20}>
                    {renderTiles(syllabus["Full-Stack Developer Notes"], "#/contents/full-stack-developer-course")}
                </StackGrid>

            </div>



            {/* Data Science Section */}
            <div className="tiles-wrapper rotate-left">

                <h2
                    className="tiles-header"
                >
                    Data Science and AI 🤖📊📈
                </h2>

                <StackGrid className="stack-grid-wrapper" columnWidth={columnWidth} gutterWidth={20} gutterHeight={20}>
                    {renderTiles(syllabus["Data Science and Artificial Intelligence Notes"],
                        "#/contents/data-science-and-artificial-intelligence"
                    ) // Five-line loading skeleton
                    }
                </StackGrid>

            </div>




        </div>
    );
};

export default Syllabus;