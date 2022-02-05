const INPUT = document.querySelectorAll('input');
const FORM = document.querySelector('.form-content');
const NUMVAL = [INPUT[0],INPUT[2],INPUT[3],INPUT[4]];
let c=1;
FORM.addEventListener('submit',check);
FORM.addEventListener('submit',numvalcheck);


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
            INPUT[i].className='error';
            if(c==1)
            {
                INPUT[i].placeholder = `${INPUT[i].placeholder} cannot be empty !`;
            }
        }
        else{
            INPUT[i].className='success';
            INPUT[i].placeholder = `${FORM[i].placeholder}`;
        }
    }
    c--;
}

function numvalcheck(event)
{
    for(let k=0;k < NUMVAL.length;k++)
    {
        if(isNaN(NUMVAL[k].value) || NUMVAL[k].value=="")
        {
            event.preventDefault();
            NUMVAL[k].className='error';
        }
        else
        {
            NUMVAL[k].className='success';
        }
    }
}