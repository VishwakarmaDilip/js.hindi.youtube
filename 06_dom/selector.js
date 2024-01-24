/*
    query selector

    querry selector all
        document.querySelectorall('li')
        VM3948:1 Uncaught TypeError: document.querySelectorall is not a function
            at <anonymous>:1:10
        (anonymous) @ VM3948:1
        document.querySelectorAll('li')
        NodeList(3) [li, li, li]
        const tempLiList = document.querySelectorAll('li')
        undefined
        tempLiList.style.color = "green"
        VM4054:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
            at <anonymous>:1:24
        (anonymous) @ VM4054:1
        tempLiList[0].style.color = "green"
        'green'
        const myH1 = document
        undefined
        const myH1 = document.querysal
        undefined
        const myH1 = document.querySelectorAll('h1')
        undefined
        myH1
        NodeList [h1#title.heading]
        myH1.style.color = "green"
        VM4580:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
            at <anonymous>:1:18
        (anonymous) @ VM4580:1
        myH1[0].style.color = "green"
        'green'
        myH1[0].style.color = "red"
        'red'
        myH1[0].style.color = "green"
        'green'
    


    forEach
        const tempLiList = document.querySelectorAll('li')

        tempLiList.forEach(function (l) {
            l.style.backgroundColor = "green"
        })
    convert nodelist to Array
        document.getElementsByClassName('list_item')

        const tempclassList = document.getElementsByClassName('list_item')

        tempclassList

        Array.from(tempclassList)

        const myConvertedArray = Array.from(tempclassList)

        myConvertedArray.forEach((li)=>{
            li.style.color = "orange"
        })

    lets manipulate wikipedia page
        const myH2 = document.querySelectorAll('.mw-headline')
        myH2.forEach((h) => {
        h.style.color = 'red';
        h.style.backgroundColor = 'green';
        h.style.padding = '10px';
        h.innerText = "Dilip"
        })
*/