var posts=["posts/37376.html","posts/57701.html","posts/9daba997.html","posts/51393.html","posts/60d9c4db.html","posts/fcb8725d.html","posts/24844.html","posts/e8e90389.html","posts/20763.html","posts/27281.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};