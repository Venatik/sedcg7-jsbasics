$(document).ready(function () {
    let g7 = {
        trainer: "Panche Manaskov",
        assistant: "Aleksandar Milovski",
        students: [
            "Ivan Popovski",
            "Matej Bazerkovski",
            "Nenad Ilievski"
        ],
        academy: "Web Development",
        subject: "JavaScript Basic"
    }

    console.log(g7);

    // JSON.stringify converts JS objects to JSON (string)
    let jsonObject = JSON.stringify(g7);
    console.log(jsonObject);

    // JSON.parse converts JSON back to Javascript
    let backToJs = JSON.parse(jsonObject);
    console.log(backToJs);

    // ==============AJAX call==============
    let button = $("#btn");

    button.click(function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            success: function (users) {
                console.log("Success!")
                console.log(users);

                // for (let user of users) {
                //     $("#userList").append(`<li>${user.name} - ${user.phone}</li>`)
                // }

                showUsers(users); // Same as above but in a separate function, then we just call the function
            },
            error: function () {
                console.log("An error has occured, please try again later.")
            }
        })
    });

    function showUsers(usersList) {
        for (let user of usersList) {
            $("#userList").append(`<li>${user.name} - ${user.phone}</li>`)
        }
    }

    // ==============Fetch==============
    let fetchButton = $("#btnFetch");

    fetchButton.click(function () {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (parsedResult) {
                console.log(parsedResult);
                showUsersFetch(parsedResult);
            })
            .catch(function (error) {
                console.log("Error!", error);
            })
    });

    function showUsersFetch(usersList) {
        for (let user of usersList) {
            $("#userListFetch").append(`<li>${user.name} - ${user.phone}</li>`)
        }
    }

    // ==============Get post - AJAX==============
    let postButton = $("#postBtn");
    let postDiv = $("#postDiv");

    function getPost(id) {
        $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            success: function (resultPost) {
                console.log(resultPost);
                postDiv.append(`<h3>${resultPost.title}</h3>`);
                postDiv.append(`<p>${resultPost.body}</p>`);
            },
            error: function (err) {
                console.log(err)
            }
        })
    }
    postButton.click(function () {
        getPost(2);
    })
    // Try to do with Fetch for homework
});