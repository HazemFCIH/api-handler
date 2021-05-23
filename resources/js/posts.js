export function CreatePost(postData){
    const tk = JSON.parse(localStorage.getItem('user'));
    const headers = {
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer' + tk['token'],

    };
    return new Promise((res,rej) =>{
        axios.post('v1/api/posts',postData,{headers})
            .then(response => {
                res(response.data);
            }).catch(err =>{
            rej('Post didn\'t save');
        })
    })

}
