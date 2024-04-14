# Project Title

## Overview

An app that recommends anime based on other media the user likes.

### Problem

Why is your app needed? Background information around any pain points or other reasons.

When i usually mention anime to someone i am met with the response "I want to get into anime but i dont know where to start". This app will resolve this by giving the user an anime they may like.

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

People who want to get into anime would use the app as well as people who want to search for new anime shows.

### Features

AI PrompPage, Users select their favourite movie from the dropdown list.

A page that displays all the available anime in the Array, Displays data from the Jikan API.

Recommendations, Displays the reommendations given by the AI from the users input.

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

Material UI
SCSS
React

### APIs

List any external sources of data that will be used in your app.

Open AI - Takes the favourite video from the front end and comes up with an equivalent Anime movie which is returns

Jikan API - Takes the OpenAI returned movie and searches for it, returns the detailed Anime movie information

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

Homepage - Will welcome the user (?) to the sign and ask for a prompt as to what media they like.

Anime list page - a page with all the best anime and most popular anime at the moment that comes from the JSON array.

Recommendation page - a page with the recommendations that the user got from the initial prompt.

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

No database

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

/ - Homepage

/anime

/recommendations

/anime/:animeID - a specific anime based on ID or name (Clicking on one of the movies from the Anime or recommendations page) ------ this is part of the nice-to-have-plans

/anime/:animeID/reviews ----- this one is part of the nice-to-have plans

### Auth

No Authentication by default might be added as a potential feature after other features are made.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

By Demo Day have implemented some of my nice to haves:

Would like to have authentication and a Users table.

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

Log-in feature for exisiting users to save their recommendations.

A review system

authentication

a review page

database with users table, and a table that holds the users recommendations so they can be revisited on future logins
Co
