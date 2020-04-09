These are just some notes to myself on how things work and/or things I plan to implement.

## TODO REMINDER
* None

## LOGIC

### Loading app structure (top-down)
* HomePage: shows folders
* Folder: shows corresponding app icons AND has AppLoader hidden off-screen
* AppLoader: when an app icon is clicked, AppLoader css transition slides the AppLoader background div onto the screen (full screen)
* AppLoader: receives a property saying which app is open. It then loads the corresponding App's component which is the content which goes inside the AppLoader's background div

Why this structure? In order to have an app transition onto the screen (slide up), we hide it beneath the view. When the app icon is clicked in the Folder component, we want the hidden app to slide up. However, if we directly slide up the app itself with all of its content, then we are rendering every app in the folder even though most of them are hidden at any given time. This is unnecessary rendering. Instead, we hide a single blank AppLoader component off-screen. Then when an icon is clicked, the AppLoader slides up and also loads the appropriate App's content component in the AppLoader's background div.

Alternatively we could skip the AppLoader and just have each App hidden off-screen with blank content which only loads when clicked. But by passing through AppLoader we can minimize the number of hidden components loaded by the Folder component. Also it saves us rewriting the logic to hide the app contents on each app since we only have to do this once on the AppLoader.

## BUGS

### Minor
* Scalability: When making screen narrow (like on a phone), folders/icons are not completely centered. They are a little shifted to the right

### Major
* None

