const FORM = document.querySelector('.form-content');
const INPUT = document.querySelectorAll('input');
const SELECT = document.querySelector('select');
const CLEAR_BUTTON = document.querySelector('button[type="reset"]');
let c=1;

CLEAR_BUTTON.addEventListener('click',()=>{
    INPUT.forEach(input=>{
        input.className = '';
    });
    SELECT.className='';
});

FORM.addEventListener('submit',check);

function check(event)
{

    for(let i=0;i<FORM.length-2;i++)
    {
        if(FORM[i].value == "")
        {
            event.preventDefault();
            FORM[i].className='error';
            if(c==1)
            {
                FORM[i].placeholder = `${FORM[i].placeholder} cannot be empty !`;
            }
        }
        else{
            FORM[i].className='success';
            FORM[i].placeholder = `${FORM[i].placeholder}`;
        }
    }
    c--;
}

INPUT.forEach(input=>{
    input.addEventListener('change',()=>{
        if(input.value!="")
        {
            input.className='success';
        }
        else
        {
            input.className='error';
            input.placeholder = `${input.placeholder} cannot be empty`;
        }
    });
});

SELECT.addEventListener('change',()=>{
    if(SELECT.value!="")
    {
        SELECT.className='success';
    }
    else
    {
        SELECT.className='error';
    }
});
