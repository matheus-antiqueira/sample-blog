const posts = [];

exports.createPost = (title, text) => {

    const post = {
        title: title,
        text: text
    };

    this.addPost(post);
};

exports.getPosts = () => {
    return posts;
}

exports.getPostByTitle = (title, formatFunction) => {
    return posts.find((x) => formatFunction(x.title) === formatFunction(title));
};

exports.addPost = (post) => {
    posts.push(post);
}