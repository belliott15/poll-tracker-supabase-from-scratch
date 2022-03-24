export function renderPoll(question, name1, vote1, name2, vote2){
    const div = document.createElement('div');
    const questionEl = document.createElement('h2');
    const option1Div = document.createElement('div');
    const option1El = document.createElement('p');
    const vote1El = document.createElement('p');
    const vsEl = document.createElement('h2');
    const option2Div = document.createElement('div');
    const option2El = document.createElement('p');
    const vote2El = document.createElement('p');

    questionEl.textContent = question;
    option1El.textContent = name1;
    vote1El.textContent = vote1;
    option2El.textContent = name2;
    vote2El.textContent = vote2;
    vsEl.textContent = 'VS';
    
    option1Div.append(option1El, vote1El);
    option2Div.append(option2El, vote2El);

    div.append(questionEl, option1Div, vsEl, option2Div);
    
    return div;
}