var superHero = 'Captain America';
//Switch case uses strict equality operator.
switch (superHero) {
    case 'Iron man':
        console.log('I am Iron man.');
        break;
    case 'Thor':
        console.log('This is my hammer.');
        break;
    case 'Black widow':
        console.log('One shot, one kill.');
        break;
    case 'Captain America':
        console.log('This is my shield.');
        break;

        //When there is no possibilities, the default statement executes
    default:
        console.log('Enter a valid hero name.');
        break;
}