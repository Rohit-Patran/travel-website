const PASSWORD = document.querySelector('#password');
const CONFIRM_PASSWORD = document.querySelector('#confirm-password');
const FORM = document.querySelector('.form-content');
const INPUT = document.querySelectorAll('input');
let c=1;
FORM.addEventListener('submit',check);
FORM.addEventListener('submit',passwordCheck);

INPUT.forEach(input=>{
    input.addEventListener('change',()=>{
        if(input.value!="")
        {
            input.className='';
    
        }
        else
        {
            input.className='error';
            input.placeholder = `${input.placeholder} cannot be empty`;
        }
    });
});

function check(event)
{

    for(let i=0;i<INPUT.length;i++)
    {
        if(INPUT[i].value == "")
        {
            event.preventDefault();
            INPUT[i].classList.remove('success');
            INPUT[i].classList.add('error');
            if(c==1)
            {
                INPUT[i].placeholder = `${INPUT[i].placeholder} cannot be empty !`;
            }
        }
        else{
            INPUT[i].classList.remove('error');
            INPUT[i].classList.add('success');
            INPUT[i].placeholder = `${FORM[i].placeholder}`;
        }
    }
    c--;
}

function passwordCheck(event) {
    if((PASSWORD.value != CONFIRM_PASSWORD.value) || PASSWORD.value=="" || CONFIRM_PASSWORD == "")
    {
        event.preventDefault();
        PASSWORD.classList.remove('success');
        CONFIRM_PASSWORD.classList.remove('success');
        PASSWORD.classList.add('error');
        CONFIRM_PASSWORD.classList.add('error');
    }
    else{
        PASSWORD.classList.remove('error');
        CONFIRM_PASSWORD.classList.remove('error');
        PASSWORD.classList.add('success');
        CONFIRM_PASSWORD.classList.add('success');
    }
}


