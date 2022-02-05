const FORM = document.querySelector('.form-content');
const INPUT = document.querySelectorAll('input');
let c=1;
FORM.addEventListener('submit',check);

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