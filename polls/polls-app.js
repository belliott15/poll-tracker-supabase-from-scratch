import { getPolls, 
    createPolls, 
    getUser, 
    logout } from '../fetch-utils.js';
import { renderPoll } from '../render-utils.js';

const userFormEl = document.querySelector('#user-form');
const currentPollEl = document.getElementById('poll-display');
const pastPollsEl =document.querySelector('#past-polls-display');

const option1AdditionButton = document.querySelector('#option-1-addition');
const option1SubtractionButton = document.querySelector('#option-1-subtraction');
const option2AdditionButton = document.querySelector('#option-2-addition');
const option2SubtractionButton = document.querySelector('#option-2-subtraction');

const publishVoteButton = document.querySelector('#publish-vote');

let question = '';
let name1 = '';
let name2 = '';
let vote1 = 0;
let vote2 = 0;

userFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(userFormEl);
    question = data.get('question-input');
    name1 = data.get('option-1-input');
    name2 = data.get('option-2-input');

    userFormEl.reset();
    displayCurrentPoll();
});

option1AdditionButton.addEventListener('click', () => {
    vote1++;
    displayCurrentPoll();
});

option1SubtractionButton.addEventListener('click', () => {
    if (vote1 > 0) {
        vote1--;
    } 
    displayCurrentPoll();

});

option2AdditionButton.addEventListener('click', () => {
    vote2++;
    displayCurrentPoll();
});

option2SubtractionButton.addEventListener('click', () => {
    if (vote2 > 0) {
        vote2--;
    }
    displayCurrentPoll();
});

publishVoteButton.addEventListener('click', async () => {
    const poll = {
        question: question,
        name_1: name1, 
        vote_1: vote1,
        name_2: name2,
        vote_2: vote2
    };
    await createPolls(poll);
    await displayPastPolls();

    question = 'Question';
    name1 = 'Option 1';
    vote1 = 0;
    name2 = 'Option 2';
    vote2 = 0;

    displayCurrentPoll();
});

function displayCurrentPoll(){
    currentPollEl.textContent = '';

    const currentPoll = renderPoll(question, name1, vote1, name2, vote2);
    currentPollEl.append(currentPoll);
}

async function displayPastPolls() {
    pastPollsEl.textContent = '';
    const allPolls = await getPolls();
    for (let poll of allPolls){
        const pastPolls = renderPoll(poll.question, poll.name_1, 
            poll.vote_1, poll.name_2, poll.vote_2);
        pastPollsEl.append(pastPolls);
    }

}