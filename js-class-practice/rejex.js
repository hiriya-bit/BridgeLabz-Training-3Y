function match(){
    // let text = "Hello";
    // let patterns =/[abcdh]/i;//true h present h isliye
    // let patterns =/[0-9]/;//agar number mil raha h string mein tabhi true dega otherwise false
    // let patterns =/[a-z]/;//true small letter present h 
//     let patterns =/[A-Z]/;//true capital letter present h isliye
//     console.log(patterns.test(text));
       let text = "hello bro"
    //    let patterns = /^hello/ //hello starting mein hona chahiye isliye true aaya ha
        let patterns = /hello$/ //last word check karega 
        console.log(patterns.test(text));

 }
match()