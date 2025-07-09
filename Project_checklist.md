
## ✅ PROJECT CHECKLIST (MVP)

### 🛠️ **1. Project Setup**

* [ ] Initialize Git repository
* [ ] Set up monorepo (if needed) ~ Optional
* [ ] Setup Next.js (App Router) + TailwindCSS
* [ ] Configure ESLint + Prettier + Husky
* [ ] Add Auth framework (Firebase/Auth.js/Clerk)
* [ ] Setup environment variables (`.env.local`)
* [ ] Install core packages (React Query, Axios, etc.)

---

### 🌐 **2. Routing & Navigation**

* [ ] Define dynamic routes: `subjectSlug`, `topicSlug`, `subtopicSlug`
* [ ] Setup layout.tsx for global nav/footer
* [ ] Add mobile-responsive sidebar or header
* [ ] Implement search routing (`/search?q=...`)

---

### 🧑‍🎓 **3. User-Facing Pages**

#### Home Page

* [ ] Featured subjects section
* [ ] Trending topics section
* [ ] CTA banners
* [ ] Search bar + autocomplete

#### Subject Listing Page

* [ ] Fetch subjects from API
* [ ] Filters: category, popularity, etc.
* [ ] SubjectCard component

#### Subject Detail Page

* [ ] Load subject by `subjectSlug`
* [ ] Display syllabus (topics + subtopics)
* [ ] Add enroll button
* [ ] Show subject metadata (level, tags, instructor)

#### Topic Page

* [ ] Load topic and subtopics from API
* [ ] Display intro content
* [ ] Add resume progress CTA

#### Subtopic/Content View

* [ ] Render markdown blog (MDX or `react-markdown`)
* [ ] Render YouTube/video embed
* [ ] Render audio player
* [ ] Add download link for files
* [ ] Add progress tracking (mark as complete)

#### Search Results Page

* [ ] Show matched subjects/topics/subtopics
* [ ] Autocomplete on input
* [ ] Highlight matches

#### User Dashboard

* [ ] Show enrolled subjects/topics
* [ ] Show completion progress bar
* [ ] Resume last watched
* [ ] Bookmarked content

#### Profile Page

* [ ] Show name, email, avatar
* [ ] Allow editing profile info
* [ ] Password reset logic

#### Login/Register Page

* [ ] Email/password auth
* [ ] Google OAuth
* [ ] Forgot password workflow

#### Subscription/Payment Page

* [ ] Razorpay or Stripe integration
* [ ] Handle free vs paid access logic

#### Error Pages

* [ ] 404 page
* [ ] 500 page
* [ ] Unauthorized/gated access

---

### 🛠️ **4. Admin Screens**

#### Admin Login

* [ ] Role-based login (admin access only)

#### Dashboard Home

* [ ] Show total users, courses, views
* [ ] Quick links to create/edit content

#### Add/Edit Subject

* [ ] Form to add subject (title, desc, tags)
* [ ] Upload thumbnail
* [ ] Publish toggle

#### Add/Edit Topic

* [ ] Choose parent subject
* [ ] Add topic title, desc, thumbnail
* [ ] Define topic order

#### Add/Edit Subtopic

* [ ] Add title, content type (video/audio/blog)
* [ ] Upload or embed Markdown, YouTube, audio
* [ ] Add downloadable resources

#### User Management

* [ ] List all users
* [ ] Role/permission management
* [ ] Delete, disable, reset password

#### Payment Reports

* [ ] View transaction history
* [ ] Filter by date, user, subject
* [ ] Export as CSV

#### Analytics Panel

* [ ] Display most popular topics
* [ ] Drop-off analytics
* [ ] Heatmap of activity

---

### 💬 **5. Optional Screens**

* [ ] Discussion forum per topic
* [ ] Comment threads, upvotes
* [ ] Quizzes (optional engine)
* [ ] Certificate generation/download
* [ ] Mobile landing page for app promotion

---

### 🎨 **6. Components to Build**

* [ ] `<SubjectCard />`
* [ ] `<TopicList />`
* [ ] `<SubtopicPlayer />`
* [ ] `<AudioPlayer />`
* [ ] `<VideoPlayer />`
* [ ] `<MarkdownRenderer />`
* [ ] `<ProgressBar />`
* [ ] `<SidebarTree />`
* [ ] `<SearchBar />`
* [ ] `<CommentThread />`

---

### 📁 **7. APIs & Backend (Can be Node.js, NestJS, Supabase, etc.)**

* [ ] Get Subjects
* [ ] Get Topics by Subject
* [ ] Get Subtopics by Topic
* [ ] Create/Edit/Delete Subjects, Topics, Subtopics
* [ ] Upload blog/audio/video links
* [ ] Progress tracking API
* [ ] User management API
* [ ] Payment webhook
* [ ] Auth middleware

---

### 📦 **8. Storage and Hosting**

* [ ] Markdown files / Blog storage (flat or DB)
* [ ] Video/audio (YouTube embed or Cloudflare Stream)
* [ ] Image/thumbnail storage (S3 or Cloudinary)
* [ ] Frontend: Vercel / Netlify
* [ ] Backend: Railway / Render / Supabase (Or, most likely AWS Serverless migration ~ cost effective for MVP)

---

### 🚀 **9. Final QA & Launch**

* [ ] Test across devices (mobile/tablet/desktop)
* [ ] Accessibility check (ARIA, tab nav)
* [ ] Lighthouse audit (performance, SEO)
* [ ] Create test user accounts
* [ ] Pre-launch email capture or waitlist
* [ ] Deploy domain (www.stacksynapse.com) + enable HTTPS
* [ ] Setup Google Analytics + Meta Pixel


