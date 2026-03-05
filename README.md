# Astro Simple Portfolio

Is a free and open-source portfolio template built with Astro. It's a great starting point for building your own
portfolio site.

This project leverages **Astro v5**, incorporating the latest features that Astro has to offer.
<p  style="text-align: center;">
  <img style="display: block; margin: 0 auto;" alt="Resume Cover preview" src="https://raw.githubusercontent.com/AlexAnasta/ana-portfolio/refs/heads/main/public/og-image.jpg"/>
</p>

## 🔥 Live

- [Live](https://anastasia-rusakovich.netlify.app/)

### Features
**Now upgraded to Astro v5**: the latest release of Astro.

- **Astro v5**: Utilizes the latest features of Astro for a fast and optimized static site.
- **Tailwind CSS**: Includes Tailwind CSS for easy and efficient styling.
- **ShadCN**: Implements ShadCN components for a modern and cohesive design system.
- **TypeScript**: Written in TypeScript for type safety and better developer tooling.
- **React Components**: Supports React components to provide a familiar component-based development workflow.
- **MDX Support**: Includes MDX support for writing content with Markdown and JSX.

### Figma Design

This project is based on the following Figma
design: [Simple Resume Portfolio](https://www.figma.com/community/file/1213010685692032886/simple-resume-portfolio).

## Table of Contents

- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Customization](#customization-and--styling)
- [Deployment](#deployment)
- [Good practices](#good-practices)
- [License](#license)

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- npm (usually comes with Node.js)

### Installation

1. **Clone the repository:**

    ```sh
    git clone <repository-url>
    cd astro-simple-portfolio
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Start the development server:**

    ```sh
    npm run dev
    ```

This will start the Astro development server. Open a browser and visit `http://localhost:4321` to see the site.

## Project Structure

| File/Folder      | Description                                                                                    |
|------------------|------------------------------------------------------------------------------------------------|
| `src/assets`     | Contains images and other assets used in the project.                                          |
| `src/components` | Contains React components used in the project.                                                 |
| `src/content`    | Contains the content for the site, such as projects, experiences, and educational information. |
| `src/data`       | Contains data files for the site, such as jobs, education, and skills.                         |
| `src/icons`      | Contains SVG icons used in the project.                                                        |
| `src/layouts`    | Contains the layout components for the site.                                                   |
| `src/pages`      | Contains the pages for the site.                                                               |
| `src/styles`     | Contains global styles for the site.                                                           |
| `src/config.ts`  | Contains configurations for the site.                                                          |
| `src/lib`        | Contains utility functions used in the project.                                                |
| `public`         | Contains static files such as images, favicons, and other assets.                              |


## Configuration

To configure the project, you can edit the following files:

### `src/config.ts`

This file contains several configurations for the site such as the site title, description, other metadata and your
personal details. This file has three main sections:

- SITE
- ME
- SOCIAL

Those sections are arrays of objects that contain the following properties:

#### SITE

table explaining the properties of each object:

| Property    | Type   | Description                                            |
|-------------|--------|--------------------------------------------------------|
| website     | string | The URL of your site.                                  |
| title       | string | The title of your site.                                |
| description | string | A brief description of your site.                      |
| tags        | string | Keywords related to your site.                         |
| ogImage     | string | The image used when sharing your site on social media. |
| logo        | string | The logo used for your site.                           |
| logoText    | string | The text used for the logo.                            |
| lang        | string | The language of your site.                             |
| favicon     | string | The icon used for your site.                           |
| repository  | string | The URL of the repository for your site.               |
| author      | string | The author of the site.                                |
| profile     | string | The url of the online profile of the author.           |

#### ME

table explaining the properties of each object:

| Property     | Type   | Description                                                             |
|--------------|--------|-------------------------------------------------------------------------|
| name         | string | Your name.                                                              |
| profession   | string | Your profession.                                                        |
| profileImage | string | The image used for your profile.                                        |
| profileFacts | object | An array of objects with the description and value of the fact.         |
| about        | string | A brief description about you.                                          |
| contactInfo  | object | An array of objects with the email, linkedin, and resumeDoc properties. |

#### SOCIAL

In this section, you can add your social media profiles. Each object should have the following properties:

- `name`: The name of the social media platform.
- `url`: The URL of your profile on that platform.
- `icon`: The icon used for the social media platform. By default, the project already have the most common social media
  platforms. If you want to add a new one, you should add the icon in SVG format in the `src/icons` directory.
- `show`: A boolean value to show or hide the social media platform. I recommend to hide the platforms that you don't
  have a profile and also have as maximum 4 social media platforms.

If you have configured the project correctly, you should see something like this:

![Personal Info Section](https://firebasestorage.googleapis.com/v0/b/biography-fa3a3.appspot.com/o/Screenshot%202024-11-22%20at%2018.39.59.png?alt=media&token=444bf708-da0a-4e19-8104-d5d071d73c53)

And also the Meta Tags in the Head of the HTML should be working correctly.

## Add your projects, experiences, and educational information


### Projects (as a Content Collection)

For projects, we are going to use the `src/content/projects` directory. Each project is a separate `.mdx` or `.md` file in this
directory. The file should have the following structure:

| Property   | Type     | Description                                                                                   |
|------------|----------|-----------------------------------------------------------------------------------------------|
| title      | string   | The title of the project.                                                                     |
| summary    | string   | A brief description of the project.                                                           |
| tags       | string[] | An array of tags related to the project.                                                      |
| startDate  | Date     | The start date of the project.                                                                |
| endDate    | Date     | The end date of the project.                                                                  |
| url        | string   | The URL of the project to show a demo or more information.                                    |
| cover      | string   | An image to show in the project card.                                                         |
| ogImage    | string   | An image to show when sharing the project on social media.                                    |                                    |

### Jobs (as array of objects file)

### `/src/data/Jobs.ts`

Contains the work experience you want to showcase. It's an array of objects where each object represents a job you have
held.

table explaining the properties of each object:

| Property    | Type     | Description                                                           |
|-------------|----------|-----------------------------------------------------------------------|
| title       | string   | The title of the job.                                                 |
| startDate   | Date     | The start date of the job.                                            |
| endDate     | Date     | The end date of the job.                                              |
| company     | string   | The name of the company.                                              |
| location    | string   | The location of the company.                                          |
| description | string   | A brief description of the job.                                       |
| goals       | string[] | An array of goals or achievements during the job.                     |
| currentJob  | boolean  | A boolean value to indicate if you are currently working in this job. |

### Education (as array of objects file)

### `/src/data/education.ts`

Holds the details regarding your educational background.

table explaining the properties of each object:

| Property    | Type    | Description                                                               |
|-------------|---------|---------------------------------------------------------------------------|
| title       | string  | The title of the degree or course.                                        |
| startDate   | Date    | The start date of the degree or course.                                   |
| endDate     | Date    | The end date of the degree or course.                                     |
| school      | string  | The name of the school or university.                                     |
| location    | string  | The location of the school or university.                                 |
| description | string  | A brief description of the degree or course.                              |
| currentUni  | boolean | A boolean value to indicate if you are currently studying in this school. |


### Hard Skills (as array of objects file)

`/src/data/hardSkills.ts`

Contains a list of skills you possess.

---

### Soft Skills (as array of objects file)

`/src/data/softSkills.ts`

Contains a list of skills you possess.

You can add, edit, or remove entries from these files to customize the content presented on your portfolio. Each file
typically exports an array of objects or strings that are consumed by various components in the project.

---

## Customization and  Styling

Styles can be customized in the `tailwind.config.js` file
and add your custom styles in the `src/styles/globals.css`.

To customize the colors, you can edit the theme section in the `tailwind.config.js` file.

---

## Deployment

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/vito8916/simple-portfolio.git#NODE_VERSION=20)

Or follow the steps below:

1. **Build the project:**

    ```sh
    npm run build
    ```

   This will generate the static files in the `dist` directory.

2. **FTP Deployment:**

   Upload the contents of the `dist` directory to your web server using FTP.

3. **Vercel Deployment:**

   Follow the steps on the [Vercel website](https://vercel.com/docs) to deploy your Astro project.

4. **GitHub Pages Deployment:**

   You can also deploy to GitHub Pages by pushing the `dist` folder to the `gh-pages` branch of your repository.

## Good Practices

Biome allow to check lint, format

```sh
npm run lint
npm run format
npm run check:fix
```

## License

This project is licensed under the [MIT License](LICENSE).