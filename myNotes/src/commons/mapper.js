import { HTML } from './Courses/Full Stack Development/Frontend Development/MarkupStylingLang/HTML';
import { CSS } from './Courses/Full Stack Development/Frontend Development/MarkupStylingLang/CSS';
import { JavaDevelopment } from './Courses/Full Stack Development/Backend Development/Java Backend/JavaDevelopment';
import { QBank } from './Courses/Full Stack Development/Backend Development/Java Backend/QBank';
import { NextJS } from './Courses/Full Stack Development/Frontend Development/JavaScript Frameworks/Next';


const mapper = {
    "Contents": {
        "___urlPath___": "contents",
        "Full-Stack Developer Notes": {
            "___urlPath___": "full-stack-developer-course",
            "Backend Development": {
                "___urlPath___": "backend-development",
                ...JavaDevelopment,
                "Spring Ecosystem": {
                    "___urlPath___": "spring-ecosystem",
                    "Spring Core": {
                        "___urlPath___": "spring-core",
                        "Overview of Spring Ecosystem": {
                            "___urlPath___": "overview-of-spring-ecosystem",
                            "___md___": 1119
                        },
                        "Inversion of Control (IoC) and Dependency Injection (DI)": {
                            "___urlPath___": "ioc-di",
                            "___md___": 1120
                        },
                        "Bean Lifecycle and Scopes": {
                            "___urlPath___": "bean-lifecycle-scopes",
                            "___md___": 1141
                        },
                        "Annotation-based and Java-based Configuration": {
                            "___urlPath___": "annotation-java-configuration",
                            "___md___": 1142
                        },
                        "Property Source Resolution and Environment Abstraction": {
                            "___urlPath___": "property-source-resolution-environment-abstraction",
                            "___md___": 1143
                        },
                        "FactoryBeans and Custom BeanPostProcessors": {
                            "___urlPath___": "factory-beans-custom-beanpostprocessors",
                            "___md___": 1145
                        },
                        "CIQnA": {
                            "___urlPath___": "ci-qna",
                            "___md___": 1209
                        }
                    },
                    "Spring Boot": {
                        "Auto-configuration and Spring Boot Starters": true,
                        "Spring Boot Actuator for Monitoring and Metrics": true,
                        "Spring Profiles for Environment Management": true,
                        "Customizing Auto-configuration with `@Conditional` Annotations": true,
                        "External Configuration (YAML, Properties, ENV Vars, Config Server)": true,
                        "Spring Boot CLI and DevTools": true,
                    },
                    "Spring MVC and REST": {
                        "DispatcherServlet and Request Lifecycle": true,
                        "Controller Annotations (`@RestController`, `@RequestMapping`, etc.)": true,
                        "Request & Response Body Mapping with Jackson / Gson": true,
                        "Validation with Hibernate Validator and `@Valid`": true,
                        "Exception Handling with `@ControllerAdvice` and `@ExceptionHandler`": true,
                        "Custom Interceptors, Filters, and HandlerMethodArgumentResolvers": true,
                    },
                    "Spring Data and Persistence": {
                        "___urlPath___": "spring-data-persistence",
                        "Spring Data JPA and Repositories": {
                            "___urlPath___": "spring-data-jpa-repositories",
                            "___md___": 1210
                        },
                        "Entity Relationships and Lazy/Eager Loading": {
                            "___urlPath___": "entity-relationships-lazy-eager-loading",
                            "___md___": 1211
                        },
                        "Pagination, Sorting, and Custom Queries": {
                            "___urlPath___": "pagination-sorting-custom-queries",
                            "___md___": 1212
                        },
                        "Transactions with `@Transactional` and Propagation Strategies": {
                            "___urlPath___": "transactions-transactional-propagation-strategies",
                            "___md___": 1213
                        },
                        "Connection Pooling with HikariCP": {
                            "___urlPath___": "connection-pooling-hikaricp",
                            "___md___": 1214
                        },
                        "Using Flyway or Liquibase for Schema Migration": {
                            "___urlPath___": "flyway-liquibase-schema-migration",
                            "___md___": 1215
                        },
                        "CIQnA": {
                            "___urlPath___": "ciqna",
                            "___md___": 1216
                        }
                    },
                    "Spring Security": {
                        "Security Filters and FilterChainProxy": true,
                        "Authentication and Authorization with Roles and Permissions": true,
                        "JWT and OAuth2 Resource Server Integration": true,
                        "Custom AuthenticationProvider and UserDetailsService": true,
                        "CSRF, CORS, and Session Management": true,
                        "Method-Level Security with `@PreAuthorize` and SpEL": true,
                        "Spring Security - Internals": {
                            "Security Filters and FilterChainProxy Deep Dive": true,
                            "SpEL with `@PreAuthorize` for Fine-grained Rules": true,
                            "Session Fixation Protection and Security Headers": true
                        },
                    },
                    "Spring WebFlux (Reactive Programming)": {
                        "___urlPath___": "spring-webflux",
                        "Reactive Streams, Mono, and Flux": {
                            "___urlPath___": "reactive-streams-mono-flux",
                            "___md___": 1111
                        },
                        "Functional Endpoints vs Annotated Controllers": {
                            "___urlPath___": "functional-endpoints-vs-annotated-controllers",
                            "___md___": 1112
                        },
                        "Reactive Repositories and MongoDB Integration": {
                            "___urlPath___": "reactive-repositories-mongodb",
                            "___md___": 1113

                        },
                        "Backpressure Handling and Scheduler Strategies": {
                            "___urlPath___": "backpressure-scheduler-strategies",
                            "___md___": 1114
                        },
                        "Testing Reactive Applications with StepVerifier": true,
                        "Spring WebFlux - Advanced": {
                            "Testing Reactive Streams with StepVerifier": true,
                            "Advanced Backpressure Handling with Schedulers": true
                        },
                    },
                    "Spring AOP (Aspect-Oriented Programming)": {
                        "___urlPath___": "spring-aop",
                        "Cross-Cutting Concerns and AOP Use Cases": {
                            "___urlPath___": "cross-cutting-concerns-aop-use-cases",
                            "___md___": 1115
                        },
                        "Defining Aspects, Pointcuts, and Advices": {
                            "___urlPath___": "defining-aspects-pointcuts-advices",
                            "___md___": 1116
                        },
                        "Annotation and XML-Based AOP Configuration": {
                            "___urlPath___": "annotation-xml-aop-configuration",
                            "___md___": 1117
                        },
                        "Transaction Management with AOP": {
                            "___urlPath___": "transaction-management-aop",
                            "___md___": 1118
                        }
                    },
                    "Spring Cloud and Distributed Systems": {
                        "Spring Cloud Config for Centralized Configuration": true,
                        "Service Discovery with Eureka or Consul": true,
                        "Client-side Load Balancing with Spring Cloud LoadBalancer": true,
                        "Declarative REST Clients with OpenFeign": true,
                        "Circuit Breaker Patterns with Resilience4j": true,
                        "Distributed Tracing with Sleuth and Zipkin": true
                    },
                    "Spring and Messaging": {
                        "___urlPath___": "spring-messaging",
                        "Spring for Apache Kafka": {
                            "___urlPath___": "spring-kafka",
                            "___md___": 1138
                        },
                        "Producer/Consumer Configuration and Tuning": true,
                        "Kafka Template and MessageListenerContainer": true,
                        "Transactional Kafka Messaging": true,
                        "Dead Letter Topics and Retry Strategies": true,
                        "Spring Messaging - Kafka": {
                            "Transactional Kafka Messaging": true,
                            "Kafka Template and MessageListenerContainer Tuning": true,
                            "Dead Letter Topics and Retry Strategies": true
                        },
                    },
                    "Spring and GraphQL": {
                        "___urlPath___": "spring-graphql",
                        "Spring for GraphQL Overview": {
                            "___urlPath___": "spring-graphql-overview",
                            "___md___": 1139
                        },
                        "Schema-first vs Code-first Approach": {
                            "___urlPath___": "schema-first-code-first",
                            "___md___": 1140
                        },
                        "DataFetchers, Resolvers, and Controllers": true,
                        "Security in GraphQL APIs": true,
                        "N+1 Problem and Batch Mapping with Dataloader": true,
                        "Spring GraphQL - Deep Concepts": {
                            "Schema-first vs Code-first Approach": true,
                            "N+1 Problem and Batch Mapping with Dataloader": true
                        },
                    },
                    "Spring Testing and QA": {
                        "Unit Testing with JUnit 5 and Mockito": true,
                        "Spring Boot Test and `@WebMvcTest`, `@DataJpaTest`": true,
                        "Integration Testing with Testcontainers": true,
                        "MockMvc and RestAssured for API Testing": true,
                        "Contract Testing with Spring Cloud Contract": true
                    },
                    "Spring DevOps, Observability, and Production Readiness": {
                        "Spring Boot Actuator with Prometheus and Grafana": true,
                        "Health Checks, Metrics, and Custom Endpoints": true,
                        "Structured Logging with Logback/Log4j2 + MDC": true,
                        "Deploying Spring Boot to Kubernetes and Docker": true,
                        "Zero-Downtime Deployments with Rolling Updates": true,
                        "Spring DevOps & Logging": {
                            "Structured Logging with Logback and MDC": true,
                            "Zero-Downtime Deployments with Kubernetes and Rolling Updates": true
                        },
                    },
                    "Architecture and Design Patterns in Spring": {
                        "Clean Architecture and Hexagonal Design": true,
                        "Domain-Driven Design (DDD) with Aggregates and Repositories": true,
                        "Event-Driven Architecture using Domain Events": true,
                        "CQRS and Event Sourcing in Spring": true,
                        "Multi-tenancy Support with Spring Boot": true
                    }
                },
                "Nodejs + Express.js": {
                    "___urlPath___": "express-js",
                    "Introduction": {
                        "___urlPath___": "introduction",
                        "___md___": 555
                    },
                    "Core Concepts": {
                        "___urlPath___": "core-concepts",
                        "Routing": {
                            "___urlPath___": "routing",
                            "Basic Routing": {
                                "___urlPath___": "basic-routing",
                                "___md___": 556
                            },
                            "Route Parameters": {
                                "___urlPath___": "route-parameters",
                                "___md___": 557
                            },
                            "Route Grouping": {
                                "___urlPath___": "route-grouping",
                                "___md___": 558
                            },
                            "Chained Route Handlers": {
                                "___urlPath___": "chained-route-handlers",
                                "___md___": 559
                            }
                        },
                        "Middleware": {
                            "___urlPath___": "middleware",
                            "Built-in Middleware": {
                                "___urlPath___": "built-in-middleware",
                                "___md___": 560
                            },
                            "Custom Middleware": {
                                "___urlPath___": "custom-middleware",
                                "___md___": 563
                            },
                            "Error Handling Middleware": {
                                "___urlPath___": "error-handling-middleware",
                                "___md___": 561
                            },
                            "Third-party Middleware": {
                                "___urlPath___": "third-party-middleware",
                                "___md___": 562
                            }
                        },
                        "Request & Response": {
                            "___urlPath___": "request-response",
                            "Request Object": {
                                "___urlPath___": "request-object",
                                "___md___": 310
                            },
                            "Response Object": {
                                "___urlPath___": "response-object",
                                "___md___": 311
                            },
                            "Handling JSON and Forms": {
                                "___urlPath___": "json-form-handling",
                                "___md___": 312
                            }
                        }
                    },
                    "Advanced Topics": {
                        "___urlPath___": "advanced-topics",
                        "Asynchronous Handling": {
                            "___urlPath___": "async-handling",
                            "Async/Await": {
                                "___urlPath___": "async-await",
                                "___md___": 568
                            },
                            "Promises": {
                                "___urlPath___": "promises",
                                "___md___": 569
                            },
                            "Error Propagation": {
                                "___urlPath___": "error-propagation",
                                "___md___": 570
                            }
                        },
                        "Templating Engines": {
                            "___urlPath___": "templating-engines",
                            "EJS": {
                                "___urlPath___": "ejs",
                                "___md___": 316
                            },
                            "Pug": {
                                "___urlPath___": "pug",
                                "___md___": 317
                            },
                            "Handlebars": {
                                "___urlPath___": "handlebars",
                                "___md___": 318
                            }
                        },
                        "File Uploads": {
                            "___urlPath___": "file-uploads",
                            "Multer Middleware": {
                                "___urlPath___": "multer",
                                "___md___": 319
                            }
                        },
                        "Authentication": {
                            "___urlPath___": "authentication",
                            "JWT": {
                                "___urlPath___": "jwt-authentication",
                                "___md___": 320
                            },
                            "Session-Based Auth": {
                                "___urlPath___": "session-authentication",
                                "___md___": 321
                            },
                            "Passport.js": {
                                "___urlPath___": "passport-js",
                                "___md___": 322
                            }
                        },
                        "Security": {
                            "___urlPath___": "security",
                            "Helmet": {
                                "___urlPath___": "helmet",
                                "___md___": 323
                            },
                            "CORS": {
                                "___urlPath___": "cors",
                                "___md___": 324
                            },
                            "Rate Limiting": {
                                "___urlPath___": "rate-limiting",
                                "___md___": 571
                            }
                        }
                    },
                    "Integration & Deployment": {
                        "___urlPath___": "integration-deployment",
                        "Database Integration": {
                            "___urlPath___": "database-integration",
                            "MongoDB with Mongoose": {
                                "___urlPath___": "mongoose",
                                "___md___": 567
                            },
                            "MySQL with Sequelize": {
                                "___urlPath___": "sequelize",
                                "___md___": 327
                            }
                        },
                        "Testing": {
                            "___urlPath___": "testing",
                            "Supertest": {
                                "___urlPath___": "supertest",
                                "___md___": 328
                            },
                            "Jest": {
                                "___urlPath___": "jest",
                                "___md___": 329
                            },
                            "Mocking Requests": {
                                "___urlPath___": "mocking",
                                "___md___": 330
                            }
                        },
                        "Deployment": {
                            "___urlPath___": "deployment",
                            "Dockerizing Express App": {
                                "___urlPath___": "docker",
                                "___md___": 331
                            },
                            "Deploy on Heroku": {
                                "___urlPath___": "heroku",
                                "___md___": 332
                            },
                            "Deploy on AWS": {
                                "___urlPath___": "aws",
                                "___md___": 333
                            }
                        }
                    },
                    "Best Practices": {
                        "___urlPath___": "best-practices",
                        "Project Structure": {
                            "___urlPath___": "project-structure",
                            "___md___": 564
                        },
                        "Environment Management": {
                            "___urlPath___": "env-management",
                            "___md___": 565
                        },
                        "Error Handling Strategy": {
                            "___urlPath___": "error-handling-strategy",
                            "___md___": 566
                        },
                        "Logging": {
                            "___urlPath___": "logging",
                            "Winston Logger": {
                                "___urlPath___": "winston",
                                "___md___": 337
                            },
                            "Morgan Middleware": {
                                "___urlPath___": "morgan",
                                "___md___": 338
                            }
                        }
                    },
                    "Node.js Express - Session & Middleware": {
                        "Session-Based Authentication with Redis": true,
                        "Cookie Security Settings (Secure, HttpOnly, SameSite)": true,
                        "Advanced Middleware Composition and Factory Patterns": true
                    },
                    "Templating (if Full Stack)": {
                        "Pug, Handlebars, and EJS Advanced Use": true
                    },
                },
                "RESTful APIs and GraphQL": {
                    "Introduction to RESTful APIs": true,
                    "HTTP Methods and Status Codes": true,
                    "API Design Best Practices": true,
                    "Introduction to GraphQL": true,
                    "Query, Mutation, and Subscription in GraphQL": true,
                    "Integrating GraphQL with Node.js or Spring Boot": true,
                    "Versioning and Documentation (Swagger, Postman)": true,
                    "GraphQL - Advanced Topics": {
                        "Real-time Subscriptions with WebSocket": true,
                        "Query Complexity and Depth Limiting": true,
                        "Batch Resolvers vs Naive Field Resolvers": true
                    },
                },
                "Kafka Internals & Optimization": {
                    "Kafka ISR (In-Sync Replica) Management": true,
                    "Kafka Thread Model and Memory Tuning": true,
                    "Quorum Election and Raft in KRaft Mode": true
                },
                "Resilience Patterns": {
                    "Bulkhead Isolation Pattern": true,
                    "Timeout + Fallback Strategy Chains": true,
                    "Saga Orchestration vs Choreography": true
                },
                "Authentication and Authorization": {
                    "Overview of Authentication and Authorization": true,
                    "Implementing JWT (JSON Web Token)": true,
                    "OAuth 2.0 and OpenID Connect": true,
                    "Role-Based Access Control (RBAC)": true,
                    "Session Management and Cookies": true,
                    "Social Logins with OAuth (Google, Facebook, GitHub)": true
                },
                "Database Integration (SQL and NoSQL)": {
                    "Introduction to SQL Databases": {
                        "Relational Database Concepts": true,
                        "Basic CRUD Operations with SQL": true,
                        "Joins, Indexing, and Optimization": true,
                        "Transactions and ACID Properties": true
                    },
                    "NoSQL Databases": {
                        "Introduction to NoSQL": true,
                        "Document-based Databases (MongoDB)": true,
                        "Key-Value Stores (Redis)": true,
                        "Differences Between SQL and NoSQL": true
                    },
                    "Database Integration with Backend": {
                        "Connecting to SQL Databases with JDBC or Sequelize": true,
                        "Integrating NoSQL Databases with Mongoose": true,
                        "Database Migrations and Schema Management": true
                    }
                },
                "Object-Relational Mapping (ORM)": {
                    "Introduction to ORM": true,
                    "Hibernate Basics": true,
                    "Sequelize Basics for Node.js": true,
                    "Mongoose Basics for MongoDB": true,
                    "Using ORMs for CRUD Operations": true,
                    "Handling Relationships in ORMs (One-to-One, One-to-Many, Many-to-Many)": true
                },
                "Microservices Architecture": {
                    "Introduction to Microservices": {
                        "What are Microservices?": true,
                        "Characteristics of Microservices": true,
                        "Advantages & Challenges of Microservices": true,
                        "Use Cases of Microservices": true
                    },
                    "Monolithic vs Microservices Architecture": {
                        "Understanding Monolithic Architecture": true,
                        "Microservices vs Monolithic: Pros and Cons": true,
                        "When to Choose Microservices?": true,
                        "Migration from Monolith to Microservices": {
                            "Strangler Pattern for Migration": true,
                            "Incremental vs Big Bang Approach": true
                        }
                    },
                    "Designing Microservices": {
                        "___urlPath___": "designing-microservices",
                        "Domain-Driven Design (DDD) in Microservices": {
                            "___urlPath___": "domain-driven-design",
                            "___md___": 366
                        },
                        "Bounded Contexts & Aggregates": {
                            "___urlPath___": "bounded-contexts-aggregates",
                            "___md___": 370
                        },
                        "Hexagonal Architecture (Ports & Adapters)": {
                            "___urlPath___": "hexagonal-architecture-ports-adapters",
                            "___md___": 371
                        },
                        "Clean Architecture in Microservices": {
                            "___urlPath___": "clean-architecture-microservices",
                            "___md___": 372
                        }
                    },
                    "Service Discovery & Communication": {
                        "Service Discovery": {
                            "Client-Side vs Server-Side Discovery": true,
                            "Eureka Service Registry": true,
                            "Consul & Zookeeper for Service Discovery": true,
                            "Kubernetes Service Discovery": true
                        },
                        "Communication Between Microservices": {
                            "___urlPath___": "communication-between-microservices",
                            "Overview": {
                                "___urlPath___": "overview",
                                "___md___": 365
                            },
                            "Synchronous Communication": {
                                "REST API with OpenAPI (Swagger)": true,
                                "gRPC for High Performance": true,
                                "GraphQL vs REST for Microservices": true
                            },
                            "Asynchronous Communication": {
                                "Message Brokers (Kafka, RabbitMQ, ActiveMQ)": {
                                    "___urlPath___": "message-brokers",
                                    "Kafka": {
                                        "___urlPath___": "kafka",
                                        "Introduction to Kafka": {
                                            "___urlPath___": "introduction-to-kafka",
                                            "What is Apache Kafka?": {
                                                "___urlPath___": "what-is-apache-kafka",
                                                "___md___": 645
                                            },
                                            "History and Evolution": true,
                                            "Kafka vs Traditional Messaging Systems": true,
                                            "Core Use Cases": true
                                        },
                                        "Kafka Architecture": {
                                            "___urlPath___": "kafka-architecture",
                                            "How Kafka uses the hardware?": {
                                                "___urlPath___": "kafka-hardware-use",
                                                "___md___": 646
                                            },
                                            "Kafka Broker": true,
                                            "Topic, Partitions, and Offsets": true,
                                            "Producers and Consumers": true,
                                            "Consumer Groups": true,
                                            "ZooKeeper (Legacy) vs KRaft (New Mode)": true,
                                            "Replication and Fault Tolerance": true
                                        },
                                        "Kafka Setup and Installation": {
                                            "___urlPath___": "setup-installation",
                                            "Local Installation using Binaries": true,
                                            "Docker-based Kafka Setup": true,
                                            "Kafka on Cloud Platforms (Confluent, MSK, Aiven)": true,
                                            "Kafka UI Tools (AKHQ, Conduktor, Kowl)": true
                                        },
                                        "Kafka Topics and Partitioning": {
                                            "___urlPath___": "topics-partitioning",
                                            "Creating and Configuring Topics": true,
                                            "Understanding Partitioning Logic": true,
                                            "Topic Retention and Cleanup Policies": true,
                                            "Compaction vs Deletion": true
                                        },
                                        "Kafka Producers": {
                                            "___urlPath___": "kafka-producers",
                                            "Producer APIs and Configuration": true,
                                            "Key-Based Partitioning": true,
                                            "Batching and Compression": true,
                                            "Delivery Semantics (at most once / at least once / exactly once)": true,
                                            "Idempotent Producers": true,
                                            "Custom Serializers": true
                                        },
                                        "Kafka Consumers": {
                                            "___urlPath___": "kafka-consumers",
                                            "Consumer APIs and Poll Loop": true,
                                            "Consumer Groups and Load Balancing": true,
                                            "Manual vs Auto Offset Commit": true,
                                            "Rebalancing Strategies": true,
                                            "Custom Deserializers": true
                                        },
                                        "Kafka Streams and Processing": {
                                            "___urlPath___": "kafka-streams",
                                            "What is Kafka Streams API?": true,
                                            "Stateless vs Stateful Processing": true,
                                            "Windowed Operations": true,
                                            "KTable vs KStream": true,
                                            "Stream Joins and Aggregations": true
                                        },
                                        "Kafka Connect": {
                                            "___urlPath___": "kafka-connect",
                                            "Overview of Kafka Connect Framework": true,
                                            "Source and Sink Connectors": true,
                                            "Debezium and CDC (Change Data Capture)": true,
                                            "Configuring Connectors with JSON/YAML": true,
                                            "Distributed vs Standalone Modes": true
                                        },
                                        "Kafka Schema Management": {
                                            "___urlPath___": "kafka-schema",
                                            "Avro, Protobuf, and JSON Schema": true,
                                            "Schema Registry Overview": true,
                                            "Schema Evolution and Compatibility": true,
                                            "Versioning Strategies": true
                                        },
                                        "Kafka Security": {
                                            "___urlPath___": "kafka-security",
                                            "Authentication (SSL/SASL)": true,
                                            "Authorization (ACLs)": true,
                                            "Encryption In Transit and At Rest": true,
                                            "Secure ZooKeeper (or KRaft) Communication": true
                                        },
                                        "Kafka Monitoring and Troubleshooting": {
                                            "___urlPath___": "kafka-monitoring",
                                            "Kafka Metrics (Broker/Producer/Consumer)": true,
                                            "Monitoring Tools (Prometheus, Grafana, Confluent Control Center)": true,
                                            "Log Compaction/Segment Issues": true,
                                            "Consumer Lag and Offset Tracking": true,
                                            "Topic Inspection with CLI and UIs": true
                                        },
                                        "Advanced Kafka Concepts": {
                                            "___urlPath___": "advanced-kafka",
                                            "Kafka Transactions": true,
                                            "Exactly-Once Semantics (EOS)": true,
                                            "Cross-Cluster Mirroring (MirrorMaker 2)": true,
                                            "Tiered Storage (Kafka + S3)": true,
                                            "Kafka with Kubernetes": true
                                        },
                                        "Kafka Case Studies and Real-World Applications": {
                                            "___urlPath___": "kafka-use-cases",
                                            "Log Aggregation System": true,
                                            "Event-Driven Microservices": true,
                                            "Streaming Analytics Pipeline": true,
                                            "Real-time ETL with Kafka Connect": true
                                        },
                                        "Kafka CLI and Admin Tools": {
                                            "___urlPath___": "kafka-cli-tools",
                                            "Topic Management (create/delete/describe)": true,
                                            "Consumer Group Management": true,
                                            "Kafka Config Commands": true,
                                            "Dumping and Reading Topic Data": true
                                        },
                                        "Kafka in Production": {
                                            "___urlPath___": "kafka-production",
                                            "Capacity Planning and Partition Sizing": true,
                                            "Cluster Scaling Strategies": true,
                                            "Upgrade and Migration Plans": true,
                                            "Best Practices Checklist": true
                                        }
                                    }

                                },
                                "Event-Driven Architecture": true,
                                "WebSockets & Server-Sent Events (SSE)": true
                            },
                            "Resilience Patterns": {
                                "Circuit Breaker Pattern (Resilience4J, Hystrix)": true,
                                "Retries, Backoff, and Bulkhead Pattern": true,
                                "Saga Pattern for Transactional Workflows": true
                            }
                        }
                    },
                    "API Gateway & Security": {
                        "API Gateway": {
                            "What is an API Gateway?": true,
                            "Zuul vs Kong vs Apigee": true,
                            "Authentication & Authorization in API Gateway": true,
                            "Rate Limiting, Caching, and Load Balancing": true
                        },
                        "Microservices Security": {
                            "OAuth 2.0 & OpenID Connect": true,
                            "JWT (JSON Web Tokens) & Session Management": true,
                            "Mutual TLS (mTLS) & Service-to-Service Authentication": true,
                            "Role-Based & Attribute-Based Access Control (RBAC/ABAC)": true
                        }
                    },
                    "Database Strategies for Microservices": {
                        "Shared vs Independent Databases": true,
                        "Database Per Microservice Pattern": true,
                        "Eventual Consistency & Data Synchronization": true,
                        "Distributed Transactions": {
                            "Saga Pattern for Transactions": true,
                            "Two-Phase Commit (2PC) Challenges": true
                        },
                        "Event Sourcing for Data Management": true,
                        "CQRS (Command Query Responsibility Segregation)": true
                    },
                    "Deploying Microservices": {
                        "Containerization": {
                            "Introduction to Docker": true,
                            "Docker Compose for Multi-Container Applications": true
                        },
                        "Container Orchestration": {
                            "Kubernetes Basics": true,
                            "Kubernetes Service Mesh (Istio, Linkerd, Consul)": true
                        },
                        "Serverless Microservices": {
                            "AWS Lambda": true,
                            "Azure Functions": true,
                            "Google Cloud Functions": true
                        }
                    },
                    "Logging, Monitoring & Observability": {
                        "Distributed Logging": {
                            "Centralized Logging with ELK Stack": true,
                            "Logging with Fluentd & Loki": true
                        },
                        "Tracing Microservices": {
                            "Distributed Tracing with Zipkin & Jaeger": true,
                            "OpenTelemetry for Tracing": true
                        },
                        "Monitoring & Metrics": {
                            "Prometheus for Microservices Monitoring": true,
                            "Grafana for Data Visualization": true,
                            "NewRelic & Datadog for Microservices Monitoring": true
                        }
                    },
                    "Resilience & Fault Tolerance": {
                        "Handling Failures in Microservices": true,
                        "Circuit Breaker Pattern": true,
                        "Retry and Timeout Strategies": true,
                        "Chaos Engineering": {
                            "Introduction to Chaos Engineering": true,
                            "Using Chaos Monkey to Test Resilience": true
                        }
                    },
                    "Testing Microservices": {
                        "Unit Testing Microservices": true,
                        "Integration Testing": {
                            "Testing Microservices Interactions": true,
                            "Mocking External Services (WireMock, Mockito)": true
                        },
                        "Contract Testing": {
                            "Pact for Consumer-Driven Contract Testing": true
                        },
                        "End-to-End Testing": {
                            "Cypress for Microservices E2E Testing": true,
                            "Postman for API Testing": true
                        }
                    },
                    "Microservices in Production": {
                        "CI/CD for Microservices": {
                            "Jenkins Pipeline for Microservices": true,
                            "GitHub Actions for Microservices Deployment": true,
                            "ArgoCD for Kubernetes Deployments": true
                        },
                        "Feature Flags in Microservices": true,
                        "Blue-Green & Canary Deployments": true,
                        "Rolling Updates & Zero-Downtime Deployments": true
                    },
                    "Best Practices & Anti-Patterns": {
                        "Best Practices in Microservices Development": true,
                        "Common Anti-Patterns in Microservices": {
                            "Too Many Services (Over-Microservices)": true,
                            "Tightly Coupled Microservices": true,
                            "Distributed Monoliths": true
                        }
                    },
                    "Case Studies": {
                        "Netflix Microservices Architecture": true,
                        "Uber’s Move to Microservices": true,
                        "Airbnb’s Microservices Transition": true
                    }
                },
                "Error Handling and Logging": {
                    "Types of Errors in Backend Applications": true,
                    "Error Handling Strategies": {
                        "Try-Catch Blocks": true,
                        "Global Error Handling": true,
                        "Validation Errors": true
                    },
                    "Logging Tools and Practices": {
                        "Introduction to Logging": true,
                        "Using Winston for Logging in Node.js": true,
                        "Using Logback for Logging in Spring Boot": true,
                        "Centralized Logging with ELK Stack": true,
                        "Monitoring Logs with AWS CloudWatch or Grafana": true
                    }
                },
                "Security - Advanced Web/API": {
                    "Refresh Tokens and Token Expiry Handling": true,
                    "OAuth2 Scope Mapping and Token Introspection": true,
                    "Rate Limiting Algorithms: Token Bucket vs Leaky Bucket": true,
                    "Content Security Policy (CSP), HSTS, and Clickjacking Protection": true
                },
                "More...": {
                    "___urlPath___": "more",
                    "Advanced Java & JVM": {
                        "Java Virtual Threads (Project Loom)": true,
                        "JMH (Java Microbenchmark Harness) for benchmarking": true,
                        "JVM Internals: Classloading, JIT, GC tuning, Memory Management": true,
                        "GraalVM and AOT Compilation": true
                    },
                    "gRPC and Protobuf": {
                        "Introduction to gRPC": true,
                        "Protocol Buffers (Proto3) with Java and Node.js": true,
                        "Unary, Server-side Streaming, Client-side Streaming, Bidi Streaming": true,
                        "gRPC Error Handling and Deadlines": true,
                        "gRPC Gateway and gRPC-Web": true
                    },
                    "Distributed Systems Concepts": {
                        "Vector Clocks and Conflict Resolution": true,
                        "Consensus Algorithms (Raft, Paxos basics)": true,
                        "Quorum-based Replication Strategies": true,
                        "Eventual Consistency Patterns": true
                    },
                    "Caching Architectures": {
                        "In-Memory Cache (Caffeine/Guava for Java)": true,
                        "Distributed Cache with Redis (TTL, eviction, LRU)": true,
                        "Write-through, Write-behind, Cache-aside strategies": true,
                        "CDN/Edge caching for APIs": true
                    },
                    "CI/CD & Release Strategies": {
                        "Feature Toggles (LaunchDarkly or open-source)": true,
                        "Shadow Deployment and Traffic Mirroring": true,
                        "GitOps with ArgoCD or Flux": true
                    },
                    "API Rate Limiting Patterns": {
                        "Token Bucket vs Leaky Bucket vs Fixed Window": true,
                        "Distributed Rate Limiting with Redis": true
                    },
                    "Auth & Security - Advanced": {
                        "OAuth2 Token Introspection, JWK, JWE": true,
                        "PKCE Flow (especially for SPA/mobile)": true,
                        "Zero Trust Architecture (ZTA) Basics": true
                    },
                    "GraphQL - Enterprise Scale": {
                        "GraphQL Federation and Schema Stitching": true,
                        "GraphQL Caching and Persisted Queries": true
                    },
                    "Testing - Enterprise Level": {
                        "Consumer-Driven Contract Testing with Pact + CI pipelines": true,
                        "Resilience Testing using Fault Injection (Gremlin, Litmus)": true,
                        "Synthetic Monitoring with Checkly/Datadog Synthetics": true
                    },
                    "Observability - Full Maturity": {
                        "OpenTelemetry end-to-end tracing (backend + Kafka + DB)": true,
                        "Custom Metrics Exporters (Micrometer with Prometheus)": true
                    },
                    "Production Readiness Patterns": {
                        "Circuit Breaker Trip Dashboard": true,
                        "Kill Switch / Global Flag Mechanisms": true,
                        "Hot Configuration Reload (Spring Cloud Bus, Config Refresh)": true
                    },
                    "Serverless & Event Triggers": {
                        "Spring Cloud Function (Functional Serverless with Java)": true,
                        "EventBridge or SQS-Lambda Trigger Integration": true
                    }
                }
            },
            "Frontend Development": {
                "___urlPath___": "frontend-development",
                "Advanced FED": {
                    "___urlPath___": "final-contents",
                    "Frontend Engineering (10 YOE)": {
                        "___urlPath___": "frontend-engineering",
                        "Content": {
                            "___urlPath___": "content",
                            "___md___": 1144
                        },
                        "JavaScript & TypeScript Mastery": {
                            "ES6+ Advanced Features": {
                                "___urlPath___": "es6-advanced-features",
                                "___md___": 9001
                            },
                            "Scope, Closures, Hoisting, Inheritance": {
                                "___urlPath___": "js-scope-closures-hoisting-inheritance",
                                "___md___": 9002
                            },
                            "Asynchronous JS (Promises, async/await, generators)": {
                                "___urlPath___": "js-async-programming",
                                "___md___": 9003
                            },
                            "Event loop, call stack, task & microtask queues": {
                                "___urlPath___": "event-loop-call-stack-queues",
                                "___md___": 9004
                            },
                            "DOM & Browser API Mastery": {
                                "___urlPath___": "dom-browser-apis",
                                "___md___": 9005
                            },
                            "Functional vs OOP in JavaScript": {
                                "___urlPath___": "functional-vs-oop-js",
                                "___md___": 9006
                            },
                            "JavaScript Deep Dive": {
                                "___urlPath___": "javascript-deep-dive",
                                "Introduction to JavaScript": {
                                    "___urlPath___": "introduction-to-javascript",
                                    "What is JavaScript?": true,
                                    "History and Evolution": true,
                                    "Language Translators: Compiler, Interpreter, Assembler": true,
                                    "JavaScript Engines": {
                                        "V8 Engine": true,
                                        "SpiderMonkey": true,
                                        "ChakraCore": true,
                                        "JavaScriptCore": true
                                    },
                                    "ECMAScript & TC39 Proposals": true,
                                    "Setting up the Environment": {
                                        "Browser Console": true,
                                        "Code Editors": true,
                                        "Online IDEs": true
                                    }
                                },

                                "Core Concepts": {
                                    "___urlPath___": "core-concepts",
                                    "Execution Context & Lexical Environment": {
                                        "___urlPath___": "execution-context-and-lexical-env",
                                        "___md___": 1168
                                    },
                                    "Call Stack & Memory Heap": true,
                                    "Hoisting Mechanics": {
                                        "___urlPath___": "hoisting-mechanics",
                                        "___md___": 1165
                                    },
                                    "Scope Chain & Variable Environment": {
                                        "___urlPath___": "scope-chain-and-variable-env",
                                        "___md___": 1167
                                    },
                                    "Scope Chain & Variable Environment (In Depth)": {
                                        "___urlPath___": "scope-chain-and-variable-env-in-depth",
                                        "___md___": 1166
                                    },
                                    "this Binding Rules": {
                                        "___urlPath___": "this-binding-rules",
                                        "Overview": {
                                            "___urlPath___": "overview",
                                            "___md___": 1169
                                        },
                                        "Default Binding": {
                                            "___urlPath___": "default-binding",
                                            "___md___": 1170
                                        },
                                        "Implicit Binding": {
                                            "___urlPath___": "implicit-binding",
                                            "___md___": 1171
                                        },
                                        "Explicit Binding (call, apply, bind)": {
                                            "___urlPath___": "explicit-binding",
                                            "___md___": 1172
                                        },
                                        "Arrow Functions": {
                                            "___urlPath___": "arrow-functions",
                                            "___md___": 1173
                                        },
                                        "this Binding Rules — Complete Overview (Revision)": {
                                            "___urlPath___": "this-binding-rules-complete-overview",
                                            "___md___": 1174
                                        }
                                    },
                                    "Primitive vs Reference Types": true,
                                    "Deep vs Shallow Copy": true,
                                    "Equality in JS": {
                                        "== vs ===": true,
                                        "Object.is": true
                                    },
                                    "CIQnA": {
                                        "___urlPath___": "ciqna",
                                        "___md___": 1176
                                    },
                                    "Appendix": {
                                        "The Closure Loop Problem (In Depth)": {
                                            "___urlPath___": "the-closure-loop-problem-in-depth",
                                            "___md___": 1177
                                        }
                                    }


                                },

                                "Functions": {
                                    "Function Declaration vs Expression": true,
                                    "Arrow Functions & Lexical this": true,
                                    "Default Parameters": true,
                                    "Rest & Spread Operators": true,
                                    "Closures in Depth": true,
                                    "IIFE (Immediately Invoked Function Expressions)": true,
                                    "Higher-Order Functions": {
                                        "map, filter, reduce": true,
                                        "forEach": true
                                    },
                                    "Currying & Partial Application": true,
                                    "Function Composition": true,
                                    "CIQnA": {
                                        "___urlPath___": "ciqna",
                                        "___md___": 1175
                                    }
                                },

                                "Objects and Prototypes": {
                                    "Creating & Accessing Objects": true,
                                    "Property Descriptors & defineProperty": true,
                                    "Prototype Chain & Inheritance": true,
                                    "Object.create vs Class Syntax": true,
                                    "Mixins": true,
                                    "Object Utilities": {
                                        "assign, keys, values, entries": true,
                                        "freeze, seal, preventExtensions": true
                                    },
                                    "getPrototypeOf vs setPrototypeOf": true,
                                    "CIQnA": {
                                        "___urlPath___": "ciqna",
                                        "___md___": 1178
                                    }
                                },

                                "Asynchronous JavaScript": {
                                    "Event Loop Deep Dive": {
                                        "Microtasks vs Macrotasks": true,
                                        "Task Queue & Job Queue": true
                                    },
                                    "Callbacks & Callback Hell": true,
                                    "Promises": {
                                        "Promise States & Resolution": true,
                                        "Chaining & Error Handling": true,
                                        "Promise.all / allSettled / race / any": true
                                    },
                                    "async/await": true,
                                    "Advanced Async": {
                                        "Web Workers": true,
                                        "MessageChannel": true,
                                        "BroadcastChannel": true
                                    }
                                },

                                "DOM & Browser APIs": {
                                    "DOM Manipulation": {
                                        "Selecting & Updating Elements": true,
                                        "innerHTML vs textContent": true,
                                        "setAttribute / getAttribute": true,
                                        "add/remove classes": true
                                    },
                                    "Event Handling & Delegation": true,
                                    "Bubbling & Capturing": true,
                                    "IntersectionObserver API": true,
                                    "MutationObserver API": true,
                                    "Canvas API": true
                                },

                                "Error Handling & Debugging": {
                                    "Error Types": {
                                        "SyntaxError": true,
                                        "ReferenceError": true,
                                        "TypeError": true,
                                        "RangeError": true
                                    },
                                    "try/catch/finally": true,
                                    "Custom Errors": true,
                                    "Error Boundaries in JS Apps": true,
                                    "Debugging with DevTools": {
                                        "Breakpoints & Watchers": true,
                                        "Performance Tab": true,
                                        "Memory Tab": true
                                    }
                                },

                                "Advanced JavaScript": {
                                    "Modules": {
                                        "Export/Import": true,
                                        "Dynamic Imports": true
                                    },
                                    "Design Patterns": {
                                        "Module Pattern": true,
                                        "Revealing Module Pattern": true,
                                        "Observer Pattern": true,
                                        "Factory Pattern": true,
                                        "Singleton Pattern": true
                                    },
                                    "Iterators & Generators": true,
                                    "Symbol & Well-Known Symbols": {
                                        "Concept": true,
                                        "CIQnA": {
                                            "___urlPath___": "ciqna",
                                            "___md___": 1163
                                        }
                                    },
                                    "Reflect API": true,
                                    "Proxy API": true,
                                    "WeakMap & WeakSet": true
                                },

                                "Performance Optimization": {
                                    "Debounce & Throttle": true,
                                    "Lazy Loading": true,
                                    "Code Splitting": true,
                                    "Tree Shaking": true,
                                    "Reflow vs Repaint": true,
                                    "Memory Leaks & Prevention": true,
                                    "Big-O Analysis for Common JS Ops": true
                                },

                                "JavaScript Internals": {
                                    "Hidden Classes & Inline Caching": true,
                                    "JIT Compilation (Ignition, TurboFan)": true,
                                    "Garbage Collection Algorithms": true,
                                    "Optimizing for V8": true
                                },

                                "Polyfills & Custom Implementations": {
                                    "Custom Array.map": true,
                                    "Custom bind / call / apply": true,
                                    "Custom Promise.all": true,
                                    "Custom Debounce / Throttle": true
                                },

                                "Testing": {
                                    "Unit Testing (Jest, Mocha)": true,
                                    "Integration Testing": true,
                                    "E2E Testing (Cypress, Puppeteer)": true
                                },

                                "JavaScript for Interviews": {
                                    "DSA in JavaScript": {
                                        "Arrays & Strings": true,
                                        "Recursion": true,
                                        "Sliding Window": true,
                                        "Two Pointers": true,
                                        "HashMaps, Sets": true,
                                        "Graphs (BFS/DFS)": true
                                    },
                                    "System Design in JS Context": {
                                        "Frontend Architecture": true,
                                        "Event-driven Systems": true
                                    },
                                    "Tricky JS Questions": {
                                        "Event Loop gotchas": true,
                                        "this binding edge cases": true,
                                        "Closure traps": true
                                    }
                                },
                                "CIQnA": {
                                    "___urlPath___": "ciqna",
                                    "Overview": {
                                        "___urlPath___": "overview",
                                        "___md___": 1153
                                    },
                                    "Question Bank - Part 1": {
                                        "___urlPath___": "q-bank-part-1",
                                        "___md___": 1154
                                    },
                                    "Question Bank - Part 2": {
                                        "___urlPath___": "q-bank-part-2",
                                        "___md___": 1162
                                    },
                                    "Question Bank - Part 3": {
                                        "___urlPath___": "q-bank-part-3",
                                        "___md___": 1164
                                    }
                                }
                            },
                            "TypeScript Deep Dive": {
                                "___urlPath___": "typescript-advanced",

                                "Core TypeScript Foundations": {
                                    "___urlPath___": "core-foundations",
                                    "Type Annotations & Inference": true,
                                    "Primitive vs Reference Types": true,
                                    "Union, Intersection, and Literal Types": true,
                                    "Type Aliases vs Interfaces": true,
                                    "Enums & Const Enums": true,
                                    "Type Assertions & Non-Null Assertions": true,
                                    "Type Narrowing & Control Flow Analysis": true
                                },

                                "Advanced Type System": {
                                    "___urlPath___": "advanced-types",
                                    "Generics (Constraints, Defaults, Inference)": true,
                                    "Mapped Types (Partial, Readonly, Record, etc.)": true,
                                    "Conditional Types & Infer Keyword": true,
                                    "Discriminated Unions": true,
                                    "Utility Types (Pick, Omit, Exclude, Extract)": true,
                                    "Template Literal Types": true,
                                    "Recursive & Deep Types": true
                                },

                                "OOP & Design in TypeScript": {
                                    "___urlPath___": "oop-design",
                                    "Classes & Access Modifiers": true,
                                    "Abstract Classes vs Interfaces": true,
                                    "Inheritance & Polymorphism": true,
                                    "Static vs Instance Members": true,
                                    "Mixins in TypeScript": true
                                },

                                "TypeScript with JavaScript Ecosystem": {
                                    "___urlPath___": "ts-js-ecosystem",
                                    "Interoperability with JS Libraries": true,
                                    "DefinitelyTyped & @types Packages": true,
                                    "Module Resolution & Path Mapping": true,
                                    "CommonJS vs ES Modules in TS": true
                                },

                                "TypeScript in React & Frontend": {
                                    "___urlPath___": "ts-in-react",
                                    "Typing React Props & State": true,
                                    "Function & Class Components Typing": true,
                                    "Typing Hooks (useState, useReducer, useRef)": true,
                                    "Typing Context API": true,
                                    "Typing Events & Forms": true,
                                    "Higher-Order Components & Render Props": true
                                },

                                "Error Handling & Safety": {
                                    "___urlPath___": "error-handling",
                                    "Strict Mode & StrictNullChecks": true,
                                    "Unknown vs Any vs Never": true,
                                    "Exhaustiveness Checking with Never": true,
                                    "Error Boundaries Typing": true
                                },

                                "Compiler & Build Config": {
                                    "___urlPath___": "compiler-build",
                                    "tsconfig.json Deep Dive": true,
                                    "Compiler Options (lib, target, module)": true,
                                    "Incremental & Project References": true,
                                    "Source Maps & Debugging": true
                                },

                                "Testing & Type Safety": {
                                    "___urlPath___": "testing-types",
                                    "Type-Safe Unit Tests with Jest": true,
                                    "Testing Library Typings": true,
                                    "Mocking with TypeScript": true,
                                    "Type-Driven TDD": true
                                },

                                "Interview-Focused Additions": {
                                    "___urlPath___": "interview-focused",
                                    "Type-Level Programming": {
                                        "___urlPath___": "type-level-programming",
                                        "Implement Utility Types from Scratch": true,
                                        "Type Guards & User-Defined Guards": true,
                                        "Function Overloads": true,
                                        "Variadic Tuple Types": true
                                    },
                                    "System Design in TypeScript": {
                                        "___urlPath___": "system-design-ts",
                                        "Designing Type-Safe APIs": true,
                                        "Type-Safe State Management": true,
                                        "Domain Modeling with Types": true
                                    },
                                    "DSA with TypeScript": {
                                        "___urlPath___": "dsa-typescript",
                                        "Arrays & Strings": true,
                                        "Recursion & Backtracking": true,
                                        "Trees & Graphs (BFS, DFS)": true,
                                        "Sliding Window & Two Pointers": true,
                                        "HashMaps, Sets, Stacks, Queues": true,
                                        "Dynamic Programming (Memo, Tabulation)": true,
                                        "LeetCode-style Problem Solving in TS": true
                                    }
                                }
                            }
                        },
                        "Core Frontend Frameworks (React + Ecosystem)": {
                            "React Core & Hooks": {
                                "___urlPath___": "react-core-hooks",
                                "___md___": 9008
                            },
                            "Component Design Patterns": {
                                "___urlPath___": "react-component-patterns",
                                "___md___": 9009
                            },
                            "React Ecosystem (Redux Toolkit, Zustand, etc.)": {
                                "___urlPath___": "react-state-ecosystem",
                                "___md___": 9010
                            },
                            "Next.js, Remix, RSC, SSR/ISR": {
                                "___urlPath___": "next-remix-rsc-ssr",
                                "___md___": 9011
                            },
                            "React Performance & Hydration": {
                                "___urlPath___": "react-performance-hydration",
                                "___md___": 9012
                            },
                            "React SEO & Accessibility": {
                                "___urlPath___": "react-seo-accessibility",
                                "___md___": 9013
                            }
                        },
                        "Modern CSS & Design Systems": {
                            "CSS-in-JS and Utility Frameworks": {
                                "___urlPath___": "css-in-js-tailwind",
                                "___md___": 9014
                            },
                            "Responsive Design (Flexbox, Grid)": {
                                "___urlPath___": "responsive-design",
                                "___md___": 9015
                            },
                            "CSS Architecture & Patterns": {
                                "___urlPath___": "css-architecture-patterns",
                                "___md___": 9016
                            },
                            "Scalable Design Systems (Storybook, Tokens)": {
                                "___urlPath___": "scalable-design-systems",
                                "___md___": 9017
                            }
                        },
                        "Frontend Architecture & Patterns": {
                            "Modular Monoliths vs Micro Frontends": {
                                "___urlPath___": "monolith-vs-microfrontends",
                                "___md___": 9018
                            },
                            "Module Federation, Nx, Turborepo": {
                                "___urlPath___": "module-federation-nx-turbo",
                                "___md___": 9019
                            },
                            "Clean Architecture & Folder Structure": {
                                "___urlPath___": "frontend-architecture-clean",
                                "___md___": 9020
                            },
                            "Reusable Hooks and Composables": {
                                "___urlPath___": "custom-hooks-composables",
                                "___md___": 9021
                            }
                        },
                        "Data Fetching & API Integration": {
                            "REST, GraphQL, tRPC, gRPC": {
                                "___urlPath___": "api-types-overview",
                                "___md___": 1147
                            },
                            "Axios, Fetch, Caching, Retry, SWR": {
                                "___urlPath___": "api-fetching-tools",
                                "___md___": 1148
                            },
                            "API Mocking & Swagger": {
                                "___urlPath___": "api-mocking-swagger",
                                "___md___": 9024
                            }
                        },
                        "Performance Optimization": {
                            "Web Vitals & Lighthouse": {
                                "___urlPath___": "web-vitals-lighthouse",
                                "___md___": 9025
                            },
                            "Code Splitting & Tree Shaking": {
                                "___urlPath___": "code-splitting-tree-shaking",
                                "___md___": 9026
                            },
                            "CDN, Image, Font Optimization": {
                                "___urlPath___": "cdn-image-font-optimization",
                                "___md___": 9027
                            },
                            "React Render Optimization": {
                                "___urlPath___": "react-render-optimization",
                                "___md___": 9028
                            }
                        },
                        "Testing & Quality Engineering": {
                            "Unit Testing (Jest, Vitest)": {
                                "___urlPath___": "unit-testing-jest-vitest",
                                "___md___": 9029
                            },
                            "Component Testing (RTL, Enzyme)": {
                                "___urlPath___": "component-testing",
                                "___md___": 9030
                            },
                            "E2E Testing (Playwright, Cypress)": {
                                "___urlPath___": "e2e-testing",
                                "___md___": 9031
                            },
                            "Visual Regression & Snapshot": {
                                "___urlPath___": "visual-regression-snapshot",
                                "___md___": 9032
                            }
                        },
                        "Tooling & Dev Workflow": {
                            "Monorepos, Nx, Turborepo": {
                                "___urlPath___": "tooling-monorepos",
                                "___md___": 9033
                            },
                            "Linting & Formatting": {
                                "___urlPath___": "linting-formatting",
                                "___md___": 9034
                            },
                            "Docker & Local Dev Tools": {
                                "___urlPath___": "docker-local-dev",
                                "___md___": 9035
                            },
                            "MDX, Scripts, CLI Tools": {
                                "___urlPath___": "mdx-cli-scripts",
                                "___md___": 9036
                            }
                        },
                        "CI/CD & DevOps Integration": {
                            "CI Pipelines & Deployments": {
                                "___urlPath___": "ci-cd-pipelines",
                                "___md___": 9037
                            },
                            "Hosting (Vercel, Netlify, Firebase)": {
                                "___urlPath___": "frontend-hosting",
                                "___md___": 9038
                            },
                            "Env Mgmt & Feature Flags": {
                                "___urlPath___": "env-feature-flags",
                                "___md___": 9039
                            }
                        },
                        "Security for Frontend": {
                            "Frontend Threats (XSS, CSRF)": {
                                "___urlPath___": "frontend-security-threats",
                                "___md___": 9040
                            },
                            "CORS, Cookies, Headers": {
                                "___urlPath___": "cors-cookies-headers",
                                "___md___": 9041
                            },
                            "Secure Storage & Sanitization": {
                                "___urlPath___": "secure-storage-sanitization",
                                "___md___": 1146
                            }
                        },
                        "Frontend System Design": {
                            "SPA/MPA Design & Trade-offs": {
                                "___urlPath___": "spa-mpa-system-design",
                                "___md___": 9043
                            },
                            "Large Scale Component System": {
                                "___urlPath___": "large-component-system",
                                "___md___": 9044
                            },
                            "Image/Video-heavy UI Design": {
                                "___urlPath___": "media-heavy-ui",
                                "___md___": 9045
                            },
                            "Fallback UI & Resilience": {
                                "___urlPath___": "fallback-ui-resilience",
                                "___md___": 9046
                            }
                        },
                        "Soft Skills & Leadership": {
                            "Team Mentorship & Onboarding": {
                                "___urlPath___": "mentorship-onboarding",
                                "___md___": 9047
                            },
                            "Reviews & Grooming": {
                                "___urlPath___": "code-design-review-grooming",
                                "___md___": 9048
                            },
                            "Agile & Cross-team Communication": {
                                "___urlPath___": "agile-communication",
                                "___md___": 9049
                            },
                            "Tech Decision Making": {
                                "___urlPath___": "tech-decision-leadership",
                                "___md___": 9050
                            }
                        },
                        "Optional: Mobile & Native-like Frontend": {
                            "React Native & Expo": {
                                "___urlPath___": "react-native-expo",
                                "___md___": 9051
                            },
                            "PWAs & WebAssembly": {
                                "___urlPath___": "pwa-webassembly",
                                "___md___": 9052
                            },
                            "Capacitor & Cordova": {
                                "___urlPath___": "capacitor-cordova",
                                "___md___": 9053
                            }
                        }
                    }


                },
                "HTML, CSS, and JavaScript Basics": {
                    "HTML Basics": {
                        "Structure of an HTML Document": true,
                        "Semantic HTML Elements": true,
                        "Forms and Input Types": true,
                        "HTML5 Features (Canvas, Audio, Video)": true
                    },
                    "CSS Basics": {
                        "Selectors and Specificity": true,
                        "Box Model": true,
                        "Positioning and Layout": {
                            "Flexbox": true,
                            "Grid": true
                        },
                        "Media Queries and Responsive Design": true
                    },
                    "JavaScript Basics": {
                        "Data Types and Variables": true,
                        "Functions and Scope": true,
                        "DOM Manipulation": true,
                        "Events and Event Handling": true,
                        "Promises and Async/Await": true,
                        "Debouncing and Throttling": {
                            "___urlPath___": "debouncing-and-throttling",
                            "___md___": 117
                        }
                    }
                },
                "Advanced JavaScript (ES6+)": {
                    "Arrow Functions": true,
                    "Destructuring and Spread Operators": true,
                    "Modules and Imports/Exports": true,
                    "Classes and Inheritance": true,
                    "Closures and Lexical Scope": true,
                    "Async Iterators and Generators": true
                },
                "Frameworks: React": {
                    "Contents": {
                        "___urlPath___": "contents",
                        "___md___": 484
                    },
                    "Introduction to React": {
                        "What is React?": true,
                        "JSX and Virtual DOM": true,
                        "Creating React Components": true
                    },
                    "React Hooks": {
                        "useState and useEffect": true,
                        "useContext and Context API": true,
                        "useReducer for State Management": true,
                        "Custom Hooks": true
                    },
                    "React Routing": {
                        "React Router Basics": true,
                        "Dynamic Routing": true,
                        "Protected Routes": true
                    },
                    "React Performance Optimization": {
                        "Memoization with React.memo and useMemo": true,
                        "Code Splitting with React.lazy and Suspense": true,
                        "Avoiding Re-renders": true
                    },
                    "React Ecosystem": {
                        "State Management Libraries": {
                            "Redux": true,
                            "MobX": true,
                            "Zustand": true
                        },
                        "Styling Libraries": {
                            "Styled Components": true,
                            "CSS Modules": true,
                            "Tailwind CSS": true
                        },
                        "Form Handling Libraries": {
                            "Formik": true,
                            "React Hook Form": true
                        }
                    }
                },
                "Responsive Design and CSS Frameworks (React Focused)": {
                    "CSS Frameworks": {
                        "Bootstrap": true,
                        "Tailwind CSS": true,
                        "Material-UI": true
                    },
                    "Responsive Design": {
                        "Media Queries with Styled Components": true,
                        "Responsive Typography and Grids": true
                    }
                },
                "State Management": {
                    "React Context API": true,
                    "Redux Basics": {
                        "Actions, Reducers, and Store": true,
                        "Middleware (Redux Thunk, Redux Saga)": true
                    },
                    "React Query (Server State Management)": true
                },
                "Testing Tools": {
                    "Unit Testing with Jest": {

                        "Unit Testing in React": {
                            "Introduction to Unit Testing": {
                                "What is Unit Testing?": {
                                    "___urlPath___": "what-is-unit-testing",
                                    "___md___": 291
                                },
                                "Why Unit Testing in React?": {
                                    "___urlPath___": "why-unit-testing-in-react",
                                    "___md___": 292
                                },
                                "Overview of Jest and React Testing Library (RTL)": {
                                    "___urlPath___": "overview-jest-react-testing-library",
                                    "___md___": 293
                                },
                                "Setting Up a Test Environment": {
                                    "___urlPath___": "setup-test-environment",
                                    "___md___": 294
                                }
                            },
                            "Jest Basics": {
                                "Installing Jest and Configuring It": {
                                    "___urlPath___": "jest-installation-configuration",
                                    "___md___": 295
                                },
                                "Understanding Test Suites and Test Cases": {
                                    "___urlPath___": "jest-test-suites",
                                    "___md___": 296
                                },
                                "Assertions and Matchers in Jest": {
                                    "___urlPath___": "jest-matchers-assertions",
                                    "___md___": 297
                                },
                                "Testing Primitive JavaScript Functions": {
                                    "___urlPath___": "jest-testing-functions",
                                    "___md___": 298
                                }
                            },
                            "React Testing Library (RTL)": {
                                "Why Use React Testing Library?": {
                                    "___urlPath___": "rtl-overview",
                                    "___md___": 299
                                },
                                "Rendering Components for Testing": {
                                    "___urlPath___": "rtl-rendering-components",
                                    "___md___": 300
                                },
                                "Querying Elements": {
                                    "getBy, queryBy, findBy Methods": {
                                        "___urlPath___": "rtl-query-methods",
                                        "___md___": 301
                                    },
                                    "getAllBy, queryAllBy, findAllBy Methods": {
                                        "___urlPath___": "rtl-query-multiple-elements",
                                        "___md___": 302
                                    }
                                },
                                "Simulating User Events": {
                                    "Using fireEvent": {
                                        "___urlPath___": "rtl-fireevent",
                                        "___md___": 303
                                    },
                                    "Using userEvent for Simulating User Actions": {
                                        "___urlPath___": "rtl-userevent",
                                        "___md___": 304
                                    }
                                },
                                "Asynchronous Testing": {
                                    "Waiting for Elements to Appear": {
                                        "___urlPath___": "rtl-async-tests",
                                        "___md___": 305
                                    }
                                }
                            },
                            "Mocking and Stubbing": {
                                "Mocking API Calls with Jest": {
                                    "___urlPath___": "jest-mocking-api",
                                    "___md___": 306
                                },
                                "Mocking External Libraries": {
                                    "___urlPath___": "jest-mocking-external-libraries",
                                    "___md___": 307
                                },
                                "Mocking React Hooks (useState, useEffect)": {
                                    "___urlPath___": "jest-mocking-react-hooks",
                                    "___md___": 308
                                },
                                "Mocking Redux and React Context": {
                                    "___urlPath___": "jest-mocking-redux-context",
                                    "___md___": 309
                                }
                            },
                            "Advanced Jest Features": {
                                "Spying on Functions": {
                                    "___urlPath___": "jest-spy-functions",
                                    "___md___": 310
                                },
                                "Using Fake Timers for setTimeout and setInterval": {
                                    "___urlPath___": "jest-fake-timers",
                                    "___md___": 311
                                },
                                "Code Coverage Analysis": {
                                    "___urlPath___": "jest-code-coverage",
                                    "___md___": 312
                                }
                            },
                            "Testing Component Behaviors": {
                                "Testing Forms and Input Fields": {
                                    "___urlPath___": "rtl-testing-forms",
                                    "___md___": 313
                                },
                                "Testing Conditional Rendering": {
                                    "___urlPath___": "rtl-testing-conditional-rendering",
                                    "___md___": 314
                                },
                                "Testing Navigation with React Router": {
                                    "___urlPath___": "rtl-testing-react-router",
                                    "___md___": 315
                                }
                            },
                            "Integration Testing with Jest": {
                                "Testing API Calls in Components": {
                                    "___urlPath___": "rtl-api-testing",
                                    "___md___": 320
                                },
                                "Testing State Management (Redux, Context API)": {
                                    "___urlPath___": "rtl-redux-context-testing",
                                    "___md___": 321
                                }
                            },
                            "Snapshot Testing": {
                                "What is Snapshot Testing?": {
                                    "___urlPath___": "jest-snapshot-testing",
                                    "___md___": 322
                                },
                                "Updating Snapshots": {
                                    "___urlPath___": "jest-updating-snapshots",
                                    "___md___": 323
                                }
                            },
                            "End-to-End Testing Integration": {
                                "Combining Jest with Cypress": {
                                    "___urlPath___": "jest-cypress-integration",
                                    "___md___": 324
                                },
                                "Best Practices for Full Test Coverage": {
                                    "___urlPath___": "jest-best-practices",
                                    "___md___": 325
                                }
                            },
                            "Best Practices and Optimization": {
                                "Structuring Test Files and Naming Conventions": {
                                    "___urlPath___": "jest-test-structure",
                                    "___md___": 326
                                },
                                "Optimizing Test Performance": {
                                    "___urlPath___": "jest-optimizing-performance",
                                    "___md___": 327
                                },
                                "Common Pitfalls and Debugging Tips": {
                                    "___urlPath___": "jest-debugging-tips",
                                    "___md___": 328
                                }
                            }
                        }
                    },
                    "Component Testing with React Testing Library": true,
                    "End-to-End Testing with Cypress": true
                },
                "Frontend Debugging & Profiling": {
                    "___urlPath___": "frontend-debugging-profiling",
                    "Chrome DevTools": {
                        "___urlPath___": "chrome-devtools",
                        "Getting Started": {
                            "___urlPath___": "getting-started",
                            "Opening DevTools": true,
                            "Docking and Undocking Panels": true,
                            "Shortcuts and UI Navigation": true,
                            "Command Menu (⌘+Shift+P / Ctrl+Shift+P)": true
                        },
                        "Elements Panel": {
                            "___urlPath___": "elements-panel",
                            "Inspecting DOM Tree": true,
                            "Live Editing HTML/CSS": true,
                            "Box Model and Computed Styles": true,
                            "Force Element State (:hover, :active, :focus)": true,
                            "CSS Breakpoints": true,
                            "DOM Breakpoints": true,
                            "Color Picker, Fonts, Layout Tools": true
                        },
                        "Console Panel": {
                            "___urlPath___": "console-panel",
                            "Console Logging and Filtering": true,
                            "Command Line API ($0, $$, $_)": true,
                            "Console.table(), console.dir()": true,
                            "Preserve Log on Navigation": true,
                            "Execution Context": true
                        },
                        "Sources Panel": {
                            "___urlPath___": "sources-panel",
                            "File Navigation and Search (⌘+P)": true,
                            "JavaScript Debugging (Breakpoints, Step Over, Step In)": true,
                            "Scope, Watch, and Call Stack": true,
                            "Async Call Stack and Promises": true,
                            "Snippets (Reusable Code)": true,
                            "Live Edit JS and Save Overrides": true,
                            "Pretty Print Minified Code": true,
                            "Blackboxing Scripts": true
                        },
                        "Network Panel": {
                            "___urlPath___": "network-panel",
                            "Request/Response Headers": true,
                            "Status Codes and Timing Breakdown": true,
                            "XHR/Fetch Monitoring": true,
                            "Throttling (Slow 3G, Offline)": true,
                            "Blocking Requests": true,
                            "Initiator and Dependency Chains": true,
                            "WebSocket and SSE Inspection": true
                        },
                        "Performance Panel": {
                            "___urlPath___": "performance-panel",
                            "Recording and Analyzing Frames": true,
                            "Main Thread vs Render Thread": true,
                            "FPS and CPU Time Breakdown": true,
                            "Long Tasks and Bottlenecks": true,
                            "Web Vitals (FID, LCP, CLS)": true,
                            "Flame Charts and Call Trees": true
                        },
                        "Memory Panel": {
                            "___urlPath___": "memory-panel",
                            "Heap Snapshot": true,
                            "Allocation Instrumentation": true,
                            "Detecting Memory Leaks": true,
                            "Garbage Collection Triggers": true,
                            "Detached DOM Trees": true,
                            "JS Object Retainers Graph": true
                        },
                        "Application Panel": {
                            "___urlPath___": "application-panel",
                            "Local Storage, Session Storage": true,
                            "IndexedDB, Web SQL": true,
                            "Cookies Viewer & Editor": true,
                            "Manifest and Service Workers": true,
                            "Cache Storage and Application Cache": true,
                            "Background Sync and Push Messages": true
                        },
                        "Security Panel": {
                            "___urlPath___": "security-panel",
                            "HTTPS Certificate Chain Inspection": true,
                            "Mixed Content Warnings": true,
                            "Content Security Policy (CSP)": true
                        },
                        "Lighthouse Panel": {
                            "___urlPath___": "lighthouse-panel",
                            "Performance Audits": true,
                            "Accessibility, SEO, Best Practices": true,
                            "Progressive Web App (PWA) Checks": true,
                            "Custom Configuration and Categories": true
                        },
                        "Mobile & Responsive Tools": {
                            "___urlPath___": "responsive-tools",
                            "Device Toolbar and Emulation": true,
                            "Geolocation and Device Sensors": true,
                            "Touch and Orientation Emulation": true,
                            "Network Conditions and User-Agent Overrides": true
                        },
                        "Advanced Debugging": {
                            "___urlPath___": "advanced-debugging",
                            "Event Listeners and Event Breakpoints": true,
                            "Async Stack Traces": true,
                            "Custom Object Formatters": true,
                            "Instrumentation Breakpoints (e.g. fetch)": true,
                            "WebAssembly Debugging Support": true,
                            "Framework-specific DevTools (React, Angular hooks)": true
                        },
                        "Customization & Experiments": {
                            "___urlPath___": "customization",
                            "Dark Mode and Theme Settings": true,
                            "Experiments Tab and Beta Features": true,
                            "Custom Shortcuts and Workspace Mapping": true,
                            "Overrides and Persistent Workspace Sync": true
                        },
                        "Integration with CI/CD": {
                            "___urlPath___": "ci-cd-integration",
                            "Lighthouse CI and DevTools Protocol": true,
                            "Performance Budget Testing": true,
                            "Remote Debugging with Chrome Headless": true,
                            "Chrome DevTools Protocol (CDP) Automation": true
                        }
                    },
                    "React Profiler": true,
                    "Network Monitoring Tools": true,
                    "Memory Leak Detection": true,
                    "VSCode Debugger": true,
                    "Source Maps & Error Tracking": true,
                    "Lighthouse Audits": true,
                    "Web Vitals Monitoring": true,
                    "Bundle Analyzer": true
                },
                "Performance Optimization Techniques": {
                    "Lazy Loading Components": true,
                    "Memoization": true,
                    "Tree Shaking and Code Splitting": true,
                    "Analyzing Bundle Size with Webpack Analyzer": true
                },
                "Accessibility and SEO": {
                    "ARIA Roles and Labels": true,
                    "Keyboard Navigation": true,
                    "Meta Tags and Open Graph Protocol": true,
                    "Server-Side Rendering (Next.js)": true,
                    "Core Web Vitals Optimization": true
                },
                "Build Tools": {
                    "___urlPath___": "Build Tools",
                    "Webpack": {
                        "Introduction to Webpack": {
                            "___urlPath___": "introduction-to-webpack",
                            "___md___": 803
                        },
                        "Core Concepts": {
                            "___urlPath___": "core-concepts",
                            "Entry and Output": {
                                "___urlPath___": "entry-and-output",
                                "___md___": 804
                            },
                            "Loaders": {
                                "___urlPath___": "loaders",
                                "___md___": 805
                            },
                            "Plugins": {
                                "___urlPath___": "plugins",
                                "___md___": 806
                            },
                            "Mode (development, production)": true,
                            "Devtool (Source Maps)": {
                                "___urlPath___": "devtool-source-maps",
                                "___md___": 819
                            }
                        },
                        "Module Bundling": {
                            "Understanding Dependency Graph": true,
                            "Static vs Dynamic Imports": {
                                "___urlPath___": "static-vs-dynamic-imports",
                                "___md___": 807
                            },
                            "Code Splitting": {
                                "___urlPath___": "code-splitting",
                                "Entry Points Splitting": {
                                    "___urlPath___": "entry-points-splitting",
                                    "___md___": 808
                                },
                                "Dynamic Imports with `import()`": {
                                    "___urlPath___": "dynamic-import",
                                    "___md___": 809
                                },
                                "Vendor Splitting": {
                                    "___urlPath___": "vendor-splitting",
                                    "___md___": 818
                                }
                            }
                        },
                        "Loaders and Transpilation": {
                            "JavaScript Loaders (e.g. Babel)": true,
                            "CSS Loaders (style-loader, css-loader)": true,
                            "File Loaders (images, fonts)": true,
                            "Custom Loaders": true
                        },
                        "Plugins": {
                            "HTMLWebpackPlugin": true,
                            "DefinePlugin": true,
                            "MiniCssExtractPlugin": true,
                            "CleanWebpackPlugin": true,
                            "HotModuleReplacementPlugin": true
                        },
                        "Dev Server & Live Reload": {
                            "webpack-dev-server": true,
                            "Hot Module Replacement (HMR)": true,
                            "Live Reloading": true
                        },
                        "Optimization": {
                            "Tree Shaking": {
                                "___urlPath___": "tree-shaking",
                                "___md___": 810
                            },
                            "Minification": {
                                "TerserPlugin for JS": {
                                    "___urlPath___": "terserplugin-for-js",
                                    "___md___": 811
                                },
                                "CSS Minimizer Plugin": true
                            },
                            "Caching and Content Hashing": {
                                "___urlPath___": "caching-and-content-hashing",
                                "___md___": 812
                            }
                        },
                        "Advanced Topics": {
                            "Environment Variables with DefinePlugin": true,
                            "Multiple Configurations": true,
                            "Merging Configs with `webpack-merge`": true,
                            "Monorepos & Webpack": {
                                "___urlPath___": "monorepos-and-webpack",
                                "___md___": 813
                            }
                        },
                        "Integration with Other Tools": {
                            "___urlPath___": "integration-with-other-tools",
                            "Babel": true,
                            "ESLint": true,
                            "TypeScript": true,
                            "React & Webpack Setup": {
                                "___urlPath___": "react-and-webpack-setup",
                                "___md___": 814
                            },
                            "Vue & Webpack Setup": true
                        },
                        "Webpack 5 Features": {
                            "Module Federation": {
                                "Introduction to Module Federation": true,
                                "Why Module Federation?": {
                                    "Limitations of Traditional Micro Frontends": true,
                                    "Benefits over npm Package Sharing": true
                                },
                                "Core Concepts": {
                                    "Host and Remote": true,
                                    "Shared Modules": true,
                                    "Exposes and Remotes": true,
                                    "Federated Modules vs Bundled Modules": true
                                },
                                "Configuration & Syntax": {
                                    "Basic Setup in webpack.config.js": true,
                                    "ModuleFederationPlugin": true,
                                    "Exposing Components/Modules": true,
                                    "Consuming Remote Components": true,
                                    "Shared Dependencies": true
                                },
                                "Runtime Behavior": {
                                    "Dynamic Loading of Remotes": true,
                                    "Version Conflicts and Resolutions": true,
                                    "Caching and Invalidations": true
                                },
                                "Deployment Strategies": {
                                    "Static vs Dynamic Remote URLs": true,
                                    "PublicPath Configuration": true,
                                    "CDN-Based Remote Deployment": true
                                },
                                "Advanced Usage": {
                                    "Federated Routing with React Router": true,
                                    "TypeScript Integration": true,
                                    "Environment Variable Handling": true,
                                    "Multiple Remotes and Nested Remotes": true,
                                    "Building Federated Design Systems": true
                                },
                                "Use Cases and Architecture Patterns": {
                                    "Micro Frontends": true,
                                    "Multi-Team Development": true,
                                    "Independent Deployability": true,
                                    "Shared Auth / Header / Footer": true
                                },
                                "Common Tools & Ecosystem": {
                                    "webpack ModuleFederationPlugin": true,
                                    "module-federation/webpack plugin utilities": true,
                                    "vite-module-federation": true,
                                    "Nx + Module Federation": true
                                },
                                "Module Federation in React": {
                                    "React Setup Example": true,
                                    "Shared Context and State": true,
                                    "React Refresh / HMR Support": true
                                },
                                "Testing Federated Modules": {
                                    "Unit Testing with Jest": true,
                                    "End-to-End Testing (Cypress / Playwright)": true,
                                    "Mocking Remotes for Testing": true
                                },
                                "Production Considerations": {
                                    "Bundle Splitting and Size Optimization": true,
                                    "Security (Exposing Only What’s Needed)": true,
                                    "Monitoring Remote Availability": true
                                },
                                "Troubleshooting and Debugging": {
                                    "Common Errors (404 Remotes, Version Mismatch)": true,
                                    "Module Sharing Issues": true,
                                    "Runtime Loading Failures": true
                                },
                                "Alternatives and Comparisons": {
                                    "SystemJS": true,
                                    "Single-SPA": true,
                                    "Import Maps (ES Modules in Browsers)": true
                                },
                                "Real-World Examples": {
                                    "E-commerce with Federated Product Pages": true,
                                    "Admin Dashboards with Shared Widgets": true,
                                    "Micro Frontends in Enterprise Projects": true
                                },
                                "Module Federation 2": {
                                    "___urlPath___": "module-federation-2",
                                    "___md___": 821
                                },
                                "Migration from Module Federation 1 to Module Federation 2": {
                                    "___urlPath___": "migration-to-module-federation2",
                                    "___md___": 822
                                },
                                "Benefits of Migration and How to Track": {
                                    "___urlPath___": "benefits-of-module-federation2-migration",
                                    "___md___": 823
                                }
                            }
                            ,
                            "Persistent Caching": true,
                            "Asset Modules (replacing file-loader/url-loader)": true
                        },
                        "Troubleshooting and Best Practices": {
                            "___urlPath___": "troubleshooting-and-best-practices",
                            "Common Errors and Debugging": {
                                "___urlPath___": "common-errors-and-debugging",
                                "___md___": 815
                            },
                            "Performance Tuning": {
                                "___urlPath___": "performance-tuning",
                                "___md___": 816
                            },
                            "Analyzing Bundle Size with `webpack-bundle-analyzer`": {
                                "___urlPath___": "analyzing-bundle-size-with-webpack-bundle-analyzer",
                                "___md___": 817
                            }
                        },
                        "Performance Monitoring": {
                            "Bundle Size Budgets": true,
                            "webpack --profile and --json": true,
                            "webpack-bundle-analyzer Deep Dive": true,
                            "Web Vitals Impact (TTFB, FCP)": true
                        },
                        "Migration Strategies": {
                            "___urlPath___": "migration-strategies",
                            "Migrating from Webpack 4 to 5": {
                                "___urlPath___": "migrating-from-webpack-4-to-5",
                                "___md___": 820
                            },
                            "Replacing file-loader/url-loader with Asset Modules": true,
                            "Handling Deprecated Plugins or APIs": true
                        },
                        "Security Considerations": {
                            "Exposed Remotes Hardening": true,
                            "Webpack with CSP (Content Security Policy)": true,
                            "Avoiding Untrusted Dynamic Imports": true
                        },
                        "SSR with Webpack": {
                            "React SSR Setup with Webpack": true,
                            "Lazy Loading in SSR Context": true,
                            "Streaming + Webpack for Partial Hydration": true
                        },
                        "Legacy Support": {
                            "Polyfill Management": true,
                            "Targeting Browserslist and Compatibility": true
                        },
                        "CI/CD Integration": {
                            "Running Webpack in CI Pipelines": true,
                            "Caching Webpack Builds in CI": true,
                            "Deploying Remotes from CI to CDN": true
                        }
                    }
                    ,
                    "Parcel": true,
                    "Vite": true
                },
                "Microfrontend": {
                    "___urlPath___": "microfrontend",
                    "Introduction to Microfrontends": {
                        "___urlPath___": "introduction-to-microfrontend",
                        "What are Microfrontends?": {
                            "___urlPath___": "what-are-microfrontend",
                            "___md___": 278
                        },
                        "Benefits and Use Cases": {
                            "___urlPath___": "benefits-usecases",
                            "___md___": 279
                        },
                        "Challenges in Microfrontend Architecture": {
                            "___urlPath___": "challenges-microfrontend-architecture",
                            "___md___": 280
                        }
                    },
                    "Microfrontend Design Approaches": {
                        "___urlPath___": "microfrontend-design-approaches",
                        "Horizontal Split": {
                            "___urlPath___": "horizontal-split",
                            "___md___": 683
                        },
                        "Vertical Split": {
                            "___urlPath___": "vertical-split",
                            "___md___": 684
                        },
                        "Component-level Integration": {
                            "___urlPath___": "component-level-integration",
                            "___md___": 685
                        },
                        "Domain-Driven Design (DDD)": {
                            "___urlPath___": "domain-driven-design-ddd",
                            "___md___": 686
                        },
                        "Fragment-based Rendering (ESI, SSR Chunks)": {
                            "___urlPath___": "fragment-based-rendering",
                            "___md___": 687
                        },
                        "Backend-for-Frontend (BFF) Pattern": {
                            "___urlPath___": "backend-for-frontend-bff-pattern",
                            "___md___": 688
                        },
                        "When to Use What?": {
                            "___urlPath___": "when-to-use-what",
                            "___md___": 689
                        }
                    },
                    "Microfrontend Frameworks and Tools": {
                        "___urlPath___": "frameworks-tools",
                        "Webpack Module Federation": {
                            "___urlPath___": "webpack-module-federation",
                            "___md___": 690
                        },
                        "Single-SPA": {
                            "___urlPath___": "single-spa",
                            "___md___": 691
                        },
                        "Bit.dev": {
                            "___urlPath___": "bit-dev",
                            "___md___": 692
                        },
                        "Nx Monorepo": {
                            "___urlPath___": "nx-monorepo",
                            "___md___": 693
                        },
                        "Turborepo": {
                            "___urlPath___": "turborepo",
                            "___md___": 694
                        },
                        "Other tools": {
                            "___urlPath___": "other-tools",
                            "Lerna": {
                                "___urlPath___": "lerna",
                                "___md___": 695
                            },
                            "Husky": {
                                "___urlPath___": "husky",
                                "___md___": 696
                            },
                            "CRACO": {
                                "___urlPath___": "craco",
                                "___md___": 697
                            }
                        }
                    },
                    "Building Microfrontend Applications": {
                        "___urlPath___": "building-microfrontend-apps",
                        "Setting Up Module Federation with Webpack": {
                            "___urlPath___": "setting-up-module-federation-with-webpack",
                            "___md___": 698
                        },
                        "Sharing Dependencies Between Microfrontends": {
                            "___urlPath___": "sharing-dependencies-between-microfrontends",
                            "___md___": 699
                        },
                        "Handling Routing in Microfrontend Applications": {
                            "___urlPath___": "handling-routing-in-microfrontend-application",
                            "___md___": 700
                        },
                        "Inter-Microfrontend Communication": {
                            "___urlPath___": "inter-microfrontend-communication",
                            "___md___": 701
                        },
                        "Dynamic Remote Integration": {
                            "___urlPath___": "dynamic-remote-integration",
                            "___md___": 702
                        },
                        "Next.js with Module Federation": {
                            "___urlPath___": "next-js-with-module-federation",
                            "___md___": 703
                        },
                        "Shared State Management (Redux/Context)": {
                            "___urlPath___": "shared-state-management-redux-context",
                            "___md___": 704
                        },
                        "Lazy Loading and Bundle Splitting": {
                            "___urlPath___": "lazy-loading-and-bundle-splitting",
                            "___md___": 705
                        }
                    },
                    "Deploying Microfrontends": {
                        "___urlPath___": "deploying-microfrontends",
                        "Independent Deployment Strategies": true,
                        "Versioning and Backward Compatibility": true,
                        "Using CI/CD Pipelines for Microfrontend Deployment": true,
                        "Rollback and Feature Flag Strategies": true
                    },
                    "Security and Isolation": {
                        "___urlPath___": "security-and-isolation",
                        "Sandboxing and Iframe Isolation": true,
                        "Cross-Origin CSP Headers": true,
                        "Secure Token Sharing": true
                    },
                    "Testing in Microfrontends": {
                        "___urlPath___": "testing-microfrontends",
                        "Contract Testing (PACT)": true,
                        "End-to-End Testing Across MFEs": true,
                        "Mocking Remote MFEs": true
                    },
                    "Performance Optimization": {
                        "___urlPath___": "performance-optimization",
                        "Tree Shaking and Code Splitting": true,
                        "Remote Module Caching": true,
                        "CDN Usage for RemoteEntry": true
                    },
                    "Team Collaboration and Governance": {
                        "___urlPath___": "team-collab-governance",
                        "Design System Integration": true,
                        "Ownership Boundaries": true,
                        "Linting and Code Standards per Remote": true
                    },
                    "Real-World Case Studies": {
                        "___urlPath___": "real-world-case-studies",
                        "Amazon MFE Architecture": true,
                        "Netflix MFE Strategy": true,
                        "Uber Microfrontend Learnings": true,
                        "Failure Handling and Fallback UI": true
                    }
                },
                "Interview-Focused Additions": {
                    "___urlPath___": "interview-focused",

                    "JavaScript DSA for Frontend Interviews": {
                        "___urlPath___": "js-dsa-frontend",
                        "Arrays & Strings": true,
                        "Recursion & Backtracking": true,
                        "Trees & Graphs (BFS, DFS)": true,
                        "Sliding Window & Two Pointers": true,
                        "HashMaps, Sets, Stacks, Queues": true,
                        "Dynamic Programming (Memo, Tabulation)": true,
                        "LeetCode-style Problem Solving in JS": true
                    },

                    "Behavioral Questions (Enterprise Bar Raiser)": {
                        "___urlPath___": "Enterprise-behavioral",
                        "STAR Framework": true,
                        "Handling Failure and Conflict": true,
                        "Leading Teams and Projects": true,
                        "Decision Making Under Pressure": true,
                        "Metrics, Impact, and Ownership Stories": true
                    },

                    "System Design UI Coding Patterns": {
                        "___urlPath___": "system-design-ui",
                        "Infinite Scroll with Caching": true,
                        "Drag-and-Drop with Accessibility": true,
                        "Async Dropdown with Debounce": true,
                        "Responsive Table with Filters & Sort": true,
                        "Shared State & Microfrontend Communication": true
                    },

                    "React Internals (Low-Level Rendering)": {
                        "___urlPath___": "react-internals",
                        "React Fiber Architecture": true,
                        "Concurrent Mode and Batching": true,
                        "Memoization Pitfalls": true,
                        "Reconciliation Process": true,
                        "Suspense and Lazy Hydration": true
                    },

                    "Real-World A11Y (Accessibility)": {
                        "___urlPath___": "a11y-implementation",
                        "Focus Trap in Modals": true,
                        "Screen Reader Text (`sr-only`)": true,
                        "aria-live Regions": true,
                        "Accessible Forms & Validation": true,
                        "WCAG Guidelines & Testing Tools": true
                    },

                    "Mobile Web Performance Audits": {
                        "___urlPath___": "mobile-performance",
                        "3G/Low-End Device Simulation": true,
                        "FID, LCP, CLS on Mobile": true,
                        "Web.dev & PageSpeed Insights": true,
                        "Performance Budgets": true,
                        "Lighthouse CI in GitHub Actions": true
                    }
                }

            },
            "Full Stack Integration": {
                "___urlPath___": "web-technology",
                "What a Web Full Stack Architect (FSE) must know!": {
                    "___urlPath___": "web-full-stack-architect-fse-must-know",
                    "___md___": 400
                },
                "Basics of Web Development": {
                    "___urlPath___": "basics-of-web-development",
                    "Introduction to Web Technology": {
                        "___urlPath___": "introduction-to-web-technology",
                        "History of the Web": {
                            "___urlPath___": "history-of-the-web",
                            "___md___": 62
                        },
                        "How the Web Works (HTTP, DNS, URL)": {
                            "___urlPath___": "how-the-web-works",
                            "___md___": 63
                        },
                        "Web Browsers and Servers": {
                            "___urlPath___": "web-browsers-and-servers",
                            "___md___": 64
                        },
                        "Case Studies": {
                            "___urlPath___": "case-studies",
                            "Understanding GitHub Pages + Custom Domain Mapping (with HTTPS)": {
                                "___urlPath___": "understanding-github-pages-custom-domain-mapping",
                                "___md___": 926
                            }
                        }
                    },
                    ...HTML,
                    ...CSS
                },
                "Client-Side Scripting": {
                    "___urlPath___": "client-side-scripting",
                    "JavaScript": {
                        "___urlPath___": "javascript",
                        "Introduction to JavaScript": {
                            "___urlPath___": "introduction-to-javascript",
                            "What is JavaScript?": {
                                "___urlPath___": "what-is-javascript",
                                "___md___": 443
                            },
                            "History and Evolution": true,
                            "Language Translators: Compiler, Interpreter, Assembler": {
                                "___urlPath___": "language-translators-compiler-interpreter-assembler",
                                "___md___": 444
                            },
                            "JavaScript Engines": {
                                "V8 Engine": true,
                                "SpiderMonkey": true
                            },
                            "Setting up the Environment": {
                                "Browser Console": true,
                                "Code Editors": true,
                                "Online IDEs": true
                            }
                        },
                        "Basic Concepts": {
                            "___urlPath___": "basic-concepts",
                            "Variables and Constants": {
                                "var, let, const": true,
                                "Hoisting": true
                            },
                            "Data Types": {
                                "Primitive Types": {
                                    "String": true,
                                    "Number": true,
                                    "Boolean": true,
                                    "Undefined": true,
                                    "Null": true,
                                    "Symbol": true,
                                    "BigInt": true
                                },
                                "Reference Types": {
                                    "Object": true,
                                    "Array": true,
                                    "Function": true
                                }
                            },
                            "Operators": {
                                "Arithmetic Operators": true,
                                "Comparison Operators": true,
                                "Logical Operators": true,
                                "Bitwise Operators": true,
                                "Ternary Operator": true
                            },
                            "Control Structures": {
                                "Conditional Statements": {
                                    "if-else": true,
                                    "switch": true
                                },
                                "Loops": {
                                    "for": true,
                                    "while": true,
                                    "do-while": true,
                                    "for-in": true,
                                    "for-of": true
                                }
                            }
                        },
                        "Functions": {
                            "___urlPath___": "functions",
                            "Function Basics": {
                                "___urlPath___": "function-basics",
                                "Function Declaration": {
                                    "___urlPath___": "function-declaration",
                                    "___md___": 196
                                },
                                "Function Expression": {
                                    "___urlPath___": "function-expression",
                                    "___md___": 197
                                },
                                "Arrow Functions": {
                                    "___urlPath___": "arrow-functions",
                                    "___md___": 198
                                }
                            },
                            "Parameters and Return": {
                                "Default Parameters": true,
                                "Rest Parameters": true,
                                "Spread Operator": true
                            },
                            "Function Scope and Closures": {
                                "___urlPath___": "function-scope-and-closures",
                                "Global Scope": true,
                                "Local Scope": true,
                                "Block Scope": true,
                                "Closures": {
                                    "___urlPath___": "closures",
                                    "___md___": 451
                                }
                            },
                            "Higher-Order Functions": {
                                "map, filter, reduce": true,
                                "Callback Functions": true
                            }
                        },
                        "Objects and Prototypes": {
                            "Object Basics": {
                                "Creating Objects": true,
                                "Accessing Properties": true,
                                "Modifying Properties": true,
                                "Deleting Properties": true
                            },
                            "Prototype and Inheritance": {
                                "Prototype Chain": true,
                                "Prototypal Inheritance": true,
                                "Object.create()": true
                            },
                            "Object Methods": {
                                "Object.assign()": true,
                                "Object.keys(), Object.values(), Object.entries()": true,
                                "Object.freeze() and Object.seal()": true
                            }
                        },
                        "Asynchronous JavaScript": {
                            "Callbacks": true,
                            "Promises": {
                                "Creating Promises": true,
                                "Chaining Promises": true,
                                "Error Handling": true
                            },
                            "async/await": {
                                "Using async Functions": true,
                                "Error Handling with try-catch": true
                            },
                            "Event Loop and Concurrency": {
                                "Call Stack": true,
                                "Task Queue": true,
                                "Microtasks and Macrotasks": true
                            }
                        },
                        "DOM Manipulation": {
                            "Introduction to DOM": true,
                            "Selecting Elements": {
                                "getElementById": true,
                                "querySelector/querySelectorAll": true
                            },
                            "Manipulating Elements": {
                                "innerHTML and textContent": true,
                                "setAttribute and getAttribute": true,
                                "Adding/Removing Classes": true
                            },
                            "Event Handling": {
                                "addEventListener": true,
                                "Event Delegation": true
                            }
                        },
                        "Error Handling and Debugging": {
                            "Error Types": {
                                "SyntaxError": true,
                                "ReferenceError": true,
                                "TypeError": true
                            },
                            "try-catch-finally": true,
                            "Custom Errors": true,
                            "Debugging Tools": {
                                "Console.log()": true,
                                "Browser DevTools": true,
                                "Breakpoints and Watchers": true
                            }
                        },
                        "Advanced Topics": {
                            "Modules": {
                                "Export and Import": true,
                                "Dynamic Imports": true
                            },
                            "JavaScript Patterns": {
                                "Module Pattern": true,
                                "Observer Pattern": true,
                                "Factory Pattern": true
                            },
                            "ES6+ Features": {
                                "Destructuring": true,
                                "Template Literals": true,
                                "Spread and Rest Operators": true
                            },
                            "Memory Management": {
                                "Garbage Collection": true,
                                "Memory Leaks": true
                            }
                        },
                        "Testing in JavaScript": {
                            "Unit Testing": {
                                "Jest": true,
                                "Mocha": true
                            },
                            "End-to-End Testing": {
                                "Cypress": true,
                                "Puppeteer": true
                            },
                            "Debugging Tests": true
                        },
                        "JavaScript in the Browser": {
                            "Browser APIs": {
                                "Window and Document": true,
                                "LocalStorage and SessionStorage": true,
                                "Fetch API": true
                            },
                            "Geolocation API": true,
                            "WebSockets": true,
                            "Service Workers": true
                        },
                        "Node.js Basics": {
                            "What is Node.js?": true,
                            "Event Loop in Node.js": true,
                            "Modules in Node.js": {
                                "CommonJS Modules": true,
                                "ES Modules": true
                            },
                            "File System Module": true,
                            "Streams": true
                        },
                        "LeetCode problems (30 Days of JavaScript)": {
                            "___urlPath___": "leetcode-problems",
                            "Overview": {
                                "___urlPath___": "overview",
                                "___md___": 472
                            },
                            "Promises and Time": {
                                "___urlPath___": "promises-and-time",
                                "Add Two Promises": {
                                    "___urlPath___": "add-two-promises",
                                    "___md___": 464
                                },
                                "Sleep": {
                                    "___urlPath___": "sleep",
                                    "___md___": 465
                                },
                                "Timeout Cancellation": {
                                    "___urlPath___": "timeout-cancellation",
                                    "___md___": 466
                                },
                                "Interval Cancellation": {
                                    "___urlPath___": "interval-cancellation",
                                    "___md___": 467
                                },
                                "Promise Time Limit": {
                                    "___urlPath___": "promise-time-limit",
                                    "___md___": 468
                                },
                                "Cache With Time Limit": {
                                    "___urlPath___": "cache-with-time-limit",
                                    "___md___": 469
                                },
                                "Debounce": {
                                    "___urlPath___": "debounce",
                                    "___md___": 470
                                }
                            },
                            "Classes": {
                                "___urlPath___": "classes",
                                "Event Emitter": {
                                    "___urlPath___": "event-emitter",
                                    "___md___": 463
                                },
                                "Array Wrapper": {
                                    "___urlPath___": "array-wrapper",
                                    "___md___": 462
                                },
                                "Calculator with Method Chaining": {
                                    "___urlPath___": "calculator-with-method-chaining",
                                    "___md___": 461
                                }
                            }
                        }
                    },
                    "Frontend Libraries and Frameworks": {
                        "___urlPath___": "frontend-libraries-and-frameworks",
                        "React": {
                            "___urlPath___": "react",
                            "Basics": {
                                "___urlPath___": "basics",
                                "Introduction to React": true,
                                "Setting Up the Development Environment": true,
                                "Understanding Virtual DOM": {
                                    "___urlPath___": "react-virtual-dom",
                                    "___md___": 680
                                },
                                "JSX": {
                                    "What is JSX?": true,
                                    "JSX Syntax": true,
                                    "Embedding Expressions in JSX": true,
                                    "JSX vs HTML": true
                                }
                            },
                            "Components": {
                                "___urlPath___": "components",
                                "Class Components": {
                                    "___urlPath___": "class-components",
                                    "___md___": 713
                                },
                                "Functional Components": {
                                    "___urlPath___": "functional-components",
                                    "___md___": 714
                                },
                                "Component Hierarchies and Nesting": {
                                    "___urlPath___": "component-hierarchies-and-nesting",
                                    "___md___": 715
                                },
                                "Props": {
                                    "___urlPath___": "props",
                                    "Passing Data with Props": {
                                        "___urlPath___": "passing-data-with-props",
                                        "___md___": 716
                                    },
                                    "Prop Types Validation": {
                                        "___urlPath___": "prop-types-validation",
                                        "___md___": 717
                                    },
                                    "Default Props": {
                                        "___urlPath___": "default-props",
                                        "___md___": 718
                                    },
                                    "Class components: super(props)": {
                                        "___urlPath___": "class-component-super-props",
                                        "___md___": 721
                                    },
                                },
                                "State": {
                                    "___urlPath___": "state",
                                    "State in Class Components": {
                                        "___urlPath___": "state-in-class-components",
                                        "___md___": 719
                                    },
                                    "State in Functional Components with Hooks": {
                                        "___urlPath___": "state-in-functional-components",
                                        "___md___": 720
                                    },
                                    "State Management Best Practices": {
                                        "___urlPath___": "state-management-best-practises",
                                        "___md___": 722
                                    }
                                }
                            },
                            "Event Handling": {
                                "___urlPath___": "event-handling",
                                "Understanding Synthetic Events": {
                                    "___urlPath___": "understanding-synthetic-events",
                                    "___md___": 723
                                },
                                "Binding Event Handlers": {
                                    "___urlPath___": "binding-event-handlers",
                                    "___md___": 724
                                },
                                "Passing Arguments to Event Handlers": {
                                    "___urlPath___": "passing-arguments-to-event-handlers",
                                    "___md___": 725
                                }
                            },
                            "Lifecycle Methods": {
                                "___urlPath___": "lifecycle-methods",
                                "Component Lifecycle Overview": {
                                    "___urlPath___": "component-lifecycle-overview",
                                    "___md___": 726
                                },
                                "Mounting Methods": {
                                    "___urlPath___": "mounting-methods",
                                    "constructor()": {
                                        "___urlPath___": "constructor",
                                        "___md___": 727
                                    },
                                    "componentDidMount()": {
                                        "___urlPath___": "componentdidmount",
                                        "___md___": 745
                                    }
                                },
                                "Updating Methods": {
                                    "___urlPath___": "updating-methods",
                                    "shouldComponentUpdate()": {
                                        "___urlPath___": "shouldcomponentudpate",
                                        "___md___": 746
                                    },
                                    "componentDidUpdate()": {
                                        "___urlPath___": "componentdidupdate",
                                        "___md___": 747
                                    }
                                },
                                "Unmounting Methods": {
                                    "___urlPath___": "unmounting-methods",
                                    "componentWillUnmount()": {
                                        "___urlPath___": "componentwillunmount",
                                        "___md___": 748
                                    }
                                },
                                "Error Boundaries": {
                                    "___urlPath___": "error-boundaries",
                                    "___md___": 749
                                }
                            },
                            "Hooks": {
                                "___urlPath___": "hooks",
                                "useState": {
                                    "___urlPath___": "useState",
                                    "___md___": 752
                                },
                                "useEffect": {
                                    "___urlPath___": "useEffect",
                                    "___md___": 753
                                },
                                "useContext": true,
                                "useReducer": true,
                                "useRef": true,
                                "useMemo": true,
                                "useCallback": true,
                                "useImperativeHandle": {
                                    "___urlPath___": "useImperativeHandle",
                                    "___md___": 901
                                },
                                "useLayoutEffect": {
                                    "___urlPath___": "uselayouteffect",
                                    "___md___": 898
                                },
                                "useId": true,
                                "useSyncExternalStore": {
                                    "___urlPath___": "use-sync-external-store",
                                    "___md___": 897
                                },
                                "Custom Hooks": {
                                    "___urlPath___": "custom-hooks",
                                    "___md___": 896
                                }
                            },
                            "Context API": {
                                "___urlPath___": "context-api",
                                "Creating Context": {
                                    "___urlPath___": "creating-context",
                                    "___md___": 750
                                },
                                "Consuming Context": {
                                    "___urlPath___": "consuming-context",
                                    "___md___": 751
                                },
                                "Context with useContext Hook": {
                                    "___urlPath___": "context-with-usecontext-hook",
                                    "___md___": 955
                                },
                                "Performance Optimization in Context API": {
                                    "___urlPath___": "performance-optimisation-in-context-api",
                                    "___md___": 956
                                }
                            },
                            "Routing": {
                                "___urlPath___": "routing",
                                "React Router Basics": {
                                    "___urlPath___": "react-router-basics",
                                    "___md___": 902
                                },
                                "Route Matching and Nesting": {
                                    "___urlPath___": "route-matching-and-nesting",
                                    "___md___": 903
                                },
                                "Dynamic Routing": {
                                    "___urlPath___": "dynamic-routing",
                                    "___md___": 904
                                },
                                "Programmatic Navigation": {
                                    "___urlPath___": "programmatic-navigation",
                                    "___md___": 905
                                },
                                "Protected Routes": {
                                    "___urlPath___": "protected-route",
                                    "___md___": 906
                                }
                            },
                            "State Management": {
                                "___urlPath___": "state-management",
                                "Redux": {
                                    "___urlPath___": "redux",
                                    "Introduction to Redux": {
                                        "___urlPath___": "introduction-to-redux",
                                        "___md___": 738
                                    },
                                    "Redux Store, Actions, and Reducers": {
                                        "___urlPath___": "redux-store-actions-reducers",
                                        "___md___": 739
                                    },
                                    "Connecting React with Redux": {
                                        "___urlPath___": "connecting-react-with-redux",
                                        "___md___": 740
                                    },
                                    "Middleware and Redux Thunk": {
                                        "___urlPath___": "middleware-and-redux-thunk",
                                        "___md___": 741
                                    },
                                    "Middleware and Redux Saga (basics)": {
                                        "___urlPath___": "middleware-and-redux-saga",
                                        "___md___": 742
                                    },
                                    "Redux Saga - in depth": {
                                        "___urlPath___": "redux-saga",
                                        "Introduction to Redux Saga": {
                                            "___urlPath___": "introduction-to-redux-saga",
                                            "___md___": 907
                                        },
                                        "Setting Up Redux Saga Middleware": {
                                            "___urlPath___": "setting-up-redux-saga-middleware",
                                            "___md___": 908
                                        },
                                        "Core Concepts: Effects, takeEvery, takeLatest": {
                                            "___urlPath___": "core-concepts-effects-takeevery-takelatest",
                                            "___md___": 909
                                        },
                                        "Blocking vs Non-blocking Sagas": {
                                            "___urlPath___": "blocking-vs-non-blocking-sagas",
                                            "___md___": 910
                                        },
                                        "call, put, fork, cancel, and race": {
                                            "___urlPath___": "call-put-fork-cancel-race",
                                            "___md___": 911
                                        },
                                        "Handling API Requests and Side Effects": {
                                            "___urlPath___": "handling-api-requests-and-side-effects",
                                            "___md___": 912
                                        },
                                        "Error Handling and Retrying Strategies": {
                                            "___urlPath___": "error-handling-and-retrying-strategies",
                                            "___md___": 913
                                        },
                                        "Saga Watchers and Workers Pattern": {
                                            "___urlPath___": "saga-watchers-and-workers-pattern",
                                            "___md___": 914
                                        },
                                        "Advanced Patterns: Debouncing, Polling, Sequencing": {
                                            "___urlPath___": "advanced-patterns-debouncing-polling-sequencing",
                                            "___md___": 915
                                        },
                                        "Redux Saga Testing": {
                                            "___urlPath___": "redux-saga-testing",

                                        },
                                        "Comparison: Redux Thunk vs Saga (Enterprise Perspective)": {
                                            "___urlPath___": "redux-thunk-vs-saga-Enterprise-perspective",
                                            "___md___": 916
                                        },
                                        "Comparison: Saga vs RTK Query": {
                                            "___urlPath___": "saga-vs-rtk-query",
                                            "___md___": 917

                                        },
                                        "Best Practices and Performance Optimization": {
                                            "___urlPath___": "redux-saga-best-practices-and-performance-optimization",

                                        }
                                    },
                                    "Redux Toolkit": {
                                        "___urlPath___": "redux-toolkit",
                                        "___md___": 743
                                    },
                                    "RTK Query": {
                                        "___urlPath___": "rtk-query",
                                        "___md___": 744
                                    }
                                },
                                "MobX": true,
                                "Zustand": true,
                                "Recoil": true
                            },
                            "Styling": {
                                "Tailwind": {
                                    "___urlPath___": "tailwind-css",
                                    "A-Z on Tailwind": {
                                        "___urlPath___": "tailwind-a-z",
                                        "Core Concepts": {
                                            "Utility-First Philosophy": {
                                                "___urlPath___": "utility-first-philosophy",
                                                "___md___": 1011
                                            },
                                            "Atomic CSS vs BEM/Traditional CSS": {
                                                "___urlPath___": "atomic-css-vs-bem-traditional-css",
                                                "___md___": 1012
                                            },
                                            "Config-Driven Design": {
                                                "___urlPath___": "config-driven-design",
                                                "___md___": 1013
                                            },
                                            "Tailwind vs CSS-in-JS (Styled Components, Emotion)": true
                                        },
                                        "Installation & Setup": {
                                            "Using via CDN": true,
                                            "Installing via NPM with PostCSS": true,
                                            "Using Tailwind with Vite, Webpack, Next.js": true,
                                            "Tailwind CLI": true
                                        },
                                        "Project Configuration": {
                                            "tailwind.config.js Deep Dive": {
                                                "theme Customization": true,
                                                "Extending Theme (colors, spacing, fonts)": true,
                                                "Screens (Responsive Breakpoints)": true,
                                                "Variants (hover, focus, group-hover, etc.)": true,
                                                "Purge/Content Paths for Tree-Shaking": true,
                                                "Dark Mode Strategies (media, class-based)": true
                                            },
                                            "Custom Plugins": {
                                                "Creating a Plugin": true,
                                                "Adding Utilities via Plugins": true,
                                                "Third-Party Plugins (Forms, Typography, Aspect-Ratio)": true
                                            }
                                        },
                                        "Utility Classes": {
                                            "Layout": {
                                                "Container, Box Sizing, Display": true,
                                                "Position, Top/Right/Bottom/Left": true,
                                                "Z-Index, Overflow": true
                                            },
                                            "Flexbox and Grid": {
                                                "Flex Direction, Wrap, Align, Justify": true,
                                                "Grid Template Columns/Rows": true,
                                                "Gap, Place Items, Auto Flow": true
                                            },
                                            "Spacing": {
                                                "Margin and Padding": true,
                                                "Space Between": true
                                            },
                                            "Sizing": {
                                                "Width, Min/Max Width": true,
                                                "Height, Min/Max Height": true
                                            },
                                            "Typography": {
                                                "Font Size, Weight, Line Height": true,
                                                "Text Alignment, Letter Spacing": true,
                                                "Text Color, Decoration, Transform": true
                                            },
                                            "Backgrounds and Borders": {
                                                "Background Color, Image, Position, Size": true,
                                                "Border Width, Color, Radius, Style": true
                                            },
                                            "Effects": {
                                                "Box Shadow": true,
                                                "Opacity": true,
                                                "Mix Blend Mode, Background Blend Mode": true
                                            },
                                            "Transitions and Animations": {
                                                "Transition Duration, Timing, Property": true,
                                                "Transform Scale, Rotate, Skew": true,
                                                "Custom Keyframes and Animation Utilities": true
                                            },
                                            "Interactivity": {
                                                "Cursor, Pointer Events": true,
                                                "Resize, User Select": true,
                                                "Ring Utilities, Focus Ring Styling": true
                                            },
                                            "Filters and Backdrop Filters": {
                                                "Blur, Brightness, Contrast": true,
                                                "Grayscale, Hue Rotate, Invert": true,
                                                "Backdrop Blur, Saturate, Sepia": true
                                            }
                                        },
                                        "Responsive Design": {
                                            "Breakpoints and Media Queries": true,
                                            "Mobile-First Design Philosophy": true,
                                            "Using Responsive Utility Prefixes (sm:, md:, lg:)": true,
                                            "Visibility and Display Utilities (hidden, block, etc.)": true
                                        },
                                        "State Variants": {
                                            "Hover, Focus, Active, Group Hover": true,
                                            "Peer-based Styling (peer-hover, peer-focus)": true,
                                            "Disabled, Checked, Focus-Within, First/Last": true
                                        },
                                        "Dark Mode": {
                                            "Strategy (Media vs Class)": true,
                                            "Theming and Custom Dark Colors": true,
                                            "Dark Mode Variants": true
                                        },
                                        "Forms and UI Components": {
                                            "Styling Native Inputs and Controls": true,
                                            "Tailwind Forms Plugin": true,
                                            "Custom Form Layouts (Flex/Grid Based)": true,
                                            "Accessibility Best Practices": true
                                        },
                                        "Component Patterns": {
                                            "Component Composition with Utility Classes": true,
                                            "Extracting Reusable Components (React, Vue, etc.)": true,
                                            "Responsive Cards, Modals, Buttons, Alerts": true,
                                            "Customizing State-based Styling (hover, focus, etc.)": true
                                        },
                                        "Theming and Design Systems": {
                                            "Custom Theme Tokens": true,
                                            "Design Tokens Mapping to Tailwind Theme": true,
                                            "Using Tailwind with Figma Design Tokens": true,
                                            "Implementing Brand Guidelines with Tailwind": true
                                        },
                                        "Advanced Topics": {
                                            "JIT Mode Deep Dive (v3 and above)": true,
                                            "Performance Optimization (Tree-shaking, PurgeCSS)": true,
                                            "Tailwind with CSS Modules / SCSS": true,
                                            "Tailwind with TypeScript and Styled-System": true
                                        },
                                        "Tailwind with Frameworks": {
                                            "React (Next.js, CRA)": true,
                                            "Vue.js (Vite + Tailwind)": true,
                                            "Angular": true,
                                            "SvelteKit": true,
                                            "Astro + Tailwind": true
                                        },
                                        "Enterprise Usage": {
                                            "Tailwind in Component Libraries": true,
                                            "Tailwind in Design Systems (e.g., HeadlessUI)": true,
                                            "CI/CD Integration and Theming in Monorepos": true,
                                            "Migrating Legacy CSS to Tailwind": true
                                        },
                                        "Tooling and Ecosystem": {
                                            "Play CDN and Playground Tools": true,
                                            "Tailwind UI (Commercial Component Library)": true,
                                            "Headless UI (Accessible UI Components)": true,
                                            "Heroicons and Integration": true,
                                            "Typography Plugin for Rich Content": true,
                                            "Aspect Ratio Plugin": true
                                        },
                                        "Testing and Debugging": {
                                            "Visual Regression Testing (Chromatic, Percy)": true,
                                            "Linting for Tailwind with Stylelint Plugins": true,
                                            "Debug Screens Plugin": true
                                        },
                                        "Best Practices and Anti-Patterns": {
                                            "Avoiding Class Bloat": true,
                                            "Using @apply vs Overusing Custom CSS": true,
                                            "Combining Tailwind with Utility Class Libraries": true,
                                            "Organizing Tailwind in Large-Scale Projects": true
                                        }
                                    },

                                    "Core Concepts and Setup": {
                                        "___urlPath___": "core-setup",
                                        "___md___": 1101
                                    },
                                    "Responsive Design and Breakpoints": {
                                        "___urlPath___": "responsive-breakpoints",
                                        "___md___": 1102
                                    },
                                    "Typography and Layout": {
                                        "___urlPath___": "typography-layout",
                                        "___md___": 1103
                                    },
                                    "Custom Theme and Config Extensions": {
                                        "___urlPath___": "custom-theme-config",
                                        "___md___": 1104
                                    },
                                    "Component Architecture with Tailwind": {
                                        "___urlPath___": "component-architecture",
                                        "___md___": 1105
                                    },
                                    "Dark Mode and Accessibility": {
                                        "___urlPath___": "darkmode-accessibility",
                                        "___md___": 1106
                                    },
                                    "Forms and Inputs Styling": {
                                        "___urlPath___": "forms-inputs-tailwind",
                                        "___md___": 1107
                                    },
                                    "Animations and Transitions": {
                                        "___urlPath___": "animations-transitions",
                                        "___md___": 1108
                                    },
                                    "Utility-First Design Patterns": {
                                        "___urlPath___": "utility-patterns",
                                        "___md___": 1109
                                    },
                                    "Reusable Design Tokens with Tailwind": {
                                        "___urlPath___": "design-tokens-tailwind",
                                        "___md___": 1110
                                    },
                                    "Tailwind with Component Libraries": {
                                        "___urlPath___": "tailwind-ui-integrations",
                                        "Shadcn/ui Integration": true,
                                        "Headless UI Usage": true,
                                        "Radix UI Styling": true
                                    },
                                    "Tailwind + React Best Practices": {
                                        "___urlPath___": "tailwind-react-best",
                                        "Separation of Concerns": true,
                                        "Conditional Styling with `clsx` / `classnames`": true,
                                        "Handling Dynamic States and Variants": true
                                    },
                                    "Performance Optimization": {
                                        "___urlPath___": "tailwind-performance",
                                        "Purging Unused Styles": true,
                                        "Build Size Reduction Techniques": true,
                                        "CDN vs Compiled Strategy": true
                                    },
                                    "Tailwind + TypeScript + Monorepos": {
                                        "___urlPath___": "tailwind-typescript-monorepo",
                                        "Typed Tailwind Configs": true,
                                        "Scalable Folder Structures": true
                                    },
                                    "Testing and Theming Strategy": {
                                        "___urlPath___": "tailwind-testing-theming",
                                        "Visual Regression Testing (Storybook / Chromatic)": true,
                                        "Theme Switching Strategy (Light/Dark/Custom)": true
                                    },
                                    "Comparison with Other Styling Approaches": {
                                        "___urlPath___": "tailwind-comparisons",
                                        "Tailwind vs CSS Modules": true,
                                        "Tailwind vs Styled-Components / Emotion": true,
                                        "When NOT to Use Tailwind": true
                                    }
                                },
                                "CSS-in-JS": {
                                    "Styled-Components": true,
                                    "Emotion": true
                                },
                                "Traditional CSS": true,
                                "CSS Modules": true,
                                "SASS/SCSS (Syntactically Awesome Stylesheets)": {
                                    "Core Concepts": {
                                        "What is SASS & Why Use It": true,
                                        "Installation Methods (CLI, Node-sass, Dart-sass)": true,
                                        "SASS vs SCSS Syntax": true,
                                        "Compiling SASS to CSS": true
                                    },
                                    "Variables and Nesting": {
                                        "Defining and Using Variables": true,
                                        "Scope of Variables (Global vs Local)": true,
                                        "Nesting Rules and Best Practices": true,
                                        "Avoiding Over-Nesting Pitfalls": true
                                    },
                                    "Partials and Modules": {
                                        "Creating Partials with `_filename.scss`": true,
                                        "Using @use vs @import (Modern vs Legacy)": true,
                                        "Namespace Management with @use": true,
                                        "SASS Modules vs CSS Modules": true
                                    },
                                    "Mixins and Includes": {
                                        "Creating and Using Mixins": true,
                                        "Passing Arguments to Mixins": true,
                                        "Default Parameter Values": true,
                                        "Content Blocks with `@content`": true
                                    },
                                    "Functions and Operations": {
                                        "Defining and Using Custom Functions": true,
                                        "Built-in Functions (Color, String, Number)": true,
                                        "Mathematical Operations in SASS": true,
                                        "Color Manipulation (lighten, darken, mix)": true
                                    },
                                    "Control Directives": {
                                        "@if, @else If, @else for Conditional Styling": true,
                                        "@for, @each, @while for Loops": true,
                                        "Dynamic Class Generation via Loops": true
                                    },
                                    "Inheritance and Extend": {
                                        "Using @extend to Share Styles": true,
                                        "Placeholders (%) vs Classes in Extend": true,
                                        "Avoiding Extend Pitfalls (Selector Bloat)": true
                                    },
                                    "Responsive and Theming": {
                                        "Media Queries with Mixins and Maps": true,
                                        "Responsive Utilities Generator": true,
                                        "Dark Mode and Theming with Variables": true,
                                        "Breakpoints Best Practices (Mobile-First)": true
                                    },
                                    "Architecture & Patterns": {
                                        "7-1 Folder Architecture": true,
                                        "BEM with SASS": true,
                                        "Utility-First with SASS": true,
                                        "Token-Based Design Systems in SASS": true
                                    },
                                    "Integration and Tooling": {
                                        "SASS with Webpack/Parcel/Vite": true,
                                        "SASS in React/Next.js/Angular Apps": true,
                                        "Global vs Scoped Styles in SPA": true,
                                        "SASS Linting and Stylelint Configs": true
                                    },
                                    "Advanced SASS Design Systems": {
                                        "Design Tokens & CSS Variables in SASS": true,
                                        "Dynamic Theme Switching with SASS Maps": true,
                                        "Component-Based Theming Patterns": true,
                                        "Design System DSL with SASS Functions": true
                                    },
                                    "Performance and Maintainability": {
                                        "Avoiding Specificity Wars": true,
                                        "Reducing Compiled File Size": true,
                                        "Refactoring Large SASS Codebases": true,
                                        "Scalable Patterns for Design Consistency": true
                                    },
                                    "Analysis & Applications": {
                                        "Time Saved vs Plain CSS (Developer ROI)": true,
                                        "Real-World Use Cases in Enterprise-Level Apps": true,
                                        "Problem Links & Practice Sets": true
                                    }
                                }
                            },
                            "Forms": {
                                "___urlPath___": "forms",
                                "Controlled Components": {
                                    "___urlPath___": "controlled-components",
                                    "___md___": 918
                                },
                                "Uncontrolled Components": {
                                    "___urlPath___": "uncontrolled-components",
                                    "___md___": 919
                                },
                                "Controlled vs Uncontrolled Components - Interview Deep Dive": {
                                    "___urlPath___": "controlled-vs-uncontrolled-components",
                                    "___md___": 920
                                },
                                "Architecture of Forms in Real Products": {
                                    "___urlPath___": "architecture-of-forms-in-real-products",
                                    "___md___": 921
                                },
                                "Form Validation Libraries": {
                                    "___urlPath___": "form-validation-libraries",
                                    "Formik": {
                                        "___urlPath___": "formik",
                                        "___md___": 922
                                    },
                                    "React Hook Form": {
                                        "___urlPath___": "react-hook-form",
                                        "___md___": 923
                                    },
                                    "Yup Validation": {
                                        "___urlPath___": "yup-validation",
                                        "___md___": 924
                                    },
                                    "Yup vs Zod (Schema validation libraries": {
                                        "___urlPath___": "yup-vs-zod",
                                        "___md___": 925
                                    }
                                }
                            },
                            "Performance Optimization": {
                                "React.memo": true,
                                "useCallback and useMemo": true,
                                "Code Splitting with React.lazy and Suspense": true,
                                "Windowing with react-window": true,
                                "Concurrent Rendering": true,
                                "Automatic Batching": true
                            }
                            ,
                            "Advanced Topics": {
                                "___urlPath___": "advanced-topics",

                                "Data Fetching": {
                                    "___urlPath___": "data-fetching",
                                    "Client-side Data Fetching": {
                                        "___urlPath___": "client-side-fetching",
                                        "Basic Fetch with useEffect": {
                                            "___urlPath___": "useeffect-fetch",
                                            "___md___": 982
                                        },
                                        "AbortController and Cleanup": {
                                            "___urlPath___": "abortcontroller-cleanup",
                                            "___md___": 1002
                                        },
                                        "Loading, Error, and Empty States": {
                                            "___urlPath___": "loading-error-empty",
                                            "___md___": 1003
                                        },
                                        "Pagination and Infinite Scroll": {
                                            "___urlPath___": "pagination-infinite-scroll",
                                            "___md___": 1004
                                        },
                                        "Debouncing and Throttling API Calls": {
                                            "___urlPath___": "debounce-throttle-fetch",
                                            "___md___": 1005
                                        },

                                    },
                                    "React Query / SWR": {
                                        "___urlPath___": "react-query-swr",
                                        "Introduction to React Query": {
                                            "___urlPath___": "intro-react-query",
                                            "___md___": 1006
                                        },
                                        "Query Caching and Invalidation": {
                                            "___urlPath___": "query-caching-invalidation",
                                            "___md___": 1007
                                        },
                                        "Mutations and Side Effects": {
                                            "___urlPath___": "mutations-side-effects",
                                            "___md___": 1008
                                        },
                                        "Retry, Backoff and Error Handling": {
                                            "___urlPath___": "retry-backoff-handling",
                                            "___md___": 1009
                                        },
                                        "React Query Devtools and Performance Monitoring": {
                                            "___urlPath___": "react-query-devtools",
                                            "___md___": 1010
                                        },
                                        "SWR vs React Query: Comparison and Enterprise Use Cases": {
                                            "___urlPath___": "swr-vs-react-query",
                                            "___md___": 1011
                                        }
                                    },
                                    "Server-side Data Fetching (RSC + Next.js)": {
                                        "___urlPath___": "server-side-fetching",
                                        "Fetching in React Server Components (RSC)": {
                                            "___urlPath___": "fetch-in-rsc",
                                            "___md___": 1012
                                        },
                                        "Fetching from Databases in RSC (PostgreSQL / MongoDB)": {
                                            "___urlPath___": "fetch-from-db-rsc",
                                            "___md___": 1013
                                        },
                                        "Caching and Revalidation in RSC": {
                                            "___urlPath___": "caching-revalidation-rsc",
                                            "___md___": 1014
                                        },
                                        "Route Handlers and API Layers in Next.js": {
                                            "___urlPath___": "nextjs-api-layer",
                                            "___md___": 1015
                                        },
                                        "Security: Data Fetching with Session / JWT in RSC": {
                                            "___urlPath___": "secure-fetching-rsc",
                                            "___md___": 1016
                                        }
                                    },
                                    "Streaming with Suspense and SSR": {
                                        "___urlPath___": "streaming-suspense",
                                        "How Suspense Enables Streaming": {
                                            "___urlPath___": "how-suspense-streaming",
                                            "___md___": 1017
                                        },
                                        "Server-Only Suspense vs Client-Side Fallbacks": {
                                            "___urlPath___": "server-vs-client-suspense",
                                            "___md___": 1018
                                        },
                                        "Progressive Hydration with Partial Rendering": {
                                            "___urlPath___": "progressive-hydration",
                                            "___md___": 1019
                                        },
                                        "Combining RSC with Suspense Boundaries": {
                                            "___urlPath___": "rsc-with-suspense",
                                            "___md___": 1020
                                        },
                                        "Best Practices for Streaming UX": {
                                            "___urlPath___": "streaming-best-practices",
                                            "___md___": 1021
                                        }
                                    },
                                    "Advanced Patterns and Optimization": {
                                        "___urlPath___": "advanced-fetching",
                                        "Optimistic UI Updates": {
                                            "___urlPath___": "optimistic-updates",
                                            "___md___": 1022
                                        },
                                        "Stale-While-Revalidate and Background Fetching": {
                                            "___urlPath___": "swr-strategies",
                                            "___md___": 1023
                                        },
                                        "Deduplication and Batching Requests": {
                                            "___urlPath___": "deduplication-batching",
                                            "___md___": 1024
                                        },
                                        "Authentication-aware Fetching Patterns": {
                                            "___urlPath___": "auth-aware-fetching",
                                            "___md___": 1025
                                        },
                                        "Error Recovery and User Feedback Loops": {
                                            "___urlPath___": "error-recovery-feedback",
                                            "___md___": 1026
                                        }
                                    },
                                    "HTTP Clients: Fetch vs Axios": {
                                        "___urlPath___": "http-clients",
                                        "Using Native Fetch API": {
                                            "___urlPath___": "fetch-api",
                                            "Basics of Fetch": {
                                                "___urlPath___": "fetch-basics",
                                                "Making a GET Request": true,
                                                "Handling JSON Responses": true,
                                                "Understanding the `Response` Object": true,
                                                "Using Request Headers": true,
                                                "Handling Query Parameters": true
                                            },
                                            "POST, PUT, DELETE with Fetch": {
                                                "___urlPath___": "fetch-methods",
                                                "Making a POST Request with JSON": true,
                                                "PUT and PATCH Semantics": true,
                                                "DELETE Requests and Idempotency": true,
                                                "Setting Content-Type Headers Correctly": true
                                            },
                                            "Error Handling and Retry Logic": {
                                                "___urlPath___": "fetch-error-handling",
                                                "Checking `res.ok` and HTTP Status Codes": true,
                                                "Graceful UI Fallbacks on Error": true,
                                                "Retry with Exponential Backoff": true,
                                                "Handling 401/403 and Redirects": true,
                                                "Handling Timeouts with `AbortController`": true
                                            },
                                            "Advanced Fetch Use Cases": {
                                                "___urlPath___": "advanced-fetch",
                                                "Using `AbortController` for Cancellation": true,
                                                "Parallel Fetches with `Promise.all()`": true,
                                                "Sequential Fetches and Chaining": true,
                                                "Fetch with Authentication (JWT / Cookies)": true,
                                                "Handling Binary Responses (Blob, File, ArrayBuffer)": true,
                                                "Tracking Progress of Large Downloads/Uploads": true
                                            },
                                            "Using Fetch in React": {
                                                "___urlPath___": "fetch-in-react",
                                                "Data Fetching with useEffect": true,
                                                "Cleaning Up with AbortController": true,
                                                "Managing Loading, Error, and Empty States": true,
                                                "Custom Hooks for Fetch (useFetch)": true,
                                                "Fetch in Class vs Functional Components": true
                                            },
                                            "Using Fetch in Next.js": {
                                                "___urlPath___": "fetch-in-nextjs",
                                                "Fetching in Server Components (RSC)": true,
                                                "Using `fetch()` in Route Handlers and API Routes": true,
                                                "Incremental Caching with `next: { revalidate }`": true,
                                                "Streaming Responses with `fetch()` and Suspense": true,
                                                "Secure Fetching with `headers()` and `cookies()`": true
                                            },
                                            "Performance and Best Practices": {
                                                "___urlPath___": "fetch-best-practices",
                                                "Avoiding Duplicate Requests": true,
                                                "Debounce / Throttle API Calls in React": true,
                                                "Caching Strategy (Cache-Control, SWR, Local Cache)": true,
                                                "Batching API Calls with Promise.all": true,
                                                "Reducing JS Bundle by Avoiding Axios": true
                                            },
                                            "Testing and Debugging Fetch Calls": {
                                                "___urlPath___": "testing-fetch",
                                                "Mocking Fetch with Jest / MSW": true,
                                                "Unit Testing useFetch Hook": true,
                                                "Handling Fetch Errors in E2E Tests (Cypress)": true,
                                                "Debugging Network Failures in DevTools": true
                                            },
                                            "Comparison with Alternatives": {
                                                "___urlPath___": "fetch-vs-axios-etc",
                                                "Fetch vs Axios": true,
                                                "Fetch vs React Query": true,
                                                "Fetch vs useSWR": true,
                                                "When to Wrap Fetch into a Service Layer": true
                                            }
                                        }
                                        ,
                                        "Axios": {
                                            "___urlPath___": "axios",
                                            "Axios Fundamentals": {
                                                "___urlPath___": "axios-fundamentals",
                                                "Installing and Importing Axios": true,
                                                "Basic GET/POST Requests": true,
                                                "Understanding Axios Response Structure": true,
                                                "Setting Base URL and Default Headers": true,
                                                "Axios Instance vs Direct Import": true
                                            },
                                            "Advanced Request Features": {
                                                "___urlPath___": "axios-requests",
                                                "Sending POST with JSON Body": true,
                                                "Custom Headers and Query Parameters": true,
                                                "PUT, PATCH and DELETE Requests": true,
                                                "Request Timeout Handling": true,
                                                "Cancelling Requests with CancelToken": true
                                            },
                                            "Response Handling and Interceptors": {
                                                "___urlPath___": "axios-response-handling",
                                                "Global Error Handling with Interceptors": true,
                                                "Transforming Requests and Responses": true,
                                                "Handling 401/403 with Token Refresh": true,
                                                "Redirect on Auth Expiry (401 Interceptor Pattern)": true,
                                                "Logging API Errors in Production": true
                                            },
                                            "Axios in React Components": {
                                                "___urlPath___": "axios-in-react",
                                                "Using Axios in `useEffect`": true,
                                                "Custom useAxios Hook": true,
                                                "Managing Loading, Error, and Success States": true,
                                                "Memoizing Axios Calls with useCallback": true,
                                                "Handling Cancellations in Component Cleanup": true
                                            },
                                            "Axios in Large-Scale Projects": {
                                                "___urlPath___": "axios-architecture",
                                                "Creating Axios Services for REST APIs": true,
                                                "Domain-Specific Axios Wrappers (e.g. AuthService)": true,
                                                "Injecting Axios into Context/DI": true,
                                                "Isomorphic Axios Usage (SSR Support)": true,
                                                "Multi-baseURL Handling (e.g. Microservices)": true
                                            },
                                            "Token Management and Security": {
                                                "___urlPath___": "axios-auth",
                                                "Storing and Sending Bearer Tokens": true,
                                                "Refreshing Expired Tokens (with Queueing)": true,
                                                "Token Injection in Request Interceptor": true,
                                                "Securing Axios Calls Against CSRF/XSS": true
                                            },
                                            "File Uploads and Progress Tracking": {
                                                "___urlPath___": "axios-file-upload",
                                                "Uploading Files with FormData": true,
                                                "Tracking Upload and Download Progress": true,
                                                "Handling Large Uploads with Chunking": true,
                                                "Validating Files Before Upload": true
                                            },
                                            "Retry Strategies and Resilience": {
                                                "___urlPath___": "axios-retries",
                                                "Automatic Retry with Axios-Retry Package": true,
                                                "Manual Retry with Exponential Backoff": true,
                                                "Retry on Network/Server Errors Only": true,
                                                "Limiting Retry Attempts Gracefully": true
                                            },
                                            "Performance Optimization": {
                                                "___urlPath___": "axios-performance",
                                                "Preventing Duplicate Requests": true,
                                                "Response Caching with LocalStorage / Memory": true,
                                                "Debouncing Repeated Requests": true,
                                                "Batching API Calls with Promise.all": true
                                            },
                                            "Testing Axios Logic": {
                                                "___urlPath___": "axios-testing",
                                                "Mocking Axios with Jest / MSW": true,
                                                "Testing Interceptors Separately": true,
                                                "Unit Testing Custom useAxios Hook": true,
                                                "Simulating Timeouts and Cancellations": true
                                            },
                                            "Comparison and Migration Guides": {
                                                "___urlPath___": "axios-comparisons",
                                                "Axios vs Fetch – API Design Tradeoffs": true,
                                                "Axios vs React Query – When to Choose": true,
                                                "Migrating from Axios to React Query or SWR": true,
                                                "Using Axios with Suspense or Streaming": true
                                            }
                                        }
                                        ,
                                        "Comparison and Decision Guide": {
                                            "___urlPath___": "fetch-vs-axios-comparison",
                                            "Fetch vs Axios (When to Choose)": true,
                                            "Axios vs React Query": true,
                                            "Migrating from Axios to React Query or SWR": true
                                        }
                                    },
                                    "GraphQL Data Fetching": {
                                        "___urlPath___": "graphql-fetching",
                                        "Introduction to GraphQL": true,
                                        "Queries, Mutations, and Subscriptions": true,
                                        "Using Apollo Client in React": true,
                                        "Fragments and Normalized Caching": true,
                                        "Pagination and Relay-style Fetching": true,
                                        "GraphQL Code Generator / Typesafety": true,
                                        "Error Handling and Retry": true,
                                        "Apollo vs urql vs Relay": true
                                    },
                                    "WebSockets and Real-time Fetching": {
                                        "___urlPath___": "websockets-fetching",
                                        "What are WebSockets?": true,
                                        "Using Socket.IO in React": true,
                                        "Event-based Data Streams": true,
                                        "Managing Socket Lifecycle": true,
                                        "Combining REST and WebSocket Fetching": true,
                                        "Use Cases: Chat, Live Dashboards": true,
                                        "WebSocket vs Server-Sent Events (SSE)": true
                                    },
                                    "gRPC and Binary Data Transport": {
                                        "___urlPath___": "grpc-fetching",
                                        "gRPC Basics and Protobuf": true,
                                        "gRPC vs REST vs GraphQL": true,
                                        "gRPC in React Frontend (grpc-web)": true,
                                        "Typed Contracts and API Evolution": true,
                                        "Handling Streaming with gRPC": true,
                                        "Using gRPC in Full Stack (Node + React)": true
                                    },
                                    "Firebase and Serverless Fetching": {
                                        "___urlPath___": "firebase-fetching",
                                        "Realtime Database vs Firestore": true,
                                        "Fetching and Listening in React": true,
                                        "Offline-first and Caching": true,
                                        "Firebase with Suspense or React Query": true,
                                        "Security Rules for Data Access": true,
                                        "Firebase vs REST APIs": true
                                    }




                                },
                                "Portals": {
                                    "___urlPath___": "portals",
                                    "___md___": 957
                                },
                                "Error Boundaries and Error Handling": true,
                                "Render Props": {
                                    "___urlPath___": "render-props",
                                    "___md___": 977
                                },
                                "Higher-Order Components (HOC)": {
                                    "___urlPath___": "hoc",
                                    "___md___": 409
                                },
                                "React Fiber Architecture": {
                                    "___urlPath___": "react-fiber-architecture",
                                    "___md___": 978
                                },
                                "Reactive Programming": true,
                                "React Server Components (RSC)": {
                                    "___urlPath___": "react-server-components",
                                    "___md___": 980
                                },
                                "Streaming SSR with Suspense": {
                                    "___urlPath___": "streaming-ssr-with-suspense",
                                    "___md___": 981
                                },
                                "Design Patterns in React": {
                                    "___urlPath___": "design-patterns-in-react",
                                    "Compound Components": {
                                        "___urlPath___": "compound-components",
                                        "___md___": 983
                                    },
                                    "Controlled-Uncontrolled Pattern": {
                                        "___urlPath___": "controlled-uncontrolled-pattern",
                                        "___md___": 984
                                    },
                                    "State Machines with XState": true
                                },
                                "Micro Frontends": {
                                    "Module Federation": true,
                                    "Shared State Between MFEs": true,
                                    "Cross-Team Deployment Patterns": true
                                }
                            },
                            "TypeScript with React": {
                                "___urlPath___": "typescript-react",
                                "Typing Props and State": {
                                    "___urlPath___": "typing-props-and-state",
                                    "___md___": 976
                                },
                                "Typing Custom Hooks": true,
                                "Generic Components": true,
                                "Type Inference and Best Practices": true
                            },
                            "Accessibility (a11y)": {
                                "___urlPath___": "a11y",
                                "ARIA Roles and Landmarks": true,
                                "Keyboard Navigation": true,
                                "Screen Reader Support": true,
                                "Accessible Forms and Labels": true
                            },
                            "Security Best Practices": {
                                "___urlPath___": "security",
                                "Avoiding XSS in React": {
                                    "___urlPath___": "avoiding-xss-in-react",
                                    "___md___": 985
                                },
                                "Safe Use of dangerouslySetInnerHTML": true,
                                "Input Sanitization and Escaping": true
                            },
                            "React Native": {
                                "___urlPath___": "react-native",
                                "Installation & Setup": {
                                    "___urlPath___": "installation-and-setup",
                                    "Environment Setup (macOS, Windows, Linux)": {
                                        "___urlPath___": "environment-setup",
                                        "___md___": 1156
                                    },
                                    "Using Expo CLI vs React Native CLI": {
                                        "___urlPath___": "using-expo-cli-vs-react-native-cli",
                                        "___md___": 1157
                                    },
                                    "Installing Dependencies with npm/yarn": true,
                                    "Running on Android Emulator and iOS Simulator": true,
                                    "Fast Refresh and Debugging Tools": true
                                },
                                "Project Configuration": {
                                    "Metro Bundler Configuration": true,
                                    "Custom Babel Configuration": true,
                                    "ESLint, Prettier Integration": true,
                                    "TypeScript Setup with React Native": true,
                                    "Handling .env and Configuration Files": true
                                },
                                "Core Concepts": {
                                    "JSX and Native Components": true,
                                    "State and Props Management": true,
                                    "Component Lifecycle with Hooks": true,
                                    "StyleSheet API and Flexbox Layout": true,
                                    "Platform-Specific Code (Platform, Platform.OS)": true,
                                    "Handling Assets (Images, Fonts, SVGs)": true,
                                    "Threads Model (JS/UI/Render Threads)": true
                                },
                                "Navigation": {
                                    "Stack, Tab, and Drawer Navigation": true,
                                    "React Navigation v6 Deep Dive": true,
                                    "Navigation Params and Route Hooks": true,
                                    "Screen Transitions and Modals": true,
                                    "Authentication Flows and Protected Routes": true,
                                    "Deep Linking and Universal Links": true,
                                    "Navigation State Restoration": true
                                },
                                "State Management": {
                                    "useState, useContext, useReducer": true,
                                    "Global State with Redux Toolkit": true,
                                    "Recoil, Zustand, and Jotai Integrations": true,
                                    "Redux Middleware (Thunk, Saga)": true,
                                    "Persisting State with redux-persist": true,
                                    "Feature Flags & Remote Config (LaunchDarkly, Firebase)": true
                                },
                                "Networking & APIs": {
                                    "Using Fetch and Axios": true,
                                    "Calling RESTful APIs": true,
                                    "React Query / TanStack Query for Data Caching": true,
                                    "Handling Network Errors and Loading States": true,
                                    "API Integration Patterns (Service Layer, Repositories)": true,
                                    "GraphQL Queries, Mutations, and Subscriptions": true,
                                    "API Versioning, Idempotency, and Rate Limiting": true
                                },
                                "Forms & Validation": {
                                    "Controlled vs Uncontrolled Inputs": true,
                                    "Using Formik and Yup for Forms": true,
                                    "React Hook Form in React Native": true,
                                    "Custom Input Components": true,
                                    "Validation and Error Handling": true
                                },
                                "Styling & Theming": {
                                    "StyleSheet vs Inline Styling": true,
                                    "Tailwind CSS with NativeWind": true,
                                    "Styled Components Integration": true,
                                    "Theme Switching (Dark Mode / Light Mode)": true,
                                    "Design Systems and Token-Based Styling": true
                                },
                                "Performance Optimization": {
                                    "React.memo, useMemo, useCallback": true,
                                    "FlatList and SectionList Optimization": true,
                                    "Avoiding Unnecessary Re-Renders": true,
                                    "useFocusEffect and lazy loading screens": true,
                                    "Profiling with Flipper and Hermes": true,
                                    "Cold Start and TTI Optimization": true,
                                    "Hermes Bytecode Precompilation": true,
                                    "Memory Leak Detection (Instruments, Profiler)": true,
                                    "Large Image/Video Optimization and Caching": true
                                },
                                "Animations & Gestures": {
                                    "LayoutAnimation and Animated API": true,
                                    "Reanimated 2 Basics and Advanced Use": true,
                                    "GestureHandler with Pan, Swipe, Tap": true,
                                    "Shared Element Transitions": true,
                                    "Building Smooth UI Interactions": true,
                                    "Worklets and Off-JS Thread Animations": true
                                },
                                "Offline & Storage": {
                                    "AsyncStorage / MMKV for Local Storage": true,
                                    "Secure Storage (Keychain/Keystore)": true,
                                    "Offline Data Sync Patterns": true,
                                    "SQLite and Realm DB Integrations": true,
                                    "Conflict Resolution Strategies": true
                                },
                                "Testing & Debugging": {
                                    "Unit Testing with Jest": true,
                                    "Integration Testing with React Native Testing Library": true,
                                    "E2E Testing with Detox": true,
                                    "Snapshot Testing": true,
                                    "Debugging with Flipper, Chrome, and React DevTools": true,
                                    "Crash Reporting and Monitoring (Sentry, Crashlytics)": true,
                                    "ANR/Crash Rate Analysis": true
                                },
                                "Native Modules & Bridging": {
                                    "Linking Native Modules (iOS & Android)": true,
                                    "Writing Native Modules in Java/Kotlin and Swift/Obj-C": true,
                                    "Permissions Handling": true,
                                    "Custom View Components in Native Code": true,
                                    "JSI and TurboModules": true,
                                    "Fabric Renderer and Codegen": true
                                },
                                "Build & Release": {
                                    "Debug vs Release Builds": true,
                                    "App Signing and Keystore Management": true,
                                    "Publishing to Google Play Store": true,
                                    "Publishing to Apple App Store": true,
                                    "OTA Updates with Expo EAS / CodePush": true,
                                    "Multi-Environment Release Flows": true,
                                    "Phased Rollouts and Rollback Strategies": true
                                },
                                "CI/CD & DevOps": {
                                    "Fastlane Integration for iOS/Android Builds": true,
                                    "GitHub Actions / GitLab CI for Mobile Projects": true,
                                    "Detox in CI Pipelines": true,
                                    "EAS Build Pipelines (Expo Managed & Bare)": true,
                                    "Secrets Management in CI/CD": true
                                },
                                "Enterprise Patterns": {
                                    "Monorepo Structure with Lerna/Nx/Turborepo": true,
                                    "Micro-Frontend/MFE with RN Navigation": true,
                                    "Modular Architecture (Domain, Feature, Core layers)": true,
                                    "Internationalization (i18n, react-i18next)": true,
                                    "Accessibility and Localization": true,
                                    "Accessibility for Screen Readers, Contrast, Focus Management": true
                                },
                                "Platform Capabilities": {
                                    "Push Notifications (FCM/APNs)": true,
                                    "Notification Channels and Actionable Notifications": true,
                                    "Background Tasks and Headless JS": true,
                                    "Background Location and Fetch": true,
                                    "In-App Purchases and Subscriptions": true,
                                    "Auth Flows with OAuth/OIDC, PKCE, Biometrics": true
                                },
                                "Security & Compliance": {
                                    "SSL Pinning": true,
                                    "Jailbreak/Root Detection": true,
                                    "ProGuard/R8 Obfuscation": true,
                                    "Play Integrity API / SafetyNet": true,
                                    "Apple Privacy Manifests and ATT Prompts": true,
                                    "GDPR/CCPA Compliance in Mobile Apps": true
                                }
                            }
                            ,
                            "Testing": {
                                "Unit Testing with Jest": true,
                                "Component Testing with React Testing Library": true,
                                "End-to-End Testing with Cypress": true,
                                "Mocking API Requests": true
                            },
                            "Build Tools and Deployment": {
                                "___urlPath___": "build-tools-and-deployment",
                                "Webpack and Babel": {
                                    "___urlPath___": "webpack-and-babel",
                                    "___md___": 728
                                },
                                "Code Bundling and Minification": {
                                    "___urlPath___": "code-bundling-and-minification",
                                    "___md___": 729
                                },
                                "Creating a Production Build": {
                                    "___urlPath___": "creating-a-production-build",
                                    "___md___": 737
                                },
                                "Deploying React Apps": {
                                    "Netlify": true,
                                    "Vercel": true,
                                    "AWS Amplify": true
                                },
                                "CI/CD for React": {
                                    "GitHub Actions": true,
                                    "Linting + Testing Pipeline": true,
                                    "Source-map Analyzer": true
                                }
                            },
                            "Debugging & DevTools": {
                                "___urlPath___": "debugging",
                                "React DevTools Profiler": true,
                                "Chrome Performance Tools": true,
                                "Bundle Size Analysis": true
                            },
                            "System Design in React": {
                                "Component Architecture": {
                                    "Atomic Design Principles": true,
                                    "Container vs Presentational": true,
                                    "Smart vs Dumb Components": true
                                },
                                "App-Level Architecture": {
                                    "Monolithic SPA vs Micro Frontends": true,
                                    "Lazy Loading and Route-Based Splitting": true,
                                    "Global State Architecture": {
                                        "Redux vs Context vs Zustand": true,
                                        "Event Bus and Pub/Sub Models": true
                                    }
                                },
                                "Enterprise Folder Structure": {
                                    "Domain-driven Folder Layouts": true,
                                    "Feature-based Organization": true,
                                    "Separation of Concerns": true
                                },
                                "API Integration Architecture": {
                                    "REST vs GraphQL in React": true,
                                    "Error Handling Patterns": true,
                                    "Retry Logic and Debounce/Throttle": true
                                },
                                "Cross-Cutting Concerns": {
                                    "Authentication and Authorization Flow": true,
                                    "Role-Based Route Guards": true,
                                    "Error Boundaries and Logging": true
                                },
                                "Reusability and Scalability": {
                                    "Reusable Component Libraries": true,
                                    "Storybook for UI Isolation": true,
                                    "Design System Integration": true
                                },
                                "Scenario-Based Design Questions": {
                                    "Design a Dashboard with Role-Based Widgets": true,
                                    "Design a Notification System (Toast, Modal, etc.)": true,
                                    "Design an E-commerce Checkout Flow": true,
                                    "Design a Multi-Step Form with Validation": true,
                                    "Design a Real-Time Chat UI with Socket.io": true
                                }
                            },
                            "Coding Challenges": {
                                "___urlPath___": "coding-challenges",
                                "___md___": 471
                            },
                            "Machine Coding challenges": {
                                "___urlPath___": "machine-coding-challenges",
                                "___md___": 979
                            },
                            "QnA": {
                                "___urlPath___": "qna",
                                "Parent-child component render and useEffect": {
                                    "___urlPath___": "parent-child-component-render-and-use-effect",
                                    "___md___": 754
                                }
                            }
                        },
                        ...NextJS,
                        "Vue.js": {
                            "Core Concepts": {
                                "Reactivity System (ref, reactive, watch, computed)": true,
                                "Template Syntax and Directives (v-bind, v-if, v-for, v-model)": true,
                                "Lifecycle Hooks (onMounted, onUnmounted, etc.)": true,
                                "Vue Component Basics (Props, Events, Slots)": true,
                                "Single File Components (SFCs)": true
                            },
                            "Vue 3 & Composition API": {
                                "Setup Function and Reactive Scope": true,
                                "ref vs reactive vs readonly vs shallowReactive": true,
                                "watch, watchEffect, and cleanup logic": true,
                                "Custom Composition Functions (Reusable Logic)": true,
                                "Script Setup Syntax": true
                            },
                            "Advanced Vue Concepts": {
                                "Provide / Inject for Dependency Injection": true,
                                "Teleport for Modals and Portals": true,
                                "Dynamic Components and Async Components": true,
                                "Mixins vs Composables": true,
                                "Slots (Default, Named, Scoped Slots)": true
                            },
                            "Routing with Vue Router": {
                                "Setting up Vue Router": true,
                                "Dynamic Route Matching and Params": true,
                                "Nested Routes and Named Views": true,
                                "Navigation Guards (Global, Per-Route, In-Component)": true,
                                "Lazy Loading Routes and Code Splitting": true
                            },
                            "State Management with Pinia (Vuex alternative)": {
                                "Pinia Store Creation and Usage": true,
                                "State, Getters, Actions with Pinia": true,
                                "Pinia Plugins and Persistence": true,
                                "Pinia vs Vuex Comparison": true,
                                "Modular Stores and Store Injection": true
                            },
                            "Vue with TypeScript": {
                                "Typing Props, Emits, and Refs": true,
                                "DefineComponent and defineProps/defineEmits": true,
                                "Generic Components in Vue": true,
                                "Extending Interfaces and Utility Types in SFCs": true,
                                "Type-Safe Pinia and Router Integration": true
                            },
                            "Form Handling and Validation": {
                                "Two-Way Binding with v-model": true,
                                "Custom Input Components with v-model": true,
                                "Validation Libraries: VeeValidate, Yup, or Zod": true,
                                "Error Display, Field States, Form Submission": true,
                                "Async Validation and Dependent Fields": true
                            },
                            "Testing in Vue": {
                                "Unit Testing with Vitest / Jest": true,
                                "Vue Test Utils for Components": true,
                                "Testing Events, Props, and Emits": true,
                                "Mocking APIs and Router in Tests": true,
                                "E2E Testing with Cypress or Playwright": true
                            },
                            "Vue + REST / GraphQL Integration": {
                                "Fetching Data with Fetch API / Axios": true,
                                "Error Handling and Loading States": true,
                                "Using Composition Functions for API Calls": true,
                                "GraphQL Clients like urql / Apollo in Vue": true,
                                "Auth Tokens and Secure Headers Integration": true
                            },
                            "Vue Performance Optimization": {
                                "Reactive Performance Pitfalls (Proxy vs Ref)": true,
                                "Lazy Load Components and Routes": true,
                                "v-once, v-memo, and v-show vs v-if": true,
                                "KeepAlive and Dynamic Component Caching": true,
                                "Performance DevTools and Debugging Tips": true
                            },
                            "Vue Ecosystem and Tooling": {
                                "Vite Configuration and Optimizations": true,
                                "Vue CLI vs Vite vs Nuxt": true,
                                "Scoped CSS, CSS Modules, PostCSS, Tailwind": true,
                                "Custom Directives and Plugins": true,
                                "Internationalization with vue-i18n": true
                            },
                            "Nuxt.js (Optional but Useful)": {
                                "Nuxt Pages and File-Based Routing": true,
                                "Server-Side Rendering (SSR) with Nuxt": true,
                                "Nuxt Middleware and Plugins": true,
                                "State Management and AsyncData in Nuxt": true,
                                "Deploying Nuxt Apps (Vercel, Netlify, etc.)": true
                            },
                            "Frontend System Design": {
                                "Vue in Microfrontend Architecture": true,
                                "SSR, CSR, and ISR trade-offs with Vue/Nuxt": true,
                                "Performance Budgets, Lazy Loading Strategies": true,
                                "State Hydration and Pre-Fetching Patterns": true,
                                "Designing Scalable Component Architecture (Atomic Design)": true,
                                "Edge Rendering and CDN Strategy (Vercel, Cloudflare)": true
                            },
                            "Browser Fundamentals and Web APIs": {
                                "Event Loop, Call Stack, Microtasks": true,
                                "DOM APIs, MutationObserver, IntersectionObserver": true,
                                "Storage APIs (localStorage, sessionStorage, IndexedDB)": true,
                                "Performance APIs and Web Workers": true,
                                "Security: XSS, CSP, CORS, SameSite Cookies": true
                            },
                            "Advanced TypeScript Patterns": {
                                "Utility Types (Partial, Pick, ReturnType, etc.)": true,
                                "Discriminated Unions and Conditional Types": true,
                                "Advanced Generics with Vue Components": true,
                                "TS Config Best Practices for Vue Projects": true
                            },
                            "Testing Strategy & CI/CD": {
                                "Test Pyramid for Vue Projects": true,
                                "Coverage Reporting and Thresholds (vitest/jest)": true,
                                "Cypress GitHub Actions CI Integration": true,
                                "Testing SSR/Nuxt Components": true
                            },
                            "Monorepos & Modular Vue Apps": {
                                "Nx or TurboRepo with Vue Projects": true,
                                "Shared Libraries and Design Systems": true,
                                "Vue Microfrontends (Module Federation, Single-SPA)": true
                            }





                        },
                        "Angular": {
                            "___urlPath___": "angular",
                            "Introduction": {
                                "___urlPath___": "introduction",
                                "Overview of Angular": true,
                                "History and Evolution": true,
                                "Key Features of Angular": true,
                                "Angular vs Other Frameworks": true
                            },
                            "Setup and Installation": {
                                "___urlPath___": "setup-and-installation",
                                "Installing Angular CLI": true,
                                "Creating a New Angular Project": true,
                                "Project Structure and Configuration": true,
                                "Running the Angular Application": true
                            },
                            "TypeScript for Angular": {
                                "___urlPath___": "typescript-for-angular",
                                "Introduction to TypeScript": true,
                                "Basic Syntax and Data Types": true,
                                "Interfaces and Classes": true,
                                "Modules and Namespaces": true,
                                "TypeScript Features Used in Angular": true
                            },
                            "Components and Templates": {
                                "___urlPath___": "components-and-templates",
                                "Understanding Components": true,
                                "Component Decorators and Metadata": true,
                                "Creating and Using Components": true,
                                "Component Lifecycle Hooks": true,
                                "Template Syntax and Data Binding": true,
                                "Interpolation and Property Binding": true,
                                "Event Binding and Two-Way Binding": true
                            },
                            "Directives and Pipes": {
                                "___urlPath___": "directives-and-pipes",
                                "Built-in Directives (ngIf, ngFor, ngSwitch)": true,
                                "Attribute Directives": true,
                                "Creating Custom Directives": true,
                                "Pipes and Data Formatting": true,
                                "Creating Custom Pipes": true
                            },
                            "Modules and Routing": {
                                "___urlPath___": "modules-and-routing",
                                "Understanding Angular Modules (NgModules)": true,
                                "Lazy Loading and Feature Modules": true,
                                "Angular Routing Basics": true,
                                "Route Guards (CanActivate, CanDeactivate)": true,
                                "Child Routes and Nested Routing": true,
                                "Router Events and Navigation Strategies": true
                            },
                            "Services and Dependency Injection": {
                                "___urlPath___": "services-and-dependency-injection",
                                "Creating and Using Services": true,
                                "Dependency Injection in Angular": true,
                                "Hierarchical Injector and Provider Scopes": true,
                                "Using HTTPClient for API Calls": true,
                                "Interceptors and Error Handling": true
                            },
                            "Forms in Angular": {
                                "___urlPath___": "forms-in-angular",
                                "Template-Driven Forms": true,
                                "Reactive Forms": true,
                                "Form Validation and Custom Validators": true,
                                "Dynamic Forms and FormArray": true
                            },
                            "State Management": {
                                "___urlPath___": "state-management",
                                "Introduction to State Management": true,
                                "Using Services for State Management": true,
                                "Understanding NgRx and Redux Pattern": true,
                                "NgRx Store, Actions, and Effects": true
                            },
                            "Angular Material and UI Components": {
                                "___urlPath___": "angular-material-and-ui-components",
                                "Introduction to Angular Material": true,
                                "Using Material Components": true,
                                "Theming and Customization": true,
                                "Working with Third-Party UI Libraries": true
                            },
                            "Testing and Debugging": {
                                "___urlPath___": "testing-and-debugging",
                                "Unit Testing with Jasmine and Karma": true,
                                "Component Testing and TestBed": true,
                                "Service and HTTP Testing": true,
                                "End-to-End Testing with Protractor and Cypress": true,
                                "Debugging Angular Applications": true
                            },
                            "Performance Optimization": {
                                "___urlPath___": "performance-optimization",
                                "Lazy Loading and Optimization Techniques": true,
                                "Just-in-Time (JIT) and Ahead-of-Time (AOT)": true,
                                "Ahead-of-Time (AOT) Compilation": true,
                                "Reducing Bundle Size and Tree Shaking": true,
                                "Performance Monitoring and Profiling": true
                            },
                            "Progressive Web Apps (PWA) in Angular": {
                                "___urlPath___": "pwa-in-angular",
                                "Introduction to PWAs": true,
                                "Service Workers and Caching Strategies": true,
                                "Implementing Push Notifications": true,
                                "Offline Capabilities and Background Sync": true
                            },
                            "Server-Side Rendering (SSR) with Angular Universal": {
                                "___urlPath___": "server-side-rendering-angular-universal",
                                "Introduction to Angular Universal": true,
                                "Setting Up an SSR Angular App": true,
                                "Pre-Rendering and Dynamic Rendering": true,
                                "Deploying Angular Universal Applications": true
                            },
                            "Micro Frontends in Angular": {
                                "___urlPath___": "micro-frontends-in-angular",
                                "Introduction to Micro Frontends": true,
                                "Implementing Module Federation in Angular": true,
                                "Integrating Multiple Angular Apps": true,
                                "Challenges and Best Practices": true
                            },
                            "Deployment and CI/CD": {
                                "___urlPath___": "deployment-and-ci-cd",
                                "Building and Deploying Angular Apps": true,
                                "Configuring CI/CD Pipelines": true,
                                "Hosting on Firebase, AWS, or Netlify": true,
                                "Best Practices for Production Deployment": true
                            },
                            "Advanced Topics": {
                                "___urlPath___": "advanced-topics",
                                "Using WebSockets in Angular": true,
                                "GraphQL with Angular": true,
                                "Multi-Language Support (i18n & Localization)": true,
                                "Working with WebAssembly and Angular": true
                            }
                        },
                        "Svelte": {
                            "___urlPath___": "svelte",
                            "Introduction": {
                                "___urlPath___": "introduction",
                                "Overview of Svelte": true,
                                "History and Evolution": true,
                                "Key Features of Svelte": true,
                                "Svelte vs Other Frameworks": true
                            },
                            "Setup and Installation": {
                                "___urlPath___": "setup-and-installation",
                                "Installing Svelte": true,
                                "Creating a New Svelte Project": true,
                                "Project Structure and Configuration": true,
                                "Running the Svelte Application": true
                            },
                            "Svelte Basics": {
                                "___urlPath___": "svelte-basics",
                                "Understanding Svelte Components": true,
                                "Reactive Declarations and Reactivity": true,
                                "Svelte Directives (if, each, await)": true,
                                "Event Handling and Binding": true,
                                "Lifecycle Functions in Svelte": true
                            },
                            "Component Development": {
                                "___urlPath___": "component-development",
                                "Creating and Using Components": true,
                                "Props and Data Passing Between Components": true,
                                "Slots and Content Projection": true,
                                "Context API and Stores for Component Communication": true
                            },
                            "Styling in Svelte": {
                                "___urlPath___": "styling-in-svelte",
                                "Scoped Styles in Svelte": true,
                                "Global Styles and CSS Preprocessors": true,
                                "Animations and Transitions": true,
                                "Custom CSS and Tailwind with Svelte": true
                            },
                            "State Management in Svelte": {
                                "___urlPath___": "state-management",
                                "Using Writable, Readable, and Derived Stores": true,
                                "Context API for Global State": true,
                                "Using Local Component State": true
                            },
                            "Routing with Svelte": {
                                "___urlPath___": "routing",
                                "Setting Up Routing with SvelteKit": true,
                                "Dynamic Routing and Parameters": true,
                                "Navigation and Guards": true,
                                "Lazy Loading and Code Splitting": true
                            },
                            "Forms and Validation": {
                                "___urlPath___": "forms-and-validation",
                                "Two-Way Binding with Forms": true,
                                "Form Validation using Custom Validators": true,
                                "Handling File Uploads": true,
                                "Creating Reusable Form Components": true
                            },
                            "Fetching Data and APIs": {
                                "___urlPath___": "fetching-data-and-apis",
                                "Using Fetch API and Axios": true,
                                "Handling API Responses and Errors": true,
                                "Consuming REST APIs with Svelte": true,
                                "Using GraphQL with Svelte": true
                            },
                            "Performance Optimization": {
                                "___urlPath___": "performance-optimization",
                                "Optimizing Svelte Applications": true,
                                "Lazy Loading Components": true,
                                "Minimizing Repaints and Rerenders": true,
                                "Efficient Store Usage for Performance": true
                            },
                            "SvelteKit: Full-Stack Development": {
                                "___urlPath___": "sveltekit-fullstack",
                                "Introduction to SvelteKit": true,
                                "File-Based Routing in SvelteKit": true,
                                "Server-Side Rendering (SSR) in SvelteKit": true,
                                "Static Site Generation (SSG) with SvelteKit": true
                            },
                            "Testing and Debugging": {
                                "___urlPath___": "testing-and-debugging",
                                "Unit Testing with Vitest": true,
                                "Integration Testing with Cypress": true,
                                "Debugging Svelte Applications": true,
                                "Performance Profiling Tools": true
                            },
                            "Progressive Web Apps (PWA) in Svelte": {
                                "___urlPath___": "pwa-in-svelte",
                                "Introduction to PWAs": true,
                                "Service Workers and Offline Support": true,
                                "Push Notifications and Background Sync": true,
                                "Deploying a PWA with Svelte": true
                            },
                            "Micro Frontends in Svelte": {
                                "___urlPath___": "micro-frontends-in-svelte",
                                "Introduction to Micro Frontends": true,
                                "Using Module Federation with Svelte": true,
                                "Integrating Multiple Svelte Applications": true,
                                "Best Practices and Challenges": true
                            },
                            "Animations and UI Interactivity": {
                                "___urlPath___": "animations-and-ui-interactivity",
                                "Built-in Animations in Svelte": true,
                                "Custom Animation Functions": true,
                                "Spring and Tweened Stores": true,
                                "Creating Interactive UI Components": true
                            },
                            "Deployment and CI/CD": {
                                "___urlPath___": "deployment-and-ci-cd",
                                "Building and Deploying Svelte Apps": true,
                                "Setting Up CI/CD Pipelines": true,
                                "Hosting on Vercel, Netlify, Firebase, or AWS": true
                            },
                            "Advanced Topics": {
                                "___urlPath___": "advanced-topics",
                                "Using WebSockets in Svelte": true,
                                "Integrating WebAssembly with Svelte": true,
                                "Internationalization (i18n) in Svelte": true,
                                "Svelte with Electron for Desktop Apps": true
                            }
                        },
                        "Comparisons": {
                            "___urlPath___": "comparisons",
                            "React Vs Vue": {
                                "___urlPath___": "react-vs-vue",
                                "___md___": 1067
                            },
                            "React vs Vue vs Svelte vs Angular": {
                                "___urlPath___": "react-vs-vue-vs-svelte-vs-angular",
                                "___md___": 1068
                            }
                        }
                    },
                    "Data Exchange and Web APIs": {
                        "XML (eXtensible Markup Language)": {
                            "Basics of XML Syntax and Structure": true,
                            "Parsing XML in JavaScript (DOMParser)": true,
                            "Use Cases of XML": true
                        },
                        "JSON (JavaScript Object Notation)": {
                            "JSON Syntax": true,
                            "Serialization and Deserialization in JavaScript": true,
                            "Use Cases of JSON (APIs, Configuration)": true
                        },
                        "AJAX (Asynchronous JavaScript and XML)": {
                            "What is AJAX?": true,
                            "Making Asynchronous Requests": true,
                            "Using XMLHttpRequest": true,
                            "AJAX with Fetch API": true,
                            "Examples and Use Cases": true
                        }
                    }
                },
                "Server-Side Development": {
                    "___urlPath___": "server-side-development",
                    "Fundamentals": {
                        "Server and Client Communication": true,
                        "RESTful APIs": true,
                        "HTTP Methods (GET, POST, PUT, DELETE)": true
                    },
                    "Server-Side Scripting Languages": {
                        "___urlPath___": "server-side-scripting-languages",
                        "Node.js": {
                            "Modules and Packages": true,
                            "Event Loop": true,
                            "Express.js Framework": true,
                            "Middleware and Routing": true
                        },
                        "Java": {
                            "___urlPath___": "java",
                            "Introduction to Java for Web Development": {
                                "___urlPath___": "introduction-to-java-for-web-development",
                                "___md___": 47
                            },
                            "Java Servlets": {
                                "___urlPath___": "java-servlets",
                                "Basics of Servlets": {
                                    "___urlPath___": "basics-of-servlets",
                                    "___md___": 48
                                },
                                "Servlet Lifecycle": {
                                    "___urlPath___": "servlet-lifecycle",
                                    "___md___": 49
                                },
                                "Handling Requests and Responses": {
                                    "___urlPath___": "handling-requests-and-responses",
                                    "___md___": 50
                                },
                                "Session Management": {
                                    "___urlPath___": "session-management",
                                    "___md___": 51
                                }
                            },
                            "Java Server Pages (JSP)": {
                                "___urlPath___": "java-server-pages-jsp",
                                "Basics of JSP": {
                                    "___urlPath___": "basics-of-jsp",
                                    "___md___": 52
                                },
                                "JSP Lifecycle": {
                                    "___urlPath___": "jsp-lifecycle",
                                    "___md___": 53
                                },
                                "Using Expression Language and JSTL": {
                                    "___urlPath___": "using-expression-language-and-jstl",
                                    "___md___": 54
                                }
                            },
                            "Spring Framework": {
                                "Dependency Injection and IoC": true,
                                "Spring MVC for Web Applications": true,
                                "Spring Boot for Rapid Development": {
                                    "___urlPath___": "spring-boot",
                                    "Creating REST APIs": {
                                        "Introduction to REST": true,
                                        "Building RESTful Endpoints": true,
                                        "Request and Response Mapping": true,
                                        "Handling Exceptions in REST APIs": true,
                                        "Testing REST APIs": true
                                    },
                                    "Auto-configuration": {
                                        "Spring Boot Auto-Configuration Concepts": true,
                                        "Customizing Auto-Configuration": true,
                                        "Using Starter Dependencies": true,
                                        "Disabling Specific Auto-Configurations": true
                                    },
                                    "Profiles": {
                                        "___urlPath___": "profiles",
                                        "Introduction to Spring Profiles": {
                                            "___urlPath___": "introduction-to-spring-profiles",
                                            "___md___": 219
                                        },
                                        "Defining Environment-Specific Configurations": true,
                                        "Activating Profiles": true,
                                        "Using Profiles with YAML and Properties Files": true,
                                        "Testing with Different Profiles": true
                                    },
                                    "Actuator": {
                                        "Introduction to Spring Boot Actuator": true,
                                        "Built-In Actuator Endpoints": true,
                                        "Customizing Actuator Endpoints": true,
                                        "Monitoring Applications with Actuator": true,
                                        "Securing Actuator Endpoints": true
                                    }
                                },
                                "Building RESTful APIs with Spring Boot": true,
                                "Spring Security for Authentication and Authorization": {
                                    "___urlPath___": "spring-security-for-authentication-and-authorization",
                                    "Introduction": {
                                        "___urlPath___": "introduction",
                                        "___md___": 201
                                    },
                                    "Basic Authentication and Authorization": {
                                        "___urlPath___": "basic-auth-and-authz",
                                        "___md___": 202
                                    },
                                    "RBAC": {
                                        "___urlPath___": "role-based-access-control",
                                        "___md___": 203
                                    },
                                    "Integrating RBAC with database": {
                                        "___urlPath___": "integrating-rbac-with-database",
                                        "___md___": 204
                                    },
                                    "Password Management": {
                                        "___urlPath___": "password-management",
                                        "___md___": 53
                                    },
                                    "JWT": {
                                        "___urlPath___": "jwt",
                                        "___md___": 959
                                    },
                                    "OAuth2": {
                                        "___urlPath___": "oauth2",
                                        "___md___": 55
                                    },
                                    "SSO": {
                                        "___urlPath___": "sso",
                                        "___md___": 56
                                    },
                                    "LDAP Integration": {
                                        "___urlPath___": "ldap-integration",
                                        "___md___": 58
                                    },
                                    "Session Management": {
                                        "___urlPath___": "session-management",
                                        "___md___": 59
                                    },
                                    "CSRF Protection": {
                                        "___urlPath___": "csrf-protection",
                                        "___md___": 60
                                    },
                                    "REST API Security": {
                                        "___urlPath___": "rest-api-security",
                                        "___md___": 61
                                    },
                                    "Custom Security Configurations": {
                                        "___urlPath___": "custom-security-configurations",
                                        "___md___": 62
                                    },
                                    "Testing": {
                                        "___urlPath___": "testing",
                                        "___md___": 63
                                    },
                                    "Best Practices": {
                                        "___urlPath___": "best-practices",
                                        "___md___": 64
                                    }
                                },

                                "Spring Data JPA": {
                                    "___urlPath___": "spring-data-jpa",
                                    "Introduction": {
                                        "___urlPath___": "introduction",
                                        "___md___": 205
                                    },
                                    "Repository Design": {
                                        "___urlPath___": "repository-design",
                                        "CrudRepository": {
                                            "___urlPath___": "crud-repository",
                                            "___md___": 206
                                        },
                                        "JpaRepository": {
                                            "___urlPath___": "jpa-repository",
                                            "___md___": 207
                                        },
                                        "PagingAndSortingRepository": {
                                            "___urlPath___": "paging-sorting-repository",
                                            "___md___": 208
                                        },
                                        "CustomRepositories": {
                                            "___urlPath___": "custom-repositories",
                                            "___md___": 209
                                        }
                                    },
                                    "Query Methods": {
                                        "___urlPath___": "query-methods",
                                        "Derived Queries": {
                                            "___urlPath___": "derived-queries",
                                            "___md___": 210
                                        },
                                        "Named Queries": {
                                            "___urlPath___": "named-queries",
                                            "___md___": 211
                                        },
                                        "JPQL": {
                                            "___urlPath___": "jpql",
                                            "___md___": 212
                                        },
                                        "Native Queries": {
                                            "___urlPath___": "native-queries",
                                            "___md___": 213
                                        }
                                    },
                                    "Criteria API": {
                                        "___urlPath___": "criteria-api",
                                        "Introduction": {
                                            "___urlPath___": "introduction",
                                            "___md___": 214
                                        },
                                        "CriteriaBuilder": {
                                            "___urlPath___": "criteria-builder",
                                            "___md___": 215
                                        },
                                        "CriteriaQuery": {
                                            "___urlPath___": "criteria-query",
                                            "___md___": 216
                                        },
                                        "Predicate and Expressions": {
                                            "___urlPath___": "predicate-expressions",
                                            "___md___": 217
                                        },
                                        "Joins and Aggregations": {
                                            "___urlPath___": "joins-aggregations",
                                            "___md___": 218
                                        }
                                    },
                                    "AdvancedFeatures": {
                                        "___urlPath___": "advanced-features",
                                        "Auditing": {
                                            "___urlPath___": "auditing",
                                        },
                                        "EntityGraph": {
                                            "___urlPath___": "entity-graph",
                                        },
                                        "Specifications": {
                                            "___urlPath___": "specifications",
                                        },
                                        "Projections": {
                                            "___urlPath___": "projections",
                                        },
                                        "CustomQueryResultMappers": {
                                            "___urlPath___": "custom-query-result-mappers",
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "Database Connectivity": {
                        "___urlPath___": "database-connectivity",
                        "SQL Basics": {
                            "___urlPath___": "sql-basics",
                            "___md___": 142
                        },
                        "NoSQL Basics (MongoDB, Redis)": {
                            "___urlPath___": "nosql",
                            "___md___": 143
                        },
                        "ORMs Basics (Mongoose, Sequelize)": {
                            "___urlPath___": "orm",
                            "___md___": 144
                        }
                    }
                },
                "Full-Stack Development": {
                    "MEAN/MERN Stack": {
                        "___urlPath___": "mean-mern-stack",

                        "MongoDB": {
                            "___urlPath___": "mongodb",
                            "Introduction to MongoDB": {
                                "___urlPath___": "introduction",
                                "What is MongoDB?": {
                                    "___urlPath___": "what-is-mongodb",
                                    "___md___": 501
                                },
                                "Features of MongoDB": {
                                    "___urlPath___": "features",
                                    "___md___": 502
                                },
                                "MongoDB vs SQL Databases": {
                                    "___urlPath___": "mongodb-vs-sql",
                                    "___md___": 503
                                },
                                "Use Cases of MongoDB": {
                                    "___urlPath___": "use-cases",
                                    "___md___": 504
                                }
                            },
                            "MongoDB Installation & Setup": {
                                "___urlPath___": "installation",
                                "Installing MongoDB on Local Machine": {
                                    "___urlPath___": "installing-locally",
                                    "___md___": 505
                                },
                                "Setting Up MongoDB Atlas (Cloud)": {
                                    "___urlPath___": "mongodb-atlas",
                                    "___md___": 506
                                },
                                "Connecting MongoDB with Compass": {
                                    "___urlPath___": "mongodb-compass",
                                    "___md___": 507
                                },
                                "Connecting MongoDB with Node.js": {
                                    "___urlPath___": "mongodb-nodejs",
                                    "___md___": 508
                                }
                            },
                            "Data Modeling in MongoDB": {
                                "___urlPath___": "data-modeling",
                                "Collections and Documents": {
                                    "___urlPath___": "collections-documents",
                                    "___md___": 509
                                },
                                "Schema Design Best Practices": {
                                    "___urlPath___": "schema-best-practices",
                                    "___md___": 510
                                },
                                "Referencing vs Embedding": {
                                    "___urlPath___": "referencing-vs-embedding",
                                    "___md___": 511
                                },
                                "Data Types in MongoDB": {
                                    "___urlPath___": "data-types",
                                    "___md___": 512
                                }
                            },
                            "CRUD Operations": {
                                "___urlPath___": "crud",
                                "Create Operations (Insert)": {
                                    "___urlPath___": "insert",
                                    "___md___": 513
                                },
                                "Read Operations (Find)": {
                                    "___urlPath___": "find",
                                    "___md___": 514
                                },
                                "Update Operations": {
                                    "___urlPath___": "update",
                                    "___md___": 515
                                },
                                "Delete Operations": {
                                    "___urlPath___": "delete",
                                    "___md___": 516
                                },
                                "Bulk Operations": {
                                    "___urlPath___": "bulk-operations",
                                    "___md___": 517
                                }
                            },
                            "Querying in MongoDB": {
                                "___urlPath___": "querying",
                                "Operators in Queries": {
                                    "___urlPath___": "operators",
                                    "___md___": 518
                                },
                                "Projections": {
                                    "___urlPath___": "projections",
                                    "___md___": 519
                                },
                                "Sorting, Skipping, and Limiting": {
                                    "___urlPath___": "sort-skip-limit",
                                    "___md___": 520
                                },
                                "Aggregation Framework": {
                                    "___urlPath___": "aggregation-framework",
                                    "___md___": 521
                                },
                                "Aggregation Stages & Operators": {
                                    "___urlPath___": "aggregation-stages",
                                    "___md___": 522
                                }
                            },
                            "Indexes and Performance Optimization": {
                                "___urlPath___": "indexes",
                                "Creating Indexes": {
                                    "___urlPath___": "creating-indexes",
                                    "___md___": 584
                                },
                                "Types of Indexes": {
                                    "___urlPath___": "index-types",
                                    "___md___": 585
                                },
                                "Query Optimization with Indexes": {
                                    "___urlPath___": "query-optimization",
                                    "___md___": 586
                                },
                                "Explain Plan & Analyzing Queries": {
                                    "___urlPath___": "explain-plan",
                                    "___md___": 587
                                }
                            },
                            "Advanced MongoDB Concepts": {
                                "___urlPath___": "advanced",
                                "Transactions": {
                                    "___urlPath___": "transactions",
                                    "___md___": 589
                                },
                                "Change Streams": {
                                    "___urlPath___": "change-streams",
                                    "___md___": 590
                                },
                                "TTL Collections": {
                                    "___urlPath___": "ttl-collections",
                                    "___md___": 529
                                },
                                "Capped Collections": {
                                    "___urlPath___": "capped-collections",
                                    "___md___": 530
                                },
                                "Replication & High Availability": {
                                    "___urlPath___": "replication",
                                    "Replica Sets": {
                                        "___urlPath___": "replica-sets",
                                        "___md___": 591
                                    },
                                    "Elections and Failover": {
                                        "___urlPath___": "elections-failover",
                                        "___md___": 592
                                    },
                                    "Read Preferences": {
                                        "___urlPath___": "read-preferences",
                                        "___md___": 543
                                    }
                                },
                                "Sharding & Horizontal Scaling": {
                                    "___urlPath___": "sharding",
                                    "Sharded Clusters": {
                                        "___urlPath___": "sharded-clusters",
                                        "___md___": 544
                                    },
                                    "Shard Keys": {
                                        "___urlPath___": "shard-keys",
                                        "___md___": 545
                                    },
                                    "Balancing and Chunk Migration": {
                                        "___urlPath___": "chunk-migration",
                                        "___md___": 546
                                    }
                                },
                                "Backup and Monitoring": {
                                    "___urlPath___": "backup-monitoring",
                                    "Backup Methods": {
                                        "___urlPath___": "backup-methods",
                                        "___md___": 547
                                    },
                                    "Monitoring Tools": {
                                        "___urlPath___": "monitoring-tools",
                                        "___md___": 588
                                    }
                                }
                            },
                            "Security and Access Control": {
                                "___urlPath___": "security",
                                "Authentication & Authorization": {
                                    "___urlPath___": "auth",
                                    "___md___": 531
                                },
                                "Role-Based Access Control": {
                                    "___urlPath___": "rbac",
                                    "___md___": 532
                                },
                                "Data Encryption": {
                                    "___urlPath___": "encryption",
                                    "___md___": 533
                                },
                                "Auditing & Monitoring": {
                                    "___urlPath___": "auditing-monitoring",
                                    "___md___": 534
                                }
                            },
                            "MongoDB with Node.js": {
                                "___urlPath___": "nodejs",
                                "Using Mongoose ODM": {
                                    "___urlPath___": "mongoose",
                                    "___md___": 535
                                },
                                "Schema and Model Definitions": {
                                    "___urlPath___": "schema-model",
                                    "___md___": 536
                                },
                                "CRUD with Mongoose": {
                                    "___urlPath___": "crud-mongoose",
                                    "___md___": 537
                                },
                                "Validation and Middleware": {
                                    "___urlPath___": "validation-middleware",
                                    "___md___": 538
                                }
                            }
                        },

                        "Express.js": true,
                        "Angular/React": true,
                        "Node.js (JavaScript Runtime)": {
                            "___urlPath___": "nodejs",
                            "Introduction to Node.js": {
                                "___urlPath___": "introduction-to-nodejs",
                                "What is Node.js?": {
                                    "___urlPath___": "what-is-nodejs",
                                    "___md___": 474
                                },
                                "Why Use Node.js?": {
                                    "___urlPath___": "why-use-nodejs",
                                    "___md___": 475
                                },
                                "Node.js Architecture Overview": {
                                    "___urlPath___": "nodejs-architecture-overview",
                                    "___md___": 473
                                },
                                "Pre-requisites": {
                                    "___urlPath___": "pre-requisites",
                                    "ASCII vs Unicode": {
                                        "___urlPath___": "ascii-vs-unicode",
                                        "___md___": 477
                                    },
                                    "Lexical grammar": {
                                        "___urlPath___": "lexical-grammar",
                                        "___md___": 476
                                    }
                                }
                            },
                            "Core Modules": {
                                "___urlPath___": "core-modules",
                                "File System (fs)": {
                                    "___urlPath___": "file-system",
                                    "___md___": 4
                                },
                                "Events": {
                                    "___urlPath___": "events",
                                    "___md___": 5
                                },
                                "Streams": {
                                    "___urlPath___": "streams",
                                    "___md___": 6
                                },
                                "Buffers": {
                                    "___urlPath___": "buffers",
                                    "___md___": 7
                                },
                                "Path Module": {
                                    "___urlPath___": "path-module",
                                    "___md___": 8
                                },
                                "OS Module": {
                                    "___urlPath___": "os-module",
                                    "___md___": 9
                                }
                            },
                            "Asynchronous Programming": {
                                "___urlPath___": "asynchronous-programming",
                                "Callbacks": {
                                    "___urlPath___": "callbacks",
                                    "___md___": 415
                                },
                                "Promises": {
                                    "___urlPath___": "promises",
                                    "___md___": 416
                                },
                                "Async/Await": {
                                    "___urlPath___": "async-await",
                                    "___md___": 417
                                }
                            },
                            "NPM (Node Package Manager)": {
                                "___urlPath___": "npm",
                                "What is NPM?": {
                                    "___urlPath___": "what-is-npm",
                                    "___md___": 13
                                },
                                "Installing Packages": {
                                    "___urlPath___": "installing-packages",
                                    "___md___": 14
                                },
                                "Global vs Local Packages": {
                                    "___urlPath___": "global-vs-local-packages",
                                    "___md___": 15
                                },
                                "Semantic Versioning": {
                                    "___urlPath___": "semantic-versioning",
                                    "___md___": 16
                                }
                            },
                            "Working with Express.js": {
                                "___urlPath___": "expressjs",
                                "What is Express.js?": {
                                    "___urlPath___": "what-is-express",
                                    "___md___": 17
                                },
                                "Routing in Express": {
                                    "___urlPath___": "routing-in-express",
                                    "___md___": 18
                                },
                                "Middleware": {
                                    "___urlPath___": "middleware",
                                    "___md___": 19
                                },
                                "Error Handling": {
                                    "___urlPath___": "error-handling",
                                    "___md___": 20
                                },
                                "Request and Response Objects": {
                                    "___urlPath___": "request-response",
                                    "___md___": 21
                                }
                            },
                            "RESTful APIs with Node.js": {
                                "___urlPath___": "restful-apis",
                                "Creating a REST API": {
                                    "___urlPath___": "creating-rest-api",
                                    "___md___": 22
                                },
                                "CRUD Operations": {
                                    "___urlPath___": "crud-operations",
                                    "___md___": 23
                                },
                                "Postman and API Testing": {
                                    "___urlPath___": "postman-api-testing",
                                    "___md___": 24
                                }
                            },
                            "Database Integration": {
                                "___urlPath___": "database-integration",
                                "Using MongoDB with Mongoose": {
                                    "___urlPath___": "mongodb-mongoose",
                                    "___md___": 25
                                },
                                "MySQL Integration": {
                                    "___urlPath___": "mysql-integration",
                                    "___md___": 26
                                },
                                "Sequelize ORM": {
                                    "___urlPath___": "sequelize-orm",
                                    "___md___": 27
                                }
                            },
                            "Authentication & Authorization": {
                                "___urlPath___": "authentication",
                                "JWT Authentication": {
                                    "___urlPath___": "jwt-auth",
                                    "___md___": 28
                                },
                                "OAuth and Passport.js": {
                                    "___urlPath___": "oauth-passport",
                                    "___md___": 29
                                },
                                "Role-Based Access Control (RBAC)": {
                                    "___urlPath___": "rbac",
                                    "___md___": 30
                                }
                            },
                            "Testing in Node.js": {
                                "___urlPath___": "testing",
                                "Unit Testing with Jest": {
                                    "___urlPath___": "unit-testing-jest",
                                    "___md___": 31
                                },
                                "Supertest for API Testing": {
                                    "___urlPath___": "supertest-api",
                                    "___md___": 32
                                },
                                "Mocha & Chai": {
                                    "___urlPath___": "mocha-chai",
                                    "___md___": 33
                                }
                            },
                            "Deployment & DevOps": {
                                "___urlPath___": "deployment",
                                "PM2 Process Manager": {
                                    "___urlPath___": "pm2",
                                    "___md___": 34
                                },
                                "Node.js with Docker": {
                                    "___urlPath___": "docker-nodejs",
                                    "___md___": 35
                                },
                                "CI/CD with GitHub Actions": {
                                    "___urlPath___": "ci-cd-github-actions",
                                    "___md___": 36
                                },
                                "Deploying to AWS (EC2/S3/Lambda)": {
                                    "___urlPath___": "deploying-to-aws",
                                    "___md___": 37
                                }
                            },
                            "Advanced Node.js": {
                                "___urlPath___": "advanced-nodejs",
                                "Cluster Module": {
                                    "___urlPath___": "cluster-module",
                                    "___md___": 411
                                },
                                "Worker Threads": {
                                    "___urlPath___": "worker-threads",
                                    "___md___": 412
                                },
                                "Child Processes": {
                                    "___urlPath___": "child-processes",
                                    "___md___": 413
                                },
                                "Examples of Cluster Module, Worker Threads and Child Processes ": {
                                    "___urlPath___": "examples-of-cluster-module-worker-threads-and-child-processes",
                                    "___md___": 546
                                },
                                "Performance Tuning": {
                                    "___urlPath___": "performance-tuning",
                                    "___md___": 414
                                }
                            },
                            "Security Best Practices": {
                                "___urlPath___": "security-best-practices",
                                "Helmet.js": {
                                    "___urlPath___": "helmet-js",
                                    "___md___": 42
                                },
                                "Rate Limiting": {
                                    "___urlPath___": "rate-limiting",
                                    "___md___": 410
                                },
                                "Input Validation with Joi": {
                                    "___urlPath___": "joi-validation",
                                    "___md___": 44
                                }
                            },
                            "System Design with Node.js": {
                                "___urlPath___": "system-design-nodejs",
                                "Monolithic vs Microservices Architecture": {
                                    "___urlPath___": "monolith-vs-microservices",
                                    "___md___": 501
                                },
                                "API Gateway and Load Balancing": {
                                    "___urlPath___": "api-gateway-load-balancing",
                                    "___md___": 502
                                },
                                "Service Discovery and Communication": {
                                    "___urlPath___": "service-discovery",
                                    "___md___": 503
                                },
                                "Rate Limiting and Throttling": {
                                    "___urlPath___": "rate-limiting-throttling",
                                    "___md___": 504
                                },
                                "Caching with Redis": {
                                    "___urlPath___": "caching-redis",
                                    "___md___": 505
                                },
                                "Message Queues with RabbitMQ/Kafka": {
                                    "___urlPath___": "message-queues",
                                    "___md___": 506
                                },
                                "Real-time Systems with WebSockets/Socket.IO": {
                                    "___urlPath___": "realtime-websockets",
                                    "___md___": 507
                                }
                            },

                            "Node.js Internals and Performance Tuning": {
                                "___urlPath___": "nodejs-performance",
                                "V8 Engine Internals": {
                                    "___urlPath___": "v8-engine",
                                    "___md___": 508
                                },
                                "Node.js Event Loop and libuv": {
                                    "___urlPath___": "event-loop-libuv",
                                    "___md___": 545
                                },
                                "Garbage Collection Strategies": {
                                    "___urlPath___": "garbage-collection",
                                    "___md___": 510
                                },
                                "Memory Leak Detection": {
                                    "___urlPath___": "memory-leak-detection",
                                    "___md___": 511
                                },
                                "Heap Snapshots and Profiling": {
                                    "___urlPath___": "heap-profiling",
                                    "___md___": 554
                                }
                            },

                            "Architecture Patterns in Node.js": {
                                "___urlPath___": "architecture-patterns",
                                "MVC and Clean Architecture": {
                                    "___urlPath___": "mvc-clean-architecture",
                                    "___md___": 551
                                },
                                "Hexagonal Architecture": {
                                    "___urlPath___": "hexagonal-architecture",
                                    "___md___": 552
                                },
                                "Domain Driven Design (DDD)": {
                                    "___urlPath___": "domain-driven-design",
                                    "___md___": 553
                                },
                                "Repository and Service Patterns": {
                                    "___urlPath___": "repository-service-patterns",
                                    "___md___": 516
                                }
                            },

                            "Concurrency and Scalability in Node.js": {
                                "___urlPath___": "concurrency-scalability",
                                "Scaling Node with Clustering": {
                                    "___urlPath___": "clustering-node",
                                    "___md___": 547
                                },
                                "Load Balancing across Instances": {
                                    "___urlPath___": "load-balancing-instances",
                                    "___md___": 548
                                },
                                "Backpressure Handling in Streams": {
                                    "___urlPath___": "backpressure-streams",
                                    "___md___": 549
                                },
                                "Async Task Queues (BullMQ)": {
                                    "___urlPath___": "bullmq-task-queues",
                                    "___md___": 550
                                }
                            },

                            "Monitoring, Logging and Observability": {
                                "___urlPath___": "monitoring-observability",
                                "Logging with Winston and Bunyan": {
                                    "___urlPath___": "logging-winston-bunyan",
                                    "___md___": 521
                                },
                                "Metrics with Prometheus and Grafana": {
                                    "___urlPath___": "prometheus-grafana",
                                    "___md___": 522
                                },
                                "Distributed Tracing with OpenTelemetry": {
                                    "___urlPath___": "opentelemetry-tracing",
                                    "___md___": 523
                                },
                                "Error Tracking with Sentry": {
                                    "___urlPath___": "sentry-error-tracking",
                                    "___md___": 524
                                }
                            }
                        }
                    },
                    "JAMstack": {
                        "JavaScript Frameworks": true,
                        "APIs": true,
                        "Markup Languages": true
                    }
                },
                "Web Security": {
                    "___urlPath___": "web-security",
                    "Common Security Threats": {
                        "___urlPath___": "common-security-threats",
                        "Cross-Site Scripting (XSS)": {
                            "___urlPath___": "cross-site-scripting",
                            "___md___": 129
                        },
                        "SQL Injection": {
                            "___urlPath___": "sql-injection",
                            "___md___": 130
                        },
                        "Cross-Site Request Forgery (CSRF)": {
                            "___urlPath___": "cross-site-request-forgery",
                            "___md___": 131
                        }
                    },
                    "Security Best Practices": {
                        "___urlPath___": "security-best-practices",
                        "Data Encryption": {
                            "___urlPath___": "data-encryption",
                            "___md___": 132
                        },
                        "Authentication and Authorization": {
                            "___urlPath___": "authentication-and-authorization",
                            "___md___": 133
                        },
                        "HTTPS and Certificates": {
                            "___urlPath___": "https-and-certificates",
                            "___md___": 134
                        },
                        "Content Security Policy (CSP)": {
                            "___urlPath___": "content-security-policy",
                            "___md___": 135
                        }
                    }
                },
                "Performance Optimization": {
                    "___urlPath___": "performance-optimization",
                    "Frontend Optimization": {
                        "___urlPath___": "frontend-optimization",
                        "Minification and Compression": {
                            "___urlPath___": "minification-and-compression",
                            "___md___": 136
                        },
                        "Lazy Loading": {
                            "___urlPath___": "lazy-loading",
                            "___md___": 137
                        },
                        "Critical Rendering Path": {
                            "___urlPath___": "critical-rendering-path",
                            "___md___": 138
                        }
                    },
                    "Backend Optimization": {
                        "___urlPath___": "backend-optimization",
                        "Load Balancing": {
                            "___urlPath___": "load-balancing",
                            "___md___": 139
                        },
                        "Caching (CDN, Server-Side)": {
                            "___urlPath___": "caching",
                            "___md___": 140
                        },
                        "Database Optimization": {
                            "___urlPath___": "database-optimization",
                            "___md___": 141
                        }
                    }
                },
                "Emerging Trends": {
                    "___urlPath___": "emerging-trends",
                    "Progressive Web Apps (PWA)": {
                        "___urlPath___": "progressive-web-apps",
                        "Service Workers": {
                            "___urlPath___": "service-workers",
                            "___md___": 126
                        },
                        "Web App Manifest": {
                            "___urlPath___": "web-app-manifest",
                            "___md___": 127
                        },
                        "Offline Capabilities": {
                            "___urlPath___": "offline-capabilities",
                            "___md___": 128
                        }
                    },
                    "WebAssembly (WASM)": {
                        "___urlPath___": "webassembly",
                        "Overview": {
                            "___urlPath___": "overview",
                            "___md___": 124
                        },
                        "Use Cases": {
                            "___urlPath___": "use-cases",
                            "___md___": 125
                        }
                    },
                    "Single Page Applications (SPA)": {
                        "___urlPath___": "single-page-applications",
                        "Concepts and Frameworks": {
                            "___urlPath___": "concepts-and-frameworks",
                            "___md___": 122
                        },
                        "Routing in SPAs": {
                            "___urlPath___": "routing-in-spas",
                            "___md___": 123
                        }
                    },
                    "AI and ML Integration in Web": {
                        "___urlPath___": "ai-and-ml-integration-in-web",
                        "Introduction": {
                            "___urlPath___": "introduction",
                            "___md___": 119
                        },
                        "TensorFlow.js": {
                            "___urlPath___": "tensorflow-js",
                            "___md___": 120
                        },
                        "Integration of APIs": {
                            "___urlPath___": "integration-of-apis",
                            "___md___": 121
                        }
                    }
                }
            },
            "Cloud Service Providers": {
                "___urlPath___": "cloud-service-providers",
                "AWS": {
                    "AWS Certified Solutions Architect Associate (SAA-C03)": {
                        "___urlPath___": "aws-certified-solutions-architect-associate",
                        "About this certification": {
                            "___urlPath___": "about-this-certification",
                            "___md___": 378
                        },
                        "Getting Started with AWS 🟢": {
                            "___urlPath___": "getting-started-with-aws",
                            "___md___": 62
                        },
                        "AWS Identity & Access Management (AWS IAM) 🟢": {
                            "___urlPath___": "aws-iam",
                            "___md___": 62
                        },
                        "Amazon EC2 - Basics 🟡": {
                            "___urlPath___": "amazon-ec2-basics",
                            "Overview": {
                                "___urlPath___": "overview",
                                "___md___": 945
                            },
                            "Hands-On Guide: Launching an EC2 Instance Running Linux": {
                                "___urlPath___": "hands-on-guide-launching-an-ec2-instance-running-linux",
                                "___md___": 946
                            },
                            "EC2 Instance Types": {
                                "___urlPath___": "ec2-instance-types",
                                "___md___": 947
                            },
                            "EC2 Instance Features": {
                                "___urlPath___": "ec2-instance-features",
                                "___md___": 949
                            },
                            "Measuring EC2 Instance Performance": {
                                "___urlPath___": "measuring-ec2-instance-performance",
                                "___md___": 948
                            },
                            "AWS Security Groups": {
                                "___urlPath___": "aws-security-groups",
                                "___md___": 950
                            }
                        },
                        "Amazon EC2 - Associate 🟡": {
                            "___urlPath___": "amazon-ec2-associate",
                            "___md___": 62
                        },
                        "Amazon EC2 - Instance Storage 🔴": {
                            "___urlPath___": "amazon-ec2-instance-storage",
                            "EBS Overview": {
                                "___urlPath___": "ebs-overview",
                                "___md___": 445
                            },
                            "EBS Hands-on": {
                                "___urlPath___": "ebs-hands-on",
                                "___md___": 446
                            }
                        },
                        "High Availability & Scalability 🔴": {
                            "___urlPath___": "high-availability-scalability",
                            "___md___": 62
                        },
                        "RDS, Aurora & ElastiCache 🔴": {
                            "___urlPath___": "rds-aurora-elasticache",
                            "___md___": 62
                        },
                        "Amazon Route 53 🔴": {
                            "___urlPath___": "amazon-route-53",
                            "___md___": 62
                        },
                        "Classic Solutions Architecture 🟡": {
                            "___urlPath___": "classic-solutions-architecture",
                            "Overview": {
                                "___urlPath___": "overview",
                                "___md___": 931
                            },
                            "Architecting a Stateless Web App from Scratch": {
                                "___urlPath___": "architecturing-a-stateless-web-app-from-scratch",
                                "___md___": 932
                            },
                            "Building a Stateful, Scalable Web App": {
                                "___urlPath___": "building-a-stateful-scalable-web-app",
                                "___md___": 937
                            },
                            "Building a Scalable Stateful Web App: MyWordPress.com": {
                                "___urlPath___": "building-scalable-stateful-web-app-my-wordpress-dot-com",
                                "___md___": 938
                            },
                            "Instantiating Scalable Web Apps": {
                                "___urlPath___": "instantiating-scalable-web-apps",
                                "___md___": 939
                            },
                            "Elastic Beanstalk – Deep Dive": {
                                "___urlPath___": "elastic-beanstalk-deep-dive",
                                "___md___": 940
                            }
                        },
                        "Amazon S3 🟡": {
                            "___urlPath___": "amazon-s3",
                            "___md___": 62
                        },
                        "Amazon S3 - Advanced 🔴": {
                            "___urlPath___": "amazon-s3-advanced",
                            "___md___": 62
                        },
                        "Amazon S3 - Security 🔴": {
                            "___urlPath___": "amazon-s3-security",
                            "___md___": 62
                        },
                        "CloudFront & Global Accelerator 🔴": {
                            "___urlPath___": "cloudfront-global-accelerator",
                            "___md___": 62
                        },
                        "AWS Storage Extras 🔴": {
                            "___urlPath___": "aws-storage-extras",
                            "AWS Snowball": {
                                "___urlPath___": "aws-snowball",
                                "___md___": 434
                            }
                        },
                        "AWS Integration & Messaging 🔴": {
                            "___urlPath___": "aws-integration-messaging",
                            "Introduction": {
                                "___urlPath___": "introduction",
                                "___md___": 392
                            },
                            "SQS Overview": {
                                "___urlPath___": "sqs-overview",
                                "___md___": 393
                            },
                            "SQS - Standard Queue Hands On": {
                                "___urlPath___": "sqs-standard-queue-hands-on",
                                "___md___": 394
                            },
                            "Amazon SQS – Message Visibility Timeout": {
                                "___urlPath___": "sqs-message-visibility-timeout",
                                "___md___": 395
                            },
                            "Amazon SQS – Long Polling": {
                                "___urlPath___": "sqs-long-polling",
                                "___md___": 396
                            },
                            "Amazon SQS – FIFO Queue": {
                                "___urlPath___": "sqs-fifo-queue",
                                "___md___": 397
                            },
                            "Scaling Applications with SQS and Auto Scaling Groups": {
                                "___urlPath___": "scaling-applications-with-sqs-and-auto-scaling-group",
                                "___md___": 398
                            },
                            "Amazon SNS (Simple Notification Service) Overview": {
                                "___urlPath___": "amazon-sns-overview",
                                "___md___": 401
                            },
                            "Advanced SNS Features": {
                                "___urlPath___": "advanced-sns-features",
                                "___md___": 402
                            },
                            "SNS Hands On": {
                                "___urlPath___": "sns-hands-on",
                                "___md___": 403
                            },
                            "Amazon Kinesis Data Streams Overview": {
                                "___urlPath___": "amazon-kinesis-data-streams-overview",
                                "___md___": 404
                            },
                            "Amazon Kinesis Data Streams Hands On": {
                                "___urlPath___": "amazon-kinesis-data-streams-hands-on",
                                "___md___": 405
                            },
                            "Amazon Data Firehose": {
                                "___urlPath___": "amazon-data-firehose",
                                "___md___": 430
                            },
                            "Amazon Data Firehose - Hands On": {
                                "___urlPath___": "amazon-data-firehose-hands-on",
                                "___md___": 431
                            },
                            "SQS Vs SNS Vs Kinesis": {
                                "___urlPath___": "sqs-vs-sns-vs-kinesis",
                                "___md___": 432
                            },
                            "Amazon MQ": {
                                "___urlPath___": "amazon-mq",
                                "___md___": 433
                            }
                        },
                        "Containers on AWS 🔴": {
                            "___urlPath___": "containers-on-aws",
                            "Introduction to Docker": {
                                "___urlPath___": "introduction-docker",
                                "___md___": 277
                            },
                            "AWS ECS": {
                                "___urlPath___": "aws-ecs",
                                "Introduction to AWS ECS": {
                                    "___urlPath___": "introduction-aws-ecs",
                                    "___md___": 337
                                },
                                "ECS Cluster & Task Definitions": {
                                    "___urlPath___": "ecs-cluster-task-definitions",
                                    "___md___": 102
                                },
                                "ECS Services & Load Balancing": {
                                    "___urlPath___": "ecs-services-load-balancing",
                                    "___md___": 103
                                },
                                "ECS Launch Types": {
                                    "___urlPath___": "ecs-launch-types",
                                    "EC2 Launch Type": {
                                        "___urlPath___": "ecs-ec2-launch-type",
                                        "___md___": 104
                                    },
                                    "Fargate Launch Type": {
                                        "___urlPath___": "ecs-fargate-launch-type",
                                        "___md___": 105
                                    }
                                },
                                "Networking & Security in ECS": {
                                    "___urlPath___": "networking-security-ecs",
                                    "___md___": 106
                                },
                                "ECS Auto Scaling & Monitoring": {
                                    "___urlPath___": "ecs-auto-scaling-monitoring",
                                    "___md___": 107
                                },
                                "ECS with CI/CD": {
                                    "___urlPath___": "ecs-ci-cd",
                                    "___md___": 108
                                },
                                "ECS vs. EKS vs. Fargate": {
                                    "___urlPath___": "ecs-vs-eks-vs-fargate",
                                    "___md___": 109
                                },
                                "ECS Use Cases": {
                                    "___urlPath___": "ecs-use-cases",
                                    "___md___": 110
                                }
                            }


                        },
                        "Serverless Overview 🟢": {
                            "___urlPath___": "serverless-overview",
                            "Introduction": {
                                "___urlPath___": "introduction",
                                "___md___": 447
                            },
                            "AWS Lambda Overview": {
                                "___urlPath___": "aws-lambda-overview",
                                "___md___": 448
                            },
                            "AWS Lambda Hands-On": {
                                "___urlPath___": "aws-lambda-hands-on",
                                "___md___": 454
                            }
                        },
                        "Serverless Architectures 🔴": {
                            "___urlPath___": "serverless-architectures",
                            "Serverless Architectures for Mobile Application: MyTodoList": {
                                "___urlPath___": "serverless-architecture-for-mobile-app-mytodolist",
                                "___md___": 1150
                            },
                            "Serverless Hosted Website – MyBlog.com": {
                                "___urlPath___": "serverless-hosted-website-myblog-com",
                                "___md___": 1151
                            },
                            "Microservices Architecture & Software Update Offloading": {
                                "___urlPath___": "microservices-arcthitecture-and-software-update-offloading",
                                "___md___": 1152
                            }
                        },
                        "Databases in AWS 🔴": {
                            "___urlPath___": "databases-in-aws",
                            "Choosing the Right Database": {
                                "___urlPath___": "choosing-right-database",
                                "___md___": 350
                            },
                            "Amazon RDS": {
                                "___urlPath___": "amazon-rds",
                                "___md___": 351
                            },
                            "Amazon Aurora": {
                                "___urlPath___": "amazon-aurora",
                                "___md___": 352
                            },
                            "Amazon ElastiCache": {
                                "___urlPath___": "amazon-elasticache",
                                "___md___": 353
                            },
                            "Amazon DynamoDB": {
                                "___urlPath___": "amazon-dynamodb",
                                "___md___": 354
                            },
                            "Amazon S3": {
                                "___urlPath___": "amazon-s3",
                                "___md___": 355
                            },
                            "DocumentDB": {
                                "___urlPath___": "documentdb",
                                "___md___": 356
                            },
                            "Amazon Neptune and Amazon Neptune Streams": {
                                "___urlPath___": "amazon-neptune-streams",
                                "___md___": 357
                            },
                            "Amazon Keyspaces": {
                                "___urlPath___": "amazon-keyspaces",
                                "___md___": 358
                            }
                        },
                        "Data & Analytics 🟡": {
                            "___urlPath___": "data-analytics",
                            "___md___": 62
                        },
                        "Machine Learning 🟡": {
                            "___urlPath___": "machine-learning",
                            "___md___": 62
                        },
                        "AWS Monitoring, Audit & Performance 🔴": {
                            "___urlPath___": "aws-monitoring-audit-performance",
                            "___md___": 62
                        },
                        "Advanced Identity in AWS 🔴": {
                            "___urlPath___": "advanced-identity-in-aws",
                            "___md___": 62
                        },
                        "AWS Security & Encryption 🔴": {
                            "___urlPath___": "aws-security-encryption",
                            "Why Encryption Matters?": {
                                "___urlPath___": "why-encryption-matters",
                                "___md___": 380
                            },
                            "KMS Overview": {
                                "___urlPath___": "complete-guide-aws-kms",
                                "___md___": 381
                            },
                            "KMS hands on with CLI": {
                                "___urlPath___": "kms-hands-on-with-cli",
                                "___md___": 388
                            },
                            "KMS Multi-Region Keys": {
                                "___urlPath___": "kms-multi-region-keys",
                                "___md___": 382
                            },
                            "S3 Replication and Encryption": {
                                "___urlPath___": "s3-replication-and-encryption",
                                "___md___": 383
                            },
                            "Sharing Encrypted AMIs": {
                                "___urlPath___": "sharing-encrypted-amis",
                                "___md___": 384
                            },
                            "SSM parameter store": {
                                "___urlPath___": "ssm-parameter-store",
                                "___md___": 385
                            },
                            "SSM Parameter Store Hands-On with CLI": {
                                "___urlPath___": "ssm-parameter-store-hands-on-with-cli",
                                "___md___": 387
                            },
                            "SSM Parameter Store Hands-On with AWS Lambda": {
                                "___urlPath___": "ssm-parameter-store-hands-on-with-aws-lambda",
                                "___md___": 386
                            },
                            "AWS Secrets Manager Overview": {
                                "___urlPath___": "aws-secrets-manager-overview",
                                "___md___": 389
                            },
                            "AWS Secrets Manager - Hands On": {
                                "___urlPath___": "aws-secrets-manager-hands-on",
                                "___md___": 390
                            },
                            "SSM Parameter Store Vs. Secrets Manager": {
                                "___urlPath___": "aws-ssm-parameter-vs-aws-secrets-manager",
                                "___md___": 391
                            }
                        },
                        "Amazon VPC 🔴": {
                            "___urlPath___": "amazon-vpc",
                            "VPC Components": {
                                "___urlPath___": "vpc-components",
                                "___md___": 373
                            },
                            "CIDR": {
                                "___urlPath___": "cidr",
                                "___md___": 374
                            },
                            "Public vs Private ip": {
                                "___urlPath___": "public-vs-private-ip",
                                "___md___": 375
                            },
                            "Network Protection on AWS": {
                                "___urlPath___": "networking-protection-aws",
                                "___md___": 379
                            }
                        },
                        "Disaster Recovery & Migrations 🟡": {
                            "___urlPath___": "disaster-recovery-migrations",
                            "___md___": 62
                        },
                        "More Solutions Architecture 🟡": {
                            "___urlPath___": "more-solutions-architecture",
                            "___md___": 62
                        },
                        "Other Services 🟢": {
                            "___urlPath___": "other-services",
                            "___md___": 62
                        },
                        "White Papers & Architectures 🟡": {
                            "___urlPath___": "white-papers-architectures",
                            "___md___": 62
                        },
                        "Exam Preparation 🟢": {
                            "___urlPath___": "exam-preparation",
                            "___md___": 62
                        },
                        "Congratulations 🟢": {
                            "___urlPath___": "congratulations",
                            "___md___": 62
                        }
                    },
                    "AWS Certified Developer - Associate": {
                        "___urlPath___": "aws-certified-developer-associate",
                        "Getting Started with AWS": 1,
                        "AWS Identity & Access Management (AWS IAM)": 2,
                        "Amazon EC2 – Basics": 3,
                        "Amazon EC2 – Instance Storage": 4,
                        "High Availability & Scalability": 5,
                        "RDS, Aurora, & ElastiCache": 6,
                        "Amazon Route 53": 7,
                        "Amazon VPC – Basics": 8,
                        "Amazon S3": 9,
                        "AWS CLI, SDK, IAM Roles & Policies": 10,
                        "Amazon S3 – Advanced": 11,
                        "Amazon S3 – Security": 12,
                        "Amazon CloudFront": 13,
                        "Containers on AWS": 14,
                        "AWS Elastic Beanstalk": 15,
                        "AWS CloudFormation": 16,
                        "AWS Integration & Messaging": 17,
                        "AWS Monitoring, Troubleshooting & Audit": 18,
                        "AWS Lambda": 19,
                        "Amazon DynamoDB": {
                            "___urlPath___": "amazon-dynamodb",
                            "Introduction": 22,
                            "DynamoDB as a Session State Cache": 34,
                            "DynamoDB Write Sharding": 33,
                            "DynamoDB – Write Types": 32,
                            "DynamoDB – Large Objects Pattern": 30,
                            "DynamoDB – Indexing S3 Objects Metadata": 31,
                            "DynamoDB Operations": 29,
                            "Security & Other features": 23,
                            "Users Interact with DynamoDB Directly": 25,
                            "Fine-Grained Access Control": 24,
                        },
                        "Amazon API Gateway": {
                            "___urlPath___": "amazon-api-gateway",
                            "Introduction": 39,
                            "Example: Building a Serverless API": 38,
                            "API Gateway – High-Level Integrations": 40,
                            "API Gateway – AWS Service Integration with Kinesis Data Streams Example": 41,
                            "API Gateway - Endpoint Types": 42,
                            "API Gateway – Security": 43,
                            "API Gateway – Deployment Stages": 44,
                            "API Gateway Staging Example – Stages v1 and v2: Handling API Breaking Changes": 45,

                        },
                        "AWS CICD": 22,
                        "AWS Serverless Application Model (SAM)": 23,
                        "AWS Cloud Development Kit (CDK)": 24,
                        "Amazon Cognito": 25,
                        "Other Serverless": 26,
                        "Advanced Identity in AWS": 27,
                        "AWS Security & Encryption": {

                        },
                        "Other Services": 29,
                        "Exam Preparation": 30,
                        "Congratulations": 31
                    }
                }
            },
            "DevOps and Deployment": {
                "___urlPath___": "devops-and-deployment",
                "Introduction to DevOps": {
                    "What is DevOps?": true,
                    "DevOps Lifecycle": true,
                    "Benefits of DevOps": true,
                    "DevOps Culture and Practices": true
                },
                "Version Control (Git and GitHub)": {
                    "Introduction to Version Control Systems": true,
                    "Git Basics": {
                        "Initializing Repositories": true,
                        "Staging and Committing Changes": true,
                        "Branching and Merging": true,
                        "Resolving Merge Conflicts": true
                    },
                    "Advanced Git Features": {
                        "Interactive Rebase": true,
                        "Cherry Picking Commits": true,
                        "Git Stash": true,
                        "Tagging and Release Management": true
                    },
                    "GitHub Workflow": {
                        "Using Pull Requests": true,
                        "Code Reviews and Collaboration": true,
                        "Setting Up GitHub Actions for CI/CD": true,
                        "Using GitHub Issues and Projects": true
                    }
                },
                "Continuous Integration/Continuous Deployment (CI/CD)": {
                    "Introduction to CI/CD": true,
                    "Setting Up CI Pipelines": {
                        "Using Jenkins for CI/CD": true,
                        "GitHub Actions for CI": true,
                        "GitLab CI/CD": true
                    },
                    "Continuous Deployment Practices": {
                        "Automating Tests in Pipelines": true,
                        "Blue-Green Deployment": true,
                        "Canary Deployment": true,
                        "Rolling Updates": true
                    },
                    "Monitoring CI/CD Pipelines": true,
                    "Tools for CI/CD": {
                        "Jenkins": true,
                        "GitHub Actions": true,
                        "CircleCI": true,
                        "GitLab CI/CD": true
                    }
                },
                "Containerization (Docker)": {
                    "___urlPath___": "containerization",
                    "Introduction to Docker": {
                        "___urlPath___": "introduction-to-docker",
                        "___md___": 277
                    },
                    "Building Docker Images": true,
                    "Docker Containers": {
                        "Starting and Stopping Containers": true,
                        "Inspecting and Managing Containers": true,
                        "Networking in Docker": true,
                        "Volumes and Data Persistence": true
                    },
                    "Docker Compose": {
                        "Introduction to Docker Compose": true,
                        "Writing docker-compose.yml": true,
                        "Managing Multi-Container Applications": true
                    },
                    "Optimizing Docker Images": {
                        "Using Multi-Stage Builds": true,
                        "Minimizing Image Sizes": true
                    }
                },
                "Orchestration (Kubernetes)": {
                    "___urlPath___": "kubernetes",
                    "Introduction to Kubernetes": {
                        "Overvew": {
                            "___urlPath___": "kubernetes-overview",
                            "___md___": 276
                        },
                        "What is Kubernetes and Why Use It": true,
                        "Container Orchestration Fundamentals": true,
                        "Kubernetes Use Cases in Enterprise-scale Systems": true
                    },
                    "Kubernetes Architecture": {
                        "Control Plane Components (API Server, Scheduler, Controller Manager, etcd)": true,
                        "Node Components (kubelet, kube-proxy, container runtime)": true,
                        "Cluster Topology and Design Patterns (HA, Multi-AZ)": true,
                        "Networking in Kubernetes (CNI, DNS, Services, Ingress Controllers)": true
                    },
                    "Kubernetes Essentials": {
                        "Creating a Cluster (Minikube, Kind, kubeadm, GKE/EKS/AKS)": true,
                        "Pods, Deployments, StatefulSets, DaemonSets, and Jobs": true,
                        "Services (ClusterIP, NodePort, LoadBalancer) and Ingress Controllers": true,
                        "Namespaces, Labels, and Annotations": true,
                        "Taints, Tolerations, and Node Selectors": true
                    },
                    "Kubernetes in Practice": {
                        "Helm Charts (Custom Helm, Helmfile, Secrets Management)": true,
                        "Secrets and ConfigMaps Best Practices": true,
                        "Horizontal and Vertical Pod Autoscaling (HPA/VPA)": true,
                        "Resource Requests and Limits (CPU/Memory Management)": true,
                        "Affinity, Anti-Affinity and Topology Spreading": true,
                        "PodDisruptionBudgets and Availability Guarantees": true
                    },
                    "Security and RBAC": {
                        "Kubernetes RBAC (Roles, ClusterRoles, Bindings)": true,
                        "Network Policies and Pod Security Policies (PSPs/PSS)": true,
                        "Admission Controllers (OPA/Gatekeeper, Kyverno)": true,
                        "SecComp, AppArmor, and Runtime Security": true,
                        "Secrets Encryption and External Secret Stores (Vault/SealedSecrets)": true
                    },
                    "Kubernetes in Production": {
                        "Rolling Updates, Blue-Green Deployments, and Canary Releases": true,
                        "Cluster Monitoring with Prometheus, Grafana, and Alertmanager": true,
                        "Centralized Logging with Fluent Bit / Fluentd / ELK / Loki": true,
                        "Audit Logging and Event Tracing": true,
                        "Node and Pod Lifecycle Management": true,
                        "Backup and Disaster Recovery Strategies (Velero, etcd snapshots)": true
                    },
                    "Scaling and Multi-Tenancy": {
                        "Cluster Autoscaler and Node Pool Management": true,
                        "Multi-Tenant Cluster Patterns (Namespaces, Quotas, RBAC)": true,
                        "Cost Optimization (Spot Nodes, Rightsizing, Resource Quotas)": true,
                        "Kubernetes Federation and Multi-Cluster Management": true
                    },
                    "GitOps and CI/CD Integration": {
                        "GitOps with ArgoCD and Flux": true,
                        "Declarative Deployments and Versioned Manifests": true,
                        "Integrating CI/CD with Helm/Kustomize": true,
                        "Progressive Delivery (Flagger, Argo Rollouts)": true
                    }
                }
                ,
                "Cloud Platforms (AWS, Azure, GCP)": {
                    "Introduction to Cloud Platforms": true,
                    "AWS for DevOps": {
                        "AWS Elastic Beanstalk": true,
                        "AWS ECS and EKS": true,
                        "AWS CodePipeline and CodeBuild": true,
                        "S3 for Storage and Hosting": true,
                        "CloudFormation for Infrastructure as Code": true
                    },
                    "Azure for DevOps": {
                        "Azure DevOps Pipelines": true,
                        "Azure Kubernetes Service (AKS)": true,
                        "Azure Resource Manager (ARM) Templates": true
                    },
                    "GCP for DevOps": {
                        "Google Kubernetes Engine (GKE)": true,
                        "Cloud Build for CI/CD": true,
                        "Cloud Functions for Serverless Deployments": true
                    }
                },
                "Monitoring and Logging Tools (Prometheus, ELK Stack)": {
                    "Introduction to Monitoring and Logging": true,
                    "Using Prometheus": {
                        "Setting Up Prometheus": true,
                        "Writing Prometheus Queries (PromQL)": true,
                        "Visualizing Metrics with Grafana": true
                    },
                    "Using the ELK Stack": {
                        "Setting Up Elasticsearch, Logstash, and Kibana": true,
                        "Indexing and Querying Logs with Elasticsearch": true,
                        "Building Dashboards with Kibana": true
                    },
                    "Integrating Monitoring with CI/CD Pipelines": true,
                    "Alerting and Notifications": true
                },
                "Infrastructure as Code (IaC)": {
                    "Introduction to IaC": true,
                    "Using Terraform for Infrastructure Management": true,
                    "AWS CloudFormation": true,
                    "Ansible for Configuration Management": true,
                    "Best Practices for IaC": true
                },
                "Hands-On Projects": {
                    "Setting Up a CI/CD Pipeline with Jenkins": true,
                    "Building and Deploying a Dockerized Application": true,
                    "Deploying a Scalable Application to Kubernetes": true,
                    "Monitoring Applications with Prometheus and Grafana": true,
                    "Using Terraform to Manage Cloud Infrastructure": true
                }
            },
            "Soft Skills and Best Practices": {
                "___urlPath___": "soft-skills",
                "Agile Development and Scrum": {
                    "___urlPath___": "agile-development-scrum",
                    "Introduction to Agile Methodology": {
                        "___urlPath___": "introduction-to-agile-methodology",
                        "Principles of Agile (Agile Manifesto & 12 Principles)": {
                            "___urlPath___": "agile-manifesto-12-principles",
                            "___md___": 1101
                        },
                        "Benefits of Agile over Traditional Models (Waterfall, V-Model, etc.)": {
                            "___urlPath___": "benefits-of-agile-over-traditional-models",
                            "___md___": 1102
                        },
                        "Different Agile Frameworks": {
                            "___urlPath___": "different-agile-frameworks",
                            "Overview of Agile Frameworks": {
                                "___urlPath___": "overview-of-agile-frameworks",
                                "___md___": 1103
                            },
                            "Scrum": true,
                            "Kanban": true,
                            "SAFe (Scaled Agile Framework)": true,
                            "LeSS (Large-Scale Scrum)": true,
                            "Spotify Model": true,
                            "Nexus": true
                        }
                    },
                    "Scrum Framework (Deep Dive)": {
                        "Roles in Scrum": {
                            "Scrum Master": true,
                            "Product Owner": true,
                            "Development Team": true
                        },
                        "Scrum Artifacts": {
                            "Product Backlog": true,
                            "Sprint Backlog": true,
                            "Increment": true,
                            "Definition of Done (DoD) and Acceptance Criteria": true
                        },
                        "Scrum Events": {
                            "Sprint Planning": true,
                            "Daily Standups (Daily Scrum)": true,
                            "Sprint Review": true,
                            "Sprint Retrospective": true,
                            "Backlog Refinement (Grooming)": true
                        }
                    },
                    "Advanced Agile Practices": {
                        "Agile Estimation Techniques": {
                            "Story Points vs Ideal Days": true,
                            "Planning Poker": true,
                            "T-Shirt Sizing": true,
                            "Fibonacci Sequence in Estimation": true
                        },
                        "Velocity and Burn-down/Burn-up Charts": true,
                        "Technical Debt and Refactoring in Agile": true,
                        "Agile Testing Strategies (TDD, BDD, ATDD)": true,
                        "CI/CD in Agile (Continuous Integration & Deployment)": true,
                        "DevOps Integration with Agile": true,
                        "Test Automation in Agile (Selenium, Cypress, Jest)": true
                    },
                    "Scaling Agile for Large Enterprises": {
                        "Introduction to Scaling Agile": true,
                        "SAFe (Scaled Agile Framework)": {
                            "SAFe Roles and Responsibilities": true,
                            "PI Planning (Program Increment Planning)": true,
                            "Agile Release Train (ART)": true,
                            "Lean Portfolio Management": true
                        },
                        "LeSS (Large-Scale Scrum)": {
                            "Differences Between LeSS and SAFe": true,
                            "LeSS Framework Principles": true
                        },
                        "Spotify Model": {
                            "Tribes, Squads, Guilds, and Chapters": true,
                            "Autonomy and Alignment in Agile": true
                        },
                        "Nexus Framework for Scaling Scrum": true
                    },
                    "Best Practices in Agile": {
                        "Effective Sprint Planning": true,
                        "Tracking Progress with Burndown and Burn-up Charts": true,
                        "Conducting Productive Retrospectives": true,
                        "Avoiding Common Agile Pitfalls": true,
                        "Handling Changing Requirements in Agile": true,
                        "Balancing Business Priorities with Technical Excellence": true
                    },
                    "Agile Leadership and Coaching": {
                        "Agile Coaching vs Scrum Master Role": true,
                        "Servant Leadership in Agile": true,
                        "Conflict Resolution in Agile Teams": true,
                        "Building High-Performing Agile Teams": true,
                        "Stakeholder Management in Agile": true,
                        "Psychological Safety in Agile Teams": true
                    },
                    "Agile Metrics and KPIs": {
                        "Key Agile Metrics": {
                            "Velocity": true,
                            "Lead Time and Cycle Time": true,
                            "Cumulative Flow Diagram": true,
                            "Escaped Defects": true
                        },
                        "Using Agile Metrics for Continuous Improvement": true,
                        "Avoiding Vanity Metrics in Agile": true
                    },
                    "Case Studies and Real-World Implementations": {
                        "___urlPath___": "case-studies-agile",
                        "Agile at Netflix": {
                            "___urlPath___": "agile-at-netflix",
                            "___md___": 1104
                        },
                        "Agile at Amazon": {
                            "___urlPath___": "agile-at-amazon",
                            "___md___": 1105
                        },
                        "Agile at Spotify": true,
                        "Agile at Cognizant": {
                            "___urlPath___": "agile-at-cognizant",
                            "___md___": 1106
                        },
                        "Lessons Learned from Failed Agile Implementations": true
                    }
                },
                "Problem Solving and Debugging": {
                    "Understanding Problem-Solving": {
                        "Defining Problems Clearly": true,
                        "Breaking Problems into Smaller Parts": true,
                        "Analyzing Root Causes (5 Whys, Fishbone Diagram)": true
                    },
                    "Debugging Skills": {
                        "Debugging Tools and Techniques": true,
                        "Systematic Debugging Steps": true,
                        "Collaborative Debugging in Teams": true
                    },
                    "Case Studies and Practice": {
                        "Solving Real-Life Software Issues": true,
                        "Analyzing Past Debugging Challenges": true
                    }
                },
                "Clean Code Practices": {
                    "Principles of Clean Code": {
                        "Writing Readable and Maintainable Code": true,
                        "Naming Conventions for Variables and Methods": true,
                        "Avoiding Code Smells": true
                    },
                    "Refactoring Code": {
                        "Identifying Areas for Improvement": true,
                        "Step-by-Step Refactoring": true,
                        "Testing After Refactoring": true
                    },
                    "Documentation and Comments": {
                        "Writing Meaningful Comments": true,
                        "Creating Documentation for APIs and Libraries": true
                    },
                    "Code Review Practices": {
                        "Conducting Effective Code Reviews": true,
                        "Providing Constructive Feedback": true,
                        "Handling Feedback Gracefully": true
                    }
                },
                "Collaboration and Communication": {
                    "Collaboration in Teams": {
                        "Building Trust in Teams": true,
                        "Fostering Inclusive Work Environments": true,
                        "Handling Conflicts Constructively": true
                    },
                    "Communication Skills": {
                        "Effective Verbal Communication": true,
                        "Active Listening Techniques": true,
                        "Writing Clear and Concise Emails": true,
                        "Creating Impactful Presentations": true
                    },
                    "Stakeholder Management": {
                        "Understanding Stakeholder Needs": true,
                        "Providing Regular Updates to Stakeholders": true,
                        "Handling Difficult Conversations": true
                    },
                    "Cross-Functional Collaboration": {
                        "Working with Design Teams": true,
                        "Collaborating with QA Engineers": true,
                        "Interfacing with Product Managers": true
                    }
                },
                "Time Management and Productivity": {
                    "___urlPath___": "time-management",
                    "Time Management Techniques": {
                        "___urlPath___": "time-management-techniques",
                        "Eisenhower Matrix for Prioritization": {
                            "___urlPath___": "eisenhower-matrix",
                            "___md___": 93
                        },
                        "Pomodoro Technique for Focused Work": {
                            "___urlPath___": "pomodoro-technique",
                            "___md___": 94
                        },
                        "Time Blocking for Scheduling Tasks": {
                            "___urlPath___": "time-blocking",
                            "___md___": 95
                        }
                    },
                    "Productivity Best Practices": {
                        "___urlPath___": "productivity-best-practices",
                        "Avoiding Multitasking": {
                            "___urlPath___": "avoiding-multitasking",
                            "___md___": 96
                        },
                        "Minimizing Distractions (Digital and Physical)": {
                            "___urlPath___": "minimizing-distractions",
                            "___md___": 97
                        },
                        "Creating a Productive Workspace": {
                            "___urlPath___": "productive-workspace",
                            "___md___": 98
                        }
                    },
                    "Goal Setting and Tracking": {
                        "___urlPath___": "goal-setting-tracking",
                        "SMART Goals (Specific, Measurable, Achievable, Relevant, Time-Bound)": {
                            "___urlPath___": "smart-goals",
                            "___md___": 99
                        },
                        "Using Tools for Goal Tracking (Trello, Asana)": {
                            "___urlPath___": "goal-tracking-tools",
                            "___md___": 100
                        },
                        "Reviewing Progress Regularly": {
                            "___urlPath___": "reviewing-progress",
                            "___md___": 101
                        }
                    },
                    "Stress Management": {
                        "___urlPath___": "stress-management",
                        "Recognizing Signs of Burnout": {
                            "___urlPath___": "burnout-signs",
                            "___md___": 102
                        },
                        "Practicing Mindfulness and Meditation": {
                            "___urlPath___": "mindfulness-meditation",
                            "___md___": 103
                        },
                        "Balancing Work and Personal Life": {
                            "___urlPath___": "work-life-balance",
                            "___md___": 104
                        }
                    }
                },
                "Professional Growth and Interview Preparedness": {
                    "___urlPath___": "interview-soft-skills",
                    "Resume and Portfolio Building": {
                        "Crafting a Tailored Resume": true,
                        "Creating an Impressive Portfolio": true,
                        "Common Mistakes to Avoid": true
                    },
                    "Strategic Approaches to Career Development": {
                        "___urlPath___": "career-development",
                        "Creating a Job Search Plan": {
                            "Setting Career Goals": true,
                            "Identifying Target Companies and Roles": true,
                            "Job Search Timelines and Tracking Progress": true
                        },
                        "Job Portals and Platforms": {
                            "Using LinkedIn Effectively": true,
                            "Exploring Job Portals (Indeed, Glassdoor, Naukri)": true,
                            "Understanding Application Tracking Systems (ATS)": true
                        },
                        "Networking for Job Opportunities": {
                            "Building a Professional Network": true,
                            "Informational Interviews": true,
                            "Leveraging Alumni and Community Groups": true
                        },
                        "Crafting Effective Job Applications": {
                            "Writing Tailored Cover Letters": true,
                            "Optimizing Resumes for ATS": true,
                            "Tips for Submitting Online Applications": true
                        },
                        "Preparing for Career Fairs and Walk-Ins": {
                            "What to Carry to Career Fairs": true,
                            "Making a Strong First Impression": true,
                            "Following Up After Career Events": true
                        }
                    },
                    "Communication and Storytelling": {
                        "___urlPath___": "communication-storytelling",
                        "Self-introduction Template": {
                            "___urlPath___": "self-introduction-template",
                            "___md___": 243
                        },
                        "Answering Behavioral Questions (STAR Method)": true,
                        "Handling Tough Questions with Confidence": true,
                        "Elevator Pitch for Introductions": true
                    },
                    "Interview Etiquette": {
                        "Dressing Professionally": true,
                        "Building Rapport with Interviewers": true,
                        "Effective Virtual Interview Strategies": true
                    },
                    "Negotiation and Follow-Up": {
                        "Salary Negotiation Techniques": true,
                        "Sending a Thank-You Email": true,
                        "Post-Interview Follow-Up": true
                    },
                    "Mock Interview Practice": {
                        "Technical Mock Interviews": true,
                        "Behavioral Mock Interviews": true,
                        "Tips for Peer Interview Practice": true
                    }
                }

            },
            ...QBank
        },
        "Data Engineering Notes": {
            "___urlPath___": "data-engineering-course",
            "Data Engineering Foundations": {
                "Data Warehousing Concepts": true,
                "ETL vs ELT Pipelines": true,
                "Batch vs Stream Processing": true,
                "Schema Design (Star, Snowflake)": true,
                "Data Modeling (OLAP vs OLTP)": true
            },
            "Programming and Scripting": {
                "___urlPath___": "programming-and-scripting",
                "Advanced Python for Data Engineering": {
                    "___urlPath___": "advanced-python-for-data-engineering",
                    "Python (Expert Level) ": {
                        "___urlPath___": "python-expert-level",
                        "Core Python & Advanced Language Features": {
                            "___urlPath___": "core-python-advanced-language-features",
                            "Data Types, Variables, and Memory Allocation": {
                                "___urlPath___": "data-types-variables-memory-allocation",
                                "___md___": 1017
                            },
                            "Mutability and Identity (`is` vs `==`)": {
                                "___urlPath___": "mutability-and-identity",
                                "___md___": 1018
                            },
                            "List, Dict, Set, Tuple Internals and Performance": {
                                "___urlPath___": "list-dict-set-tuple-internals-performance",
                                "___md___": 1019
                            },
                            "Slicing, Unpacking, and Comprehensions (List/Set/Dict)": {
                                "___urlPath___": "slicing-unpacking-comprehensions",
                                "___md___": 1020
                            },
                            "First-Class Functions, Closures, Decorators": true,
                            "Dynamic Typing and Duck Typing": true,
                            "Metaclasses and Class Internals (`__new__`, `__init__`)": true,
                            "Descriptors, Properties, and Data Model": true,
                            "Advanced `__magic__` Methods and Operator Overloading": true
                        },
                        "Object-Oriented Python": {
                            "___urlPath___": "object-oriented-python",
                            "Inheritance, MRO, and `super()`": {
                                "___urlPath___": "inheritance-mro-super",
                                "___md___": 1069
                            },
                            "Mixins and Multiple Inheritance": {
                                "___urlPath___": "mixins-multiple-inheritance",
                                "___md___": 1070
                            },
                            "Encapsulation and Access Modifiers": {
                                "___urlPath___": "encapsulation-access-modifiers",
                                "___md___": 1071
                            },
                            "ABC (Abstract Base Classes) and Interfaces": {
                                "___urlPath___": "abc-interfaces",
                                "___md___": 1072
                            },
                            "Dataclasses vs NamedTuples vs TypedDict": true
                        },
                        "Functional Programming in Python": {
                            "Lambdas, `map`, `filter`, `reduce`": true,
                            "Iterators, Generators, and Generator Expressions": true,
                            "Coroutines and `yield` vs `yield from`": true,
                            "Functools (`lru_cache`, `partial`, `wraps`)": true
                        },
                        "Concurrency, Parallelism, and Async IO": {
                            "Threading: GIL, Race Conditions, ThreadPoolExecutor": true,
                            "Multiprocessing: Shared Memory vs Process Pools": true,
                            "Async IO: `async`/`await`, Event Loops, `aiohttp`, `asyncio`": true,
                            "Queue, Locks, Futures, and Deadlock Avoidance": true
                        },
                        "File Handling & Serialization": {
                            "Working with Files, Buffers, and Context Managers": true,
                            "CSV, JSON, YAML Parsing and Writing": true,
                            "Pickle, Marshal, Joblib for Serialization": true,
                            "Custom Serializers and Formatters": true
                        },
                        "Testing & Quality Assurance": {
                            "Unit Testing with `unittest`, `pytest`": true,
                            "Fixtures, Mocking, and Patch": true,
                            "Property-Based Testing with `hypothesis`": true,
                            "Code Coverage & Linting (pylint, flake8, black)": true
                        },
                        "REST API Development": {
                            "Flask App Creation and Blueprints": true,
                            "FastAPI for Async and OpenAPI Docs": true,
                            "Middleware, Authentication, JWTs": true,
                            "API Versioning, Rate Limiting, CORS Handling": true
                        },
                        "ORMs & Database Integration": {
                            "SQLAlchemy (Core and ORM)": true,
                            "Alembic Migrations and Schema Versioning": true,
                            "Connection Pooling and Performance Tuning": true,
                            "Peewee / Django ORM (optional deep dive)": true
                        },
                        "Data Processing & ETL": {
                            "Working with Pandas, NumPy, and Dask": true,
                            "Data Cleaning, Transformations, Aggregations": true,
                            "Parallel/Chunked ETL Pipelines": true,
                            "Integration with PostgreSQL, S3, BigQuery": true
                        },
                        "DevOps, Packaging & Deployment": {
                            "Virtual Environments (`venv`, `pipenv`, `poetry`)": true,
                            "Dependency Management and `requirements.txt`": true,
                            "Packaging with `setuptools`, `wheel`, `pyproject.toml`": true,
                            "Dockerizing Python Apps": true,
                            "Logging and Exception Tracking (`logging`, `Sentry`)": true
                        },
                        "Security & Best Practices": {
                            "Input Validation and Sanitization": true,
                            "Avoiding Injection, SSRF, RCE Vulnerabilities": true,
                            "Secrets Management (dotenv, AWS Secrets Manager)": true,
                            "Secure Token Handling (JWT, OAuth2)": true
                        },
                        "Python in System Design": {
                            "Event-Driven Design with Celery / Redis / RabbitMQ": true,
                            "Building Scalable Microservices": true,
                            "Interprocess Communication (gRPC, HTTP, WebSockets)": true,
                            "Streaming Architectures (Kafka, Spark Streaming)": true
                        },
                        "Python in Cloud (AWS/Azure/GCP)": {
                            "Using Boto3 for AWS (S3, Lambda, EC2)": true,
                            "Cloud Functions with Python (Lambda, Cloud Functions)": true,
                            "Scheduled Jobs with Airflow / AWS Glue": true,
                            "Integrating with Cloud Storage and APIs": true
                        },
                        "GenAI & ML Workflows (Optional Add-on)": {
                            "LangChain and Vector Stores (FAISS, Pinecone)": true,
                            "OpenAI, HuggingFace API Integrations": true,
                            "Prompt Engineering and Few-Shot Examples": true,
                            "Fine-Tuning Transformers with PyTorch/TF": true
                        }
                    },
                    "For Data Engineering": {
                        "Data Formats & Interchange": {
                            "Avro, Parquet, and ORC File Formats": true,
                            "Working with Protobuf and Thrift": true,
                            "Efficient Compression (gzip, snappy, zstd)": true
                        },
                        "Big Data Integration (Python)": {
                            "PySpark with Spark SQL, DataFrames, RDDs": true,
                            "Pandas API on Spark": true,
                            "Dask for Large DataFrames and Lazy Execution": true,
                            "HDFS Access via PyArrow or hdfs3": true
                        },
                        "Stream Processing (Python)": {
                            "Apache Kafka Integration (confluent-kafka-python)": true,
                            "Kafka Consumer Groups, Partition Handling": true,
                            "Stream Processing with Faust": true,
                            "Working with Kinesis using boto3": true
                        },
                        "Orchestration Tools": {
                            "Apache Airflow – DAGs, XCom, Sensors, Hooks": true,
                            "Custom Operators & Plugins": true,
                            "Prefect 2.0 with Async Workflows": true
                        },
                        "Data Validation & Quality Checks": {
                            "Great Expectations for Data Validation": true,
                            "Data Profiling with pandas-profiling": true,
                            "Custom Validators and Schema Checks": true
                        },
                        "Advanced SQL Handling in Python": {
                            "Parameterized Queries and SQL Injection Safety": true,
                            "Window Functions and CTEs in SQLAlchemy": true,
                            "Dynamic Query Building with ORM and Text Queries": true,
                            "Query Profiling and Explain Plans": true
                        },
                        "Data Storage Architecture": {
                            "S3-based Data Lake Architectures": true,
                            "Delta Lake Integration with PySpark": true,
                            "Versioning and Time Travel Concepts": true
                        }
                    },
                    "Architectural Patterns with Python": {
                        "Hexagonal Architecture / Clean Code Principles": true,
                        "Layered Microservices with FastAPI + Message Queues": true,
                        "Observability with Prometheus, OpenTelemetry, Grafana": true,
                        "Data Contracts and Schema Registry Integration": true
                    }
                },
                "Scala for Spark": true,
                "Bash and Shell Scripting": true,
                "SQL Optimization Techniques": true
            },
            "Big Data Ecosystem": {
                "Hadoop HDFS Internals": true,
                "MapReduce Programming Model": true,
                "Apache Hive and HQL Optimization": true,
                "Apache Pig (Legacy Support)": true
            },
            "Data Processing Frameworks": {
                "Apache Spark (Core, SQL, Streaming, MLlib)": true,
                "Apache Flink for Real-Time Processing": true,
                "Apache Beam and Google Dataflow": true,
                "Kafka Streams and Samza": true
            },
            "Data Storage Technologies": {
                "Distributed File Systems (HDFS, Amazon S3, GCS)": true,
                "Columnar Stores (Parquet, ORC)": true,
                "Key-Value Stores (Redis, RocksDB)": true,
                "Document Stores (MongoDB, Couchbase)": true,
                "Time Series Databases (InfluxDB, Prometheus)": true
            },
            "Cloud Platforms and Services": {
                "AWS (S3, Glue, Redshift, Kinesis, EMR)": true,
                "GCP (BigQuery, Dataflow, Pub/Sub, Dataproc)": true,
                "Azure (Data Factory, Synapse Analytics, Event Hubs)": true,
                "Terraform and IaC for Data Infrastructure": true
            },
            "Streaming and Messaging Systems": {
                "Apache Kafka Internals and Tuning": true,
                "RabbitMQ and Pulsar Basics": true,
                "Data Replay, Exactly-Once Semantics": true,
                "Partitioning and Offset Management": true
            },
            "Orchestration and Workflow Management": {
                "Apache Airflow (DAG Design, XComs, Sensors)": true,
                "Dagster and Prefect": true,
                "Job Retry, Backoff, and SLA Monitoring": true,
                "Task Parallelism and Dependency Handling": true
            },
            "Data Governance and Quality": {
                "Data Lineage and Provenance (e.g., Amundsen, Marquez)": true,
                "Data Quality Validation Frameworks (Deequ, Great Expectations)": true,
                "Column-level Lineage and Anomaly Detection": true,
                "Data Contracting and Schema Enforcement": true
            },
            "Security and Compliance": {
                "GDPR, HIPAA Compliance Practices": true,
                "Data Masking, Tokenization, Encryption": true,
                "Row-Level and Column-Level Security": true,
                "IAM, KMS, VPC Setup for Data Pipelines": true
            },
            "Advanced SQL and Analytics": {
                "Window Functions and CTEs": true,
                "Materialized Views and Incremental Models": true,
                "Query Planning and Execution Tuning": true,
                "Data Cube and ROLLUP Analysis": true
            },
            "Machine Learning Integration": {
                "Feature Engineering Pipelines": true,
                "Model Serving with Data Pipelines": true,
                "Feature Store Design (Feast, Tecton)": true,
                "Streaming ML Inference": true
            },
            "Monitoring and Observability": {
                "Data Pipeline Logging and Tracing": true,
                "Prometheus, Grafana for Metrics": true,
                "Alerting on Data Anomalies": true,
                "End-to-End Data SLA Dashboards": true
            },
            "Testing and CI/CD for Data": {
                "Unit and Integration Testing in Data Pipelines": true,
                "Data Diffing and Regression Checks": true,
                "Blue-Green Deployments for ETL Jobs": true,
                "GitOps and DataOps Practices": true
            },
            "Soft Skills and Leadership": {
                "Stakeholder Communication and Reporting": true,
                "Mentoring and Upskilling Junior Engineers": true,
                "Design Docs and RFC Writing": true,
                "Technical Decision-Making and Tradeoffs": true
            }
        },
        "Data Science and Artificial Intelligence Notes": {
            "___urlPath___": "data-science-and-artificial-intelligence-course",
            "Probability and Statistics": {
                "___urlPath___": "probability-statistics",
                "Basic Probability Concepts": {
                    "Counting (Permutation and Combination)": true,
                    "Probability Axioms and Rules": true,
                    "Sample Space and Events": true,
                    "Independent and Mutually Exclusive Events": true,
                    "Marginal, Conditional, and Joint Probability": true
                },
                "Theorems and Distributions": {
                    "Bayes Theorem": true,
                    "Random Variables": {
                        "Discrete Random Variables": {
                            "Probability Mass Function (PMF)": true,
                            "Bernoulli and Binomial Distributions": true
                        },
                        "Continuous Random Variables": {
                            "Probability Density Function (PDF)": true,
                            "Uniform, Exponential, Poisson, Normal, and Standard Normal Distributions": true
                        }
                    },
                    "Cumulative Distribution Function (CDF)": true,
                    "Central Limit Theorem": true
                },
                "Descriptive Statistics": {
                    "Mean, Median, and Mode": true,
                    "Variance and Standard Deviation": true,
                    "Correlation and Covariance": true
                },
                "Hypothesis Testing": {
                    "Confidence Intervals": true,
                    "z-Test, t-Test, and Chi-Squared Test": true
                }
            },
            "Linear Algebra": {
                "___urlPath___": "linear-algebra",
                "Vector Spaces": {
                    "Vector Space and Subspaces": true,
                    "Linear Dependence and Independence": true
                },
                "Matrix Operations": {
                    "Projection, Orthogonal, and Idempotent Matrices": true,
                    "Partition Matrices and Properties": true
                },
                "Key Concepts": {
                    "Quadratic Forms": true,
                    "Gaussian Elimination": true,
                    "Eigenvalues and Eigenvectors": true,
                    "Determinants and Rank": true,
                    "Nullity and Projections": true
                },
                "Decompositions": {
                    "LU Decomposition": true,
                    "Singular Value Decomposition (SVD)": true
                }
            },
            "Calculus and Optimization": {
                "___urlPath___": "calculus-optimization",
                "Basic Calculus": {
                    "Functions of a Single Variable": true,
                    "Limit, Continuity, and Differentiability": true,
                    "Taylor Series Expansion": true
                },
                "Optimization": {
                    "Maxima and Minima": true,
                    "Single Variable Optimization": true
                }
            },
            "Programming, Data Structures, and Algorithms": {
                "___urlPath___": "programming-data-algorithms",
                "Programming in Python": {
                    "___urlPath___": "programming-in-python",
                    "Syntax, Variables, and Data Types": {
                        "___urlPath___": "syntax-variables-data-types",
                        "___md___": 1021
                    },
                    "Control Flow (if-else, loops)": {
                        "___urlPath___": "control-flow",
                        "___md___": 1022
                    },
                    "Functions and Recursion": {
                        "___urlPath___": "functions-recursion",
                        "___md___": 1023
                    },
                    "List, Tuple, Set, and Dict Operations": {
                        "___urlPath___": "list-tuple-set-dict-operations",
                        "___md___": 1024
                    },
                    "Comprehensions (List, Set, Dict)": {
                        "___urlPath___": "comprehensions",
                        "___md___": 1025
                    },
                    "String Manipulation and Formatting": {
                        "___urlPath___": "string-manipulation-formatting",
                        "___md___": 1026
                    },
                    "File I/O and Exception Handling": {
                        "___urlPath___": "file-io-exception-handling",
                        "___md___": 1027
                    }
                },
                "Data Structures": {
                    "___urlPath___": "data-structures",
                    "Stacks (Array and Linked List Based)": {
                        "___urlPath___": "stacks",
                        "___md___": 1028
                    },
                    "Queues (Simple, Circular, Deque)": {
                        "___urlPath___": "queues",
                        "___md___": 1029
                    },
                    "Linked Lists (Singly, Doubly, Circular)": {
                        "___urlPath___": "linked-lists",
                        "___md___": 1030
                    },
                    "Trees (Binary Trees, BSTs)": {
                        "___urlPath___": "trees",
                        "___md___": 1031
                    },
                    "Heap (Binary Min/Max Heap — Concepts only)": {
                        "___urlPath___": "heap",
                        "___md___": 1032
                    },
                    "Hash Tables and Hashing Techniques": {
                        "___urlPath___": "hash-tables",
                        "___md___": 1033
                    }
                },
                "Algorithms - Searching": {
                    "___urlPath___": "algorithms-searching",
                    "Linear Search": {
                        "___urlPath___": "linear-search",
                        "___md___": 1034
                    },
                    "Binary Search (Iterative and Recursive)": {
                        "___urlPath___": "binary-search",
                        "___md___": 1035
                    },
                    "Time Complexity Analysis": {
                        "___urlPath___": "time-complexity-analysis",
                        "___md___": 1036
                    }
                },
                "Algorithms - Sorting": {
                    "___urlPath___": "algorithms-sorting",
                    "Selection Sort": {
                        "___urlPath___": "selection-sort",
                        "___md___": 1037
                    },
                    "Bubble Sort": {
                        "___urlPath___": "bubble-sort",
                        "___md___": 1038
                    },
                    "Insertion Sort": {
                        "___urlPath___": "insertion-sort",
                        "___md___": 1039
                    },
                    "Divide and Conquer Techniques": {
                        "___urlPath___": "divide-conquer-techniques",
                        "___md___": 1040
                    },
                    "Mergesort (with Merge Logic)": {
                        "___urlPath___": "mergesort",
                        "___md___": 1041
                    },
                    "Quicksort (Lomuto and Hoare Partition)": {
                        "___urlPath___": "quicksort",
                        "___md___": 1042
                    }
                },
                "Graph Theory - Introduction": {
                    "___urlPath___": "graph-theory-introduction",
                    "Graph Terminologies (Vertex, Edge, Degree)": {
                        "___urlPath___": "graph-terminologies",
                        "___md___": 1043
                    },
                    "Types of Graphs (Directed, Undirected, Weighted, Unweighted)": {
                        "___urlPath___": "types-of-graphs",
                        "___md___": 1044
                    },
                    "Graph Representation (Adjacency Matrix/List)": {
                        "___urlPath___": "graph-representation",
                        "___md___": 1045
                    }
                },
                "Graph Algorithms - Basics": {
                    "___urlPath___": "graph-algorithms-basics",
                    "Graph Traversals (DFS, BFS)": {
                        "___urlPath___": "graph-traversals",
                        "___md___": 1046
                    },
                    "Shortest Path": {
                        "___urlPath___": "shortest-path",
                        "Overview": {
                            "___urlPath___": "overview",
                            "___md___": 1047,
                        },
                        "Single Source Shortest Path": {
                            "___urlPath___": "single-source-shortest-path",
                            "Unweighted Graphs": {
                                "___urlPath___": "unweighted-graphs",
                                "DFS (Only for Trees/Acyclic Graphs)": {
                                    "___urlPath___": "dfs-unweighted-graphs",
                                    "___md___": 1048
                                },
                                "BFS (Breadth-First Search)": {
                                    "___urlPath___": "bfs-unweighted-graphs",
                                    "___md___": 1049
                                },
                                "Multi-Source BFS": {
                                    "___urlPath___": "multi-source-bfs",
                                    "___md___": 1050
                                }
                            },
                            "Weighted Graphs (Non-Negative)": {
                                "___urlPath___": "weighted-graphs-non-negative",
                                "Dijkstra’s Algorithm": {
                                    "___urlPath___": "dijkstras-algorithm",
                                    "___md___": 1051
                                }
                            },
                            "Weighted Graphs (Negative Edges Allowed)": {
                                "___urlPath___": "weighted-graphs-negative-edges",
                                "Bellman-Ford Algorithm": {
                                    "___urlPath___": "bellman-ford-algorithm",
                                    "___md___": 1052
                                }
                            },
                            "Directed Acyclic Graphs (DAG)": {
                                "___urlPath___": "directed-acyclic-graphs",
                                "Topological Sort Based Shortest Path": {
                                    "___urlPath___": "topological-sort-shortest-path",
                                    "___md___": 1053
                                }
                            },
                            "Heuristic-Based Algorithms": {
                                "___urlPath___": "heuristic-based-algorithms",
                                "A* (A-Star) Search Algorithm": {
                                    "___urlPath___": "a-star-search-algorithm",
                                    "___md___": 1054
                                }
                            }
                        },
                        "All-Pairs Shortest Path": {
                            "___urlPath___": "all-pairs-shortest-path",
                            "Floyd-Warshall Algorithm": {
                                "___urlPath___": "floyd-warshall-algorithm",
                                "___md___": 1055
                            },
                            "Johnson’s Algorithm": {
                                "___urlPath___": "johnsons-algorithm",
                                "___md___": 1056
                            }
                        },
                        "Analysis & Applications": {
                            "___urlPath___": "analysis-applications",
                            "Time and Space Complexity Comparison": {
                                "___urlPath___": "time-space-complexity-comparison",
                                "___md___": 1057
                            },
                            "Real-World Use Cases": {
                                "___urlPath___": "real-world-use-cases",
                                "___md___": 1058
                            },
                            "Problem Links & Practice Sets": {
                                "___urlPath___": "problem-links-practice-sets",
                                "___md___": 1059
                            }
                        }
                    },
                    "Connectivity and Components": {
                        "___urlPath___": "connectivity-components",
                        "___md___": 1060,
                    }
                },
                "Analysis of Algorithms": {
                    "___urlPath___": "analysis-of-algorithms",
                    "Time and Space Complexity": {
                        "___urlPath___": "time-space-complexity",
                        "___md___": 1061
                    },
                    "Asymptotic Notations (Big-O, Omega, Theta)": {
                        "___urlPath___": "asymptotic-notations",
                        "___md___": 1062
                    },
                    "Best, Average, Worst Case Analysis": {
                        "___urlPath___": "best-average-worst-case-analysis",
                        "___md___": 1063
                    }
                }
            },
            "Database Management and Warehousing": {
                "___urlPath___": "database-warehousing",

                "Database Fundamentals": {
                    "___urlPath___": "database-fundamentals",

                    "ER-Model and Relational Model": {
                        "___urlPath___": "er-relational-model",

                        "ER-Model": {
                            "___urlPath___": "er-model",
                            "___md___": 153
                        },

                        "Relational Model": {
                            "___urlPath___": "relational-model",
                            "___md___": 961
                        }
                    },

                    "Relational Algebra and Calculus": {
                        "___urlPath___": "relational-algebra-calculus",

                        "Relational Algebra": {
                            "___urlPath___": "relational-algebra",
                            "___md___": 962
                        },

                        "Tuple Relational Calculus": {
                            "___urlPath___": "tuple-relational-calculus",
                            "___md___": 963
                        }
                    },

                    "SQL and Constraints": {
                        "___urlPath___": "sql-constraints",

                        "SQL (Structured Query Language)": {
                            "___urlPath___": "sql",
                            "___md___": 964
                        },

                        "Integrity Constraints": {
                            "___urlPath___": "integrity-constraints",
                            "___md___": 965
                        }
                    },

                    "Normalization and Normal Forms": {
                        "___urlPath___": "normalization",

                        "1NF, 2NF, 3NF, BCNF": {
                            "___urlPath___": "normal-forms",
                            "___md___": 966
                        }
                    }
                },

                "Database Storage and Indexing": {
                    "___urlPath___": "storage-indexing",

                    "File Organization": {
                        "___urlPath___": "file-organization",
                        "___md___": 967
                    },

                    "Indexing Techniques": {
                        "___urlPath___": "indexing-techniques",
                        "___md___": 968
                    }
                },

                "Data Warehousing Concepts": {
                    "___urlPath___": "data-warehousing",

                    "Data Preprocessing Techniques": {
                        "___urlPath___": "data-preprocessing",
                        "___md___": 969
                    },

                    "Schema Modeling": {
                        "___urlPath___": "schema-modeling",

                        "Multidimensional Schemas": {
                            "___urlPath___": "multidimensional-schemas",
                            "___md___": 970
                        },

                        "Concept Hierarchies": {
                            "___urlPath___": "concept-hierarchies",
                            "___md___": 971
                        },

                        "Measures: Categorization and Computation": {
                            "___urlPath___": "measures",
                            "___md___": 972
                        }
                    }
                }
            }
            ,
            "Machine Learning": {
                "___urlPath___": "machine-learning",
                "Supervised Learning": {
                    "___urlPath___": "supervised-learning",
                    "Introduction": {
                        "___urlPath___": "introduction",
                        "___md___": 58
                    },
                    "Regression": {
                        "___urlPath___": "regression",
                        "Simple Linear Regression": {
                            "___urlPath___": "simple-linear-regression",
                            "___md___": 113
                        },
                        "Multiple Linear Regression": {
                            "___urlPath___": "multiple-linear-regression",
                            "Overview": {
                                "___urlPath___": "overview",
                                "___md___": 114
                            },
                            "Model Evaluation": {
                                "___urlPath___": "model-evaluation",
                                "___md___": 115
                            }
                        },
                        "Cost Function": {
                            "___urlPath___": "cost-function",
                            "Overview": {
                                "___urlPath___": "overview",
                                "___md___": 57
                            },
                            "Mean Squared Error (MSE)": {
                                "___urlPath___": "mean-squared-error",
                                "___md___": 56
                            },
                            "Mean Absolute Error (MAE)": {
                                "___urlPath___": "mean-absolute-error",
                                "___md___": 118
                            }
                        },
                        "Ridge Regression & Lasso Regression": {
                            "___urlPath___": "ridge-lasso-regression",
                            "___md___": 37
                        },
                    },
                    "Classification": {
                        "___urlPath___": "classification",
                        "Logistic Regression": {
                            "___urlPath___": "logistic-regression",
                            "Overview": {
                                "___urlPath___": "overview",
                                "___md___": 35
                            },
                            "Mathematical Derivation": {
                                "___urlPath___": "mathematical-derivation",
                                "___md___": 116
                            }
                        },
                        "K-Nearest Neighbor (KNN)": {
                            "___urlPath___": "k-nearest-neighbor",
                            "___md___": 55
                        },
                        "Naive Bayes Classifier": true,
                        "Support Vector Machine (SVM)": true,
                        "Decision Trees": true
                    },
                    "Cross-Validation Techniques": {
                        "Leave-One-Out Cross-Validation (LOO)": true,
                        "K-Folds Cross-Validation": true
                    },
                    "Neural Networks": {
                        "Feed-Forward Neural Networks": true,
                        "Multi-Layer Perceptrons (MLP)": true
                    }
                },
                "Unsupervised Learning": {
                    "___urlPath___": "unsupervised-learning",
                    "Introduction": {
                        "___urlPath___": "introduction",
                        "___md___": 59
                    },
                    "Clustering": {
                        "___urlPath___": "clustering",
                        "K-Means": {
                            "___urlPath___": "k-means",
                            "___md___": 60
                        },
                        "K-Medoid": {
                            "___urlPath___": "k-medoid",
                            "___md___": 61
                        },
                        "Hierarchical Clustering (Single-Linkage, Multiple-Linkage)": true
                    },
                    "Dimensionality Reduction": {
                        "Principal Component Analysis (PCA)": true
                    }
                }
            },
            "Artificial Intelligence": {
                "___urlPath___": "artificial-intelligence",
                "Search": {
                    "___urlPath___": "search",
                    "Overview": {
                        "___urlPath___": "overview",
                        "___md___": 542
                    },
                    "Informed Search": {
                        "___urlPath___": "informed-search",
                        "Overview": {
                            "___urlPath___": "overview",
                            "___md___": 541
                        },
                        "Greedy Best-First Search": {
                            "___urlPath___": "greedy-best-first-search",
                            "___md___": 543
                        },
                        "A* Search": {
                            "___urlPath___": "a-start-search",
                            "___md___": 544
                        }
                    },
                    "Uninformed Search": {
                        "___urlPath___": "uninformed-search",
                        "Overview": {
                            "___urlPath___": "overview",
                            "___md___": 579
                        },
                        "Breadth-First Search (BFS)": {
                            "___urlPath___": "bfs",
                            "___md___": 33333

                        },
                        "Depth-First Search (DFS)": {

                        },
                        "Uniform Cost Search (UCS)": {

                        },
                        "Depth-Limited Search (DLS)": {

                        },
                        "Iterative Deepening Search (IDS)": {
                            "___urlPath___": "iterative-deepening-search-ids",
                            "___md___": 580
                        }
                    },
                    "Adversarial Search": true,
                    "Constraint Satisfaction Problems": {
                        "___urlPath___": "constraint-satisfaction-problems",
                        "___md___": 545
                    }
                },
                "Logic": {
                    "Propositional Logic": true,
                    "Predicate Logic": true,
                    "Resolution and Unification": {
                        "___urlPath___": "resolution-unification",
                        "___md___": 548
                    },
                    "Forward and Backward Chaining": {
                        "___urlPath___": "forward-backward-chaining",
                        "___md___": 549
                    }
                },
                "Reasoning Under Uncertainty": {
                    "Conditional Independence Representation": true,
                    "Exact Inference through Variable Elimination": true,
                    "Approximate Inference through Sampling": true,
                    "Bayesian Networks": {
                        "___urlPath___": "bayesian-networks",
                        "___md___": 553
                    },
                    "Markov Decision Processes (MDPs)": {
                        "___urlPath___": "markov-decision-processes",
                        "___md___": 554
                    }
                }
            }
        },
        "Computer Science and Applications Notes": {
            "___urlPath___": "computer-science-and-applications-course",
            "Data Structures": {
                "___urlPath___": "data-structures",
                "Introduction to Data Structures": {
                    "What is a Data Structure?": true,
                    "Importance of Data Structures in Programming": true,
                    "Classification of Data Structures": {
                        "Linear Data Structures": true,
                        "Non-Linear Data Structures": true
                    },
                    "Complexity Analysis": {
                        "Time Complexity": true,
                        "Space Complexity": true,
                        "Big-O, Big-Theta, and Big-Omega Notation": true
                    }
                },
                "Array": {
                    "Introduction to Arrays": true,
                    "Operations on Arrays": {
                        "Insertion and Deletion": true,
                        "Traversal": true,
                        "Searching and Sorting": true
                    },
                    "Two-Pointer Technique": {
                        "___urlPath___": "two-pointer-technique",
                        "___md___": 289
                    },
                    "Sliding Window Technique": {
                        "___urlPath___": "sliding-window-technique",
                        "___md___": 290
                    },
                    "Two-Dimensional Arrays": true,
                    "Applications of Arrays": {
                        "Matrix Operations": true,
                        "Dynamic Arrays": true
                    },
                    "Problems 💻": {
                        "___urlPath___": "problems",
                        "Remove Element": {
                            "___urlPath___": "remove-element",
                            "___md___": 406
                        },
                        "Product of Array Except Self": {
                            "___urlPath___": "product-array-except-self",
                            "___md___": 329
                        },
                        "Gas Station": {
                            "___urlPath___": "gas-station",
                            "___md___": 330
                        },
                        "Candy": {
                            "___urlPath___": "candy",
                            "___md___": 331
                        },
                        "Minimum Size Subarray Sum": {
                            "___urlPath___": "min-size-subarray-sum",
                            "___md___": 341
                        },
                        "Reverse Words in a String": {
                            "___urlPath___": "reverse-words-string",
                            "___md___": 342
                        },
                        "Longest Substring Without Repeating Characters": {
                            "___urlPath___": "longest-substring-without-repeating-characters",
                            "___md___": 478
                        },
                        "Two Sum II - Input Array Is Sorted": {
                            "___urlPath___": "two-sum-2-input-array-is-sorted",
                            "___md___": 479
                        },
                        "Valid Palindrome": {
                            "___urlPath___": "valid-palindrome",
                            "___md___": 480
                        },
                        "Longest Repeating Character Replacement": {
                            "___urlPath___": "longest-repeating-character-replacement",
                            "___md___": 481
                        }
                    }
                },
                "Linked List": {
                    "Introduction to Linked Lists": {
                        "Singly Linked List": true,
                        "Doubly Linked List": true,
                        "Circular Linked List": true
                    },
                    "Operations on Linked Lists": {
                        "Insertion": true,
                        "Deletion": true,
                        "Reversal": true
                    },
                    "Applications of Linked Lists": {
                        "Implementing Stacks and Queues": true,
                        "Dynamic Memory Allocation": true
                    }
                },
                "Stack": {
                    "___urlPath___": "stack",
                    "Introduction to Stack": true,
                    "Operations on Stack": {
                        "Push and Pop": true,
                        "Peek/Top Operation": true
                    },
                    "Applications of Stack": {
                        "___urlPath___": "applications-stack",
                        "Expression Evaluation (Infix, Postfix, Prefix)": {
                            "___urlPath___": "expression-evaluation-postfix-prefix",
                            "___md___": 344
                        },
                        "Backtracking (Maze Problems, Recursion)": {
                            "___urlPath___": "backtracking",
                            "___md___": 346
                        },
                        "Parenthesis Matching": {
                            "___urlPath___": "parenthesis-matching",
                            "___md___": 347
                        }
                    },
                    "Problems 💻": {
                        "___urlPath___": "problems",
                        "Valid Parentheses": {
                            "___urlPath___": "valid-parentheses",
                            "___md___": 343
                        }
                    }
                },
                "Queue": {
                    "Introduction to Queue": true,
                    "Types of Queues": {
                        "Simple Queue": true,
                        "Circular Queue": true,
                        "Priority Queue": true,
                        "Deque (Double-Ended Queue)": true
                    },
                    "Applications of Queue": {
                        "Scheduling Algorithms": true,
                        "Breadth-First Search (BFS)": true
                    }
                },
                "Hashing": {
                    "Introduction to Hashing": true,
                    "Hash Functions": {
                        "Division Method": true,
                        "Multiplication Method": true,
                        "Universal Hashing": true
                    },
                    "Collision Resolution Techniques": {
                        "Chaining": true,
                        "Open Addressing (Linear Probing, Quadratic Probing)": true
                    },
                    "Applications of Hashing": {
                        "Hash Tables": true,
                        "Dictionary Implementation": true
                    },
                    "Problems 💻": {
                        "___urlPath___": "problems",
                        "Valid Anagram": {
                            "___urlPath___": "valid-anagram",
                            "___md___": 456
                        },
                        "Group Anagrams": {
                            "___urlPath___": "group-anagrams",
                            "___md___": 455
                        },
                        "Contains Duplicate II": {
                            "___urlPath___": "contains-duplicate",
                            "___md___": 460
                        }
                    }
                },
                "Trees": {
                    "Introduction to Trees": {
                        "Terminology (Root, Node, Height, Depth)": true,
                        "Types of Trees (General Tree, Binary Tree)": true
                    },
                    "Binary Trees": {
                        "Binary Search Tree (BST)": {
                            "___urlPath___": "bst",
                            "Problems 💻": {
                                "___urlPath___": "problems",
                                "Minimum Absolute Difference in BST": {
                                    "___urlPath___": "min-absolute-diff-bst",
                                    "___md___": 364
                                }
                            }
                        },
                        "Balanced Trees (AVL, Red-Black Tree)": true,
                        "Heap (Max Heap, Min Heap)": true
                    },
                    "Tree Traversal Techniques": {
                        "Inorder Traversal": true,
                        "Preorder Traversal": true,
                        "Postorder Traversal": true,
                        "Level Order Traversal": true
                    },
                    "Advanced Tree Algorithms": {
                        "Segment Tree": true,
                        "Fenwick Tree (Binary Indexed Tree)": true,
                        "Heavy-Light Decomposition (HLD)": true,
                        "Centroid Decomposition": true,
                        "K-D Tree": true
                    },
                    "Applications of Trees": {
                        "Huffman Encoding": true,
                        "Expression Trees": true
                    }
                },
                "Graphs": {
                    "___urlPath___": "graphs",
                    "Introduction to Graphs": {
                        "___urlPath___": "introductio-to-graphs",
                        "Terminology (Vertex, Edge, Degree)": true,
                        "Representation of Graphs (Adjacency Matrix, Adjacency List)": {
                            "___urlPath___": "representation-of-graphs",
                            "___md___": 624
                        }
                    },
                    "Graph Traversal Algorithms": {
                        "Breadth-First Search (BFS)": true,
                        "Depth-First Search (DFS)": true
                    },
                    "Shortest Path Algorithms": {
                        "Dijkstra's Algorithm": true,
                        "Bellman-Ford Algorithm": true,
                        "Floyd-Warshall Algorithm": true
                    },
                    "Minimum Spanning Tree (MST)": {
                        "Prim's Algorithm": true,
                        "Kruskal's Algorithm": true
                    },
                    "Advanced Graph Algorithms": {
                        "Strongly Connected Components (SCC)": true,
                        "Articulation Points & Bridges": true,
                        "Euler Tour for Trees": true,
                        "Maximum Flow (Ford-Fulkerson, Edmonds-Karp, Dinic’s Algorithm)": true,
                        "Bipartite Matching (Kuhn’s Algorithm)": true
                    },
                    "Applications of Graphs": {
                        "Social Network Analysis": true,
                        "Network Routing": true,
                        "Topological Sorting": true
                    }
                },
                "Heap": {
                    "___urlPath___": "heaps",
                    "Introduction to Heaps": {
                        "___urlPath___": "introduction-heaps",
                        "___md___": 333
                    },
                    "Heap Representation": {
                        "___urlPath___": "heap-representation",
                        "___md___": 609
                    },
                    "Heap Operations": {
                        "___urlPath___": "heap-operations",
                        "Insertion (Heapify Up)": {
                            "___urlPath___": "insertion",
                            "___md___": 608
                        },
                        "Deletion (Heapify Down)": {
                            "___urlPath___": "deletion",
                            "___md___": 610
                        }
                    },
                    "Advanced Heaps": {
                        "___urlPath___": "advanced-heaps",
                        "Fibonacci Heap": {
                            "___md___": 611
                        }
                    },
                    "Heap Applications": {
                        "___urlPath___": "heap-application",
                        "Priority Queue Implementation": {
                            "___urlPath___": "priority-queue-implementation",
                            "___md___": 612
                        },
                        "Heap Sort": true
                    },
                    "Problems 💻": {
                        "___urlPath___": "problems",
                        "Kth Largest Element in an Array": {
                            "___urlPath___": "kth-largest-element-array",
                            "___md___": 332
                        }
                    }
                },
                "Trie": {
                    "Introduction to Trie": true,
                    "Operations on Trie": {
                        "Insertion": true,
                        "Search": true,
                        "Deletion": true
                    },
                    "Applications of Trie": {
                        "Autocomplete Systems": true,
                        "Spell Checking": true,
                        "IP Routing (Longest Prefix Match)": true
                    }
                },
                "Advanced Data Structures": {
                    "Mo’s Algorithm": true,
                    "Treap & Splay Tree": true,
                    "Persistent Data Structures": true,
                    "Suffix Array & Suffix Tree": true,
                    "Wavelet Trees": true,
                    "Ternary Search on Monotonic Functions": true
                },
                "Case Studies and Practical Applications": {
                    "Case Study: Designing a Search Engine with Tries": true,
                    "Case Study: Social Network Analysis using Graphs": true,
                    "Practical Project: Implementing a Custom Hash Table": true,
                    "Practical Project: Scheduling System with Priority Queues": true
                },
                "Competitive Programming Cheat Sheet": {
                    "___urlPath___": "competitive-programming-cheat-sheet",
                    "Java": {
                        "___urlPath___": "java",
                        "___md___": 457
                    },
                    "JavaScript": {
                        "___urlPath___": "javascript",
                        "___md___": 458
                    },
                    "JavaScript Collections": {
                        "___urlPath___": "javascript-collections",
                        "___md___": 943

                    },
                    "TypeScript": {
                        "___urlPath___": "typescript",
                        "___md___": 459
                    },
                    "User Input/output": {
                        "___urlPath___": "user-input-output",
                        "Java": {
                            "___urlPath___": "java",
                            "___md___": 927
                        },
                        "JavaScript / TypeScript": {
                            "___urlPath___": "javascript-typescript",
                            "___md___": 928
                        },
                        "Python": {
                            "___urlPath___": "python",
                            "___md___": 929
                        },
                        "C": {
                            "___urlPath___": "c",
                            "___md___": 930
                        }
                    },
                    "Functions: Pass by Value vs Pass by Reference": {
                        "___urlPath___": "functions-pass-by-value-vs-pass-by-reference",
                        "JavaScript": {
                            "___urlPath___": "javascript",
                            "___md___": 933
                        },
                        "Java": {
                            "___urlPath___": "Java",
                            "___md___": 934
                        },
                        "Python": {
                            "___urlPath___": "python",
                            "___md___": 935
                        },
                        "C": {
                            "___urlPath___": "c",
                            "___md___": 936
                        }
                    },
                    "DSA Patterns (Cheatsheet)": {
                        "___urlPath___": "dsa-patterns-cheatsheet",
                        "Indicies-1: Classic Cheatsheet Overview (PART-1)": {
                            "___urlPath___": "classic-cheatsheet-overview",
                            "___md___": 482
                        },
                        "Indicies-2: Extended Cheatsheet Overview (PART-1,2,3,4)": {
                            "___urlPath___": "extended-cheatsheet-overview",
                            "___md___": 602
                        },
                        "PART-1: Classic Cheat Sheet": {
                            "___urlPath___": "part-1-classic-cheat-sheet",
                            "Array / String Inputs": {
                                "___urlPath___": "array-string-input",
                                "1. Is the array sorted?": {
                                    "___urlPath___": "is-the-array-sorted",
                                    "Overview": {
                                        "___urlPath___": "overview",
                                        "___md___": 491
                                    },
                                    "Two Pointers": {
                                        "___urlPath___": "two-pointers",
                                        "___md___": 599
                                    },
                                    "Prefix Sums": {
                                        "___urlPath___": "prefix-sums",
                                        "___md___": 492
                                    }
                                },
                                "2. Optimization problems (Max/Min/Subarray)?": {
                                    "___urlPath___": "optimization-problems-max-min-subarray",
                                    "Overview": {
                                        "___urlPath___": "overview",
                                        "___md___": 598
                                    },
                                    "Sliding Widnow": {
                                        "___urlPath___": "sliding-window",
                                        "___md___": 600
                                    },
                                    "Problems": {
                                        "___urlPath___": "problems",
                                        "___md___": 628
                                    }
                                },
                                "3. Looking for duplicates / counts / frequencies?": {
                                    "___urlPath___": "looking-for-duplicates-counts-frequencies",
                                    "___md___": 597
                                },
                                "4. Need substrings or fixed-size subarrays?": {
                                    "___urlPath___": "need-substrings-of-fixed-size-subarrays",
                                    "___md___": 596
                                },
                                "5. Frequent min/max in window?": {
                                    "___urlPath___": "frequent-min-max-in-windows",
                                    "Overview": {
                                        "___urlPath___": "overview",
                                        "___md___": 595
                                    },
                                    "Monotonic Queue, Deque, Heap": {
                                        "___urlPath___": "monotonic-queue-deque-heap",
                                        "___md___": 601
                                    },
                                    "CRUD with PriorityQueue and Deque (in Java) - Useful": {
                                        "___urlPath___": "crud-with-priorityqueue-and-deque",
                                        "___md___": 627
                                    },
                                    "Extra: Monotonic Stack Vs Monotonic Queue": {
                                        "___urlPath___": "extra-monotonic-stack-vs-monotonic-queue",
                                        "___md___": 960
                                    }
                                },
                                "6. Generating subsets, permutations, combinations?": {
                                    "___urlPath___": "generating-subsets-permutations-combinations",
                                    "Overview": {
                                        "___urlPath___": "overview",
                                        "___md___": 594
                                    },
                                    "Extra: String permutation (swapping or backtracking)": {
                                        "___urlPath___": "string-permutation",
                                        "___md___": 626
                                    },
                                    "Must Know - Shallow and Deep Copy for backtracking problems": {
                                        "___urlPath___": "shallow-copy-deep-copy",
                                        "___md___": 631
                                    }
                                },
                                "7. Matching / parsing characters?": {
                                    "___urlPath___": "matching-parsing-characters",
                                    "Overview": {
                                        "___urlPath___": "overview",
                                        "___md___": 593
                                    },
                                    "Notations (infix, prefix, postfix)": {
                                        "___urlPath___": "notations",
                                        "___md___": 630
                                    },
                                    "Precedence Table": {
                                        "___urlPath___": "precedence-table",
                                        "___md___": 764
                                    },
                                    "infix to postfix": {
                                        "___urlPath___": "infix-to-postfix",
                                        "___md___": 765
                                    },
                                    "infix to prefix": {
                                        "___urlPath___": "infix-to-prefix",
                                        "___md___": 784
                                    },
                                    "prefix to infix": {
                                        "___urlPath___": "prefix-to-infix",
                                        "___md___": 785
                                    },
                                    "prefix to postfix": {
                                        "___urlPath___": "prefix-to-postfix",
                                        "___md___": 786
                                    },
                                    "postfix to infix": {
                                        "___urlPath___": "postfix-to-infix",
                                        "___md___": 787
                                    },
                                    "postfix to prefix": {
                                        "___urlPath___": "postfix-to-prefix",
                                        "___md___": 788
                                    },
                                    "Evaluation": {
                                        "___urlPath___": "evaluation",
                                        "Concept": {
                                            "___urlPath___": "concept",
                                            "___md___": 789
                                        },
                                        "Code (Java, JavaScript, TypeScript)": {
                                            "___urlPath___": "code",
                                            "___md___": 790
                                        }
                                    }

                                },
                                "Problems": {
                                    "___urlPath___": "problems",
                                    "Medium Hard problems": {
                                        "___urlPath___": "medium-hard-problems",
                                        "___md___": 629
                                    }
                                },
                                "Pitfalls": {
                                    "___urlPath___": "pitfalls",
                                    "By Value vs By Reference mistake (primitve vs non-premitives)": {
                                        "___urlPath___": "by-value-vs-by-ref",
                                        "___md___": 899
                                    },
                                    "Shallow copy during backtracking problems": {
                                        "___urlPath___": "copy-in-backtracking-problems",
                                        "___md___": 900
                                    }
                                }
                            },
                            "Graph Inputs": {
                                "___urlPath___": "graph-inputs",
                                "Shortest path in unweighted graph? (=> Use BFS)": {
                                    "___urlPath___": "shortest-path-in-unweighted-graph",
                                    "___md___": 574
                                },
                                "Weighted shortest path?": {
                                    "___urlPath___": "weighted-shortest-path",
                                    "Overview": {
                                        "___urlPath___": "overview",
                                        "___md___": 575
                                    },
                                    "Dijkstra’s Algorithm (=> Use Priority Queue)": {
                                        "___urlPath___": "dijkstras-algorithm",
                                        "___md___": 576
                                    },
                                    "Bellman-Ford Algorithm (=> checks negative weight cycles after v-1 runs)": {
                                        "___urlPath___": "bellman-ford-algorithm",
                                        "___md___": 577
                                    },
                                    "A* (A Star) Algorithm": {
                                        "___urlPath___": "a-star-algorithm",
                                        "___md___": 578
                                    }
                                },
                                "Connected components ( cycle detection )?": {
                                    "___urlPath___": "connected-components-cycle-detection",
                                    "Overview": {
                                        "___urlPath___": "overview",
                                        "___md___": 581
                                    },
                                    "With DFS": {
                                        "___urlPath___": "with-dfs",
                                        "___md___": 1192
                                    },
                                    "Union-Find (Disjoint Set Union - DSU)": {
                                        "___urlPath___": "union-find",
                                        "___md___": 1149
                                    }

                                },
                                "Topological ordering?": {
                                    "___urlPath___": "topological-sorting",
                                    "Overview": {
                                        "___urlPath___": "overview",
                                        "___md___": 620
                                    },
                                    "Kanh's Algo": {
                                        "___urlPath___": "kanh-s-algo",
                                        "___md___": 621
                                    },
                                    "Cycle detection": {
                                        "___urlPath___": "cycle-detection",
                                        "___md___": 623
                                    }
                                },
                                "Optimization like MST?": {
                                    "___urlPath___": "optimization-like-mst",
                                    "Overview": {
                                        "___urlPath___": "overview",
                                        "___md___": 625
                                    }

                                }
                            },
                            "Tree Inputs (Often Binary Trees)": {
                                "___urlPath___": "tree-inputs",
                                "Traversals?": {
                                    "___urlPath___": "traversals",
                                    "___md___": 573
                                },
                                "Balanced checks or diameter calculations?": {
                                    "___urlPath___": "balanced-checks-or-diameter-calculations",
                                    "___md___": 618
                                },
                                "Lowest Common Ancestor?": {
                                    "___urlPath___": "lowset-common-ancestor",
                                    "___md___": 619
                                }
                            },
                            "Linked List Inputs": {
                                "___urlPath___": "linked-list-input",
                                "Detecting cycles?": {
                                    "___urlPath___": "detecting-cycles",
                                    "___md___": 572
                                },
                                "Reversals / partial changes?": {
                                    "___urlPath___": "reversals-partial-changes",
                                    "___md___": 616
                                },
                                "Intersection or middle node?": {
                                    "___urlPath___": "intersection-or-middle-node",
                                    "___md___": 617
                                }
                            },
                            "Dynamic Programming Use-Cases": {
                                "___urlPath___": "dynamic-programming-use-cases",
                                "Optimal choices / Overlapping subproblems?": {
                                    "___urlPath___": "optimal-choices-overlapping-subproblems",
                                    "___md___": 487
                                },
                                "Subset or knapsack problems?": {
                                    "___urlPath___": "subset-or-knapsack-problems",
                                    "___md___": 488
                                },
                                "String matching or edits?": {

                                }
                            },
                            "Range Queries / Updates": {
                                "___urlPath___": "range-queries-updates",
                                "Many sum queries, no updates?": {
                                    "___urlPath___": "many-sum-queries-no-updates",
                                    "___md___": 483
                                },
                                "Many sum queries + updates?": {
                                    "___urlPath___": "many-sum-queries-updates",
                                    "___md___": 486
                                }
                            },
                            "Bit Manipulation": {
                                "___urlPath___": "bit-manipulation",
                                "Set-based subsets or XOR logic?": {
                                    "___urlPath___": "set-based-subsets-or-xor-logic",
                                    "___md___": 614
                                },
                                "Need to check even/odd, set/unset bits?": {
                                    "___urlPath___": "need-to-check-even-odd-set-unset-bits",
                                    "___md___": 615
                                }
                            },
                            "When Recursion is Banned or Stack Overflow Risk": {
                                "___urlPath___": "when-recursion-is-banned-or-stack-overflow-risk",
                                "___md___": 613
                            },
                            "Top K / Least K Elements": {
                                "___urlPath___": "top-k-least-k-elements",
                                "Use Heap": {
                                    "___urlPath___": "use-heap",
                                    "___md___": 607
                                },
                                "For exact K-th value, use Quick Select": {
                                    "___urlPath___": "for-exact-k-th-value",
                                    "___md___": 608
                                }
                            },
                            "Special Techniques": {
                                "___urlPath___": "special-techniques",
                                "Sliding Window": {
                                    "___urlPath___": "sliding-window",
                                    "___md___": 603
                                },
                                "Monotonic Stack ": {
                                    "___urlPath___": "monotonic-stack",
                                    "___md___": 604
                                },
                                "Greedy ": {
                                    "___urlPath___": "greedy",
                                    "___md___": 605
                                },
                                "Trie": {
                                    "___urlPath___": "trie",
                                    "___md___": 606
                                }
                            },
                        },
                        "PART-2: Additional Classic Patterns": {
                            "___urlPath___": "part-2-additional-classical-patterns",

                            "Overlapping intervals, time slots": {

                            },
                            "Arrays with elements 1 to N": {

                            },
                            "Reverse a list without extra space": {

                            },
                            "Continuous median, window medians": {

                            },
                            "Merge multiple sorted arrays/lists": {

                            },
                            "Problems like rotated arrays, next greatest, ceiling/floor": {

                            },
                            "Concurrent execution, semaphores": {

                            },
                        },
                        "PART-3: Advanced & Niche Patterns": {
                            "___urlPath___": "part-3-advanced-and-niche-patterns",


                            "Fast group merging & lookup in disjoint sets.": {

                            },
                            "Range updates + range queries in large arrays.": {

                            },
                            "Answer offline range queries efficiently.": {

                            },
                            "Advanced string problems (like substring counts, lex order, compression).": {

                            },
                            "Efficient substring matching.": {

                            },
                            "Tree queries like path sum, LCA with fast updates.": {

                            },
                            "Quickly jump ancestors or find LCA in O(logN).": {

                            },
                            "Max XOR pair, number range queries.": {

                            }
                        },
                        "PART-4: LeetCode 20 (Boost problem-solving skills)": {
                            "___urlPath___": "leetcode-20"
                        }


                    },
                    "AtoZ DSA Problems and Solutions": {
                        "___urlPath___": "a-to-z-dsa-problems-and-solutions",
                        "Basic Recusion": {
                            "___urlPath___": "basic-recusion",
                            "Sum numbers from 1 to N": {
                                "___urlPath___": "sum-numbers-from-one-to-n",
                                "___md___": 681
                            },
                            "Reverse an array": {
                                "___urlPath___": "reverse-an-array",
                                "___md___": 682
                            }
                        },
                        "Arrays": {
                            "easy": {
                                "Check if the array is sorted": {
                                    "___urlPath___": "check-if-the-array-is-sorted",
                                    "___md___": 941
                                },
                                "Remove duplicates from Sorted array": {
                                    "___urlPath___": "remove-duplicates-from-sorted-array",
                                    "___md___": 942
                                }
                            }
                        }


                    }
                }

            },
            "Algorithms": {
                "___urlPath___": "algorithms",
                "Introduction to Algorithms": {
                    "What is an Algorithm?": true,
                    "Characteristics of a Good Algorithm": true,
                    "Importance of Algorithms in Problem Solving": true,
                    "Algorithm Complexity": {
                        "Time Complexity Analysis": true,
                        "Space Complexity Analysis": true,
                        "Big-O, Big-Theta, and Big-Omega Notation": true
                    }
                },
                "Sorting Algorithms": {
                    "Comparison-Based Sorting": {
                        "Bubble Sort": {
                            "Implementation in Java": true,
                            "Time Complexity Analysis": true
                        },
                        "Selection Sort": true,
                        "Insertion Sort": true,
                        "Merge Sort": true,
                        "Quick Sort": {
                            "Pivot Selection Strategies": true,
                            "Worst-Case and Average-Case Analysis": true
                        },
                        "Heap Sort": true
                    },
                    "Non-Comparison-Based Sorting": {
                        "Counting Sort": true,
                        "Radix Sort": true,
                        "Bucket Sort": true
                    },
                    "Interview Applications of Sorting Algorithms": {
                        "Sorting for Interval Problems": true,
                        "Sorting for String Anagrams": true
                    }
                },
                "Searching Algorithms": {
                    "___urlPath___": "searching-algorithms",
                    "Linear Search": true,
                    "Binary Search": {
                        "___urlPath___": "binary-search",
                        "Iterative and Recursive Implementations in Java": true,
                        "Applications in Coding Interviews": true,
                        "Problems 💻": {
                            "___urlPath___": "problems",
                            "Find Peak Element": {
                                "___urlPath___": "find-peak-element",
                                "___md___": 349
                            },
                            "Search Insert Position": {
                                "___urlPath___": "search-insert-position",
                                "___md___": 359
                            }
                        }
                    },
                    "Ternary Search": true,
                    "Exponential Search": true
                },
                "Recursion and Backtracking": {
                    "Introduction to Recursion": {
                        "Base Case and Recursive Case": true,
                        "Tail Recursion": true
                    },
                    "Backtracking Algorithms": {
                        "N-Queens Problem": true,
                        "Sudoku Solver": true,
                        "Rat in a Maze": true,
                        "Word Search": true
                    },
                    "Optimization Techniques": {
                        "Memoization with Recursion": true,
                        "Dynamic Programming vs Recursion": true
                    }
                },
                "Divide and Conquer": {
                    "Introduction to Divide and Conquer": true,
                    "Key Problems and Solutions": {
                        "Merge Sort": true,
                        "Quick Sort": true,
                        "Binary Search": true,
                        "Closest Pair of Points": true
                    },
                    "Problems 💻": {
                        "___urlPath___": "problems",
                        "Convert Sorted Array to Binary Search Tree": {
                            "___urlPath___": "convert-sorted-array-binary-search-tree",
                            "___md___": 334
                        },
                        "Sort List": {
                            "___urlPath___": "sort-list",
                            "___md___": 348
                        }
                    }
                },
                "Dynamic Programming (DP)": {
                    "___urlPath___": "dynamic-programming",
                    "Introduction to DP": {
                        "___urlPath___": "introduction-dp",
                        "Memoization and Tabulation Techniques": {
                            "___urlPath___": "memoization-tabulation-technique",
                            "___md___": 338
                        },
                        "Overlapping Subproblems and Optimal Substructure": {
                            "___urlPath___": "overlapping-subproblems-optimal-substructrue",
                            "___md___": 339
                        },
                        "1D vs Multi Dimensional DP": {
                            "___urlPath___": "one-dimensional-vs-multi-dimensional-dp",
                            "___md___": 376
                        }
                    },
                    "Problems 💻": {
                        "___urlPath___": "problems",
                        "Fibonacci Sequence": true,
                        "Longest Common Subsequence (LCS)": true,
                        "Longest Increasing Subsequence (LIS)": true,
                        "Knapsack Problem (0/1 Knapsack, Unbounded Knapsack)": true,
                        "Coin Change Problem": true,
                        "Matrix Chain Multiplication": true,
                        "Longest Palindromic Substring": {
                            "___urlPath___": "longest-palindromic-substring",
                            "___md___": 340
                        },
                        "House Robber": {
                            "___urlPath___": "house-robber",
                            "___md___": 362
                        },
                        "Longest Increasing Subsequence": {
                            "___urlPath___": "longest-increasing-subsequence",
                            "___md___": 363
                        },
                        "Egg Dropping Problem": true,
                        "Wildcard Pattern Matching": true,
                        "Word Break Problem": true,
                        "Shortest Path in Weighted Grid (Dijkstra with DP)": true,
                        "Multi Dimensional DP": {
                            "___urlPath___": "multi-dimensional-dp",
                            "Triangle": {
                                "___urlPath___": "triangle",
                                "___md___": 377
                            },
                            "Unique Paths II": {
                                "___urlPath___": "unique-paths-2",
                                "___md___": 407
                            },
                            "Minimum Path Sum": {
                                "___urlPath___": "minimum-path-sum",
                                "___md___": 408
                            }
                        }
                    }
                },
                "Greedy Algorithms": {
                    "Introduction to Greedy Approach": true,
                    "Classic Problems": {
                        "Activity Selection Problem": true,
                        "Huffman Encoding": true,
                        "Minimum Spanning Tree": {
                            "Kruskal's Algorithm": true,
                            "Prim's Algorithm": true
                        },
                        "Fractional Knapsack": true
                    },
                    "Interval Problems": {
                        "___urlPath___": "interval-problems",
                        "Overview of Interval Problems": {
                            "___urlPath___": "interval-overview",
                            "___md___": 335
                        },
                        "Problems 💻": {
                            "___urlPath___": "problems",
                            "Summary Ranges": {
                                "___urlPath___": "summary-ranges",
                                "___md___": 336
                            }
                        },

                    },
                    "Applications in Coding Interviews": {
                        "Interval Scheduling": true,
                        "Job Sequencing": true,
                        "Optimal Merge Pattern": true
                    }
                },
                "Graph Algorithms": {
                    "Graph Representation": {
                        "Adjacency Matrix": true,
                        "Adjacency List": true
                    },
                    "Graph Traversal": {
                        "___urlPath___": "graph-traversal",
                        "Depth-First Search (DFS)": {
                            "___urlPath___": "depth-first-search",
                            "___md___": 220
                        },
                        "Breadth-First Search (BFS)": {
                            "___urlPath___": "breadth-first-search",
                            "___md___": 227
                        }
                    },
                    "Shortest Path Algorithms": {
                        "___urlPath___": "shortest-path-algorithms",
                        "Dijkstra's Algorithm": {
                            "___urlPath___": "dijkstras-algorithm",
                            "___md___": 221
                        },
                        "Bellman-Ford Algorithm": {
                            "___urlPath___": "bellman-ford-algorithm",
                            "___md___": 222
                        },
                        "Floyd-Warshall Algorithm": {
                            "___urlPath___": "floyd-warshall-algorithm",
                            "___md___": 223
                        }
                    },
                    "Minimum Spanning Tree (MST)": {
                        "___urlPath___": "minimum-spanning-tree",
                        "Introduction to MST": {
                            "___urlPath___": "introduction-to-mst",
                            "___md___": 224
                        },
                        "Prim's Algorithm": {
                            "___urlPath___": "prims-algorithm",
                            "___md___": 225
                        },
                        "Kruskal's Algorithm": {
                            "___urlPath___": "kruskals-algorithm",
                            "___md___": 226
                        }
                    },
                    "Topological Sorting": {
                        "___urlPath___": "topological-sorting",
                        "___md___": 583
                    },
                    "Strongly Connected Components (SCC)": {
                        "___urlPath___": "strongly-connected-components-scc",
                        "___md___": 582
                    },
                    "Applications in Real-World Problems": {
                        "Network Routing": true,
                        "Social Network Analysis": true
                    },
                    "Problems 💻": {
                        "___urlPath___": "problems",
                        "Snakes and Ladders": {
                            "___urlPath___": "snakes-ladders",
                            "___md___": 360
                        }
                    }
                },
                "String Algorithms": {
                    "String Matching Algorithms": {
                        "Naive Pattern Matching": true,
                        "Knuth-Morris-Pratt (KMP)": true,
                        "Rabin-Karp Algorithm": true
                    },
                    "Advanced String Problems": {
                        "Longest Palindromic Substring": true,
                        "Z-Algorithm for Pattern Matching": true,
                        "Suffix Arrays and Suffix Trees": true
                    },
                    "Applications in Coding Interviews": {
                        "Check for Anagrams": true,
                        "Find Substring with Concatenation of All Words": true,
                        "Longest Common Prefix": true
                    }
                },
                "Mathematical Algorithms": {
                    "Number Theory Basics": {
                        "Greatest Common Divisor (GCD) using Euclid’s Algorithm": true,
                        "Prime Factorization (Sieve of Eratosthenes)": true,
                        "Modular Arithmetic": true
                    },
                    "Bit Manipulation": {
                        "Understanding Bitwise Operators": true,
                        "Counting Set Bits (Brian Kernighan's Algorithm)": true,
                        "Applications in Interview Problems": {
                            "Single Number": true,
                            "Power of Two": true
                        }
                    },
                    "Matrix Algorithms": {
                        "Matrix Multiplication": true,
                        "Matrix Rotation": true,
                        "Spiral Traversal": true
                    },
                    "Problems 💻": {
                        "Plus One": {
                            "___urlPath___": "plus-one",
                            "___md___": 435
                        }
                    }
                },
                "Advanced Topics": {
                    "Disjoint Set Union (Union-Find)": {
                        "Union by Rank and Path Compression": true,
                        "Applications in Kruskal’s Algorithm": true
                    },
                    "Segment Trees": {
                        "Construction and Query": true,
                        "Lazy Propagation": true
                    },
                    "Fenwick Tree (Binary Indexed Tree)": true,
                    "Trie": {
                        "Insert and Search Operations": true,
                        "Applications in Autocomplete": true
                    },
                    "Indexed Search Optimization": {
                        "How VS Code Search Works": {
                            "___urlPath___": "vs-code-search",
                            "___md___": 361
                        }
                    }
                },
                "Case Studies and Practical Applications": {
                    "Case Study: Designing a Ride-Sharing System": true,
                    "Case Study: Implementing a Payment Gateway": true,
                    "Practical Project: Real-Time Chat Application Using Graph Algorithms": true
                }
            },
            "System Design": {
                "___urlPath___": "system-design",
                "Introduction to System Design": {
                    "What is System Design?": true,
                    "Importance of System Design in Scalable Systems": true,
                    "Types of System Design (High-Level, Low-Level)": true,
                    "System Design Process Overview": true
                },
                "Key Concepts in System Design": {
                    "___urlPath___": "system-design-concepts",
                    "Scalability": {
                        "Vertical Scaling vs Horizontal Scaling": true,
                        "Stateless and Stateful Services": true
                    },
                    "Availability": {
                        "High Availability": true,
                        "Fault Tolerance": true,
                        "Failover Mechanisms": true
                    },
                    "Consistency": {
                        "CAP Theorem": true,
                        "Eventual Consistency vs Strong Consistency": true
                    },
                    "Latency and Throughput": true,
                    "Reliability and Durability": true,
                    "All In One": {
                        "___urlPath___": "all-in-one",
                        "___md___": 490
                    }
                },

                "Components of System Design": {
                    "Load Balancers": {
                        "Layer 4 vs Layer 7 Load Balancing": true,
                        "Health Checks and Failover": true
                    },
                    "Databases": {
                        "SQL vs NoSQL": true,
                        "Database Sharding and Partitioning": true,
                        "Replication (Master-Slave, Master-Master)": true,
                        "Caching for Databases": true
                    },
                    "Caching": {
                        "Introduction to Caching": true,
                        "Cache Eviction Policies": true,
                        "Caching Strategies (Write-Through, Write-Back, Write-Around)": true,
                        "Tools (Redis, Memcached)": true
                    },
                    "Message Queues and Stream Processing": {
                        "Introduction to Message Queues": true,
                        "Message Brokers (RabbitMQ, Kafka)": true,
                        "Use Cases for Message Queues": true,
                        "Stream Processing Frameworks (Apache Kafka, Flink)": true
                    },
                    "API Gateway and Rate Limiting": {
                        "What is an API Gateway?": true,
                        "Rate Limiting Strategies": true,
                        "Throttling Mechanisms": true
                    },
                    "CDN (Content Delivery Networks)": {
                        "How CDNs Work": true,
                        "Caching at the Edge": true,
                        "CDN Providers (Cloudflare, Akamai)": true
                    }
                },
                "Designing Scalable Systems": {
                    "Distributed Systems": {
                        "Characteristics of Distributed Systems": true,
                        "Challenges in Distributed Systems": true,
                        "Consensus Algorithms (Paxos, Raft)": true
                    },
                    "Microservices Architecture": {
                        "Microservices vs Monoliths": true,
                        "Inter-Service Communication (REST, gRPC, Message Queues etc.)": true,
                        "Service Discovery Mechanisms": true,
                        "Database Per Microservice": true
                    },
                    "Event-Driven Architectures": {
                        "Introduction to Event-Driven Systems": true,
                        "Event Sourcing": true,
                        "CQRS (Command Query Responsibility Segregation)": true
                    }
                },
                "Designing Specific Systems": {
                    "Designing a URL Shortener": {
                        "High-Level Design": true,
                        "Database Schema for URL Shortening": true,
                        "Generating Unique Short URLs": true,
                        "Handling High Traffic": true
                    },
                    "Designing a Messaging System": {
                        "Real-Time Messaging Architecture": true,
                        "Ensuring Message Delivery": true,
                        "Handling Offline Users": true
                    },
                    "Designing an E-Commerce System": {
                        "Product Catalog Service": true,
                        "Order Management System": true,
                        "Inventory Management System": true,
                        "Payment Gateway Integration": true
                    },
                    "Designing a Social Media Feed": {
                        "Newsfeed Generation": true,
                        "Content Ranking Algorithms": true,
                        "Handling User Interactions": true
                    },
                    "Designing a Video Streaming Platform": {
                        "Video Encoding and Storage": true,
                        "Streaming Protocols (HLS, DASH)": true,
                        "Content Distribution with CDNs": true
                    }
                },
                "Performance Optimization": {
                    "Database Optimization": {
                        "Indexing Strategies": true,
                        "Query Optimization": true
                    },
                    "Application Optimization": {
                        "Reducing Latency": true,
                        "Horizontal Scaling of Services": true,
                        "Load Testing Tools (JMeter, Locust)": true
                    },
                    "Monitoring and Debugging": {
                        "Application Monitoring Tools (Datadog, New Relic)": true,
                        "Distributed Tracing": true,
                        "Debugging Distributed Systems": true
                    }
                },
                "Security and Compliance": {
                    "Data Security": {
                        "Encryption in Transit and at Rest": true,
                        "Securing APIs": true
                    },
                    "Authentication and Authorization": {
                        "OAuth2 and OpenID Connect": 27,
                        "SAML 2.0": 26,
                        "SAML 2.0 vs OAuth 2.0": 28,
                        "Role-Based Access Control (RBAC)": true,
                        "Token-Based Authentication (JWT)": true
                    },
                    "Compliance Standards": {
                        "GDPR": true,
                        "PCI DSS for Payment Systems": true,
                        "HIPAA for Healthcare Applications": true
                    }
                },
                "Emerging Trends in System Design": {
                    "Serverless Architecture": {
                        "What is Serverless?": true,
                        "Use Cases for Serverless": true,
                        "Serverless Frameworks (AWS Lambda, Google Cloud Functions)": true
                    },
                    "AI-Driven System Design": {
                        "AI for Load Prediction": true,
                        "Automated Scaling with AI": true
                    },
                    "Blockchain Systems": {
                        "Introduction to Blockchain Technology": true,
                        "Consensus Mechanisms in Blockchain": true,
                        "Applications of Blockchain in Distributed Systems": true
                    }
                },
                "Case Studies and Practical Projects": {
                    "___urlPath___": "case-studies-and-practical-projects",
                    "Case Study: Designing a Scalable Food Delivery System": true,
                    "Case Study: Building a High-Performance Ad Platform": true,
                    "Practical Project: Designing a Scalable Online Learning Platform": true
                }
            },
            "Database Management": {
                "___urlPath___": "database-management",
                "GATE Level Concepts": {
                    "Syllabus": {
                        "___urlPath___": "gate-syllabus",
                        "___md___": 996
                    },
                    "Book: Connolly-Begg Notes": {
                        "Chapter 3": {
                            "___urlPath___": "chapter-3",
                            "___md___": 1195
                        },
                        "Chapter 4": {
                            "___urlPath___": "chapter-3",
                            "___md___": 1196
                        },
                        "Chapter 5": {
                            "___urlPath___": "chapter-5",
                            "___md___": 1197
                        },
                        "Chapter 6": {
                            "___urlPath___": "chapter-6",
                            "___md___": 1198
                        },
                        "Chapter 7": {
                            "___urlPath___": "chapter-7",
                            "___md___": 1199
                        },
                        "Chapter 12": {
                            "___urlPath___": "chapter-12",
                            "___md___": 1201
                        },
                        "Chapter 13": {
                            "___urlPath___": "chapter-13",
                            "___md___": 1200
                        },
                        "Chapter 14": {
                            "___urlPath___": "chapter-14",
                            "___md___": 1202
                        },
                        "Chapter 22.1-22.3": {
                            "___urlPath___": "chapter-22-1-22-3",
                            "___md___": 1203
                        },
                        "Chapter 22.5": {
                            "___urlPath___": "chapter-22-5",
                            "___md___": 1204
                        },
                        "Chapter 23.1-23.4": {
                            "___urlPath___": "chapter-23-1-23-4",
                            "___md___": 1205
                        },
                    },
                    "Databases": {
                        "___urlPath___": "databases",
                        "ER Model": {
                            "___urlPath___": "er-model",
                            "ER Diagrams and Entity Types": {
                                "___urlPath___": "er-diagrams",
                                "___md___": 1092
                            },
                            "Attributes, Keys, and Constraints": {
                                "___urlPath___": "er-attributes-keys",
                                "___md___": 1097
                            },
                            "Weak Entities and Aggregation": {
                                "___urlPath___": "weak-entities-aggregation",
                                "___md___": 1098
                            },
                            "ER to Relational Mapping": {
                                "___urlPath___": "er-to-relational",
                                "___md___": 1099
                            }
                        },
                        "Relational Model and Algebra": {
                            "___urlPath___": "relational-model",
                            "Relational Schema, Tuples, Domains": {
                                "___urlPath___": "relational-schema",
                                "___md___": true
                            },
                            "Keys and Integrity Constraints": {
                                "___urlPath___": "keys-integrity",
                                "___md___": 2011
                            },
                            "Relational Algebra": {
                                "___urlPath___": "relational-algebra",
                                "___md___": 2012
                            },
                            "Tuple and Domain Relational Calculus": {
                                "___urlPath___": "relational-calculus",
                                "___md___": 2013
                            }
                        },
                        "SQL and Query Processing": {
                            "___urlPath___": "sql",
                            "SQL Syntax and Semantics": {
                                "___urlPath___": "sql-syntax",
                                "___md___": 1100
                            },
                            "Joins, Nested Queries, Set Ops": {
                                "___urlPath___": "joins-nested-queries",
                                "___md___": 2021
                            },
                            "Views, Triggers, Grouping": {
                                "___urlPath___": "views-triggers",
                                "___md___": 2022
                            },
                            "Basic Query Optimization": {
                                "___urlPath___": "query-optimization",
                                "___md___": 2023
                            },
                            "QnA": {
                                "___urlPath___": "qna",
                                "___md___": 1206
                            }
                        },
                        "Normalization and Design": {
                            "___urlPath___": "normalization",
                            "Functional Dependencies": {
                                "___urlPath___": "functional-dependencies",
                                "___md___": 2030
                            },
                            "1NF, 2NF, 3NF, BCNF, 4NF": {
                                "___urlPath___": "normal-forms",
                                "___md___": 2031
                            },
                            "Lossless Join and Dependency Preservation": {
                                "___urlPath___": "lossless-join",
                                "___md___": 2032
                            }
                        },
                        "Indexing and File Organization": {
                            "___urlPath___": "indexing",
                            "File Structures (Heap, Sorted, Hashed)": {
                                "___urlPath___": "file-structures",
                                "___md___": 1002
                            },
                            "Primary and Secondary Indexes": {
                                "___urlPath___": "index-types",
                                "___md___": 1093
                            },
                            "Dense vs Sparse Indexing": {
                                "___urlPath___": "dense-sparse-index",
                                "___md___": 1094
                            },
                            "B and B+ Trees": {
                                "___urlPath___": "b-bplus-trees",
                                "Overview": {
                                    "___urlPath___": "overview",
                                    "___md___": 1095
                                },
                                "B Tree": {
                                    "___urlPath___": "b-tree",
                                    "___md___": 1096
                                },
                                "B+ Tree": true
                            }
                        },
                        "Transactions and Concurrency Control": {
                            "___urlPath___": "transactions",
                            "ACID Properties": {
                                "___urlPath___": "acid-properties",
                                "___md___": 997
                            },
                            "Transaction States and Serializability": {
                                "___urlPath___": "serializability",
                                "___md___": 998
                            },
                            "Schedules and Conflict Serializability": {
                                "___urlPath___": "schedules",
                                "___md___": 999
                            },
                            "2PL, Locking, Timestamp Ordering": {
                                "___urlPath___": "locking-protocols",
                                "___md___": 1000
                            },
                            "Deadlock Detection and Prevention": {
                                "___urlPath___": "deadlocks",
                                "___md___": 1001
                            }
                        },
                        "Recovery and Logging": {
                            "___urlPath___": "recovery",
                            "Log-Based Recovery": {
                                "___urlPath___": "log-based-recovery",
                                "___md___": 2060
                            },
                            "Checkpoints and Shadow Paging": {
                                "___urlPath___": "checkpoints-shadow-paging",
                                "___md___": 2061
                            }
                        }
                    }
                },
                "Introduction to Databases": {
                    "What is a Database?": true,
                    "Types of Databases (Relational, NoSQL, Graph, etc.)": true,
                    "Database Management Systems (DBMS)": true,
                    "SQL vs NoSQL Databases": true
                },
                "Relational Databases (PostgreSQL, MySQL)": {
                    "___urlPath___": "relational-databases",
                    "Introduction to Relational Databases": {
                        "___urlPath___": "introduction-to-relational-databases",
                        "___md___": 176
                    },
                    "Relational Algebra and Database Theory": {
                        "___urlPath___": "relational-algebra-and-database-theory",
                        "Relational Algebra Operations": {
                            "___urlPath___": "relational-algebra-operations",
                            "___md___": 177
                        },
                        "Relational Calculus (Tuple and Domain Calculus)": {
                            "___urlPath___": "relational-calculus",
                            "___md___": 178
                        }
                    },
                    "SQL Basics": {
                        "___urlPath___": "sql-basics",
                        "DDL (Data Definition Language)": {
                            "___urlPath___": "ddl",
                            "Overview": {
                                "___urlPath___": "overview",
                                "___md___": 244
                            },
                            "Creating and Managing Tables": {
                                "___urlPath___": "creating-and-managing-tables",
                                "___md___": 179
                            }
                        },
                        "DML (Data Manipulation Language)": {
                            "___urlPath___": "dml",
                            "Overview": {
                                "___urlPath___": "overview",
                                "___md___": 245
                            },
                            "CRUD Operations (INSERT, SELECT, UPDATE, DELETE)": {
                                "___urlPath___": "crud-operations",
                                "___md___": 180
                            },
                            "SELECT": {
                                "___urlPath___": "select",
                                "___md___": 259
                            },
                            "SELECT - WHERE Clause": {
                                "___urlPath___": "select-where-clause",
                                "___md___": 260
                            },
                            "SQL Wildcards": {
                                "___urlPath___": "sql-wildcards",
                                "___md___": 261
                            }
                        },
                        "DCL (Data Control Language)": {
                            "___urlPath___": "dcl",
                            "___md___": 246
                        },
                        "Other SQL commands": {
                            "___urlPath___": "other-sql-commands",
                            "___md___": 247
                        },
                        "Joins (Inner, Outer, Left, Right)": {
                            "___urlPath___": "joins",
                            "___md___": 181
                        },
                        "Joins vs Union": {
                            "___urlPath___": "joins-vs-union",
                            "___md___": 248
                        },
                        "Aggregate Functions": {
                            "___urlPath___": "aggregate-functions",
                            "SUM, AVG, COUNT": {
                                "___urlPath___": "sum-avg-count",
                                "___md___": 182
                            },
                            "MIN, MAX, DISTINCT, GROUP BY, HAVING, ORDER BY": {
                                "___urlPath___": "min-max-distinct-group-by-having-order-by",
                                "___md___": 262
                            },
                        },

                        "Column alias": {
                            "___urlPath___": "column-alias",
                            "___md___": 257
                        },
                        "Subquery basics": {
                            "___urlPath___": "subquery-basics",
                            "Overview of Subqueries": {
                                "___urlPath___": "overview-of-subqueries",
                                "___md___": 256
                            },
                            "Subquery Operators": {
                                "___urlPath___": "subquery-operators",
                                "ANY": {
                                    "___urlPath___": "any",
                                    "___md___": 249
                                },
                                "SOME": {
                                    "___urlPath___": "some",
                                    "___md___": 250
                                },
                                "ALL": {
                                    "___urlPath___": "all",
                                    "___md___": 251
                                },
                                "EXISTS": {
                                    "___urlPath___": "exists",
                                    "___md___": 252
                                },
                                "NOT EXISTS": {
                                    "___urlPath___": "not-exists",
                                    "___md___": 253
                                },
                                "IN": {
                                    "___urlPath___": "in",
                                    "___md___": 254
                                },
                                "NOT IN": {
                                    "___urlPath___": "not-in",
                                    "___md___": 255
                                }
                            }
                        },
                        "Set Operations (UNION, INTERSECT, EXCEPT)": {
                            "___urlPath___": "set-operations",
                            "___md___": 258
                        }

                    },
                    "Advanced SQL": {
                        "___urlPath___": "advanced-sql",
                        "Subqueries and Nested Queries": {
                            "___urlPath___": "subqueries-and-nested-queries",
                            "___md___": 183
                        },
                        "Views, Triggers, and Stored Procedures": {
                            "___urlPath___": "views-triggers-stored-procedures",
                            "___md___": 184
                        },
                        "Transactions and ACID Properties": {
                            "___urlPath___": "transactions-and-acid-properties",
                            "___md___": 185
                        },
                        "Error Handling in SQL Queries": {
                            "___urlPath___": "error-handling-in-sql-queries",
                            "___md___": 186
                        }
                    },
                    "PostgreSQL": {
                        "___urlPath___": "postgresql",
                        "Core Concepts": {
                            "___urlPath___": "core-concepts",
                            "PostgreSQL Architecture Overview": {
                                "___urlPath___": "architecture-overview",
                                "___md___": 1064
                            },
                            "MVCC (Multi-Version Concurrency Control)": true,
                            "ACID Properties": {
                                "___urlPath___": "acid-properties",
                                "___md___": 1065
                            },
                            "Data Types and Domains": true
                        },
                        "SQL Fundamentals": {
                            "DDL: CREATE, ALTER, DROP": true,
                            "DML: INSERT, UPDATE, DELETE": true,
                            "DQL: SELECT, WHERE, ORDER BY": true,
                            "Constraints: PRIMARY KEY, UNIQUE, CHECK, NOT NULL": true
                        },
                        "Advanced Querying": {
                            "JOINs (INNER, LEFT, RIGHT, FULL)": true,
                            "Subqueries and CTEs": true,
                            "Window Functions": true,
                            "Aggregation with GROUP BY and HAVING": true,
                            "Set Operations (UNION, INTERSECT, EXCEPT)": true
                        },
                        "Indexes and Performance": {
                            "___urlPath___": "indexes-and-performance",
                            "Types of Indexes (BTREE, HASH, GIN, GiST, SP-GiST)": {
                                "___urlPath___": "types-of-indexes",
                                "___md___": 1066
                            },
                            "Creating and Dropping Indexes": true,
                            "Covering Indexes and Partial Indexes": true,
                            "Query Execution Plans (EXPLAIN, EXPLAIN ANALYZE)": true,
                            "VACUUM and ANALYZE": true
                        },
                        "Transactions and Locking": {
                            "BEGIN, COMMIT, ROLLBACK": true,
                            "Isolation Levels (READ COMMITTED, REPEATABLE READ, SERIALIZABLE)": true,
                            "Deadlocks and Lock Monitoring": true,
                            "Advisory Locks": true
                        },
                        "Functions and Stored Procedures": {
                            "PL/pgSQL Basics": true,
                            "Creating Functions with RETURNS": true,
                            "Triggers and Event-Driven Programming": true,
                            "DO blocks and Anonymous Code Execution": true
                        },
                        "Views and Materialized Views": {
                            "Creating and Using Views": true,
                            "Materialized Views and REFRESH": true,
                            "Performance Impacts": true,
                            "Updatable Views": true
                        },
                        "JSON and NoSQL Features": {
                            "JSON, JSONB Data Types": true,
                            "Operators and Functions for JSON": true,
                            "Indexing JSON Fields": true,
                            "PostgreSQL as a Document Store": true
                        },
                        "Extensions and Tooling": {
                            "Popular Extensions (pg_stat_statements, PostGIS, uuid-ossp)": true,
                            "Using `pgAdmin`, `psql`, and GUI Tools": true,
                            "pgBouncer and Connection Pooling": true,
                            "Auto-Explain, Auto-Vacuum": true
                        },
                        "User Management and Security": {
                            "Role Creation and Privileges": true,
                            "GRANT, REVOKE, and SECURITY DEFINER": true,
                            "Row-Level Security (RLS)": true,
                            "pg_hba.conf and Authentication Mechanisms": true
                        },
                        "Backup, Restore, and High Availability": {
                            "Logical and Physical Backups": true,
                            "pg_dump, pg_restore, and psql scripts": true,
                            "Streaming Replication": true,
                            "Point-In-Time Recovery (PITR)": true
                        },
                        "Data Modeling and Schema Design": {
                            "Normalization and Denormalization": true,
                            "Primary Key vs UUID vs Composite Keys": true,
                            "ER Diagrams and PostgreSQL Constraints": true,
                            "Designing for Scale": true
                        },
                        "Partitioning and Sharding": {
                            "Declarative Partitioning": true,
                            "List, Range, and Hash Partitioning": true,
                            "Foreign Data Wrappers (FDW) for Federated Access": true,
                            "Citus Extension for Sharding": true
                        },
                        "ORM and Application Integration": {
                            "Using PostgreSQL with Sequelize, Prisma, TypeORM": true,
                            "Query Builders vs Raw SQL": true,
                            "PostgreSQL with Node.js, Python (psycopg2, SQLAlchemy)": true,
                            "Connection Pooling and Transactions in Code": true
                        },
                        "Analysis & Applications": {
                            "Query Optimization Techniques": true,
                            "Real-World Use Cases (Banking, Analytics, WebApps)": true,
                            "Problem Links & Practice Sets": true
                        },
                        "Query Planning and Optimization": {
                            "PostgreSQL Cost-Based Optimizer": true,
                            "Statistics Collection and Usage": true,
                            "Join Order and Rewriting Heuristics": true,
                            "Index Scan vs Sequential Scan Trade-offs": true,
                            "Parallel Query Execution": true
                        },
                        "Write-Ahead Logging and Internals": {
                            "What is WAL and How it Works": true,
                            "WAL Archiving and Log Shipping": true,
                            "WAL Impact on Crash Recovery and PITR": true
                        },
                        "Monitoring and Observability": {
                            "pg_stat_activity and pg_stat_statements": true,
                            "Tracking Long-Running Queries": true,
                            "Monitoring Locks and Wait Events": true,
                            "Prometheus + PostgreSQL Exporter Integration": true
                        },
                        "Advanced Security": {
                            "SSL/TLS Encryption for Client Connections": true,
                            "Audit Logging with pgaudit Extension": true,
                            "Backup Encryption and Secure Vaults": true
                        },
                        "PostgreSQL in Production Systems": {
                            "Deploying on AWS RDS, GCP Cloud SQL": true,
                            "Running PostgreSQL in Docker and Kubernetes": true,
                            "Load Testing with pgbench": true,
                            "Disaster Recovery Planning": true
                        },
                        "PostgreSQL in System Design": {
                            "Read vs Write Scaling Strategies": true,
                            "Choosing SQL vs NoSQL (PostgreSQL vs MongoDB)": true,
                            "Event Sourcing and CQRS with PostgreSQL": true,
                            "Design Patterns (e.g. Outbox, Saga, Foreign Key Tradeoffs)": true
                        }
                    },
                    "MySQL": {
                        "___urlPath___": "mysql",
                        "Contents": {
                            "___urlPath___": "contents",
                            "___md___": 1194
                        },
                        "Installation & Setup": {
                            "___urlPath___": "installation-setup",
                            "Installing MySQL on Windows, macOS, Linux": { "___urlPath___": "installing-mysql-os", "___md___": true },
                            "Using MySQL with Docker and Docker Compose": { "___urlPath___": "mysql-docker", "___md___": true },
                            "MySQL Workbench, DBeaver, and CLI Tools": { "___urlPath___": "mysql-tools", "___md___": true },
                            "Securing Root User and Access Controls": { "___urlPath___": "securing-root-access", "___md___": true },
                            "Connecting via Clients (Node.js, Python, Java)": { "___urlPath___": "mysql-clients", "___md___": true }

                        },
                        "SQL Basics": {
                            "___urlPath___": "sql-basics",
                            "Database and Table Creation": { "___urlPath___": "database-table-creation", "___md___": true },
                            "Data Types (INT, VARCHAR, DATE, ENUM, etc.)": { "___urlPath___": "data-types", "___md___": true },
                            "INSERT, SELECT, UPDATE, DELETE": { "___urlPath___": "insert-select-update-delete", "___md___": true },
                            "Filtering with WHERE, LIKE, IN, BETWEEN": { "___urlPath___": "filtering", "___md___": true },
                            "ORDER BY, LIMIT, OFFSET": { "___urlPath___": "order-limit-offset", "___md___": true }
                        },
                        "Joins & Set Operations": {
                            "___urlPath___": "joins-set-operations",
                            "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN": { "___urlPath___": "joins", "___md___": true },
                            "CROSS JOIN and SELF JOIN": { "___urlPath___": "cross-self-join", "___md___": true },
                            "UNION, UNION ALL, INTERSECT, EXCEPT": { "___urlPath___": "union-intersect-except", "___md___": true },
                            "Using Joins with Aggregates and Subqueries": { "___urlPath___": "joins-aggregates-subqueries", "___md___": true }
                        },
                        "Functions & Expressions": {
                            "___urlPath___": "functions-expressions",
                            "Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)": { "___urlPath___": "aggregate-functions", "___md___": true },
                            "String Functions (CONCAT, SUBSTRING, REPLACE)": { "___urlPath___": "string-functions", "___md___": true },
                            "Date and Time Functions (NOW, DATEDIFF, DATE_ADD)": { "___urlPath___": "date-time-functions", "___md___": true },
                            "Control Flow (IF, CASE, NULLIF)": { "___urlPath___": "control-flow", "___md___": true },
                            "Mathematical and Conversion Functions": { "___urlPath___": "math-conversion-functions", "___md___": true }
                        },
                        "Subqueries & Nested Queries": {
                            "___urlPath___": "subqueries-nested",
                            "Scalar, Row, and Table Subqueries": { "___urlPath___": "scalar-row-table-subqueries", "___md___": true },
                            "Correlated Subqueries": { "___urlPath___": "correlated-subqueries", "___md___": true },
                            "Subqueries in SELECT, FROM, WHERE, and HAVING": { "___urlPath___": "subqueries-in-clauses", "___md___": true },
                            "EXISTS and NOT EXISTS": { "___urlPath___": "exists-not-exists", "___md___": true }
                        },
                        "Schema Design & Normalization": {
                            "___urlPath___": "schema-design-normalization",
                            "ER Modeling and Conceptual Design": {
                                "___urlPath___": "er-modeling-conceptual-design",
                                "___md___": 1014
                            },
                            "Primary Keys and Foreign Keys": {
                                "___urlPath___": "primary-foreign-keys",
                                "___md___": 1015
                            },
                            "1NF, 2NF, 3NF, BCNF, and Denormalization": {
                                "___urlPath___": "normal-forms",
                                "___md___": 1016
                            },
                            "Indexes, Unique Constraints, and Auto Increment": {
                                "___urlPath___": "indexes-unique-contraints-and-auto-increment",
                                "___md___": 1155
                            },
                            "Choosing Appropriate Data Types": { "___urlPath___": "choosing-data-types", "___md___": true }

                        },
                        "Stored Procedures & Functions": {
                            "___urlPath___": "stored-procedures-functions",
                            "Creating and Calling Stored Procedures": { "___urlPath___": "creating-calling-stored-procedures", "___md___": 1217 },
                            "Creating and Using User-Defined Functions (UDFs)": { "___urlPath___": "udfs", "___md___": 1218 },
                            "IN, OUT, INOUT Parameters": { "___urlPath___": "in-out-inout-parameters", "___md___": 1219 },
                            "Error Handling in Procedures": { "___urlPath___": "error-handling-procedures", "___md___": true },
                            "Procedural Constructs (DECLARE, IF, WHILE, LOOP)": { "___urlPath___": "procedural-constructs", "___md___": true }
                        },
                        "Views & Materialized Views": {
                            "___urlPath___": "views-materialized",
                            "Creating, Updating, and Dropping Views": { "___urlPath___": "creating-updating-views", "___md___": true },
                            "Updatable vs Non-Updatable Views": { "___urlPath___": "updatable-vs-nonupdatable", "___md___": true },
                            "Performance Considerations for Views": { "___urlPath___": "views-performance", "___md___": true }

                        },
                        "Triggers & Events": {
                            "___urlPath___": "triggers-events",
                            "AFTER and BEFORE INSERT/UPDATE/DELETE Triggers": { "___urlPath___": "after-before-triggers", "___md___": true },
                            "Row vs Statement Triggers": { "___urlPath___": "row-vs-statement-triggers", "___md___": true },
                            "Scheduled Events and Cron Jobs in MySQL": { "___urlPath___": "scheduled-events-cron", "___md___": true },
                            "Auditing and Logging via Triggers": { "___urlPath___": "auditing-logging-triggers", "___md___": true }

                        },
                        "Transactions & Concurrency": {
                            "___urlPath___": "transactions-concurrency",
                            "ACID Properties and Isolation Levels": { "___urlPath___": "acid-isolation-levels", "___md___": true },
                            "START TRANSACTION, COMMIT, ROLLBACK": { "___urlPath___": "start-commit-rollback", "___md___": true },
                            "SAVEPOINT and ROLLBACK TO": { "___urlPath___": "savepoint-rollback-to", "___md___": true },
                            "Locking Mechanisms (Row, Table, Advisory)": { "___urlPath___": "locking-mechanisms", "___md___": true },
                            "Deadlocks and Race Conditions": { "___urlPath___": "deadlocks-race-conditions", "___md___": true }
                        },
                        "Indexes & Query Optimization": {
                            "Single and Composite Indexes": {
                                "___urlPath___": "single-and-composite-indexes",
                                "___md___": 1193
                            },
                            "Covering Indexes and Index Hints": { "___urlPath___": "covering-indexes", "___md___": true },
                            "EXPLAIN and EXPLAIN ANALYZE": { "___urlPath___": "explain-analyze", "___md___": true },
                            "Slow Query Log and Performance Schema": { "___urlPath___": "slow-query-performance-schema", "___md___": true },
                            "Query Refactoring and Anti-Patterns": { "___urlPath___": "query-refactoring", "___md___": true }

                        },
                        "Security & Access Control": {
                            "___urlPath___": "security-access-control",
                            "User Management (CREATE USER, GRANT, REVOKE)": { "___urlPath___": "user-management", "___md___": true },
                            "Roles and Privilege Inheritance": { "___urlPath___": "roles-privileges", "___md___": true },
                            "Encryption (at Rest and in Transit)": { "___urlPath___": "encryption", "___md___": true },
                            "SQL Injection Prevention and Best Practices": { "___urlPath___": "sql-injection-prevention", "___md___": true },
                            "Audit Plugins and Compliance Tools": { "___urlPath___": "audit-plugins", "___md___": true }
                        },
                        "Backup & Recovery": {
                            "___urlPath___": "backup-recovery",
                            "Logical Backups with `mysqldump` and `mysqlpump`": { "___urlPath___": "logical-backups", "___md___": true },
                            "Physical Backups with `mysqlhotcopy` and XtraBackup": { "___urlPath___": "physical-backups", "___md___": true },
                            "Restoring Partial and Full Backups": { "___urlPath___": "restore-backups", "___md___": true },
                            "Point-in-Time Recovery (PITR)": { "___urlPath___": "point-in-time-recovery", "___md___": true },
                            "Binary Logs for Recovery": { "___urlPath___": "binary-logs-recovery", "___md___": true }
                        },
                        "Replication & High Availability": {
                            "___urlPath___": "replication-high-availability",
                            "Master-Slave and Master-Master Replication": { "___urlPath___": "master-slave-replication", "___md___": true },
                            "Asynchronous vs Semi-Synchronous Replication": { "___urlPath___": "async-vs-semisync-replication", "___md___": true },
                            "GTID-based Replication and Failover": { "___urlPath___": "gtid-replication", "___md___": true },
                            "Replication Monitoring Tools (MySQL Shell, MHA)": { "___urlPath___": "replication-monitoring-tools", "___md___": true },
                            "Handling Data Divergence and Resynchronization": { "___urlPath___": "replication-divergence", "___md___": true }
                        },
                        "Partitioning & Sharding": {
                            "___urlPath___": "partitioning-sharding",
                            "Horizontal vs Vertical Partitioning": { "___urlPath___": "horizontal-vs-vertical-partitioning", "___md___": true },
                            "Range, List, Hash, and Key Partitioning": { "___urlPath___": "partitioning-methods", "___md___": true },
                            "Partition Pruning and Query Routing": { "___urlPath___": "partition-pruning-routing", "___md___": true },
                            "Manual and Middleware-Based Sharding Strategies": { "___urlPath___": "sharding-strategies", "___md___": true }
                        },
                        "MySQL in Production": {
                            "___urlPath___": "mysql-in-production",
                            "Performance Tuning and Query Caching": { "___urlPath___": "performance-tuning", "___md___": true },
                            "Connection Pooling (ProxySQL, Pooling Libraries)": { "___urlPath___": "connection-pooling", "___md___": true },
                            "Monitoring with Percona, Prometheus, Grafana": { "___urlPath___": "monitoring-tools", "___md___": true },
                            "Schema Migration Tools (Liquibase, Flyway)": { "___urlPath___": "schema-migration-tools", "___md___": true },
                            "Read-Write Splitting in Applications": { "___urlPath___": "read-write-splitting", "___md___": true }
                        },
                        "MySQL with ORMs & APIs": {
                            "___urlPath___": "mysql-orms-apis",
                            "Using MySQL with Sequelize (Node.js)": { "___urlPath___": "sequelize-mysql", "___md___": true },
                            "MySQL with Hibernate (Java)": { "___urlPath___": "hibernate-mysql", "___md___": true },
                            "MySQL with SQLAlchemy (Python)": { "___urlPath___": "sqlalchemy-mysql", "___md___": true },
                            "Optimizing Queries in ORM-Heavy Workloads": { "___urlPath___": "orm-query-optimization", "___md___": true }
                        },
                        "Cloud & Managed MySQL": {
                            "___urlPath___": "cloud-managed-mysql",
                            "AWS RDS for MySQL": { "___urlPath___": "aws-rds-mysql", "___md___": true },
                            "Google Cloud SQL, Azure Database for MySQL": { "___urlPath___": "gcp-azure-mysql", "___md___": true },
                            "Automated Backups and Monitoring": { "___urlPath___": "automated-backups-monitoring", "___md___": true },
                            "Failover and Multi-AZ Configuration": { "___urlPath___": "failover-multi-az", "___md___": true }
                        },
                        "Advanced": {
                            "___urlPath___": "advanced",
                            "Advanced Query Optimization": {
                                "___urlPath___": "advanced-query-optimization",
                                "Execution Plan Internals": { "___urlPath___": "execution-plan-internals", "___md___": true },
                                "Cardinality Estimation Pitfalls": { "___urlPath___": "cardinality-estimation", "___md___": true },
                                "Adaptive Query Optimization": { "___urlPath___": "adaptive-query-optimization", "___md___": true },
                                "Join Buffer, Sort Buffer, and Temp Table Memory Tuning": { "___urlPath___": "buffer-memory-tuning", "___md___": true }
                            },
                            "Advanced Indexing Techniques": {
                                "___urlPath___": "advanced-indexing-techniques",
                                "Partial and Functional Indexes": { "___urlPath___": "partial-functional-indexes", "___md___": true },
                                "Prefix Indexes for Large Strings": { "___urlPath___": "prefix-indexes", "___md___": true },
                                "Invisible Indexes for Safe Testing": { "___urlPath___": "invisible-indexes", "___md___": true },
                                "Full-Text Search vs External Search Engines": { "___urlPath___": "fulltext-vs-external-search", "___md___": true },
                                "SPATIAL Indexes for GIS Data": { "___urlPath___": "spatial-indexes", "___md___": true }
                            },
                            "Advanced Replication & Scaling": {
                                "___urlPath___": "advanced-replication-scaling",
                                "Multi-Source Replication": { "___urlPath___": "multi-source-replication", "___md___": true },
                                "Replication Lag Detection and Management": { "___urlPath___": "replication-lag", "___md___": true },
                                "Group Replication and InnoDB Cluster": { "___urlPath___": "group-replication", "___md___": true },
                                "Read Scaling Patterns with ProxySQL and Vitess": { "___urlPath___": "read-scaling", "___md___": true },
                                "Read-After-Write Consistency Handling": { "___urlPath___": "read-after-write", "___md___": true }
                            },
                            "Sharding at Scale": {
                                "___urlPath___": "sharding-at-scale",
                                "Shard Key Design and Hotspot Avoidance": { "___urlPath___": "shard-key-design", "___md___": true },
                                "Online Resharding with Zero Downtime": { "___urlPath___": "online-resharding", "___md___": true },
                                "Global Secondary Indexes across Shards": { "___urlPath___": "global-secondary-indexes", "___md___": true }
                            },
                            "High-Concurrency Handling": {
                                "___urlPath___": "high-concurrency-handling",
                                "Gap Locks and Next-Key Locks in InnoDB": { "___urlPath___": "gap-locks-nextkey", "___md___": true },
                                "Phantom Reads in Repeatable Read Isolation": { "___urlPath___": "phantom-reads", "___md___": true },
                                "Lock Monitoring via performance_schema": { "___urlPath___": "lock-monitoring", "___md___": true },
                                "Deadlock Detection and Resolution Internals": { "___urlPath___": "deadlock-detection", "___md___": true }
                            },
                            "High Availability & Disaster Recovery": {
                                "___urlPath___": "high-availability-dr",
                                "Automated Failover with Orchestrator or MHA": { "___urlPath___": "automated-failover", "___md___": true },
                                "Cross-Region Replication Strategies": { "___urlPath___": "cross-region-replication", "___md___": true },
                                "Disaster Simulation and Failover Drills": { "___urlPath___": "disaster-simulation", "___md___": true }
                            },
                            "Large Data Volume Management": {
                                "___urlPath___": "large-data-volume-management",
                                "Partition Management for Billions of Rows": { "___urlPath___": "partition-management", "___md___": true },
                                "Archiving and Cold Storage Strategies": { "___urlPath___": "archiving-cold-storage", "___md___": true },
                                "Table and Column Compression Trade-Offs": { "___urlPath___": "compression-tradeoffs", "___md___": true }
                            },
                            "MySQL in Distributed Systems": {
                                "___urlPath___": "mysql-distributed-systems",
                                "Schema Versioning in Continuous Deployment": { "___urlPath___": "schema-versioning", "___md___": true },
                                "Eventual Consistency Handling": { "___urlPath___": "eventual-consistency", "___md___": true },
                                "Outbox Pattern for Reliable Event Publishing": { "___urlPath___": "outbox-pattern", "___md___": true }
                            },
                            "Advanced Troubleshooting": {
                                "___urlPath___": "advanced-troubleshooting",
                                "Query Performance Regression Analysis": { "___urlPath___": "query-regression-analysis", "___md___": true },
                                "InnoDB Buffer Pool Tuning": { "___urlPath___": "innodb-buffer-pool-tuning", "___md___": true },
                                "Memory Leak Detection in MySQL": { "___urlPath___": "memory-leak-detection", "___md___": true },
                                "Slow Query Analysis with pt-query-digest": { "___urlPath___": "pt-query-digest", "___md___": true }
                            },
                            "Enterprise-Scale Design & Integration": {
                                "___urlPath___": "enterprise-scale-design-integration",
                                "Multi-Tenant Schema Design for SaaS": { "___urlPath___": "multi-tenant-schema", "___md___": true },
                                "OLTP and OLAP Hybrid (HTAP) Design": { "___urlPath___": "oltp-olap-htap", "___md___": true },
                                "Change Data Capture with Kafka and Debezium": { "___urlPath___": "cdc-kafka-debezium", "___md___": true }
                            }
                        }
                    }

                },
                "NoSQL Databases (MongoDB, DynamoDB, Cassandra, Neo4j, Redis, Elasticsearch, HBase)": {
                    "___urlPath___": "nosql-databases",
                    "Introduction to NoSQL Databases": true,
                    "Key-Value Stores (Redis, DynamoDB)": {
                        "___urlPath___": "key-value-stores",
                        "Redis": {
                            "___urlPath___": "redis",
                            "Introduction to Redis": {
                                "___urlPath___": "introduction-to-redis",
                                "What is Redis?": {
                                    "___urlPath___": "what-is-redis",
                                    "___md___": 632
                                },
                                "Why use Redis (Use Cases)": {
                                    "___urlPath___": "why-use-redis",
                                    "___md___": 633
                                },
                                "Installation & Setup": {
                                    "___urlPath___": "installation-and-setup",
                                    "___md___": 634
                                },
                                "Data Types Overview": {
                                    "___urlPath___": "data-types-overview",
                                    "___md___": 635
                                }
                            },
                            "Core Redis Data Structures": {
                                "Strings": {
                                    "___urlPath___": "strings",
                                    "Basic Commands": {
                                        "___urlPath___": "basic-commands",
                                        "___md___": 636
                                    },
                                    "Use Cases": {
                                        "___urlPath___": "use-cases",
                                        "___md___": 637
                                    }
                                },
                                "Lists": {
                                    "___urlPath___": "lists",
                                    "Basic Commands (LPUSH, RPUSH, LPOP, etc.)": {
                                        "___urlPath___": "basic-commands",
                                        "___md___": 638
                                    },
                                    "Use Cases": {
                                        "___urlPath___": "use-cases",
                                        "___md___": 639
                                    }
                                },
                                "Sets": {
                                    "___urlPath___": "sets",
                                    "Basic Commands (SADD, SREM, SMEMBERS, etc.)": {
                                        "___urlPath___": "basic_commands",
                                        "___md___": 640
                                    },
                                    "Set Operations (Union, Intersect)": {
                                        "___urlPath___": "set-operations",
                                        "___md___": 641
                                    }
                                },
                                "Sorted Sets (ZSET)": {
                                    "___urlPath___": "sorted-sets",
                                    "Basic Commands (ZADD, ZRANGE, etc.)": {
                                        "___urlPath___": "basic-commands",
                                        "___md___": 642
                                    },
                                    "Leaderboard Use Case": {
                                        "___urlPath___": "leaderboard-use-case",
                                        "___md___": 643
                                    }
                                },
                                "Hashes": {
                                    "___urlPath___": "hashes",
                                    "Basic Commands (HSET, HGET, etc.)": true,
                                    "Use Cases (Object Mapping)": true
                                },
                                "Bitmaps and HyperLogLogs": {
                                    "___urlPath___": "bitmaps-hyperloglog",
                                    "Bitmaps Overview and Use Cases": true,
                                    "HyperLogLog for Approx. Counting": true
                                }
                            },
                            "Persistence & Durability": {
                                "___urlPath___": "persistence-durability",
                                "RDB Snapshots": true,
                                "AOF (Append-Only File)": true,
                                "Best Practices for Durability": true
                            },
                            "Transactions and Scripting": {
                                "___urlPath___": "transactions-scripting",
                                "MULTI/EXEC/DISCARD": true,
                                "Watch and Optimistic Locking": true,
                                "Lua Scripting": true
                            },
                            "Redis as a Cache": {
                                "___urlPath___": "redis-cache",
                                "Eviction Policies (LRU, LFU, etc.)": true,
                                "Expiration and TTL": true,
                                "Cache-Aside vs Write-Through": true
                            },
                            "Redis Pub/Sub & Streams": {
                                "___urlPath___": "pubsub-streams",
                                "Pub/Sub Messaging Model": true,
                                "Redis Streams (XADD, XREAD, Consumer Groups)": true,
                                "Use Cases: Real-Time Feed, Event Queues": true
                            },
                            "Advanced Topics": {
                                "___urlPath___": "advanced",
                                "Redis Cluster (Sharding and Partitioning)": true,
                                "Replication & High Availability (Redis Sentinel)": true,
                                "Backup & Restore": true,
                                "Security (AUTH, ACLs, Encryption)": true,
                                "Rate Limiting using Redis": true,
                                "Distributed Locks (SETNX, Redlock Algorithm)": {
                                    "___urlPath___": "distributed-locks",
                                    "___md___": 644
                                }
                            },
                            "Redis in Practice": {
                                "___urlPath___": "redis-practice",
                                "Integrating Redis with Node.js/Java/Python": true,
                                "Monitoring and Debugging": true,
                                "Performance Tuning": true
                            },
                            "Projects 💻": {
                                "___urlPath___": "projects",
                                "Leaderboard using Sorted Set": true,
                                "Rate Limiter using Redis + Node.js": true,
                                "Job Queue with Redis Lists": true,
                                "Real-time Chat with Pub/Sub": true
                            }
                        },
                        "DynamoDB Features": {
                            "Creating Tables and Partition Keys": true,
                            "DynamoDB Streams": true,
                            "Global and Local Secondary Indexes": true,
                            "Data Modeling in DynamoDB": true
                        },
                    },
                    "Document Stores (MongoDB)": {
                        "Understanding JSON Documents": true,
                        "CRUD Operations in MongoDB": true,
                        "Indexes in MongoDB": true,
                        "Aggregation Framework": true
                    },
                    "Column-Family Stores (Apache Cassandra, HBase, Google Bigtable)": {
                        "___urlPath___": "column-family-stores-cassandra",
                        "Introduction to Cassandra": {
                            "___urlPath___": "introduction-to-cassandra",
                            "___md___": 310
                        },
                        "Cassandra Data Model": {
                            "___urlPath___": "cassandra-data-model",
                            "Tables, Partitions, and Clustering": {
                                "___urlPath___": "tables-partitions-clustering",
                                "___md___": 311
                            },
                            "Primary Key Design in Cassandra": {
                                "___urlPath___": "primary-key-design",
                                "___md___": 312
                            },
                            "Denormalization in Cassandra": {
                                "___urlPath___": "denormalization-cassandra",
                                "___md___": 313
                            }
                        },
                        "Cassandra Query Language (CQL)": {
                            "___urlPath___": "cql-basics",
                            "DDL - Creating Keyspaces and Tables": {
                                "___urlPath___": "cql-ddl-keyspaces-tables",
                                "___md___": 314
                            },
                            "DML - CRUD Operations": {
                                "___urlPath___": "cql-dml-crud",
                                "___md___": 315
                            },
                            "CQL Filtering and Query Optimization": {
                                "___urlPath___": "cql-query-optimization",
                                "___md___": 316
                            }
                        },
                        "Replication and Consistency in Cassandra": {
                            "___urlPath___": "replication-consistency-cassandra",
                            "Replication Factor and Strategy": {
                                "___urlPath___": "replication-strategy",
                                "___md___": 317
                            },
                            "Consistency Levels in Cassandra": {
                                "___urlPath___": "consistency-levels",
                                "___md___": 318
                            },
                            "Tunable Consistency Trade-offs": {
                                "___urlPath___": "tunable-consistency",
                                "___md___": 319
                            }
                        },
                        "Performance and Scaling in Cassandra": {
                            "___urlPath___": "performance-scaling-cassandra",
                            "Partitioning and Load Balancing": {
                                "___urlPath___": "partitioning-load-balancing",
                                "___md___": 320
                            },
                            "Indexes in Cassandra": {
                                "___urlPath___": "indexes-in-cassandra",
                                "___md___": 321
                            },
                            "Read vs Write Performance Considerations": {
                                "___urlPath___": "read-write-performance",
                                "___md___": 322
                            }
                        },
                        "Cassandra Security and Backup": {
                            "___urlPath___": "cassandra-security-backup",
                            "Authentication and Authorization": {
                                "___urlPath___": "authentication-authorization",
                                "___md___": 323
                            },
                            "Backup and Restore Strategies": {
                                "___urlPath___": "backup-restore-strategies",
                                "___md___": 324
                            },
                            "Disaster Recovery and PITR": {
                                "___urlPath___": "disaster-recovery",
                                "___md___": 325
                            }
                        },
                        "HBase Overview": {
                            "___urlPath___": "hbase-overview",
                            "___md___": 369
                        },
                        "Google Bigtable Overview": {
                            "___urlPath___": "bigtable-overview",
                            "___md___": 370
                        }
                    },

                    "Graph Databases (Neo4j, Amazon Neptune)": {
                        "___urlPath___": "graph-databases",
                        "Introduction to Graph Databases": {
                            "___urlPath___": "introduction-graph-databases",
                            "___md___": 371
                        },
                        "Neo4j Fundamentals": {
                            "___urlPath___": "neo4j-fundamentals",
                            "___md___": 372
                        },
                        "Cypher Query Language": {
                            "___urlPath___": "cypher-query-language",
                            "___md___": 373
                        },
                        "Amazon Neptune Overview": {
                            "___urlPath___": "amazon-neptune",
                            "___md___": 374
                        },
                        "Graph Use Cases (Social Networks, Fraud Detection)": {
                            "___urlPath___": "graph-use-cases",
                            "___md___": 375
                        }
                    },

                    "Search Databases (Elasticsearch, OpenSearch)": {
                        "___urlPath___": "search-databases",
                        "Introduction to Search Databases": {
                            "___urlPath___": "introduction-search-databases",
                            "___md___": 376
                        },
                        "Elasticsearch Overview": {
                            "___urlPath___": "elasticsearch-overview",
                            "___md___": 377
                        },
                        "OpenSearch Overview": {
                            "___urlPath___": "opensearch-overview",
                            "___md___": 378
                        },
                        "Indexing in Search Databases": {
                            "___urlPath___": "indexing-search-databases",
                            "___md___": 379
                        },
                        "Full-Text Search & Queries": {
                            "___urlPath___": "full-text-search",
                            "___md___": 380
                        }
                    },

                    "Time-Series Databases (InfluxDB, Amazon Timestream)": {
                        "___urlPath___": "time-series-databases",
                        "Introduction to Time-Series Databases": {
                            "___urlPath___": "introduction-time-series",
                            "___md___": 381
                        },
                        "InfluxDB Overview": {
                            "___urlPath___": "influxdb-overview",
                            "___md___": 382
                        },
                        "Amazon Timestream Overview": {
                            "___urlPath___": "timestream-overview",
                            "___md___": 383
                        },
                        "Querying and Indexing in Time-Series Databases": {
                            "___urlPath___": "querying-time-series",
                            "___md___": 384
                        }
                    },

                    "Multi-Model Databases (ArangoDB, Couchbase)": {
                        "___urlPath___": "multi-model-databases",
                        "Introduction to Multi-Model Databases": {
                            "___urlPath___": "introduction-multi-model",
                            "___md___": 385
                        },
                        "ArangoDB Overview": {
                            "___urlPath___": "arangodb-overview",
                            "___md___": 386
                        },
                        "Couchbase Overview": {
                            "___urlPath___": "couchbase-overview",
                            "___md___": 387
                        },
                        "Use Cases of Multi-Model Databases": {
                            "___urlPath___": "multi-model-use-cases",
                            "___md___": 388
                        }
                    }
                    ,
                    "Comparing NoSQL to SQL": {
                        "Use Cases for NoSQL": true,
                        "Scaling in NoSQL Databases": true
                    }
                },
                "Database Design and Normalization": {
                    "___urlPath___": "database-design-and-normalization",
                    "Introduction to Database Design": {
                        "___urlPath___": "introduction-to-database-design",
                        "___md___": 161
                    },
                    "Entity-Relationship (ER) Modeling": {
                        "___urlPath___": "entity-relationship-modeling",
                        "___md___": 160
                    },
                    "Normalization": {
                        "___urlPath___": "normalization",
                        "First Normal Form (1NF)": {
                            "___urlPath___": "first-normal-form",
                            "___md___": 154
                        },
                        "Second Normal Form (2NF)": {
                            "___urlPath___": "second-normal-form",
                            "___md___": 155
                        },
                        "Third Normal Form (3NF)": {
                            "___urlPath___": "third-normal-form",
                            "___md___": 156
                        },
                        "Boyce-Codd Normal Form (BCNF)": {
                            "___urlPath___": "boyce-codd-normal-form",
                            "___md___": 157
                        }
                    },
                    "Denormalization": {
                        "___urlPath___": "denormalization",
                        "___md___": 158
                    },
                    "Database Schema Design Best Practices": {
                        "___urlPath___": "database-schema-design-best-practices",
                        "___md___": 159
                    }
                },
                "Indexing and Query Optimization": {
                    "Introduction to Indexing": {
                        "Clustered vs Non-Clustered Indexes": true,
                        "Hash Indexes and B-Tree Indexes": true,
                        "Index Maintenance and Costs": true
                    },
                    "Query Optimization": {
                        "Using Explain Plans": true,
                        "Query Caching": true,
                        "Optimizing Joins and Subqueries": true,
                        "Partitioning and Sharding": true
                    },
                    "Performance Tuning Tools": {
                        "PostgreSQL Query Analyzer": true,
                        "MySQL Query Profiler": true,
                        "MongoDB Profiler": true
                    }
                },
                "Transactions and Concurrency Control": {
                    "___urlPath___": "transactions-and-concurrency-control",
                    "Introduction": {
                        "___urlPath___": "introduction",
                        "___md___": 228
                    },
                    "Transactions": {
                        "___urlPath___": "transactions",
                        "Properties of Transactions (ACID)": {
                            "___urlPath___": "properties-of-transactions",
                            "___md___": 162
                        },
                        "Transaction States": {
                            "___urlPath___": "transaction-states",
                            "___md___": 163
                        }
                    },
                    "Concurrency Control": {
                        "___urlPath___": "concurrency-control",
                        "Concurrency problems": {
                            "___urlPath___": "concurrency-problems",
                            "Introduction": {
                                "___urlPath___": "introduction",
                                "___md___": 192
                            },
                            "Write-Read Conflict": {
                                "___urlPath___": "write-read-conflict",
                                "___md___": 193
                            },
                            "Read-Write Conflict": {
                                "___urlPath___": "read-write-conflict",
                                "___md___": 194
                            },
                            "Other Conflicts (Phantom Reads, etc.)": {
                                "___urlPath___": "other-conflicts",
                                "___md___": 231
                            }
                        },
                        "Recoverability: Recoverable and Non-recoverable schedules": {
                            "___urlPath___": "recoverable-and-non-recoverable-schedules",
                            "___md___": 195
                        },
                        "Scheduling and Serializability": {
                            "___urlPath___": "scheduling-and-serializability",
                            "Overview": {
                                "___urlPath___": "overview",
                                "___md___": 191
                            },
                            "Serializability and Precedence Graphs": {
                                "___urlPath___": "serializability-and-precedence-graphs",
                                "___md___": 229
                            },
                            "View Serializability": {
                                "___urlPath___": "view-serializability",
                                "___md___": 230
                            }
                        },
                        "Lock-Based Protocols": {
                            "___urlPath___": "lock-based-protocols",
                            "Overview": {
                                "___urlPath___": "overview",
                                "___md___": 164
                            },
                            "Two-Phase Locking (2PL)": {
                                "___urlPath___": "two-phase-locking",
                                "___md___": 0
                            }
                        },
                        "Deadlock Handling": {
                            "___urlPath___": "deadlock-handling",
                            "Overview": {
                                "___urlPath___": "overview",
                                "___md___": 165
                            },
                            "Prevention and Avoidance": {
                                "___urlPath___": "prevention-and-avoidance",
                                "___md___": 165
                            },
                            "Detection and Recovery": {
                                "___urlPath___": "detection-and-recovery",
                                "___md___": 212
                            }
                        },
                        "Timestamp-Based Protocols": {
                            "___urlPath___": "timestamp-based-protocols",
                            "Optimistic Concurrency Control": {
                                "___urlPath___": "optimistic-concurrency-control",
                                "___md___": 166
                            }
                        },
                        "Multiversion Concurrency Control (MVCC)": {
                            "___urlPath___": "multiversion-concurrency-control",
                            "___md___": 167
                        }
                    }
                },
                "File Organization": {
                    "___urlPath___": "file-organization",
                    "Storage Mechanisms in Databases": {
                        "___urlPath___": "storage-mechanisms-in-databases",
                        "___md___": 168
                    },
                    "File Organization Techniques": {
                        "___urlPath___": "file-organization-techniques",
                        "Heap File Organization": {
                            "___urlPath___": "heap-file-organization",
                            "___md___": 169
                        },
                        "Sequential File Organization": {
                            "___urlPath___": "sequential-file-organization",
                            "___md___": 170
                        },
                        "Hashing Techniques": {
                            "___urlPath___": "hashing-techniques",
                            "___md___": 171
                        }
                    },
                    "Indexing": {
                        "___urlPath___": "indexing",
                        "B-Trees": {
                            "___urlPath___": "b-trees",
                            "___md___": 172
                        },
                        "B+ Trees": {
                            "___urlPath___": "b-plus-trees",
                            "___md___": 173
                        },
                        "Secondary Indexes": {
                            "___urlPath___": "secondary-indexes",
                            "___md___": 174
                        },
                        "Dynamic Indexing": {
                            "___urlPath___": "dynamic-indexing",
                            "___md___": 175
                        }
                    }
                },
                "Backup and Recovery": {
                    "Backup Strategies": true,
                    "Point-in-Time Recovery (PITR)": true,
                    "Disaster Recovery Planning": true,
                    "Backup Tools (pg_dump, mysqldump, MongoDump)": true
                },
                "Distributed Databases and Scalability": {
                    "___urlPath___": "distributed-databases-and-scalability",
                    "Introduction to Distributed Databases": {
                        "___urlPath___": "introduction-to-distributed-databases",
                        "___md___": 263
                    },
                    "Replication (Master-Slave, Master-Master)": {
                        "___urlPath___": "replication",
                        "___md___": 264
                    },
                    "Sharding and Partitioning Strategies": true,
                    "Eventual Consistency vs Strong Consistency": true,
                    "CAP Theorem": true
                },
                "Hands-On Projects": {
                    "Designing a Library Management System": true,
                    "Building an E-Commerce Database Schema": true,
                    "Implementing Real-Time Analytics with MongoDB": true,
                    "Building a Scalable DynamoDB Application": true
                }
            },
            "Discrete Mathematics": {
                "___urlPath___": "discrete-mathematics",
                "Basics": {
                    "Chapter 1: Basics Concepts of Set Theory": {
                        "___urlPath___": "basics-concepts-of-set-theory",
                        "___md___": 889
                    },
                    "Chapter 2: Introduction and Applications of Relational Theory": {
                        "___urlPath___": "introduction-and-application-of-relational-theory",
                        "___md___": 890
                    },
                    "Chapter 3: Basic Concept and Application of Theory of Functions": {
                        "___urlPath___": "basic-concepts-and-application-of-theory-of-functions",
                        "___md___": 891
                    },
                    "Chapter 4: Applications of Recurrence Relational Principles": {
                        "___urlPath___": "applications-of-reccurrence-relational-principles",
                        "___md___": 892
                    },
                    "Chapter 5: Theory of Graph and Its Applications": {
                        "___urlPath___": "theory-of-graph-and-its-applications",
                        "___md___": 893
                    },
                    "Chapter 6: Application of Matrix Theory in Graphs": {
                        "___urlPath___": "application-of-matrix-theory-in-graph",
                        "___md___": 894
                    },
                    "Chapter 7: Concepts of Data Structure": {
                        "___urlPath___": "concepts-of-data-structure",
                        "___md___": 895
                    },
                    "Chapter 8: Introduction to Algebra": {
                        "___urlPath___": "introduction-to-algebra",
                        "___md___": 888
                    },
                    "Chapter 9: Application of Boolean Algebra in Circuit Design": {
                        "___urlPath___": "application-of-boolean-algebra-in-circuit-design",
                        "___md___": 887
                    }
                },
                "Logic": {
                    "___urlPath___": "logic",
                    "Propositional Logic": {
                        "___urlPath___": "propositional-logic",
                        "Propositions and Logical Connectives": {
                            "___urlPath___": "propositional-and-logical-connectives",
                            "___md___": 437
                        },
                        "Truth Tables": {
                            "___urlPath___": "truth-tables",
                            "___md___": 438
                        },
                        "Tautologies and Contradictions": {
                            "___urlPath___": "tautologies-and-contradictions",
                            "___md___": 439
                        },
                        "Logical Equivalence and Implication": {
                            "___urlPath___": "logical-equivalence-and-implication",
                            "___md___": 440
                        },
                        "Normal Forms (CNF, DNF)": {
                            "___urlPath___": "normal-forms-cnf-dnf",
                            "___md___": 441
                        },
                        "Inference Rules and Proof Techniques": {
                            "___urlPath___": "inference-rules-and-proof-techniques",
                            "___md___": 442
                        }
                    },
                    "First Order Logic (Predicate Logic)": {
                        "___urlPath___": "first-order-logic",
                        "Predicates and Quantifiers": {
                            "___urlPath___": "predicate-and-quantifiers",
                            "___md___": 449
                        },
                        "Free and Bound Variables": {
                            "___urlPath___": "free-and-bound-variables",
                            "___md___": 450
                        },
                        "Nested Quantifiers": {
                            "___urlPath___": "nested-quantifiers",
                            "___md___": 452
                        },
                        "Logical Inference in FOL": {
                            "___urlPath___": "logical-inference-in-fol",
                            "___md___": 453
                        }
                    }
                },
                "Set Theory": {
                    "Basic Concepts": {
                        "Set Notation and Operations": true,
                        "Venn Diagrams": true,
                        "Subsets and Power Sets": true
                    },
                    "Set Identities and Laws": {
                        "Union, Intersection, Difference": true,
                        "Complement, De Morgan’s Laws": true,
                        "Cartesian Product": true
                    }
                },
                "Relations and Functions": {
                    "Relations": {
                        "Definition and Representation": true,
                        "Properties of Relations (Reflexive, Symmetric, etc.)": true,
                        "Equivalence Relations": true,
                        "Partial Orders and Posets": true,
                        "Hasse Diagrams": true
                    },
                    "Functions": {
                        "Types of Functions": {
                            "Injective, Surjective, Bijective": true
                        },
                        "Composition and Inverse of Functions": true,
                        "Image and Preimage": true
                    }
                },
                "Algebraic Structures": {
                    "Binary Operations": true,
                    "Monoids": {
                        "Definition and Properties": true,
                        "Examples of Monoids": true
                    },
                    "Groups": {
                        "Definition and Axioms": true,
                        "Abelian Groups": true,
                        "Cyclic Groups and Subgroups": true,
                        "Group Homomorphisms and Isomorphisms": true
                    }
                },
                "Graph Theory": {
                    "Basic Concepts": {
                        "Graphs, Vertices, and Edges": true,
                        "Types of Graphs (Simple, Multigraph, Pseudograph, etc.)": true,
                        "Degree of Vertices": true
                    },
                    "Graph Properties": {
                        "Path, Walk, Cycle, Circuit": true,
                        "Connected and Disconnected Graphs": true,
                        "Components and Connectivity": true
                    },
                    "Special Graphs": {
                        "Complete Graph, Bipartite Graph": true,
                        "Trees and Forests": true
                    },
                    "Graph Algorithms": {
                        "DFS and BFS": true,
                        "Minimum Spanning Tree (Kruskal, Prim)": true,
                        "Shortest Path (Dijkstra, Floyd-Warshall)": true
                    },
                    "Advanced Concepts": {
                        "Graph Coloring": true,
                        "Chromatic Number": true,
                        "Matching and Covering": true,
                        "Euler and Hamiltonian Graphs": true
                    }
                },
                "Combinatorics": {
                    "Counting Principles": {
                        "Addition and Multiplication Rules": true,
                        "Inclusion-Exclusion Principle": true
                    },
                    "Permutations and Combinations": {
                        "Without and With Repetition": true,
                        "Circular Permutations": true
                    },
                    "Pigeonhole Principle": true,
                    "Recurrence Relations": {
                        "Formulating Recurrence Relations": true,
                        "Solving Linear Recurrences": true,
                        "Homogeneous and Non-Homogeneous Cases": true
                    },
                    "Generating Functions": {
                        "Ordinary Generating Functions (OGFs)": true,
                        "Solving Recurrence Relations with OGFs": true,
                        "Applications in Counting": true
                    }
                },
                "Case Studies and Practice": {
                    "Logic Puzzle Solving": true,
                    "Modeling Relations with Graphs": true,
                    "Group Structure Applications": true,
                    "Graph Coloring in Real Life": true,
                    "Combinatorics in Algorithm Analysis": true
                }

            }
            ,
            "Digital Logic": {
                "___urlPath___": "digital-logic",
                "Boolean Algebra and Logic Gates": {
                    "Boolean Algebra Basics": {
                        "Boolean Variables and Operations": true,
                        "Truth Tables": true,
                        "Logic Gate Symbols": {
                            "AND, OR, NOT": true,
                            "NAND, NOR, XOR, XNOR": true
                        },
                        "DeMorgan’s Theorems": true,
                        "Duality Principle": true,
                        "Boolean Expression Simplification": true
                    },
                    "Canonical Forms": {
                        "Sum of Products (SOP)": true,
                        "Product of Sums (POS)": true,
                        "Minterms and Maxterms": true
                    }
                },
                "Minimization Techniques": {
                    "Algebraic Simplification": true,
                    "Karnaugh Maps (K-Map)": {
                        "2-variable to 5-variable K-Map": true,
                        "Grouping and Simplification": true,
                        "Don’t Care Conditions": true
                    },
                    "Quine-McCluskey Method (Tabulation Method)": true
                },
                "Combinational Circuits": {
                    "Basic Circuits": {
                        "Half Adder and Full Adder": true,
                        "Half Subtractor and Full Subtractor": true
                    },
                    "Multiplexers and Demultiplexers": true,
                    "Encoders and Decoders": true,
                    "Priority Encoder and Binary Decoder": true,
                    "Comparators": true,
                    "Parity Generator and Checker": true,
                    "Binary to Gray and Gray to Binary Converter": true,
                    "7-Segment Display Decoder": true
                },
                "Sequential Circuits": {
                    "Flip-Flops": {
                        "SR, JK, D, and T Flip-Flops": true,
                        "Truth Table and Excitation Table": true,
                        "Flip-Flop Conversions": true
                    },
                    "Registers": {
                        "SISO, SIPO, PISO, PIPO": true,
                        "Universal Shift Register": true
                    },
                    "Counters": {
                        "Asynchronous (Ripple) Counters": true,
                        "Synchronous Counters": true,
                        "Up/Down Counters": true,
                        "Modulo-N Counters": true
                    },
                    "Finite State Machines": {
                        "Moore Machine": true,
                        "Mealy Machine": true,
                        "State Diagrams and State Tables": true,
                        "State Minimization": true
                    }
                },
                "Number Systems and Codes": {
                    "Number Systems": {
                        "Binary, Decimal, Octal, Hexadecimal": true,
                        "Conversions Between Number Systems": true
                    },
                    "Binary Arithmetic": {
                        "Addition, Subtraction": true,
                        "Multiplication and Division": true,
                        "1's and 2's Complement": true,
                        "Signed and Unsigned Numbers": true
                    },
                    "BCD and Excess-3 Code": true,
                    "Error Detection Codes": {
                        "Parity Bit": true,
                        "Hamming Code": true
                    }
                },
                "Computer Arithmetic": {
                    "Fixed Point Arithmetic": {
                        "Addition, Subtraction, Overflow": true
                    },
                    "Floating Point Arithmetic": {
                        "IEEE 754 Standard": true,
                        "Normalization": true,
                        "Rounding Methods": true,
                        "Addition/Subtraction of FP Numbers": true
                    },
                    "Booth’s Multiplication Algorithm": true,
                    "Restoring and Non-Restoring Division Algorithms": true
                },
                "Hands-On Projects and Simulations": {
                    "Designing a 4-bit Adder/Subtractor": true,
                    "Simulating a Synchronous Counter": true,
                    "Building a Finite State Machine": true,
                    "K-Map Minimization Tool": true
                }
            }
            ,
            "Computer Organization and Architecture": {
                "___urlPath___": "computer-organization-and-architecture",
                "Fundamentals of Digital Electronics": {
                    "___urlPath___": "fundamentals-of-digital-electronics",
                    "Number systems": {
                        "___urlPath___": "number-systems",
                        "___md___": 874
                    },
                    "Floating Point Arithmetic": {
                        "___urlPath___": "floating-point-arithmetic",
                        "___md___": 875
                    },
                    "Error Detection and Correction": {
                        "___urlPath___": "error-detection-and-correction",
                        "___md___": 876
                    },
                    "Boolean algebra": {
                        "___urlPath___": "boolean-algebra",
                        "___md___": 877
                    },
                    "Minimisation Technique": {
                        "___urlPath___": "minimisation-technique",
                        "___md___": 878
                    },
                    "Sum of min terms": {
                        "___urlPath___": "sum-of-min-terms",
                        "___md___": 879
                    },
                    "Product of max terms": {
                        "___urlPath___": "product-of-max-terms",
                        "___md___": 880
                    },
                    "Simplification using Karnaugh's Map (up to 4 variables)": {
                        "___urlPath___": "simplification-using-k-map",
                        "___md___": 881
                    },
                    "Combinational Circuits": {
                        "___urlPath___": "combinational-circuits",
                        "___md___": 882
                    },
                    "Sequential Circtuits": {
                        "___urlPath___": "sequential-circuits",
                        "___md___": 883
                    },
                    "Shift Register": {
                        "___urlPath___": "shift-reigster",
                        "___md___": 884
                    },
                    "Counters": {
                        "___urlPath___": "counters",
                        "___md___": 885
                    },
                    "Design of Combinational and Sequential Circuits": {
                        "___urlPath___": "design-of-combinatonal-and-sequential-circuits",
                        "___md___": 886
                    }
                },
                "Basic Computer Organization and Design": {
                    "___urlPath___": "basic-computer-organisatio-and-design",
                    "Von Neumann Architecture": {
                        "___urlPath___": "von-numann-architecture",
                        "___md___": 824
                    },
                    "Insutruction Codes": {
                        "___urlPath___": "instruction-codes",
                        "___md___": 825,
                    },
                    "Computer registers": {
                        "___urlPath___": "computer-registers",
                        "___md___": 826
                    },
                    "Computer instructions": {
                        "___urlPath___": "computer-instructions",
                        "___md___": 827
                    },
                    "Timing and control": {
                        "___urlPath___": "timing-and-control",
                        "___md___": 828
                    },
                    "Instruction cycle": {
                        "___urlPath___": "instruction-cycle",
                        "___md___": 829
                    },
                    "Memory-Reference instructions": {
                        "___urlPath___": "memory-reference-instructions",
                        "___md___": 830
                    },
                    "Input-output and interrupt": {
                        "___urlPath___": "input-output-and-interrupt",
                        "___md___": 831
                    },
                    "Design of basic computer": {
                        "___urlPath___": "design-of-basic-computer",
                        "___md___": 832
                    },
                    "Design of Accumulator Unit": {
                        "___urlPath___": "design-of-accumulator-unit",
                        "___md___": 833
                    }
                },
                "Central Processing Unit": {
                    "___urlPath___": "central-processing-unit",
                    "Introduction": {
                        "___urlPath___": "introduction",
                        "___md___": 756
                    },
                    "General Register Organisation": {
                        "___urlPath___": "general-register-organisation",
                        "___md___": 757
                    },
                    "Stack Organisation": {
                        "___urlPath___": "stack-organisation",
                        "___md___": 758
                    },
                    "Instruction Format": {
                        "___urlPath___": "instruction-format",
                        "___md___": 759
                    },
                    "Addressing Modes": {
                        "___urlPath___": "addressing-modes",
                        "___md___": 760
                    },
                    "Data transfer and manipulation": {
                        "___urlPath___": "data-transfer-and-manipulation",
                        "___md___": 761
                    },
                    "Program control": {
                        "___urlPath___": "program-control",
                        "___md___": 762
                    },
                    "Reduced Instruction Set Computer (RISC)": {
                        "___urlPath___": "reduced-instruction-set-computer",
                        "___md___": 763
                    },
                    "Pipeline processing": {
                        "___urlPath___": "pipeline-processing",
                        "___md___": 766
                    },
                    "Parallel processing": {
                        "___urlPath___": "parallel-processing",
                        "___md___": 767
                    }
                },
                "Input Output Organisaton": {
                    "___urlPath___": "input-output-organisation",
                    "Peripheral Devices": {
                        "___urlPath___": "peripheral-devices",
                        "___md___": 768
                    },
                    "IO Interface": {
                        "___urlPath___": "io-interface",
                        "___md___": 769
                    },
                    "Asynchronous data transfer": {
                        "___urlPath___": "asynchronous-data-transfer",
                        "___md___": 770
                    },
                    "Modes of transfer": {
                        "___urlPath___": "modes-of-transfer",
                        "___md___": 771
                    },
                    "Priority Interrupt": {
                        "___urlPath___": "priority-interrupt",
                        "___md___": 772
                    },
                    "DMA": {
                        "___urlPath___": "dma",
                        "___md___": 773
                    },
                    "Input output processor": {
                        "___urlPath___": "input-output-processor",
                        "___md___": 774
                    },
                    "Serial Communication": {
                        "___urlPath___": "serial-communication",
                        "___md___": 775
                    },
                },
                "Memory Organisation": {
                    "___urlPath___": "memory-organisation",
                    "Memory Hierarchy": {
                        "___urlPath___": "memory-hierarchy",
                        "___md___": 776
                    },
                    "Main Memory": {
                        "___urlPath___": "main-memory",
                        "___md___": 777
                    },
                    "Cache Memory": {
                        "___urlPath___": "cache-memory",
                        "___md___": 778
                    },
                    "Register Memeory": {
                        "___urlPath___": "register-memeory",
                        "___md___": 779
                    },
                    "Secondary Memory": {
                        "___urlPath___": "secondary-memory",
                        "___md___": 780
                    },
                    "Virtual Memory": {
                        "___urlPath___": "virtual-memory",
                        "___md___": 781
                    },
                    "Importance of Memory Organisation": {
                        "___urlPath___": "importance-of-memory-organisation",
                        "___md___": 782
                    },
                    "Advanced optimisation of cache performance": {
                        "___urlPath___": "advanced-optimisation-of-cache-performance",
                        "___md___": 783
                    }
                },
                "Programming the basic computer": {
                    "___urlPath___": "programming-the-basic-computer",
                    "Introduction": {
                        "___urlPath___": "introduction",
                        "___md___": 834
                    },
                    "Machine Language": {
                        "___urlPath___": "machine-language",
                        "___md___": 835
                    },
                    "Assembly Language": {
                        "___urlPath___": "assembly-language",
                        "___md___": 836
                    },
                    "The 11 Assembler": {
                        "___urlPath___": "the-11-assembler",
                        "___md___": 837
                    },
                    "Program loops": {
                        "___urlPath___": "program-loops",
                        "___md___": 838
                    },
                    "Programming Arithmetic and Logic Operation": {
                        "___urlPath___": "programming-arithmetic-and-logic-operation",
                        "___md___": 839
                    },
                    "Subroutines": {
                        "___urlPath___": "subroutines",
                        "___md___": 840
                    },
                    "I-O Programming": {
                        "___urlPath___": "io-programming",
                        "___md___": 841
                    },
                    "Ten Advanced Optimisation of Cache Performance": {
                        "___urlPath___": "ten-advanced-optimisation-of-cache-performance",
                        "___md___": 842
                    },
                    "Memory Technology and Optimisation": {
                        "___urlPath___": "memory-technology-and-optimisation",
                        "___md___": 843
                    },
                    "Protection": {
                        "___urlPath___": "protection",
                        "___md___": 862
                    },
                    "Cross-cutting issues": {
                        "___urlPath___": "cross-cutting-issues",
                        "___md___": 863
                    },
                    "Memory Hierarchies in the ARM Cortex-A8 and Intel Core i7": {
                        "___urlPath___": "memory-hierarchies-in-the-arm-cortex-a8-and-intel-core-i7",
                        "___md___": 864
                    }
                },
                "Instruction Set Architecture": {
                    "___urlPath___": "instruction-set-architecture",
                    "Operating System": {
                        "___urlPath___": "operating-system",
                        "___md___": 854
                    },
                    "Compiler": {
                        "___urlPath___": "compiler",
                        "___md___": 855
                    },
                    "Central Processing Unit": {
                        "___urlPath___": "cpu",
                        "___md___": 856
                    },
                    "Dynamic Binary": {
                        "___urlPath___": "dynamic-binary",
                        "___md___": 857
                    },
                    "Translation": {
                        "___urlPath___": "translation",
                        "___md___": 858
                    },
                    "Single Instruction Multiple Data": {
                        "___urlPath___": "single-instruction-multiple-data",
                        "___md___": 859
                    },
                    "Virtual Machine": {
                        "___urlPath___": "virtual-machine",
                        "___md___": 860
                    },
                    "Intermediate Representation": {
                        "___urlPath___": "intermediate-representation",
                        "___md___": 861
                    }
                },
                "Pipelining Technique in Computer Architecture": {
                    "___urlPath___": "pipelining-technique-in-computer-architecture",
                    "Basic Introduction": {
                        "___urlPath___": "basic-introduction",
                        "___md___": 848
                    },
                    "Variaous stages of the pipeline": {
                        "___urlPath___": "various-stages-of-the-pipeline",
                        "___md___": 849
                    },
                    "Types of pipeline techniques": {
                        "___urlPath___": "types-of-pipeline-techiniques",
                        "___md___": 850
                    },
                    "Characteristics": {
                        "___urlPath___": "characteristics",
                        "___md___": 851
                    },
                    "Advantages and disadvantages of pipelining": {
                        "___urlPath___": "advantages-and-disadvantages-of-pipelining",
                        "___md___": 852
                    },
                    "Throughput and Speedup of pipelining": {
                        "___urlPath___": "throughput-and-speedup-of-pipelining",
                        "___md___": 853
                    }
                },
                "Data Representation": {
                    "___urlPath___": "data-representation",
                    "Binary, decimal, and hexadecimal numbers": {
                        "___urlPath___": "binary-decimal-and-hexadecimal-numbers",
                        "___md___": 865
                    },
                    "Computer instructions": {
                        "___urlPath___": "computer-instructions",
                        "___md___": 866
                    },
                    "Character set and number set": {
                        "___urlPath___": "character-set-and-number-set",
                        "___md___": 867
                    },
                    "Addiction": {
                        "___urlPath___": "addiction",
                        "___md___": 868
                    },
                    "Ripple Carry Adder": {
                        "___urlPath___": "ripple-carry-adder",
                        "___md___": 869
                    },
                    "Carry Look-ahead": {
                        "___urlPath___": "carry-look-ahead",
                        "___md___": 870
                    },
                    "Multiplication": {
                        "___urlPath___": "multiplication",
                        "___md___": 871
                    },
                    "Shift and Add": {
                        "___urlPath___": "shift-and-add",
                        "___md___": 872
                    },
                    "Division": {
                        "___urlPath___": "division",
                        "___md___": 873
                    }
                },
                "Data Flow Architures": {
                    "___urlPath___": "data-flow-architecture",
                    "Data flow architecutre": {
                        "___urlPath___": "data-flow-architecture",
                        "___md___": 844
                    },
                    "Data flow computing in parallel processign": {
                        "___urlPath___": "data-flow-computing-in-parallel-processing",
                        "___md___": 845
                    },
                    "Vector architecture": {
                        "___urlPath___": "vector-acchitecture",
                        "___md___": 846
                    },
                    "Advanced architecture using data flow computing": {
                        "___urlPath___": "advanced-architecture-using-data-flow-computing",
                        "___md___": 847
                    }
                }
            },
            "Operating System": {
                "___urlPath___": "operating-system",
                "Syllabus": {
                    "___urlPath___": "syllabus",
                    "___md___": 1180
                },
                "Book - Galvin 9th Edition Notes": {
                    "___urlPath___": "galvin-9th-edition-notes",
                    "Chapter 1": {
                        "___urlPath___": "chapter-1",
                        "___md___": 1181
                    },
                    "Chapter 2.1-2.5": {
                        "___urlPath___": "chapter-2-1-2-5",
                        "___md___": 1182
                    },
                    "Chapter 3.1-3.4": {
                        "___urlPath___": "chapter-3-1-3-4",
                        "___md___": 1183
                    },
                    "Chapter 4.1-4.3": {
                        "___urlPath___": "chapter-4-1-4-3",
                        "___md___": 1184
                    },
                    "Chapter 5.1-5.8": {
                        "___urlPath___": "chapter-5-1-5-8",
                        "___md___": 1185
                    },
                    "Chapter 6.1-6.3": {
                        "___urlPath___": "chapter-6-1-6-3",
                        "___md___": 1186
                    },
                    "Chapter 7": {
                        "___urlPath___": "chapter-7",
                        "___md___": 1187
                    },
                    "Chapter 8.1-8.6": {
                        "___urlPath___": "chapter-8-1-8-6",
                        "___md___": 1188
                    },
                    "Chapter 9.1-9.7": {
                        "___urlPath___": "chapter-9-1-9-7",
                        "___md___": 1189
                    },
                    "Chapter 10.1-10.4": {
                        "___urlPath___": "chapter-10-1-10-4",
                        "___md___": 1190
                    },
                    "Chapter 12.1-12.5": {
                        "___urlPath___": "chapter-12-1-12-5",
                        "___md___": 1191
                    }
                }

                ,
                "Standard Notes": {

                    "System Calls and Structures": {
                        "___urlPath___": "system-calls-and-structures",
                        "What is a System Call?": {
                            "___urlPath___": "what-is-a-system-call",
                            "___md___": 951
                        },
                        "Types of System Calls": {
                            "___urlPath___": "types-of-system-calls",
                            "___md___": 952
                        },
                        "Examples in Linux and Windows": {
                            "___urlPath___": "examples-in-linux-and-windows",
                            "___md___": 953
                        },
                        "User Mode vs Kernel Mode": {
                            "___urlPath___": "user-mode-vs-kernel-mode",
                            "___md___": 954
                        }
                    },

                    "Processes and Threads": {
                        "Processes": {
                            "What is a Process?": true,
                            "Process States and State Transitions": true,
                            "Process Control Block (PCB)": true,
                            "Context Switching": true
                        },
                        "Threads": {
                            "What is a Thread?": true,
                            "User-Level vs Kernel-Level Threads": true,
                            "Multithreading Models": true
                        }
                    },

                    "Inter-Process Communication (IPC)": {
                        "Shared Memory": true,
                        "Message Passing": true,
                        "Pipes and Sockets": true
                    },

                    "Concurrency and Synchronization": {
                        "Critical Section Problem": true,
                        "Peterson’s Algorithm": true,
                        "Semaphores": {
                            "Binary and Counting Semaphores": true,
                            "Semaphore Operations (wait/signal)": true
                        },
                        "Mutex and Locks": true,
                        "Monitors": true,
                        "Classical Problems": {
                            "Producer-Consumer": true,
                            "Reader-Writer": true,
                            "Dining Philosophers": true
                        }
                    },

                    "Deadlocks": {
                        "What is a Deadlock?": true,
                        "Conditions for Deadlock": true,
                        "Deadlock Prevention": true,
                        "Deadlock Avoidance (Banker's Algorithm)": true,
                        "Deadlock Detection and Recovery": true
                    },

                    "CPU Scheduling": {
                        "Scheduling Algorithms": {
                            "First-Come-First-Serve (FCFS)": true,
                            "Shortest Job Next (SJN) / SJF": true,
                            "Priority Scheduling": true,
                            "Round Robin (RR)": true,
                            "Multilevel Queue Scheduling": true
                        },
                        "Scheduling Metrics": {
                            "CPU Utilization": true,
                            "Throughput": true,
                            "Turnaround Time": true,
                            "Waiting Time": true,
                            "Response Time": true
                        },
                        "Preemptive vs Non-Preemptive": true
                    },

                    "I/O Scheduling": {
                        "I/O Techniques": {
                            "Polling": true,
                            "Interrupts": true,
                            "Direct Memory Access (DMA)": true
                        },
                        "Disk Scheduling Algorithms": {
                            "First-Come-First-Serve (FCFS)": true,
                            "Shortest Seek Time First (SSTF)": true,
                            "SCAN": true,
                            "C-SCAN": true,
                            "LOOK and C-LOOK": true
                        }
                    },

                    "Memory Management": {
                        "___urlPath___": "memory-management",
                        "Contiguous Allocation": {
                            "___urlPath___": "contiguous-allocation",
                            "___md___": 1179
                        },
                        "Paging": {
                            "Single-Level Paging": true,
                            "Multi-Level Paging": true,
                            "TLB and EMAT": true
                        },
                        "Segmentation": true,
                        "Paging vs Segmentation": true
                    },

                    "Virtual Memory": {
                        "Demand Paging": true,
                        "Page Fault and Handling": true,
                        "Page Replacement Algorithms": {
                            "FIFO": true,
                            "Optimal": true,
                            "LRU": true,
                            "Clock": true
                        },
                        "Thrashing and Working Set": true
                    },
                    "File Systems": {
                        "File Concepts": {
                            "File Attributes and Operations": true,
                            "Access Methods": true
                        },
                        "Directory Structures": true,
                        "File Allocation Methods": {
                            "Contiguous": true,
                            "Linked": true,
                            "Indexed": true
                        },
                        "Free Space Management": true
                    }
                }

            },

            "Computer Networks": {
                "___urlPath___": "computer-networks",
                "Chapter 1 - Definition, Goals, and Applications": {
                    "___urlPath___": "definition-goals-and-applications",
                    "___md___": 791
                },
                "Chapter 2 - Network Structure, Network Architecture & OSI Model": {
                    "___urlPath___": "network-structure-network-architecture-and-osi-model",
                    "___md___": 792
                },
                "Chapter 3 - Network topology design, backbone design and local access network design": {
                    "___urlPath___": "network-topology-design-backbone-design-and-local-access-network-design",
                    "___md___": 793
                },
                "Chapter 4 - Network Transmission and Switching Fundamentals: Media, Methods, and ISDN Handling": {
                    "___urlPath___": "network-transmission-and-siwtching-fundamentals",
                    "___md___": 794
                },
                "Chapter 5 - Channel Allocation, LAN Protocols, and IEEE FDDI Standards": {
                    "___urlPath___": "channel-allocation-lan-protocols-and-ieee-fddi-standards",
                    "___md___": 795
                },
                "Chapter 6 - Data Link Layer Protocols: Elementary Protocols, Sliding Window, and Error Handling": {
                    "___urlPath___": "data-link-layer-protocols",
                    "___md___": 796
                },
                "Chapter 7 - Network Layer Concepts: Point-to-Point Networks, Routing, and Congestion Control": {
                    "___urlPath___": "network-layer-concepts",
                    "___md___": 797
                },
                "Chapter 8 - TCP/IP Suite, IP Packet, IP Addressing, and IPv4 vs IPv6": {
                    "___urlPath___": "tcp-ip-suite-ip-packet-ip-addressing-and-ipv4-ipv6",
                    "___md___": 798
                },
                "Chapter 9 - TCP, UDP and Routing protocols": {
                    "___urlPath___": "tcp-udp-routing-protocols",
                    "___md___": 799
                },
                "Chapter 10 - Transport and Session Layer Mechanisms: Design, Connection Management, TCP Control, and Remote Procedure Calls": {
                    "___urlPath___": "transport-and-session-layer-mechanisms",
                    "___md___": 800
                },
                "Chapter 11 - Presentation Layer in the OSI Model": {
                    "___urlPath___": "presenetaion-layer-osi-model",
                    "___md___": 801
                },
                "Chapter 12 - Application Layer Services": {
                    "___urlPath___": "application-layer-services",
                    "___md___": 802
                }
            },
            "Cloud Computing": {
                "Fundamentals": {
                    "___urlPath___": "cloud-computing-fundamentals",
                    "Introduction to Cloud Computing": {
                        "___urlPath___": "introduction-cloud-computing",
                        "___md___": 101
                    },
                    "Characteristics of Cloud": {
                        "___urlPath___": "characteristics-cloud",
                        "___md___": 102
                    },
                    "Service Models (IaaS, PaaS, SaaS)": {
                        "___urlPath___": "service-models",
                        "___md___": 103
                    },
                    "Deployment Models": {
                        "___urlPath___": "deployment-models",
                        "___md___": 104
                    },
                    "Benefits and Challenges": {
                        "___urlPath___": "benefits-challenges-cloud",
                        "___md___": 105
                    }
                }
            },
            "Software Engineering": {
                "___urlPath___": "software-engineering",
                "Introduction to Software Engineering": {
                    "What is Software Engineering?": true,
                    "Software Development Life Cycle (SDLC)": {
                        "Phases of SDLC": true,
                        "Waterfall Model": true,
                        "Iterative and Incremental Models": true,
                        "Agile Methodology": true
                    },
                    "Importance of Software Engineering": true,
                    "Software Engineering Ethics": true
                },
                "Requirements Engineering": {
                    "Understanding Requirements": {
                        "Functional and Non-Functional Requirements": true,
                        "User Stories and Use Cases": true
                    },
                    "Requirements Gathering Techniques": {
                        "Interviews and Surveys": true,
                        "Workshops and Brainstorming": true,
                        "Prototyping": true
                    },
                    "Requirements Documentation": {
                        "SRS (Software Requirements Specification)": true,
                        "Tools for Requirements Documentation (Jira, Confluence)": true
                    },
                    "Requirements Validation": true
                },
                "Software Design": {
                    "Principles of Software Design": {
                        "SOLID Principles": true,
                        "Separation of Concerns": true,
                        "Design Patterns (Creational, Structural, Behavioral)": true
                    },
                    "Architectural Design": {
                        "Monolithic vs Microservices Architecture": true,
                        "Layered Architecture": true,
                        "Client-Server Architecture": true
                    },
                    "UI/UX Design Principles": {
                        "Wireframing and Prototyping": true,
                        "Human-Computer Interaction Basics": true,
                        "Accessibility in Design": true
                    },
                    "Design Documentation": true
                },
                "Software Development Methodologies": {
                    "Traditional Models": {
                        "Waterfall Model": true,
                        "V-Model": true
                    },
                    "Agile Models": {
                        "Scrum": {
                            "Roles in Scrum": true,
                            "Artifacts in Scrum": true,
                            "Events in Scrum": true
                        },
                        "Kanban": true,
                        "Extreme Programming (XP)": true
                    },
                    "Hybrid Models (Agile-Waterfall)": true
                },
                "Software Testing and Quality Assurance": {
                    "Testing Fundamentals": {
                        "What is Software Testing?": true,
                        "Levels of Testing (Unit, Integration, System, Acceptance)": true,
                        "Types of Testing (Black Box, White Box, Grey Box)": true
                    },
                    "Test-Driven Development (TDD)": true,
                    "Automated Testing": {
                        "Tools (Selenium, JUnit, TestNG)": true,
                        "Continuous Testing in CI/CD Pipelines": true
                    },
                    "Quality Assurance Practices": {
                        "Defect Management": true,
                        "Peer Reviews and Code Inspections": true,
                        "Quality Metrics and KPIs": true
                    }
                },
                "Software Maintenance": {
                    "Types of Maintenance": {
                        "Corrective Maintenance": true,
                        "Adaptive Maintenance": true,
                        "Perfective Maintenance": true,
                        "Preventive Maintenance": true
                    },
                    "Version Control and Configuration Management": {
                        "Version Control Tools (Git, SVN)": true,
                        "Release Management": true,
                        "Continuous Integration and Deployment": true
                    },
                    "Refactoring and Reengineering": true
                },
                "Software Project Management": {
                    "Project Planning": {
                        "Defining Scope and Objectives": true,
                        "Work Breakdown Structure (WBS)": true,
                        "Estimating Costs and Time": true
                    },
                    "Risk Management": {
                        "Identifying Risks": true,
                        "Mitigation Strategies": true,
                        "Monitoring and Controlling Risks": true
                    },
                    "Team Management": {
                        "Forming and Leading Teams": true,
                        "Conflict Resolution": true,
                        "Motivating Team Members": true
                    },
                    "Project Tracking Tools": {
                        "Gantt Charts": true,
                        "Kanban Boards": true,
                        "Tools (Microsoft Project, Trello, Asana)": true
                    }
                },
                "Software Metrics and Measurement": {
                    "Introduction to Metrics": true,
                    "Process Metrics": true,
                    "Product Metrics": true,
                    "Project Metrics": true,
                    "Tools for Software Metrics (SonarQube, CodeClimate)": true
                },
                "Emerging Trends in Software Engineering": {
                    "DevOps and Continuous Delivery": true,
                    "AI and Machine Learning in Software Engineering": true,
                    "Cloud-Native Applications": true,
                    "Low-Code and No-Code Platforms": true
                },
                "Case Studies and Practical Applications": {
                    "Case Study 1: Building an E-Commerce Application": true,
                    "Case Study 2: Developing a Scalable SaaS Product": true,
                    "Case Study 3: Migrating a Legacy System to Microservices": true,
                    "Case Study 4: Implementing Agile in a Large Organization": true
                },
                "Software Engineering cheatsheet": {
                    "___urlPath___": "software-engineering-cheatsheet",
                    "___md___": 485
                }
            },
            "Information & Cyber Security": {
                "___urlPath___": "information-cyber-security",
                "Introduction & Basic Encryption Techniques": {
                    "___urlPath___": "introduction",
                    "Introduction to Information Security ": {
                        "___urlPath___": "introduction-to-information-security",
                        "___md___": 677
                    },
                    "Security Threats and Attacks": {
                        "___urlPath___": "security-threats-and-attacks",
                        "___md___": 678
                    },
                    "Basic Network Security Terminology": {
                        "___urlPath___": "basic-network-security-terminology",
                        "___md___": 679
                    },

                },
                "Modern Cryptography": {
                    "___urlPath___": "modern-crypto",
                    "Feistel Ciphers": {
                        "___urlPath___": "feistel-ciphers",
                        "___md___": 658
                    },
                    "Data Encryption Standard (DES)": {
                        "___urlPath___": "data-encryption-standard-des",
                        "___md___": 659
                    },
                    "DES Analysis": {
                        "___urlPath___": "des-analysis",
                        "___md___": 660
                    },
                    "Block Cipher Modes of Operation": {
                        "___urlPath___": "block-cipher-modes-of-operation",
                        "___md___": 661
                    },
                    "Triple DES": {
                        "___urlPath___": "triple-des",
                        "___md___": 662
                    }
                },
                "Stream Ciphers": {
                    "___urlPath___": "stream-ciphers",
                    "A5/1 Cipher": {
                        "___urlPath___": "a51-cipher",
                        "___md___": 663
                    },
                    "RC4 Cipher": {
                        "___urlPath___": "rc4-cipher",
                        "___md___": 664
                    }
                },
                "Public Key Cryptography": {
                    "___urlPath___": "public-key-crypto",
                    "RSA Algorithm": {
                        "___urlPath___": "rsa-algorithm",
                        "___md___": 665
                    },
                    "Elliptic Curve Cryptography (ECC)": {
                        "___urlPath___": "elliptic-curve-cryptography",
                        "___md___": 666
                    }
                },
                "Key Management": {
                    "___urlPath___": "key-management",
                    "Key Distribution": {
                        "___urlPath___": "key-distribution",
                        "___md___": 667
                    },
                    "Diffie-Hellman Key Exchange": {
                        "___urlPath___": "diffie-hellman-key-exchange",
                        "___md___": 668
                    },
                    "Digital Signatures": {
                        "___urlPath___": "digital-signatures",
                        "___md___": 669
                    },
                    "X.509 Certificate Standard": {
                        "___urlPath___": "x-509-certificate-standard",
                        "___md___": 670
                    }
                },
                "Authentication and Access Control": {
                    "___urlPath___": "authentication-access-control",
                    "Message Digest": {
                        "___urlPath___": "message-digest",
                        "___md___": 647
                    },
                    "Secure Hash Algorithm (SHA)": {
                        "___urlPath___": "secure-hash-algorithm-sha",
                        "___md___": 648
                    },
                    "HMAC": {
                        "___urlPath___": "hmac",
                        "___md___": 649
                    },
                    "Access Control - Passwords": {
                        "___urlPath___": "access-controls-password",
                        "___md___": 650
                    },
                    "Biometric Authentication": {
                        "___urlPath___": "biometric-authentication",
                        "___md___": 651
                    },
                    "Authorization - Firewalls": {
                        "___urlPath___": "authorization-firewalls",
                        "___md___": 652
                    },
                    "Intrusion Detection Systems (IDS)": {
                        "___urlPath___": "intrusion-detection-system",
                        "___md___": 653
                    }
                },
                "Network Layer Security": {
                    "___urlPath___": "network-layer-security",
                    "SSL and TLS Protocols": {
                        "___urlPath___": "ssl-and-tls-protocols",
                        "___md___": 654
                    },
                    "SSL vs IPSec": {
                        "___urlPath___": "ssl-vs-ipsec",
                        "___md___": 655
                    },
                    "Kerberos": {
                        "___urlPath___": "kerberos",
                        "___md___": 656
                    },
                    "WEP (Wired Equivalent Privacy)": {
                        "___urlPath___": "wep-wired-equivalent-privacy",
                        "___md___": 657
                    }
                },
                "Malware and Software Vulnerabilities": {
                    "___urlPath___": "malware-software-flaws",
                    "Types of Malware": {
                        "___urlPath___": "types-of-malware",
                        "___md___": 671
                    },
                    "Software-Based Attacks": {
                        "___urlPath___": "software-based-attacks",
                        "___md___": 672
                    }
                },
                "Cyber Security and Legal Framework": {
                    "___urlPath___": "cyber-security-and-legal-framework",
                    "Understanding Cyber Threats": {
                        "___urlPath___": "understanding-cyber-threats",
                        "___md___": 673
                    },
                    "Cyber Laws and Forensics": {
                        "___urlPath___": "cyber-laws-and-forensics",
                        "___md___": 674
                    },
                    "Advanced Cryptographic Techniques": {
                        "___urlPath___": "advanced-cryptographic-techniques",
                        "___md___": 675
                    },
                    "Future Trends in CyberSecurity ": {
                        "___urlPath___": "future-trends-in-cybersecurity",
                        "___md___": 676
                    },
                }
            },
            "Big Data Analytics": {
                "Introduction to Data Objects and Attribute Types": {
                    "___urlPath___": "introduction-to-data-objects-and-attirbute-types",
                    "___md___": 706
                },
                "Types of Data": {
                    "___urlPath___": "types-of-data",
                    "___md___": 707
                },
                "Staistical Descriptions of Data": {
                    "___urlPath___": "statistical-descriptions-of-data",
                    "___md___": 708
                },
                "Fundamentals of Probability and Statistics": {
                    "___urlPath___": "fundamentals-of-probability-and-statistics",
                    "___md___": 709
                },
                "Data Pre‐processing Techniques": {
                    "___urlPath___": "data-pre-processing-techniques",
                    "___md___": 710
                },
                "Dimensionality Reduction and Distance Calculation": {
                    "___urlPath___": "dimensionality-reduction-and-distance-calculation",
                    "___md___": 711
                },
                "Classification Technique I": {
                    "___urlPath___": "classification-technique-1",
                    "___md___": 712
                },
                "Classification Technique II": {
                    "___urlPath___": "classification-technique-2",
                    "___md___": 730
                },
                "Clustering Techniques": {
                    "___urlPath___": "clustering-techniques",
                    "___md___": 731
                },
                "Foundation of Data Visualization": {
                    "___urlPath___": "foundation-of-data-visualization",
                    "___md___": 732
                },
                "Design Principles in Visualization": {
                    "___urlPath___": "design-principles-in-visualization",
                    "___md___": 733
                },
                "Specialized Data Visualization": {
                    "___urlPath___": "specialised-data-visualization",
                    "___md___": 734
                },
                "Big Data Tools and Technology": {
                    "___urlPath___": "big-data-tools-and-technology",
                    "___md___": 735
                },
                "Future Trends and Challenges in Big Data": {
                    "___urlPath___": "future-trends-and-chanllenges-in-big-data",
                    "___md___": 736
                }
            }
        }
    }
};

export default mapper;