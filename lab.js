// function ajaxCall() {
//     var ajaxRequest = new XMLHttpRequest();

//     ajaxRequest.onreadystatechange = function() {
//         if (ajaxRequest.readyState == XMLHttpRequest.DONE ) {
//            if (ajaxRequest.status == 200) {
//                var myDiv = document.querySelector('.main');
//                var newDiv = document.createElement('div');
//                newDiv.innerHTML = ajaxRequest.responseText;
//                myDiv.appendChild(newDiv);
//                console.log(ajaxRequest);
//            }
//            else if (ajaxRequest.status == 400) {
//               console.log('There was an error 400');
//            }
//            else {
//               console.log('something else other than 200 was returned');
//            }
//         }
//     };

//     ajaxRequest.open("GET", 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', true);
//     ajaxRequest.send();
// }

// (function(document){
//   var myBtn = document.getElementById('myButton');
//   myBtn.addEventListener('click', ajaxCall);
// })(document);


var list = $('#listOne');
$('#deleteList').click(function(){
    $('li').remove();
})

$('#myButton').click(function(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(posts){
    $('li').remove();
    posts.forEach(function(post){
		var li = $('<li></li>');
		li.text(JSON.stringify(post));
        list.append(li);
    })
    console.log(posts);
})
})


$('#button2').click(function(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{id:10}, function(posts){
    $('li').remove();
    posts.forEach(function(post){
		var li = $('<li></li>');
		li.text(JSON.stringify(post));
        list.append(li);
    })
    console.log(posts);
})
})



$('#button3').click(function(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments',{id:12}, function(comments){
    $('li').remove();
    comments.forEach(function(comment){
		var li = $('<li></li>');
		li.text(JSON.stringify(comment.body));
        list.append(li);
    })
    console.log(comments);
})
})


$('#button4').click(function(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{userID:2}, function(posts){
    $('li').remove();
    posts.forEach(function(post){
		var li = $('<li></li>');
		li.text(JSON.stringify(post));
        list.append(li);
    })
    console.log(posts);
})
})


$('#button5').click(function(){
var postTitle = 'Hello';
var postBody = 'World';
    $.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{title: postTitle, body: postBody})
    .done(function(data){
        console.log(data);
        $('li').remove();
        var li = $('<li></li>');
		li.text('New post id is: ' + data.id);
        list.append(li);
    })
})










$('#test').click(function(){
    $.ajax({
        method: 'PUT',
        url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/2',
        data: {completed: false, title: "Teach REST", userId: 2},
        complete: function(response){
            $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{userID:2}, function(posts){
                $('li').remove();
                posts.forEach(function(post){
                    var li = $('<li></li>');
                    li.text(JSON.stringify(post));
                    list.append(li);
                })
            console.log(posts);
            })
            console.log(response);
            //handle response which usually includes the updated object.
        }
    })
})