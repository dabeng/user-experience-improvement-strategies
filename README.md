# User Experience Improvement Strategies
The key points are not jQuery plugins, Angular directives, React components or Polymer elements in here. We just share feasible solutions, reasonable thoughts and friendly reminders to improve user experience with the help of javascript.
##Ⅰ. What elements do you think an excellent User Experience of web apps should possess?
1. ★The app should have its own distinct layout and theme color that impressed the people event though they don't often use this app. In short, creating **peculiar UI style** for your app.  
2. ★★Without the help of user manual or user guide, target users can easily master the most of functionalites. Maybe 80% is an appropriate proportion. In short, highlighting the **usability** and **friendliness**.
3. ★★★  business operation procedures
4. ★★★★  If users can smoothly finish their  all  tasks on the current UI, moreover it's a good trip for users,we can claim that the app have an excellent user experiecnce. In short, users **like UI and enjoy UI**.

## Ⅱ. We got the following main direction of attack on hand.
1. consistent UI layout and theme color
2. apply well-designed UI widdgets(components or plugins)
3. refactor 

## Ⅲ. Acculated  tips or tricks.

### 1. Coding

Do not overuse UI libraries.

Do not mix up UI libraries as far as possible.

### 2. Layout

Do not make interface shake.

Anytime, we just provide users with only one edit status.

Anytime, the screenshot of your application should be unnderstood unambiguously.

Do not overuse modals.

Do not overuse scrollbars.
* Anytime, do not keep more than 3 parallel horizontal scrollbars in the full browser width view.
* Do not nest divs with scrollbar.

When you got a long scrollbar, you need to think about which elements should be kept fixed(e.g. navigation bar)and which elements should be hidden.

For comments or logs section, appropriate identation is necessary.

### 3. Usability and Friendliness

Make full use of keys -- Tab, Shift, ↑, ↓, ←, etc.

Provide progress bar, loading spinner or any visible tips for long-running operations.

For division or classification tasks, drag-drop operation is a good choice.

Avoid making a distraction when user is doing a series of operation.

Do not overuse pagination, maybe the filter + dynamic loading is engouh.

Replace the abrupt alerts with customized warnning messages.

### 4. Animation

CSS animations are always preferred than JS animations.
