(function(){

    document.getElementById('message-form').addEventListener('submit',function(e){

        const message=document.getElementById('message');
        const value= message.value;

        if(value===''){
            const feedback=document.querySelector('.feedback');
            feedback.classList.add('show');
            setTimeout(function(){
                feedback.classList.remove('show');
            },2000);

           // lastMessage.classList.add('hide');
        }
        else{
            document.querySelector('.message-content').textContent=value;
            const lastMessage=document.getElementById('lastMessage');

            lastMessage.classList.add('show');
            message.value='';


        }




        e.preventDefault();
    })



})();