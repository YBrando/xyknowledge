let txt = document.title;
txt = txt.slice(txt.length - 11, txt.length);
let backBtn = document.getElementById("backBtn");
backBtn.style.visibility = "hidden";
let r = document.querySelector(':root').style;

if(txt == "XYKnowledge"){
    r.setProperty('--white', '#ffffff');
    r.setProperty('--black', '#000000');
    r.setProperty('--color1', '#303841');
    r.setProperty('--color2', '#657991');
    r.setProperty('--color3', '#cfc7be');
    r.setProperty('--image1', 'url(https://cdn.discordapp.com/attachments/924981157819478096/1175526109241151569/XYKnowledgeLogo.png?ex=656b8d00&is=65591800&hm=17047828925f0d6f0b95612685aecfc32a0ac1a5b90b94aff74f6c3b628aabf0&)');
    r.setProperty('--image2', 'url(https://cdn.discordapp.com/attachments/924981157819478096/1175526109832548496/XYKnowledgeLogoNegative.png?ex=656b8d00&is=65591800&hm=b0959e01d7bac1abe3514b8dbc70915ad2d51eef2224dbb4e5387e8b9e7456ee&)');
    r.setProperty('--backgroundimage', 'url(https://cdn.discordapp.com/attachments/924981157819478096/1175534856923517028/big_hexagonal_tiling.png?ex=656b9526&is=65592026&hm=f24bfdc8da3cccb0b47cfc70be195cbef6205b421b4e6ab8d6d06231b6c7debb&)');
    r.setProperty('--bgSize', '220%')
    r.setProperty('--mainFont', "'Work Sans', sans-serif");
} else if(txt == "XYK Studios"){
    r.setProperty('--white', '#ff8e00');
    r.setProperty('--black', '#002347');
    r.setProperty('--color1', '#003366');
    r.setProperty('--color2', '#013161');
    r.setProperty('--color3', '#fd7702');
    r.setProperty('--image1', 'url(https://media.discordapp.net/attachments/924981157819478096/1180951401577324554/XYKStudiosIcon.png?ex=657f49b3&is=656cd4b3&hm=f1af1dca8997e0b55eb21fe7e9c3737f0ffa5c2701d941ac95a5189e872f3979&=&format=webp&quality=lossless&width=725&height=671)');
    r.setProperty('--image2', 'url(https://cdn.discordapp.com/attachments/924981157819478096/1180976560430391406/XYKStudiosIconNegative.png?ex=657f6121&is=656cec21&hm=3c6bd47ed71cbf1d6aa73189c5d2f01603e59681d6c645df1b20eb4357b9ced2&)');
    r.setProperty('--backgroundimage', 'url(https://cdn.discordapp.com/attachments/924981157819478096/1180987444804456498/OrangeBlueTringularTiling.png?ex=657f6b44&is=656cf644&hm=309f67803e2297c7d52e8e95f8fe00a41226248c0cda00a2ce9353023a8f8e82&)');
    r.setProperty('--bgSize', '40%')
    r.setProperty('--mainFont', "'Work Sans', sans-serif");
} else{
    r.setProperty()
}

window.onscroll = (function(){
    console.log(window.scrollY);
    if(window.scrollY > 200){
        backBtn.style.visibility = "visible";
    }else{
        backBtn.style.visibility = "hidden";
    }
})

backBtn.onclick = function(){
    window.scrollTo(0,0);
}

console.log(txt);