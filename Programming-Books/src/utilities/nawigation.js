
export const startViewTransition = () =>{
    if (decument.startViewTransition){
        window.navigation.addEventListener('navigate',(event) =>{
            const toUrl = new URL(event.destination.url)
    
            //extern page?
            if(location.origin != toUrl.origin) return
    
            //if its on the same page
            event.intercept({
                async handler (){
                    //load destination page
                    //using fetch to catch HTML
                    const response = await fetch(toUrl.pathname)//clean-coder
                    const text = await response.text()
                    //take just wht conten inside body tag
                    //using regex to get it
                    const [,data] = text.match(/<body>([\s\S]*)<\/body>/i)
    
                    console.log(data)
    
    
                    document.startViewTransition(() => {
                        //refresh view
                        document.getElementById('content').innerHTML = data
                        //scroll till sky
                        document.body.innerHTML = data
                        document.documentElement.scrollTop = 0
                    })
                }
            })
        })
    }
}