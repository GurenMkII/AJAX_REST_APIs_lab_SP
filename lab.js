// var list = $('#listOne');
// $('#deleteList').click(function(){
//     $('li').remove();
// })

// $('#myButton').click(function(){
// $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(posts){
//     $('li').remove();
//     posts.forEach(function(post){
// 		var li = $('<li></li>');
// 		li.text(JSON.stringify(post));
//         list.append(li);
//     })
//     console.log(posts);
// })
// })


// $('#button2').click(function(){
// $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{id:10}, function(posts){
//     $('li').remove();
//     posts.forEach(function(post){
// 		var li = $('<li></li>');
// 		li.text(JSON.stringify(post));
//         list.append(li);
//     })
//     console.log(posts);
// })
// })



// $('#button3').click(function(){
// $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{id:14}, function(comments){
//     $('li').remove();
//     comments.forEach(function(comment){
// 		var li = $('<li></li>');
// 		li.text(JSON.stringify(comment.body));
//         list.append(li);
//     })
//     console.log(comments);
// })
// })


// $('#button4').click(function(){
// $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{userID:2}, function(posts){
//     $('li').remove();
//     posts.forEach(function(post){
// 		var li = $('<li></li>');
// 		li.text(JSON.stringify(post));
//         list.append(li);
//     })
//     console.log(posts);
// })
// })


// $('#button5').click(function(){
// var postTitle = 'Hello';
// var postBody = 'World';
//     $.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{title: postTitle, body: postBody})
//     .done(function(data){
//         console.log(data);
//         $('li').remove();
//         var li = $('<li></li>');
// 		li.text('New post id is: ' + data.id);
//         list.append(li);
//     })
// // $.ajax({
// //     url: "https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts",
// //     type: "POST",
// //     data: {
// //         body: "hhhhhhhhhhhhhddddddddddddddddddssssssssssssssssssss",
// //         title: "newest title"
// //     },
// //     success: function(response){
// //         console.log(response);
// //     },
// // });
// })


// $('#button6').click(function(){
//     $.ajax({
//         url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',
//         type: 'PUT',
//         dataType: 'json',
//         data: {
//             title: "Teach REST", 
//             body: "LLLLsdkdjgnksngkjsdngfksdnf sdskdfs dbgfsabgf ashgfbsahfbas glsbfashgf asj nbv"
//         },
//         complete: function(response){
//             console.log(response);
//             $('li').remove();
//             var li = $('<li></li>');
// 		    li.text('responseJSON: ' + JSON.stringify(response.responseJSON));
//             list.append(li);
//         }
//     })
// })


// $('#button7').click(function(){
//     $.ajax({
//         url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',
//         type: 'PUT',
//         dataType: 'json',
//         data: {
//             title: 'updated',
//         },
//         complete: function(response) {
//             console.log(response);
//             $('li').remove();
//             var li = $('<li></li>');
// 		    li.text('responseJSON: ' + JSON.stringify(response.responseJSON));
//             list.append(li);
//         }
//     });
// })


// $('#button8').click(function(){
//     $.ajax({
//         url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',
//         type: 'DELETE',
//         complete: function(response) {
//             console.log(response);
//             $('li').remove();
//             var li = $('<li></li>');
//             li.text('responseJSON: ' + JSON.stringify(response.statusText));
//             list.append(li);
//         }
//     });
// })


// $('#button9').click(function(){
//     $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(posts){
//         $('li').remove();
//         posts.forEach(function(post){
//             var li = $('<li></li>');
//             li.text(JSON.stringify(post));
//             list.append(li);
//         })
//         console.log(posts);
//     })
// })


//END OF EXERCISE ! |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||












// function testNum(num){
//     p = new Promise((resolve, reject) => {
//         if (num > 50 || num < 50){
//             resolve(num + ' is less than or greater than 50');
//         } else {
//             reject(num + ' is equal to 50! ERROR.');
//         }
//     })
//     return p;
// }
// testNum(11)
//     .then(function(result){
//         console.log(result);
//     })
//     .catch(function(error){
//         console.log(error);
//     })




//END OF EXERCISE 2 |||||||||||||||||||||||||||||||||||||||




var arr = ['zebra','middle','clown','queen','ford','apple'];

function makeAllCaps(arr){
    return new Promise(function(resolve,reject){
        let capsArr = arr.map(function(word){
            if(typeof word === 'string'){
                return word.toUpperCase();
            } else {
                reject('NOT ALL ITEMS IN THE ARRAY ARE STRINGS!!!');
            }
        })
        resolve(capsArr);
    })
}
function sortWords(arr){
    return new Promise(function(resolve,reject){
        if(arr){
            arr.forEach(element => {
                if(typeof element !== 'string'){
                    reject('NOT ALL ITEMS IN THE ARRAY ARE STRINGS!!!')
                }
            });
            resolve(arr.sort());
        } else {
            reject('SORTING UNSUCCESSFUL!!!');
        }
    })
}

makeAllCaps(arr)
    .then(sortWords)
    .then(function(result){
        console.log(result);
    })
    .catch(error => console.log(error));