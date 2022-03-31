## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
![Wireframe for poll tracker with supabase](/assets/Poll%20tracker%20supabase.png "wireframe for poll tracker with supabase")
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

## sign in page HTML
-header, body, footer
-header div to display name of app
-body
  -section to hold divs
    -div to hold sign up information
      -input for email required name="email"
      -input for password required name ="password"
      -button to submit and get user id through supabase
        -if requirements not met redirect to sign in page
    -div to hold sign in information
      -input for email required name="email"
      -input for password required name ="password"
      -button to submit and get user id through supabase
         -if requirements not met redirect to sign in page

## poll tracker HTML
-header, body, footer in template
- header div to display poll tracker
-body
  -section 1
    -div
      -form tag 
        -3 inputs
        -3 p tags
        -button
  -section 2
    -h2 to display question
    -2 buttons to increment/decrement option 1 votes
      -p tag each
    -div
      -ptag for option 1
      -ptag for vote 1
    -h2 tag for vs text
    -div
      -ptag for option 2
      -ptag for vote 2
    -2 button to increment/decrement option 2 votes
    -button to publish results into the pastvotes section
  -section 3
    -div to display previous votes
      -uses same format to display past as was used to display current

## state in "polls" supabase
-question
-option1
-option2
-vote1
-vote2

## events
sign in button to sign in users
sing up button to sign up users
form submit to get user data into the display current vote
4 buttons to increment or decrement the votes
a publish button to push information into supabase and pull it back to render in display previous votes
load window to display history of games
logout button to return to home screen an sign in or sign up

![screenshot of rubric](/assets/rubric.png "rubric screenshot")