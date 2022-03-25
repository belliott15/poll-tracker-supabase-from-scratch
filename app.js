import { signIn, signUp, getUser } from './fetch-utils.js';
// import functions and grab DOM elements
const signInForm = document.querySelector('#sign-in-form');
const signUpForm = document.querySelector('#sign-up-form');
// let state

// set event listeners 
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signInForm);
    await signIn(data.get('email'), data.get('password'));
    const user = await getUser();
    console.log(user);
    if (user){
        window.location.replace('./polls');
    }
});

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signUpForm);
    await signUp(data.get('email'), data.get('password'));

    const user = await getUser();
    if (user){
        window.location.replace('./polls');
    }
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
