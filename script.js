document.addEventListener('DOMContentLoaded', () => {
    let timer = document.getElementById("timer");
    detectSpentTime();
})

let detectSpentTime = function () {

    TimeMe.initialize({
        currentPageName: "index.html", // current page
        idleTimeoutInSeconds: 30 // seconds
    });

    // Retrieve time spent on current page
    // let timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();

    setInterval(() => {
        let date = new Date(null);
        let timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();

        date.setSeconds(timeSpentOnPage); // specify value for SECONDS here
        let timeSpentFormatted = date.toISOString().substr(11, 8);

        timer.textContent = timeSpentFormatted;



    }, 1000)


    // let startDate = new Date();
    // let elapsedTime = 0;

    // setInterval(() => {
    //     let r = startDate.getTime()
    //     console.log(r);
    // }, 1000)

    // const focus = function () {
    //     startDate = new Date();
    // };

    // const blur = function () {
    //     const endDate = new Date();
    //     const spentTime = endDate.getTime() - startDate.getTime();
    //     elapsedTime += spentTime;
    // };

    // const beforeunload = function () {
    //     const endDate = new Date();
    //     const spentTime = endDate.getTime() - startDate.getTime();
    //     elapsedTime += spentTime;

    //     // elapsedTime contains the time spent on page in milliseconds
    // };



    // window.addEventListener('focus', focus);
    // window.addEventListener('blur', blur);
    // window.addEventListener('beforeunload', beforeunload);
}