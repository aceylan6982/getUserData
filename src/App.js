
import axios from "axios";


async function getData(num) {

    const { data: getUser } = await axios("https://jsonplaceholder.typicode.com/users/" + num)
    const { data: getPost } = await axios("https://jsonplaceholder.typicode.com/posts?id=" + num)

    return {getUser , getPost}

}

export default getData