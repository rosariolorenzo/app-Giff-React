
    
export default function getGiffs (keyword = {} ){
    const url = 'https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=67LpuqUho8rXkCtUopQE0R2JNkZWghK5&limit=25&offset=0&rating=g&lang=en'
   return fetch(url)
        .then(res => res.json())
        .then(response => {
        const {data} = response
        const gifs = data.map(image =>
             {
                 const{images, title , id} = image
                 const {url} = images.downsized_medium
                return{title , id, url}
            })
        return gifs
    }
    )
   
}