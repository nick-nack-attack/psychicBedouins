'use strict'

function getPost() {
    const posts = [];
    STORE.forEach(post => {
        posts.push(`
            <div class="single_post">
                <img class="${post.image[0]}" src="${post.image[1]}" alt="${post.image[2]}" >
                <h3>${post.title}</h3>
                <h4>${post.date_created}</h4>
                <p>${post.content}</p>
            </div>
        `)
    })
    return posts;
}

function generateAllPosts() {
    $('#main-area').append(getPost().join(''))
}

function runPage() {
    getPost()
    generateAllPosts()
}

runPage()