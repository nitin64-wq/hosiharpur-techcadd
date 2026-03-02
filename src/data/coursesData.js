export const coursesData = {
    'course-basic-computer': {
        title: 'Basic Computer Course',
        badges: ['Basics', 'Fundamentals'],
        image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=1200&q=80',
        description: [
            'The "Basic Computer Course in Phagwara" offered by Techcadd is aimed at providing learners the whole range of practical and technical computer skills that are essential to achieve success in this hi-tech world. As Phagwara is rapidly growing as an education and career development hub for the people across Punjab, the "Basic Computer Course" is especially helpful to build students\' proficiency in basic computer operations.',
            'Topics covered under our best basic computer course include MS Office Components (MS Word, Excel, PowerPoint), Internet Knowledge and Usage, Management of Emails, Windows OS Knowledge, and troubleshooting techniques. The students are given practical exposure to those real-life basic knowledge tools or techniques used with normal office work or business activities.',
            'Upgrade your skills and increase your digital confidence today with a solid base to kick-start a successful and stable career with our 2 Months Basic Computer Training.'
        ],
        learnings: [
            'Learn the complete pipeline of this technology.',
            'Build real-world projects and portfolio.',
            'Master industry-standard tools and techniques.',
            'Get certified and job-ready.'
        ],
        curriculum: [
            { title: 'Introduction to Computers', desc: 'Learners are introduced to the basics of computer knowledge: what it is, how it functions, and where it can be found in real life. Overview of hardware vs software.' },
            { title: 'Computer Hardware and Peripherals', desc: 'Identify physical parts of a computer including CPU, monitor, keyboard, mouse, storage media, and how each of these parts functions collectively.' },
            { title: 'Operating System Basics', desc: 'Practical training on how to run and shut down a computer, manage files and folders, and basic troubleshooting for safe handling of a Windows machine.' },
            { title: 'MS Word (Word Processing)', desc: 'Create, edit, format, and save documents using MS Word. Practice typing skills, formatting documents, adding pictures and tables.' },
            { title: 'MS Excel (Spreadsheets)', desc: 'Data management with Excel. Enter data, formulate basic formulas and functions, format cells, and build visual data charts.' },
            { title: 'MS PowerPoint (Presentations)', desc: 'Design a powerful presentation using MS PowerPoint. Learn how to include text, images, animation, and logical slide transitions.' },
            { title: 'Internet & Email Management', desc: 'Enable learners to use the internet confidently. Website browsing, search queries, resource downloading, and professional email correspondence.' },
            { title: 'Basic Security & Digital Awareness', desc: 'Computer safety practices to keep data and devices safe. Strong passwords, antivirus tools, backups, and preventing malware injections.' }
        ],
        instructor: 'TechCADD Team',
        duration: '2 Months',
        lectures: '8 Modules',
        skillLevel: 'Beginner',
        certificate: 'Yes'
    }
};

export const getCourseData = (id) => {
    if (coursesData[id]) return coursesData[id];

    // Generic fallback for any other course to automatically handle hundreds of them
    const formattedTitle = id.replace(/^(course-|after12-|basic-)/, '')
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

    // Assign a pseudo-random image based on course title length so it stays consistent per course
    const images = [
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80',
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
        'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=1200&q=80',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80'
    ];
    const imageIndex = formattedTitle.length % images.length;

    return {
        title: formattedTitle + ' Course',
        badges: ['Technology', 'Career'],
        image: images[imageIndex],
        description: [
            `Welcome to the complete ${formattedTitle} course at TechCADD.`,
            'This course is designed to provide comprehensive training in this field, allowing students to build a solid foundation and advance their skills effectively.',
            'Join us to accelerate your career growth with extensive hands-on projects, industry-standard practices, and real-world problem solving.'
        ],
        learnings: [
            'Understand the core concepts and principles from scratch.',
            'Work on practical, real-world assignments.',
            'Prepare for certification and ace job interviews.',
            'Learn direct optimization techniques from experienced industry professionals.'
        ],
        curriculum: [
            { title: 'Module 1: Introduction', desc: `Overview of ${formattedTitle}, installation, and basic environment setup.` },
            { title: 'Module 2: Core Concepts', desc: `Deep dive into the main features mapping directly to industry expectations.` },
            { title: 'Module 3: Advanced Techniques', desc: 'Optimization, debugging, scalability, and best practices.' },
            { title: 'Module 4: Final Project', desc: 'Build a complete, portfolio-ready project to showcase your new mastery.' }
        ],
        instructor: 'Expert Professional',
        duration: 'Flexible',
        lectures: 'Multiple Modules',
        skillLevel: 'All Levels',
        certificate: 'Yes'
    };
};
