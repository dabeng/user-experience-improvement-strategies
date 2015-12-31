# User Experience Improvement Strategies
The key points are not jQuery plugins, Angular directives, React components or Polymer elements in here. We just share feasible solutions, reasonable thoughts and friendly reminders to improve user experience with the help of javascript.

**Note:** all the content of this artical is based on discussions and thoughts about improving User Experience of destop app of industrial business system.

##Ⅰ. What elements do you think an excellent User Experience of web apps should possess?
1. ★ The app should have its own distinct layout and theme color that impressed the people event though they don't often use this app. In short, creating **peculiar UI style** for your app.  
2. ★★ Without the help of user manual or user guide, target users can easily master the most of functionalites. Maybe 80% is an appropriate proportion. In short, highlighting the **usability** and **friendliness**.
3. ★★★ Displaying business data naturally, abstracting the business operation procedures and **improving work efficiency**. 
4. ★★★★ If users can smoothly finish their  all  tasks on the current UI, moreover it's a good trip for users,we can claim that the app have an excellent user experiecnce. In short, users **like and enjoy UI**.
5. Here, ★ represents the difficulty level of accomplishing.

## Ⅱ. We got the following main direction of attack on hand.
1. Consistent UI layout and theme color.
2. Apply well-designed UI widdgets(components or plugins).
3. Add animation effect to the existing static dom snippets.
4. Refactor the work flow to provide more clean and natural UI.
5. Remove the excessive packaging of UI interactions and recover the behavior of data displaying and data processing to its original state.
6. Draw inspiration from mobile apps.

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

![screen record](http://dabeng.github.io/user-experience-improvement-strategies/long-scrollbar/exampl1/screen-record.gif)

![screen record](http://dabeng.github.io/user-experience-improvement-strategies/long-scrollbar/exampl2/screen-record.gif)

For comments or logs section, appropriate identation is necessary.

### 3. Usability and Friendliness

Make full use of keys -- Tab, Shift, ↑, ↓, ←, etc.

Provide progress bar, loading spinner or any visible tips for long-running operations.

For division or classification tasks, drag-drop operation is a good choice.

Avoid making a distraction when user is doing a series of operation.

Do not overuse pagination, maybe the filter + dynamic loading is engouh.

Replace the abrupt alerts with customized warnning messages.

### 4. Animation

CSS animations are always preferred than JS animations, because generally accomplishing the same effect requires less code amount based on css.

The excessive animation may drag down page performance or distract users from their serious work.


### 5. Breaking Tradition

Allow the existence of overlap.

Allow the existence of asymmetry.

Allow the existence of asynchronous operations.


