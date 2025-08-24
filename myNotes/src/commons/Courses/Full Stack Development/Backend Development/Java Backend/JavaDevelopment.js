export const JavaDevelopment = {
    "Java Development": {
        "___urlPath___": "java-development",
        "What a Java Solution Architect should know !!": {
            "___urlPath___": "java-solution-architect-syllabus",
            "___md___": 399
        },
        "Introduction to Java": {
            "History and Evolution of Java": true,
            "Features of Java": true,
            "Java Editions (JSE, JEE, JME)": true,
            "Setting Up Java Development Environment (JDK, IDEs)": true,
            "Writing and Running Your First Java Program": true
        },
        "Java Memory Model (JMM)": {
            "Overview of JMM": {
                "Purpose of the Java Memory Model": true,
                "Memory Consistency and Visibility Guarantees": true,
                "JMM vs CPU Caches vs Main Memory": true
            },
            "Thread Communication and Shared Memory": {
                "How Threads Share Variables": true,
                "Atomicity, Visibility, and Ordering Explained": true,
                "Happens-Before Relationship": true
            },
            "Volatile Keyword Semantics": {
                "What Volatile Guarantees": true,
                "When to Use Volatile": true,
                "Volatile vs Synchronized": true,
                "Limitations of Volatile": true
            },
            "Synchronized and Locks": {
                "Intrinsic Locks and MonitorEnter/Exit": true,
                "Memory Visibility with Synchronized Blocks": true,
                "Reentrant Locks and Explicit Lock APIs": true,
                "Synchronization vs Volatile Tradeoffs": true
            },
            "False Sharing and Cache Coherence": {
                "Understanding CPU Cache Lines": true,
                "What is False Sharing and How It Hurts Performance": true,
                "How to Avoid False Sharing in Java": true
            },
            "Out-of-Order Execution and Compiler Reordering": {
                "Reordering by JIT/CPU Explained": true,
                "How JMM Prevents Unsafe Reordering": true,
                "Memory Fences and Barriers (Theory)": true
            },
            "Atomic Operations and java.util.concurrent": {
                "CAS (Compare-And-Swap)": true,
                "AtomicInteger, AtomicReference and ABA Problem": true,
                "VarHandle and Unsafe APIs": true
            },
            "Final Fields and Safe Publication": {
                "What is Safe Publication": true,
                "Immutability and the Final Keyword in JMM": true,
                "Object Construction and Visibility": true
            },
            "JMM Anomalies and Common Bugs": {
                "Stale Data Reads and Visibility Failures": true,
                "Double-Checked Locking Pitfalls (pre-Java 5 vs post-Java 5)": true,
                "Read-Modify-Write Hazards": true
            },
            "Advanced Concurrency Patterns": {
                "ThreadLocal and Memory Isolation": true,
                "Immutable Objects and Defensive Copies": true,
                "Lock-Free and Wait-Free Algorithms (Intro)": true
            },
            "Testing Memory Visibility": {
                "Writing JMM Test Cases with JCStress": true,
                "Thread Interleaving Simulation": true,
                "Detecting Memory Bugs in CI Pipelines": true
            },
            "JMM and Modern Hardware": {
                "NUMA Architectures and Java": true,
                "JMM across x86 vs ARM Architectures": true,
                "Memory Fences at the Hardware Level": true
            },
            "JMM in Practice": {
                "How JVM Implements Happens-Before": true,
                "Performance Tradeoffs in Visibility vs Throughput": true,
                "JMM Rules in the Presence of JIT and GC": true
            }
        }
        ,
        "JVM Internals": {
            "___urlPath___": "jvm-internals",
            "JVM Architecture": {
                "___urlPath___": "jvm-architecture",
                "JVM vs JRE vs JDK": {
                    "___urlPath___": "jvm-vs-jre-vs-jdk",
                    "___md___": 986
                },
                "JVM Components Overview": true,
                "Execution Engine and Bytecode Execution": true,
                "JNI (Java Native Interface) Basics": true
            },
            "Class Loading": {
                "Class Loader Hierarchy": true,
                "Parent Delegation Model": true,
                "Class Loading Phases": {
                    "Loading": true,
                    "Linking (Verification, Preparation, Resolution)": true,
                    "Initialization": true
                },
                "Custom Class Loaders": true,
                "Class Loader Leaks and Troubleshooting": true
            },
            "Runtime Data Areas": {
                "Heap Memory (Young, Survivor, Old Gen)": true,
                "Method Area and Metaspace": true,
                "Java Stack and Stack Frames": true,
                "Program Counter Register": true,
                "Native Method Stack": true,
                "Thread-local Memory and Thread Isolation": true
            },
            "Garbage Collection": {
                "GC Process (Mark, Sweep, Compact, Copy)": true,
                "Generational GC Concept": true,
                "GC Types": {
                    "Serial GC": true,
                    "Parallel GC": true,
                    "CMS (Deprecated)": true,
                    "G1 GC": true,
                    "ZGC": true,
                    "Shenandoah GC": true
                },
                "GC Tuning": {
                    "Heap Sizing (-Xms, -Xmx)": true,
                    "GC Flags and Logging": true,
                    "PrintGCDetails and GC Viewer Tools": true
                },
                "GC Logs Analysis and Pause Tuning": true,
                "GC Benchmarks and Stress Testing (JMH)": true
            },
            "JIT Compilation": {
                "Interpreter vs JIT Compiler": true,
                "Tiered Compilation (C1 and C2)": true,
                "HotSpot Optimizations": {
                    "Method Inlining": true,
                    "Loop Unrolling": true,
                    "Escape Analysis": true,
                    "Dead Code Elimination": true
                },
                "Deoptimization and OSR (On-Stack Replacement)": true,
                "JIT Debugging and Tools": {
                    "PrintCompilation": true,
                    "Using `hsdis` to disassemble native code": true,
                    "javap for bytecode inspection": true
                }
            },
            "Memory Tuning and Monitoring": {
                "Metaspace vs PermGen": true,
                "Stack Size and Thread Tuning": true,
                "Native Memory Tracking (NMT)": true,
                "Memory Leak Detection Tools": {
                    "jmap": true,
                    "jstat": true,
                    "jcmd": true,
                    "VisualVM": true,
                    "Eclipse MAT": true
                },
                "Memory Allocation Flame Graphs": true

            },
            "Performance Monitoring and Diagnostics": {
                "Java Flight Recorder (JFR)": true,
                "Java Mission Control (JMC)": true,
                "Thread Dumps and Deadlock Analysis": true,
                "Heap Dump Analysis": true,
                "JVM Metrics with Prometheus/Grafana": true,
                "APM Tools (Datadog, New Relic, AppDynamics)": true
            },
            "Advanced Features and Future APIs": {
                "Foreign Function and Memory API (Project Panama)": true,
                "Structured Concurrency (Preview)": true
            },
            "JVM Options and Flags": {
                "Common JVM Flags": true,
                "Diagnostic Flags": true,
                "Performance Flags and Tuning Strategies": true
            },
            "Container-Aware JVM Tuning": {
                "JVM in Docker/Kubernetes": true,
                "UseContainerSupport and Cgroup Limits": true,
                "Tuning in Limited CPU/Memory Environments": true
            },
            "Polyglot JVM and GraalVM": {
                "GraalVM Overview": true,
                "Native Image Compilation": true,
                "Running Python/JS on JVM": true,
                "Use Cases and Limitations": true
            }
        },
        "Core Java": {
            "___urlPath___": "core-java",
            "Data Types and Variables": {
                "___urlPath___": "data-types-and-variables",
                "Primitive Data Types": {
                    "___urlPath___": "primitive-data-types",
                    "___md___": 1207
                },
                "Reference Data Types": {
                    "___urlPath___": "reference-data-types",
                    "___md___": 1208
                },
                "Pass by Value and Pass by Reference": {
                    "___urlPath___": "pass-by-value-and-pass-by-reference",
                    "___md___": true
                },
                "Type Casting and Type Conversion": {
                    "___urlPath___": "type-casting-and-type-conversion",
                    "___md___": true
                }
            },
            "Operators and Expressions": {
                "___urlPath___": "operators_expressions",
                "Arithmetic, Logical, Bitwise, and Relational Operators": true,
                "Operator Precedence and Associativity": {
                    "___urlPath___": "operator_precedence_associativity",
                    "___md___": 345
                }
            },
            "Control Flow Statements": {
                "If-Else, Switch Case": true,
                "Loops (For, While, Do-While)": true,
                "Break and Continue": true
            },
            "OOP - Object-Oriented Programming": {
                "Fundamentals of OOP": {
                    "Principles of OOP (Abstraction, Encapsulation, Inheritance, Polymorphism)": true,
                    "Object vs Class in Java": true,
                    "State, Behavior, and Identity of an Object": true
                },
                "Encapsulation and Access Modifiers": {
                    "private, protected, public, default": true,
                    "Encapsulation in JavaBeans and DTOs": true,
                    "Best Practices for Data Hiding and Access Control": true
                },
                "Inheritance in Java": {
                    "Single vs Multilevel Inheritance": true,
                    "Method Overriding and the @Override Annotation": true,
                    "super Keyword and Constructor Chaining": true,
                    "Limitation of Multiple Inheritance in Java": true
                },
                "Polymorphism": {
                    "Compile-time (Method Overloading)": true,
                    "Run-time (Method Overriding and Dynamic Dispatch)": true,
                    "Polymorphic Parameters and Return Types": true,
                    "Covariant Return Types": true
                },
                "Abstraction": {
                    "Abstract Classes and Abstract Methods": true,
                    "Interfaces and Interface Inheritance": true,
                    "When to Use Abstract Classes vs Interfaces": true,
                    "Default and Static Methods in Interfaces": true
                },
                "Composition vs Inheritance": {
                    "Favor Composition Over Inheritance": true,
                    "Designing Flexible Systems Using Composition": true,
                    "Delegation Pattern in Java": true
                },
                "Constructors and Object Lifecycle": {
                    "Constructors Overloading": true,
                    "Copy Constructor in Java": true,
                    "Initialization Blocks (Static and Instance)": true,
                    "Object Creation and GC Lifecycle": true
                },
                "Object Class and Method Overriding": {
                    "equals() and hashCode() Contracts": true,
                    "toString(), clone(), finalize() Methods": true,
                    "Custom Implementations of equals() and hashCode()": true
                },
                "Immutable Objects": {
                    "How to Design Immutable Classes": true,
                    "Defensive Copies and Final Fields": true,
                    "Use-Cases in Concurrency and API Design": true
                },
                "Nested Classes and Inner Classes": {
                    "Static Nested vs Non-static Inner Classes": true,
                    "Local Classes and Anonymous Classes": true,
                    "Use Cases and Memory Implications": true
                },
                "OOP and Memory Model": {
                    "How Object Fields Are Stored in Memory": true,
                    "Object References and Heap Allocation": true,
                    "Shallow vs Deep Copy": true
                },
                "SOLID Principles in Java": {
                    "Single Responsibility Principle": true,
                    "Open/Closed Principle": true,
                    "Liskov Substitution Principle": true,
                    "Interface Segregation Principle": true,
                    "Dependency Inversion Principle": true
                },
                "Design Patterns in OOP": {
                    "Creational: Singleton, Builder, Factory, Prototype": true,
                    "Structural: Adapter, Decorator, Composite": true,
                    "Behavioral: Strategy, Observer, Command": true,
                    "Dependency Injection and IoC in Java": true
                },
                "OOP Design in Practice": {
                    "Low Coupling, High Cohesion": true,
                    "Law of Demeter (Least Knowledge Principle)": true,
                    "Designing Reusable and Extensible Classes": true,
                    "Encapsulation in Microservice DTO/API Models": true
                },
                "Anti-Patterns and Mistakes": {
                    "God Object, Circular Dependency": true,
                    "Excessive Inheritance (Inheritance Hell)": true,
                    "Violating Liskov and Interface Segregation": true
                },
                "Testing and OOP Design": {
                    "Testability and Dependency Injection": true,
                    "Mocking OOP Hierarchies": true,
                    "Testing Interfaces and Abstractions": true
                }
            }
            ,
            "Collections": {
                "Introduction to Collections Framework": {
                    "Need for Collections over Arrays": {
                        "___urlPath___": "need-for-collections-over-arrays",
                        "___md___": 1004
                    },
                    "Collections Framework Hierarchy": {
                        "___urlPath___": "collections-framework-hierarchy",
                        "___md___": 1005
                    },
                    "Java Collections Framework Cheatsheet": {
                        "___urlPath___": "java-collections-framework-cheatsheet",
                        "___md___": 1006
                    },
                    "Interfaces: Collection, List, Set, Map, Queue": {
                        "___urlPath___": "interfaces-collection-list-set-map-queue",
                        "___md___": 1007
                    },
                    "Difference Between Collection and Collections Class": {
                        "___urlPath___": "difference-between-collection-and-collections-class",
                        "___md___": 1008
                    }
                },
                "List Implementations": {
                    "___urlPath___": "list-implementations",
                    "ArrayList – Internal Structure, Resizing Strategy": {
                        "___urlPath___": "arraylist-internal-structure-resizing-strategy",
                        "___md___": 1009
                    },
                    "LinkedList – Node Structure, Memory Tradeoffs": {
                        "___urlPath___": "linkedlist-node-structure-memory-tradeoffs",
                        "___md___": 1010
                    },
                    "Vector and Stack – Legacy Behavior and Synchronization": {
                        "___urlPath___": "vector-and-stack-legacy-behavior-and-synchronization",
                        "___md___": 1135
                    },
                    "Performance Comparison – Insertion, Deletion, Access": {
                        "___urlPath___": "performance-comparison-insertion-deletion-access",
                        "___md___": 1136
                    }
                },
                "Set Implementations": {
                    "HashSet – Backed by HashMap, No Order Guarantee": true,
                    "LinkedHashSet – Maintains Insertion Order": true,
                    "TreeSet – Sorted Set using Red-Black Tree": true,
                    "Set vs List vs Map – Use Case Differences": true
                },
                "Map Implementations": {
                    "HashMap – Hashing Mechanism, Load Factor, Threshold": true,
                    "LinkedHashMap – Access Order vs Insertion Order": true,
                    "TreeMap – Sorted Keys via Red-Black Tree": true,
                    "Hashtable – Legacy and Thread Safety": true,
                    "EnumMap and IdentityHashMap – Niche Use Cases": true,
                    "Map Internal Working – equals(), hashCode(), collisions": true
                },
                "Queue and Deque": {
                    "___urlPath___": "queue-and-deque",
                    "PriorityQueue – Min/Max Heap Implementation": {
                        "___urlPath___": "priorityqueue-min-max-heap",
                        "___md___": 1003
                    },
                    "ArrayDeque vs LinkedList as Deques": true,
                    "BlockingQueue and Its Variants": true,
                    "Deque vs Stack vs Queue Use-Cases": true
                },
                "Collections Utility Class": {
                    "___urlPath___": "collections-utility-class",
                    "Collections.sort(), reverse(), shuffle(), min(), max()": {
                        "___urlPath___": "collection-sort-reverse-shuffle-min-max",
                        "___md___": 974
                    },
                    "Collections.unmodifiableList() and Defensive Copying": true,
                    "Singleton Collections and Empty Collections": true,
                    "Using Comparator with Collections.sort()": true
                },
                "Comparator and Comparable": {
                    "Comparable Interface – Natural Ordering": true,
                    "Comparator Interface – Custom Ordering": true,
                    "Chaining Comparators – thenComparing()": true,
                    "Sorting Complex Objects with Streams and Comparators": true
                },
                "Iteration Techniques": {
                    "Iterator and ListIterator – Differences and Use": {
                        "___urlPath___": "iterator-and-listiterator-difference-and-use",
                        "___md___": 975
                    },
                    "Enhanced for-loop vs Iterator vs Streams": true,
                    "fail-fast vs fail-safe Iterators": true
                },
                "Generics with Collections": {
                    "Using Wildcards – <?>, <? extends T>, <? super T>": true,
                    "Type Safety and Heap Pollution": true,
                    "Why Arrays and Generics Don’t Mix": true
                },
                "Concurrent Collections": {
                    "ConcurrentHashMap – Segmented Buckets, Thread Safety": {
                        "___urlPath___": "concurrenthashmap",
                        "___md___": 973
                    },
                    "CopyOnWriteArrayList – Use Cases and Cost": true,
                    "BlockingQueue, ConcurrentSkipListMap": true,
                    "Synchronized Collections vs Concurrent Collections": true
                },
                "Performance and Big-O Analysis": {
                    "Time Complexity of Key Operations": true,
                    "Impact of Initial Capacity and Load Factor": true,
                    "Best/Worst/Average Case for get(), put(), remove()": true,
                    "Avoiding Resizing Bottlenecks and Rehashing": true
                },
                "Memory Considerations": {
                    "Load Factor and Internal Array Sizing": true,
                    "Memory Waste in Sparse Maps": true,
                    "RetainAll, RemoveAll, Clear() – GC Implications": true
                },
                "Best Practices and Real-World Scenarios": {
                    "Choosing the Right Collection for the Task": true,
                    "Using Immutable Collections in Multi-threaded Apps": true,
                    "Avoiding Memory Leaks with Static Maps": true,
                    "Defensive Copying of Collections in APIs": true
                },
                "Collections and Streams": {
                    "Using Streams with Lists, Sets, Maps": true,
                    "Collectors.toMap(), groupingBy(), partitioningBy()": true,
                    "Sorting, Filtering, Reducing with Collections": true
                },
                "Testing and Debugging Collections": {
                    "Testing Collection Equality and Contents": true,
                    "Debugging Concurrent Modification Errors": true,
                    "Using Guava or Apache Commons for Utility Collections": true
                }
            }
            ,
            "Exception Handling": {
                "___urlPath___": "exception-handling",
                "Fundamentals of Exceptions": {
                    "___urlPath___": "fundamentals-of-exceptions",
                    "What is an Exception?": {
                        "___urlPath___": "what-is-an-exception",
                        "___md___": 1107
                    },
                    "Types of Errors – Syntax Error vs Runtime Error": {
                        "___urlPath___": "types-of-errors-syntax-error-vs-runtime-error",
                        "___md___": 1108
                    },
                    "Throwable Hierarchy – Error, Exception, RuntimeException": {
                        "___urlPath___": "throwable-hierarchy-error-exception-runtimeexception",
                        "___md___": 1109
                    },
                    "Checked vs Unchecked Exceptions": {
                        "___urlPath___": "checked-vs-unchecked-exceptions",
                        "___md___": 1110
                    }
                },
                "Built-in Exception Classes": {
                    "Common Checked Exceptions (IOException, SQLException)": true,
                    "Common Unchecked Exceptions (NullPointerException, IllegalArgumentException)": true,
                    "Error Subtypes (StackOverflowError, OutOfMemoryError)": true
                },
                "Handling Exceptions": {
                    "try-catch-finally Syntax and Flow": true,
                    "Multiple Catch Blocks and Exception Hierarchy": true,
                    "Exception Propagation and Call Stack": true,
                    "Re-throwing Exceptions (`throw`, `throws`)": true,
                    "Nested try-catch and try-with-resources": true
                },
                "Custom Exceptions": {
                    "___urlPath___": "custom-exceptions",
                    "Creating User-Defined Exception Classes": true,
                    "Extending Exception vs RuntimeException": true,
                    "Best Practices for Naming and Design": true
                },
                "Exception Flow and Best Practices": {
                    "When to Catch vs When to Let It Propagate": true,
                    "Catching Specific vs Generic Exceptions": true,
                    "Never Swallow Exceptions Silently": true,
                    "Avoiding `catch (Exception e) {}` Anti-pattern": true
                },
                "Checked vs Unchecked – Design Principles": {
                    "Use-Cases for Checked Exceptions": true,
                    "When to Prefer Unchecked Exceptions": true,
                    "API Design Tradeoffs (Java IO vs Java NIO)": true,
                    "Exception Transparency and Method Contracts": true
                },
                "Exception Handling in Functional Style": {
                    "Handling Exceptions with Lambdas and Streams": true,
                    "Using `Optional`, `try-catch` inside lambdas": true,
                    "Functional Interfaces with Exception Wrappers": true
                },
                "Advanced Exception Concepts": {
                    "Suppressed Exceptions and Multi-Catch": true,
                    "try-with-resources and AutoCloseable": true,
                    "Exception Chaining (`initCause`, Constructor Overloading)": true,
                    "Finalization and Resource Cleanup": true
                },
                "Logging and Monitoring Exceptions": {
                    "Logging Exceptions Correctly (Message + Stack Trace)": true,
                    "SLF4J/Log4j Best Practices": true,
                    "Correlation IDs and Root Cause Tracing": true
                },
                "Performance and Reliability Considerations": {
                    "Cost of Exceptions – Don’t Use for Flow Control": true,
                    "Avoid Catching Exceptions Inside Tight Loops": true,
                    "Impact on JIT and Optimization": true
                },
                "Exception Handling in Multithreaded Environments": {
                    "Handling Exceptions in Threads and Executors": true,
                    "ThreadPoolExecutor and UncaughtExceptionHandler": true,
                    "CompletableFuture and Exceptionally()": true,
                    "Error Propagation in Fork/Join Tasks": true
                },
                "Real-World Use Cases and Patterns": {
                    "Designing Exception Hierarchies in Large Systems": true,
                    "Global Exception Handling in Spring Boot": true,
                    "Fail-Fast vs Fail-Safe Exception Design": true,
                    "Recoverable vs Unrecoverable Exceptions": true
                },
                "Testing Exception Handling": {
                    "Unit Testing with `assertThrows()` in JUnit": true,
                    "Testing Exception Messages and Causes": true,
                    "Mocking Exceptions in Unit Tests (Mockito)": true
                }
            }

        },
        "Functional Programming in Java": {
            "Fundamentals of Functional Programming": {
                "Imperative vs Declarative Paradigm": true,
                "Pure Functions and Referential Transparency": true,
                "Immutability and Side Effects": true,
                "First-Class and Higher-Order Functions": true
            },
            "Lambdas and Method References": {
                "Lambda Syntax and Type Inference": true,
                "Functional Interfaces and SAM Types": true,
                "Capturing Variables (Effectively Final)": true,
                "Method References (Static, Instance, Constructor)": true
            },
            "Built-in Functional Interfaces": {
                "Predicate, Function, Consumer, Supplier": true,
                "BiPredicate, BiFunction, BiConsumer": true,
                "UnaryOperator and BinaryOperator": true,
                "Chaining and Composition (andThen, compose)": true
            },
            "Streams API – Functional Collections": {
                "Stream Creation and Intermediate Operations": true,
                "Filter, Map, FlatMap": true,
                "Collect, Reduce, GroupingBy, PartitioningBy": true,
                "Short-Circuiting (limit, findFirst, anyMatch)": true,
                "Lazy Evaluation and Pipelines": true,
                "Parallel Streams – Performance and Pitfalls": true
            },
            "Optional API – Monadic Behavior": {
                "Creating and Using Optionals": true,
                "map(), flatMap(), filter(), orElse* methods": true,
                "Avoiding NullPointerException Functionally": true,
                "Optional as a Monadic Wrapper": true
            },
            "Advanced Functional Concepts": {
                "Function Currying and Partial Application": true,
                "Closures and Scope": true,
                "Lazy Evaluation using Supplier": true,
                "Creating Custom Functional Interfaces": true,
                "Function Memoization Basics": true
            },
            "Functional Design Patterns in Java": {
                "Strategy Pattern using Lambdas": true,
                "Command Pattern as First-Class Functions": true,
                "Builder with Fluent APIs": true,
                "Pipeline Pattern with Streams": true
            },
            "Best Practices and Pitfalls": {
                "When NOT to use Functional Style": true,
                "Avoiding Overuse of Streams": true,
                "Readability vs Conciseness": true,
                "Debugging Functional Code": true
            },
            "Real-World Use Cases": {
                "Functional Error Handling with Optional": true,
                "Declarative Data Processing Pipelines": true,
                "Combining Streams and Collectors for Aggregation": true,
                "Functional State Machines or Event Systems": true
            },
            "Testing Functional Code": {
                "Property-Based Testing with JUnit": true,
                "Mocking Functional Interfaces": true,
                "Testing Pure vs Impure Functions": true
            }
        },
        "Generics": {
            "___urlPath___": "generics",
            "Introduction to Generics": {
                "___urlPath___": "introduction-to-generics",
                "Why Generics? Type Safety and Code Reuse": {
                    "___urlPath___": "why-generics",
                    "___md___": 987
                },
                "Raw Types vs Parameterized Types": {
                    "___urlPath___": "raw-types-vs-parameterized-types",
                    "___md___": 988
                },
                "Generic Classes and Interfaces": {
                    "___urlPath___": "generic-classes-and-interfaces",
                    "___md___": 989
                },
                "Type Inference and Diamond Operator": true
            },
            "Generic Methods": {
                "Defining Generic Methods": true,
                "Type Inference in Methods": true,
                "Method Overloading with Generics": true,
                "Static Methods and Type Parameters": true
            },
            "Bounded Type Parameters": {
                "Upper Bounds – extends Keyword": true,
                "Lower Bounds – super Keyword": true,
                "Multiple Bounds (T extends Interface1 & Interface2)": true,
                "Use-Cases of Upper vs Lower Bounds": true
            },
            "Wildcards in Generics": {
                "Unbounded Wildcards – <?>": true,
                "Upper Bounded Wildcards – <? extends T>": true,
                "Lower Bounded Wildcards – <? super T>": true,
                "Wildcard Capture Problem": true,
                "PECS Principle (Producer Extends, Consumer Super)": true
            },
            "Generic Type Erasure": {
                "What is Type Erasure?": true,
                "How Generics Work at Runtime": true,
                "Impact on Overloading and Casting": true,
                "Why instanceof and new T() Are Not Allowed": true
            },
            "Generics and Collections": {
                "Using Generics with Collections Framework": true,
                "Covariant and Contravariant Collection Types": true,
                "Arrays vs Generic Collections – Key Differences": true
            },
            "Limitations and Pitfalls of Generics": {
                "Generic Arrays Creation Prohibited": true,
                "Type Inference Breakdowns in Complex APIs": true,
                "Bridge Methods and Synthetic Code (Compiler-Generated)": true,
                "Heap Pollution and SuppressWarnings": true
            },
            "Advanced Topics and Enterprise Edge": {
                "Recursive Generics (T extends Comparable<T>)": true,
                "Self-Bounded Types and CRTP": true,
                "Generic Singleton Factory Pattern": true,
                "Functional Interfaces with Generics (e.g. Predicate<T>)": true,
                "Generics with Reflection and Annotations": true
            },
            "Real-World Use Cases and Design Patterns": {
                "Generic DAOs and Repositories": true,
                "Fluent Builders with Generics": true,
                "Strategy and Visitor Pattern Using Generics": true,
                "Creating Reusable Utility Libraries (e.g., Pair<T, U>)": true
            },
            "Testing and Debugging Generics": {
                "Common Compile-Time Errors and Fixes": true,
                "Using @SuppressWarnings Carefully": true,
                "Testing Covariant and Contravariant Behavior": true
            }
        },
        "Advanced Java": {
            "___urlPath___": "advanced-java",
            "Java I/O": {
                "File Handling (Reading, Writing, and Manipulating Files)": true,
                "Serialization and Deserialization": true,
                "Buffered Streams and Readers": true
            },
            "Concurrency and Multithreading": {
                "___urlPath___": "concurrency-and-multithreading",
                "Creating and Managing Threads": {
                    "___urlPath___": "creating-and-managing-threads",
                    "Introduction to Threads": {
                        "___urlPath___": "introduction-to-threads",
                        "___md___": 201
                    },
                    "Creating Threads": {
                        "___urlPath___": "creating-threads",
                        "Using Thread Class": {
                            "___urlPath___": "using-thread-class",
                            "___md___": 202
                        },
                        "Using Runnable Interface": {
                            "___urlPath___": "using-runnable-interface",
                            "___md___": 203
                        }
                    },
                    "Thread Management": {
                        "___urlPath___": "thread-management",
                        "Starting Threads": {
                            "___urlPath___": "starting-threads",
                            "___md___": 204
                        },
                        "Controlling Execution": {
                            "___urlPath___": "controlling-execution",
                            "___md___": 205
                        }
                    },
                    "Thread Priority": {
                        "___urlPath___": "thread-priority",
                        "Setting Priority": {
                            "___urlPath___": "setting-priority",
                            "___md___": 206
                        },
                        "Impact on Scheduling": {
                            "___urlPath___": "impact-on-scheduling",
                            "___md___": 207
                        }
                    },
                    "Daemon Threads": {
                        "___urlPath___": "daemon-threads",
                        "What are Daemon Threads?": {
                            "___urlPath___": "what-are-daemon-threads",
                            "___md___": 208
                        },
                        "Setting Daemon Threads": {
                            "___urlPath___": "setting-daemon-threads",
                            "___md___": 209
                        }
                    }
                },
                "Thread Synchronization": {
                    "___urlPath___": "thread-synchronization",
                    "Need for Synchronization": {
                        "___urlPath___": "need-for-synchronization",
                        "Understanding Race Conditions": {
                            "___urlPath___": "understanding-race-conditions",
                            "___md___": 210
                        },
                        "Shared Resource Issues": {
                            "___urlPath___": "shared-resource-issues",
                            "___md___": 211
                        }
                    },
                    "Synchronized Methods and Blocks": {
                        "___urlPath___": "synchronized-methods-and-blocks",
                        "Using synchronized Keyword": {
                            "___urlPath___": "using-synchronized-keyword",
                            "___md___": 212
                        },
                        "Static Synchronization": {
                            "___urlPath___": "static-synchronization",
                            "___md___": 213
                        },
                        "Object-Level vs Class-Level Locks": {
                            "___urlPath___": "object-vs-class-level-locks",
                            "___md___": 214
                        }
                    },
                    "Locks and Conditions": {
                        "___urlPath___": "locks-and-conditions",
                        "ReentrantLock": {
                            "___urlPath___": "reentrant-lock",
                            "___md___": 215
                        },
                        "Condition Variables": {
                            "___urlPath___": "condition-variables",
                            "___md___": 216
                        },
                        "tryLock() Method": {
                            "___urlPath___": "try-lock-method",
                            "___md___": 217
                        }
                    },
                    "Inter-thread Communication": {
                        "___urlPath___": "inter-thread-communication",
                        "wait() and notify() Methods": {
                            "___urlPath___": "wait-and-notify-methods",
                            "___md___": 218
                        },
                        "notifyAll() Method": {
                            "___urlPath___": "notify-all-method",
                            "___md___": 219
                        },
                        "Thread Cooperation": {
                            "___urlPath___": "thread-cooperation",
                            "___md___": 220
                        }
                    }
                },
                "Executors Framework": {
                    "___urlPath___": "executors-framework",
                    "Introduction to Executors": {
                        "___urlPath___": "introduction-to-executors",
                        "___md___": 267
                    },
                    "Using ExecutorService": {
                        "___urlPath___": "using-executor-service",
                        "FixedThreadPool": {
                            "___urlPath___": "fixed-thread-pool",
                            "___md___": 268
                        },
                        "CachedThreadPool": {
                            "___urlPath___": "cached-thread-pool",
                            "___md___": 269
                        },
                        "ScheduledThreadPool": {
                            "___urlPath___": "scheduled-thread-pool",
                            "___md___": 270
                        }
                    },
                    "Shutting Down Executors": {
                        "___urlPath___": "shutting-down-executors",
                        "shutdown() and shutdownNow()": {
                            "___urlPath___": "shutdown-and-shutdown-now",
                            "___md___": 225
                        },
                        "awaitTermination()": {
                            "___urlPath___": "await-termination",
                            "___md___": 226
                        }
                    }
                },
                "Callable, Future, and Fork/Join Framework": {
                    "___urlPath___": "callable-future-and-fork-join",
                    "Introduction": {
                        "___urlPath___": "introduction",
                        "___md___": 271
                    },
                    "Callable and Future": {
                        "___urlPath___": "callable-and-future",
                        "Difference from Runnable": {
                            "___urlPath___": "difference-from-runnable",
                            "___md___": 272
                        },
                        "Submitting Callable Tasks": {
                            "___urlPath___": "submitting-callable-tasks",
                            "___md___": 228
                        },
                        "Retrieving Results with Future": {
                            "___urlPath___": "retrieving-results-with-future",
                            "___md___": 229
                        },
                        "Handling Exceptions": {
                            "___urlPath___": "handling-exceptions",
                            "___md___": 230
                        }
                    },

                    "Fork/Join Framework": {
                        "___urlPath___": "fork-join-framework",
                        "Introduction to Fork/Join": {
                            "___urlPath___": "introduction-to-fork-join",
                            "___md___": 274
                        },
                        "RecursiveTask and RecursiveAction": {
                            "___urlPath___": "recursive-task-and-recursive-action",
                            "___md___": 232
                        },
                        "Work-Stealing Algorithm": {
                            "___urlPath___": "work-stealing-algorithm",
                            "___md___": 275
                        },
                        "Example of Fork/Join": {
                            "___urlPath___": "example-of-fork-join",
                            "___md___": 234
                        }
                    },
                    "CompletableFuture": {
                        "___urlPath___": "completable-future",
                        "Introduction to CompletableFuture": {
                            "___urlPath___": "introduction-to-completable-future",
                            "___md___": 273
                        },
                        "Creating Asynchronous Tasks": {
                            "___urlPath___": "creating-asynchronous-tasks",
                            "runAsync() and supplyAsync()": {
                                "___urlPath___": "run-async-and-supply-async",
                                "___md___": 236
                            }
                        },
                        "Chaining Tasks": {
                            "___urlPath___": "chaining-tasks",
                            "thenApply() and thenAccept()": {
                                "___urlPath___": "then-apply-and-then-accept",
                                "___md___": 237
                            },
                            "thenCompose() and thenCombine()": {
                                "___urlPath___": "then-compose-and-then-combine",
                                "___md___": 238
                            }
                        },
                        "Error Handling": {
                            "___urlPath___": "error-handling",
                            "exceptionally() and handle()": {
                                "___urlPath___": "exceptionally-and-handle",
                                "___md___": 239
                            }
                        },
                        "Combining Multiple Futures": {
                            "___urlPath___": "combining-multiple-futures",
                            "allOf() and anyOf()": {
                                "___urlPath___": "all-of-and-any-of",
                                "___md___": 240
                            }
                        },
                        "Examples of CompletableFuture": {
                            "___urlPath___": "examples-of-completable-future",
                            "___md___": 241
                        }
                    },
                },
                "Advanced": {
                    "Thread Safety and Design Principles": {
                        "Thread Confinement": true,
                        "Immutability in Multithreaded Design": true,
                        "Using Atomic Variables (`AtomicInteger`, `AtomicReference`)": true,
                        "CAS (Compare-And-Swap) and ABA Problem": true
                    },
                    "High-Level Concurrency Utilities": {
                        "Concurrent Collections (`ConcurrentHashMap`, `CopyOnWriteArrayList`)": true,
                        "Blocking Queues (`LinkedBlockingQueue`, `ArrayBlockingQueue`)": true,
                        "Semaphore, CountDownLatch, CyclicBarrier": true,
                        "Phaser and Exchanger": true
                    },
                    "Deadlock, Starvation, Livelock": {
                        "Detecting and Avoiding Deadlocks": true,
                        "Difference Between Starvation and Livelock": true,
                        "Deadlock Prevention Strategies": true
                    },
                    "Concurrency Patterns and Best Practices": {
                        "Producer-Consumer Using BlockingQueue": true,
                        "Reader-Writer Problem": true,
                        "Thread Pools and Task Queuing Strategies": true,
                        "Throttling and Rate Limiting with Semaphore": true
                    },
                    "Virtual Threads and Structured Concurrency (Java 21+)": {
                        "Introduction to Virtual Threads": true,
                        "Differences Between Platform and Virtual Threads": true,
                        "StructuredTaskScope and Fork/Join Replacement": true,
                        "Thread-per-Request at Scale with Project Loom": true
                    },
                    "Concurrency Testing and Debugging": {
                        "Writing Tests for Race Conditions": true,
                        "Stress Testing with JCStress": true,
                        "Thread Dump Analysis": true,
                        "Tools: JFR, VisualVM, async-profiler": true
                    }
                }
            },
            "Networking in Java": {
                "Sockets (TCP/UDP)": true,
                "HTTP Client in Java": true,
                "Building a Simple Chat Application": true
            },
            "Java 8 Features": {
                "___urlPath___": "java-8-features",
                "Lambda Expressions": {
                    "___urlPath___": "lambda-expressions",
                    "Functional Interfaces Overview": {
                        "___urlPath___": "functional-interfaces-overview",
                        "___md___": 232
                    },
                    "Method References": {
                        "___urlPath___": "method-references",
                        "___md___": 233
                    },
                    "Lambda Syntax and Scope": {
                        "___urlPath___": "lambda-syntax-and-scope",
                        "___md___": 234
                    },
                    "Comparator Enhancements": {
                        "___urlPath___": "comparator-enhancements",
                        "___md___": 235
                    }
                },
                "Streams API": {
                    "___urlPath___": "streams-api",
                    "Stream Creation": {
                        "___urlPath___": "stream-creation",
                        "___md___": 236
                    },
                    "Filter, Map, Reduce Operations": {
                        "___urlPath___": "filter-map-reduce-operations",
                        "___md___": 237
                    },
                    "Parallel Streams": {
                        "___urlPath___": "parallel-streams",
                        "___md___": 238
                    },
                    "ForEach Operation": {
                        "___urlPath___": "foreach-operation",
                        "___md___": 239
                    },
                    "Collectors": {
                        "___urlPath___": "collectors",
                        "Introduction to Collectors": {
                            "___urlPath___": "introduction-to-collectors",
                            "___md___": 242
                        },
                        "Grouping": {
                            "___urlPath___": "grouping",
                            "___md___": 240
                        },
                        "Partitioning": {
                            "___urlPath___": "partitioning",
                            "___md___": 241
                        }
                    }
                },
                "Functional Interfaces": {
                    "Predicate, Consumer, Function, Supplier": true,
                    "BiPredicate, BiConsumer, BiFunction": true
                },
                "Optional Class": {
                    "___urlPath___": "optional-class",
                    "Introduction": {
                        "___urlPath___": "introduction",
                        "___md___": 265
                    },
                    "Creating and Using Optionals": true,
                    "Mapping and Filtering Optionals": true,
                    "Handling Null Values": true,
                    "FlatMap with Optionals": true
                },
                "Default Methods in Interfaces": {
                    "Adding Default Methods": true,
                    "Resolving Multiple Inheritance": true
                },
                "Date and Time API": {
                    "Creating and Manipulating Dates": true,
                    "Formatting and Parsing Dates": true,
                    "Period and Duration": true
                },
                "Other Enhancements": {
                    "New Features in Collections": true,
                    "Nashorn JavaScript Engine": true,
                    "Base64 Encoding and Decoding": true
                }
            },

            "Java 11 Features": {
                "___urlPath___": "java-11-features",
                "String Enhancements": {
                    "___urlPath___": "string-enhancements",
                    "isBlank(), strip(), stripLeading(), stripTrailing()": true,
                    "lines() and repeat() Methods": true
                },
                "Local-Variable Syntax for Lambda Parameters": {
                    "___urlPath___": "lambda-parameter-var",
                    "Using var in Lambda Parameters": true,
                    "Benefits and Limitations": true
                },
                "HTTP Client API (Standardized)": {
                    "___urlPath___": "http-client-api",
                    "Introduction to java.net.http": true,
                    "Synchronous and Asynchronous Requests": true,
                    "Sending GET and POST Requests": true,
                    "Handling Responses and Errors": true,
                    "Working with BodyHandlers and BodyPublishers": true
                },
                "Collection.toArray(IntFunction) Enhancement": {
                    "___urlPath___": "collection-toarray-enhancement",
                    "Old vs New toArray Methods": true,
                    "Usage Examples with Streams": true
                },
                "Files.readString() and writeString()": {
                    "___urlPath___": "files-read-write-string",
                    "Reading Files as Strings": true,
                    "Writing Strings to Files": true
                },
                "Optional.isEmpty()": {
                    "___urlPath___": "optional-isempty",
                    "Replacing !isPresent() with isEmpty()": true,
                    "Code Cleanliness and Readability": true
                },
                "Pattern Matching and Nest-Based Access (Preview Features)": {
                    "___urlPath___": "preview-features",
                    "Pattern Matching Overview": true,
                    "Nest-Based Access Control Explanation": true,
                    "Using --enable-preview Flag": true
                },
                "Launch Single-File Source-Code Programs": {
                    "___urlPath___": "single-file-programs",
                    "Writing and Running Without Compilation": true,
                    "Examples and Limitations": true
                },
                "Flight Recorder and Mission Control": {
                    "___urlPath___": "flight-recorder",
                    "Monitoring Performance with JFR": true,
                    "Integration with Mission Control": true
                },
                "Garbage Collector Improvements": {
                    "___urlPath___": "gc-improvements",
                    "Introduction to ZGC (Experimental)": true,
                    "Low-Latency GC Goals": true,
                    "Epsilon GC (No-Op GC)": true
                },
                "Removed and Deprecated Features": {
                    "___urlPath___": "removed-deprecated-features",
                    "Java EE and CORBA Modules Removed": true,
                    "Deprecated APIs and Alternatives": true
                }
            },

            "Java 17 Features": {
                "___urlPath___": "java-17-features",

                "Sealed Classes": {
                    "___urlPath___": "sealed-classes",
                    "What Are Sealed Classes?": true,
                    "Permits Keyword and Class Hierarchies": true,
                    "Use Cases and Benefits": true
                },

                "Pattern Matching for instanceof": {
                    "___urlPath___": "pattern-matching-instanceof",
                    "Before vs After Example": true,
                    "Simplifying Type Casting": true,
                    "Best Practices": true
                },

                "Switch Expressions (Standardized)": {
                    "___urlPath___": "switch-expressions",
                    "Arrow Syntax in Switch": true,
                    "Yield Keyword Usage": true,
                    "Returning Values from Switch": true
                },

                "Text Blocks (Standardized)": {
                    "___urlPath___": "text-blocks",
                    "Writing Multi-Line Strings": true,
                    "Syntax, Formatting, and Indentation Rules": true,
                    "Use Cases and Limitations": true
                },

                "Records (Standardized)": {
                    "___urlPath___": "records",
                    "Creating Immutable Data Classes": true,
                    "Auto-Generated Constructors and Methods": true,
                    "Records vs Lombok": true
                },

                "New Interface Methods": {
                    "___urlPath___": "new-interface-methods",
                    "List.toList() from Stream": true,
                    "Map.ofEntries(), Stream.mapMulti()": true
                },

                "Strong Encapsulation of JDK Internals": {
                    "___urlPath___": "strong-encapsulation",
                    "Access Restrictions to sun.* Packages": true,
                    "--add-exports and Migration Steps": true
                },

                "Foreign Function & Memory API (Incubator)": {
                    "___urlPath___": "foreign-function-api",
                    "Calling Native Code from Java": true,
                    "Replacing JNI with Safer Alternatives": true
                },

                "Enhanced Pseudo-Random Number Generators": {
                    "___urlPath___": "random-generator-enhancements",
                    "New Interfaces and Implementations": true,
                    "Jumpable and Splittable Generators": true
                },

                "Deprecations and Removals in Java 17": {
                    "___urlPath___": "deprecated-removed-features",
                    "Applet API Deprecation": true,
                    "Removal of Experimental AOT and JIT Compilers": true
                },

                "Other Enhancements": {
                    "___urlPath___": "misc-enhancements",
                    "JEP 356: Enhanced Datagram Transport": true,
                    "JEP 382: New macOS Rendering Pipeline": true
                }
            },
            "Java 21 Features": {
                "___urlPath___": "java-21-features",

                "String Templates (Preview)": {
                    "___urlPath___": "string-templates",
                    "Simplified String Interpolation": true,
                    "STR Template Processor": true,
                    "Custom Processors and Use Cases": true
                },

                "Record Patterns (Standardized)": {
                    "___urlPath___": "record-patterns",
                    "Destructuring Record Objects": true,
                    "Combining with instanceof and switch": true
                },

                "Pattern Matching for switch (Standardized)": {
                    "___urlPath___": "pattern-matching-switch",
                    "Case Labels with Type Checks": true,
                    "Guarded Patterns": true,
                    "Exhaustiveness Checks": true
                },

                "Virtual Threads (Standardized)": {
                    "___urlPath___": "virtual-threads",
                    "Lightweight Threads via Project Loom": true,
                    "Thread Builders and Executors": true,
                    "Scaling Concurrency in Java": true
                },

                "Sequenced Collections": {
                    "___urlPath___": "sequenced-collections",
                    "Introduction to SequencedCollection Interface": true,
                    "SequencedSet, SequencedMap Overview": true,
                    "Ordering: First, Last, Reversed Views": true
                },

                "Unnamed Patterns and Variables (Preview)": {
                    "___urlPath___": "unnamed-patterns",
                    "Using _ (underscore) in Patterns": true,
                    "Cleaner and Intentional Ignoring of Data": true
                },

                "Scoped Values (Preview)": {
                    "___urlPath___": "scoped-values",
                    "Alternative to ThreadLocal": true,
                    "Passing Immutable Data to Threads": true
                },

                "Foreign Function & Memory API (Third Preview)": {
                    "___urlPath___": "foreign-function-memory-api",
                    "Interfacing with Native Libraries": true,
                    "MemorySegment and MemoryLayout APIs": true,
                    "Replacing Unsafe and JNI": true
                },

                "Structured Concurrency (Preview)": {
                    "___urlPath___": "structured-concurrency",
                    "Managing Concurrent Tasks as Units": true,
                    "ScopedTask, Shutdown-on-Failure Model": true
                },

                "Deprecations and Removals in Java 21": {
                    "___urlPath___": "deprecated-removed-java21",
                    "Final Removal of SecurityManager": true,
                    "Removed Legacy Garbage Collectors": true,
                    "Deprecated APIs and Migration Notes": true
                }
            }



        },
        "Web Development with Java": {
            "Java Servlets": {
                "Basics of Servlets": true,
                "Servlet Lifecycle": true,
                "Handling Requests and Responses": true,
                "Session Management": true
            },
            "Java Server Pages (JSP)": {
                "Basics of JSP": true,
                "JSP Lifecycle": true,
                "JSTL and Expression Language": true
            },
            "RESTful Web Services": {
                "___urlPath___": "restful-web-services",
                "Building REST APIs with JAX-RS": {
                    "___urlPath___": "building-rest-apis-with-jax-rs",
                    "___md___": 990
                },
                "JSON and XML Handling": true,
                "Implementing CRUD Operations": true,
                "API Versioning and Documentation": true
            },
            "Spring Framework": {
                "Core Concepts (Dependency Injection, IoC Container)": true,
                "Spring Boot for Rapid Development": true,
                "Spring MVC for Web Applications": true,
                "Spring Security for Authentication and Authorization": true,
                "Building Microservices with Spring Cloud": true
            }
        },
        "Database Integration": {
            "Connecting Java with Databases": {
                "JDBC Basics": true,
                "Writing SQL Queries in Java": true,
                "Using Connection Pooling": true
            },
            "Object-Relational Mapping (ORM)": {
                "Introduction to Hibernate": true,
                "Configuring Hibernate with Java": true,
                "Hibernate Annotations": true,
                "Performing CRUD Operations with Hibernate": true
            }
        },
        "Java Design Patterns": {
            "Creational Patterns": {
                "Singleton": true,
                "Factory": true,
                "Builder": true
            },
            "Structural Patterns": {
                "Adapter": true,
                "Composite": true,
                "Decorator": true
            },
            "Behavioral Patterns": {
                "Observer": true,
                "Strategy": true,
                "Command": true
            }
        },
        "Testing and Debugging in Java": {
            "Unit Testing": {
                "Writing Tests with JUnit 5": true,
                "Mocking with Mockito": true
            },
            "Debugging": {
                "Debugging Tools and Techniques": true,
                "Common Errors and Debugging Best Practices": true
            }
        },
        "Build Tools and Deployment": {
            "Build Automation": {
                "Maven (Dependencies, Lifecycle, Plugins)": true,
                "Gradle (Tasks, Dependencies)": {
                    "___urlPath___": "gradle",
                    "Introduction to Gradle": {
                        "___urlPath___": "introduction-to-gradle",
                        "___md___": 489
                    },
                    "Gradle vs Maven vs Ant": {
                        "___urlPath___": "gradle-vs-maven-vs-ant",
                        "___md___": 302
                    },
                    "Gradle Installation & Setup": {
                        "___urlPath___": "gradle-installation-setup",
                        "Installing Gradle": {
                            "___urlPath___": "installing-gradle",
                            "___md___": 303
                        },
                        "Setting up Environment Variables": {
                            "___urlPath___": "setting-up-environment",
                            "___md___": 304
                        },
                        "Verifying Installation": {
                            "___urlPath___": "verifying-installation",
                            "___md___": 305
                        }
                    },
                    "Gradle Build Lifecycle": {
                        "___urlPath___": "gradle-build-lifecycle",
                        "Phases of Gradle Build": {
                            "___urlPath___": "phases-of-build",
                            "___md___": 306
                        },
                        "Tasks and Dependencies": {
                            "___urlPath___": "tasks-and-dependencies",
                            "___md___": 307
                        }
                    },
                    "Gradle Project Structure": {
                        "___urlPath___": "gradle-project-structure",
                        "Single vs Multi-Project Builds": {
                            "___urlPath___": "single-vs-multi-project",
                            "___md___": 308
                        },
                        "Settings.gradle vs build.gradle": {
                            "___urlPath___": "settings-vs-build-gradle",
                            "___md___": 309
                        }
                    },
                    "Gradle Build Scripts": {
                        "___urlPath___": "gradle-build-scripts",
                        "Using Groovy DSL": {
                            "___urlPath___": "groovy-dsl",
                            "___md___": 310
                        },
                        "Using Kotlin DSL": {
                            "___urlPath___": "kotlin-dsl",
                            "___md___": 311
                        },
                        "Defining Custom Tasks": {
                            "___urlPath___": "custom-tasks",
                            "___md___": 312
                        }
                    },
                    "Dependency Management": {
                        "___urlPath___": "dependency-management",
                        "Repositories": {
                            "___urlPath___": "repositories",
                            "___md___": 313
                        },
                        "Declaring Dependencies": {
                            "___urlPath___": "declaring-dependencies",
                            "___md___": 314
                        },
                        "Dependency Configurations": {
                            "___urlPath___": "dependency-configurations",
                            "___md___": 315
                        },
                        "Transitive Dependency Handling": {
                            "___urlPath___": "transitive-dependencies",
                            "___md___": 316
                        }
                    },
                    "Gradle Plugins": {
                        "___urlPath___": "gradle-plugins",
                        "Core Plugins": {
                            "___urlPath___": "core-plugins",
                            "___md___": 317
                        },
                        "Third-party Plugins": {
                            "___urlPath___": "third-party-plugins",
                            "___md___": 318
                        },
                        "Custom Plugin Development": {
                            "___urlPath___": "custom-plugins",
                            "___md___": 319
                        }
                    },
                    "Testing with Gradle": {
                        "___urlPath___": "testing-with-gradle",
                        "JUnit & TestNG Integration": {
                            "___urlPath___": "junit-testng-integration",
                            "___md___": 320
                        },
                        "Test Reports": {
                            "___urlPath___": "test-reports",
                            "___md___": 321
                        }
                    },
                    "Gradle & CI/CD": {
                        "___urlPath___": "gradle-ci-cd",
                        "Integrating with Jenkins": {
                            "___urlPath___": "jenkins-integration",
                            "___md___": 322
                        },
                        "Integrating with GitHub Actions": {
                            "___urlPath___": "github-actions",
                            "___md___": 323
                        }
                    },
                    "Gradle for Java Projects": {
                        "___urlPath___": "gradle-java",
                        "Java Application Plugin": {
                            "___urlPath___": "java-plugin",
                            "___md___": 324
                        },
                        "Build and Run Java Apps": {
                            "___urlPath___": "build-run-java",
                            "___md___": 325
                        },
                        "Jar and Fat Jar Creation": {
                            "___urlPath___": "jar-fatjar",
                            "___md___": 326
                        }
                    },
                    "Advanced Gradle Topics": {
                        "___urlPath___": "advanced-gradle",
                        "Incremental Builds": {
                            "___urlPath___": "incremental-builds",
                            "___md___": 327
                        },
                        "Task Caching and Up-to-date Checks": {
                            "___urlPath___": "task-caching",
                            "___md___": 328
                        },
                        "Gradle Daemon and Performance Tuning": {
                            "___urlPath___": "gradle-performance",
                            "___md___": 329
                        }
                    },
                    "Troubleshooting & Debugging": {
                        "___urlPath___": "troubleshooting-gradle",
                        "Common Errors": {
                            "___urlPath___": "common-errors",
                            "___md___": 330
                        },
                        "Logging and Debug Mode": {
                            "___urlPath___": "logging-debug",
                            "___md___": 331
                        }
                    }

                }

            },
            "Deployment": {
                "Packaging Applications as WAR/JAR": true,
                "Deploying Applications on Apache Tomcat": true,
                "Dockerizing Java Applications": {
                    "___urlPath___": "dockerizing-java-applications",
                    "___md___": 991
                },
                "Deploying Dockerized Java App to Kubernetes with Helm": {
                    "___urlPath___": "deploying-dockerized-java-app-to-kubernetes-with-helm",
                    "___md___": 992
                }
            }
        },
        "Performance Optimization": {
            "___urlPath___": "performance-optimisation",
            "Profiling Tools (JVisualVM, YourKit)": {
                "___urlPath___": "profiling-tools",
                "___md___": 993
            },
            "Garbage Collection (GC) Tuning": {
                "___urlPath___": "garbage-collecton-tuning",
                "___md___": 994
            },
            "Analyzing and Reducing Memory Leaks": true,
            "Writing Efficient Java Code": true
        },
        "Case Studies and Projects": {
            "Building an E-Commerce Application": true,
            "Creating a Blog Management System": true,
            "Developing a REST API for a Library Management System": true,
            "Real-Time Chat Application with WebSockets": true,
            "Inventory Management System with Spring Boot and Hibernate": true
        }
    }
}