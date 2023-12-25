//Create date variable
var date=new Date()
let display_date="date:"+date.toLocaleDateString()
$(document).ready(function(){
    $("#display_date").html(display_date)
})
let predicted_emotion;
$(function(){
    $("#predict_button").click(function(){
        let input_data={
            "text":$("#text").val()

        }
    })
})
//Load HTML DOM

//Define variable to store predicted emotion


//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//jQuery selector and click action

$(function () {
    $("#predict_button").click(function () {
        //AJAX call

        $.ajax({
            type:'POST',
            url:"/predict-emotion",
            data:JSON.stringyify(input_data),
            dataType:"json",
            contentType:'application/json',
            success:function(result){
                predicted_emotion=result.data.predicted_emotion
                emo_url=result.data.predicted_emotion_img_url
                $("#prediction").html(predicted_emotion)
                $('#prediction').css("display","block");
                $("#emo_img_url").attr('src',emo_url);
                $('#emo_img_url').css("display","block");
            }
            
              {
                
                // Result Received From Flask ----->JavaScript
                
                // Display Result Using JavaScript----->HTML
                
            },
            error:function(result){
                alert(result.responseJSON.message)
            }
            //Error function
            
        });
    });
})

