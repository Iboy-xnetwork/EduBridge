export interface Resource {
  id: string;
  name: string;
  type: 'pdf' | 'doc' | 'video' | 'image';
  size: string;
  downloadUrl: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  content: string;
  videoUrl?: string;
  order: number;
  resources?: Resource[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessons: Lesson[];
  category: string;
  students: number;
  teacherId?: string;
  teacherName?: string;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Digital Literacy Basics',
    description: 'Learn the fundamental digital skills needed to navigate the modern world. Perfect for beginners starting their digital journey.',
    level: 'Beginner',
    duration: '4 weeks',
    category: 'Digital Skills',
    students: 1247,
    teacherId: '1',
    teacherName: 'Dr. Amina Okafor',
    lessons: [
      {
        id: '1-1',
        title: 'Introduction to Computers',
        duration: '15 min',
        order: 1,
        resources: [
          {
            id: 'r1-1',
            name: 'Computer Basics Guide.pdf',
            type: 'pdf',
            size: '2.3 MB',
            downloadUrl: '#',
          },
          {
            id: 'r1-2',
            name: 'Hardware Components Chart.jpg',
            type: 'image',
            size: '450 KB',
            downloadUrl: '#',
          },
        ],
        content: `
# Introduction to Computers

## What is a Computer?

A computer is an electronic device that processes information and performs tasks according to instructions. In today's world, computers are everywhere - in phones, laptops, tablets, and even watches!

## Basic Components

### Hardware
- **Input Devices**: Keyboard, mouse, touchscreen
- **Processing Unit**: The "brain" (CPU) that does calculations
- **Output Devices**: Monitor, speakers, printer
- **Storage**: Where files and programs are kept

### Software
Software is the set of instructions that tells hardware what to do. There are two main types:
- **System Software**: Like Windows, macOS, or Linux
- **Application Software**: Programs you use daily like WhatsApp, Chrome, or Microsoft Word

## Why Learn About Computers?

Understanding computers helps you:
- Communicate with people worldwide
- Access information and educational resources
- Find job opportunities
- Solve problems efficiently
- Create and share your ideas

## Key Takeaway

Computers are tools that amplify human capability. The more you understand them, the more you can achieve with them!
        `,
      },
      {
        id: '1-2',
        title: 'Using the Internet Safely',
        duration: '20 min',
        order: 2,
        resources: [
          {
            id: 'r1-3',
            name: 'Internet Safety Checklist.pdf',
            type: 'pdf',
            size: '1.8 MB',
            downloadUrl: '#',
          },
          {
            id: 'r1-4',
            name: 'Password Security Guide.pdf',
            type: 'pdf',
            size: '1.2 MB',
            downloadUrl: '#',
          },
        ],
        content: `
# Using the Internet Safely

## What is the Internet?

The internet is a global network that connects millions of computers and devices worldwide. It allows us to access information, communicate, and share resources.

## Internet Safety Tips

### 1. Protect Your Personal Information
- Never share passwords with anyone
- Be careful about posting personal details online
- Use privacy settings on social media

### 2. Recognize Scams and Phishing
- Be suspicious of emails asking for personal information
- Don't click on suspicious links
- Verify website URLs before entering information

### 3. Use Strong Passwords
- Use a mix of letters, numbers, and symbols
- Make passwords at least 8 characters long
- Don't use the same password everywhere

### 4. Safe Browsing Habits
- Look for "https://" in website addresses
- Install antivirus software if possible
- Keep your software updated

## Data Usage Tips

Since internet access can be expensive in Africa, here are ways to save data:
- Download content when on WiFi
- Use lite versions of apps (like Facebook Lite)
- Disable auto-play for videos
- Clear browser cache regularly

## Digital Citizenship

Being a good digital citizen means:
- Respecting others online
- Not spreading false information
- Reporting inappropriate content
- Being kind and constructive in comments

## Remember

The internet is a powerful tool. Used wisely, it opens doors to education, opportunities, and connection!
        `,
      },
      {
        id: '1-3',
        title: 'Email and Communication',
        duration: '18 min',
        order: 3,
        content: `
# Email and Communication

## Understanding Email

Email (electronic mail) is one of the most important digital communication tools. It's used for personal communication, education, and professional purposes.

## Parts of an Email Address

An email address has two parts:
- **Username**: yourname
- **Domain**: @gmail.com, @yahoo.com, etc.

Example: yourname@gmail.com

## Creating a Professional Email

### Tips for Choosing an Email Address
- Use your name or a professional variation
- Avoid numbers and special characters when possible
- Keep it simple and memorable
- Example: john.doe@gmail.com

## Writing Effective Emails

### Structure of a Good Email
1. **Subject Line**: Clear and specific
2. **Greeting**: "Dear..." or "Hello..."
3. **Body**: Your message, clear and concise
4. **Closing**: "Best regards," "Thank you," etc.
5. **Signature**: Your name and contact info

### Email Etiquette
- Check spelling and grammar
- Be polite and professional
- Reply within 24-48 hours
- Use proper formatting
- Keep it concise

## Other Communication Tools

### Instant Messaging
- WhatsApp, Telegram, Signal
- Good for quick conversations
- Less formal than email

### Video Calls
- Zoom, Google Meet, Microsoft Teams
- Essential for remote learning and work
- Test your connection beforehand

## Managing Your Inbox

- Create folders to organize emails
- Unsubscribe from unwanted newsletters
- Delete or archive old emails
- Use search to find specific messages

## Practice Activity

Try composing an email introducing yourself to a potential employer or teacher. Include all the elements of a professional email!
        `,
      },
      {
        id: '1-4',
        title: 'File Management Basics',
        duration: '15 min',
        order: 4,
        content: `
# File Management Basics

## What are Files and Folders?

**Files** are digital documents (like photos, documents, videos) stored on your computer.
**Folders** are containers that help organize your files, similar to physical folders in a filing cabinet.

## Common File Types

- **.docx** - Word documents
- **.pdf** - Portable document format (works everywhere)
- **.jpg / .png** - Image files
- **.mp4** - Video files
- **.mp3** - Audio files
- **.xlsx** - Excel spreadsheets

## Organizing Your Files

### Create a Clear Structure
\`\`\`
Documents/
  ├── School/
  │   ├── Math/
  │   ├── English/
  │   └── Science/
  ├── Personal/
  └── Work/
\`\`\`

### Best Practices
1. Use descriptive names: "Math_Assignment_Feb2026.docx"
2. Include dates in filenames when relevant
3. Don't put everything on the Desktop
4. Backup important files regularly

## File Operations

### Basic Actions
- **Create**: Make a new file or folder
- **Copy**: Duplicate a file
- **Move**: Transfer a file to another location
- **Delete**: Remove a file (check Recycle Bin first!)
- **Rename**: Change a file's name

### Keyboard Shortcuts
- Ctrl+C: Copy
- Ctrl+V: Paste
- Ctrl+X: Cut
- Ctrl+Z: Undo
- Ctrl+S: Save

## Cloud Storage

Cloud storage keeps your files online, accessible from any device:
- **Google Drive** - Free 15GB
- **Dropbox** - Good for sharing
- **OneDrive** - Works with Microsoft Office

### Benefits
- Access files anywhere
- Automatic backup
- Easy sharing with others
- Saves device storage space

## Data Conservation

To save storage space:
- Compress large files
- Delete duplicates
- Remove unnecessary downloads
- Use cloud storage for big files

## Activity

Create a folder structure for organizing your school or work files. Practice naming files clearly and organizing them logically!
        `,
      },
    ],
  },
  {
    id: '2',
    title: 'Introduction to Web Development',
    description: 'Start your journey into web development. Learn HTML, CSS, and basic JavaScript to build your first website.',
    level: 'Beginner',
    duration: '6 weeks',
    category: 'Programming',
    students: 892,
    lessons: [
      {
        id: '2-1',
        title: 'What is Web Development?',
        duration: '12 min',
        order: 1,
        content: `
# What is Web Development?

## Introduction

Web development is the process of creating websites and web applications. Every website you visit - from Google to Facebook to your school's site - was built by web developers!

## Types of Web Development

### 1. Front-End Development
- What users see and interact with
- Uses HTML, CSS, and JavaScript
- Focuses on design and user experience

### 2. Back-End Development
- Server-side logic and databases
- Handles data processing
- Uses languages like Python, Node.js, PHP

### 3. Full-Stack Development
- Combination of front-end and back-end
- Can build complete web applications

## Why Learn Web Development?

- **High Demand**: Companies always need developers
- **Flexible Career**: Work remotely from anywhere
- **Creative**: Build your ideas into reality
- **Problem Solving**: Constant learning and challenges
- **Entrepreneurship**: Create your own products

## What You'll Learn

In this course, you'll start with:
1. HTML - Structure of web pages
2. CSS - Styling and layout
3. JavaScript - Making pages interactive

## Career Opportunities in Africa

Web development is one of the fastest-growing fields in Africa:
- Many remote job opportunities
- Growing tech hubs in Lagos, Nairobi, Cape Town
- Freelancing platforms like Upwork, Fiverr
- Start your own web agency

## Getting Started

All you need is:
- A computer (even a basic one works!)
- A text editor (we'll show you free options)
- A web browser
- Internet connection (low bandwidth is fine!)

Let's begin your journey!
        `,
      },
      {
        id: '2-2',
        title: 'HTML Fundamentals',
        duration: '25 min',
        order: 2,
        content: `
# HTML Fundamentals

## What is HTML?

HTML (HyperText Markup Language) is the foundation of every website. It provides the structure and content of web pages.

## Basic HTML Structure

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
\`\`\`

## Common HTML Tags

### Headings
\`\`\`html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Smaller Heading</h3>
\`\`\`

### Paragraphs and Text
\`\`\`html
<p>This is a paragraph.</p>
<strong>Bold text</strong>
<em>Italic text</em>
\`\`\`

### Links
\`\`\`html
<a href="https://example.com">Click here</a>
\`\`\`

### Images
\`\`\`html
<img src="photo.jpg" alt="Description">
\`\`\`

### Lists
\`\`\`html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
\`\`\`

## Semantic HTML

Use tags that describe their content:
- \`<header>\` - Top section of page
- \`<nav>\` - Navigation menu
- \`<main>\` - Main content
- \`<footer>\` - Bottom section
- \`<article>\` - Self-contained content
- \`<section>\` - Thematic grouping

## Practice Exercise

Create a simple HTML page about yourself with:
1. A heading with your name
2. A paragraph about your interests
3. A list of your skills
4. A link to your favorite website

## Next Steps

Once you're comfortable with HTML, we'll add styling with CSS to make it look beautiful!
        `,
      },
    ],
  },
  {
    id: '3',
    title: 'Microsoft Office Essentials',
    description: 'Master Word, Excel, and PowerPoint - essential tools for students and professionals across Africa.',
    level: 'Beginner',
    duration: '3 weeks',
    category: 'Productivity',
    students: 2156,
    lessons: [
      {
        id: '3-1',
        title: 'Microsoft Word Basics',
        duration: '20 min',
        order: 1,
        content: `
# Microsoft Word Basics

## Introduction

Microsoft Word is a word processing program used for creating documents like letters, reports, resumes, and assignments.

## Getting Started

### Creating a New Document
1. Open Microsoft Word
2. Click "Blank Document"
3. Start typing!

### The Interface
- **Ribbon**: Toolbar at the top with all features
- **Tabs**: Home, Insert, Design, Layout, etc.
- **Quick Access Toolbar**: Frequently used commands

## Essential Features

### Formatting Text
- **Font**: Change typeface and size
- **Bold/Italic/Underline**: Emphasize text
- **Colors**: Make text stand out
- **Alignment**: Left, center, right, justify

### Paragraph Formatting
- Line spacing
- Indentation
- Bullets and numbering
- Borders and shading

### Inserting Elements
- Pictures and shapes
- Tables
- Headers and footers
- Page numbers

## Document Structure

### For Academic Papers
1. Cover page
2. Table of contents
3. Body with headings
4. References/Bibliography

### Professional Documents
- Use consistent formatting
- Include headers with document title
- Add page numbers
- Professional font (Times New Roman, Arial)

## Time-Saving Tips

### Keyboard Shortcuts
- Ctrl+B: Bold
- Ctrl+I: Italic
- Ctrl+U: Underline
- Ctrl+C: Copy
- Ctrl+V: Paste
- Ctrl+Z: Undo
- Ctrl+F: Find
- Ctrl+H: Find and Replace

### Styles
Use built-in styles for consistent formatting:
- Heading 1, Heading 2, etc.
- Normal text
- Quotes

## Common Tasks

### Creating a Resume
1. Start with contact information
2. Add education section
3. Include work experience
4. List skills
5. Keep it to 1-2 pages

### Writing Reports
1. Use headings to organize
2. Include an introduction
3. Use tables for data
4. Add a conclusion
5. Proofread carefully!

## Saving Your Work

- Save regularly (Ctrl+S)
- Use descriptive filenames
- Consider saving to cloud storage
- Export as PDF for sharing

## Practice Activity

Create a one-page document about yourself including:
- A heading with your name
- Contact information
- Education background
- Skills and interests
- Use at least 3 different formatting features!
        `,
      },
    ],
  },
  {
    id: '4',
    title: 'Social Media for Business',
    description: 'Learn how to use social media platforms effectively for business and personal branding in the African market.',
    level: 'Intermediate',
    duration: '4 weeks',
    category: 'Marketing',
    students: 645,
    lessons: [
      {
        id: '4-1',
        title: 'Introduction to Social Media Marketing',
        duration: '18 min',
        order: 1,
        content: `
# Introduction to Social Media Marketing

## Why Social Media Matters for African Businesses

Social media has transformed how businesses reach customers in Africa. With over 500 million internet users across the continent, social platforms offer unprecedented opportunities.

## Popular Platforms in Africa

### 1. Facebook
- Largest user base
- Great for community building
- Affordable advertising
- Facebook Marketplace for selling

### 2. Instagram
- Visual storytelling
- Perfect for products/services
- Growing rapidly among youth
- Instagram Shopping features

### 3. WhatsApp Business
- Most popular messaging app
- Direct customer communication
- Catalog feature
- Business profile

### 4. Twitter (X)
- News and updates
- Customer service
- Trending topics
- Professional networking

### 5. TikTok
- Fastest growing platform
- Viral content potential
- Young audience
- Creative marketing opportunities

## Benefits for African Businesses

- **Low Cost**: Start for free, scale as you grow
- **Wide Reach**: Access customers across cities and countries
- **Direct Communication**: Talk to customers instantly
- **Build Trust**: Share your story and values
- **Mobile-First**: Works on basic smartphones

## Success Stories

Many African entrepreneurs have built successful businesses through social media:
- Fashion designers showcasing products on Instagram
- Food vendors using WhatsApp for orders
- Tech startups growing through Twitter
- Content creators earning on YouTube

## Getting Started

To succeed in social media marketing:
1. Know your audience
2. Create valuable content
3. Post consistently
4. Engage with followers
5. Track your results

## Key Metrics to Watch

- **Followers**: Size of your audience
- **Engagement**: Likes, comments, shares
- **Reach**: How many people see your posts
- **Conversions**: Sales or sign-ups

## Content Types That Work

- Behind-the-scenes content
- Customer testimonials
- Educational posts
- Product demonstrations
- Cultural celebrations
- Community involvement

## Tips for African Market

- Use local languages when appropriate
- Celebrate local festivals and events
- Address local problems and needs
- Show authentic African experiences
- Consider data costs (use images wisely)
- Post when your audience is most active

## Next Steps

In upcoming lessons, we'll dive deeper into:
- Creating engaging content
- Running effective ads
- Building your brand
- Measuring success

Let's build your social media presence!
        `,
      },
    ],
  },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}

export function getLessonById(courseId: string, lessonId: string): Lesson | undefined {
  const course = getCourseById(courseId);
  return course?.lessons.find(lesson => lesson.id === lessonId);
}