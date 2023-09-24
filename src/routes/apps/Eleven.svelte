<script>
// @ts-nocheck
    function getTime(date) {
        var dt = new Date();
        const due = new Date(dt.getFullYear(), dt.getMonth(), dt.getHours() === 23 && dt.getMinutes() > 11 ? dt.getDate() + 1 : dt.getDate(), dt.getHours() > 11 ? 23 : 11, 11, 0);
        // var hours = date.getHours();
        // var minutes = date.getMinutes();
        // hours = hours % 12;
        // minutes = minutes < 10 ? '0'+minutes : minutes;

        let diff =(due.getTime() - dt.getTime()) / 1000;
        diff /= 60;
        const hours = Math.floor(diff / 60);
        const minutes = Math.ceil(diff % 60);
        let timeTo = `${hours} hours and ${minutes} minutes left`
        return timeTo
    }
</script>

<div>
    <span>
        {getTime(new Date())}
    </span>
</div>

<style>
    div {
        position: absolute;
        left:0;
        top: 0;
        display: flex;
        font-size: 1.4rem;
        color: white;
        font-weight: bold;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-image: url('./images/eleven-bg.png');
        background-repeat: no-repeat;
        background-size: cover;        
        background-position: center;
        width: 100vw;
        height: 100vh;
    }
</style>