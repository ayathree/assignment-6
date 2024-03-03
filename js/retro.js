const loadAllPost = async()=>{
    const res = await fetch(' https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json();
    const posts = data.posts
    console.log(posts);


    const allPostContainer = document.getElementById('all-post-container');
    posts.forEach((post) => {
        console.log(post)
        const div = document.createElement('div');
        div.classList = `card  bg-gray-100  m-4  p-4`;
        div.innerHTML=`
    
       <div class="flex flex-col lg:flex-row justify-between  gap-3">
       <div class="relative h-[60px] w-[60px] lg:w-[80px] rounded-lg">
       <img  src="${post.image}" alt="">              
       <p class="rounded-full bg-green-500 h-[12px] w-[12px] absolute -top-1  left-12"></p>
       </div>
       <div >
       <div class="flex flex-row  gap-4 mb-3">
       <p>#${post.category}</p>
       <p>Author:${post.author.name}</p>

       </div>
       <div class="mb-3">
       <h1 class=" font-bold">${post.title}</h1>
       </div>
       <div class="mb-3">
       <p>${post.description}</p>
       </div>
       <hr class="mb-3">
       <div class="flex flex-col lg:flex-row justify-between items-center "> 
       <div class="flex flex-row justify-between items-center gap-3">
       <div class="flex flex-row justify-between items-center gap-2">
       <i class="fa-regular fa-message"></i>
       <p>${post.comment_count}</p>
       </div >
       <div class="flex flex-row justify-between items-center gap-2">
       <i class="fa-regular fa-eye"></i>
       <p>${post.view_count}</p>
       </div>
       <div class="flex flex-row justify-between items-center gap-2">
       <i class="fa-regular fa-clock"></i>
       <p>${post.posted_time}</p>
       </div>
       </div>
       <div>
       <button class="btn rounded-full h-[50px] w-[50px] p-2 bg-green-500 text-white"><i class="fa-solid fa-envelope-open"></i></button>
       </div>
       </div>
       </div>
       </div>

       
    
        `;
        allPostContainer.appendChild(div);

        
    });
}


loadAllPost();