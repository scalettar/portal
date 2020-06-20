These are some notes to myself on how things work and/or things I plan to implement.

## TODO REMINDER

* Create "Under Construction" placeholder app
  * For apps in progress, can include link to branch on github
* Replace blank apps with dummy placeholder style (currently when you hover over an invisible app there is a hover hand)
* Make consistent app icon set
* Create blog/articles section (Make this a separate website? articles.scalettar.com and also short alternate url)
  * Create basic UI
  * Ensure routing functions properly
  * Create database and tags system to easily manage posts

## APP PLANS

### About Technical

* STYLE: Minimal
* Brief introduction about technical skills/interests.
* Mini "resume"
* Explain the apps on this website and what they showcase (like Duolingo using API, Kindo for Reinforcement Learning, etc))
* Line that says: To learn about my personal interests besides CS, view the "About Me" app in the "Personal" folder.

### Language

* STYLE: Duolingo profile on iOS app
* Brief description of goal and link to Articles tagged with Language
* Update automatically via Duolingo API

### Health

* STYLE: Activity app on iOS
* Have simple Trends section on top
* Have a badges section which includes Longest Move Streak, Perfect Week, 7 Workout Week, and ### Move Goals (have tooltips when hovering over badges, can create this to work on both mobile and desktop like the way folder hover is implemented)
* Update manually once a month

### Music

* STYLE: Github
* Brief description of goal and link to Articles tagged with Music
* Practice log (replicate github commit chart)
* Also list the number of days played in last month
* Update manually every month
* Have the 5 songs I am learning/want to learn and the status:
  * Re-learned (100%) - Maple Leaf Rag - Scott Joplin 
  * Learned (100%) - Cohen's Masterpiece - Garry Schyman
  * Learning (50%) - Piano Concerto No. 1 "Anti-Ares" - Virkato Wakhmaninov
  * Re-learning (80%) - Every Heart - BoA
  * Re-learn (5%) - Prelude in C Sharp Minor - Sergei Rachmaninov
* For each song:
  *  Provide target mp3
  *  Link to relevant Article/blog section on my progress if one exists
* Next 5 songs once current are complete
  * Old Town - Kohei Tanaka
  * Merry Go Round of Life - Joe Hisaishi
  * Prelude in G Minor (Op. 23 No. 5) - Sergei Rachmaninov
  * Flower Dance - DJ Okawari
  * Re-learn (0%) - Forgot the name, have to find it

### Kindo

* STYLE: Kindo iOS app
* Rules button to display rules 
* Credits button to display credits
* Link to full website https://playkindo.com for complete game experience
* Basic game (fully playable but without advanced features like player profiles which will be available on the main website)

## LOGIC

### Loading app structure (top-down)

* HomePage: shows folders
* Folder: shows corresponding app icons AND has AppLoader hidden off-screen
* AppLoader: when an app icon is clicked, AppLoader css transition slides the AppLoader background div onto the screen (full screen)
* AppLoader: receives a property saying which app is open. It then loads the corresponding App's component which is the content which goes inside the AppLoader's background div

Why this structure? In order to have an app transition onto the screen (slide up), we hide it beneath the view. When the app icon is clicked in the Folder component, we want the hidden app to slide up. However, if we directly slide up the app itself with all of its content, then we are rendering every app in the folder even though most of them are hidden at any given time. This is unnecessary rendering. Instead, we hide a single blank AppLoader component off-screen. Then when an icon is clicked, the AppLoader slides up and also loads the appropriate App's content component in the AppLoader's background div.

Alternatively we could skip the AppLoader and just have each App hidden off-screen with blank content which only loads when clicked. But by passing through AppLoader we can minimize the number of hidden components loaded by the Folder component. Also it saves us rewriting the logic to hide the app contents on each app since we only have to do this once on the AppLoader.

### Potential Improvements

* All the folder components are very similar, could potentially make one generic component and pass in props
  * The styles are all the same except for loading specific icons. Could just make a single style which loads all icons
  * The component logic is almost the same except which icons are loaded. If made into a generic component, would have to change the layout from using multiple "items" containers with 3 apps each to a single "items" container which wraps to new row

## ARTICLES

TAGS:
* Technical
* Language
* Health
* Music
* Game Design
* Other

## BUGS

### Minor

* Scaling: When making screen narrow (like on a phone), folders/icons are not completely centered. They are a little shifted to the right

### Major

* None

