const user_name = document.querySelector('#name'); 
const user_email = document.querySelector('#email');
const user_msg = document.querySelector('#message');
const send_button = document.querySelector('button');
const alert_msg = document.querySelector('.alert-message');
const FORM = document.querySelector('.form-content');

FORM.addEventListener('submit',check);

function check(event)
{
    if(user_name.value == "" || user_email.value == "" || user_msg.value == "")
    {
        event.preventDefault();
        alert_msg.innerHTML = "Please check input values";
        alert_msg.classList.add('error');
    }
    else
    {
        alert_msg.innerHTML = "Message succesfully sent";
        alert_msg.classList.add('success');
    }

    setTimeout(()=>{
        alert_msg.classList.remove('error');
        alert_msg.classList.remove('success');
    },5000);
}

