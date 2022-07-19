import axios from "axios";

async function getData(id) {
    let {data:user} = await axios("https://jsonplaceholder.typicode.com/users/"+id)

    let {data:post} = await axios("https://jsonplaceholder.typicode.com/posts?userId="+id)

    return {user, post}
}

export default getData