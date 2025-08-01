---
title: Best Project Structure For Next.js & React.js
author: Rahul Gajbhiye
category:
  - Development
keywords: "#Next.js #React.js"
date: 17-April-2025
---

> Not a good start is ok, but a good start is great.

Any application which is started small not always meant to be small, it will become big eventually. Hence I am sharing with you a project structure which I use for small to big applications build over Next.js & React.js to have a good foundation. By using this structure you will have maintainability, scalability, and consistency over the project and also allows you to focus more on the features rather than the code structure.

**/public** - to store static files like images, favicon, fonts etc.

**/src** - optionally but useful, it separates the application code & the infrastructure code.

**/app or /pages** (depends on which router you are using on next.js. Not required on React.js) - to store routable application code.

**/assets** - to store static files which require build-time optimizations and are part of application's components.

**/components** - to store components of application like forms, page sections & UI (small chucks like button, textbox, input).

**/configs** - to store constants like JSON Data & Metadata.

**/contexts or /stores** (depends on what you are using React Context API or React Redux) - to store state manage files like providers & slice.

**/hooks** - to store custom hooks.

**/lib** - to store common functions like helper functions, DB functions & utility functions.

**/schema** - to store schema files for DB & data validation library like Zod.

**/styles** - to store CSS files.

**/types** (only required if using Typescript) - to store declaration files.

**PS:** Code structure is a personal preference but having a good foundation gives you the sense of development.

**PS:** I have spend a lot of time finding the code consistency over projects. Due to which, I have lost precious time which can be utilized over developing the application or feature.
