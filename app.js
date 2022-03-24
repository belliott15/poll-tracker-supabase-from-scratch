import { signIn, signUp, getUser } from './fetch-utils';
// import functions and grab DOM elements
const signInForm = document.querySelector('#sign-in-form');
const signUpForm = document.querySelector('#sign-up-form');
// let state

// set event listeners 
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signInForm);
    const email = data.get('email');
    const password = data.get('password');
    await signIn(email, password);

    const user = await getUser();

    if (user){
        window.href = './polls';
    }
});

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(signInForm);
    const email = data.get('email');
    const password = data.get('password');
    await signUp(email, password);

    const user = await getUser();
    if (user){
        window.href = './polls';
    }
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
