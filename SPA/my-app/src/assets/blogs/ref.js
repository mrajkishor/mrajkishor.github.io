const thumbnails = [
    {
        "id": 1,
        "url": "memoisation-javascript-react",
        "title": "Memoization in JavaScript",
        "description": "A brief description of the memoization using JavaScript ...",
        "date": "25-08-2022",
        "time": "19:25",
        "publish": false
    },
    {
        "id": 2,
        "url": "react-snapshot-testing-using-jest",
        "title": "React JS snapshot testing with JEST",
        "description": "A short account of snapshot testing using ...",
        "date": "10-09-2022",
        "time": "01:22",
        "publish": false
    },
    {
        "id": 3,
        "url": "date-transfer-using-quantum-entranglement",
        "title": "Data Transfer and Quantum Entanglement",
        "description": "Is data transfer using Quantum Phenomena practicle, or...",
        "date": "10-09-2022",
        "time": "01:22",
        "publish": false
    },
    {
        "id": 4,
        "url": "native-vs-hybrid-apps-comparision",
        "title": "Native vs Hybrid apps comparision",
        "description": "Hybrid app is better when...",
        "date": "27-09-2022",
        "time": "00:49",
        "publish": false
    },
    {
        "id": 5,
        "url": "solid-principles-with-examples",
        "title": "OOP SOLID principles",
        "description": "This article covers examples of...",
        "date": "18-02-2022",
        "time": "17:11",
        "publish": false
    },
    {
        "id": 6,
        "url": "js-closures-explained-simply",
        "title": "Javascript closure",
        "description": "This article covers the JS closure usecase and...",
        "date": "10-03-2022",
        "time": "02:35",
        "publish": false
    },
    {
        "id": 7,
        "url": "how-to-write-a-simple-deep-neural-net",
        "title": "Deep neural net from scratch",
        "description": "Without using much exteranl libraries lets understand...",
        "date": "10-03-2022",
        "time": "02:35",
        "publish": false
    },
    {
        "id": 8,
        "url": "javascript-or-and-nullish-operators",
        "title": "JavaScript ||, && and ?? operators",
        "description": "Lets understand the basic nature of these...",
        "date": "29-04-2023",
        "time": "17:02",
        "publish": false
    },
    {
        "id": 9,
        "url": "most-popular-research-topic-by-year-from-1900-to-now",
        "title": "1900 to 2023 - The popular research trends",
        "description": "This article lists the popular research domain...",
        "date": "19-05-2023",
        "time": "01:45",
        "publish": false
    }
    ,
    {
        "id": 10,
        "url": "javaScript-vade-mecum",
        "title": "JavaScript handbook",
        "description": "Useful JS patterns for building libraries and...",
        "date": "26-08-2023",
        "time": "02:00",
        "publish": false
    },
    {
        "id": 11,
        "url": "most-popular-research-topic-by-year-from-1900-to-now",
        "title": "1900 to 2023 - The popular research trends",
        "description": "This article lists the popular research domain...",
        "date": "26-08-2023",
        "time": "02:00",
        "publish": false
    },
    {
        "id": 12,
        "url": "optimal-algorithms-and-techniques",
        "title": "Optimal techniques for O(n) | O(logn) time complexity",
        "description": "This article provides the common techniques or patterns used to solve data structures and algorithm problems for optimal O(n) or O(logn) solutions...",
        "date": "03-12-2023",
        "time": "15:17",
        "publish": false
    },

    {
        "id": 13,
        "url": "react-closure",
        "title": "Closure in React",
        "description": "Accessing the Latest State Value in React's useEffect Cleanup Function...",
        "date": "09-06-2024",
        "time": "00:35",
        "publish": true
    },
    {
        "id": 14,
        "url": "react-hoc-vs-custom-hooks",
        "title": "HOC vs custom hooks",
        "description": "Higher-Order Components (HOCs) and custom hooks are both powerful patterns in React for...",
        "date": "09-06-2024",
        "time": "03:28",
        "publish": true
    },
    {
        "id": 15,
        "url": "client-side-security",
        "title": "Client-Side Security: Encapsulation, Cryptographic Operations and Challenges",
        "description": "In the world of web development, handling sensitive data securely is of paramount importance. Although server-side operations are generally more secure, there...",
        "date": "15-06-2024",
        "time": "01:59",
        "publish": true
    },
    {
        "id": 16,
        "url": "proxies",
        "title": "Proxies",
        "description": "A proxy server is an intermediary server that sits between a client and a server, handling requests...",
        "date": "15-06-2024",
        "time": "18:18",
        "publish": true
    },
    {
        "id": 17,
        "url": "avoiding-the-use-of-mutable-keys-in-java",
        "title": "Avoiding the Use of Mutable Keys in Java: Ensuring Collection Integrity",
        "description": "In Java, collections such as HashMap and HashSet are fundamental for storing and managing data. However, a common pitfall that can lead to bugs and...",
        "date": "15-06-2024",
        "time": "21:30",
        "publish": true
    },
    {
        "id": 18,
        "url": "ConcurrentHashMap-java",
        "title": "Concurrenthashmap (Java)",
        "description": "The HashMap and ConcurrentHashMap are both implementations of the Map interface in Java, but they are designed for different use cases, particularly with...",
        "date": "16-06-2024",
        "time": "01:29",
        "publish": true
    },
    {
        "id": 19,
        "url": "ConcurrentLinkedQueue",
        "title": "ConcurrentLinkedQueue and a synchronized LinkedList",
        "description": "The key differences between using ConcurrentLinkedQueue and a synchronized LinkedList (or any other...",
        "date": "16-06-2024",
        "time": "02:02",
        "publish": true,
        "keywords": ["Java", "ConcurrentLinkedQueue"]
    },
    {
        "id": 21,
        "url": "redux-toolkit-vs-saga",
        "title": "Making API Calls with Redux Toolkit and Redux Saga: A Comprehensive Guide",
        "description": "Managing asynchronous operations in a Redux application can be challenging. Thankfully, tools like Redux Toolkit and Re...",
        "date": "29-06-2024",
        "time": "01:53",
        "publish": true,
        "keywords": ["React", "redux-toolkit", "saga"]
    }
];

export const BLOG_DEEPLINKS = thumbnails;


// How to use it in a component

// import * as myConstClass from 'path/to/ref';

// const constants = myConstClass.BLOG_DEEPLINKS;
