newCustomElement({
    name:"test",
    style:`
    color: red;
    font-size: 50px;
    `,
    code:`
    if(this.getAttribute('href')){
        this.addEventListener('click', () => location.href=this.getAttribute('href'));
    }
    `
})

newCustomElement({
    name:"google",
    style:`
    color: black;
    font-size: 64px;
    `
})
newCustomElement({
    name:"goog",
    style:`
    color: black;
    font-size: 64px;
    `,
    return:`
        <div>나는 바보입니다</div>
        <p>와드 많이 와주세요. </p>
    `
})
