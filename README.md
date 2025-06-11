# Assalam Foundation Website

## Project Overview

This project is a full-stack web application built with Next.js 13, designed for the Assalam Foundation, a Moroccan non-profit organization dedicated to improving living conditions, education, and sustainable development in Morocco. The website provides public-facing pages showcasing the foundation's projects, blog articles, testimonials, and contact options, alongside a secure admin panel for content and user management.

## Features

- **Public Website:**
  - Home page with hero section, featured projects, latest blog posts, testimonials, and calls to action for donations and volunteering.
  - About, Projects, Blogs, and Contact pages.
  - Responsive design with Tailwind CSS.
  - Image optimization using Next.js Image component.

- **Blog System:**
  - Static blog data with rich metadata including author info, categories, tags, and related posts.
  - Blog listing and detailed blog pages.
  - Social media sharing integration (Facebook, LinkedIn, Twitter).

- **Admin Panel:**
  - Role-based access control with three roles:
    - **Super Admin:** Full access to all admin features.
    - **Content Manager:** Manage blog articles and projects.
    - **Message Manager:** Manage messages from contact forms.
  - Admin dashboard displaying statistics and recent activity.
  - Admin sidebar navigation filtered by user role.
  - Secure login with session management using cookies and bcrypt password hashing.
  - File upload support for images with size and type restrictions.

- **Backend:**
  - SQLite database with schema management and migrations.
  - API routes for uploads and other backend actions.
  - Utility libraries for authentication, blogs, projects, and uploads.

## Project Structure

- `app/`: Next.js app directory with pages and layouts for public and admin sections.
- `components/`: Reusable React components including UI elements and admin sidebar.
- `lib/`: Backend utilities and business logic (authentication, database, blogs, uploads).
- `public/`: Static assets and uploaded files.
- `styles/`: Global CSS and Tailwind configuration.
- `hooks/`: Custom React hooks.

## Technologies Used

- Next.js 13 (App Router)
- React 18
- Tailwind CSS
- SQLite
- Lucide Icons
- Multer for file uploads
- bcrypt for password hashing
- iron-session for session management

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   ```

3. Configure environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```
   SESSION_SECRET=your_session_secret
   FACEBOOK_PAGE_ACCESS_TOKEN=your_facebook_page_access_token
   FACEBOOK_PAGE_ID=your_facebook_page_id
   LINKEDIN_ACCESS_TOKEN=your_linkedin_access_token
   TWITTER_API_KEY=your_twitter_api_key
   TWITTER_API_SECRET_KEY=your_twitter_api_secret_key
   TWITTER_ACCESS_TOKEN=your_twitter_access_token
   TWITTER_ACCESS_TOKEN_SECRET=your_twitter_access_token_secret
   ```

4. Run database migrations:

   ```bash
   node lib/db/migrate.js
   ```

5. Start the development server:

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

6. Open your browser and navigate to `http://localhost:3000`

## Testing

- The application includes role-based access control that should be tested for all admin roles.
- Verify public pages render correctly and blog data displays as expected.
- Test file uploads for images with size and type restrictions.
- Test social media sharing functionality.
- Choose between critical-path testing (key features) or thorough testing (full coverage).

## Contributing

Contributions are welcome. Please open issues or pull requests for improvements or bug fixes.

## License

[Specify your license here]
