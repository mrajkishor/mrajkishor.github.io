# Screens

## **User-Facing Screens**

### 1. **Home Page**

* Featured subjects
* Trending or recommended topics
* Call-to-action (CTA) banners
* Search bar

### 2. **Subject Listing Page**

* `/subjects`
* Grid/List of all available subjects
* Filters: Category, Popularity, Newest, etc.

### 3. **Subject Detail Page**

* `/subjects/:subjectSlug`
* Syllabus tree: Topics → Subtopics
* Subject overview/description
* Enroll button (if gated)
* Tags, Level (Beginner/Advanced), Instructor info

### 4. **Topic Page**

* `/subjects/:subjectSlug/:topicSlug`
* Topic intro video/blog/audio
* List of subtopics with progress status
* CTA to resume where left off

### 5. **Subtopic/Content View Page**

* `/subjects/:subjectSlug/:topicSlug/:subtopicSlug`
* Video Player (YouTube embed or custom)
* Blog content (rendered from Markdown)
* Audio player
* Notes/Comments (optional)
* Downloadable resources
* Completion checkbox or progress bar

### 6. **Search Results Page**

* Search for topics, subtopics, keywords
* Autocomplete suggestions

### 7. **User Dashboard**

* `/dashboard`
* Enrolled subjects/topics
* Progress tracking (bar or checklist)
* Resume last-watched content
* Saved/bookmarked content

### 8. **Profile Page**

* `/profile`
* Name, email, avatar
* Edit profile
* Password reset

### 9. **Login/Register Page**

* `/login`, `/register`
* Google auth / Email-password
* Forgot password

### 10. **Subscription/Payment Page**

* `/pricing`
* One-time payment / subscription model
* Razorpay/Stripe integration

### 11. **Error Pages**

* 404 Not Found
* 500 Server Error
* Access Denied (for gated content)

---

## **Admin Screens (CMS Panel)**

### 12. **Admin Login Page**

* Secure login with role-based access

### 13. **Dashboard Home**

* Overview stats: users, subjects, views, etc.
* Quick actions: Add Subject/Topic

### 14. **Add/Edit Subject Page**

* Title, description, tags
* Thumbnail upload
* Publish/unpublish toggle

### 15. **Add/Edit Topic Page**

* Belongs to a Subject
* Title, description
* Topic order/priority
* Thumbnail or intro video

### 16. **Add/Edit Subtopic Page**

* Belongs to Topic
* Title
* Type of content (video/audio/blog)
* Upload Markdown, YouTube link, or audio file
* Add resources (PDF, links)

### 17. **User Management**

* View all registered users
* Reset password
* Delete/spam reports

### 18. **Payment Reports**

* List of transactions
* Filter by date, user, course
* Export CSV

### 19. **Analytics Panel**

* Popular subjects/topics
* Engagement heatmap
* Drop-off points

---

## Optional Screens

### 20. **Discussion Page per Topic**

* Forum/discussion for each subtopic
* Upvotes, replies, moderation

### 21. **Quizzes & Certificates**

* Quiz after topics
* Certificate download after completion

### 22. **Mobile App Landing Page (for future)**

* PWA or native app preview and CTA

---



## **Navigation Map / Sitemap Diagram**

```
/
├── Home
│   ├── Featured Subjects
│   ├── Trending Topics
│   └── Search Bar
│
├── /subjects
│   ├── [subjectSlug] → Subject Detail
│   │   ├── [topicSlug] → Topic Page
│   │   │   ├── [subtopicSlug] → Subtopic Content Page
│   │   │   │   └── Player (video/audio/blog)
│   │   └── Enroll CTA
│   └── Filter, Category, etc.
│
├── /search?q=
│   └── Autocomplete + keyword matching
│
├── /dashboard
│   └── My Subjects, Resume, Bookmarked, Progress
│
├── /profile
│   ├── Edit Info
│   ├── Change Password
│   └── Logout
│
├── /login
├── /register
├── /forgot-password
│
├── /pricing
│   └── Razorpay / Stripe checkout
│
├── /error/404
├── /error/500
├── /unauthorized
│
├── /discuss/:topicSlug (optional)
│   └── Comments, Threads, Replies
│
├── /certificates (optional)
│   └── Quiz + Certificate Download
│
└── /mobile-app (optional landing page)
```

---

## 🗂️ **React / Next.js App Folder Structure**

```
/app
├── page.tsx → Home Page
├── subjects/
│   ├── page.tsx → Subject Listing
│   └── [subjectSlug]/
│       ├── page.tsx → Subject Detail Page
│       └── [topicSlug]/
│           ├── page.tsx → Topic Page
│           └── [subtopicSlug]/
│               └── page.tsx → Content View Page
│
├── dashboard/page.tsx
├── profile/page.tsx
├── login/page.tsx
├── register/page.tsx
├── forgot-password/page.tsx
├── pricing/page.tsx
├── search/page.tsx
├── error/404.tsx
├── error/500.tsx
├── unauthorized/page.tsx
│
└── (optional)
    ├── discuss/[topicSlug]/page.tsx
    ├── certificates/page.tsx
    └── mobile-app/page.tsx

/components/
├── SubjectCard.tsx
├── TopicList.tsx
├── SubtopicPlayer.tsx
├── AudioPlayer.tsx
├── MarkdownRenderer.tsx
├── ProgressBar.tsx
├── VideoPlayer.tsx
├── SidebarTree.tsx
├── CommentThread.tsx
└── SearchBar.tsx

/lib/
├── api.ts
├── auth.ts
├── markdown.ts
├── payments.ts

/utils/
├── helpers.ts
└── constants.ts

/styles/
├── globals.css
└── tailwind.config.ts
```

