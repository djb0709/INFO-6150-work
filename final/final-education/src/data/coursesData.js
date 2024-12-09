"use strict";
const coursesData = [
    {
        id: 1,
        title: "AI cloud computing",
        category: 'AI',
        rating: 4.8,
        alt: "A cloud computing diagram",
        level: "Beginner",
        duration: "5 months",
        image: './courses-cloud-computing.jpg',
        description: "Discover how Artificial Intelligence is revolutionizing cloud computing with real-world applications and practical knowledge."
    },
    {
        id: 2,
        title: "Introduction to Data Science",
        category: 'Data Analytics',
        rating: 4.6,
        alt: "A data analytics diagram",
        level: "Intermediate",
        duration: "4 months",
        image: './courses-data-analytics.jpg',
        description: "Learn data analysis, visualization, and statistical modeling techniques using industry-standard tools like Python and R."
    },
    {
        id: 3,
        title: "Advanced Machine Learning",
        category: 'Machine Learning',
        rating: 4.5,
        alt: "A machine learning neural network",
        level: "Advanced",
        duration: "7 months",
        image: './courses-machine-learning.jpg',
        description: "Delve deep into neural networks, natural language processing, and advanced deep learning algorithms with hands-on projects."
    },
    {
        id: 4,
        title: "Web Development Bootcamp",
        category: 'Web Development',
        rating: 5.0,
        alt: "Web development coding screen",
        level: "Intermediate",
        duration: "4 months",
        image: './courses-web-development.jpg',
        description: "Learn how to build responsive websites and dynamic web applications using HTML, CSS, JavaScript, and React.js."
    },
    {
        id: 5,
        title: "Big Data Analytics",
        category: 'Data Analytics',
        rating: 4.8,
        alt: "Big data visualization",
        level: "Advanced",
        duration: "8 months",
        image: './courses-big-data.jpg',
        description: "Learn to process and analyze massive datasets using Hadoop, Spark, and other big data tools to uncover meaningful insights."
    },
    {
        id: 6,
        title: "Cybersecurity Essentials",
        category: 'Cybersecurity',
        rating: 4.7,
        alt: "A cybersecurity network diagram",
        level: "Beginner",
        duration: "6 months",
        image: './courses-cybersecurity.jpg',
        description: "Learn the fundamentals of protecting systems, networks, and programs from digital attacks and security breaches."
    },
    {
        id: 7,
        title: "Mobile App Development",
        category: 'App Development',
        rating: 4.9,
        alt: "Mobile app wireframe design",
        level: "Intermediate",
        duration: "5 months",
        image: './courses-mobile-development.jpg',
        description: "Master the skills to create native and cross-platform mobile apps using tools like Flutter, React Native, and Swift."
    },
    {
        id: 8,
        title: "Cloud Infrastructure Engineering",
        category: 'Cloud Computing',
        rating: 4.8,
        alt: "Cloud infrastructure diagram",
        level: "Advanced",
        duration: "7 months",
        image: './courses-cloud-infrastructure.jpg',
        description: "Explore advanced cloud computing techniques, including infrastructure as code, CI/CD pipelines, and DevOps practices."
    },
    {
        id: 9,
        title: "Introduction to Python Programming",
        category: 'Programming',
        rating: 4.5,
        alt: "Python programming code on screen",
        level: "Beginner",
        duration: "3 months",
        image: './courses-python.jpg',
        description: "Learn Python programming from scratch and use it for data analysis, web development, and more."
    },
    {
        id: 10,
        title: "Blockchain Development Basics",
        category: 'Blockchain',
        rating: 4.6,
        alt: "Blockchain data chain illustration",
        level: "Beginner",
        duration: "4 months",
        image: './courses-blockchain.jpg',
        description: "Understand the fundamentals of blockchain technology and learn to build smart contracts using Solidity."
    },
    {
        id: 11,
        title: "DevOps Practices and Tools",
        category: 'DevOps',
        rating: 4.8,
        alt: "DevOps workflow illustration",
        level: "Intermediate",
        duration: "5 months",
        image: './courses-devops.jpg',
        description: "Learn the principles of DevOps and master tools like Docker, Kubernetes, and Jenkins to streamline software delivery."
    },
    {
        id: 12,
        title: "Game Development Fundamentals",
        category: 'Game Development',
        rating: 4.9,
        alt: "Game development 3D modeling",
        level: "Intermediate",
        duration: "6 months",
        image: './courses-game-development.jpg',
        description: "Discover game design and development techniques using Unity and Unreal Engine, creating engaging gaming experiences."
    },
    {
        id: 13,
        title: "UI/UX Design Principles",
        category: 'Design',
        rating: 4.7,
        alt: "UI/UX design prototype",
        level: "Beginner",
        duration: "4 months",
        image: './courses-ui-ux.jpg',
        description: "Learn to design intuitive and aesthetically pleasing user interfaces and experiences using industry best practices."
    },
    {
        id: 14,
        title: "Natural Language Processing",
        category: 'AI',
        rating: 4.6,
        alt: "Natural Language Processing word cloud",
        level: "Advanced",
        duration: "6 months",
        image: './courses-nlp.jpg',
        description: "Gain expertise in processing and analyzing human language data using advanced AI algorithms and Python libraries."
    },
    {
        id: 15,
        title: "Artificial Intelligence Ethics",
        category: 'AI',
        rating: 4.9,
        alt: "AI ethics concept illustration",
        level: "Intermediate",
        duration: "3 months",
        image: './courses-ai-ethics.jpg',
        description: "Explore the ethical implications of artificial intelligence, including bias, privacy, and decision-making frameworks in AI systems."
    },
];
export default coursesData;