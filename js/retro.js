let category = '';

const loadAllPost = async(cateName)=>{
    category = cateName;
    const loadSpin =document.getElementById('loading');
    loadSpin.classList.remove('hidden')
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${cateName}`)
    const data = await res.json();
    const posts = data.posts
    console.log(posts);


    const allPostContainer = document.getElementById('all-post-container');
    allPostContainer.innerHTML ='';
   setTimeout(()=>{
    posts.forEach((post) => {
        let p = '';
        if (post.isActive === false) {
           p= `<p  class="rounded-full bg-red-500 h-[12px] w-[12px] absolute -top-1  -right-1"></p>`
              
         }
         else{
            p= `<p  class="rounded-full bg-green-500 h-[12px] w-[12px] absolute -top-1  -right-1"></p>`
         }

         const loadSpin =document.getElementById('loading');
    loadSpin.classList.add('hidden')
         
        console.log(post)
        const div = document.createElement('div');
        div.classList = `card  bg-gray-100  m-4  p-4`;
        div.innerHTML=`
    
       <div class="flex flex-col lg:flex-row justify-center  gap-3">
       <div class="relative h-[60px] w-[60px] lg:w-[80px] rounded-lg ">
       <img  src="${post.image}" alt="">              
      ${p}
       </div>
       <div class="flex-1" >
       <div class="flex flex-row  gap-4 mb-3">
       <p>#${post.category}</p>
       <p>Author:${post.author.name}</p>

       </div>
       <div class="mb-3">
       <h1 id="new-title"  class=" font-bold">${post.title}</h1>
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
       <div  class="flex flex-row justify-between items-center gap-2">
       <i class="fa-regular fa-eye"></i>
       <p id="new-view">${post.view_count}</p>
       </div>
       <div class="flex flex-row justify-between items-center gap-2">
       <i class="fa-regular fa-clock"></i>
       <p>${post.posted_time}</p>
       </div>
       </div>
       <div>
       <button onclick="addTitle('${post.title.replace(/'/g, "")}', '${post.view_count}')" class="btn rounded-full h-[50px] w-[50px] p-2 bg-green-500 text-white"><i class="fa-solid fa-envelope-open"></i></button>
       </div>
       </div>
       </div>
       </div>
       
       `;
       allPostContainer.appendChild(div);
    });
},2000)


}

let seatCount = 0;
const addTitle = (title,view)=>{
    
    const marked = document.getElementById('mark-count');
    seatCount = seatCount + 1
    marked.innerHTML = `${seatCount}`;
    // const newTitle = document.getElementById('new-title');
    // const title = newTitle.innerText
    // console.log(title);
    // const newView = document.getElementById('new-view');
    // const view = newView.innerText
    // console.log(view)
    
    const selectTitle =document.getElementById('select-title');
    const selectDiv = document.createElement('div');
    selectDiv.classList =`bg-white p-5 mb-5 rounded-lg`
    selectDiv.innerHTML=`
    <div class="flex flex-row justify-between items-center">
    <div class="">
    <h1  class="text-xs font-bold">${title}</h1>
    </div>
    
    <div class="flex flex-row justify-between items-center gap-2">
    <i class="fa-regular fa-eye"></i>
    <p >${view}</p>
    </div>
    </div>
    
    `;
    selectTitle.appendChild(selectDiv)
    
    
}

const loadLatestPost = async()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json();
    const posts = data; 
    console.log(posts);

    const latestPost = document.getElementById('latest-post');
    posts.forEach((item) => {
        console.log(item)
        const div = document.createElement('div');
    div.classList= `card  bg-base-100 shadow-xl `;
    div. innerHTML= `
    <figure class="px-10 pt-10 mb-3">
     <img src="${item.cover_image}" alt="" class="rounded-xl" />
    </figure>
    <div class="flex flex-row items-center gap-3 px-6">
    <i class="fa-regular fa-calendar "></i>
    <p>${item?.author?.posted_date || 'No Publish Date'}</p>
    </div>
    <div class="p-6">
    <h2 class="card-title">${item.title}</h2>
    <p>${item.description}</p>
    <div class=" flex flex-row items-center gap-5 mt-6">
    <div class="h-[50px] w-[60px] lg:w-[50px]  ">
    <img class="rounded-full" src="${item.profile_image}" alt="">
    </div>
    <div class="flex flex-col items-center ">
    <p>${item.author.name}</p>
    <p>${item?.author?.designation ||'Unknown'}</p>
    </div>
    </div>
    </div>
    
    `;
    latestPost.appendChild(div);
        
    });
    


}

const handleSearch=()=>{
    const inputSearch = document.getElementById('input-box').value;
    if (inputSearch) {
        loadAllPost(inputSearch)
        
    }
    else{
        alert('invalid');
    }


}


loadLatestPost();
loadAllPost(category);