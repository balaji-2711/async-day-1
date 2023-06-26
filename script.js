let div = document.createElement("div");
let span = document.createElement("span");
span.innerHTML = "";
div.append(span);
document.body.append(div);

// Using the setTimeout to display 10 to 1 
setTimeout(() => {
    span.innerHTML = "10";
    setTimeout(() => {
        span.innerHTML = "9";
        setTimeout(() => {
            span.innerHTML = "8";
            setTimeout(() => {
                span.innerHTML = "7";
                setTimeout(() => {
                    span.innerHTML = "6";
                    setTimeout(() => {
                        span.innerHTML = "5";
                        setTimeout(() => {
                            span.innerHTML = "4";
                            setTimeout(() => {
                                span.innerHTML = "3";
                                setTimeout(() => {
                                    span.innerHTML = "2";
                                    setTimeout(() => {
                                        span.innerHTML = "1";

                                        // Inserting the word "Happy Independence Day"
                                        setTimeout(() => {
                                            span.innerHTML = "Happy Independence Day";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// 1000 is the time setted for 1 second of gap

